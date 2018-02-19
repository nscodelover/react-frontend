import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`
  color: ${props => (props.active && props.noBorder ? '#8aebf1' : 'white')};
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
  ${props => (props.active && !props.noBorder &&
    `border-bottom: 3px solid #8aebf1;
    margin-bottom: -3px;`
  )};
  &:hover {
    color: ${props => (props.active ? 'white' : '#8aebf1')};
  }
`;

LinkButton.propTypes = {
  active: PropTypes.bool,
};

LinkButton.defaultProps = {
  active: false,
};

export default LinkButton;