import { useState, memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Video {
  id: number;
  title: string;
  client: string;
  tools: string[];
  videoUrl: string;
}

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = memo(({ video, index }: VideoCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      key={video.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
      className="relative group w-[400px] flex-shrink-0 snap-center"
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
    >
      <div className="aspect-video rounded-2xl overflow-hidden bg-black/20 shadow-2xl
                   transform transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(0,255,148,0.1)]">
        <ReactPlayer
          url={video.videoUrl}
          width="100%"
          height="100%"
          playing={isVisible}
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-[#00ff94] mb-3 text-base">Client: {video.client}</p>
            <div className="flex flex-wrap gap-2">
              {video.tools.map((tool: string) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 
                           text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const VideoEditing = () => {
  const videos: Video[] = [
    {
      id: 1,
      title: 'Corporate Brand Film',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/aarambh.mp4',
    },
    {
      id: 2,
      title: 'Wedding Highlights',
      client: 'College Society',
      tools: ['Premiere Pro', 'Photoshop'],
      videoUrl: '/videos/videowalk.mp4',
    },
    {
      id: 3,
      title: 'Music Video',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/pp.mp4',
    },
    {
      id: 4,
      title: 'Motion Design',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/aarambh.mp4',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="videos" className="relative min-h-screen py-32 bg-[#0a0a0a] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-[2px] bg-[#00ff94] mx-auto mb-8"
              />
              <h2 className="text-5xl font-bold font-bricolage mb-6 text-white tracking-tight">
                Video <span className="text-[#00ff94]">Editing</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
                Professional video editing that brings your stories to life
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-12"
              >
                <Link to="/video-gallery">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-2 px-8 py-3 bg-[#00ff94]/10 rounded-full
                             border border-[#00ff94]/20 hover:border-[#00ff94]/40 
                             transition-all duration-200"
                  >
                    <span className="text-[#00ff94] font-medium">Explore Gallery</span>
                    <ExternalLink 
                      size={18} 
                      className="text-[#00ff94] transform transition-transform duration-200 
                                group-hover:translate-x-1 group-hover:-translate-y-1" 
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Videos showcase with horizontal scroll */}
          <div className="relative px-4">
            {/* Scroll Shadow Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {/* Scrollable Content */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                 style={{
                   scrollbarWidth: 'none',
                   msOverflowStyle: 'none',
                   WebkitOverflowScrolling: 'touch',
                   scrollSnapType: 'x mandatory'
                 }}>
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
              {videos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(VideoEditing);