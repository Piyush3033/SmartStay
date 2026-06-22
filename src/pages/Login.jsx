function Login() {
  return (
    <section className="page-section rounded-[28px] bg-white p-8 shadow-xl">
      <h2 className="text-3xl font-bold text-slate-900">Login</h2>
      <p className="mt-4 text-slate-600 max-w-2xl">
        Secure role-based login for administrators and receptionists will be available here.
        This placeholder page is ready for authentication integration.
      </p>
      <form className="login-form mt-8 grid gap-4">
        <label className="login-field grid gap-2 text-slate-700">
          <span>Email address</span>
          <input type="email" placeholder="admin@smartstay.com" disabled className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900" />
        </label>
        <label className="login-field grid gap-2 text-slate-700">
          <span>Password</span>
          <input type="password" placeholder="••••••••" disabled className="rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900" />
        </label>
        <button type="button" className="login-button inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-sky-600" disabled>
          Login (coming soon)
        </button>
      </form>
    </section>
  )
}

export default Login
