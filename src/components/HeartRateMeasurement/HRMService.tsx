import React from 'react';
import { na } from '../../utils';

export type HRMServiceProps = {
  serviceIsPrimary?: boolean;
  serviceUuid?: string;
};

const HRMService = ({
  serviceIsPrimary,
  serviceUuid = na,
}: HRMServiceProps) => (
  <article className="tile content is-child notification has-background-grey-lighter has-text-primary">
    <h3 className="is-size-3">Service</h3>
    <ul>
      <li>
        Is Primary: <strong>{(serviceIsPrimary || na).toString()}</strong>
      </li>
      <li>
        UUID: <strong>{serviceUuid}</strong>
      </li>
    </ul>
  </article>
);

export default HRMService;
