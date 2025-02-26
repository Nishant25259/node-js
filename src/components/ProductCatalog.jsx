import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Locks', price: 29.99, image: '/image1.jpeg' ,discription:'This is a lock'},
    { id: 2, name: 'Cabinet hardware', price: 39.99, image: '/image2.jpg',discription:'This is a cabinet hardware' },
    { id: 3, name: 'Door hardware', price: 49.99, image: '/image3.avif',discription:'This is a door hardware' },
    { id: 4, name: 'Paints', price: 19.99, image: '/image4.jpeg',discription:'This is a paint' },
    { id: 5, name: 'Garden spinkler', price: 9.99, image: '/image5.jpg',discription:'This is a garden spinkler' },
    { id: 6, name: 'Fasterner', price: 29.99, image: '/image6.avif' ,discription:'This is a fasterner'},
    { id: 7, name: 'Plumbing kit', price: 39.99, image: '/image7.webp',discription:'This is a plumbing kit' },
    { id: 8, name: 'Electrical kit', price: 49.99, image: '/image8.webp' ,discription:'This is a electrical kit'},
];

const ProductCatalog = () => {
    console.log('ProductCatalog component rendered');

    const styles = {
        width: '100%',
        height: '100%',
        margin: '0',
    };

    return (
        <div id='products' className='py-8 px-8' style={styles}>
            <h1 className='text-4xl font-bold text-center mb-8'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCatalog;
