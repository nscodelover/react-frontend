import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import HelpText from 'components/HelpText';
import TextArea from 'components/TextArea';
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
    height: 110rem;
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
      background: #f8f7f3;
      width: 64.4rem;
      top: 22.5rem;
      left: 10.6rem;
      height: 64.4rem;
    }
    .next-button {
      margin-top: 80rem;
      margin-right: 10rem;
      display: flex;
      justify-content: flex-end;
    }
  }
  .info-wrapper {
    margin-top: 6rem;
    width: 36rem;
    h4 {
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
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
      .next-button {
        margin-top: 4rem;
        padding: 5rem 0;
      }
    }    
  }
`;

class Step4 extends Component {
  constructor() {
    super();

    this.state = { limit: 2000 };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChange = (e) => {
    this.setState({ limit: 2000 - e.target.value.length });
  }

  render() {
    const {
      onBack,
      onNext,
      totalStep,
      currentStep,
    } = this.props;
    const { limit } = this.state;
    return (
      <Wrapper>
        <div className="form-wrapper">
          <div className="bar-wrapper">
            <BackButton onClick={onBack} />
            <ProgressBar total={totalStep} current={currentStep} inverse />
          </div>
          <div className="form-title">
            <TitleWithShape
              title="What is your question?"
            />
          </div>
          <div className="fields">
            <TextArea
              placeholder="Please type your question here..."
              onChange={this.onChange}
              cols="50"
              limit={limit}
            />
          </div>
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
        <div className="info-wrapper">
          <HelpText>To ensure that you receive the most benefit from the answer we
            provide, please try to be precise with your question.
          </HelpText>
          <h4>You can provide context to your question by uploading relevant documents and completing a timeline of events. <br />
          A solicitor will assist you to refine your question, during a video conference, after you complete this process.
          </h4>
        </div>
      </Wrapper>
    );
  }
}

Step4.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step4;
