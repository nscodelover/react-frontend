import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CloseIcon from 'assets/images/icons/close.svg';

const Wrapper = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

function CloseButton({ onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <img alt="close-button" src={CloseIcon} />
    </Wrapper>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
