import React from 'react';
import PropTypes from 'prop-types';

import TopNav from 'components/TopNav';

import timeIcon from 'assets/images/icons/QL-Time-Two-Tone.svg';
import cogIcon from 'assets/images/icons/QL-Cog-Two-Tone.svg';
import dollarIcon from 'assets/images/icons/QL-Dollar-Two-Tone.svg';
import contactIcon from 'assets/images/icons/QL-Contact-Two-Tone.svg';

import Wrapper from './Wrapper';

function PageHeader({ page, handleSidebar }) {
  let icon;
  let content = <div />;

  switch (page) {
    case 'help':
      icon = cogIcon;
      content = <h1 className="title">How it works</h1>;
      break;
    case 'pricing':
      icon = dollarIcon;
      content = (
        <div>
          <h1 className="title">Pricing</h1>
          <h2 className="subTitle">Compare our approach to traditional legal practice</h2>
        </div>
      );
      break;
    case 'contact':
      icon = contactIcon;
      content = <h1 className="title">Get in touch</h1>;
      break;
    case 'home':
    default:
      icon = timeIcon;
      content = (
        <div>
          <h2 className="subTitle" top>
            Need <span>quick and expert legal advice</span>, without <br />
            paying thousands in fees?
          </h2>
          <h2 className="title">We can help.</h2>
        </div>
      );
  }

  return (
    <Wrapper page={page}>
      <TopNav page={page} handleSidebar={handleSidebar} />
      <div className="page-icon">
        <div className="icon-wrapper">
          <img className="icon" alt="header-icon" src={icon} />
        </div>
        <div className="bottom-line" />
      </div>
      {content}
    </Wrapper>
  );
}

PageHeader.propTypes = {
  handleSidebar: PropTypes.func.isRequired,
  page: PropTypes.string,
};

PageHeader.defaultProps = {
  page: 'home',
};

export default PageHeader;
