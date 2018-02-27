import React from 'react';
import PropTypes from 'prop-types';

import ArrowRight from 'assets/images/arrow-right.svg';
import ArrowRight1 from 'assets/images/arrow-right1.svg';

import Wrapper from './Wrapper';

function RectButton({
  color,
  title,
  width,
  rightMargin,
  border,
  onClick,
}) {
  return (
    <Wrapper
      color={color}
      title={title}
      rightMargin={rightMargin}
      width={width}
      border={border}
      onClick={onClick}
    >
      <p className="caption">{title}</p>
      <img alt={title} src={border ? ArrowRight1 : ArrowRight} />
    </Wrapper>
  );
}

RectButton.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  rightMargin: PropTypes.bool,
  width: PropTypes.number,
  border: PropTypes.bool,
  onClick: PropTypes.func,
};

RectButton.defaultProps = {
  color: '#FFF',
  rightMargin: false,
  width: 18,
  border: false,
  onClick: () => {},
};

export default RectButton;
