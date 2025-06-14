import { useState, memo } from 'react';
import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Design {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface DesignModalProps {
  design: Design | null;
  onClose: () => void;
}

const CategoryButton = memo(({ 
  category, 
  isSelected, 
  onClick 
}: { 
  category: string; 
  isSelected: boolean; 
  onClick: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      isSelected
        ? 'bg-[#00ff94] text-black shadow-lg shadow-[#00ff94]/20'
        : 'bg-white/10 text-white/70 hover:bg-white/20'
    }`}
  >
    {category}
  </motion.button>
));

const DesignModal = memo(({ design, onClose }: DesignModalProps) => {
  if (!design) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm
                 transition-colors z-50"
        onClick={onClose}
      >
        <X size={24} />
      </motion.button>
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-[600px] h-[600px] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={design.imageUrl}
          alt={design.title}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="sync"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className="text-xl font-bold text-white mb-2">{design.title}</h3>
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm 
                       text-white/90 text-sm font-medium">
            {design.category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
});

const GraphicDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  
  const designs: Design[] = [
    {
      id: 1,
      title: 'Brand Identity',
      category: 'Logos',
      imageUrl: '/images/1.jpg',
    },
    {
      id: 2,
      title: 'Marketing Campaign',
      category: 'Posters',
      imageUrl: '/images/2.jpg',
    },
    {
      id: 3,
      title: 'UI Design System',
      category: 'UI',
      imageUrl: '/images/3.jpg',
    },
    {
      id: 4,
      title: 'Social Media Kit',
      category: 'Social',
      imageUrl: '/images/4.jpg',
    },
    {
      id: 5,
      title: 'Event Branding',
      category: 'Branding',
      imageUrl: '/images/5.jpg',
    },
    {
      id: 6,
      title: 'Product Packaging',
      category: 'Packaging',
      imageUrl: '/images/6.jpg',
    },
    {
      id: 7,
      title: 'Product Packaging',
      category: 'Packaging',
      imageUrl: '/images/1.jpg',
    },
  ];

  const categories = ['All', 'Logos', 'Posters', 'UI', 'Social', 'Branding', 'Packaging'];
  const filteredDesigns = selectedCategory === 'All'
    ? designs
    : designs.filter(design => design.category === selectedCategory);

  return (
    <LazyMotion features={domAnimation}>
      <section id="design" className="min-h-screen py-32 bg-[#0a0a0a]">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[2px] bg-[#00ff94] mx-auto mb-8"
            />
            <h2 className="text-5xl font-bold font-bricolage mb-6 text-white tracking-tight">
              Graphic <span className="text-[#00ff94]">Design</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
              Crafting visual experiences that leave a lasting impression
            </p>

            {/* Category Filters - Scrollable on mobile */}
            <div className="overflow-x-auto pb-4 mb-12 scrollbar-hide">
              <div className="flex justify-center gap-4 min-w-max px-4">
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    category={category}
                    isSelected={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Grid Container */}
          <div className="relative px-4">
            {/* Scroll Shadow Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            {/* Scrollable Content */}
            <motion.div 
              layout
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory'
              }}
            >
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
              <AnimatePresence mode="popLayout">
                {filteredDesigns.map((design, index) => (
                  <motion.div
                    key={design.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ 
                      duration: 0.4,
                      delay: Math.min(index * 0.1, 0.3)
                    }}
                    className="group relative w-[220px] flex-shrink-0 snap-center cursor-pointer"
                    layout
                    onClick={() => setSelectedDesign(design)}
                  >
                    <div className="aspect-square rounded-2xl overflow-hidden bg-black/5 shadow-lg">
                      <div className="relative h-full transform transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={design.imageUrl}
                          alt={design.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 
                                      group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">{design.title}</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm 
                                       text-white/90 text-sm font-medium">
                              {design.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex-shrink-0 w-[calc((100%-1440px)/2)]" />
            </motion.div>
          </div>
        </div>

        {/* Full Screen Modal */}
        <AnimatePresence>
          {selectedDesign && (
            <DesignModal 
              design={selectedDesign} 
              onClose={() => setSelectedDesign(null)} 
            />
          )}
        </AnimatePresence>
      </section>
    </LazyMotion>
  );
};

export default memo(GraphicDesign);