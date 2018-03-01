import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Picker from 'react-date-picker';

import CalendarIcon from 'assets/images/icons/calendar.svg';
import PrevIcon from 'assets/images/arrow-left.svg';
import NextIcon from 'assets/images/arrow-right.svg';

import Wrapper from './Wrapper';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  onChange = (date) => {
    this.setState({
      startDate: date,
    });
    this.props.onChange(date);
  }

  render() {
    const { hint, isRequired } = this.props;
    return (
      <Wrapper>
        {hint !== '' && <div>{hint}{isRequired && '*'}</div>}
        <Picker
          onChange={this.onChange}
          value={this.state.startDate}
          calendarIcon={<img alt="calendar-icon" src={CalendarIcon} />}
          prevLabel={<img alt="prev-icon" src={PrevIcon} />}
          nextLabel={<img alt="next-icon" src={NextIcon} />}
          next2Label={null}
          prev2Label={null}
          clearIcon={null}
        />
      </Wrapper>
    );
  }
}

DatePicker.propTypes = {
  hint: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  hint: '',
  isRequired: false,
};

export default DatePicker;
