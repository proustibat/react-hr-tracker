import React from 'react';
import HRMDevice, { HRMDeviceProps } from './HRMDevice';
import HRMServer, { HRMServerProps } from './HRMServer';
import HRMService, { HRMServiceProps } from './HRMService';
import HRMProperties, { HRMPropertiesProps } from './HRMProperties';

export type HeartRateMeasurementProps = HRMDeviceProps &
  HRMServerProps &
  HRMServiceProps &
  HRMPropertiesProps;

const TileColumn = ({ children }: { children: React.ReactNode }) => (
  <div className="tile is-parent is-half has-text-primary">
    <div className="tile notification is-parent is-vertical">{children}</div>
  </div>
);

const HeartRateMeasurement = ({
  deviceName,
  deviceId,
  isPaired,
  onUnPair,
  serverConnected,
  deviceHasBeenDisconnected,
  serviceIsPrimary,
  serviceUuid,
  properties,
}: HeartRateMeasurementProps) => (
  <div className="tile is-ancestor has-text-left">
    <TileColumn>
      <HRMDevice
        deviceName={deviceName}
        deviceId={deviceId}
        onUnPair={onUnPair}
        isPaired={isPaired}
      />
      <HRMServer
        serverConnected={serverConnected}
        deviceHasBeenDisconnected={deviceHasBeenDisconnected}
      />
      <HRMService
        serviceIsPrimary={serviceIsPrimary}
        serviceUuid={serviceUuid}
      />
    </TileColumn>
    <TileColumn>
      <HRMProperties properties={properties} />
    </TileColumn>
  </div>
);

export default HeartRateMeasurement;
