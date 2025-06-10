import logo from '../assets/only_Logo.png';
import { Brain, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API", href: "#" },
      { label: "Documentation", href: "#" }
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" }
    ],
    Resources: [
      { label: "Community", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Status", href: "#" }
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0D1117] to-[#161B22] border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">

          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img src={logo} alt="Logo" className="w-12 h-12" />
                {/* <Brain className="w-8 h-8 text-[#5DB8FF]" /> */}
                <div className="absolute inset-0 bg-[#5DB8FF] blur-lg opacity-15"></div>
              </div>
              <span className="text-xl font-bold text-white">NeuroTwin</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Turn yourself into software. Create your intelligent digital twin that works while you don't.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-2xl p-6 sm:p-8 border border-gray-700/30 mb-12">
          <div className="max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">Get the latest updates on NeuroTwin development and AI news.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5DB8FF] transition-colors"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#5DB8FF] to-[#3A9EFF] rounded-lg text-white font-medium hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-8 border-t border-gray-800 text-center sm:text-left">
          <div className="text-gray-400 text-sm">
            © 2025 NeuroTwin. All rights reserved.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-gray-400">
            <span>Made with 🧠 for the future</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;