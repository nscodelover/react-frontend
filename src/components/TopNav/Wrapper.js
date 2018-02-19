import styled from 'styled-components';

function setHeight({ type }) {
  switch (type) {
    case 'home':
      return '6.6rem';
    case 'begin':
      return '3.8rem';
    default:
      return '6.6rem';
  }
}

function setWidth({ type }) {
  switch (type) {
    case 'home':
      return '26.3rem';
    case 'begin':
      return '15.3rem';
    default:
      return '26.3rem';
  }
}

const Wrapper = styled.div`
  background: ${props => (props.type === 'begin' ? '#35447d' : 'transparent')};
  align-items: center;
  display: flex;
  height: ${props => (props.type === 'begin' ? '9rem' : '15rem')};
  justify-content: space-between;
  padding: 0 7rem;

  .logo {
    height: ${props => setHeight(props)};
    margin-top:  ${props => (props.type === 'begin' ? '0' : '6rem')};
    width: ${props => setWidth(props)};
  }
`;

export default Wrapper;
