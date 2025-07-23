import React from 'react';
import './Write.css';
import { useNavigate } from 'react-router-dom';

function Write() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/write/new'); // 글 작성 페이지로 이동
    };

    const dummyPosts = [
        { id: 'F2025072100002447', category: '휴대폰', title: '폴더폰(그레이)을 습득하여 보관 중', place: '나무계단', date: '2025-07-18' },
        { id: 'F2025072100002436', category: '휴대폰', title: '아이폰(그레이)을 습득하여 보관 중', place: '베어드홀', date: '2025-07-21' },
        { id: 'F2025072100002382', category: '액세서리', title: '버즈(검정)', place: '정보과학관', date: '2025-07-21' }
    ];

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
                    {dummyPosts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.category}</td>
                            <td>{post.title}</td>
                            <td>{post.place}</td>
                            <td>{post.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <button className="write-button" onClick={handleClick}>✏️ 글 작성</button>
        </div>
    );
}

export default Write;