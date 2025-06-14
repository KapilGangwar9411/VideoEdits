import React, { useState, memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ExternalLink, ArrowRight } from 'lucide-react';

const ContactInfoCard = memo(({ icon: Icon, title, value, link }: any) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group flex items-center gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-2xl
              border border-white/10 hover:border-[#2E8B57]/30 transition-colors duration-300"
  >
    <div className="p-4 rounded-xl bg-[#2E8B57]/10 text-[#2E8B57] group-hover:bg-[#2E8B57]/20 transition-colors">
      <Icon size={24} />
    </div>
    <div>
      <p className="text-white/50 text-sm mb-1">{title}</p>
      <p className="text-white font-medium group-hover:text-[#2E8B57] transition-colors">{value}</p>
    </div>
    <ArrowRight className="ml-auto text-white/20 group-hover:text-[#2E8B57] transform translate-x-0 
                        group-hover:translate-x-1 transition-all" size={20} />
  </motion.a>
));

const InputField = memo(({ type = "text", name, placeholder, value, onChange, multiline = false }: any) => {
  const baseClassName = `w-full bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 text-white 
                        placeholder-white/30 border border-white/10 focus:border-[#2E8B57]/50
                        focus:outline-none focus:ring-1 focus:ring-[#2E8B57]/50 transition-all duration-300`;
  
  return multiline ? (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={4}
      className={baseClassName}
      required
    />
  ) : (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={baseClassName}
      required
    />
  );
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kurmikapil154@gmail.com',
      link: 'mailto:kurmikapil154@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9411867984',
      link: 'tel:+919411867984'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Greater Noida, UP',
      link: 'https://maps.google.com/?q=Greater+Noida,+UP'
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="contact" className="min-h-screen py-12 bg-[#0a0a0a] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] rounded-full 
                       bg-gradient-to-br from-[#2E8B57]/20 to-transparent blur-3xl opacity-30" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full 
                       bg-gradient-to-tr from-[#2E8B57]/20 to-transparent blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[2px] bg-[#2E8B57] mx-auto mb-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold font-bricolage mb-3 text-white tracking-tight">
              Get in <span className="text-[#2E8B57]">Touch</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Let's discuss your next project and bring your creative vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 h-full">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info) => (
                    <ContactInfoCard key={info.title} {...info} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5">Send Message</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputField
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <InputField
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <InputField
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white font-medium py-3 px-6 
                             rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 mt-2"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(Contact);