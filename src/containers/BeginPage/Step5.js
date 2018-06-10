import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dropzone from 'react-dropzone';

import ProgressBar from 'components/ProgressBar';
import TitleWithShape from 'components/TitleWithShape';
import IconButton from 'components/IconButton';
import HelpText from 'components/HelpText';
import InputField from 'components/InputField';
import BackButton from 'components/BackButton';

import HelpIcon from 'assets/images/icons/help-icon.svg';
import WarningIcon from 'assets/images/warning.png';

const Wrapper = styled.div`
  color: #35447d;
  display: flex;
  justify-content: space-between;
  padding-left: 5.4rem;
  padding-right: 16rem;
  margin-top: 7.1rem;
  .form-wrapper {
    background: #f8f7f3;
    width: 66rem;
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
    .content {
      padding: 6rem 10rem 10rem 10rem;
      .dropzone {
        display: none;
      }
      .fields {
        margin-top: 5rem;
        .complete {
          display: flex;
          margin-top: 5rem;
        }
        .warning {
          margin-top: 3.6rem;
          display: flex;
          width: 36rem;
          border: 1px dashed #35447d;
          padding: 1.5rem;
          .warning-icon {
            margin-right: 1rem;
            width: 3rem;
            height: 3rem;
            border: 1px solid #35447d;
            border-radius: 3rem;
            display: flex;
            align-items: center;
            img {
              margin: auto;
              width: 60%;
            }
          }
          .warning-info {
            flex: 1;
          }
        }
      }
      .next-button {
        margin-top: 5rem;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  .info-wrapper {
    margin-top: 6rem;
    width: 36rem;
    .file-list {
      padding-top: 5rem;
      h1 {
        margin-bottom: 3rem;
        font-size: 3.6rem;
      }
      .file-item {
        margin-bottom: 1rem;
      }
      .upload-info {
        width: 30rem;
        border: 1px dashed #35447d;
        display: flex;
        padding: 2rem;
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
    h4 {
      font-size: 1.8rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
    .suggestion {
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    .info-wrapper {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

class Step5 extends Component {
  constructor() {
    super();
    this.state = {
      isFileAttached: false,
      fileName: '',
      documents: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onDrop = (documents) => {
    this.setState({
      isFileAttached: true,
      fileName: documents[0].name,
    });
  }

  onSaveDocument = () => {
    const newdocuments = this.state.documents.slice();
    newdocuments.push(this.state.fileName);
    this.setState({
      documents: newdocuments,
      isFileAttached: false,
      fileName: '',
    });
  }

  render() {
    const {
      onBack,
      onNext,
      totalStep,
      currentStep,
    } = this.props;
    const { isFileAttached, fileName, documents } = this.state;
    let dropzoneRef;
    return (
      <Wrapper>
        <div className="form-wrapper">
          <div className="bar-wrapper">
            <BackButton onClick={onBack} />
            <ProgressBar total={totalStep} current={currentStep} />
          </div>
          <div className="form-title">
            <TitleWithShape
              title="Document upload"
              subTitle="Please add any relevant documents."
            />
          </div>
          <div className="content">
            <div className="dropzone">
              <Dropzone
                ref={(node) => { dropzoneRef = node; }}
                onDrop={this.onDrop}
              />
            </div>
            {
              !isFileAttached && documents.length === 0 &&
              <IconButton
                width={25}
                name="Upload a document"
                icon="document"
                onClick={() => { dropzoneRef.open(); }}
                selected
                noBorder
              />
            }
            {
              isFileAttached &&
              <IconButton
                background="transparent"
                width={25}
                name={fileName}
                icon="close"
                onClick={this.onCancelUpload}
                inline
              />
            }
            {
              isFileAttached &&
              <div className="fields">
                <InputField
                  placeholder="Document Date"
                  help={`This could be a specific date(e.g. 12/07/2017), a general date(e.g. May 2017)
                  or if you're unsure you can type "unsure".`}
                  isRequired
                />
                <InputField placeholder="Description" isRequired />
                <InputField placeholder="Document author/creator" />
                <InputField placeholder="What is the relevance of the document?" />
                <InputField placeholder="How did you receive the document, and when?" />
                <div className="complete">
                  <IconButton
                    width={25}
                    name="Save document"
                    icon="confirm"
                    onClick={this.onSaveDocument}
                    rightMargin={2}
                    selected
                    noBorder
                  />
                  <IconButton
                    background="#e1e1e1"
                    width={15}
                    name="Delete"
                    icon="delete"
                    onClick={this.onDeleteDocument}
                    noBorder
                  />
                </div>
              </div>
            }
            {
              !isFileAttached && documents.length > 0 &&
              <div className="fields">
                <IconButton
                  background="transparent"
                  width={20}
                  name="Add document"
                  icon="plus"
                  onClick={() => { dropzoneRef.open(); }}
                />
                <div className="warning">
                  <div className="warning-icon">
                    <img alt="warning" src={WarningIcon} />
                  </div>
                  <div className="warning-info">
                    If the combined document word count of all your uploads exceeds 10,000 words, you may
                    be changed an additional fee at a later date at a rate of $165 per additional 2,000 words.
                  </div>
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
            }
          </div>
        </div>
        <div className="info-wrapper">
          {!isFileAttached && documents.length === 0 &&
            <HelpText>Start by uploading a document</HelpText>
          }
          {isFileAttached &&
            <div>
              <HelpText>
                Now give us a little information about your document.<br /><br />
                Here's an example:
              </HelpText>
              <div className="suggestion">
                <InputField
                  hint="Document Date"
                  help={`This could be a specific date(e.g. 12/07/2017), a general date(e.g. May 2017)
                  or if you're unsure you can type "unsure".`}
                  value="May of 2017"
                  isRequired
                  disabled
                />
                <InputField
                  hint="Description"
                  value="Notice of remedy breach"
                  isRequired
                  disabled
                />
                <InputField
                  hint="Document author/creator"
                  value="Property Owner Pty Ltd(Landlord)"
                  disabled
                />
                <InputField
                  hint="What is the relevance of the document?"
                  value="Lists a number of failures to comply with my lease, and threatens to terminate the
                  lease if they are not fixed"
                  disabled
                />
                <InputField
                  hint="How did you receive the document, and when?"
                  value='"I got the details of the witness after the incident and then retrieved the document
                  from her a few weeks later" to "By letter dated 2 May 2017, from the solicitors for the landlord"'
                  disabled
                />
              </div>
            </div>
          }
          {!isFileAttached && documents.length === 0 &&
            <h4>This could include Court documents, correspondence, agreements, leases, demands,
            invoices, or any other relevant documents. <br /><br />
            You'll be able to link these documents to a timeline of events that you create later.
            </h4>
          }
          {!isFileAttached && documents.length > 0 &&
            <div className="file-list">
              <h1>Uploaded</h1>
              {documents.map(file =>
                (
                  <div className="file-item">
                    <IconButton
                      width={30}
                      height={8}
                      name={file}
                      icon="edit"
                    />
                  </div>
                ))
              }
              <div className="upload-info">
                <img alt="help-icon" src={HelpIcon} />
                <div>
                  You can add as many documents as you need
                </div>
              </div>
            </div>
          }
        </div>
      </Wrapper>
    );
  }
}

Step5.propTypes = {
  onBack: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  totalStep: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Step5;
