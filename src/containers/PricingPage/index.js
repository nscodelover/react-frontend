import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SidebarContainer from 'containers/SidebarContainer';

import PageHeader from 'components/PageHeader';
import Footer from 'components/Footer';
import RectButton from 'components/RectButton';
import TitleWithShape from 'components/TitleWithShape';

import ArrowDownImg from 'assets/images/arrow-down.svg';
import GreenYesImg from 'assets/images/yes-green.svg';
import RedYesImg from 'assets/images/yes-red.svg';
import GreenNoImg from 'assets/images/no-green.svg';
import RedNoImg from 'assets/images/no-red.svg';
import JudgeApprovedImg from 'assets/images/judge-approved-reverse.svg';
import DocumentsImg from 'assets/images/additional-document.svg';
import ConferenceImg from 'assets/images/conference-1-col.svg';
import AttachmentImg from 'assets/images/Attachments.svg';

import Wrapper from './Wrapper';

class PricingPage extends Component {
  constructor() {
    super();
    this.state = { isVisible: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSidebar = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const { history } = this.props;
    const { isVisible } = this.state;

    return (
      <SidebarContainer
        visible={isVisible}
        page="pricing"
      >
        <Wrapper>
          <PageHeader page="pricing" handleSidebar={this.handleSidebar} />
          <div className="content">
            <table >
              <tr>
                <td className="block first" />
                <td className="block second">
                  <h1 className="title">Our<br />approach</h1>
                  <div className="shape" />
                  <h1 className="title">$880</h1>
                  <p className="unit">per question</p>
                </td>
                <td className="block third">
                  <h1 className="title">Traditional<br />approach</h1>
                  <div className="shape second" />
                  <h1 className="title">$3,000+</h1>
                  <p className="unit">per question</p>
                </td>
              </tr>
              <tr>
                <td className="block">
                  <p className="label">Who performs the work</p>
                </td>
                <td className="block second border">
                  <div className="inline">
                    <img className="icon" alt="arrow-down" src={ArrowDownImg} />
                    <p className="label">Skip</p>
                  </div>
                </td>
                <td className="block third border">
                  <p className="label third">
                    Junior solicitors and paralegals<br />
                    <span className="price third">$180 - $275</span> per hour
                  </p>
                </td>
              </tr>
              <tr>
                <td className="block" />
                <td className="block second border">
                  <div className="inline">
                    <img className="icon" alt="arrow-down" src={ArrowDownImg} />
                    <p className="label">Skip</p>
                  </div>
                </td>
                <td className="block third border">
                  <p className="label third">
                    Supervised by senior solicitors and partners<br />
                    <span className="price third">$359 - $650</span> per hour
                  </p>
                </td>
              </tr>
              <tr>
                <td className="block border" />
                <td className="block second border">
                  <p className="label">You get straight to an experienced expert barrister</p>
                </td>
                <td className="block third border">
                  <p className="label third">Who often engage an experienced expert barrister</p>
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">First written material you receive</p>
                </td>
                <td className="block second border">
                  <p className="label">An authoritative, concise, and complete answer to your question</p>
                </td>
                <td className="block third border">
                  <p className="label third">
                    Introductory letter, plus 10 to 15 pages of terms and conditions,
                    defining how you will be changed
                  </p>
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">Guaranteed two business day turn around</p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenYesImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedNoImg} />
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">
                    Convenient video access with gurantted availability outside business hours,
                    including weekend
                  </p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenYesImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedNoImg} />
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">Guaranteed no fee creep</p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenYesImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedNoImg} />
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">River views and marble foyers</p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenNoImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedYesImg} />
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">Free coffee pods and bottled water</p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenNoImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedYesImg} />
                </td>
              </tr>
              <tr>
                <td className="block border">
                  <p className="label">Parking frustrations</p>
                </td>
                <td className="block second border">
                  <img className="icon1" alt="yes" src={GreenNoImg} />
                </td>
                <td className="block third border">
                  <img className="icon1" alt="yes" src={RedYesImg} />
                </td>
              </tr>
              <tr>
                <td className="result block first">
                  <h1 className="result second">End result</h1>
                </td>
                <td className="result block second">
                  <p className="label">
                    Your uncertainty feeds a system from the bottom up - plagued with
                    delay, free creep, and frustration.
                  </p>
                  <div className="button-wrapper">
                    <RectButton
                      color="#8AEBF1"
                      title="Get Started"
                      rightMargin
                      width={20}
                      onClick={() => history.push('/get-started')}
                    />
                  </div>
                </td>
                <td className="result block third">
                  <p className="label">
                    You go straight to the top - fixed timeframes and costs, with
                    an authoritative answer from an expert barrister.
                  </p>
                </td>
              </tr>
            </table>
          </div>
          <div className="included">
            <div className="title-wrapper">
              <TitleWithShape
                title={<p>What's<br />included?</p>}
              />
            </div>
            <div className="details">
              <div className="image-wrapper">
                <img alt="judget-approved" src={JudgeApprovedImg} />
              </div>
              <h1>One clear written answer, from an expert barrister</h1>
              <p>
                Ask us one legal question, upload relevant documents and create a timeline
                through our online tools, then get a written answer from an expert barrister,
                within two business days.
              </p>
            </div>
            <div className="details">
              <div className="image-wrapper">
                <img alt="conference" src={ConferenceImg} />
              </div>
              <h1>Two video conference discussions</h1>
              <p>
                Get two 15 minute video conferences with a solicitor - one to discuss
                your question, and the second to discuss your answer.
              </p>
            </div>
            <div className="details">
              <div className="image-wrapper">
                <img alt="judget-approved" src={AttachmentImg} />
              </div>
              <h1>10,000 words worth of documents</h1>
              <p>
                Upload up to 10,000 words worth of relevant documents, to put your question in context.
                An extra charge applies if your documents exceed 10,000 words.
              </p>
            </div>
          </div>
          <div className="extras">
            <div className="title-wrapper">
              <TitleWithShape
                title="Extras"
              />
            </div>
            <div className="details">
              <div className="image-wrapper">
                <img alt="attachment" src={DocumentsImg} />
                <p>
                  <span>$165</span><br/>
                  per additional 200 words
                </p>
              </div>
              <h1>Additional word count charge</h1>
              <p>
                We only charge this if you exceed the 10,000 words included in the base package.
              </p>
            </div>
            <div className="start">
              <div className="description">
                <TitleWithShape
                  title={<p>Start now to get quick legal advice</p>}
                />
              </div>
              <div className="button-wrapper">
                <RectButton
                  color="#8AEBF1"
                  title="Get Started"
                  rightMargin
                  width={20}
                  onClick={() => history.push('/get-started')}
                />
              </div>
            </div>
          </div>
          <Footer />
        </Wrapper>
      </SidebarContainer>
    );
  }
}

PricingPage.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(PricingPage);
