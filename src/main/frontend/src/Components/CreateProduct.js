import React, { useState } from 'react';
import axios from 'axios';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/posts', { title, content });
            // 작성 후 목록 페이지로 이동 등의 추가 로직 작성

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreatePostPage;
