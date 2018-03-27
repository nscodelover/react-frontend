import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  .title {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 3.6rem;
    color: #35447d;
    letter-spacing: 1px;
    span {
      font-weight: bold;
    }
    span.small {
      font-weight: lighter;
      font-size: 2.5rem;
    }
  }
  .shape {
    width: 16rem;
    height: 2rem;
    background: #8aebf1;
    margin-top: -1.8rem;
    margin-left: -2.3rem;
    z-index: -1;
  }
  .subTitle {
    margin-top: 3rem;
    font-weight: lighter;
    font-size: 2.2rem;
    padding: 0;
    color: #35447d;
    margin-bottom: 0;
  }
`;

function TitleWithShape({ title, subTitle, size }) {
  return (
    <Wrapper size={size}>
      <h1 className="title">{title}</h1>
      <div className="shape" />
      {subTitle !== '' && <h4 className="subTitle">{subTitle}</h4>}
    </Wrapper>
  );
}

TitleWithShape.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  size: PropTypes.number,
};

TitleWithShape.defaultProps = {
  title: '',
  subTitle: '',
  size: '3.6rem',
};

export default TitleWithShape;