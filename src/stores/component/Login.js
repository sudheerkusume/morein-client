import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');

  const sendOtpHandler = async () => {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }
    try {
      const res = await axios.post('https://more-server.onrender.com/auth/send-otp', { email });
      setOtpSent(true);
      setMessage(res.data.message || 'OTP sent to your email.');
    } catch (error) {
      console.log(error);
      setMessage('Failed to send OTP.');
    }
  };

  const verifyOtpHandler = async () => {
    if (!username || !email || !otp) {
      setMessage('Please enter all fields.');
      return;
    }
    try {
      const res = await axios.post('https://more-server.onrender.com/auth/verify-otp', { email:email.trim().toLowerCase(), otp:otp.trim(), username:username.trim() });
        
      setMessage(res.data.message || 'Logged in successfully.');
      if (res.data.success) {
        // optionally close modal or navigate to home
        const modalEl = document.getElementById('loginModal');
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
        modalInstance.hide();
      }
    } catch (error) {
      console.log(error);
      setMessage('Invalid OTP or login failed.');
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            {otpSent && (
              <div className="mb-3">
                <label htmlFor="otp" className="form-label">OTP</label>
                <input
                  type="text"
                  id="otp"
                  className="form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                />
              </div>
            )}

            {!otpSent ? (
              <button className="btn btn-primary w-100" onClick={sendOtpHandler}>Send OTP</button>
            ) : (
              <button className="btn btn-success w-100" onClick={verifyOtpHandler}>Verify OTP & Login</button>
            )}

            {message && <p className="mt-2 text-info">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;