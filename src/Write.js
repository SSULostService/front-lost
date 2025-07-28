import React from 'react';
import './Write.css';
import { useNavigate } from 'react-router-dom';

function Write({ posts = [] }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/write/new'); // 글 작성 페이지로 이동
    };

    return (
        <div className="write-page">
            <div className="main-content-wrapper">
                <h2>📋 분실물 게시판</h2>
                <table className="post-table">
                    <thead>
                    <tr>
                        <th>접수번호</th>
                        <th>분류</th>
                        <th>제목</th>
                        <th>보관장소</th>
                        <th>날짜</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map(post => (
                        <tr
                            key={post.id}
                            onClick={() => navigate(`/write/${post.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <td>{post.id}</td>
                            <td>{post.category}</td>
                            <td>{post.title}</td>
                            <td>{post.place}</td>
                            <td>{post.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button className="write-button" onClick={handleClick}>✏️ 글 작성</button>
            </div>
        </div>
    );
}

export default Write;
