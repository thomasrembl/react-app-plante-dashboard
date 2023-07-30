import React from 'react';
import './listing.css'

import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

import img4 from '../../../Assets/img4.jpg'
import imguser1 from '../../../Assets/moi.jpg'

const Listing = () => {
    return (
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img4} alt="Plante 4" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img4} alt="Plante 4" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img4} alt="Plante 4" />
                    <h3>Annual Vince</h3>
                </div>
                <div className="singleItem">
                    <AiFillHeart className='icon'/>
                    <img src={img4} alt="Plante 4" />
                    <h3>Annual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">

                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                        </div>
                        <div className="cardText">
                            <span>14.789 Plant Sold <br />
                                <small>
                                    21 Sellers <span className="date">7 days </span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                            See All <BsArrowRightShort className='icon'/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                            <img src={imguser1} alt="User profile" />
                        </div>
                        <div className="cardText">
                            <span>37,789 Plant Sold <br />
                                <small>
                                    29 Sellers <span className="date">31 Days </span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;