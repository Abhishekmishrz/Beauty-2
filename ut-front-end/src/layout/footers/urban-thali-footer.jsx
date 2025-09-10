'use client';
import React from 'react';
import Link from 'next/link';
import { useGetPublicSettingsQuery } from '@/redux/features/settings/settingsApi';
import Loader from '@/components/loader/loader';

const UrbanThaliFooter = () => {
  const { data, isLoading } = useGetPublicSettingsQuery();
  const settings = data?.settings;

  if (isLoading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <Loader loading={true} />
      </div>
    );
  }

  return (
    <footer style={{ backgroundColor: '#ffffff', color: '#1f2937', marginTop: '60px' }}>
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="row">
          {/* Column 1: Company Information */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4" style={{ paddingLeft: '0px', marginLeft: '0px' }}>
            <div className="footer-company-info" style={{ paddingLeft: '0px', marginLeft: '0px' }}>
              {/* Logo */}
              <div className="footer-logo mb-3" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px', marginLeft: '0px', paddingLeft: '0px' }}>
                <div style={{
                  height: '100px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginRight: '0px',
                  marginLeft: '0px',
                  paddingLeft: '0px'
                }}>
                  <img 
                    src={settings?.logo || "/assets/img/logo/urban-thali-logo.png"} 
                    alt={settings?.siteName || "Urban Thali"} 
                    style={{ 
                      height: '100px', 
                      width: '250px',
                      marginLeft: '0px',
                      paddingLeft: '0px'
                    }} 
                  />
                </div>
              </div>
              
              {/* Description */}
              <p style={{ 
                color: '#6b7280', 
                fontSize: '14px', 
                lineHeight: '1.6',
                marginTop: '0px',
                marginBottom: '20px',
                marginLeft: '0px',
                paddingLeft: '0px'
              }}>
                {settings?.siteDescription || "Bringing authentic Indian flavors to your doorstep with our carefully crafted thalis and traditional recipes."}
              </p>
              
              {/* Social Media Icons */}
              <div className="footer-social" style={{ display: 'flex', gap: '12px' }}>
                {/* Facebook */}
                {settings?.socialMedia?.facebook && (
                  <a 
                    href={settings.socialMedia.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #d1d5db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#1877F2';
                      e.currentTarget.style.borderColor = '#1877F2';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    <i className="fab fa-facebook-f" style={{ fontSize: '16px' }}></i>
                  </a>
                )}
                
                {/* Instagram */}
                {settings?.socialMedia?.instagram && (
                  <a 
                    href={settings.socialMedia.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #d1d5db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#E4405F';
                      e.currentTarget.style.borderColor = '#E4405F';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    <i className="fab fa-instagram" style={{ fontSize: '16px' }}></i>
                  </a>
                )}
                
                {/* YouTube */}
                {settings?.socialMedia?.youtube && (
                  <a 
                    href={settings.socialMedia.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #d1d5db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#FF0000';
                      e.currentTarget.style.borderColor = '#FF0000';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    <i className="fab fa-youtube" style={{ fontSize: '16px' }}></i>
                  </a>
                )}
                
                {/* LinkedIn */}
                {settings?.socialMedia?.linkedin && (
                  <a 
                    href={settings.socialMedia.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #d1d5db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#0077B5';
                      e.currentTarget.style.borderColor = '#0077B5';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    <i className="fab fa-linkedin-in" style={{ fontSize: '16px' }}></i>
                  </a>
                )}

                {/* Twitter */}
                {settings?.socialMedia?.twitter && (
                  <a 
                    href={settings.socialMedia.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #d1d5db',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#1DA1F2';
                      e.currentTarget.style.borderColor = '#1DA1F2';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    <i className="fab fa-twitter" style={{ fontSize: '16px' }}></i>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-4">
            <div className="footer-links">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Home
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/offers" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Offers
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/menu" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Menu
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/contact" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Policies */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="footer-policies">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Policies
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/terms" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/privacy" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/refund" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/shipping" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="footer-contact">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Contact Info
              </h4>
              <div className="contact-items">
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px', 
                    marginTop: '2px',
                    fontSize: '16px'
                  }}>
                    📍
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {settings?.contact?.address?.street || "123 Food Street, Spice Market"}<br />
                    {settings?.contact?.address?.city || "Delhi"}, {settings?.contact?.address?.country || "India"} {settings?.contact?.address?.pincode || "110001"}
                  </p>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px',
                    fontSize: '16px'
                  }}>
                    📞
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0
                  }}>
                    {settings?.contact?.phone || "+91 98765 43210"}
                  </p>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px',
                    fontSize: '16px'
                  }}>
                    ✉️
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0
                  }}>
                    {settings?.contact?.email || "hello@urbanthali.com"}
                  </p>
                </div>

                {/* Business Hours */}
                {settings?.businessHours && (
                  <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ 
                      color: '#FCB53B', 
                      marginRight: '12px',
                      fontSize: '16px'
                    }}>
                      🕐
                    </div>
                    <div>
                      <p style={{ 
                        color: '#6b7280', 
                        fontSize: '14px', 
                        margin: 0,
                        fontWeight: 'bold'
                      }}>
                        Business Hours
                      </p>
                      <p style={{ 
                        color: '#6b7280', 
                        fontSize: '13px', 
                        margin: 0,
                        lineHeight: '1.5'
                      }}>
                        {Object.entries(settings.businessHours).map(([day, hours]) => {
                          if (hours.isOpen) {
                            return `${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours.open} - ${hours.close}`;
                          }
                          return `${day.charAt(0).toUpperCase() + day.slice(1)}: Closed`;
                        }).filter(Boolean).slice(0, 2).join(' | ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb',
        padding: '20px 0',
        backgroundColor: '#ffffff'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '14px', 
                margin: 0
              }}>
                {settings?.copyright || "© 2025 Urban Thali. All rights reserved."}
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '14px', 
                margin: 0
              }}>
                {settings?.footerText ? (
                  <span dangerouslySetInnerHTML={{ __html: settings.footerText }} />
                ) : (
                  <>Made with <span style={{ color: '#ff69b4' }}>❤️</span> for food lovers everywhere</>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UrbanThaliFooter;