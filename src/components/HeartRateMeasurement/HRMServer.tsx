import React from 'react';
import { na } from '../../utils';

export type HRMServerProps = {
  serverConnected?: boolean;
  deviceHasBeenDisconnected?: boolean;
};

const HRMServer = ({
  serverConnected,
  deviceHasBeenDisconnected,
}: HRMServerProps) => (
  <article className="tile content is-child notification has-background-grey-lighter has-text-primary">
    <h3 className="is-size-3">Server</h3>
    <ul>
      <li>
        Connected: <strong>{(serverConnected || na).toString()}</strong>
      </li>
      <li>
        Disconnected:{' '}
        <strong>{(deviceHasBeenDisconnected || na).toString()}</strong>
      </li>
    </ul>
  </article>
);

export default HRMServer;
