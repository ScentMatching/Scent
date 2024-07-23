import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate를 사용합니다.

const CreatePostPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // price를 double로, stock을 int로 변환
            const priceAsNumber = parseFloat(price); // double로 변환
            const stockAsNumber = parseInt(stock, 10); // int로 변환
            await axios.post('/api/posts', { name, price:priceAsNumber, stock:stockAsNumber, description });
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
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Price:
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Stock:
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreatePostPage;
