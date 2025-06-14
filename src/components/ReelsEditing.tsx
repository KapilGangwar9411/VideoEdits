import { memo } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const ReelsEditing = () => {
  const reels = [
    {
      id: 1,
      title: 'Fashion Showcase',
      description: 'Trending styles and latest fashion',
      videoUrl: '/videos/beyondwater.mp4',
    },
    {
      id: 2,
      title: 'Travel Highlights',
      description: 'Journey through exotic locations',
      videoUrl: '/videos/bbq1.mp4',
    },
    {
      id: 3,
      title: 'Product Story',
      description: 'Compelling product narratives',
      videoUrl: '/videos/kalakriti.mp4',
    },
    {
      id: 4,
      title: 'Lifestyle Reel',
      description: 'Modern living moments',
      videoUrl: '/videos/bbq2.mp4',
    },
    {
      id: 5,
      title: 'Brand Story',
      description: 'Engaging brand narratives',
      videoUrl: '/videos/bbq3.mp4',
    },
  ];

  return (
    <section id="reels" className="relative min-h-screen py-32 bg-[#fff8de] overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px),
                           linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-[#2E8B57] mx-auto mb-8"
          />
          <h2 className="text-5xl font-bold font-bricolage mb-6 text-gray-900 tracking-tight">
            Reels <span className="text-[#2E8B57]">Editing</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting engaging vertical content that captivates your audience
          </p>
        </motion.div>

        {/* Reels Display */}
        <div className="flex justify-center items-start gap-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="group relative w-full max-w-[220px]"
            >
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-white shadow-2xl 
                           transform transition-all duration-300 group-hover:scale-[1.02]
                           group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <ReactPlayer
                  url={reel.videoUrl}
                  width="100%"
                  height="100%"
                  playing={true}
                  loop={true}
                  muted={true}
                  playsinline
                  className="object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {reel.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {reel.description}
                  </p>
                </div>

                {/* Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
                                flex items-center justify-center opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white/90" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsEditing;