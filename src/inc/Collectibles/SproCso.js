import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import IDCK67L6I1 from './Categories/shoes/items/ID#CK67L6/1.jpg' 
import IDCK67L6I2 from './Categories/shoes/items/ID#CK67L6/2.jpg' 
import IDCK67L6I3 from './Categories/shoes/items/ID#CK67L6/3.jpg' 
import IDCK67L6I4 from './Categories/shoes/items/ID#CK67L6/4.jpg' 
import IDCK67L6I5 from './Categories/shoes/items/ID#CK67L6/5.jpg' 


function SproCso() {

    const photoIds = [IDCK67L6I1, IDCK67L6I2, IDCK67L6I3, IDCK67L6I4, IDCK67L6I5];

    const listItems = photoIds.map((photoId) => 
        <img src={photoId} alt="" className="" />
    ); 

    return (
        <div className="fullWSlider jcsb">
            <AliceCarousel
                duration={400}
                autoPlay={true}
                startIndex = {0}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={false}
                autoPlayInterval={3000}
                autoPlayActionDisabled={false}
                stopAutoPlayOnHover={true}
                showSlideIndex={true}
                buttonsDisabled={true}
            >
                {listItems}
            </AliceCarousel>
        </div>
    )
}

export default SproCso
