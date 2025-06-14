import { memo } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Award, Code, Film, Palette, ExternalLink } from 'lucide-react';

const SkillCard = memo(({ skill, index }: { skill: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-8 
              shadow-lg hover:shadow-xl transition-all duration-300
              hover:bg-white/60 border border-white/20"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8B57] to-transparent 
                  rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="text-[#2E8B57] mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
      {skill.icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{skill.title}</h3>
    <p className="text-gray-600 leading-relaxed">{skill.description}</p>
  </motion.div>
));

const ExperienceCard = memo(({ experience, index }: { experience: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
    className="group relative bg-white/40 backdrop-blur-md rounded-2xl p-8 
              hover:bg-white/60 transition-all duration-300
              border border-white/20 shadow-lg hover:shadow-xl"
  >
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E8B57] to-transparent 
                  rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="flex items-start justify-between">
      <div>
        <h4 className="text-xl font-bold mb-2 text-gray-900">{experience.title}</h4>
        <p className="text-[#2E8B57] mb-4 font-medium">{experience.company} • {experience.period}</p>
      </div>
      <ExternalLink className="text-gray-400 group-hover:text-[#2E8B57] transition-colors" size={20} />
    </div>
    <p className="text-gray-600 leading-relaxed">{experience.description}</p>
  </motion.div>
));

const About = () => {
  const skills = [
    {
      icon: <Film className="w-8 h-8" />,
      title: 'Video Editing',
      description: 'Professional video editing with industry-standard tools and creative storytelling techniques',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'CGI & 3D',
      description: 'Creating stunning 3D visualizations and animations that bring ideas to life',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Eye-catching designs that tell your story and capture audience attention',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Motion Graphics',
      description: 'Bringing designs to life with fluid animations and dynamic visual effects',
    },
  ];

  const experiences = [
    {
      title: 'Senior Video Editor',
      company: 'Creative Studio',
      period: '2020 - Present',
      description: 'Leading video production projects and mentoring junior editors. Specialized in commercial and corporate video content with a focus on storytelling and brand messaging.',
    },
    {
      title: 'Motion Designer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Created motion graphics and animations for social media campaigns and digital advertisements. Collaborated with creative teams to develop innovative visual solutions.',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="min-h-screen py-32 bg-[#fff8de]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="h-[2px] bg-[#2E8B57] mx-auto mb-8"
            />
            <h2 className="text-5xl font-bold font-bricolage mb-6 text-gray-900 tracking-tight">
              About <span className="text-[#2E8B57]">Me</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              A passionate creative professional with over 5 years of experience in video editing,
              CGI, and graphic design. Dedicated to delivering high-quality visual content that
              exceeds expectations and creates lasting impressions.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {skills.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Work Experience</h3>
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.title} experience={experience} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default memo(About);