function Hero() {
  return (
    <section className="hero-section grid gap-6 rounded-[28px] bg-sky-100 p-10 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
      <div>
        <p className="eyebrow">Hotel management made simple</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">SmartStay</h1>
        <p className="mt-4 text-slate-700 max-w-3xl">
          Manage bookings, guests, billing, and reports from one responsive hotel management portal.
        </p>
        <ul className="hero-list mt-6 space-y-2 text-slate-700 list-disc pl-5">
          <li>Book rooms in real time</li>
          <li>Track guest stays and invoices</li>
          <li>See occupancy insights instantly</li>
        </ul>
      </div>
      <div className="hero-cta rounded-3xl bg-white px-6 py-5 text-slate-900 font-semibold shadow-xl">
        <span>Fast setup, role-based security, and AI guest recommendations.</span>
      </div>
    </section>
  )
}

export default Hero
