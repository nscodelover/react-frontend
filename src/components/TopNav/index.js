import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import logo from 'assets/images/logo/Logo-QL-White-Cyan.svg';

import RectButton from 'components/RectButton';

import ButtonsGroup from './ButtonsGroup';
import LinkButton from './LinkButton';
import Wrapper from './Wrapper';

function TopNav({ page, handleSidebar }) {
  return (
    <Wrapper type={page}>
      <img className="logo" alt="logo" src={logo} />
      <ButtonsGroup>
        <LinkButton to="/" active={page === 'home'}>Home</LinkButton>
        <LinkButton to="/how-it-works" active={page === 'help'}>How it works</LinkButton>
        <LinkButton to="/pricing" active={page === 'pricing'}>Pricing</LinkButton>
        <LinkButton to="/contact" active={page === 'contact'}>Contact</LinkButton>
        {
          page !== 'begin' &&
          <Link href="/" to="/get-started">
            <RectButton
              width={17}
              title="Get Started"
              border
            />
          </Link>
        }
        <Button className="hamburger" icon="sidebar" onClick={handleSidebar} />
      </ButtonsGroup>
    </Wrapper>
  );
}

TopNav.propTypes = {
  handleSidebar: PropTypes.func.isRequired,
  page: PropTypes.string,
};

TopNav.defaultProps = {
  page: 'home',
};

export default TopNav;
