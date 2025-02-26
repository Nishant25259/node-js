import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const styles = {
        backgroundcolor: 'white',
        padding: '1rem',
        blur: '10px',
        borderRadius: '10px',
    };

    const zoom = {
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease-in-out',
            cursor: 'pointer',  
        } 
    };

    return (
        <div className='border flex flex-col justify-start bg-blue-200  p-4 rounded-lg  shadow-lg mx-4 ' style={styles} >
            <img src={product.image } alt={product.name} className='w-full h-70 object-cover mb-4 rounded  ' style={zoom} />
            <h2 className='text-2xl font-bold mb-2'>{product.name}</h2>
            <p className='text-xl text-gray-700 mb-4'>${product.price}</p>
            <p className=' text-gray-700 mb-4'>{product.discription}</p>
            <a href={`/product/${product.id}`}>
                <button className='bg-black text-white px-4 py-2 mx-1 my-1 rounded-full hover:bg-[#9d7cff] transition duration-300 ease-in-out'>
                    View Details
                </button>
            </a>
            <a href={`/product/${product.id}`}>
                <button className='bg-black text-white px-4 py-2 mx-1 my-1 rounded-full hover:bg-[#9d7cff] transition duration-300 ease-in-out'>
                    Add to Cart
                </button>
            </a>

        </div>
    );
};

export default Product;
