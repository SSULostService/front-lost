import React, { useState } from 'react';
import './WriteForm.css';

function WriteForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 서버로 데이터 전송 등의 로직 추가
        console.log({ title, content, category });
        alert('제출되었습니다!');
    };

    return (
        <div className="writeform-container">
            <h2>✍️ 글 작성 폼</h2>
            <form className="writeform-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="제목을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="content">내용</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="내용을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="category">분류</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">선택하세요</option>
                        <option value="휴대폰">휴대폰</option>
                        <option value="액세서리">액세서리</option>
                        <option value="지갑">지갑</option>
                    </select>
                </div>
                <button type="submit">제출하기</button>
            </form>
        </div>
    );
}

export default WriteForm;