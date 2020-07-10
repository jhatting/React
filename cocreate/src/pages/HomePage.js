import React from 'react';

import ReactPlayer from "react-player"
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <ReactPlayer
  url="https://youtu.be/wvB5Nv5_hF8"
  width="100%"
  height="500px"

  playIcon={<button>Play</button>}
/>
            <Carousel />
        </div>
    );

}

export default HomePage;