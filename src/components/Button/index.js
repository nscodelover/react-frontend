import React from 'react';

import Wrapper from './Wrapper';

function Button({ name, rightMargin, onClick }) {
  return (
    <Wrapper rightMargin={rightMargin} onClick={onClick}>
      {name}
    </Wrapper>
  );
}

export default Button;