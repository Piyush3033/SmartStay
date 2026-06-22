function Dashboard() {
  return (
    <section className="page-section">
      <h2>Dashboard</h2>
      <p>
        This dashboard provides an overview of hotel performance, including occupancy and revenue metrics.
        It will help staff identify busy days, upcoming check-ins, and daily earning trends.
      </p>
      <div className="summary-grid">
        <article className="metric-card">
          <h3>82% Occupancy</h3>
          <p>Track room status and high-demand dates in real time.</p>
        </article>
        <article className="metric-card">
          <h3>$3,460 Today</h3>
          <p>View daily revenue summary with quick billing updates.</p>
        </article>
      </div>
      <div>
        <h3>Key dashboard highlights</h3>
        <ul>
          <li>Occupancy rate tracking for rooms and suites</li>
          <li>Daily revenue summary with quick snapshot cards</li>
          <li>Recent reservations and upcoming check-ins</li>
          <li>Alerts for low availability and high-demand dates</li>
        </ul>
      </div>
    </section>
  )
}

export default Dashboard
