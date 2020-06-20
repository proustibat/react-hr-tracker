import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeartbeat,
  faHeartBroken,
  faHeartRate,
  faHeartCircle,
} from '@fortawesome/pro-light-svg-icons';

export type HomeHeroIconProps = {
  heartRate?: number;
  deviceDisconnected?: boolean;
  isPaused?: boolean;
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
  const { heartRate } = props;
  return (
    <div className="home-hero-icon__wrapper">
      {
        <span className="home-hero-icon__wrapper_content">
          <FontAwesomeIcon
            className="home-hero-icon__wrapper_content_icon"
            size="8x"
            icon={
              (iconsRules.find(rule => rule.predicate(props)) || defaultIcon)
                .svg
            }
          />
          {heartRate && <strong className="has-text-light">{heartRate}</strong>}
        </span>
      }
    </div>
  );
};

export default HomeHeroIcon;
