import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'

const cards = [
  {
    title: 'Real-time Room Booking',
    description: 'Check availability and manage reservations instantly from the dashboard.'
  },
  {
    title: 'Guest History & Search',
    description: 'Store guest records and quickly search returning customers with ease.'
  },
  {
    title: 'Billing & Invoices',
    description: 'Generate GST-ready invoices automatically for every stay.'
  },
  {
    title: 'AI Suggestions',
    description: 'Receive smart room recommendations based on guest preferences.'
  }
]

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <p className="section-intro">
        SmartStay is designed to help hotel teams manage the full guest lifecycle, from booking to checkout.
      </p>
      <section className="feature-grid">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </section>
    </div>
  )
}

export default Home
