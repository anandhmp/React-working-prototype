import React from 'react';
import './Main.css'
import Carousel,{CarouselItem} from '../Carousel/Carousel';
import firstSlide from './firstslide.png'; 
import secondSlide from './secondslide.png'
import thirdSlide from './thirdslide.png'
import { useState } from 'react';

const Main = () => {

  const [quantity, setQuantity] = useState(1);
  const originalPrice = 399;
  const crossPrice = 499;
  const [showTooltip, setShowTooltip] = useState(false); 


  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const calculatePrice = (price, quantity) => {
    return price * quantity;
  };

  const handleDetailsHover = () => {
    setShowTooltip(true);
  };

  const handleDetailsLeave = () => {
    setShowTooltip(false);
  };


  return (
    <div className='main'>
      <div className='row'>
        <div className='left-main'>
        <Carousel>
            <CarouselItem onPrev={() => {}} onNext={() => {}}>
                <img className='carousal-img' src={firstSlide} alt="Image 1" style={{ width: '100%' }} />
            </CarouselItem>
            <CarouselItem onPrev={() => {}} onNext={() => {}}>
                <img className='carousal-img' src={secondSlide} alt="Image 2" style={{ width: '100%' }} />
            </CarouselItem>
            <CarouselItem onPrev={() => {}} onNext={() => {}}>
                <img className='carousal-img' src={thirdSlide} alt="Image 3" style={{ width: '100%' }} />
            </CarouselItem>
        </Carousel>
        </div>
        
        <div className='right-main'>
            <div className='content'>
            <h1 className='heading'>Greeny Wooden <br/> <span className='sub-heading'>Arm Chair</span> </h1>
            <p className='item-code'>Item code:#1243</p>
            <p className='description'>DESCRIPTION</p>
            <p className='description-text'>demonstrate the visual form of a document or a typeface without relying on meaningful</p>
            <hr className='hr-tag'/>
            <div className='price'>PRICE</div>
            <div className='price-box'>
            <span className='orginal-price'>$ {calculatePrice(originalPrice, quantity)}</span>
            <span className='cross-price'>$ {calculatePrice(crossPrice, quantity)}</span>
            </div>
            <div className='color-section'>
            <div className='color-text'>COLOR</div>
            <select name="color" id="color">
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
            </select>
            </div>

            <div className='quantity-section'>
            <div className='quantity'>QUANTITIY</div>
            <select name="quantity" id="quantity" onChange={handleQuantityChange}>
            {[...Array(5)].map((_, index) => (
            <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
            </select>
            <button className='btn-card'>ADD TO CART</button>  
            </div>

            <div className='row-footer'>
                <hr className='hr-2'/>
                <span className='footer-items tooltip-container' onMouseEnter={handleDetailsHover} onMouseLeave={handleDetailsLeave}>DETAILS
                {showTooltip && (
                  <div className="tooltip">
                    <span className="tooltip-text">Wooden Arm Chair</span>
                  </div>
                )}
              </span>
            <span className='footer-items'>DELIVERY</span>
            <span className='footer-items'>RETURN</span>
            </div>
            </div>
        </div>  
      </div>
    </div>
  );
};

export default Main;
