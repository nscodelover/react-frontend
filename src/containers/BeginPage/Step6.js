import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal, Tab } from 'semantic-ui-react';
import { union, indexOf } from 'lodash';
import Dropzone from 'react-dropzone';

import CloseButton from 'components/CloseButton';
import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import InputField from 'components/InputField';
import TextArea from 'components/TextArea';
import DatePicker from 'components/DatePicker';
import BackButton from 'components/BackButton';

import HelpIcon from 'assets/images/icons/help-icon.svg';
import CheckIcon from 'assets/images/icons/check.svg';
import EditIcon from 'assets/images/icons/edit.svg';

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
    position: relative;
    padding: 11rem 10rem;
    .bar-wrapper {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      top: 3rem;
      right: 2.5rem;
      left: 2.5rem;
    }
    .form {
      margin-top: 6rem;
      .input-calendar {
        padding-top: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #b7bbc0;
        input {
          font-family: UtopiaStd-Regular;
          color: ${props => (props.disabled ? '#6c6c6c' : '#35447d')};
          font-size: 2rem;
          height: 36px;
          flex: 1;
          outline: none;
          border: none;
          background: transparent;
          margin-top: -5px;
          ::placeholder {
            color: ${props => (props.disabled ? '#6c6c6c' : '#35447d')};
          }
        }
      }
      .description {
        margin-top: 5rem;
        margin-bottom: 6rem;
        background: #f8f7f3;
        width: 64rem;
        height: 35rem;
      }
      .submit-field {
        display: flex;
        margin-top: 5rem;
      }
      .next-button {
        display: flex;
        justify-content: flex-end;
        margin-top: 20rem;
      }
    }
  }
  .info-wrapper {
    width: 36rem;
    margin-top: 11rem;
    .title {
      font-size: 3.6rem;
      font-weight: normal;
    }
    .timeline {
      display: flex;
      cursor: pointer;
      .index-num {
        height: 10rem;
        width: 2px;
        background: #8aebf1;
        position: relative;
        .circle {
          border-radius: 2.6rem;
          width: 2.6rem;
          height: 2.6rem;
          text-align: center;
          background: #35447d;
          color: white;
          position: absolute;
          top: calc(50% - 1.8rem);
          left: -1.3rem;
          line-height: 2.6rem;
        }
      }
      .item-wrapper {
        flex: 1;
        margin-left: 2rem;
        height: 9rem;
        border: 1px solid #35447d;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        .item-info {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 2rem;
          justify-content: space-between;
        }
        .attachments {
          height: 2.4rem;
          background: #f8f7f3;
          line-height: 2.4rem;
          padding-left: 2rem;
          font-size: 1.2rem;
        }
      }
    }
    .suggestion {
      border: 1px dashed #35447d;
      display: flex;
      padding: 2rem;
      margin-top: 2.7rem;
      margin-bottom: 2rem;
      img {
        width: 3rem;
        height: 3rem;
        margin-right: 2rem;
      }
      div {
        flex: 1;
      }
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
      .form .description {
        width: auto;
      }
    }    
  }
`;

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
    .ui.pointing {
      border-bottom: none !important;
    }
    .ui.menu {
      a {
        font-size: 1.8rem;
        color: #35447d !important;
        &:hover {
          color: #35447d !important;
        }
        &:active {
          color: #35447d !important;
        }
      }
    }
    .ui.segment {
      box-shadow: none !important;
    }
    .content1 {
      .hint {
        font-size: 1.6rem;
      }
      .items {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: relative;
      }
      .button-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: 6rem;
      }
      p {
        color: #35447d;
      }
    }
    .content2 {
      padding-top: 3rem;
      display: flex;
      justify-content: space-between;
      .dropzone {
        display: none;
      }
      .form {
        width: 50%;
        .submit-field {
          display: flex;
          margin-top: 5rem;
        }
      }
    }
  }
`;

const DocumentItem = styled.div`
  background: ${props => (props.isSelected ? '#8aebf1' : 'transparent')};
  border: 1px solid #35447d;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: calc(50% - 1rem);
  height: 9rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 1.5rem;
  color: #35447d;
  .infos {
    h3 {
      font-size: 2rem;
      font-weight: normal;
      margin: 0;
      padding: 0;
    }
    h4 {
      font-size: 1.2rem;
      margin: 0;
      padding: 0;
    }
  }
`;

const UploadedDocuments = [
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
  {
    name: 'CAR-CRASH-001.jpg',
    date: '12/04/2017',
  },
];

