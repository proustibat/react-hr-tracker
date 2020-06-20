import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Heart Rate Tracker</strong> by{' '}
        <a
          href="https://twitter.com/proustibat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jennifer Proust
        </a>
        .<br />
        The source code is licensed{' '}
        <a
          href="http://opensource.org/licenses/mit-license.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT
        </a>
        . The website content is licensed{' '}
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC BY NC SA 4.0
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
