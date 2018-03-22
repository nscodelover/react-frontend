import React from 'react';
import styled from 'styled-components';

import HelpIcon from 'assets/images/icons/help-icon.svg';

const Wrapper = styled.div`
  img {
    width: 3rem;
    height: 3rem;
  }
  .text {
    color: #35447d;
    font-size: 2.8rem;
  } 
`;

function HelpText({ children }) {
  return (
    <Wrapper>
      <img alt="info-icon" src={HelpIcon} />
      <p className="text">{children}</p>
    </Wrapper>
  );
}

export default HelpText;
