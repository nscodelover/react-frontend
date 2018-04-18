import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';

import LinkButton from 'components/TopNav/LinkButton';
import RectButton from 'components/RectButton';

import 'semantic-ui-css/semantic.min.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  div {
    margin: auto;
    margin-top: 3rem;
  }
`;

function SideBarContainer({ children, visible, page }) {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="push"
        width="thin"
        direction="right"
        visible={visible}
        icon="labeled"
        vertical
        inverted
      >
        <Wrapper>
          <LinkButton to="/" active={page === 'home'} noBorder>Home</LinkButton>
          <LinkButton to="/how-it-works" active={page === 'help'} noBorder>How it works</LinkButton>
          <LinkButton to="/pricing" active={page === 'pricing'} noBorder>Pricing</LinkButton>
          <LinkButton to="/contact" active={page === 'contact'} noBorder>Contact</LinkButton>
          <Link href="/" to="/get-started">
            <RectButton
              width={17}
              title="Get Started"
              border
            />
          </Link>
        </Wrapper>
      </Sidebar>
      <Sidebar.Pusher>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

SideBarContainer.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  page: PropTypes.string,
};

SideBarContainer.defaultProps = {
  visible: false,
  page: 'home',
};

export default SideBarContainer;
