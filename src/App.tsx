import React from 'react';
import HomeHero from './components/HomeHero/HomeHero';
import MainSection from './components/MainSection/MainSection';
import './styles/main.scss';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <HomeHero />
      <main>
        <section className="section container">
          <div className="content">
            <h1 className="is-size-1 is-bold">Web Bluetooth API</h1>
            <p className="is-size-4">
              The Web Bluetooth API provides the ability to connect and interact
              with Bluetooth Low Energy peripherals.
            </p>
          </div>
        </section>

        <MainSection title="Device">
          <p>
            The physical Bluetooth device may be guaranteed to have some
            properties that the UA may not have received.
          </p>
          <a
            href="https://webbluetoothcg.github.io/web-bluetooth/#global-device-properties"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more by reading the Draft Community Group Report
          </a>
        </MainSection>

        <MainSection title="Server">
          <p>
            BluetoothRemoteGATTServer represents a GATT Server on a remote
            device.
          </p>
          <a
            href="https://webbluetoothcg.github.io/web-bluetooth/#bluetoothgattremoteserver-interface"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more by reading the Draft Community Group Report
          </a>
        </MainSection>

        <MainSection title="Service">
          <p>
            BluetoothRemoteGATTService represents a GATT Service, a collection
            of characteristics and relationships to other services that
            encapsulate the behavior of part of a device.
          </p>
          <a
            href="https://webbluetoothcg.github.io/web-bluetooth/#bluetoothgattservice-interface"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more by reading the Draft Community Group Report
          </a>
        </MainSection>

        <MainSection title="Properties">
          <p>
            BluetoothRemoteGATTCharacteristic represents a GATT Characteristic,
            which is a basic data element that provides further information
            about a peripheral’s service.
          </p>
          <p>
            Each BluetoothRemoteGATTCharacteristic exposes its characteristic
            properties through a BluetoothCharacteristicProperties object. These
            properties express what operations are valid on the characteristic.
          </p>
          <a
            href="https://webbluetoothcg.github.io/web-bluetooth/#characteristicproperties-interface"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more by reading the Draft Community Group Report
          </a>
        </MainSection>
      </main>
      <Footer />
    </div>
  );
};

export default App;
