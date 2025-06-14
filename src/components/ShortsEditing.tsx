import { useState, memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';

interface Short {
  id: number;
  title: string;
  videoUrl: string;
}

interface ShortCardProps {
  short: Short;
  index: number;
}

const ShortCard = memo(({ short, index }: ShortCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        delay: Math.min(index * 0.1, 0.3)
      }}
      className="relative w-[220px] flex-shrink-0 snap-center group"
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-black/5 shadow-lg
                   transform transition-all duration-200 group-hover:shadow-xl">
        <ReactPlayer
          url={short.videoUrl}
          width="100%"
          height="100%"
          playing={isVisible && isHovered}
          loop
          muted
          playsinline
          className="object-cover"
          config={{
            file: {
              attributes: {
                loading: "lazy",
                decoding: "async"
              }
            }
          }}
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white mb-2">{short.title}</h3>
              <p className="text-white/80 text-sm">Hover to play</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Title below video (visible when not hovered) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="mt-4 px-2"
      >
        <h3 className="text-lg font-bold text-gray-800">{short.title}</h3>
      </motion.div>
    </motion.div>
  );
});

const ShortsEditing = () => {
  const shorts: Short[] = [
    {
      id: 1,
      title: 'Product Showcase',
      videoUrl: '/videos/beyondwater.mp4',
    },
    {
      id: 2,
      title: 'Tutorial Snippet',
      videoUrl: '/videos/bbq2.mp4',
    },
    {
      id: 3,
      title: 'Brand Story',
      videoUrl: '/videos/bbq3.mp4',
    },
    {
      id: 4,
      title: 'Behind the Scenes',
      videoUrl: '/videos/nike.mp4',
    },
    {
      id: 5,
      title: 'Motion Design',
      videoUrl: '/videos/bbq1.mp4',
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="shorts" className="min-h-screen py-20 bg-[#fff8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[2px] bg-[#00ff94] mx-auto mb-8"
            />
            <h2 className="text-5xl font-bold font-bricolage mb-6 text-gray-900">
              Shorts <span className="text-[#00ff94]">Editing</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Engaging short-form content crafted for maximum impact on social media
            </p>
          </motion.div>

          {/* Shorts Grid with horizontal scroll */}
          <div className="relative px-4">
            {/* Scroll Shadow Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#fff8de] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#fff8de] to-transparent z-10 pointer-events-none" />

            {/* Scrollable Content */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                 style={{
                   scrollbarWidth: 'none',
                   msOverflowStyle: 'none',
                   WebkitOverflowScrolling: 'touch',
                   scrollSnapType: 'x mandatory'
                 }}>
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
              {shorts.map((short, index) => (
                <ShortCard key={short.id} short={short} index={index} />
              ))}
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(ShortsEditing);