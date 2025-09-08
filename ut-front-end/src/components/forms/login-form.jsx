'use client';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// internal
import { CloseEye, OpenEye } from '@/svg';
import ErrorMsg from '../common/error-msg';
import { useLoginUserMutation } from '@/redux/features/auth/authApi';
import { demoLogin } from '@/redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { notifyError, notifySuccess } from '@/utils/toast';


// schema
const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Please enter a valid email").label("Email"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters").label("Password"),
});
const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // onSubmit
  const onSubmit = (data) => {
    try {
      // For demo purposes, simulate login if no backend is available
      if (!process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL === 'http://localhost:5000') {
        // Simulate successful login for demo
        dispatch(demoLogin({
          name: data.email.split('@')[0],
          email: data.email,
          id: 'demo-user-1'
        }));
        notifySuccess("Login successful! (Demo mode)");
        router.push('/');
        reset();
        return;
      }

      loginUser({
        email: data.email,
        password: data.password,
      })
        .then((result) => {
          if (result?.data) {
            notifySuccess("Login successfully");
            router.push('/');
          } else {
            notifyError(result?.error?.data?.error || "Login failed");
          }
        })
        .catch((error) => {
          notifyError("Login failed. Please try again.");
          console.error("Login error:", error);
        });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      notifyError("An error occurred. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="tp-login-input-wrapper">
        <div className="tp-login-input-box">
          <div className="tp-login-input">
            <input {...register("email", { required: `Email is required!` })} name="email" id="email" type="email" placeholder="urbanthali@mail.com" />
          </div>
          <div className="tp-login-input-title">
            <label htmlFor="email">Your Email</label>
          </div>
          <ErrorMsg msg={errors.email?.message} />
        </div>
        <div className="tp-login-input-box">
          <div className="p-relative">
            <div className="tp-login-input">
              <input
                {...register("password", { required: `Password is required!` })}
                id="password"
                type={showPass ? "text" : "password"}
                placeholder="Min. 6 character"
              />
            </div>
            <div className="tp-login-input-eye" id="password-show-toggle">
              <span className="open-eye" onClick={() => setShowPass(!showPass)}>
                {showPass ? <CloseEye /> : <OpenEye />}
              </span>
            </div>
            <div className="tp-login-input-title">
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <ErrorMsg msg={errors.password?.message}/>
        </div>
      </div>
      <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
        <div className="tp-login-remeber">
          <input id="remeber" type="checkbox" />
          <label htmlFor="remeber">Remember me</label>
        </div>
        <div className="tp-login-forgot">
          <Link href="/forgot">Forgot Password?</Link>
        </div>
      </div>
      <div className="tp-login-bottom">
        <button 
          type='submit' 
          className="tp-login-btn w-100"
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? '#ccc' : '#FCB53B',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;