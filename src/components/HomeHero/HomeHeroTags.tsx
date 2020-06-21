import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {
  faBluetooth,
  faCss3,
  faReact,
  faFontAwesome,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import { TagElementType, TagInfoType } from './types';

const tagList: TagInfoType[] = [
  {
    tagName: 'React',
    url: 'https://reactjs.org',
    icon: faReact,
  },
  {
    tagName: 'Bluetooth Web API',
    url: 'https://webbluetoothcg.github.io/web-bluetooth',
    icon: faBluetooth,
  },
  {
    tagName: 'Bulma',
    url: 'https://bulma.io',
    icon: faCss3,
  },
  {
    tagName: 'Font Awesome',
    url: 'https://fontawesome.com/icons/font-awesome',
    icon: faFontAwesome,
  },
  {
    tagName: 'View on Github',
    url: 'https://github.com/proustibat/react-hr-tracker',
    icon: faGithub,
  },
];

const TagElement = ({ url, children }: TagElementType) => {
  const CustomTag: any = `${url ? 'a' : 'span'}`;
  return (
    <CustomTag
      {...{
        className: 'tag is-dark',
        ...(url && { href: url, target: '_blank', rel: 'noopener noreferrer' }),
      }}
    >
      {children}
    </CustomTag>
  );
};

const HomeHeroTags = () => (
  <div className="field is-grouped is-grouped-multiline is-grouped-centered">
    {tagList.map(({ tagName, url, icon }) => (
      <div className="control" key={tagName}>
        <div className="tags has-addons">
          {icon && (
            <span className="tag">
              <FontAwesomeIcon color="#363636" size="lg" icon={icon} />
            </span>
          )}
          <TagElement url={url}>{tagName}</TagElement>
        </div>
      </div>
    ))}
  </div>
);

export default HomeHeroTags;
