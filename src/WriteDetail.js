import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './WriteDetail.css';

function WriteDetail({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = posts.find(p => p.id.toString() === id);

    if (!post) {
        return <div style={{ padding: '2rem' }}>❌ 게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div className="write-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">← 돌아가기</button>
            <h2>📄 글 상세 정보</h2>
            <div className="detail-item"><strong>제목:</strong> {post.title}</div>
            <div className="detail-item"><strong>내용:</strong> {post.content}</div>
            <div className="detail-item"><strong>분류:</strong> {post.category}</div>
            <div className="detail-item"><strong>보관 장소:</strong> {post.place}</div>
            <div className="detail-item"><strong>날짜:</strong> {post.date}</div>
            {post.imageUrl && (
                <div className="detail-image">
                    <img
                        src={post.imageUrl}
                        alt="첨부 이미지"
                        onError={(e) => {e.target.style.display = 'none';
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default WriteDetail;