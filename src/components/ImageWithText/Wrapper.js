import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  color: #35447d;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${props => (props.noText ? 0 : '6rem')};
  .image {
    display: flex;
    height: ${props => `${props.imgHeight}rem`};
    img {
      height: 100%;
      width: auto;
      margin: auto;
    }
  }
  .circle-dot {
    align-items: center;
    background: #35447d;
    border-radius: 2.6rem;
    color: white;
    display: flex;
    font-size: 1.8rem;
    flex-direction: column;
    height: 2.6rem;
    position: absolute;
    top: -1.5rem;
    left: ${props => (props.noText ? '-3.5rem' : '5.5rem')};
    line-height: 2.6rem;
    width: 2.6rem;
    text-align: center;
  }
  .description {
    font-size: 1.8rem;
    max-width: 30rem;
    text-align: center;
    padding-top: 3.3rem;
  }
`;

export default Wrapper;
