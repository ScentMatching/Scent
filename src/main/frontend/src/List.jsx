import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostListPage = () => {
    const [Products, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {Products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Description: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostListPage;
