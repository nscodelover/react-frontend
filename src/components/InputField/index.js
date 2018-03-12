import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Popup } from 'semantic-ui-react';

import HelpIcon from 'assets/images/icons/help-icon.svg';
import CalendarIcon from 'assets/images/icons/calendar.svg';
import VisaIcon from 'assets/images/icons/Visa-Light.svg';
import MasterCardIcon from 'assets/images/icons/MasterCard-light.svg';
import CVVIcon from 'assets/images/icons/cvv.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;
  padding-top: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #b7bbc0;
  .hint {
    font-size: 1.2rem;
    color: ${props => (props.disabled ? '#6c6c6c' : '#35447d')};
    padding-left: 5px;
  }
  .input-field {
    display: flex;
    align-items: center;
    .popup {
      background: red;
    }
    img {
      height: 2rem;
      margin-left: 3px;
    }
  }
`;

const InputWrapper = styled.input`
  font-family: UtopiaStd-Regular;
  color: ${props => (props.disabled ? '#6c6c6c' : '#35447d')};
  font-size: 2rem;
  height: 36px;
  flex: 1;
  outline: none;
  border: none;
  background: transparent;
  margin-top: -5px;
  ::placeholder {
    color: ${props => (props.disabled ? '#6c6c6c' : '#35447d')};
  }
`;

function InputField({
  hint,
  placeholder,
  isRequired,
  disabled,
  help,
  iconName,
  ...rest
}) {
  const requiredStr = placeholder !== '' && isRequired ? '*' : '';
  let icon;

  switch (iconName) {
    case 'calendar':
      icon = [CalendarIcon];
      break;
    case 'payment':
      icon = [VisaIcon, MasterCardIcon];
      break;
    case 'cvv':
      icon = [CVVIcon];
      break;
    default:
      break;
  }

  return (
    <Wrapper disabled={disabled} >
      {hint !== '' && <span className="hint">{hint}{isRequired && '*'}</span>}
      <div className="input-field">
        <InputWrapper placeholder={`${placeholder}${requiredStr}`} disabled={disabled} {...rest} />
        {help !== '' &&
          <Popup
            inverted
            trigger={<img alt="help-icon" src={HelpIcon} />}
            position="top center"
            content={help}
          />
        }
        {iconName !== '' &&
          icon.map(i =>
            <img alt="icon" src={i} />,
          )
        }
      </div>
    </Wrapper>
  );
}

InputField.propTypes = {
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  hasPopup: PropTypes.bool,
  disabled: PropTypes.bool,
  help: PropTypes.string,
  iconName: PropTypes.string,
};

InputField.defaultProps = {
  hint: '',
  isRequired: false,
  disabled: false,
  placeholder: '',
  hasPopup: false,
  help: '',
  iconName: '',
};

export default InputField;
