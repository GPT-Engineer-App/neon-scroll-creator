import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Github, Twitter, Cpu, Code, Zap, Star, Users, MessageSquare } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chartData = [
    { name: 'Jan', stars: 0 },
    { name: 'Feb', stars: 5000 },
    { name: 'Mar', stars: 12000 },
    { name: 'Apr', stars: 17000 },
    { name: 'May', stars: 38500 },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <Hero />
      <Features />
      <ProjectStats />
      <Tweets />
      <CallToAction />
    </div>
  );
};

const Header = ({ scrollY }) => (
  <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300"
          style={{ backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollY / 500, 0.9)})` }}>
    <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-neon-green"
      >
        GPT Engineer
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex space-x-6"
      >
        <a href="#features" className="hover:text-neon-pink transition-colors">Features</a>
        <a href="#stats" className="hover:text-neon-pink transition-colors">Stats</a>
        <a href="#tweets" className="hover:text-neon-pink transition-colors">Tweets</a>
        <a href="https://github.com/AntonOsika/gpt-engineer" target="_blank" rel="noopener noreferrer" className="hover:text-neon-pink transition-colors">GitHub</a>
      </motion.div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="text-center z-10">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6 text-neon-blue"
      >
        GPT Engineer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl mb-8 text-neon-pink"
      >
        Building AGI in Europe
      </motion.p>
      <motion.a
        href="https://github.com/AntonOsika/gpt-engineer"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-neon-green text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-neon-pink hover:text-white transition-colors"
      >
        Get Started
      </motion.a>
    </div>
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue via-transparent to-neon-pink opacity-20"></div>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-neon-green rounded-full"
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 bg-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-neon-blue">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Cpu className="w-12 h-12 text-neon-green" />, title: 'One Prompt Codebase', description: 'Generate an entire codebase from a single prompt' },
          { icon: <Code className="w-12 h-12 text-neon-pink" />, title: 'Technical Spec', description: 'Automatically generates a detailed technical specification' },
          { icon: <Zap className="w-12 h-12 text-neon-yellow" />, title: 'Easy Customization', description: 'Modify and experiment with your own reasoning steps' },
          { icon: <MessageSquare className="w-12 h-12 text-neon-blue" />, title: 'Clarifying Questions', description: 'Asks for clarification to ensure accurate results' },
          { icon: <Github className="w-12 h-12 text-neon-purple" />, title: 'Open Source', description: 'Fully open-source and available on GitHub' },
          { icon: <Users className="w-12 h-12 text-neon-orange" />, title: 'Community Driven', description: 'Benefit from a growing community of contributors' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-neon-green transition-shadow duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-neon-green">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectStats = () => (
  <section id="stats" className="py-20 bg-black">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-neon-pink">Project Growth</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} />
              <Line type="monotone" dataKey="stars" stroke="#00ff00" strokeWidth={2} dot={{ fill: '#00ff00' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-semibold mb-2 text-neon-green flex items-center">
              <Star className="w-6 h-6 mr-2" /> GitHub Stars
            </h3>
            <p className="text-4xl font-bold text-neon-yellow">38,500+</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-neon-green flex items-center">
              <Code className="w-6 h-6 mr-2" /> Working Codebases Generated
            </h3>
            <p className="text-4xl font-bold text-neon-yellow">2,500+</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Tweets = () => {
  const tweets = [
    "Introducing gpt-engineer App👶\n\nsince gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english\n\nMission: Reduce barriers to build",
    "👶🤖 Introducing  `gpt-engineer`\n\n▸ One prompt generates a codebase\n▸ Asks clarifying questions\n▸ Generates technical spec\n▸ Writes all necessary code\n▸ Easy to add your own reasoning steps, modify, and experiment\n▸ open source\n▸ Lets you finish a project in one sitting",
    "Early this year LLMs started to show that they can reason. I quickly started looking into what this will lead to. And (being a CTO) how the Engineering role will change.\n\n2 half-weekends of coding + one tweet later...\n\n...and now the open-source project from this has a life of its own",
  ];

  return (
    <section id="tweets" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-neon-blue">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tweets.map((tweet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-neon-pink transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Twitter className="w-6 h-6 text-neon-blue mr-2" />
                <span className="text-neon-green font-semibold">@AntonOsika</span>
              </div>
              <p className="text-gray-300">{tweet}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => (
  <section className="py-20 bg-black">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-neon-green"
      >
        Ready to revolutionize your coding workflow?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8 text-gray-300"
      >
        Join thousands of developers who are already using GPT Engineer to boost their productivity and creativity.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center space-x-4"
      >
        <a
          href="https://github.com/AntonOsika/gpt-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-blue text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-neon-green transition-colors"
        >
          Star on GitHub
        </a>
        <a
          href="#"
          className="bg-neon-pink text-black px-8 py-3 rounded-full text-xl font-semibold hover:bg-neon-yellow transition-colors"
        >
          Try Demo
        </a>
      </motion.div>
    </div>
  </section>
);

export default Index;
