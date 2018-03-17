import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: solid 1px #35447d;
  color: #35447d;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: ${props => (props.rightMargin ? '2rem' : 0)};
  padding-bottom: 1px;
`;

export default Wrapper;
