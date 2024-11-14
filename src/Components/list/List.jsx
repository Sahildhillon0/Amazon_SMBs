import React, { useEffect, useState } from 'react';
import './list.css';

function List() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the API
    useEffect(() => {
        fetch('https://amazon-smbs-product-api.vercel.app/api/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className='mt-20 text-center'>Loading...</div>;
    }

    return (
        <div className='main-div'>
            {products.map(function (item) {
                return (
                    <div className='child' key={item.serialNumber}>
                        <div className='serialNumber'>
                            <h3>Serial No. {item.serialNumber}</h3>
                            <h3>Seller Name: {item.sellerName}</h3>
                            <h3>Price: Rs. {item.price}</h3>
                            <h3>Expected Delivery Time: {item.deliveryTime}</h3>
                            <button>Show All</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default List;
