import React, { useEffect, useState } from 'react';

async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };

        fetchData();
    }, []);

    return (
        <div className={'container'} >
            <div className={''}>

                {products.length > 0 ? (
                    <>
                        <h1>Product List</h1>
                        <table border="1">
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
                    <div className="loader">
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList;
