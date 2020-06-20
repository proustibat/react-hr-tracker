import React from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Heart Rate Tracker</strong> by{' '}
        <ExternalLink url="https://twitter.com/proustibat">
          Jennifer Proust
        </ExternalLink>
        .<br />
        The source code is licensed{' '}
        <ExternalLink url="http://opensource.org/licenses/mit-license.php">
          MIT
        </ExternalLink>
        . The website content is licensed{' '}
        <ExternalLink url="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY NC SA 4.0
        </ExternalLink>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
