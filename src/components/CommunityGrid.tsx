import React from 'react'
import { Users, BookOpen, Trophy, Palette, Music, Camera, Code, Globe, Heart, Zap } from 'lucide-react'

const CommunityGrid: React.FC = () => {
  const communities = [
    {
      id: 1,
      name: 'Academic Excellence Club',
      category: 'Academic',
      members: 342,
      description: 'Fostering academic growth through study groups, research projects, and peer mentoring.',
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Sports Federation',
      category: 'Sports',
      members: 567,
      description: 'Uniting athletes across all sports disciplines for competitions and fitness activities.',
      icon: Trophy,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Creative Arts Society',
      category: 'Arts',
      members: 289,
      description: 'Exploring creativity through visual arts, crafts, and artistic collaborations.',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Music Ensemble',
      category: 'Arts',
      members: 156,
      description: 'Harmonizing voices and instruments in concerts, jam sessions, and music production.',
      icon: Music,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Photography Club',
      category: 'Arts',
      members: 234,
      description: 'Capturing moments and stories through the lens of creativity and technical skill.',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Tech Innovation Hub',
      category: 'Academic',
      members: 445,
      description: 'Building the future through coding, AI, robotics, and technological innovation.',
      icon: Code,
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 7,
      name: 'Global Affairs Society',
      category: 'Academic',
      members: 198,
      description: 'Discussing world events, diplomacy, and international relations through debates and forums.',
      icon: Globe,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 8,
      name: 'Community Service Corps',
      category: 'Service',
      members: 312,
      description: 'Making a difference through volunteer work, charity drives, and community outreach.',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 9,
      name: 'Entrepreneurship Network',
      category: 'Business',
      members: 267,
      description: 'Fostering innovation and business acumen through startups, pitches, and mentorship.',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  const categories = ['All', 'Academic', 'Sports', 'Arts', 'Service', 'Business']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredCommunities = selectedCategory === 'All' 
    ? communities 
    : communities.filter(community => community.category === selectedCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Discover Your Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore diverse clubs and organizations that match your interests and passions. 
            Connect with like-minded students and grow together.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCommunities.map((community) => {
            const Icon = community.icon
            return (
              <div
                key={community.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {community.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${community.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{community.name}</h3>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{community.members} members</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {community.description}
                  </p>
                  
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-xl transition-colors duration-200">
                    Join Community
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CommunityGrid
