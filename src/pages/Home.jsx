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
  }
]

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <section className="feature-grid">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </section>
    </div>
  )
}

export default Home
