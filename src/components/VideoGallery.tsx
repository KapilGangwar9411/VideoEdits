import React, { useState, memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { ArrowLeft } from 'lucide-react';
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
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4,
        delay: Math.min(index * 0.1, 0.3)
      }}
      className="group relative"
      onViewportEnter={() => setIsVisible(true)}
      onViewportLeave={() => setIsVisible(false)}
    >
      <div className="aspect-video rounded-xl overflow-hidden bg-black/20 shadow-lg
                   transform transition-all duration-200 group-hover:shadow-[0_0_30px_rgba(0,255,148,0.1)]">
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
            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-[#00ff94] mb-3 text-sm">{video.client}</p>
            <div className="flex flex-wrap gap-2">
              {video.tools.map((tool: string) => (
                <span
                  key={tool}
                  className="px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 
                           text-xs font-medium hover:bg-white/20 transition-colors"
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

const VideoGallery = () => {
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
      title: 'Event Coverage',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/aarambh.mp4',
    },
    {
      id: 5,
      title: 'Product Showcase',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/videowalk.mp4',
    },
    {
      id: 6,
      title: 'Documentary',
      client: 'College Society',
      tools: ['Premiere Pro', 'After Effects'],
      videoUrl: '/videos/pp.mp4',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section className="min-h-screen bg-[#0a0a0a] py-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Link to="/#videos">
              <motion.button
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-white/70 hover:text-[#00ff94] transition-colors mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </motion.button>
            </Link>
            
            <h1 className="text-5xl font-bold font-bricolage text-white mb-6">
              Video <span className="text-[#00ff94]">Gallery</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Explore our complete collection of video projects and creative works
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(VideoGallery); 