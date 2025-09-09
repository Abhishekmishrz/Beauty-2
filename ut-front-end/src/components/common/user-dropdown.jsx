'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { User } from '@/svg';

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/');
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // When no user is logged in, show only login button
  if (!user || !user.name) {
    return (
      <Link href="/login" className="tp-header-login-btn" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        color: '#333',
        fontSize: '14px'
      }}>
        <User />
        <span>Login</span>
      </Link>
    );
  }

  return (
    <div className="tp-user-dropdown" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={toggleDropdown}
        className="tp-user-dropdown-toggle"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '5px 10px',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#FCB53B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          {user.imageURL ? (
            <Image
              src={user.imageURL}
              alt="user"
              width={36}
              height={36}
              style={{ borderRadius: '50%' }}
            />
          ) : (
            user.name?.[0]?.toUpperCase() || 'U'
          )}
        </div>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '12px', color: '#666' }}>Welcome,</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
            {user.name || 'User'}
          </div>
        </div>
        <svg
          style={{
            width: '12px',
            height: '12px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="tp-user-dropdown-menu"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: '10px',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            minWidth: '220px',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '15px', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
              {user.name}
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>
              {user.email}
            </div>
          </div>

          <div style={{ padding: '8px 0' }}>
            <Link
              href="/profile"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                color: '#333',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </Link>

            <Link
              href="/profile#orders"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                color: '#333',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              My Orders
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                color: '#333',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
            </Link>

            <Link
              href="/profile#password"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                color: '#333',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              Change Password
            </Link>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', padding: '8px 0' }}>
            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 15px',
                color: '#ef4444',
                background: 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;