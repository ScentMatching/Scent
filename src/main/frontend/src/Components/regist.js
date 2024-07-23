import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 사용합니다.

const CreatePostPage = () => {
    const [nickName, setNickName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // price를 double로, stock을 int로 변환
            await axios.post('/api/users/signup', { nickName,email,password });
            // 작성 후 목록 페이지로 이동 등의 추가 로직 작성
            navigate('/');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    nick_Name:
                    <input
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    password:
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreatePostPage;
