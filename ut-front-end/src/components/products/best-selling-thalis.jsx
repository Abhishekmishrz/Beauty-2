'use client';
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";

const BestSellingThalis = () => {
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);
  
  // handle add product
  const handleAddProduct = (product) => {
    dispatch(add_cart_product(product));
  };
  
  const thaliProducts = [
    {
      _id: "thali-1",
      id: 1,
      title: "Mini Thali",
      subtitle: "Mini",
      rating: 4.5,
      prepTime: "15 min",
      servings: "1 serving",
      price: 129,
      img: "/assets/img/product/collection/collection-1.jpg",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Perfect for a light meal",
      category: "thali",
      quantity: 10,
      status: "in-stock"
    },
    {
      _id: "thali-2",
      id: 2,
      title: "Premium Thali",
      subtitle: "Premium",
      rating: 4.7,
      prepTime: "25 min",
      servings: "2 servings",
      price: 259,
      img: "/assets/img/product/collection/collection-2.jpg",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Traditional Indian flavors",
      category: "thali",
      quantity: 10,
      status: "in-stock"
    },
    {
      _id: "thali-3",
      id: 3,
      title: "Silver Thali",
      subtitle: "Silver",
      rating: 4.8,
      prepTime: "30 min",
      servings: "2-3 servings",
      price: 549,
      img: "/assets/img/product/collection/collection-3.jpg",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "Gourmet presentation",
      category: "thali",
      quantity: 10,
      status: "in-stock"
    },
    {
      _id: "thali-4",
      id: 4,
      title: "Gold Thali",
      subtitle: "Gold",
      rating: 4.9,
      prepTime: "35 min",
      servings: "3-4 servings",
      price: 699,
      img: "/assets/img/product/collection/collection-1.jpg",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Luxury dining experience",
      category: "thali",
      quantity: 10,
      status: "in-stock"
    },
    {
      _id: "thali-5",
      id: 5,
      title: "Normal Thali",
      subtitle: "Regular",
      rating: 4.6,
      prepTime: "20 min",
      servings: "2 servings",
      price: 189,
      img: "/assets/img/product/collection/collection-2.jpg",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Classic home-style meal",
      category: "thali",
      quantity: 10,
      status: "in-stock"
    }
  ];

  return (
    <section className="tp-product-area pt-95 pb-100" style={{marginLeft: '0', marginRight: '0', paddingLeft: '0', paddingRight: '0'}}>
      <div className="container-fluid" style={{paddingLeft: '0', paddingRight: '0'}}>
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-section-title-wrapper-3 mb-45 text-center" style={{paddingLeft: '20px', paddingRight: '20px'}}>
              <h3 className="tp-section-title-3" style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px'}}>
                Best Selling Thalis
              </h3>
              <p style={{fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto'}}>
                Discover our premium thali collection, from mini portions to luxury gold thalis, carefully curated for every appetite
              </p>
            </div>
          </div>
        </div>
        
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-product-slider-3">
              <div className="row" style={{marginLeft: '0', marginRight: '0', gap: '15px', paddingLeft: '20px', paddingRight: '20px'}}>
                {thaliProducts.map((product) => (
                  <div key={product.id} className="col-lg-2 col-md-4 col-sm-6" style={{paddingLeft: '0', paddingRight: '0', flex: '1', minWidth: '200px'}}>
                    <div className="tp-product-item-3 p-relative transition-3 mb-30" style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      overflow: 'hidden',
                      height: '100%',
                      width: '100%'
                    }}>
                      {/* Product Image */}
                      <div className="tp-product-thumb-3 p-relative fix" style={{height: '200px', overflow: 'hidden'}}>
                        <div 
                          className="include-bg"
                          style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            width: '100%'
                          }}
                        ></div>
                      </div>

                      {/* Product Content */}
                      <div className="tp-product-content-3" style={{padding: '20px'}}>
                        <h3 className="tp-product-title-3" style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          marginBottom: '4px',
                          color: '#1f2937'
                        }}>
                          <Link href={`/product-details/${product.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                            {product.title}
                          </Link>
                        </h3>

                        <p style={{
                          fontSize: '14px',
                          color: '#6b7280',
                          marginBottom: '8px',
                          fontWeight: '500'
                        }}>
                          {product.subtitle}
                        </p>

                        {/* Product Details - Time and Servings only */}
                        <div className="tp-product-info-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '0'}}>
                          {/* Time */}
                          <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            <span>{product.prepTime}</span>
                          </div>
                          
                          {/* Servings */}
                          <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>{product.servings}</span>
                          </div>
                        </div>

                        {/* Price and Add to Cart */}
                        <div className="tp-product-bottom-3" style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginTop: '16px'
                        }}>
                          <div className="tp-product-price-3">
                            <span style={{
                              fontSize: '20px',
                              fontWeight: '700',
                              color: '#FCB53B' // Golden Orange theme color
                            }}>
                              ₹{product.price}
                            </span>
                          </div>
                          <div className="tp-product-cart-3">
                            <button
                              onClick={() => handleAddProduct(product)}
                              className="tp-btn"
                              style={{
                                backgroundColor: '#FCB53B', // Golden Orange theme color
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 4px rgba(252, 181, 59, 0.3)'
                              }}
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingThalis;

