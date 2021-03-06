import React from 'react';

import Icon from './heading.svg';
import layoutConstraint from '../layout-constraint';
import styles from './styles';

const Headline2 = ({ children }) => (
  <layoutConstraint.Component>
    <style jsx>{styles}</style>
    <h2 className="h2">{children}</h2>
  </layoutConstraint.Component>
);

export default {
  name: 'headline-2',
  label: 'Headline (Level 2)',
  Icon,
  styles,
  Component: ({ node, ...rest }) => <Headline2 data={node.data} {...rest} />,

  serialize: (node, children) => (
    <Headline2 data={node.data}>{children}</Headline2>
  )
};
