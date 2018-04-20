import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SidebarContainer from 'containers/SidebarContainer';

import TitleWithShape from 'components/TitleWithShape';
import PageHeader from 'components/PageHeader';
import Footer from 'components/Footer';
import RectButton from 'components/RectButton';

import PaperBundleImg from 'assets/images/coloured-paper-bundle.svg';
import ConferenceImg from 'assets/images/coloured-conference.svg';
import JudgeMatchImg from 'assets/images/judge-match.svg';
import JudgeApprovedImg from 'assets/images/judge-approved-reverse.svg';

import Wrapper from './Wrapper';

class HelpPage extends Component {
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
        page="help"
      >
        <Wrapper>
          <PageHeader page="help" handleSidebar={this.handleSidebar} />
          <div className="section">
            <div className="paragraph1">
              <div className="step1">
                <h2 className="stepName">Step 1</h2>
                <div className="stepImage">
                  <img alt="paper-bundle" src={PaperBundleImg} />
                </div>
                <div className="title-wrapper">
                  <TitleWithShape
                    title={<p>You <span>brief us</span> with relevant information
                    and <span>ask one question</span> to be answerd by an expert barrister.</p>}
                    subTitle="Assist us to understand your question by uploading documents, creating
                    a timeline of events, and giving an explanation of relevant information."
                  />
                </div>
              </div>
              <div className="step2">
                <h2 className="stepName">Step 2</h2>
                <div className="stepImage">
                  <img alt="conference" src={ConferenceImg} />
                </div>
                <div className="title-wrapper">
                  <TitleWithShape
                    title={<p>You get a <span>15 minute*</span> confidential video conference at
                    a time that suits you.</p>}
                    subTitle="Discuss your question with a solicitor, who diagnoses your legal issues"
                  />
                </div>
              </div>
            </div>
            <div className="hint-wrapper">
              <p>*video conferences are strictly 15 minutes only</p>
            </div>
            <div className="paragraph2">
              <h2 className="stepName">Step 3</h2>
              <div className="content">
                <div className="stepImage">
                  <img alt="judge-match" src={JudgeMatchImg} />
                </div>
                <div className="title-wrapper">
                  <TitleWithShape
                    title={<p>We match your question with a <span>barrister</span> who is an expert in your legal issues.</p>}
                  />
                </div>
              </div>
            </div>
            <div className="paragraph3">
              <h2 className="stepName">Step 4</h2>
              <div className="content">
                <div className="stepImage">
                  <img alt="judge-approved" src={JudgeApprovedImg} />
                </div>
                <div className="title-wrapper">
                  <TitleWithShape
                    title={<p>You get a <span>written answer</span> to your question.</p>}
                  />
                </div>
                <p className="detail">
                  Within two business days, you get an authoritative but easy to understand
                  written answer, from an expert barrister.
                </p>
              </div>
            </div>
            <div className="paragraph4">
              <div className="part1">
                <h2 className="stepName">Step 5</h2>
                <div className="stepImage">
                  <img alt="conference" src={ConferenceImg} />
                </div>
                <div className="title-wrapper">
                  <TitleWithShape
                    title={<p>Book a <span>follow up 15 minute* video conference.</span></p>}
                    subTitle="Discuss your answer with a solicitor, to ensure you understand its meaning"
                  />
                </div>
              </div>
              <div className="part2">
                <div className="description">
                  <p>Avoid tradition legal practice - no more uncertain timeframes and creeping
                  fees for work performed by inexperienced juniors with billing quotas.</p>
                </div>
                <div className="description1">
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
                  <RectButton
                    title="See our pricing"
                    width={20}
                    onClick={() => history.push('/pricing')}
                  />
                </div>
              </div>
            </div>
            <p className="hint-wrapper1">
              *Video conferences are strictly 15 minutes only
            </p>
          </div>
          <Footer />
        </Wrapper>      
      </SidebarContainer>
    );
  }
}

HelpPage.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(HelpPage);
