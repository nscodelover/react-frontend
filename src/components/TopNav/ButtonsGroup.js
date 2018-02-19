import styled from 'styled-components';

const ButtonsGroup = styled.div`
  align-items: center;
  display: flex;
  div {
    margin-left: 2rem;
  }
  .button {
    display: none !important;
  }

  @media only screen and (max-width: 992px) {
  /* For Desktop: */
    a {
      display: none;
    }
    div {
      display: none;
    }
    .button {
      display: block !important;
    }
  }
`;

export default ButtonsGroup;
