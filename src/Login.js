import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <style jsx>{`
        .login-container {
          width: 300px;
          margin: 50px auto;
          padding: 20px;
          background-color: #f4f4f9;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .input-container {
          margin-bottom: 15px;
        }

        .input-container label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .input-container input {
          width: 100%;
          padding: 8px;
          margin: 0;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 16px;
        }

        .input-container input:focus {
          border-color: #007bff;
          outline: none;
        }

        .login-btn {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }

        .login-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Login;
