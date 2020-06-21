import React from 'react';
import { na } from '../../utils';

export type HRMPropertiesProps = {
  properties: BluetoothCharacteristicProperties | undefined;
};

const HRMProperties = ({ properties }: HRMPropertiesProps) => (
  <article className="tile content is-child notification has-background-grey-lighter">
    <h3 className="is-size-3">Properties</h3>
    <ul>
      <li>
        authenticatedSignedWrites:{' '}
        <strong>
          {properties?.authenticatedSignedWrites.toString() || na}
        </strong>
      </li>
      <li>
        broadcast: <strong>{properties?.broadcast.toString() || na}</strong>
      </li>
      <li>
        indicate: <strong>{properties?.indicate.toString() || na}</strong>
      </li>
      <li>
        notify: <strong>{properties?.notify.toString() || na}</strong>
      </li>
      <li>
        read: <strong>{properties?.read.toString() || na}</strong>
      </li>
      <li>
        reliableWrite:{' '}
        <strong>{properties?.reliableWrite.toString() || na}</strong>
      </li>
      <li>
        writableAuxiliaries:{' '}
        <strong>{properties?.writableAuxiliaries.toString() || na}</strong>
      </li>
      <li>
        write: <strong>{properties?.write.toString() || na}</strong>
      </li>
      <li>
        writeWithoutResponse:{' '}
        <strong>{properties?.writeWithoutResponse.toString() || na}</strong>
      </li>
    </ul>
  </article>
);

export default HRMProperties;
