function Login() {
  return (
    <section className="page-section">
      <h2>Login</h2>
      <p>
        Secure role-based login for administrators and receptionists will be available here.
        This placeholder page is ready for authentication integration.
      </p>
      <form className="login-form">
        <label className="login-field">
          Email address
          <input type="email" placeholder="admin@smartstay.com" disabled />
        </label>
        <label className="login-field">
          Password
          <input type="password" placeholder="••••••••" disabled />
        </label>
        <button type="button" className="login-button" disabled>
          Login (coming soon)
        </button>
      </form>
    </section>
  )
}

export default Login
