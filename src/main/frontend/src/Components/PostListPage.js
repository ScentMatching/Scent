import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostListPage(){
    const [Product, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size] = useState(10); // 한 페이지에 보여줄 제품 수

    useEffect(() => {
        fetchProducts();
    }, [page, size]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`/api/posts?page=${encodeURIComponent(page)}&size=${encodeURIComponent(size)}`);
            setProducts(response.data.content); // 데이터 설정
            setTotalPages(response.data.totalPages); // 총 페이지 수 설정
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1);
        }
    };

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber); // 페이지 상태 업데이트
    };

    return (
        <div>
            <h1>Product</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                {Product.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button onClick={handlePreviousPage} disabled={page === 0}>
                    Previous
                </button>
                <span> Page {page + 1} of {totalPages} </span>
                <button onClick={handleNextPage} disabled={page === totalPages - 1}>
                    Next
                </button>
                <div>
                    {/* 페이지 번호 버튼 생성 */}
                    {Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index)} // 페이지 변경 함수 호출
                            disabled={index === page} // 현재 페이지는 비활성화
                            style={{margin: '0 5px'}} // 버튼 간격 조정
                        >
                            {index + 1} {/* 페이지 번호 표시 */}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostListPage;
