
import React from "react";
import posts from './data/posts';
import './Maincontent.css';

function MainContent(){
    const recentPosts = posts.slice(0, 4);
    return (
        <main className="site-main-content">
            <div className="main-content-wrapper">
                <div className="main-top-section">
                    <h2>숭실대 분실물 찾기 서비스</h2>
                    <p>여러분의 잃어버린 물건을 찾아드리겠습니다</p>
                </div>
                <div className="main-bottom-section">
                    <h2>최근 올라온 게시물</h2>
                    <div className="recent-posts-grid">
                        {recentPosts.map(post => (
                            <div key={post.id} className="recent-post-item">
                                <img src={post.imageUrl} alt={post.title} className="recent-post-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;