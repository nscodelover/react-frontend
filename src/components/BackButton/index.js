import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ArrowUp from 'assets/images/arrow-up.svg';

const Wrapper = styled.div`
  width: 9.7rem;
  height: 4.5rem;
  color: #35447D;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
    text-decoration: underline;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

function BackButton({ onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <span>Back</span><img alt="arrow-up" src={ArrowUp} />
    </Wrapper>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default BackButton;
