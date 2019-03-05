import React, { Fragment } from 'react';

import styles from './styles';

const Fonts = ({ children }) => (
  <Fragment>
    <style jsx global>
      {styles}
    </style>

    {children}
  </Fragment>
);

export default {
  name: 'fonts',
  private: true,
  styles,
  canEdit: false,
  Component: ({ node, ...rest }) => <Fonts data={node.data} {...rest} />,
  serialize: (node, children) => <Fonts data={node.data}>{children}</Fonts>,

  extract() {
    const promises = [

      'fa-brands-400.ttf',
      'fa-brands-400.woff',
      'fa-brands-400.woff2',
      'fa-regular-400.ttf',
      'fa-regular-400.woff',
      'fa-regular-400.woff2',
      'fa-solid-900.ttf',
      'fa-solid-900.woff',
      'fa-solid-900.woff2',

      'poppins.ttf',
      'poppins.woff',
      'poppins-bold.ttf',
      'poppins-bold.woff',
      'poppins-italic.ttf',
      'poppins-italic.woff',

      'lora.ttf',
      'lora.woff',
      'lora-bold.ttf',
      'lora-bold.woff',
      'lora-italic.ttf',
      'lora-italic.woff',
      'lora-bold-italic.ttf',
      'lora-bold-italic.woff'
    ].map(name =>
      fetch(`./assets/fonts/${name}`)
        .then(res => res.blob())
        .then(file => ({
          name,
          file,
          type: 'font'
        }))
    );

    return Promise.all(promises);
  }
};
