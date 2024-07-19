import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostListPage(){
    const [Product, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(response =>setProducts(response.data))
            .catch(error => console.log(error))
        },[]);

    return (
        <div>
            <h1>Post List</h1>
            <ul>
                {Product.map((product) => (
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
}
export default PostListPage;
