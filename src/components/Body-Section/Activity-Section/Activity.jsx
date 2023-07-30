import React from 'react';
import './activity.css'

// icons
import { BsArrowRightShort } from "react-icons/bs";


//images
import customer1 from '../../../Assets/moi.jpg'

const Activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className='icon'/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={customer1} alt="customer 1" />
                    <div className="customerDetails">
                        <span className="name">Thomas Remblier</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={customer1} alt="customer 1" />
                    <div className="customerDetails">
                        <span className="name">Thomas Remblier</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={customer1} alt="customer 1" />
                    <div className="customerDetails">
                        <span className="name">Thomas Remblier</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={customer1} alt="customer 1" />
                    <div className="customerDetails">
                        <span className="name">Thomas Remblier</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={customer1} alt="customer 1" />
                    <div className="customerDetails">
                        <span className="name">Thomas Remblier</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2min ago
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;