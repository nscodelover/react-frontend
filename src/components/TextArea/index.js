import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CheckIcon from 'assets/images/icons/check.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem 8.5rem;
  background: transparent;
  textarea {
    border: none;
    background: transparent;
    color: #35447d;
    outline: none;
    resize: none;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    &::placeholder {
      color: #35447d;
    }
  }
  .limit {
    display: flex;
    margin-top: 5rem;
    margin-left: -8.5rem;
    img {
      margin-left: 1rem;
    }
  }
`;

function TextArea({ limit, ...rest }) {
  return (
    <Wrapper>
      <textarea {...rest} />
      {
        limit !== 0 &&
        <div className="limit">
          {limit}<img alt="check-icon" src={CheckIcon} />
        </div>
      }
    </Wrapper>
  );
}

TextArea.propTypes = {
  limit: PropTypes.number,
};

TextArea.defaultProps = {
  limit: 0,
};

export default TextArea;
