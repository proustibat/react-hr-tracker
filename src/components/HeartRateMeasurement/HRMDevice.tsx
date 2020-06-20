import React, { MouseEventHandler } from 'react';
import { na } from '../../utils';

export type HRMDeviceProps = {
  deviceName?: string;
  deviceId?: string;
  onUnPair?: MouseEventHandler;
  isPaired?: boolean;
};

const HRMDevice = ({
  deviceName = na,
  deviceId = na,
  onUnPair,
  isPaired,
}: HRMDeviceProps) => (
  <article className="tile content is-child notification has-background-grey-lighter has-text-primary">
    <h3 className="is-size-3">Device</h3>
    <ul>
      <li>
        Name: <strong>{deviceName}</strong>
      </li>
      <li>
        ID: <strong>{deviceId}</strong>
      </li>
    </ul>
    {isPaired && onUnPair && (
      <button onClick={onUnPair} className="delete mt-2 mr-2" />
    )}
  </article>
);

export default HRMDevice;
