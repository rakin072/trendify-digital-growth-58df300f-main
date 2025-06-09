import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Video, BarChart3, Mail, Users, Search, ShoppingCart, ArrowRight, Sparkles, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const serviceCategories = [
    {
      icon: <TrendingUp className="h-12 w-12 text-emerald-400" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth. We combine data-driven insights with creative solutions to deliver measurable results.",
      services: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising",
        "Email Marketing",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      gradient: "from-emerald-500/20 to-teal-600/20"
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-400" />,
      title: "Website Design & Development",
      description: "Custom websites that not only look stunning but also convert visitors into customers. We build responsive, fast, and SEO-friendly websites that align with your brand.",
      services: [
        "Custom Website Design",
        "E-commerce Development",
        "WordPress Development",
        "Shopify Development",
        "Website Maintenance",
        "Performance Optimization"
      ],
      gradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      icon: <Video className="h-12 w-12 text-purple-400" />,
      title: "Video Marketing & YouTube Growth",
      description: "Engaging video content that tells your story and connects with your audience. From production to optimization, we help you grow your YouTube channel and video presence.",
      services: [
        "Video Production",
        "YouTube Channel Management",
        "Video SEO",
        "Content Strategy",
        "Thumbnail Design",
        "Analytics & Optimization"
      ],
      gradient: "from-purple-500/20 to-pink-600/20"
    }
  ];

  const additionalServices = [
    {
      icon: <Mail className="h-8 w-8 text-emerald-600" />,
      title: "Email Marketing",
      description: "Automated campaigns that convert"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Social Media Management",
      description: "Build your community and engagement"
    },
    {
      icon: <Search className="h-8 w-8 text-emerald-600" />,
      title: "Google Ads",
      description: "Targeted campaigns for maximum ROI"
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-emerald-600" />,
      title: "E-commerce Setup",
      description: "Complete online store solutions"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden dark">
      {/* Enhanced Particle Background */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              transform: `translateZ(${Math.random() * 100}px)`
            }}
          />
        ))}
      </div>

      {/* Hero Section with Enhanced 3D Background */}
      <section className="relative py-20 min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: 'translateZ(-20px)',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b]/90 via-[#2c1810]/80 to-[#1a120b]/90"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 transform-gpu">
              <span className="bg-gradient-to-r from-[#2c1810] to-[#1a120b] bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs. We combine expertise with innovation to drive your success.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {serviceCategories.map((category, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#2c1810] to-[#1a120b] rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-[#1a120b]/90 backdrop-blur-xl rounded-2xl p-8 border border-[#2c1810]/20 shadow-2xl">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-[#2c1810] to-[#1a120b] rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {category.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-white ml-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">{category.title}</h2>
                    </div>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-3 group/item">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#2c1810] to-[#1a120b] rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-[#2c1810] to-[#1a120b] hover:from-[#1a120b] hover:to-[#2c1810] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2c1810]/25">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className={`bg-gradient-to-br from-[#2c1810] to-[#1a120b] p-1 rounded-3xl shadow-2xl`}>
                  <div className="bg-[#1a120b]/90 backdrop-blur-xl p-12 rounded-3xl border border-[#2c1810]/20">
                    <div className="aspect-video bg-gradient-to-br from-[#2c1810]/10 via-[#1a120b]/10 to-[#2c1810]/10 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                      {category.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Specialized solutions for specific needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-white">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver results for your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your business, goals, and target audience" },
              { step: "02", title: "Strategy", description: "We develop a custom plan tailored to your specific needs" },
              { step: "03", title: "Execute", description: "We implement the strategy with precision and attention to detail" },
              { step: "04", title: "Optimize", description: "We continuously monitor and improve performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2c1810] to-[#1a120b] rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-[#1a120b]/90 backdrop-blur-xl rounded-2xl p-12 border border-[#2c1810]/20 shadow-2xl text-center">
              <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create a custom strategy that delivers results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#2c1810] to-[#1a120b] hover:from-[#1a120b] hover:to-[#2c1810] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#2c1810]/25">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact?type=call">
                  <Button size="lg" variant="outline" className="border-[#2c1810] text-gray-300 hover:bg-[#2c1810]/10 text-lg px-8 py-4 rounded-lg transition-all duration-300">
                    Schedule a Call
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50% { transform: translateY(-20px) translateZ(50px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(44, 24, 16, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(44, 24, 16, 0.6);
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Services;
