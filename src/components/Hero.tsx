import { useEffect, useState, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowDownCircle } from 'lucide-react';

const BackgroundVideo = memo(() => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover opacity-20"
    style={{ willChange: 'transform' }}
  >
    <source src="/hero-background.mp4" type="video/mp4" />
  </video>
));

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center bg-[#fff8de] will-change-transform"
    >
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
        <div className="absolute inset-0 doodle-pattern opacity-40 z-[1]" style={{ willChange: 'transform' }} />
        <div className="absolute inset-0 doodle-stars z-[1]" style={{ willChange: 'transform' }} />
        <div className="absolute inset-0 doodle-circles z-[1]" style={{ willChange: 'transform' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff8de]/50 to-[#fff8de]" />
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bricolage font-medium text-gray-700 mb-4"
        >
          <span className="text-base md:text-lg">Hey there 👋,</span>{' '}
          <span className="text-2xl md:text-3xl">I am Kapil</span>
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-k2d mb-6 text-gray-900"
        >
          Crafting Visual{' '}
          <span className="text-[#2E8B57] text-7xl md:text-7xl lg:text-9xl block mt-2 md:inline md:mt-0">magic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 font-bricolage font-medium"
        >
          CGI • Video Editing • Graphic Design
        </motion.p>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-16"
          >
            <div
              className="inline-flex flex-col items-center cursor-pointer group"
              onClick={() => {
                const element = document.getElementById('cgi');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <p className="text-gray-600 font-bricolage font-medium mb-4 group-hover:text-[#2E8B57] transition-colors">
                Explore My Work
              </p>
              <div className="relative">
                <ArrowDownCircle 
                  size={48} 
                  className="text-[#2E8B57] group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-[#00c770] rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      )}
    </section>
  );
};

export default memo(Hero);