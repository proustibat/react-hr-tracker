import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode } from 'react';
import {
  faBluetooth,
  faCss3,
  faReact,
  faFontAwesome,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

interface ITagInfo {
  tagName: string;
  url?: string;
  icon?: IconDefinition;
}
interface ITagElement {
  url?: string;
  children: ReactNode;
}

const tagList: ITagInfo[] = [
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
];

const TagElement = ({ url, children }: ITagElement) => {
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

const HomeHeroTags = () => {
  return (
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
};

export default HomeHeroTags;
