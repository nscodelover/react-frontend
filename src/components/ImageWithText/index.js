import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';

function ImageWithText({
  imgHeight,
  marker,
  noText,
  imgName,
  text,
}) {
  const imgSrc = require(`assets/images/${imgName}.svg`); // eslint-disable-line global-require
  return (
    <Wrapper
      imgHeight={imgHeight}
      noText={noText}
    >
      <div className="circle-dot">{marker}</div>
      <div className="image">
        <img alt="section-img" src={imgSrc} />
      </div>
      {!noText &&
        <div className="description">
          {text}
        </div>
      }
    </Wrapper>
  );
}

ImageWithText.propTypes = {
  imgHeight: PropTypes.number,
  marker: PropTypes.number,
  noText: PropTypes.bool,
  imgName: PropTypes.string.isRequired,
  text: PropTypes.string,
};

ImageWithText.defaultProps = {
  imgHeight: 10,
  marker: 1,
  noText: false,
  text: '',
};

export default ImageWithText;