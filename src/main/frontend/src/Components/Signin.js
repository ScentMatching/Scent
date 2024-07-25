import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

    useEffect(() => {
        const fetchSigninPage = async () => {
            try {
                const response = await axios.get('/api/users/signin'); // GET 요청
                // 페이지를 로드하는 로직 (예: 상태에 저장)
                console.log(response.data); // 페이지 데이터 확인
            } catch (error) {
                console.error('로그인 페이지 로드 실패:', error);
            }
        };
        fetchSigninPage();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/signin', { email,password });
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
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Signin;
