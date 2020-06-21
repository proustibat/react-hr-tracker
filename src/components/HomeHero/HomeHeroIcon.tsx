import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faHeartBroken,
  faHeartRate,
  faHeartCircle,
} from '@fortawesome/pro-light-svg-icons';

type HomeHeroIconProps = {
  heartRate?: number;
  deviceDisconnected?: boolean;
  isPaused?: boolean;
  className?: string;
};

const iconsRules = [
  {
    predicate: ({ heartRate }: HomeHeroIconProps) => heartRate,
    svg: faHeartbeat,
  },
  {
    predicate: ({ isPaused }: HomeHeroIconProps) => isPaused,
    svg: faHeartCircle,
  },
  {
    predicate: ({ deviceDisconnected }: HomeHeroIconProps) =>
      deviceDisconnected,
    svg: faHeartBroken,
  },
];

const defaultIcon = { svg: faHeartRate };

const HomeHeroIcon = (props: HomeHeroIconProps) => {
  const { heartRate, className } = props;
  return (
    <div className={className}>
      {
        <span className="home-hero-icon__wrapper_content">
          <FontAwesomeIcon
            size="8x"
            icon={
              (iconsRules.find(rule => rule.predicate(props)) || defaultIcon)
                .svg
            }
          />
          {heartRate && (
            <strong className="has-text-light ml-2">{heartRate}</strong>
          )}
        </span>
      }
    </div>
  );
};

export default HomeHeroIcon;
