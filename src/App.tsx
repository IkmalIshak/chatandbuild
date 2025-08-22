import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CommunityGrid from './components/CommunityGrid'
import EventsSection from './components/EventsSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <CommunityGrid />
          <EventsSection />
          <NewsSection />
        </>
      )}
      
      {activeSection === 'communities' && <CommunityGrid />}
      {activeSection === 'events' && <EventsSection />}
      {activeSection === 'news' && <NewsSection />}
      
      <Footer />
    </div>
  )
}

export default App
