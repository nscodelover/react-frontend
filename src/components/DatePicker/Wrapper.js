import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  .react-date-picker__button {
    height: 3rem;
    border: none;
    border-bottom: 1px solid #35447d;
    .react-date-picker__button__input {
      input {
        background: transparent;
        color: #35447d;
      }
    }
  }
  .react-calendar__tile--active {
    background: #35447d;
  }
  .react-date-picker__button__input__month {
    width: 3rem !important;
    text-align: center;
    font-size: 2rem;
  }
  .react-date-picker__button__input__day {
    width: 3rem !important;
    text-align: center;
    font-size: 2rem;
  }
  .react-date-picker__button__input__year {
    width: 5rem !important;
    text-align: center;
    font-size: 2rem;
  }
`;

export default Wrapper;
