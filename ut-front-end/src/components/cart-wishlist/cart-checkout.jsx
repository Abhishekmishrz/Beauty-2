'use client';
import React from "react";
import Link from "next/link";
import useCartInfo from "@/hooks/use-cart-info";
import { useState } from "react";

const CartCheckout = () => {
  const {total} = useCartInfo();
  const [shipCost,setShipCost] = useState(0);
  // handle shipping cost 
  const handleShippingCost = (value) => {
    if(value === 'free'){
      setShipCost(0)
    }
    else {
      setShipCost(value)
    }
  }
  return (
    <div className="tp-cart-checkout-wrapper">
      <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
        <span className="tp-cart-checkout-top-title">Subtotal</span>
        <span className="tp-cart-checkout-top-price">${total}</span>
      </div>
      <div className="tp-cart-checkout-shipping">
        <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
        <div className="tp-cart-checkout-shipping-option-wrapper">
          <div className="tp-cart-checkout-shipping-option">
            <input id="flat_rate" type="radio" name="shipping" />
            <label htmlFor="flat_rate" onClick={()=> handleShippingCost(20)}>
              Flat rate: <span>$20.00</span>
            </label>
          </div>
          <div className="tp-cart-checkout-shipping-option">
            <input id="local_pickup" type="radio" name="shipping" />
            <label htmlFor="local_pickup" onClick={()=> handleShippingCost(25)}>
              Local pickup: <span> $25.00</span>
            </label>
          </div>
          <div className="tp-cart-checkout-shipping-option">
            <input id="free_shipping" type="radio" name="shipping" />
            <label onClick={()=> handleShippingCost('free')} htmlFor="free_shipping">Free shipping</label>
          </div>
        </div>
      </div>
      <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
        <span>Total</span>
        <span>${(total + shipCost).toFixed(2)}</span>
      </div>
      <div className="tp-cart-checkout-proceed">
        <Link 
          href="/checkout" 
          className="tp-cart-checkout-btn w-100"
          style={{
            backgroundColor: '#FCB53B', // Golden Orange theme color
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            textAlign: 'center',
            display: 'block',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#B45253'} // Deep Red hover
          onMouseOut={(e) => e.target.style.backgroundColor = '#FCB53B'} // Golden Orange
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartCheckout;
