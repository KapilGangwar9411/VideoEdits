import React, { memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const SocialLink = memo(({ icon: Icon, url }: { icon: any, url: string }) => (
  <motion.a
    href={url}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#2E8B57]/20 flex items-center justify-center
              border border-white/10 hover:border-[#2E8B57]/50 group transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={18} className="text-white/70 group-hover:text-[#2E8B57] transition-colors" />
  </motion.a>
));

const ContactItem = memo(({ icon: Icon, text, link }: { icon: any, text: string, link: string }) => (
  <motion.a
    href={link}
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-2 text-white/60 hover:text-[#2E8B57] transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon size={16} />
    <span className="text-sm">{text}</span>
  </motion.a>
));

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Youtube, url: '#' },
    { icon: Linkedin, url: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'kurmikapil154@gmail.com', link: 'mailto:kurmikapil154@gmail.com' },
    { icon: Phone, text: '+91 9411867984', link: 'tel:+919411867984' },
    { icon: MapPin, text: 'Greater Noida, UP', link: 'https://maps.google.com/?q=Greater+Noida,+UP' },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <footer className="bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="text-2xl font-bold text-[#2E8B57] font-bricolage mb-4">
                PORTFOLIO
              </h3>
              <p className="text-white/60 text-sm text-center md:text-left">
                Bringing creative visions to life through stunning visual content
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center md:items-start space-y-3"
            >
              <h4 className="text-white font-medium mb-2">Contact Info</h4>
              {contactInfo.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <h4 className="text-white font-medium mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-6 border-t border-white/10 text-center md:text-left"
          >
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </LazyMotion>
  );
};

export default memo(Footer);