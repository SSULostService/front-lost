import React from "react";
import { MdHome, MdMap, MdPhotoLibrary, MdArticle, MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import './Nav.css';

function Nav(){
    return (
        <nav className="site-nav">
            <ul>
                <li>
                    <Link to="/" className="nav-item">
                        <MdHome size="24" />
                        <span>홈</span>
                    </Link>
                </li>
                <li>
                    <a href="#map" className="nav-item">
                        <MdMap size="24" />
                        <span>지도</span>
                    </a>
                </li>
                <li>
                    <Link to="/image" className="nav-item">
                        <MdPhotoLibrary size="24" />
                        <span>사진</span>
                    </Link>
                </li>
                <li>
                    <Link to="/write" className="nav-item">
                        <MdArticle size="24" />
                        <span>글</span>
                    </Link>
                </li>
                <li>
                    <a href="#info" className="nav-item">
                        <MdInfo size="24" />
                        <span>정보</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;