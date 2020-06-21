import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

type CustomTooltipPayloadItemType = {
  dataKey: string;
  name: string;
  value: string;
};

type CustomTooltipProps =
  | {
      active?: boolean;
      payload?: CustomTooltipPayloadItemType[];
    }
  | any;

const CustomTooltip = ({ active, payload }: CustomTooltipProps) =>
  active &&
  payload.map(
    ({ name, value, dataKey }: CustomTooltipPayloadItemType) =>
      dataKey === 'hr' && (
        <div className="control" key={dataKey}>
          <div className="tags has-addons">
            <span className="tag is-danger is-medium">
              <FontAwesomeIcon size="sm" icon={faHeart} color="#fff" />
            </span>
            <span className="tag is-light is-medium">
              {`${name}: `}
              <strong>{value}</strong>
            </span>
          </div>
        </div>
      ),
  );

export default CustomTooltip;
