import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import InputField from 'components/InputField';
import HelpText from 'components/HelpText';
import BackButton from 'components/BackButton';

const Wrapper = styled.div`
  color: #35447d;
  display: flex;
  justify-content: space-between;
  padding-left: 5.4rem;
  padding-right: 16rem;
  margin-top: 7.1rem;
  .form-wrapper {
    background: #e1e1e1;
    width: 66rem;
    height: 114.2rem;
    position: relative;
    .bar-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 3rem;
      padding-right: 3.7rem;
      padding-left: 3.7rem;
    }
    .form-title {
      margin-top: 6.2rem;
      margin-left: 10.3rem;
    }
    .button-wrapper {
      margin-top: 4rem;
      display: flex;
      margin-left: 10.3rem;
    }
    .fields {
      position: absolute;
      padding: 5rem 8.5rem;
      background: #f8f7f3;
      width: 64.4rem;
      top: 34.6rem;
      left: 10.6rem;
      .options-wrapper {
        margin-top: 4rem;
        display: flex;
        margin-bottom: 6rem;
      }
      .next-button {
        margin-top: 8rem;
        margin-bottom: 4rem;
        display: flex;
        justify-content: flex-end;
      }
      h1 {
        font-weight: normal;
        margin-top: 4rem;
      }
    }
  }
  .info-wrapper {
    margin-top: 35.6rem;
    width: 36rem;
  }
  @media only screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
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
      .fields {
        position: relative;
        width: 80%;
        left: 0;
        top: 4rem;
        margin: auto;
      }
    }    
  }
`;

class Step2 extends Component {
  constructor() {
    super();

    this.state = {
      option: -1,
      option1: -1,
      option2: -1,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onOptionClick = (option) => {
    this.setState({ option });
  }

  onUnsureResultClick = (option1) => {
    this.setState({ option1 });
  }

  onSureResultClick = (option2) => {
    this.setState({ option2 });
  }

  render() {
    const {
      onBack,
      onNext,
      totalStep,
      currentStep,
    } = this.props;
    const { option, option1, option2 } = this.state;
    return (
      <Wrapper>
        <div className="form-wrapper">
          <div className="bar-wrapper">
            <BackButton onClick={onBack} />
            <ProgressBar total={totalStep} current={currentStep} inverse />
          </div>
          <div className="form-title">
            <TitleWithShape
              title="Are you currently involved in court proceedings?"
            />
          </div>
          <div className="button-wrapper">
            <IconButton
              name="Yes"
              icon="downArrow"
              width={15.3}
              rightMargin={1.5}
              onClick={() => this.onOptionClick(1)}
              selected={option === 1}
            />
            <IconButton
              name="No"
              icon="no"
              width={15.3}
              rightMargin={1.5}
              onClick={() => this.onOptionClick(2)}
              selected={option === 2}
            />
            <IconButton
              name="Unsure"
              icon="unsure"
              width={15.3}
              onClick={() => this.onOptionClick(3)}
              selected={option === 3}
            />
          </div>
          <div className="fields">
            {
              option === 3 ?
                <div>
                  <h1>How likelyis it?*</h1>
                  <div className="options-wrapper">
                    <IconButton
                      name="Remote"
                      icon="circle"
                      rightMargin={1.5}
                      onClick={() => this.onUnsureResultClick(1)}
                      selected={option1 === 1}
                    />
                    <IconButton
                      name="Likely"
                      icon="circle"
                      rightMargin={1.5}
                      onClick={() => this.onUnsureResultClick(2)}
                      selected={option1 === 2}
                    />
                    <IconButton
                      name="Unsure"
                      icon="circle"
                      onClick={() => this.onUnsureResultClick(3)}
                      selected={option1 === 3}
                    />
                  </div>
                  <InputField placeholder="When would it start?" isRequired />
                </div>
                :
                <div>
                  <InputField hint="Court Name" />
                  <InputField placeholder="Proceedings number" />
                  <InputField placeholder="Who represents the other parties" />
                  <h1>Which party are you?*</h1>
                  <div className="options-wrapper">
                    <IconButton
                      name="Plaintiff"
                      icon="circle"
                      rightMargin={1.5}
                      onClick={() => this.onSureResultClick(1)}
                      selected={option2 === 1}
                    />
                    <IconButton
                      name="Defendant"
                      icon="circle"
                      rightMargin={1.5}
                      onClick={() => this.onSureResultClick(2)}
                      selected={option2 === 2}
                    />
                    <IconButton
                      name="Other"
                      icon="circle"
                      onClick={() => this.onSureResultClick(3)}
                      selected={option2 === 3}
                    />
                  </div>
                  <InputField placeholder="Other" isRequired />
                </div>
            }
            <div className="next-button">
              <IconButton
                name="Next"
                icon="downArrow"
                onClick={onNext}
                selected
                noBorder
              />
            </div>
          </div>
        </div>
        <div className="info-wrapper">
          <HelpText>Your court name and proceedings number should be listed on your summons document.</HelpText>
        </div>
      </Wrapper>
    );
  }
}

Step2.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step2;
