import React, { useState, MouseEvent } from 'react';
import HomeHeroTags from './HomeHeroTags';
import HomeHeroIcon from './HomeHeroIcon';
import HomeHeroButtons from './HomeHeroButtons';
import HeartRateMeasurement from '../HeartRateMeasurement/HeartRateMeasurement';

type HandleTogglePauseOptions = {
  forcePlay?: boolean;
  forceStop?: boolean;
};

type HandleTogglePauseArgs = HandleTogglePauseOptions | MouseEvent;

const HomeHero = () => {
  const [device, setDevice] = useState<BluetoothDevice>();
  const [deviceDisconnected, setDeviceDisconnected] = useState<boolean>(false);
  const gatt: BluetoothRemoteGATTServer | undefined = device?.gatt;

  const [isPairing, setIsPairing] = useState<boolean>(false);
  const [isPaired, setIsPaired] = useState<boolean>(false);

  const [isDisconnecting, setIsDisconnecting] = useState<boolean>(false);
  const [isDisconnected, setIsDisconnected] = useState<boolean>(false);

  const [isReconnecting, setIsReconnecting] = useState<boolean>(false);
  const [isReconnected, setIsReconnected] = useState<boolean>(false);

  const [isToggling, setIsToggling] = useState<boolean>(false);
  const [isPaused, setIsPause] = useState<boolean>(false);

  const [serverConnected, setServerConnected] = useState<boolean>(false);
  const [serviceIsPrimary, setServiceIsPrimary] = useState<boolean>(false);
  const [serviceUuid, setServiceUuid] = useState<string | undefined>(undefined);
  const [properties, setProperties] = useState<
    BluetoothCharacteristicProperties
  >();
  const [characteristic, setCharacteristic] = useState<
    BluetoothRemoteGATTCharacteristic
  >();
  const [heartRate, setHeartRate] = useState<number | undefined>(undefined);

  const connect = async (gatt: BluetoothRemoteGATTServer) => {
    // Server
    const server = await gatt.connect().catch((e: Error) => Promise.reject(e));
    setServerConnected(server.connected);

    // Service
    const service: BluetoothRemoteGATTService = await server
      .getPrimaryService('heart_rate')
      .catch((e: Error) => Promise.reject(e));
    setServiceIsPrimary(service.isPrimary);
    setServiceUuid(service.uuid);

    // Characteristic
    const bluetoothRemoteGATTCharacteristic: BluetoothRemoteGATTCharacteristic = await service
      .getCharacteristic('heart_rate_measurement')
      .catch((e: Error) => Promise.reject(e));
    setProperties(bluetoothRemoteGATTCharacteristic.properties);
    setCharacteristic(bluetoothRemoteGATTCharacteristic);

    // Trigger heart rate listening
    await handleTogglePause(bluetoothRemoteGATTCharacteristic)({
      forcePlay: true,
    }).catch((e: Error) => Promise.reject(e));

    return Promise.resolve(true);
  };

  const handleTogglePause = (
    characteristicToToggle: BluetoothRemoteGATTCharacteristic,
  ) => async (options?: HandleTogglePauseArgs) => {
    setIsToggling(true);

    return new Promise(async (resolve, reject) => {
      if (
        (!isPaused && !(options as HandleTogglePauseOptions)?.forcePlay) ||
        (options as HandleTogglePauseOptions)?.forceStop
      ) {
        if (serverConnected) {
          await characteristicToToggle
            .stopNotifications()
            .then((char: BluetoothRemoteGATTCharacteristic) => {
              char.oncharacteristicvaluechanged = () => {};
            })
            .catch((e: Error) => reject(e));
        }
        setHeartRate(undefined);
        setIsPause(true);
      } else if (isPaused || (options as HandleTogglePauseOptions)?.forcePlay) {
        characteristicToToggle.oncharacteristicvaluechanged = (e: Event) => {
          setIsPause(false);
          setDeviceDisconnected(false);
          setServerConnected(true);
          setHeartRate(
            (((e.target as HTMLTextAreaElement)
              ?.value as unknown) as DataView).getInt8(1),
          );
        };
        await characteristicToToggle
          .startNotifications()
          .catch((e: Error) => reject(e));
      }
      setIsToggling(false);
      resolve(true);
    });
  };

  const handleReconnect = async () => {
    setIsReconnecting(true);
    await connect(device?.gatt as BluetoothRemoteGATTServer)
      .then(() => {
        setIsReconnecting(false);
        setIsReconnected(true);
        setIsDisconnected(false);
      })
      .catch((e: Error) => {
        setIsReconnecting(false);
        alert(e);
      });
  };

  const onGattServerDisconnected = () => {
    setHeartRate(undefined);
    setProperties(undefined);
    setServiceUuid(undefined);
    setServiceIsPrimary(false);
    setIsPause(false);
    setIsDisconnecting(false);
    setIsDisconnected(true);
    setServerConnected(false);
    setDeviceDisconnected(true);
    setIsReconnected(false);
  };

  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    await handleTogglePause(
      characteristic as BluetoothRemoteGATTCharacteristic,
    )({ forceStop: true }).catch((e: Error) => Promise.reject(e));

    if (gatt?.connected) {
      gatt.disconnect();
    }
  };

  const handleUnPair = async () => {
    await handleTogglePause(
      characteristic as BluetoothRemoteGATTCharacteristic,
    )({ forceStop: true }).catch((e: Error) => Promise.reject(e));

    if (device && gatt) {
      device.ongattserverdisconnected = async () => {
        onGattServerDisconnected();
        setDeviceDisconnected(false); // for icon;
        setServerConnected(false);
      };
      gatt.disconnect();
    }

    setDeviceDisconnected(false); // for icon;
    setServerConnected(false);
    setDevice(undefined);
    setIsPaired(false);
  };

  const handlePair = async () => {
    //TODO check availability of bluetooth

    setIsPairing(true);
    const services: BluetoothServiceUUID[] = ['heart_rate'];
    const filters: BluetoothRequestDeviceFilter[] = [{ services }];
    const options: RequestDeviceOptions = { filters };

    // @ts-ignore
    const requestedDevice: BluetoothDevice = await navigator.bluetooth
      .requestDevice(options)
      .catch((e: Error) => alert(e));

    if (requestedDevice) {
      requestedDevice.ongattserverdisconnected = onGattServerDisconnected;
      setDevice(requestedDevice);

      const result = await connect(
        requestedDevice?.gatt as BluetoothRemoteGATTServer,
      ).catch((e: Error) => alert(e));

      if (result) {
        setIsDisconnected(false);
        setIsReconnected(true);
        setIsPaired(true);
      }
    }
    setIsPairing(false);
  };

  return (
    <div className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Heart Rate Tracker</h1>
          <h2 className="subtitle">Using Bluetooth Smart Sensor</h2>

          <HomeHeroTags />

          <HomeHeroIcon
            heartRate={heartRate}
            deviceDisconnected={deviceDisconnected}
            isPaused={
              serverConnected &&
              characteristic &&
              device &&
              !isPairing &&
              isPaused
            }
          />

          <HomeHeroButtons
            isPairing={isPairing}
            handlePair={handlePair}
            isPaired={isPaired}
            isDisconnecting={isDisconnecting}
            handleDisconnect={handleDisconnect}
            isDisconnected={isDisconnected}
            isReconnecting={isReconnecting}
            handleReconnect={handleReconnect}
            isReconnected={isReconnected}
            isToggling={isToggling}
            handleTogglePause={handleTogglePause(
              characteristic as BluetoothRemoteGATTCharacteristic,
            )}
            isPaused={isPaused}
          />

          <HeartRateMeasurement
            deviceName={device?.name}
            deviceId={device?.id}
            onUnPair={handleUnPair}
            isPaired={isPaired}
            serverConnected={serverConnected}
            deviceHasBeenDisconnected={deviceDisconnected}
            serviceIsPrimary={serviceIsPrimary}
            serviceUuid={serviceUuid}
            properties={properties}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
