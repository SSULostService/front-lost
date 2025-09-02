import React from 'react';
import './ImageGallery.css';
import { useNavigate } from 'react-router-dom';

function ImageGallery({ posts }) {
    const navigate = useNavigate();

    return (
        <div className="image-gallery-container">
            <h2>사진 게시판</h2>
            <div className="image-grid">
                {posts.map(post => (
                    <div
                        key={post.id}
                        className="image-item"
                        onClick={() => navigate(`/write/${post.id}`)}
                    >
                        {post.imageUrl && (
                            <img src={post.imageUrl} alt={post.title} />
                        )}
                    </div>
                ))}
            </div>
            <button onClick={() => navigate('/write/new')}>글 작성</button>
        </div>
    );
}

export default ImageGallery;