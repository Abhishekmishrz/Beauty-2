'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// internal
import urban_thali_logo from '@assets/img/logo/urban-thali-logo.png';
import { CartTwo, Menu, Search, Wishlist } from '@/svg';
import Menus from './header-com/menus';
import useSticky from '@/hooks/use-sticky';
import SearchBar from './header-com/search-bar';
import OffCanvas from '@/components/common/off-canvas';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';
import TopNavbar from './header-com/top-navbar';

const HeaderThree = ({ hideAuthButtons = false, fixed = true, hideNavbar = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  if (hideNavbar) {
    return null;
  }

  return (
    <>
      <header>
        {/* Top Navbar */}
        <TopNavbar />
        
        <div id="header-sticky" className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${sticky ? 'header-sticky' : ''}`} style={{ position: fixed ? 'fixed' : 'relative', top: fixed ? '45px' : '0', left: 0, right: 0, zIndex: fixed ? 999 : 'auto', width: '100%', height: '75px', minHeight: '75px' }}>
          <div className="tp-header-bottom-3 pl-35 pr-35" style={{ height: '75px', display: 'flex', alignItems: 'center' }}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="logo" style={{ height: '70px', display: 'flex', alignItems: 'center' }}>
                    <Link href="/">
                      <Image 
                        src={urban_thali_logo} 
                        alt="Urban Thali Logo" 
                        style={{ height: '70px', width: '180px' }} 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu menu-style-3 p-relative d-flex align-items-center justify-content-center">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-6">
                  <div className="tp-header-action d-flex align-items-center justify-content-end ml-50" style={{ paddingTop: '8px' }}>
                    <div className="tp-header-action-item d-none d-sm-block">
                      <button onClick={() => dispatch(openCartMini())} type="button" className="tp-header-action-btn cartmini-open-btn">
                        <CartTwo />
                        <span className="tp-header-action-badge">{quantity}</span>
                      </button>
                    </div>
                    {!hideAuthButtons && (
                      <>
                        <div className="tp-header-action-item d-none d-sm-block">
                          <Link href="/login" className="tp-header-action-btn">
                            Login
                          </Link>
                        </div>
                        <div className="tp-header-action-item d-none d-sm-block">
                          <Link 
                            href="/register" 
                            className="tp-header-action-btn tp-btn tp-btn-style-2"
                            style={{
                              backgroundColor: '#FCB53B',
                              color: 'white',
                              padding: '8px 20px',
                              borderRadius: '6px',
                              textDecoration: 'none',
                              fontSize: '13px',
                              fontWeight: '600',
                              border: 'none',
                              minWidth: '90px',
                              textAlign: 'center',
                              transition: 'all 0.3s ease',
                              height: '36px',
                              lineHeight: '20px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            Sign Up
                          </Link>
                        </div>
                      </>
                    )}
                    <div className="tp-header-action-item d-lg-none">
                      <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-header-action-btn tp-offcanvas-open-btn">
                        <Menu />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search bar start */}
      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* search bar end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="beauty" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;