class Step6 extends Component {
  constructor() {
    super();

    this.state = {
      isModalShown: false,
      descriptionLimit: 300,
      documents: UploadedDocuments,
      selectedDocuments: [],
      events: [],
      eventDate: new Date(),
      eventTitle: '',
      eventDescription: '',
      isEventEditable: false,
      selectedEvent: -1,
      documentName: '',
      documentDate: new Date(),
      isDocumentAttached: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onAddDocuments = () => {
    const documents = this.state.documents.slice();
    documents.push({
      name: this.state.documentName,
      date: this.state.documentDate.toDateString(),
    });
    this.setState({
      documents,
      isModalShown: false,
      isDocumentAttached: false,
    });
  }

  onAddNewEvent = () => {
    this.setState({ isEventEditable: true });
  }

  onDeleteEvent = () => {
    const { events, selectedEvent } = this.state;
    const newEvents = events.slice(0);
    newEvents.splice(selectedEvent, 1);
    this.setState({
      events: newEvents,
      eventDate: new Date(),
      eventTitle: '',
      eventDescription: '',
      selectedDocuments: [],
      isEventEditable: false,
      selectedEvent: -1,
    });
  }

  onEditEvent = (event, index) => {
    this.setState({
      eventDate: event.date,
      eventTitle: event.title,
      eventDescription: event.description,
      selectedDocuments: event.documents.slice(0),
      isEventEditable: true,
      selectedEvent: index,
    });
  }

  onAddLinks = () => {
    this.setState({
      isModalShown: false,
    });
  }

  onChangeEvent = (e, type) => {
    switch (type) {
      case 'eventTitle':
        this.setState({
          [type]: e.target.value,
        });
        break;
      case 'eventDescription':
        this.setState({
          descriptionLimit: 300 - e.target.value.length,
          [type]: e.target.value,
        });
        break;
      case 'eventDate':
        this.setState({
          [type]: e,
        });
        break;
      default:
        break;
    }
  }

  onSelectDocument = (document) => {
    const newDocuments = this.state.selectedDocuments.slice(0);
    const index = indexOf(newDocuments, document);
    if (index > -1) {
      newDocuments.splice(index, 1);
    } else {
      newDocuments.push(document);
    }

    this.setState({
      selectedDocuments: union(newDocuments),
    });
  }

  onLinkDocuments = () => {
    this.setState({
      isModalShown: true,
    });
  }

  onSaveEvent = () => {
    const {
      eventDate,
      eventTitle,
      eventDescription,
      selectedDocuments,
    } = this.state;
    const events = this.state.events.slice(0);
    events.push({
      date: eventDate,
      title: eventTitle,
      description: eventDescription,
      documents: selectedDocuments,
    });
    this.setState({
      events,
      eventDate: new Date(),
      eventTitle: '',
      eventDescription: '',
      selectedDocuments: [],
      isEventEditable: false,
      selectedEvent: -1,
    });
  }

  onDrop = (document) => {
    this.setState({
      documentName: document[0].name,
      isDocumentAttached: true,
    });
  }

  hideModal = () => {
    this.setState({ isModalShown: false });
  }

  TabContent1 = () => (
    <div className="content1">
      <p className="hint">Select which documents are relevant to this event.</p>
      <div className="items">
        {
          this.state.documents.map(document => (
            <DocumentItem
              isSelected={indexOf(this.state.selectedDocuments, document) > -1}
              onClick={() => this.onSelectDocument(document)}
            >
              <div className="infos">
                <h3>{document.name}</h3>
                <h4>{document.date}</h4>
              </div>
              <div className="icon">
                <img alt="check-icon" src={CheckIcon} />
              </div>
            </DocumentItem>
          ))
        }
      </div>
      <div className="button-wrapper" >
        <IconButton
          width={21}
          name="Add links"
          icon="confirm"
          onClick={this.onAddLinks}
          rightMargin={2}
          selected
          noBorder
        />
      </div>
    </div>
  )

  TabContent2 = () => (
    <div className="content2">
      <div>
        <div className="dropzone">
          <Dropzone
            ref={(node) => { this.dropzoneRef = node; }}
            onDrop={this.onDrop}
          />
        </div>
        {this.state.isDocumentAttached ?
          <IconButton
            background="transparent"
            width={25}
            name={this.state.documentName}
            icon="close"
            onClick={this.onCancelUpload}
            inline
          />
          :
          <IconButton
            background="#e1e1e1"
            width={26}
            name="Upload a document"
            icon="document"
            onClick={() => { this.dropzoneRef.open(); }}
            inverse
            noBorder
          />
        }
      </div>
      <div className="form">
        <DatePicker
          onChange={e => this.onChangeEvent(e, 'documentDate')}
          value={this.state.documentDate}
        />
        <InputField
          placeholder="Description"
          isRequired
        />
        <InputField placeholder="Document author/creator" isRequired />
        <InputField placeholder="What is the relevance of the document?" />
        <InputField placeholder="How did you receive the document, and when?" />
        <div className="submit-field">
          <IconButton
            width={26}
            name="Add document"
            icon="plus"
            onClick={this.onAddDocuments}
            rightMargin={2}
            selected
            noBorder
          />
          <IconButton
            background="#f8f7f3"
            width={17}
            name="Delete"
            icon="delete"
            onClick={this.onDeleteDocument}
            noBorder
          />
        </div>
      </div>
    </div>
  );

  render() {
    const {
      onNext,
      totalStep,
      currentStep,
      onBack,
    } = this.props;
    const {
      isModalShown,
      descriptionLimit,
      events,
      eventDate,
      eventTitle,
      eventDescription,
      isEventEditable,
    } = this.state;

    const panes = [
      { menuItem: 'Uploaded documents', render: () => <Tab.Pane key="content1" attached={false}>{this.TabContent1()}</Tab.Pane> },
      { menuItem: 'Add documents', render: () => <Tab.Pane key="content2" attached={false}>{this.TabContent2()}</Tab.Pane> },
    ];

    return (
      <Wrapper>
        <div className="form-wrapper">
          <div className="bar-wrapper">
            <BackButton onClick={onBack} />
            <ProgressBar total={totalStep} current={currentStep} inverse />
          </div>
          <TitleWithShape
            title="Chronology Calendar"
            subTitle="Please add relevant events to the calendar and, if necessary,
            link associated documents."
          />
          {(events.length === 0 || isEventEditable) ?
            <div className="form">
              <DatePicker
                hint="Event Date"
                onChange={e => this.onChangeEvent(e, 'eventDate')}
                value={eventDate}
                isRequired
              />
              <InputField
                placeholder="Event title"
                onChange={e => this.onChangeEvent(e, 'eventTitle')}
                value={eventTitle}
                isRequired
              />
              <div className="description">
                <TextArea
                  placeholder="Please type your description of the event..."
                  onChange={e => this.onChangeEvent(e, 'eventDescription')}
                  value={eventDescription}
                  limit={descriptionLimit}
                />
              </div>
              <IconButton
                background="transparent"
                width={20}
                name="Link documents"
                icon="plus"
                onClick={this.onLinkDocuments}
              />
              <div className="submit-field">
                <IconButton
                  width={26}
                  name="Save event to timeline"
                  icon="confirm"
                  onClick={this.onSaveEvent}
                  rightMargin={2}
                  selected
                  noBorder
                />
                <IconButton
                  background="#f8f7f3"
                  width={17}
                  name="Delete"
                  icon="delete"
                  onClick={this.onDeleteEvent}
                  noBorder
                />
              </div>
            </div>
            :
            <div className="form">
              <IconButton
                background="transparent"
                width={24}
                name="Add another event"
                icon="plus"
                onClick={this.onAddNewEvent}
              />
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
          }
        </div>
        <div className="info-wrapper">
          <h1 className="title">Timeline</h1>
          {events.length > 0 &&
            events.map((event, index) => (
              <div
                className="timeline"
                onClick={() => this.onEditEvent(event, index)}
              >
                <div className="index-num">
                  <div className="circle">{index + 1}</div>
                </div>
                <div className="item-wrapper">
                  <div className="item-info">
                    <div className="text">
                      <h4>{event.date.toDateString()}</h4>
                      <p>{event.title}</p>
                    </div>
                    <img alt="edit-icon" src={EditIcon} />
                  </div>
                  <div className="attachments">{event.documents.length} document links</div>
                </div>
              </div>))
          }
          <div className="suggestion">
            <img alt="help-icon" src={HelpIcon} />
            <div>
              {events.length === 0 ? "After you add events, your timeline will appear here."
              : "You can add as many relevant events as you need"}
            </div>
          </div>
          {events.length === 0 &&
            <p>
              A detailed and accurate timeline gives context to your question. This is a critical
              step - the benefit you receive by carefully completing your timeline, can be substantial.
            </p>
          }
        </div>
        <Modal
          open={isModalShown}
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
                  title="Link documents"
                />
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
              </div>
            </ModalWrapper>
          </Modal.Content>
        </Modal>
      </Wrapper>
    );
  }
}

Step6.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step6;
