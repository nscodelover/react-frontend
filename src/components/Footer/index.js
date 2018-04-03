import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from 'components/Button';

import RoseLogo from 'assets/images/logo/Logo-JML-Rose.svg';

import Wrapper from './Wrapper';

function Footer({ history }) {
  return (
    <Wrapper>
      <div className="info-group">
        <div className="logo-wrapper">
          <img alt="Rose-Logo" src={RoseLogo} />
        </div>
        <div className="information">
          <h6>Powered by <span>JML Rose</span> - one of Australia's most trusted law firms</h6>
          <p>@ Quick Legal Advice Pty Ltd and JML Rose 2017.
            All rights reserved. Legal advice given is of a general and non-binding nature.
          </p>
        </div>
      </div>
      <div className="button-group">
        <Button name="Contact" onClick={() => history.push('/contact')} rightMargin />
        <Button name="Privacy Policy" onClick={() => history.push('/privacy')} />
      </div>
    </Wrapper>
  );
}

Footer.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default withRouter(Footer);
