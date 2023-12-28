import React, { useState, useEffect } from 'react';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch data from the API assbdchgdchj
    fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Product Details</h1>
      {product ? (
        <div style={styles.productContainer}>
          <h2> Product: {product.title}</h2>
          <p style={styles.description}> Product Description: {product.description}</p>
          <p style={styles.price}>Price: ${product.price}</p>
          <p style={styles.discount}>Discount: {product.discountPercentage}%</p>
          <p style={styles.rating}>Rating: {product.rating}</p>
          <p style={styles.stock}>Stock: {product.stock}</p>
          <p style={styles.brand}>Brand: {product.brand}</p>
          <p style={styles.category}>Category: {product.category}</p>
          <img src={product.thumbnail} alt={product.title} style={styles.thumbnail} />

          <h3 style={styles.additionalImages}>Additional Images:</h3>
          <div style={styles.imageContainer}>
            {product.images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.additionalImage} />
            ))}
          </div>
        </div>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: 'green'
  },
  productContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  description: {
    marginBottom: '10px',
  },
  price: {
    fontWeight: 'bold',
  },
  discount: {
    color: 'green',
  },
  rating: {
    marginBottom: '10px',
  },
  stock: {
    marginBottom: '10px',
  },
  brand: {
    marginBottom: '10px',
  },
  category: {
    marginBottom: '20px',
  },
  thumbnail: {
    width: '100%',
    marginBottom: '20px',
  },
  additionalImages: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  imageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  additionalImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  loading: {
    fontStyle: 'italic',
  },
};

export default ProductDetails;
