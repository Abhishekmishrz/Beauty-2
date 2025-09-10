'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Wrapper from '@/layout/wrapper';
import { notifyError, notifySuccess } from '@/utils/toast';

const SettingsPage = () => {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  // Fetch settings on mount
  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/settings`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setSettings(data.settings);
        // Set form values
        Object.keys(data.settings).forEach(key => {
          if (typeof data.settings[key] === 'object' && !Array.isArray(data.settings[key])) {
            Object.keys(data.settings[key]).forEach(nestedKey => {
              if (typeof data.settings[key][nestedKey] === 'object') {
                Object.keys(data.settings[key][nestedKey]).forEach(deepKey => {
                  setValue(`${key}.${nestedKey}.${deepKey}`, data.settings[key][nestedKey][deepKey]);
                });
              } else {
                setValue(`${key}.${nestedKey}`, data.settings[key][nestedKey]);
              }
            });
          } else {
            setValue(key, data.settings[key]);
          }
        });
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
      notifyError('Failed to fetch settings');
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      
      // Restructure the flat form data to nested object
      const formattedData = {
        siteName: data.siteName,
        siteDescription: data.siteDescription,
        logo: data.logo,
        copyright: data.copyright,
        footerText: data.footerText,
        contact: {
          phone: data['contact.phone'],
          email: data['contact.email'],
          address: {
            street: data['contact.address.street'],
            city: data['contact.address.city'],
            state: data['contact.address.state'],
            country: data['contact.address.country'],
            pincode: data['contact.address.pincode']
          }
        },
        socialMedia: {
          facebook: data['socialMedia.facebook'],
          instagram: data['socialMedia.instagram'],
          youtube: data['socialMedia.youtube'],
          linkedin: data['socialMedia.linkedin'],
          twitter: data['socialMedia.twitter']
        },
        delivery: {
          minimumOrder: Number(data['delivery.minimumOrder']),
          deliveryCharge: Number(data['delivery.deliveryCharge']),
          freeDeliveryAbove: Number(data['delivery.freeDeliveryAbove']),
          estimatedDeliveryTime: data['delivery.estimatedDeliveryTime']
        },
        payment: {
          acceptCash: data['payment.acceptCash'],
          acceptCard: data['payment.acceptCard'],
          acceptUPI: data['payment.acceptUPI'],
          acceptWallet: data['payment.acceptWallet']
        }
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedData)
      });

      const result = await response.json();
      if (result.success) {
        notifySuccess('Settings updated successfully');
        fetchSettings(); // Refresh settings
      } else {
        notifyError(result.message || 'Failed to update settings');
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      notifyError('Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="body-content px-8 py-8 bg-slate-100">
        <div className="flex justify-between items-end flex-wrap">
          <div className="page-title mb-7">
            <h3 className="mb-0 text-4xl">Site Settings</h3>
            <p className="text-textBody m-0">Manage your website settings</p>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-md">
          <div className="p-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Basic Information */}
              <h5 className="mb-3">Basic Information</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Site Name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('siteName')}
                    placeholder="Urban Thali"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Logo URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('logo')}
                    placeholder="/assets/img/logo/urban-thali-logo.png"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12">
                  <label className="form-label">Site Description</label>
                  <textarea
                    className="form-control"
                    {...register('siteDescription')}
                    rows="3"
                    placeholder="Describe your business..."
                  />
                </div>
              </div>

              {/* Contact Information */}
              <h5 className="mb-3">Contact Information</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.phone')}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    {...register('contact.email')}
                    placeholder="hello@urbanthali.com"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.address.street')}
                    placeholder="123 Food Street"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.address.city')}
                    placeholder="Delhi"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.address.pincode')}
                    placeholder="110001"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.address.state')}
                    placeholder="Delhi"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('contact.address.country')}
                    placeholder="India"
                  />
                </div>
              </div>

              {/* Social Media */}
              <h5 className="mb-3">Social Media Links</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Facebook URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('socialMedia.facebook')}
                    placeholder="https://facebook.com/..."
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Instagram URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('socialMedia.instagram')}
                    placeholder="https://instagram.com/..."
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">YouTube URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('socialMedia.youtube')}
                    placeholder="https://youtube.com/..."
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">LinkedIn URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('socialMedia.linkedin')}
                    placeholder="https://linkedin.com/..."
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6">
                  <label className="form-label">Twitter URL</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('socialMedia.twitter')}
                    placeholder="https://twitter.com/..."
                  />
                </div>
              </div>

              {/* Delivery Settings */}
              <h5 className="mb-3">Delivery Settings</h5>
              <div className="row mb-3">
                <div className="col-md-3">
                  <label className="form-label">Minimum Order (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('delivery.minimumOrder')}
                    placeholder="200"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Delivery Charge (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('delivery.deliveryCharge')}
                    placeholder="40"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Free Delivery Above (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('delivery.freeDeliveryAbove')}
                    placeholder="500"
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Estimated Time</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('delivery.estimatedDeliveryTime')}
                    placeholder="30-45 minutes"
                  />
                </div>
              </div>

              {/* Payment Settings */}
              <h5 className="mb-3">Payment Methods</h5>
              <div className="row mb-4">
                <div className="col-md-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register('payment.acceptCash')}
                    />
                    <label className="form-check-label">
                      Accept Cash
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register('payment.acceptCard')}
                    />
                    <label className="form-check-label">
                      Accept Card
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register('payment.acceptUPI')}
                    />
                    <label className="form-check-label">
                      Accept UPI
                    </label>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      {...register('payment.acceptWallet')}
                    />
                    <label className="form-check-label">
                      Accept Wallet
                    </label>
                  </div>
                </div>
              </div>

              {/* Footer Settings */}
              <h5 className="mb-3">Footer Settings</h5>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Copyright Text</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('copyright')}
                    placeholder="© 2025 Urban Thali. All rights reserved."
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Footer Text</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('footerText')}
                    placeholder="Made with ❤️ for food lovers everywhere"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-primary me-2"
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Save Settings'}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => fetchSettings()}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SettingsPage;