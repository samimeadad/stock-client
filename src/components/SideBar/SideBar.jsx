import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
    return (
        <div id="sidebar" className="h-100 pt-5">
            <div className="text-center">
                <h2><FontAwesomeIcon icon={ faUser } /></h2>
                <h4>Sabbir Ahmed</h4>
            </div>
            <div className=" mt-5 container">
                <ul className="list-unstyled">
                    <Link to="/blog" className="mouse-click text-dark text-decoration-none active"><li>Blog</li></Link>
                    <hr className="text-white" />
                    <Link to="/myStock" className="mouse-click text-dark text-decoration-none"><li>My Stocks</li></Link>
                    <hr className="text-white" />
                    <Link to="/referral" className="mouse-click text-dark text-decoration-none"><li>Refer A Friend</li></Link>
                    <hr className="text-white" />
                    <Link to="/subscriptionstatus" className="mouse-click text-dark text-decoration-none"><li>Subscription Status</li></Link>
                    <hr className="text-white" />
                    <Link to="/logout" className="mouse-click text-dark text-decoration-none"><li>Logout</li></Link>
                    <hr className="text-white" />
                </ul>
            </div>
        </div>
    );
};

export default SideBar;