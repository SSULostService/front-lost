import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WriteForm.css';

function WriteForm({ onSubmit }) {
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 필수 필드 검증
        if (!title.trim() || !content.trim() || !category || !place.trim() || !date) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        const newPost = {
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            title,
            content,
            category,
            place,
            date,
            imageUrl: image || '',
        };

        onSubmit(newPost);
        alert('제출되었습니다!');
        navigate('/');
    };

    return (
        <div className="writeform-container">
            <h2>✍️ 글 작성</h2>
            <form className="writeform-form" onSubmit={handleSubmit}>
                <div>
                    <label>사진 첨부</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {image && <img src={image} alt="preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                </div>
                <div>
                    <label>제목</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>내용</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label>분류</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="휴대폰">휴대폰</option>
                        <option value="액세서리">액세서리</option>
                        <option value="지갑">지갑</option>
                    </select>
                </div>
                <div>
                    <label>보관 장소</label>
                    <input
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                        placeholder="예: 베어드홀, 도서관 등"
                    />
                </div>
                <div>
                    <label>날짜</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <button type="submit">제출하기</button>
            </form>
        </div>
    );
}

export default WriteForm;
