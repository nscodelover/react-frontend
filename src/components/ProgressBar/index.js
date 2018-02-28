import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 39rem;
`;

const Bar = styled.div`
  display: flex;
  height: 3px;
  flex: 1;
  margin-right: 5px;
  .done {
    background: #35447d;
    flex: ${props => (props.current / props.total) * 100};
  }
  .remain {
    background: ${props => (props.inverse ? '#f8f7f3' : '#e1e1e1')};
    flex: ${props => 100 - ((props.current / props.total) * 100)};
  }
`;

function ProgressBar({ total, current, inverse }) {
  return (
    <Wrapper>
      <Bar
        total={total}
        current={current}
        inverse={inverse}
      >
        <div className="done" />
        <div className="remain" />
      </Bar>
      <span>{parseInt((current / total) * 100, 10)}%</span>
    </Wrapper>
  );
}

ProgressBar.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  inverse: PropTypes.bool,
};

ProgressBar.defaultProps = {
  inverse: false,
};

export default ProgressBar;
