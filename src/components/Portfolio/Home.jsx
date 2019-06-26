import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

function Home() {
  const wrapperStyles={
    position: 'relative',
    marginTop: '-30px',
    left: '3%',
  };

  const imageStyles = {
    maxWidth: '110%',
    height: 'auto',
    width: 'auto\9'
  };

  return (

    <div style={wrapperStyles}>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}>
        <img style={imageStyles} src={require('./../../assets/images/spaceladies.jpeg')}/>
        <p className='legend'></p>
      </Carousel>
    </div>

  );
}

export default Home;
