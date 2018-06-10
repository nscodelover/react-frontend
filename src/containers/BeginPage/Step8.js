import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import InputField from 'components/InputField';

const Wrapper = styled.div`
  color: #35447d;
  padding-left: 5.4rem;
  padding-right: 16rem;
  padding-top: 6.8rem;
  .page-title {
    padding-left: 11rem;
  }
  .form-wrapper {
    display: flex;
    margin-top: 9rem;
    .left-pane {
      background: #F8F7F3;
      width: 66rem;
      position: relative;
      padding: 11rem 10rem;
      .content {
        margin-top: 2rem;
        .expiry {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .right-pane {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      .detail {
        height: 14rem;
        width: 45rem;
        display: flex;
        align-items: center;
        padding: 3rem 3rem;
        background: #e1e1e1;
        justify-content: space-between;
        p {
          font-size: 2.8rem;
          padding: 0;
          margin: 0;
        }
        h1 {
          padding: 0;
          margin: 0;
          font-size: 4.5rem;
        }
        h4 {
          padding: 0;
          margin: 0;
          font-size: 1.8rem;
        }
      }
    }
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 5rem;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-left: 0;
    padding-right: 0;
    margin: auto;
    .form-wrapper {
      flex-direction: column-reverse;
      margin-left: auto;
      margin-right: auto;
      align-items: center;
      .left-pane {
        margin-top: 5rem;
      }
      .right-pane {
        justify-content: center;
      }
    }
  }
`;

class Step9 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { onNext } = this.props;
    return (
      <Wrapper>
        <div className="page-title">
          <TitleWithShape
            title="Confirm payment now to get quick legal advice"
          />
        </div>
        <div className="form-wrapper">
          <div className="left-pane">
            <TitleWithShape
              title="Payment details"
            />
            <div className="content">
              <InputField placeholder="Card number" isRequired iconName="payment" />
              <InputField placeholder="Name on card" isRequired />
              <div className="expiry">
                <InputField placeholder="Expiry (MM/YY)" isRequired />
                <InputField placeholder="CVV Code" isRequired iconName="cvv" />
              </div>
              <InputField placeholder="Postcode" isRequired />
            </div>
            <div className="button-wrapper" >
              <IconButton
                width={24}
                name="Pay Now"
                icon="rightArrow"
                onClick={onNext}
                selected
                noBorder
              />
            </div>
          </div>
          <div className="right-pane">
            <div className="detail">
              <p>Total due today</p>
              <div>
                <h1>$880</h1>
                <h4>incl.GST</h4>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

Step9.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default Step9;
