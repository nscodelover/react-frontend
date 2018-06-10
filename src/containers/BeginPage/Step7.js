import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import HelpText from 'components/HelpText';
import InputField from 'components/InputField';
import BackButton from 'components/BackButton';

import CloseIcon from 'assets/images/icons/close.svg';

const Wrapper = styled.div`
  color: #35447d;
  display: flex;
  justify-content: space-between;
  padding-left: 5.4rem;
  padding-right: 16rem;
  margin-top: 7.1rem;
  .form-wrapper {
    background: #F8F7F3;
    width: 66rem;
    height: 80rem;
    position: relative;
    padding: 11rem 10rem;
    .bar-wrapper {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      top: 3rem;
      right: 2.5rem;
      left: 2.5rem;
    }
    .content {
      margin-top: 5rem;
      display: flex;
      position: absolute;
      .preference {
        width: 36rem;
        background: #e1e1e1;
        padding: 2rem 4rem 4.5rem 4rem;
        margin-right: 2rem;
        .header {
          display: flex;
          justify-content: flex-end;
          margin-right: -2rem;
        }
        .name {
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }
        .times {
          display: flex;
          justify-content: space-between;
        }
      }
      .next-button {
        margin-top: 5rem;
        display: flex;
        justify-content: flex-end;
      }
    }
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 40rem;
    }
  }
  .info-wrapper {
    margin-top: 6rem;
    width: 36rem;
    h3 {
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
 
  @media only screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    .form-wrapper {
      height: auto;
      .content {
        position: relative;
        flex-direction: column;
        align-items: center;
        .preference {
          margin-bottom: 2rem;
        }
      }
      .button-wrapper {
        margin-top: 8rem;
      }
    }
    .info-wrapper {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
  
  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    .form-wrapper {
      height: auto;
      .description {
        width: auto;
      }
    }    
  }
`;

class Step7 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      onBack,
      onNext,
      totalStep,
      currentStep,
    } = this.props;
    return (
      <Wrapper>
        <div className="form-wrapper">
          <div className="bar-wrapper">
            <BackButton onClick={onBack} />
            <ProgressBar total={totalStep} current={currentStep} />
          </div>
          <TitleWithShape
            title="Book a video conference"
            subTitle="Please select up 3 preferences for when you would like to speak to
            solicitor, to discss your question and diagnose your legal issues."
          />
          <div className="content">
            <div className="preference">
              <div className="header">
                <img alt="close-button" src={CloseIcon} />
              </div>
              <div className="name">Preference #1</div>
              <InputField hint="Date*" iconName="calendar" />
              <div className="times">
                <InputField hint="Between" style={{ width: '11rem' }} />
                <InputField hint="And" style={{ width: '11rem' }} />
              </div>
            </div>
            <div className="preference">
              <div className="header">
                <img alt="close-button" src={CloseIcon} />
              </div>
              <div className="name">Preference #2</div>
              <InputField hint="Date*" iconName="calendar" />
              <div className="times">
                <InputField hint="Between" style={{ width: '11rem' }} />
                <InputField hint="And" style={{ width: '11rem' }} />
              </div>
            </div>
            <div className="preference">
              <div className="header">
                <img alt="close-button" src={CloseIcon} />
              </div>
              <div className="name">Preference #3</div>
              <InputField hint="Date*" iconName="calendar" />
              <div className="times">
                <InputField hint="Between" style={{ width: '10rem' }} />
                <InputField hint="And" style={{ width: '10rem' }} />
              </div>
            </div>
          </div>
          <div className="button-wrapper" >
            <IconButton
              width={24}
              name="Proceed to checkout"
              icon="rightArrow"
              onClick={onNext}
              selected
              noBorder
            />
          </div>
        </div>
        <div className="info-wrapper">
          <HelpText>You're almost done</HelpText>
          <h3>After you select your preferences for a video conference,
            you can finalise your payment.
          </h3>
        </div>
      </Wrapper>
    );
  }
}

Step7.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step7;
