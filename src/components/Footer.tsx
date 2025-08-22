import React from 'react'
import { Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About PPMK', href: '#' },
    { name: 'Join Community', href: '#' },
    { name: 'Events Calendar', href: '#' },
    { name: 'News & Updates', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Support', href: '#' }
  ]

  const communities = [
    { name: 'Academic Excellence', href: '#' },
    { name: 'Sports Federation', href: '#' },
    { name: 'Creative Arts Society', href: '#' },
    { name: 'Tech Innovation Hub', href: '#' },
    { name: 'Music Ensemble', href: '#' },
    { name: 'Community Service', href: '#' }
  ]

  const resources = [
    { name: 'Student Handbook', href: '#' },
    { name: 'Event Guidelines', href: '#' },
    { name: 'Club Registration', href: '#' },
    { name: 'Funding Opportunities', href: '#' },
    { name: 'Leadership Program', href: '#' },
    { name: 'Alumni Network', href: '#' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PPMK</h3>
                <p className="text-gray-400 text-sm">Digital Community</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Connecting students across academic, sports, and arts communities to foster 
              collaboration, growth, and meaningful relationships.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ppmk.edu</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 University Ave, Campus City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Communities</h4>
            <ul className="space-y-3">
              {communities.map((community) => (
                <li key={community.name}>
                  <a
                    href={community.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {community.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-400">
                Get the latest updates on events, news, and community activities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 flex-1"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 PPMK Digital Community Platform. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
