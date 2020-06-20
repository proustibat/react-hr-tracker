import React from 'react';
import MainSection from '../MainSection/MainSection';
import ExternalLink from '../ExternalLink/ExternalLink';

type SectionType = {
  id: number;
  title: string;
  paragraphs: Array<string>;
  docLink: string;
};

const data: Array<SectionType> = [
  {
    id: 0,
    title: 'Device',
    paragraphs: [
      'The physical Bluetooth device may be guaranteed to have some properties that the UA may not have received.',
    ],
    docLink:
      'https://webbluetoothcg.github.io/web-bluetooth/#global-device-properties',
  },
  {
    id: 1,
    title: 'Server',
    paragraphs: [
      'BluetoothRemoteGATTServer represents a GATT Server on a remote device.',
    ],
    docLink:
      'https://webbluetoothcg.github.io/web-bluetooth/#bluetoothgattremoteserver-interface',
  },
  {
    id: 2,
    title: 'Service',
    paragraphs: [
      'BluetoothRemoteGATTService represents a GATT Service, a collection of characteristics and relationships to other services that encapsulate the behavior of part of a device.',
    ],
    docLink:
      'https://webbluetoothcg.github.io/web-bluetooth/#bluetoothgattservice-interface',
  },
  {
    id: 3,
    title: 'Properties characteristics',
    paragraphs: [
      'BluetoothRemoteGATTCharacteristic represents a GATT Characteristic, which is a basic data element that provides further information about a peripheral’s service.',
      'Each BluetoothRemoteGATTCharacteristic exposes its characteristic properties through a BluetoothCharacteristicProperties object. These properties express what operations are valid on the characteristic.',
    ],
    docLink:
      'https://webbluetoothcg.github.io/web-bluetooth/#characteristicproperties-interface',
  },
];

const HomeContent = () => (
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
    {data.map(({ title, docLink, paragraphs, id }) => (
      <MainSection title={title} key={id}>
        {paragraphs.map((content, i) => (
          <p key={`${id}-${i}`}>{content}</p>
        ))}
        <ExternalLink url={docLink}>
          Learn more by reading the Draft Community Group Report
        </ExternalLink>
      </MainSection>
    ))}
  </main>
);

export default HomeContent;
