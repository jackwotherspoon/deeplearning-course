export interface SessionDetails {
  fullDescription: string;
  speakerBio: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tracks: string[];
  takeaways: string[];
}

export interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  location: string;
  description: string;
  details: SessionDetails;
}

export const SESSIONS: Session[] = [
  // Day 1
  {
    id: 'd1-keynote-1',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Amelia Vance',
    time: '09:00 AM - 10:30 AM',
    day: 'Day 1',
    category: 'Keynote',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. We will discuss the impact of Generative AI, Large Language Models, and the ethical considerations that come with them.',
      speakerBio: 'Dr. Amelia Vance is the CEO of TechStack and a pioneer in artificial intelligence research.',
      level: 'Beginner',
      tracks: ['AI/ML', 'Leadership'],
      takeaways: ['Understand the current state of AI', 'Future trends in technology', 'Strategic vision for the industry']
    }
  },
  {
    id: 'd1-lab-1',
    title: 'Syndicate End-To-End Models',
    speaker: 'Alan Turing',
    time: '09:00 AM - 11:00 AM',
    day: 'Day 1',
    category: 'Learning Lab',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on workshop will guide you through building a robust ML pipeline.',
      speakerBio: 'Alan Turing is a computer scientist and mathematician who is considered the father of theoretical computer science and artificial intelligence.',
      level: 'Advanced',
      tracks: ['DevOps', 'AI/ML'],
      takeaways: ['Build an ML pipeline', 'Deploy to Kubernetes', 'Monitor model performance']
    }
  },
  {
    id: 'd1-breakout-1',
    title: 'Brand Distributed Niches',
    speaker: 'Alice Smith',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively in a crowded market.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will cover strategies for identifying target audiences, creating compelling messaging, and leveraging digital channels to reach your niche.',
      speakerBio: 'Alice Smith is a marketing guru with over 15 years of experience in branding and digital marketing.',
      level: 'Intermediate',
      tracks: ['Marketing', 'Strategy'],
      takeaways: ['Identify target niches', 'Create compelling messaging', 'Leverage digital channels']
    }
  },
  {
    id: 'd1-breakout-2',
    title: 'Unleash Real-Time Initiatives',
    speaker: 'Karen Hall',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives for business growth.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Discover how leading companies are using real-time data to drive decision-making and improve customer experiences.',
      speakerBio: 'Karen Hall is a data scientist and consultant specializing in real-time analytics.',
      level: 'Intermediate',
      tracks: ['Data', 'Business Intelligence'],
      takeaways: ['Real-time data strategies', 'Case study analysis', 'Implementation best practices']
    }
  },
  {
    id: 'd1-lab-2',
    title: 'Generate Extensible Relationships',
    speaker: 'Ursula K. Le Guin',
    time: '11:00 AM - 01:00 PM',
    day: 'Day 1',
    category: 'Learning Lab',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships in software architecture.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. This session focuses on designing software systems that are flexible, scalable, and easy to maintain. We will explore various design patterns and architectural styles.',
      speakerBio: 'Ursula K. Le Guin is a software architect and author known for her work on distributed systems.',
      level: 'Advanced',
      tracks: ['Architecture', 'Software Design'],
      takeaways: ['Design extensible systems', 'Apply design patterns', 'Refactor legacy code']
    }
  },
  {
    id: 'd1-breakout-3',
    title: 'Streamline Customized Eyeballs',
    speaker: 'Bob Jones',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs and improving user engagement.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. Learn how to optimize user interfaces and user experiences to capture and retain user attention in a competitive digital landscape.',
      speakerBio: 'Bob Jones is a UX/UI designer with a passion for creating intuitive and engaging digital experiences.',
      level: 'Beginner',
      tracks: ['UX/UI', 'Product Design'],
      takeaways: ['Optimize user interfaces', 'Improve user engagement', 'Conduct user testing']
    }
  },
  {
    id: 'd1-breakout-4',
    title: 'E-Enable Dynamic Communities',
    speaker: 'Larry King',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities using modern web technologies.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. This session explores the technical and social aspects of building and managing online communities using modern web technologies and social media platforms.',
      speakerBio: 'Larry King is a community manager and developer advocate.',
      level: 'Intermediate',
      tracks: ['Community', 'Web Development'],
      takeaways: ['Build online communities', 'Engage community members', 'Moderate content']
    }
  },
  {
    id: 'd1-lab-3',
    title: 'Transition Efficient Channels',
    speaker: 'Victor Hugo',
    time: '02:00 PM - 04:00 PM',
    day: 'Day 1',
    category: 'Learning Lab',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for high-volume data processing.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Learn how to design and implement efficient data processing pipelines using message queues and stream processing frameworks.',
      speakerBio: 'Victor Hugo is a data engineer and open-source contributor.',
      level: 'Advanced',
      tracks: ['Data Engineering', 'Backend'],
      takeaways: ['Implement data pipelines', 'Use message queues', 'Optimize data processing']
    }
  },
  {
    id: 'd1-breakout-5',
    title: 'Implement Strategic Communities',
    speaker: 'Charlie Brown',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 103',
    description: 'Implementing strategic communities for growth and customer loyalty.',
    details: {
      fullDescription: 'Implementing strategic communities for growth. Discover how to leverage community-led growth strategies to build a loyal customer base and drive revenue.',
      speakerBio: 'Charlie Brown is a growth hacker and community strategist.',
      level: 'Intermediate',
      tracks: ['Growth', 'Community'],
      takeaways: ['Community-led growth', 'Customer loyalty strategies', 'Measuring community impact']
    }
  },
  {
    id: 'd1-breakout-6',
    title: 'Target Holistic Web Services',
    speaker: 'Mike Scott',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 1',
    category: 'Breakout',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively for enterprise integration.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. This session covers best practices for designing and consuming RESTful APIs and GraphQL services in enterprise environments.',
      speakerBio: 'Mike Scott is a backend developer and API enthusiast.',
      level: 'Advanced',
      tracks: ['Backend', 'API Design'],
      takeaways: ['Design RESTful APIs', 'Implement GraphQL', 'Secure web services']
    }
  },
  {
    id: 'd1-lab-4',
    title: 'E-Enable Next-Generation Web Services',
    speaker: 'Katherine Johnson',
    time: '04:00 PM - 06:00 PM',
    day: 'Day 1',
    category: 'Learning Lab',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with serverless architecture.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the benefits and challenges of serverless computing and learn how to build scalable and cost-effective web applications using serverless technologies.',
      speakerBio: 'Katherine Johnson is a cloud architect and serverless advocate.',
      level: 'Intermediate',
      tracks: ['Cloud', 'Serverless'],
      takeaways: ['Understand serverless concepts', 'Build serverless apps', 'Optimize cloud costs']
    }
  },

  // Day 2
  {
    id: 'd2-keynote-1',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. John Doe',
    time: '09:00 AM - 10:00 AM',
    day: 'Day 2',
    category: 'Keynote',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. We will discuss the risks of bias in AI models and how to mitigate them.',
      speakerBio: 'Prof. John Doe is a professor of computer science and ethics at Tech University.',
      level: 'Beginner',
      tracks: ['AI/ML', 'Ethics'],
      takeaways: ['Understand AI ethics', 'Mitigate bias in AI', 'Ensure AI safety']
    }
  },
  {
    id: 'd2-lab-1',
    title: 'Streamline B2C Experiences',
    speaker: 'Ada Lovelace',
    time: '09:00 AM - 11:00 AM',
    day: 'Day 2',
    category: 'Learning Lab',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab: Optimizing the customer journey.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Learn how to map customer journeys, identify pain points, and implement solutions to improve the overall customer experience.',
      speakerBio: 'Ada Lovelace is a product manager and customer experience expert.',
      level: 'Intermediate',
      tracks: ['Product Management', 'CX'],
      takeaways: ['Map customer journeys', 'Identify pain points', 'Improve customer experience']
    }
  },
  {
    id: 'd2-breakout-1',
    title: 'Optimize Vertical Applications',
    speaker: 'David Wilson',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance and scalability.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. This session delves into performance tuning techniques for specific industry verticals, such as finance, healthcare, and retail.',
      speakerBio: 'David Wilson is a performance engineer and industry consultant.',
      level: 'Advanced',
      tracks: ['Performance', 'Industry Solutions'],
      takeaways: ['Performance tuning', 'Industry-specific optimizations', 'Scalability strategies']
    }
  },
  {
    id: 'd2-breakout-2',
    title: 'Aggregate Granular Synergies',
    speaker: 'Nancy Adams',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success in cross-functional teams.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Learn how to foster collaboration and communication across different departments and teams to achieve common goals.',
      speakerBio: 'Nancy Adams is an organizational psychologist and team building coach.',
      level: 'Beginner',
      tracks: ['Management', 'Collaboration'],
      takeaways: ['Foster collaboration', 'Improve communication', 'Build effective teams']
    }
  },
  {
    id: 'd2-lab-2',
    title: 'Maximize Real-Time Eyeballs',
    speaker: 'William Shakespeare',
    time: '11:00 AM - 01:00 PM',
    day: 'Day 2',
    category: 'Learning Lab',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop: Advanced content marketing strategies.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. This interactive session will teach you how to create viral content and leverage social media trends to maximize reach and engagement.',
      speakerBio: 'William Shakespeare is a content creator and social media influencer.',
      level: 'Intermediate',
      tracks: ['Marketing', 'Social Media'],
      takeaways: ['Create viral content', 'Leverage social media trends', 'Maximize engagement']
    }
  },
  {
    id: 'd2-breakout-3',
    title: 'Redefine World-Class Bandwidth',
    speaker: 'Eve Davis',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards for the modern enterprise.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore the latest advancements in networking technology, including 5G, Wi-Fi 6, and SD-WAN.',
      speakerBio: 'Eve Davis is a network engineer and telecommunications expert.',
      level: 'Advanced',
      tracks: ['Networking', 'Infrastructure'],
      takeaways: ['5G and Wi-Fi 6', 'SD-WAN', 'Network optimization']
    }
  },
  {
    id: 'd2-breakout-4',
    title: 'Benchmark Synergistic Vortals',
    speaker: 'Oscar Wilde',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry to gain competitive advantage.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. Learn how to conduct competitive analysis and benchmark your products and services against industry leaders.',
      speakerBio: 'Oscar Wilde is a market research analyst and competitive intelligence specialist.',
      level: 'Intermediate',
      tracks: ['Market Research', 'Strategy'],
      takeaways: ['Competitive analysis', 'Benchmarking techniques', 'Strategic planning']
    }
  },
  {
    id: 'd2-lab-3',
    title: 'Seize Next-Generation Bandwidth',
    speaker: 'Xena Warrior',
    time: '02:00 PM - 04:00 PM',
    day: 'Day 2',
    category: 'Learning Lab',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial: Implementing high-speed networks.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. This hands-on lab covers the installation and configuration of high-speed network equipment and protocols.',
      speakerBio: 'Xena Warrior is a certified network professional.',
      level: 'Advanced',
      tracks: ['Networking', 'Hardware'],
      takeaways: ['Configure network equipment', 'Implement high-speed protocols', 'Troubleshoot network issues']
    }
  },
  {
    id: 'd2-breakout-5',
    title: 'Disintermediate Back-End Web Services',
    speaker: 'Frank Miller',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services for microservices architecture.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. Learn how to break down monolithic applications into microservices and decouple backend services for greater flexibility.',
      speakerBio: 'Frank Miller is a software architect and microservices expert.',
      level: 'Advanced',
      tracks: ['Architecture', 'Microservices'],
      takeaways: ['Microservices architecture', 'Decouple backend services', 'Refactor monoliths']
    }
  },
  {
    id: 'd2-breakout-6',
    title: 'Transform Bleeding-Edge Bandwidth',
    speaker: 'Paul Young',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 2',
    category: 'Breakout',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study: Implementing 6G research.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. A look into the future of wireless communication and the potential of 6G technology.',
      speakerBio: 'Paul Young is a researcher and telecommunications engineer.',
      level: 'Intermediate',
      tracks: ['Future Tech', 'Networking'],
      takeaways: ['6G technology', 'Future of wireless', 'Research trends']
    }
  },

  // Day 3
  {
    id: 'd3-lab-1',
    title: 'Scale Next-Generation E-Business',
    speaker: 'Grace Hopper',
    time: '09:00 AM - 11:00 AM',
    day: 'Day 3',
    category: 'Learning Lab',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies for global markets.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Learn how to scale your e-commerce platform to handle global traffic, multiple currencies, and international shipping.',
      speakerBio: 'Grace Hopper is an e-commerce strategist and technology executive.',
      level: 'Advanced',
      tracks: ['E-commerce', 'Global Business'],
      takeaways: ['Scale e-commerce platforms', 'Handle global traffic', 'International expansion']
    }
  },
  {
    id: 'd3-breakout-1',
    title: 'Transition Holistic Models',
    speaker: 'Grace Lee',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly in data science.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. This session explores the integration of various data models to create a comprehensive view of business operations.',
      speakerBio: 'Grace Lee is a data scientist and business analyst.',
      level: 'Intermediate',
      tracks: ['Data Science', 'Analytics'],
      takeaways: ['Integrate data models', 'Holistic data view', 'Business analytics']
    }
  },
  {
    id: 'd3-breakout-2',
    title: 'Mesh Customized Web Services',
    speaker: 'Quinn Turner',
    time: '11:00 AM - 12:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly using service mesh technology.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Learn about service mesh architecture (e.g., Istio, Linkerd) and how it simplifies service-to-service communication.',
      speakerBio: 'Quinn Turner is a DevOps engineer and cloud native expert.',
      level: 'Advanced',
      tracks: ['DevOps', 'Cloud Native'],
      takeaways: ['Service mesh architecture', 'Istio and Linkerd', 'Service communication']
    }
  },
  {
    id: 'd3-lab-2',
    title: 'Cultivate Efficient Bandwidth',
    speaker: 'Yoda',
    time: '11:00 AM - 01:00 PM',
    day: 'Day 3',
    category: 'Learning Lab',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive: Optimizing network protocols.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. A deep technical dive into TCP/IP optimization, congestion control algorithms, and network tuning.',
      speakerBio: 'Yoda is a legendary network master with centuries of experience.',
      level: 'Advanced',
      tracks: ['Networking', 'Protocols'],
      takeaways: ['TCP/IP optimization', 'Congestion control', 'Network tuning']
    }
  },
  {
    id: 'd3-breakout-3',
    title: 'Redefine World-Class E-Commerce',
    speaker: 'Henry White',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences with headless architecture.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Explore the benefits of headless commerce and how to build flexible and personalized shopping experiences.',
      speakerBio: 'Henry White is a full-stack developer and e-commerce specialist.',
      level: 'Intermediate',
      tracks: ['E-commerce', 'Web Development'],
      takeaways: ['Headless commerce', 'Personalized experiences', 'Flexible architecture']
    }
  },
  {
    id: 'd3-breakout-4',
    title: 'Monetize Next-Generation Relationships',
    speaker: 'Rachel Cook',
    time: '01:00 PM - 02:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships in the creator economy.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. This session looks at the creator economy and how brands can partner with creators to drive sales and awareness.',
      speakerBio: 'Rachel Cook is a creator economy expert and talent manager.',
      level: 'Beginner',
      tracks: ['Marketing', 'Creator Economy'],
      takeaways: ['Creator partnerships', 'Influencer marketing', 'Monetization strategies']
    }
  },
  {
    id: 'd3-lab-3',
    title: 'Drive Rich Web Services',
    speaker: 'Zorro',
    time: '02:00 PM - 04:00 PM',
    day: 'Day 3',
    category: 'Learning Lab',
    location: 'Lab B',
    description: 'Driving rich web services masterclass: Building progressive web apps (PWAs).',
    details: {
      fullDescription: 'Driving rich web services masterclass. Learn how to build Progressive Web Apps (PWAs) that offer native-like experiences on the web.',
      speakerBio: 'Zorro is a frontend developer known for his sharp coding skills.',
      level: 'Intermediate',
      tracks: ['Web Development', 'Frontend'],
      takeaways: ['Build PWAs', 'Service workers', 'Offline capabilities']
    }
  },
  {
    id: 'd3-breakout-5',
    title: 'Engage Distributed Infrastructures',
    speaker: 'Ivy Green',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale using edge computing.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. This session explores the potential of edge computing and how to deploy applications closer to the user for lower latency.',
      speakerBio: 'Ivy Green is a cloud infrastructure engineer.',
      level: 'Advanced',
      tracks: ['Cloud', 'Edge Computing'],
      takeaways: ['Edge computing', 'Low latency apps', 'Distributed systems']
    }
  },
  {
    id: 'd3-breakout-6',
    title: 'Re-Intermediate Rich Communities',
    speaker: 'Steve Jobs-ish',
    time: '02:30 PM - 03:30 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth through platform cooperatives.',
    details: {
      fullDescription: 'Re-intermediating rich communities for growth. A discussion on platform cooperatives and how to build digital platforms that are owned and governed by their users.',
      speakerBio: 'Steve Jobs-ish is a visionary entrepreneur and design thinker.',
      level: 'Intermediate',
      tracks: ['Startups', 'Social Impact'],
      takeaways: ['Platform cooperatives', 'User ownership', 'Digital governance']
    }
  },
  {
    id: 'd3-breakout-7',
    title: 'E-Enable Efficient Schemas',
    speaker: 'Jack Black',
    time: '04:00 PM - 05:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data modeling in NoSQL databases.',
    details: {
      fullDescription: 'E-Enabling efficient schemas for data. Learn how to design efficient data models for NoSQL databases like MongoDB and Cassandra.',
      speakerBio: 'Jack Black is a database administrator and performance tuner.',
      level: 'Intermediate',
      tracks: ['Database', 'NoSQL'],
      takeaways: ['NoSQL data modeling', 'Database performance', 'Schema design']
    }
  },
  {
    id: 'd3-breakout-8',
    title: 'Streamline Clicks-And-Mortar Functionalities',
    speaker: 'Tom Hanks-ish',
    time: '04:00 PM - 05:00 PM',
    day: 'Day 3',
    category: 'Breakout',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities for omnichannel retail.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. This session addresses the challenges of integrating online and offline retail channels to provide a seamless customer experience.',
      speakerBio: 'Tom Hanks-ish is a retail technology consultant.',
      level: 'Beginner',
      tracks: ['Retail', 'Omnichannel'],
      takeaways: ['Omnichannel retail', 'Integrate online/offline', 'Customer experience']
    }
  }
];