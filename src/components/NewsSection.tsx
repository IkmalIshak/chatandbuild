import React from 'react'
import { Clock, User, ArrowRight, MessageCircle, Heart, Share } from 'lucide-react'

const NewsSection: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'PPMK Tech Club Wins National Coding Championship',
      excerpt: 'Our talented developers secured first place in the prestigious National Collegiate Programming Contest, bringing home the gold trophy and $10,000 prize.',
      content: 'The PPMK Tech Innovation Hub made history by winning the National Collegiate Programming Contest...',
      author: 'Sarah Chen',
      authorRole: 'Tech Club President',
      publishedAt: '2024-03-10T10:30:00Z',
      readTime: '3 min read',
      category: 'Achievement',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 234,
      comments: 45,
      featured: true
    },
    {
      id: 2,
      title: 'New Art Gallery Opens in Campus Cultural Center',
      excerpt: 'The Creative Arts Society unveils a stunning new exhibition space featuring works from student artists across various mediums and styles.',
      content: 'After months of planning and renovation, the new art gallery is now open...',
      author: 'Marcus Rodriguez',
      authorRole: 'Arts Society Coordinator',
      publishedAt: '2024-03-08T14:15:00Z',
      readTime: '2 min read',
      category: 'Campus Life',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      title: 'Sports Federation Launches Mental Health Initiative',
      excerpt: 'A comprehensive program focusing on athlete mental wellness, featuring counseling services, stress management workshops, and peer support groups.',
      content: 'Recognizing the importance of mental health in athletic performance...',
      author: 'Jessica Park',
      authorRole: 'Sports Federation Director',
      publishedAt: '2024-03-05T09:45:00Z',
      readTime: '4 min read',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 156,
      comments: 28
    },
    {
      id: 4,
      title: 'Community Service Corps Reaches 1000 Volunteer Hours',
      excerpt: 'Students have contributed over 1000 hours of community service this semester, making a significant impact in local neighborhoods and organizations.',
      content: 'The Community Service Corps has achieved a remarkable milestone...',
      author: 'David Kim',
      authorRole: 'Service Corps Leader',
      publishedAt: '2024-03-03T16:20:00Z',
      readTime: '3 min read',
      category: 'Community Impact',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 298,
      comments: 67
    },
    {
      id: 5,
      title: 'Music Ensemble Prepares for Spring Concert Series',
      excerpt: 'Get ready for an enchanting series of performances featuring classical, contemporary, and original compositions by our talented musicians.',
      content: 'The Music Ensemble is putting finishing touches on their spring repertoire...',
      author: 'Emily Watson',
      authorRole: 'Music Director',
      publishedAt: '2024-03-01T11:00:00Z',
      readTime: '2 min read',
      category: 'Upcoming Events',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 145,
      comments: 23
    },
    {
      id: 6,
      title: 'Entrepreneurship Network Hosts Startup Accelerator',
      excerpt: 'Local entrepreneurs and investors join forces to mentor student startups through an intensive 8-week accelerator program.',
      content: 'The Entrepreneurship Network has launched its most ambitious program yet...',
      author: 'Alex Thompson',
      authorRole: 'Business Development',
      publishedAt: '2024-02-28T13:30:00Z',
      readTime: '5 min read',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      likes: 187,
      comments: 41
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Achievement: 'bg-yellow-100 text-yellow-800',
      'Campus Life': 'bg-purple-100 text-purple-800',
      'Health & Wellness': 'bg-green-100 text-green-800',
      'Community Impact': 'bg-red-100 text-red-800',
      'Upcoming Events': 'bg-blue-100 text-blue-800',
      Business: 'bg-orange-100 text-orange-800'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest happenings, achievements, and announcements 
            from across all PPMK communities.
          </p>
        </div>

        {/* Featured Article */}
        {featuredNews && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredNews.category)}`}>
                    {featuredNews.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredNews.title}</h3>
                <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{featuredNews.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{formatDate(featuredNews.publishedAt)}</span>
                  </div>
                  <span className="text-sm text-gray-600">{featuredNews.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{featuredNews.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{featuredNews.comments}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                
                <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{article.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{article.comments}</span>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Share className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
