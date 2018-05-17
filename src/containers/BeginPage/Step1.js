import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';
import InputField from 'components/InputField';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import HelpText from 'components/HelpText';

const Wrapper = styled.div`
  .title-wrapper {
    margin: 6.8rem 35rem 7.1rem 16rem;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding-left: 5.4rem;
    padding-right: 16rem;
    margin-top: 7.1rem;
    .form-wrapper {
      background: #f8f7f3;
      width: 66rem;
      padding-bottom: 6rem;
      .bar-wrapper {
        display: flex;
        justify-content: flex-end;
        padding-top: 3rem;
        padding-right: 3.7rem;
      }
      .form-title {
        margin-top: 6.2rem;
        margin-left: 10.3rem;
      }
      .fields {
        margin-top: 6rem;
        margin-left: auto;
        margin-right: auto;
        width: 45.5rem;
        .button-wrapper {
          margin-top: 4rem;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
    .info-wrapper {
      margin-top: 6rem;
      width: 36rem;
    }
  }

  @media only screen and (max-width: 1400px) {
    .title-wrapper {
      margin: 4rem 6rem;
    }
    .content {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      margin: 0;
      padding: 0;
      .info-wrapper {
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
`;

class Step1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { onNext, totalStep, currentStep } = this.props;
    return (
      <Wrapper>
        <div className="title-wrapper">
          <TitleWithShape
            title={<div><span>Before you begin</span> make sure you have digital copies of all 
              documentation relevant to your question.</div>}
            subTitle={<div>This could include Court documents, correspondence, agreements, leases,<br/> 
              demands, invoices, or any other relevant documents.</div>}
          />
        </div>
        <div className="content">
          <div className="form-wrapper">
            <div className="bar-wrapper">
              <ProgressBar total={totalStep} current={currentStep} />
            </div>
            <div className="form-title">
              <TitleWithShape
                title="Contact info"
              />
            </div>
            <div className="fields">
              <InputField hint="Name" isRequired />
              <InputField hint="Email" isRequired />
              <InputField hint="Phone" isRequired />
              <InputField placeholder="Name of entity you are representing" isRequired />
              <InputField placeholder="Your role/relationship to above" isRequired />
              <div className="button-wrapper">
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
            <HelpText>Please enter your relevat personal information.</HelpText>
          </div>
        </div>
      </Wrapper>
    );
  }
}

Step1.propTypes = {
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step1;
