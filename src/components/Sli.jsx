import React, { useState, useEffect } from 'react';

const AliExpressCarouselItem = ({ 
  product = {
    discount: 30,
    image: 'https://via.placeholder.com/220',
    title: 'Wireless Bluetooth Headphones',
    currentPrice: '25.99',
    originalPrice: '37.99',
    rating: 4,
    reviewCount: '1,245',
    freeShipping: true,
    dealEndHours: 12 // Default 12 hour countdown
  }
}) => {
  // Calculate initial time left
  const calculateTimeLeft = () => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + (product.dealEndHours || 12));
    const difference = endTime - new Date();
    
    return {
      hours: Math.max(0, Math.floor(difference / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
      expired: difference < 0
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update countdown every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Generate star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div style={{display:"flex",flexFlow:"row wrap"}}>
    <div className="carousel-item-box">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <span className="countdown-label">Deal ends in:</span>
        {!timeLeft.expired ? (
          <div className="timer">
            <span className="hours">{timeLeft.hours.toString().padStart(2, '0')}</span>:
            <span className="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
            <span className="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        ) : (
          <div className="timer-expired">Deal expired</div>
        )}
      </div>

      {/* Product Image with fallback */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/220';
          e.target.alt = 'Product image not available';
        }}
      />
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title.length > 50 
            ? `${product.title.substring(0, 50)}...` 
            : product.title}
        </h3>
        
        <div className="price-container">
          <span className="current-price">${product.currentPrice}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        
        <div className="rating">
          <span className="stars" aria-label={`Rating: ${product.rating} out of 5`}>
            {renderStars(product.rating)}
          </span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        
        {product.freeShipping && (
          <div className="shipping-info">Free Shipping</div>
        )}
        
        <button 
          className="add-to-cart"
          aria-label={`Add ${product.title} to cart`}
          onClick={() => console.log('Added to cart:', product.title)}
        >
          Add to Cart
        </button>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .carousel-item-box {
          width: 220px;
          border: 1px solid #f2f2f2;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          background: white;
          transition: transform 0.2s;
        }
        
        .carousel-item-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #ff4747;
          color: white;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 14px;
          z-index: 1;
        }
        
        .countdown-timer {
          background-color: #f8f8f8;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .countdown-label {
          font-size: 12px;
          color: #666;
          display: block;
          margin-bottom: 5px;
        }
        
        .timer {
          font-weight: bold;
          color: #ff4747;
          font-size: 16px;
        }
        
        .timer-expired {
          color: #ff4747;
          font-weight: bold;
        }
        
        .product-image {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
          background: #f8f8f8;
          border-radius: 4px;
        }
        
        .product-title {
          font-size: 14px;
          margin: 5px 0;
          color: #333;
          height: 40px;
          overflow: hidden;
          line-height: 1.4;
        }
        
        .price-container {
          margin: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .current-price {
          font-size: 18px;
          color: #ff4747;
          font-weight: bold;
        }
        
        .original-price {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
          margin-left: 8px;
        }
        
        .rating {
          margin: 5px 0;
          display: flex;
          align-items: center;
        }
        
        .stars {
          color: #ffb700;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .review-count {
          color: #666;
          font-size: 12px;
          margin-left: 5px;
        }
        
        .shipping-info {
          color: #00a650;
          font-size: 12px;
          margin: 5px 0;
        }
        
        .add-to-cart {
          width: 100%;
          background-color: #ff4747;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.2s;
        }
        
        .add-to-cart:hover {
          background-color: #e63e3e;
        }
      `}</style>
    </div>
    <div className="carousel-item-box">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <span className="countdown-label">Deal ends in:</span>
        {!timeLeft.expired ? (
          <div className="timer">
            <span className="hours">{timeLeft.hours.toString().padStart(2, '0')}</span>:
            <span className="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
            <span className="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        ) : (
          <div className="timer-expired">Deal expired</div>
        )}
      </div>

      {/* Product Image with fallback */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/220';
          e.target.alt = 'Product image not available';
        }}
      />
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title.length > 50 
            ? `${product.title.substring(0, 50)}...` 
            : product.title}
        </h3>
        
        <div className="price-container">
          <span className="current-price">${product.currentPrice}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        
        <div className="rating">
          <span className="stars" aria-label={`Rating: ${product.rating} out of 5`}>
            {renderStars(product.rating)}
          </span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        
        {product.freeShipping && (
          <div className="shipping-info">Free Shipping</div>
        )}
        
        <button 
          className="add-to-cart"
          aria-label={`Add ${product.title} to cart`}
          onClick={() => console.log('Added to cart:', product.title)}
        >
          Add to Cart
        </button>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .carousel-item-box {
          width: 220px;
          border: 1px solid #f2f2f2;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          background: white;
          transition: transform 0.2s;
        }
        
        .carousel-item-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #ff4747;
          color: white;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 14px;
          z-index: 1;
        }
        
        .countdown-timer {
          background-color: #f8f8f8;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .countdown-label {
          font-size: 12px;
          color: #666;
          display: block;
          margin-bottom: 5px;
        }
        
        .timer {
          font-weight: bold;
          color: #ff4747;
          font-size: 16px;
        }
        
        .timer-expired {
          color: #ff4747;
          font-weight: bold;
        }
        
        .product-image {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
          background: #f8f8f8;
          border-radius: 4px;
        }
        
        .product-title {
          font-size: 14px;
          margin: 5px 0;
          color: #333;
          height: 40px;
          overflow: hidden;
          line-height: 1.4;
        }
        
        .price-container {
          margin: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .current-price {
          font-size: 18px;
          color: #ff4747;
          font-weight: bold;
        }
        
        .original-price {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
          margin-left: 8px;
        }
        
        .rating {
          margin: 5px 0;
          display: flex;
          align-items: center;
        }
        
        .stars {
          color: #ffb700;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .review-count {
          color: #666;
          font-size: 12px;
          margin-left: 5px;
        }
        
        .shipping-info {
          color: #00a650;
          font-size: 12px;
          margin: 5px 0;
        }
        
        .add-to-cart {
          width: 100%;
          background-color: #ff4747;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.2s;
        }
        
        .add-to-cart:hover {
          background-color: #e63e3e;
        }
      `}</style>
    </div>
    <div className="carousel-item-box">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <span className="countdown-label">Deal ends in:</span>
        {!timeLeft.expired ? (
          <div className="timer">
            <span className="hours">{timeLeft.hours.toString().padStart(2, '0')}</span>:
            <span className="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
            <span className="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        ) : (
          <div className="timer-expired">Deal expired</div>
        )}
      </div>

      {/* Product Image with fallback */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/220';
          e.target.alt = 'Product image not available';
        }}
      />
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title.length > 50 
            ? `${product.title.substring(0, 50)}...` 
            : product.title}
        </h3>
        
        <div className="price-container">
          <span className="current-price">${product.currentPrice}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        
        <div className="rating">
          <span className="stars" aria-label={`Rating: ${product.rating} out of 5`}>
            {renderStars(product.rating)}
          </span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        
        {product.freeShipping && (
          <div className="shipping-info">Free Shipping</div>
        )}
        
        <button 
          className="add-to-cart"
          aria-label={`Add ${product.title} to cart`}
          onClick={() => console.log('Added to cart:', product.title)}
        >
          Add to Cart
        </button>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .carousel-item-box {
          width: 220px;
          border: 1px solid #f2f2f2;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          background: white;
          transition: transform 0.2s;
        }
        
        .carousel-item-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #ff4747;
          color: white;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 14px;
          z-index: 1;
        }
        
        .countdown-timer {
          background-color: #f8f8f8;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .countdown-label {
          font-size: 12px;
          color: #666;
          display: block;
          margin-bottom: 5px;
        }
        
        .timer {
          font-weight: bold;
          color: #ff4747;
          font-size: 16px;
        }
        
        .timer-expired {
          color: #ff4747;
          font-weight: bold;
        }
        
        .product-image {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
          background: #f8f8f8;
          border-radius: 4px;
        }
        
        .product-title {
          font-size: 14px;
          margin: 5px 0;
          color: #333;
          height: 40px;
          overflow: hidden;
          line-height: 1.4;
        }
        
        .price-container {
          margin: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .current-price {
          font-size: 18px;
          color: #ff4747;
          font-weight: bold;
        }
        
        .original-price {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
          margin-left: 8px;
        }
        
        .rating {
          margin: 5px 0;
          display: flex;
          align-items: center;
        }
        
        .stars {
          color: #ffb700;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .review-count {
          color: #666;
          font-size: 12px;
          margin-left: 5px;
        }
        
        .shipping-info {
          color: #00a650;
          font-size: 12px;
          margin: 5px 0;
        }
        
        .add-to-cart {
          width: 100%;
          background-color: #ff4747;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.2s;
        }
        
        .add-to-cart:hover {
          background-color: #e63e3e;
        }
      `}</style>
    </div>
    <div className="carousel-item-box">
      {/* Discount Badge */}
      {product.discount > 0 && (
        <div className="discount-badge">-{product.discount}%</div>
      )}

      {/* Countdown Timer */}
      <div className="countdown-timer">
        <span className="countdown-label">Deal ends in:</span>
        {!timeLeft.expired ? (
          <div className="timer">
            <span className="hours">{timeLeft.hours.toString().padStart(2, '0')}</span>:
            <span className="minutes">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
            <span className="seconds">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
        ) : (
          <div className="timer-expired">Deal expired</div>
        )}
      </div>

      {/* Product Image with fallback */}
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/220';
          e.target.alt = 'Product image not available';
        }}
      />
      
      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title" title={product.title}>
          {product.title.length > 50 
            ? `${product.title.substring(0, 50)}...` 
            : product.title}
        </h3>
        
        <div className="price-container">
          <span className="current-price">${product.currentPrice}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
        
        <div className="rating">
          <span className="stars" aria-label={`Rating: ${product.rating} out of 5`}>
            {renderStars(product.rating)}
          </span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        
        {product.freeShipping && (
          <div className="shipping-info">Free Shipping</div>
        )}
        
        <button 
          className="add-to-cart"
          aria-label={`Add ${product.title} to cart`}
          onClick={() => console.log('Added to cart:', product.title)}
        >
          Add to Cart
        </button>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .carousel-item-box {
          width: 220px;
          border: 1px solid #f2f2f2;
          border-radius: 8px;
          padding: 15px;
          margin: 10px;
          position: relative;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
          background: white;
          transition: transform 0.2s;
        }
        
        .carousel-item-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: #ff4747;
          color: white;
          padding: 3px 8px;
          border-radius: 3px;
          font-weight: bold;
          font-size: 14px;
          z-index: 1;
        }
        
        .countdown-timer {
          background-color: #f8f8f8;
          padding: 8px;
          border-radius: 4px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .countdown-label {
          font-size: 12px;
          color: #666;
          display: block;
          margin-bottom: 5px;
        }
        
        .timer {
          font-weight: bold;
          color: #ff4747;
          font-size: 16px;
        }
        
        .timer-expired {
          color: #ff4747;
          font-weight: bold;
        }
        
        .product-image {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
          background: #f8f8f8;
          border-radius: 4px;
        }
        
        .product-title {
          font-size: 14px;
          margin: 5px 0;
          color: #333;
          height: 40px;
          overflow: hidden;
          line-height: 1.4;
        }
        
        .price-container {
          margin: 8px 0;
          display: flex;
          align-items: center;
        }
        
        .current-price {
          font-size: 18px;
          color: #ff4747;
          font-weight: bold;
        }
        
        .original-price {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
          margin-left: 8px;
        }
        
        .rating {
          margin: 5px 0;
          display: flex;
          align-items: center;
        }
        
        .stars {
          color: #ffb700;
          font-size: 16px;
          letter-spacing: 1px;
        }
        
        .review-count {
          color: #666;
          font-size: 12px;
          margin-left: 5px;
        }
        
        .shipping-info {
          color: #00a650;
          font-size: 12px;
          margin: 5px 0;
        }
        
        .add-to-cart {
          width: 100%;
          background-color: #ff4747;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
          transition: background-color 0.2s;
        }
        
        .add-to-cart:hover {
          background-color: #e63e3e;
        }
      `}</style>
    </div>

    </div>

  );
};

export default AliExpressCarouselItem;