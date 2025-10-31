import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Shop',
      links: ['Men', 'Women', 'Kids', 'Sale', 'New Arrivals'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Affiliates'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQs', 'Shipping', 'Returns'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-xl font-bold tracking-wider">SOLE MATE</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Your destination for the latest and greatest in footwear.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold tracking-wider text-gray-300">{section.title}</h4>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SOLE MATE, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;