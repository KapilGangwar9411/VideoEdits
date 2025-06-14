import { memo } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const CGIAdvertisements = () => {
  const projects = [
    {
      id: 1,
      title: 'Product Visualization',
      description: 'Luxury watch CGI advertisement',
      videoUrl: '/videos/beyondwater.mp4',
    },
    {
      id: 2,
      title: 'Architectural Visualization',
      description: 'Modern interior design showcase',
      videoUrl: '/videos/nike.mp4',
    },
    {
      id: 3,
      title: 'Character Animation',
      description: '3D character promotional video',
      videoUrl: '/videos/beyondwater.mp4',
    },
    {
      id: 4,
      title: 'Product Animation',
      description: 'Product showcase animation',
      videoUrl: '/videos/nike.mp4',
    },
    {
      id: 5,
      title: 'Motion Design',
      description: 'Creative motion graphics',
      videoUrl: '/videos/beyondwater.mp4',
    },
  ];

  return (
    <section id="cgi" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a] opacity-50" />
      
      {/* Main content */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with animated line */}
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
              className="h-[2px] bg-[#FF5733] mx-auto mb-8"
            />
            <h2 className="text-5xl font-bold font-bricolage mb-6 text-white tracking-tight">
              CGI <span className="text-[#FF5733]">Advertisements</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Bringing products to life through stunning 3D visualization and creative storytelling
            </p>
          </motion.div>

          {/* Videos showcase */}
          <div className="flex justify-center items-start gap-6 relative">
            {/* Gradient overlays for scroll fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
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
                <div className="aspect-[9/16] rounded-xl overflow-hidden bg-black/20 h-[360px] 
                             shadow-lg shadow-black/20 backdrop-blur-sm
                             transform transition-all duration-300 group-hover:scale-[1.02]">
                  <ReactPlayer
                    url={project.videoUrl}
                    width="100%"
                    height="100%"
                    playing={true}
                    loop={true}
                    muted={true}
                    playsinline
                    className="object-contain"
                  />
                  {/* Video overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CGIAdvertisements;