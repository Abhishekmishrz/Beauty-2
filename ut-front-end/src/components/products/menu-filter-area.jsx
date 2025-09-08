'use client';
import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";

const MenuFilterArea = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);

  // Sample data for all menu items
  const allMenuItems = [
    // Thali items
    {
      id: 1,
      title: "Mini Thali",
      subtitle: "Mini",
      rating: 4.5,
      prepTime: "15 min",
      servings: "1 serving",
      price: "₹129",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Perfect for a light meal",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 2,
      title: "Normal Thali",
      subtitle: "Regular",
      rating: 4.6,
      prepTime: "20 min",
      servings: "2 servings",
      price: "₹189",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Classic home-style meal",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 3,
      title: "Premium Thali",
      subtitle: "Premium",
      rating: 4.7,
      prepTime: "25 min",
      servings: "2 servings",
      price: "₹259",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "Traditional Indian flavors",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 4,
      title: "Silver Thali",
      subtitle: "Silver",
      rating: 4.8,
      prepTime: "30 min",
      servings: "2-3 servings",
      price: "₹549",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Gourmet presentation",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 5,
      title: "Gold Thali",
      subtitle: "Gold",
      rating: 4.9,
      prepTime: "35 min",
      servings: "3-4 servings",
      price: "₹699",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Luxury dining experience",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    // Add-ons items
    {
      id: 6,
      title: "Roti",
      subtitle: "Bread",
      rating: 4.3,
      prepTime: "3 min",
      servings: "1 serving",
      price: "₹15",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "Fresh Indian bread",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 7,
      title: "Raita",
      subtitle: "Yogurt",
      rating: 4.1,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹40",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Cooling yogurt side",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 8,
      title: "Papad",
      subtitle: "Crispy",
      rating: 4.0,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹20",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Crispy papad",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 9,
      title: "Gulab Jamun (2 pcs)",
      subtitle: "Dessert",
      rating: 4.6,
      prepTime: "5 min",
      servings: "1 serving",
      price: "₹40",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Sweet Indian dessert",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 10,
      title: "Masala Chaas",
      subtitle: "Drink",
      rating: 4.4,
      prepTime: "3 min",
      servings: "1 serving",
      price: "₹40",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Spiced buttermilk",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 11,
      title: "Shikanji Bottle / Masala",
      subtitle: "Drink",
      rating: 4.2,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹15",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Refreshing lemon drink",
      category: "addons",
      cuisine: "Add-ons, Extras"
    }
  ];

  // Filter items based on active filter
  const filteredItems = allMenuItems.filter(item => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Check if there are any thali items in cart
  const hasThaliInCart = cart_products.some(item => item.category === 'thali');

  const handleAddToCart = (item) => {
    // Convert price string to number (remove ₹ and convert to number)
    const price = parseFloat(item.price.replace('₹', ''));
    
    // Create cart item with required properties
    const cartItem = {
      _id: item.id.toString(),
      title: item.title,
      price: price,
      quantity: 100, // Set a high quantity for availability
      img: item.image, // Changed from 'image' to 'img' to match cart component expectations
      category: item.category,
      description: item.description
    };
    
    dispatch(add_cart_product(cartItem));
  };

  return (
    <section id="menu-section" className="tp-product-area grey-bg-8 pt-95 pb-80">
      <div className="container-fluid" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        {/* Header Section */}
        <div className="row justify-content-center mb-50">
          <div className="col-lg-10 col-md-10">
            <div className="tp-section-title-wrapper-3 mb-55 text-center">
              <span className="tp-section-title-pre-3" style={{ color: '#FCB53B', fontSize: '16px', fontWeight: '600' }}>
                Explore our complete menu
              </span>
              <h3 className="tp-section-title-3" style={{ fontSize: '32px', fontWeight: '700', color: '#1f2937', marginTop: '8px' }}>
                with traditional thalis and delicious add-ons
              </h3>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-50">
          <div className="col-lg-12">
            <div className="tp-menu-filter-buttons d-flex justify-content-center gap-3 flex-wrap">
              <button
                onClick={() => handleFilterChange('all')}
                className={`tp-menu-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'all' ? '#FCB53B' : 'white',
                  color: activeFilter === 'all' ? 'white' : '#6b7280',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                All Menu
              </button>
              <button
                onClick={() => handleFilterChange('thali')}
                className={`tp-menu-filter-btn ${activeFilter === 'thali' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'thali' ? '#FCB53B' : 'white',
                  color: activeFilter === 'thali' ? 'white' : '#6b7280',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                Thali
              </button>
              <button
                onClick={() => handleFilterChange('addons')}
                className={`tp-menu-filter-btn ${activeFilter === 'addons' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'addons' ? '#FCB53B' : 'white',
                  color: activeFilter === 'addons' ? 'white' : '#6b7280',
                  padding: '12px 32px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                Add-ons
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="row" style={{ marginLeft: '0', marginRight: '0' }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-2 col-md-3 col-sm-6 mb-30" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
              <div className="tp-product-item-3 p-relative transition-3" style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                height: '100%',
                width: '100%'
              }}>
                {/* Product Image */}
                <div className="tp-product-thumb-3 p-relative fix" style={{height: '180px', overflow: 'hidden'}}>
                  <div 
                    className="include-bg"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '100%',
                      width: '100%'
                    }}
                  ></div>
                </div>

                {/* Product Content */}
                <div className="tp-product-content-3" style={{padding: '12px'}}>
                  <h3 className="tp-product-title-3" style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginBottom: '2px',
                    color: '#1f2937'
                  }}>
                    <Link href={`/product-details/${item.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                      {item.title}
                    </Link>
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    marginBottom: '4px',
                    fontWeight: '500'
                  }}>
                    {item.subtitle}
                  </p>

                  {/* Rating */}
                  <div className="tp-product-rating" style={{marginBottom: '4px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill={i < Math.floor(item.rating) ? '#ffc107' : '#e5e7eb'}
                            style={{marginRight: '2px'}}
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span style={{fontSize: '12px', color: '#6b7280', marginLeft: '4px'}}>
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  {/* Product Details - Time and Servings */}
                  <div className="tp-product-info-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px'}}>
                    {/* Time */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      <span>{item.prepTime}</span>
                    </div>
                    
                    {/* Servings */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span>{item.servings}</span>
                    </div>
                  </div>

                  {/* Cuisine Type */}
                  <div style={{marginBottom: '8px'}}>
                    <span style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      backgroundColor: '#f3f4f6',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}>
                      {item.cuisine}
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="tp-product-bottom-3" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div className="tp-product-price-3">
                      <span style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#FCB53B'
                      }}>
                        {item.price}
                      </span>
                    </div>
                    <div className="tp-product-cart-3">
                      <button
                        className="tp-btn"
                        onClick={() => handleAddToCart(item)}
                        style={{
                          backgroundColor: (item.category === 'addons' && !hasThaliInCart) ? '#6b7280' : '#FCB53B',
                          color: 'white',
                          padding: '6px 16px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: (item.category === 'addons' && !hasThaliInCart) ? 'not-allowed' : 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          height: '32px',
                          minWidth: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                        disabled={item.category === 'addons' && !hasThaliInCart}
                      >
                        {(item.category === 'addons' && !hasThaliInCart) ? 'Add Thali First' : 'Add'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuFilterArea;
