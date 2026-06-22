function Card({ title, description }) {
  return (
    <article className="feature-card rounded-3xl border border-slate-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{description}</p>
    </article>
  )
}

export default Card
