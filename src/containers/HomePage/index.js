import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ImageWithText from 'components/ImageWithText';
import Footer from 'components/Footer';
import PageHeader from 'components/PageHeader';
import RectButton from 'components/RectButton';

import SidebarContainer from 'containers/SidebarContainer';

import snakeBottleImg from 'assets/images/snake-bottle.svg';

import Wrapper from './Wrapper';

const IMAGES = [
  'coloured-paper-bundle',
  'coloured-conference',
  'judge-match',
];

const TEXTS = [
  'Ask your question, and upload \n relevant documents',
  'Video conference with a solicitor to \n diagnose your legal issue',
  'We match your issues with an \n expert barrister',
];

class HomePage extends Component {
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
        page="home"
      >
        <Wrapper >
          <PageHeader page="home" handleSidebar={this.handleSidebar} />
          <div className="section1">
            {IMAGES.map((imageName, index) => (
              <ImageWithText
                key={`section1-${imageName}}`}
                marker={index + 1}
                imgName={imageName}
                text={TEXTS[index]}
              />))
            }
          </div>
          <div className="section2">
            <div className="description">
              <ImageWithText
                marker={4}
                imgName="judge-approved"
                imgHeight={15}
                noText
              />
              <h1>
                You get a <span>clear written</span><br />
                <span>answer</span>, within two<br />
                business days
              </h1>
            </div>
            <RectButton
              color="#8AEBF1"
              width={24}
              title="Learn how it works"
              onClick={() => history.push('/how-it-works')}
            />
          </div>
          <div className="section3">
            <div className="detail">
              <p className="description">
                Don't be <span>price gouged</span> by<br />
                inexperience and luxurious<br />
                overheads. Get certainty quickly,<br />
                straight from the experts.
              </p>
              <div className="button-wrapper">
                <RectButton
                  color="#8AEBF1"
                  title="Get Started"
                  onClick={() => history.push('/get-started')}
                  width={20}
                  rightMargin
                />
                <RectButton
                  title="See our pricing"
                  onClick={() => history.push('/pricing')}
                  width={20}
                />
              </div>
            </div>
            <div className="image-wrapper">
              <img alt="snake-bottle" src={snakeBottleImg} />
            </div>
          </div>
          <Footer />
        </Wrapper>
      </SidebarContainer>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(HomePage);
