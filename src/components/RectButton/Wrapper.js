import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  border: ${props => (props.border && '2px solid #8AEBF1')};
  background: ${props => (!props.border && props.color)};
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  height: 4.5rem;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: ${props => (props.rightMargin ? '2rem' : 0)};
  padding: 0 2rem;
  width: ${props => `${props.width}rem`};
  .caption {
    color: ${props => (props.border ? '#8AEBF1' : '#35447d')};
    font-weight: 600;
    margin: 0;
  }
  img {
    width: 1.7em;
    height: 1.7em;
  }
`;

export default Wrapper;
