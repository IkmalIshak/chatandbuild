import React from 'react'
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react'

const EventsSection: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Tech Symposium 2024',
      description: 'Join us for cutting-edge presentations on AI, blockchain, and future technologies.',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'Main Auditorium',
      attendees: 245,
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Tech Innovation Hub'
    },
    {
      id: 2,
      title: 'Inter-Club Sports Championship',
      description: 'Compete in various sports and showcase your athletic prowess across multiple disciplines.',
      date: '2024-03-20',
      time: '08:00 AM',
      location: 'Sports Complex',
      attendees: 180,
      category: 'Sports',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Sports Federation'
    },
    {
      id: 3,
      title: 'Creative Arts Exhibition',
      description: 'Discover amazing artworks, sculptures, and creative installations by talented students.',
      date: '2024-03-25',
      time: '02:00 PM',
      location: 'Art Gallery',
      attendees: 156,
      category: 'Arts',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Creative Arts Society'
    },
    {
      id: 4,
      title: 'Community Service Drive',
      description: 'Join our monthly community outreach program to make a positive impact in local neighborhoods.',
      date: '2024-03-30',
      time: '10:00 AM',
      location: 'Community Center',
      attendees: 89,
      category: 'Service',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Community Service Corps'
    },
    {
      id: 5,
      title: 'Music Concert Night',
      description: 'An evening of beautiful melodies featuring performances by various music groups and soloists.',
      date: '2024-04-05',
      time: '07:00 PM',
      location: 'Concert Hall',
      attendees: 312,
      category: 'Arts',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Music Ensemble'
    },
    {
      id: 6,
      title: 'Startup Pitch Competition',
      description: 'Present your innovative business ideas to industry experts and compete for funding opportunities.',
      date: '2024-04-10',
      time: '01:00 PM',
      location: 'Business Center',
      attendees: 134,
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      organizer: 'Entrepreneurship Network'
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: 'bg-blue-100 text-blue-800',
      Sports: 'bg-green-100 text-green-800',
      Arts: 'bg-purple-100 text-purple-800',
      Service: 'bg-red-100 text-red-800',
      Business: 'bg-yellow-100 text-yellow-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't miss out on exciting events happening across all communities. 
            Join, participate, and create memorable experiences.
          </p>
        </div>

        {/* Featured Event */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={events[0].image}
                alt={events[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(events[0].category)}`}>
                  Featured Event
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(events[0].category)}`}>
                  {events[0].category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{events[0].title}</h3>
              <p className="text-gray-600 mb-6">{events[0].description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(events[0].date)} at {events[0].time}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{events[0].location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{events[0].attendees} attending</span>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200">
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(1).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Join Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            View All Events
          </button>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
