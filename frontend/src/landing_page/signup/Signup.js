import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container py-5" style={{ maxWidth: 480 }}>
      <h1 className="mb-4" style={{ fontWeight: 300 }}>
        Open a Zerodha account
      </h1>
      <p className="text-muted mb-4">
        This is a demo signup page for local development. Enter any details to
        continue exploring the app.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Mobile number
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="10-digit mobile"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
      <p className="mt-4">
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

export default Signup;
