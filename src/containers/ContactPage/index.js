import React, { Component } from 'react';

import SidebarContainer from 'containers/SidebarContainer';

import PageHeader from 'components/PageHeader';
import Footer from 'components/Footer';
import TitleWithShape from 'components/TitleWithShape';
import InputField from 'components/InputField';
import TextArea from 'components/TextArea';
import RectButton from 'components/RectButton';

import EmailIcon from 'assets/images/icons/email.svg';
import PhoneIcon from 'assets/images/icons/phone.svg';

import Wrapper from './Wrapper';

class ContactPage extends Component {
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
        page="contact"
      >
        <Wrapper>
          <PageHeader page="contact" handleSidebar={this.handleSidebar} />
          <div className="content">
            <div className="left-pane">
              <TitleWithShape title="Contact us" />
              <div className="fields">
                <InputField placeholder="Name" isRequired />
                <InputField placeholder="Email" isRequired />
                <div className="description">
                  <TextArea placeholder="Please type your message here..." />
                </div>
              </div>
              <div className="button-wrapper">
                <RectButton
                  color="#8AEBF1"
                  title="Submit"
                  width={20}
                />
              </div>
            </div>
            <div className="right-pane">
              <div>
                <h1>Contact Info</h1>
                <div className="info">
                  <img alt="email" src={EmailIcon} />
                  <div>
                    <p>PO Box 000. Fake St,</p>
                    <p>Fakeburb, QNA 000</p>
                  </div>
                </div>
                <div className="info">
                  <img alt="phone" src={PhoneIcon} />
                  <div>
                    <p>1000 000 000</p>
                  </div>
                </div>
                <div className="info">
                  <img alt="phone" src={PhoneIcon} />
                  <div>
                    <p>email@emailaddress.com.au</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Wrapper>    
      </SidebarContainer>  
    );
  }
}

export default ContactPage;
