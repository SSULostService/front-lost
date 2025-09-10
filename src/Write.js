import React, { useState, useMemo } from 'react';
import './Write.css';
import { useNavigate } from 'react-router-dom';

function Write({ posts = [] }) {
    const navigate = useNavigate();
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const sortedPosts = useMemo(() => {
        let sortablePosts = [...posts];
        if (sortConfig.key) {
            sortablePosts.sort((a, b) => {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];

                if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return sortablePosts;
    }, [posts, sortConfig]);

    const handleSort = (key) => {
        setSortConfig((prev) => {
            if (prev.key === key) {
                return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
            }
            return { key, direction: 'asc' };
        });
    };

    const handleClick = () => {
        navigate('/write/new');
    };

    return (
        <div className="write-page">
            <div className="main-content-wrapper">
                <h2>📋 분실물 게시판</h2>
                <table className="post-table">
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>접수번호 {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}</th>
                        <th onClick={() => handleSort('category')}>분류 {sortConfig.key === 'category' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}</th>
                        <th onClick={() => handleSort('title')}>제목 {sortConfig.key === 'title' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}</th>
                        <th onClick={() => handleSort('place')}>보관장소 {sortConfig.key === 'place' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}</th>
                        <th onClick={() => handleSort('date')}>날짜 {sortConfig.key === 'date' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sortedPosts.map(post => (
                        <tr key={post.id} onClick={() => navigate(`/write/${post.id}`)} style={{ cursor: 'pointer' }}>
                            <td>{post.id}</td>        {/* 접수번호 */}
                            <td>{post.category}</td>  {/* 분류 */}
                            <td>{post.title}</td>     {/* 제목 */}
                            <td>{post.place}</td>     {/* 보관장소 */}
                            <td>{post.date}</td>      {/* 날짜 */}
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
