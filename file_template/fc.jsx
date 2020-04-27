import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import s from './ClassName.scss';

const ClassName = ({ className }) => {
  return (
    <div className={classnames(s.root, className)}>
      
    </div>
  );
};

ClassName.propTypes = {
  className: PropTypes.string,
};

ClassName.defaultProps = {
  className: null,
};

export default ClassName;
