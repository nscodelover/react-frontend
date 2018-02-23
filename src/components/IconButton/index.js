import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RightArrow from 'assets/images/arrow-right.svg';
import DownArrow from 'assets/images/arrow-down.svg';
import NoIcon from 'assets/images/icons/close.svg';
import UnsureIcon from 'assets/images/icons/unsure.svg';

function setEllipis({ inline }) {
  if (inline) {
    return `text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;`;
  }

  return '';
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  border: ${props => (props.noBorder ? 'none' : '1px solid #35447d')};
  color: #35447d;
  font-size: 1.6rem;
  font-family: Helvetica;
  width: ${props => `${props.width}rem`};
  height:${props => `${props.height}rem`};
  padding: 0 1.5rem;
  background: ${props => (props.selected ? '#8aebf1' : props.background)};
  cursor: pointer;
  margin-right: ${props => `${props.rightMargin}rem`};
  margin-top: ${props => `${props.topMargin}rem`};
  .name {
    padding: 0;
    margin: 0;
    ${props => setEllipis(props)}
  }
  .icon-wrapper {
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
    .circle {
      border: 1px solid #35447d;
      border-radius: 2rem;
      width: 2rem;
      height: 2rem;
      margin: auto;
      display: flex;
      align-items: center;
      .inner-circle {
        margin: auto;
        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border-radius: calc(100% - 2px);
        background: #35447d;
      }
    }
  }
`;

const getIcon = (name) => {
  switch (name) {
    case 'rightArrow':
      return RightArrow;
    case 'downArrow':
      return DownArrow;
    case 'no':
      return NoIcon;
    case 'unsure':
      return UnsureIcon;
    case null:
      return null;
    default:
      return require(`assets/images/icons/${name}.svg`);
  }
};

function IconButton({
  name,
  icon,
  onClick,
  selected,
  ...rest
}) {
  return (
    <Wrapper
      selected={selected}
      onClick={onClick}
      {...rest}
    >
      <p className="name">{name}</p>
      <div className="icon-wrapper">
        {
          icon === 'circle' ?
            <div className="circle">
              {selected && <div className="inner-circle" />}
            </div>
            :
            <img alt="button-icon" src={getIcon(icon)} />
        }

      </div>
    </Wrapper>
  );
}

IconButton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  background: PropTypes.string,
  inline: PropTypes.bool,
};

IconButton.defaultProps = {
  width: 20.5,
  height: 4.5,
  selected: false,
  background: 'white',
  inline: false,
  icon: null,
};

export default IconButton;
