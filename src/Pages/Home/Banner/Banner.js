import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'

const Banner = () => {
    return (
        <div className='mt-5'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-warning'>Tour All Over The Country</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-warning'>Select Your Best Package For Your Travel</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-warning'>See Our Best Popular Destinations</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;