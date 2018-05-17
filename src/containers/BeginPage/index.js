import React, { Component } from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';

import SidebarContainer from 'containers/SidebarContainer';

import CloseButton from 'components/CloseButton';
import TitleWithShape from 'components/TitleWithShape';
import TopNav from 'components/TopNav';
import Footer from 'components/Footer';
import IconButton from 'components/IconButton';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';

const ModalWrapper = styled.div`
  .header {
    display: flex;
    justify-content: flex-end;
    padding-right: 1rem;
    padding-top: 1rem;
  }
  .content {
    padding: 6.3rem 9.5rem;
    .options-wrapper {
      margin-top: 4.7rem;
      display: flex;
    }
    .next-button {
      display: flex;
      justify-content: flex-end;
      margin-top: 7rem;
    }
  }
`;

class BeginPage extends Component {
  state = {
    totalStep: 7,
    currentStep: 1,
    showModal: true,
    option: 1,
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  setCurrentStep = (step) => {
    switch (step) {
      case 1:
        return (<Step1
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 2:
        return (<Step2
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 3:
        return (<Step3
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 4:
        return (<Step4
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 5:
        return (<Step5
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 6:
        return (<Step6
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 7:
        return (<Step7
          onBack={this.goToPrevious}
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 8:
        return (<Step8
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      case 9:
        return (<Step9
          onNext={this.goToNext}
          totalStep={this.state.totalStep}
          currentStep={this.state.currentStep}
        />);
      default:
        break;
    }

    return null;
  }

  handleSidebar = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  goToNextStep = () => {
    this.setState({ showModal: false });
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  selectOption = (option) => {
    this.setState({ option });
  }

  goToPrevious = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  goToNext = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  render() {
    const {
      currentStep,
      showModal,
      option,
      isVisible,
    } = this.state;

    return (
      <SidebarContainer
        visible={isVisible}
        page="begin"
      >
        <div>
          <TopNav page="begin" handleSidebar={this.handleSidebar} />
          <div>
            {this.setCurrentStep(currentStep)}
          </div>
          <Footer />
          <Modal
            open={showModal}
            size="large"
            closeOnDocumentClick={false}
            closeOnDimmerClick={false}
          >
            <Modal.Content>
              <ModalWrapper>
                <div className="header">
                  <CloseButton onClick={this.hideModal} />
                </div>
                <div className="content">
                  <TitleWithShape
                    title="Are you asking for yourself or another entity?"
                    subTitle="Other entitles could include the company you work
                    for or a family member who wants you to represent them on their behalf."
                  />
                  <div className="options-wrapper">
                    <IconButton
                      name="Myself"
                      icon="circle"
                      selected={option === 1}
                      onClick={() => this.selectOption(1)}
                      rightMargin={1}
                    />
                    <IconButton
                      name="Someone else"
                      icon="circle"
                      selected={option === 2}
                      onClick={() => this.selectOption(2)}
                    />
                  </div>
                  <div className="next-button">
                    <IconButton
                      name="Next"
                      icon="rightArrow"
                      onClick={this.goToNextStep}
                      selected
                      noBorder
                    />
                  </div>
                </div>
              </ModalWrapper>
            </Modal.Content>
          </Modal>
        </div>
      </SidebarContainer>
    );
  }
}

export default BeginPage;
