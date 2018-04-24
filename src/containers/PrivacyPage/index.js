import React, { Component } from 'react';

import SidebarContainer from 'containers/SidebarContainer';

import TopNav from 'components/TopNav';
import Footer from 'components/Footer';
import TitleWithShape from 'components/TitleWithShape';

import Wrapper from './Wrapper';

class PrivacyPage extends Component {
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
    const { isVisible } = this.state;
    return (
      <SidebarContainer
        visible={isVisible}
        page="begin"
      >
        <Wrapper>
          <TopNav page="begin" handleSidebar={this.handleSidebar} />
          <div className="content">
            <div className="left-pane">
              <TitleWithShape
                title="Privacy Policy"
              />
              <div className="subTitle"><span>Last updated: </span>27/05/2017</div>
              <div className="detail">
              My Company (change this) ("us", "we", or "our") operates http://www.mysite.com (change this) (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.<br /><br />
              We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
              </div>
              <h2>
                Information Collection And Use
              </h2>
              <div className="detail">
              While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").
              </div>
              <h2>
                Log Data
              </h2>
              <div className="detail">
              Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data").<br /><br />
              This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.<br /><br />
              In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this …
              </div>
              <h2>
                Communications
              </h2>
              <div className="detail">
                We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ...
              </div>
              <h2>
                Cookies
              </h2>
              <div className="detail">
                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.<br /><br />
                Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
              </div>
              <h2>
                Security
              </h2>
              <div className="detail">
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
              </div>
            </div>
            <div className="right-pane">
              <div className="menu">
                <h1>Contents</h1>
                <p>1.0 - Introduction</p>
                <p>1.1 - Information collection and use</p>
                <p>1.2 - Log data</p>
                <p>2.0 - Communications</p>
                <p>3.0 - Cookies</p>
                <p>4.0 - Securities</p>
                <p>5.0 - How we use your data</p>
              </div>
            </div>
          </div>
          <Footer />
        </Wrapper>
      </SidebarContainer>
    );
  }
}

export default PrivacyPage;
