import React from "react";
import { MdHome, MdMap, MdPhotoLibrary, MdArticle, MdInfo } from "react-icons/md"
import './Nav.css';
function Nav(){
    return (
        <nav className="site-nav">
            <ul>
                <li>
                    <a href="#home" className="nav-item">
                        <MdHome size="24" />
                        <span>홈</span>
                    </a>
                </li>
                <li>
                    <a href="#map" className="nav-item">
                        <MdMap size="24" />
                        <span>지도</span>
                    </a>
                </li>
                <li>
                    <a href="#image" className="nav-item">
                        <MdPhotoLibrary size="24" />
                        <span>사진</span>
                    </a>
                </li>
                <li>
                    <a href="#notice" className="nav-item">
                        <MdArticle size="24" />
                        <span>글</span>
                    </a>
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