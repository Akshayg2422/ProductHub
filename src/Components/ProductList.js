import React, { useEffect, useState } from 'react';
import './ProductList.css'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        apiHandler()
    }, []);

    const apiHandler = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <div className={'mb-4'}>
            {products.length > 0 ? (
                <>
                    <h1>Product List</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((el) => {
                                const { id, title, price, category } = el;
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{title}</td>
                                        <td>{price}</td>
                                        <td>{category}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <div style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                    Loading...
                </div>
            )}
        </div>
    );
}

export default ProductList;
