import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Check if we're coming from a call scheduling link
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('type') === 'call') {
      setFormData(prev => ({
        ...prev,
        subject: 'Schedule a Strategy Call',
        message: 'I would like to schedule a strategy call to discuss my project.'
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // You might want to show a success message here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(56, 189, 248, 0.3), 
              rgba(99, 102, 241, 0.3), 
              rgba(168, 85, 247, 0.3))`,
            transition: 'background 0.1s ease-out'
          }}
        />
        
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? 'rgba(56, 189, 248, 0.8)' : 
                 i % 3 === 1 ? 'rgba(99, 102, 241, 0.8)' : 
                 'rgba(168, 85, 247, 0.8)'})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 100}px)`,
              boxShadow: `0 0 ${20 + Math.random() * 30}px ${
                i % 3 === 0 ? 'rgba(56, 189, 248, 0.8)' : 
                i % 3 === 1 ? 'rgba(99, 102, 241, 0.8)' : 
                'rgba(168, 85, 247, 0.8)'
              }`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-gradient bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Get in Touch
          </h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">
            Let's create something extraordinary together. Your vision, our expertise.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-blue-950/95 backdrop-blur-xl rounded-2xl p-8 border border-sky-500/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl"></div>
              <form onSubmit={handleSubmit} className="relative space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-sky-200 mb-2 group-hover:text-sky-100 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-sky-950/80 border border-sky-500/40 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-sky-200/70 transition-all duration-200 hover:border-sky-400/60 shadow-lg shadow-sky-500/10"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-indigo-200 mb-2 group-hover:text-indigo-100 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-indigo-950/80 border border-indigo-500/40 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-200/70 transition-all duration-200 hover:border-indigo-400/60 shadow-lg shadow-indigo-500/10"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-purple-200 mb-2 group-hover:text-purple-100 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-950/80 border border-purple-500/40 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-200/70 transition-all duration-200 hover:border-purple-400/60 shadow-lg shadow-purple-500/10"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-sky-200 mb-2 group-hover:text-sky-100 transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-sky-950/80 border border-sky-500/40 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-sky-200/70 transition-all duration-200 hover:border-sky-400/60 shadow-lg shadow-sky-500/10 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 hover:from-sky-600 hover:via-indigo-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-blue-950 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send size={20} className="animate-pulse" />
                    <span>Send Message</span>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-blue-950/95 backdrop-blur-xl rounded-xl p-6 border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-6 h-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-sky-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Email</h3>
                      <a href="mailto:contact@trendify.com" className="text-white hover:text-sky-300 transition-colors font-medium">
                        contact@trendify.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-indigo-950/95 backdrop-blur-xl rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-6 h-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-indigo-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Phone</h3>
                      <a href="tel:+1234567890" className="text-white hover:text-indigo-300 transition-colors font-medium">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group sm:col-span-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-sky-500 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-purple-950/95 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-sky-500 rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <MapPin className="w-6 h-6 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Address</h3>
                      <p className="text-white font-medium">
                        123 Digital Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-xl blur-lg opacity-80 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-blue-950/95 backdrop-blur-xl rounded-xl p-6 border border-sky-500/30 shadow-xl">
                <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: 'https://twitter.com', color: 'from-sky-400 to-indigo-400' },
                    { icon: Linkedin, href: 'https://linkedin.com', color: 'from-indigo-400 to-purple-400' },
                    { icon: Instagram, href: 'https://instagram.com', color: 'from-purple-400 to-sky-400' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/social"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-lg blur opacity-80 group-hover/social:opacity-100 transition duration-1000"></div>
                      <div className="relative p-3 bg-gradient-to-br from-blue-950 to-indigo-950 rounded-lg transform group-hover/social:scale-110 transition-all duration-300 shadow-lg">
                        <social.icon className={`w-6 h-6 bg-gradient-to-r ${social.color} bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]`} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50% { transform: translateY(-20px) translateZ(50px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
        .bg-pos-0 {
          background-position: 0% 0%;
        }
        .bg-pos-100 {
          background-position: 100% 100%;
        }
      `}</style>
    </div>
  );
};

export default Contact;
