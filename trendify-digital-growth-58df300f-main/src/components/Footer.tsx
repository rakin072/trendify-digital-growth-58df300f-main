import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#030303]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810]/20 to-[#1a120b]/20"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#2c1810] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              transform: `translateZ(${Math.random() * 50}px)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#2c1810] to-[#1a120b] bg-clip-text text-transparent">
                Trendify
              </span>
            </Link>
            <p className="text-gray-400">
              Transforming digital presence through innovative strategies and creative solutions.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-2 rounded-lg text-gray-400 hover:text-white hover-lift transform-gpu"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gradient-to-r from-[#2c1810] to-[#1a120b] rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Digital Marketing',
                'Social Media',
                'Web Development',
                'Content Creation'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="block">Email:</span>
                <a href="mailto:contact@trendify.com" className="hover:text-white transition-colors">
                  contact@trendify.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block">Address:</span>
                <address className="not-italic">
                  123 Digital Street<br />
                  Tech City, TC 12345
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2c1810]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trendify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
