export interface Session {
  id: string;
  title: string;
  description: string;
  speaker: string;
  time: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  category: 'Breakout' | 'Customer Story' | 'Learning Lab' | 'Keynote' | 'Expo';
  location: string;
  details?: {
    fullDescription: string;
    speakerBio: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    tracks: string[];
    takeaways: string[];
  };
}

export const SESSIONS: Session[] = [
  // Keynotes
  {
    id: 'KEY-001',
    title: 'The Future of AI is Here',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.',
    speaker: 'Dr. Amelia Vance, CEO',
    time: '09:00 AM - 10:30 AM',
    day: 'Day 1',
    category: 'Keynote',
    location: 'Main Hall A',
    details: {
      fullDescription: 'In this visionary opening keynote, Dr. Amelia Vance will chart the trajectory of artificial intelligence over the next decade. From the rise of multimodal models to the integration of AI in edge computing, discover how these technologies are reshaping industries and societies. We will also unveil our latest platform updates designed to empower developers and enterprises to build the impossible.',
      speakerBio: 'Dr. Amelia Vance is a pioneer in artificial intelligence with over 20 years of experience. She holds a PhD in Computer Science from MIT and has led major AI initiatives at top tech companies before founding AI Summit.',
      level: 'Beginner',
      tracks: ['Visionary', 'Industry Trends'],
      takeaways: [
        'Understand the strategic roadmap for AI in the next 5 years.',
        'Learn about upcoming platform features and tools.',
        'Gain insights into how AI is solving global challenges.'
      ]
    }
  },
  {
    id: 'KEY-002',
    title: 'Building Ethical AI Systems',
    description: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.',
    speaker: 'Prof. John Doe',
    time: '09:00 AM - 10:00 AM',
    day: 'Day 2',
    category: 'Keynote',
    location: 'Main Hall A',
    details: {
      fullDescription: 'As AI systems become more autonomous, the need for ethical frameworks has never been greater. This keynote addresses the critical challenges of bias, explainability, and alignment. Prof. Doe will share practical strategies for engineering teams to embed ethics into their development lifecycle, ensuring that we build systems that are not only powerful but also trustworthy and fair.',
      speakerBio: 'Prof. John Doe is a leading voice in AI ethics and a Professor of Computer Science at Stanford University. His research focuses on algorithmic fairness and human-centered AI.',
      level: 'Intermediate',
      tracks: ['Ethics', 'Governance'],
      takeaways: [
        'Identify common sources of bias in machine learning models.',
        'Implement techniques for model explainability and transparency.',
        'Establish an ethical review process for your AI projects.'
      ]
    }
  },

  // BRK2 Sessions (Breakout)
  { 
    id: 'BRK2-191', 
    title: 'Brand Distributed Niches', 
    description: 'Learn how to brand distributed niches effectively.', 
    speaker: 'Alice Smith', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 1', 
    category: 'Breakout', 
    location: 'Room 101',
    details: {
      fullDescription: 'In a fragmented market, identifying and branding distributed niches is key to capturing value. This session explores data-driven approaches to segment audiences and tailor brand messaging that resonates across disparate groups without losing core identity.',
      speakerBio: 'Alice Smith is a Chief Marketing Officer with a background in data science. She specializes in hyper-personalized marketing strategies.',
      level: 'Intermediate',
      tracks: ['Marketing', 'Strategy'],
      takeaways: [
        'Techniques for identifying micro-segments in your market.',
        'Strategies for maintaining brand consistency across niches.',
        'Case studies of successful niche branding campaigns.'
      ]
    }
  },
  { 
    id: 'BRK2-192', 
    title: 'Streamline Customized Eyeballs', 
    description: 'Strategies for streamlining customized eyeballs.', 
    speaker: 'Bob Jones', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 1', 
    category: 'Breakout', 
    location: 'Room 102',
    details: {
      fullDescription: 'Attention is the new currency. This session dives into the mechanics of "customized eyeballs" – optimizing user attention through personalized content streams. Learn how to use reinforcement learning to dynamically adjust content feeds for maximum engagement.',
      speakerBio: 'Bob Jones is a Product Manager at a leading social media platform, focusing on feed ranking algorithms.',
      level: 'Advanced',
      tracks: ['Product', 'UX', 'ML'],
      takeaways: [
        'Understanding attention metrics beyond click-through rates.',
        'Implementing reinforcement learning for content personalization.',
        'Balancing engagement with user well-being.'
      ]
    }
  },
  { 
    id: 'BRK2-293', 
    title: 'Implement Strategic Communities', 
    description: 'Implementing strategic communities for growth.', 
    speaker: 'Charlie Brown', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 1', 
    category: 'Breakout', 
    location: 'Room 103',
    details: {
      fullDescription: 'Communities are the moat of the future. Learn how to build, nurture, and scale strategic communities that drive product adoption and provide a feedback loop for innovation. We will discuss the role of AI in community moderation and sentiment analysis.',
      speakerBio: 'Charlie Brown is a Director of Developer Relations with over a decade of experience building tech communities.',
      level: 'Beginner',
      tracks: ['Community', 'Growth'],
      takeaways: [
        'Frameworks for community lifecycle management.',
        'Tools for automated community health monitoring.',
        'Turning community members into product advocates.'
      ]
    }
  },
  { 
    id: 'BRK2-301', 
    title: 'Optimize Vertical Applications', 
    description: 'Optimizing vertical applications for better performance.', 
    speaker: 'David Wilson', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 2', 
    category: 'Breakout', 
    location: 'Room 101',
    details: {
      fullDescription: 'Vertical AI applications require specialized optimization techniques. This session covers fine-tuning large language models for specific domains such as legal, medical, or finance, ensuring high accuracy and low latency.',
      speakerBio: 'David Wilson is a Senior AI Engineer specializing in domain adaptation and model optimization.',
      level: 'Advanced',
      tracks: ['Engineering', 'Optimization'],
      takeaways: [
        'Best practices for fine-tuning LLMs on domain-specific data.',
        'Techniques for quantization and pruning to reduce model size.',
        'Evaluating model performance in vertical applications.'
      ]
    }
  },
  { 
    id: 'BRK2-377', 
    title: 'Redefine World-Class Bandwidth', 
    description: 'Redefining world-class bandwidth standards.', 
    speaker: 'Eve Davis', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 2', 
    category: 'Breakout', 
    location: 'Room 102',
    details: {
      fullDescription: 'As AI models grow, so does the need for massive data throughput. This session explores the latest in networking infrastructure, from optical interconnects to 800G Ethernet, enabling the training of trillion-parameter models.',
      speakerBio: 'Eve Davis is a Network Architect at a major cloud provider, designing the infrastructure for next-gen AI clusters.',
      level: 'Advanced',
      tracks: ['Infrastructure', 'Hardware'],
      takeaways: [
        'The evolution of data center networking for AI.',
        'Comparing InfiniBand vs. Ethernet for AI workloads.',
        'Future trends in optical interconnects.'
      ]
    }
  },
  { 
    id: 'BRK2-561', 
    title: 'Disintermediate Back-End Web Services', 
    description: 'Techniques to disintermediate back-end web services.', 
    speaker: 'Frank Miller', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 2', 
    category: 'Breakout', 
    location: 'Room 103',
    details: {
      fullDescription: 'Serverless and edge computing are changing how we architect back-ends. Learn how to "disintermediate" traditional monolithic services by moving logic closer to the user and leveraging AI agents to handle complex orchestration tasks autonomously.',
      speakerBio: 'Frank Miller is a Cloud Solutions Architect known for his work on decentralized architectures.',
      level: 'Intermediate',
      tracks: ['Architecture', 'Cloud'],
      takeaways: [
        'Patterns for decentralized back-end architectures.',
        'Using AI agents for service orchestration.',
        'Reducing latency and cost through edge computing.'
      ]
    }
  },
  { 
    id: 'BRK2-692', 
    title: 'Transition Holistic Models', 
    description: 'Transitioning to holistic models seamlessly.', 
    speaker: 'Grace Lee', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 3', 
    category: 'Breakout', 
    location: 'Room 101',
    details: {
      fullDescription: 'Moving from specialized, task-specific models to holistic, multimodal foundation models is a major shift. This session guides you through the transition, discussing data strategy, model selection, and the cultural changes required in your engineering team.',
      speakerBio: 'Grace Lee is a VP of Engineering who has successfully led the transition to foundation models at two unicorns.',
      level: 'Intermediate',
      tracks: ['Strategy', 'Management'],
      takeaways: [
        'Building a business case for foundation models.',
        'Managing the migration of legacy AI systems.',
        'Retraining teams for the new AI paradigm.'
      ]
    }
  },
  { 
    id: 'BRK2-697', 
    title: 'Redefine World-Class E-Commerce', 
    description: 'Redefining world-class e-commerce experiences.', 
    speaker: 'Henry White', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 3', 
    category: 'Breakout', 
    location: 'Room 102',
    details: {
      fullDescription: 'E-commerce is being revolutionized by generative AI. From virtual try-ons to hyper-personalized shopping assistants, discover how AI is creating immersive and frictionless shopping experiences that drive conversion and loyalty.',
      speakerBio: 'Henry White is the Head of Innovation at a global retail brand.',
      level: 'Beginner',
      tracks: ['Retail', 'GenAI'],
      takeaways: [
        'Implementing virtual try-on technology.',
        'Building conversational shopping assistants.',
        'Personalization strategies using generative AI.'
      ]
    }
  },
  { 
    id: 'BRK2-753', 
    title: 'Engage Distributed Infrastructures', 
    description: 'Engaging distributed infrastructures at scale.', 
    speaker: 'Ivy Green', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 3', 
    category: 'Breakout', 
    location: 'Room 103',
    details: {
      fullDescription: 'Managing AI workloads across hybrid and multi-cloud environments is complex. This session introduces tools and practices for federated learning and distributed training, allowing you to leverage compute resources wherever they reside.',
      speakerBio: 'Ivy Green is a Distinguished Engineer focused on distributed systems and federated learning.',
      level: 'Advanced',
      tracks: ['Infrastructure', 'Cloud'],
      takeaways: [
        'Setting up federated learning pipelines.',
        'Managing state and consistency in distributed training.',
        'Cost optimization for multi-cloud AI workloads.'
      ]
    }
  },
  { 
    id: 'BRK2-793', 
    title: 'E-Enable Efficient Schemas', 
    description: 'E-Enabling efficient schemas for data.', 
    speaker: 'Jack Black', 
    time: '04:00 PM - 05:00 PM', 
    day: 'Day 3', 
    category: 'Breakout', 
    location: 'Room 104',
    details: {
      fullDescription: 'Data is the fuel for AI, but messy schemas can clog the engine. Learn how to use AI to automatically discover, map, and optimize data schemas, ensuring your data lake is always ready for training and analytics.',
      speakerBio: 'Jack Black is a Data Architect obsessed with data quality and automation.',
      level: 'Intermediate',
      tracks: ['Data', 'Engineering'],
      takeaways: [
        'Automating schema discovery and evolution.',
        'Tools for semantic data mapping.',
        'Improving data quality for LLM training.'
      ]
    }
  },

  // CUSLT Sessions (Customer Story)
  { 
    id: 'CUSLT-138', 
    title: 'Unleash Real-Time Initiatives', 
    description: 'Real-world case study on unleashing real-time initiatives.', 
    speaker: 'Karen Hall', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 1', 
    category: 'Customer Story', 
    location: 'Room 201',
    details: {
      fullDescription: 'Hear how FintechCorp reduced fraud detection latency from minutes to milliseconds using a real-time feature store and streaming inference. Karen will walk through the architecture, challenges, and the massive ROI achieved.',
      speakerBio: 'Karen Hall is the VP of Engineering at FintechCorp.',
      level: 'Intermediate',
      tracks: ['Fintech', 'Real-time'],
      takeaways: [
        'Architecture for real-time fraud detection.',
        'Implementing a feature store for streaming data.',
        'Business impact of low-latency AI.'
      ]
    }
  },
  { 
    id: 'CUSLT-152', 
    title: 'E-Enable Dynamic Communities', 
    description: 'How we e-enabled dynamic communities.', 
    speaker: 'Larry King', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 1', 
    category: 'Customer Story', 
    location: 'Room 202',
    details: {
      fullDescription: 'GamingStudioX used AI-driven matchmaking and toxicity detection to revitalize their player community. This session details how they trained models on player behavior to create safer, more engaging dynamic communities.',
      speakerBio: 'Larry King is a Lead Data Scientist at GamingStudioX.',
      level: 'Beginner',
      tracks: ['Gaming', 'Community'],
      takeaways: [
        'AI for toxicity detection in gaming voice chat.',
        'Dynamic matchmaking algorithms.',
        'Measuring community sentiment.'
      ]
    }
  },
  { 
    id: 'CUSLT-243', 
    title: 'Target Holistic Web Services', 
    description: 'Targeting holistic web services effectively.', 
    speaker: 'Mike Scott', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 1', 
    category: 'Customer Story', 
    location: 'Room 203',
    details: {
      fullDescription: 'GlobalLogistics Co. integrated AI across their entire web service stack to optimize supply chain routing. Learn how they moved from siloed optimization to a holistic model that considers weather, traffic, and inventory in real-time.',
      speakerBio: 'Mike Scott is the CTO of GlobalLogistics Co.',
      level: 'Intermediate',
      tracks: ['Logistics', 'Optimization'],
      takeaways: [
        'Building a digital twin of your supply chain.',
        'Integrating external data sources for better prediction.',
        'Scaling AI across a legacy web stack.'
      ]
    }
  },
  { 
    id: 'CUSLT-335', 
    title: 'Aggregate Granular Synergies', 
    description: 'Aggregating granular synergies for success.', 
    speaker: 'Nancy Adams', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 2', 
    category: 'Customer Story', 
    location: 'Room 201',
    details: {
      fullDescription: 'By aggregating granular data from thousands of IoT sensors, SmartCity Inc. was able to optimize energy consumption by 30%. Nancy shares the data engineering challenges and the "synergies" found when combining distinct data streams.',
      speakerBio: 'Nancy Adams is the Chief Data Officer at SmartCity Inc.',
      level: 'Intermediate',
      tracks: ['IoT', 'Energy'],
      takeaways: [
        'Handling high-velocity IoT data.',
        'Techniques for sensor data fusion.',
        'Energy optimization algorithms.'
      ]
    }
  },
  { 
    id: 'CUSLT-379', 
    title: 'Benchmark Synergistic Vortals', 
    description: 'Benchmarking synergistic vortals in the industry.', 
    speaker: 'Oscar Wilde', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 2', 
    category: 'Customer Story', 
    location: 'Room 202',
    details: {
      fullDescription: 'In the competitive world of vertical portals ("vortals"), benchmarking performance is key. Learn how HealthHub used AI to benchmark their patient outcomes against industry standards, driving a new era of value-based care.',
      speakerBio: 'Oscar Wilde is a Healthcare Analytics Director.',
      level: 'Advanced',
      tracks: ['Healthcare', 'Analytics'],
      takeaways: [
        'methodologies for healthcare benchmarking.',
        'Privacy-preserving data sharing.',
        'AI for patient outcome prediction.'
      ]
    }
  },
  { 
    id: 'CUSLT-441', 
    title: 'Transform Bleeding-Edge Bandwidth', 
    description: 'Transforming bleeding-edge bandwidth case study.', 
    speaker: 'Paul Young', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 2', 
    category: 'Customer Story', 
    location: 'Room 203',
    details: {
      fullDescription: 'TelecomGiant deployed AI at the network edge to manage 5G bandwidth dynamically. This story covers the transition from static rules to "bleeding-edge" AI traffic management.',
      speakerBio: 'Paul Young is the Head of Network AI at TelecomGiant.',
      level: 'Advanced',
      tracks: ['Telco', '5G'],
      takeaways: [
        'AI for network traffic management.',
        'Deploying models to edge base stations.',
        'Improving QoS with predictive scaling.'
      ]
    }
  },
  { 
    id: 'CUSLT-497', 
    title: 'Mesh Customized Web Services', 
    description: 'Meshing customized web services seamlessly.', 
    speaker: 'Quinn Turner', 
    time: '11:00 AM - 12:00 PM', 
    day: 'Day 3', 
    category: 'Customer Story', 
    location: 'Room 201',
    details: {
      fullDescription: 'ServiceMesh Co. used a service mesh architecture combined with AI to route traffic intelligently between microservices. Learn how they achieved 99.999% uptime during peak loads.',
      speakerBio: 'Quinn Turner is a Principal Site Reliability Engineer.',
      level: 'Advanced',
      tracks: ['SRE', 'Microservices'],
      takeaways: [
        'AI-driven traffic routing.',
        'Service mesh best practices.',
        'Automated incident response.'
      ]
    }
  },
  { 
    id: 'CUSLT-830', 
    title: 'Monetize Next-Generation Relationships', 
    description: 'Monetizing next-generation relationships.', 
    speaker: 'Rachel Cook', 
    time: '01:00 PM - 02:00 PM', 
    day: 'Day 3', 
    category: 'Customer Story', 
    location: 'Room 202',
    details: {
      fullDescription: 'DatingAppZ used generative AI to help users break the ice and build deeper connections. Rachel discusses the ethical considerations and the monetization impact of "next-gen relationship" features.',
      speakerBio: 'Rachel Cook is a Product VP at DatingAppZ.',
      level: 'Beginner',
      tracks: ['Social', 'GenAI'],
      takeaways: [
        'Using LLMs for conversation coaching.',
        'Monetization strategies for social apps.',
        'Safety in AI-mediated interactions.'
      ]
    }
  },
  { 
    id: 'CUSLT-902', 
    title: 'Re-Intermediate Rich Communities', 
    description: 'Re-intermediating rich communities for growth.', 
    speaker: 'Steve Jobs-ish', 
    time: '02:30 PM - 03:30 PM', 
    day: 'Day 3', 
    category: 'Customer Story', 
    location: 'Room 203',
    details: {
      fullDescription: 'CreatorPlatformY empowered creators to "re-intermediate" their relationship with fans using AI-driven analytics and personalized merchandise recommendations. A story of reclaiming platform ownership.',
      speakerBio: 'Steve Jobs-ish is the Founder of CreatorPlatformY.',
      level: 'Intermediate',
      tracks: ['Creator Economy', 'Platform'],
      takeaways: [
        'Empowering creators with data.',
        'AI for personalized merchandising.',
        'Building direct-to-fan relationships.'
      ]
    }
  },
  { 
    id: 'CUSLT-952', 
    title: 'Streamline Clicks-And-Mortar Functionalities', 
    description: 'Streamlining clicks-and-mortar functionalities.', 
    speaker: 'Tom Hanks-ish', 
    time: '04:00 PM - 05:00 PM', 
    day: 'Day 3', 
    category: 'Customer Story', 
    location: 'Room 204',
    details: {
      fullDescription: 'OmniRetailerZ successfully merged their online and offline operations. See how computer vision in stores and AI online created a seamless "clicks-and-mortar" experience.',
      speakerBio: 'Tom Hanks-ish is the COO of OmniRetailerZ.',
      level: 'Intermediate',
      tracks: ['Retail', 'Omnichannel'],
      takeaways: [
        'Computer vision for inventory tracking.',
        'Unified customer profiles.',
        'Predictive supply chain management.'
      ]
    }
  },

  // LRN Sessions (Learning Lab)
  { 
    id: 'LRN191', 
    title: 'Generate Extensible Relationships', 
    description: 'Workshop: Generating extensible relationships.', 
    speaker: 'Ursula K. Le Guin', 
    time: '11:00 AM - 01:00 PM', 
    day: 'Day 1', 
    category: 'Learning Lab', 
    location: 'Lab A',
    details: {
      fullDescription: 'In this hands-on workshop, you will learn to design database schemas and graph relationships that are extensible by default. We will use Neo4j and AI-assisted modeling tools.',
      speakerBio: 'Ursula K. Le Guin is a Data Modeling Expert and author.',
      level: 'Intermediate',
      tracks: ['Database', 'Workshop'],
      takeaways: [
        'Graph database fundamentals.',
        'Designing for extensibility.',
        'Hands-on modeling with Neo4j.'
      ]
    }
  },
  { 
    id: 'LRN314', 
    title: 'Transition Efficient Channels', 
    description: 'Hands-on: Transitioning efficient channels.', 
    speaker: 'Victor Hugo', 
    time: '02:00 PM - 04:00 PM', 
    day: 'Day 1', 
    category: 'Learning Lab', 
    location: 'Lab B',
    details: {
      fullDescription: 'Learn to migrate legacy message bus architectures to modern, high-efficiency streaming channels like Apache Kafka and Pulsar. Participants will build a migration plan and execute a mock transition.',
      speakerBio: 'Victor Hugo is a Streaming Data Consultant.',
      level: 'Advanced',
      tracks: ['Streaming', 'Workshop'],
      takeaways: [
        'Kafka vs. Pulsar architecture.',
        'Migration strategies for zero downtime.',
        'Performance tuning for streaming.'
      ]
    }
  },
  { 
    id: 'LRN349', 
    title: 'Maximize Real-Time Eyeballs', 
    description: 'Maximize real-time eyeballs workshop.', 
    speaker: 'William Shakespeare', 
    time: '11:00 AM - 01:00 PM', 
    day: 'Day 2', 
    category: 'Learning Lab', 
    location: 'Lab A',
    details: {
      fullDescription: 'A masterclass in building real-time engagement features. You will code a live-streaming reaction system and a concurrent user counter using WebSockets and Redis.',
      speakerBio: 'William Shakespeare is a Full Stack Developer and Playwright.',
      level: 'Intermediate',
      tracks: ['Web Dev', 'Real-time'],
      takeaways: [
        'Building scalable WebSocket servers.',
        'Using Redis for real-time counters.',
        'Frontend optimization for live data.'
      ]
    }
  },
  { 
    id: 'LRN354', 
    title: 'Seize Next-Generation Bandwidth', 
    description: 'Seize next-generation bandwidth tutorial.', 
    speaker: 'Xena Warrior', 
    time: '02:00 PM - 04:00 PM', 
    day: 'Day 2', 
    category: 'Learning Lab', 
    location: 'Lab B',
    details: {
      fullDescription: 'Get hands-on with RDMA and high-performance networking programming. You will write a simple application that utilizes RDMA to bypass the OS kernel for ultra-low latency communication.',
      speakerBio: 'Xena Warrior is a Systems Programmer.',
      level: 'Advanced',
      tracks: ['Systems Programming', 'Networking'],
      takeaways: [
        'Understanding RDMA verbs.',
        'Writing high-performance network code in C++.',
        'Debugging network latency.'
      ]
    }
  },
  { 
    id: 'LRN455', 
    title: 'Cultivate Efficient Bandwidth', 
    description: 'Cultivating efficient bandwidth deep dive.', 
    speaker: 'Yoda', 
    time: '11:00 AM - 01:00 PM', 
    day: 'Day 3', 
    category: 'Learning Lab', 
    location: 'Lab A',
    details: {
      fullDescription: 'Do or do not, there is no try. In this lab, you will learn data compression techniques and protocol buffers to minimize bandwidth usage in mobile applications.',
      speakerBio: 'Yoda is a Mobile Performance Guru.',
      level: 'Beginner',
      tracks: ['Mobile', 'Performance'],
      takeaways: [
        'Implementing Protocol Buffers.',
        'Advanced compression algorithms.',
        'Mobile network profiling tools.'
      ]
    }
  },
  { 
    id: 'LRN509', 
    title: 'Drive Rich Web Services', 
    description: 'Driving rich web services masterclass.', 
    speaker: 'Zorro', 
    time: '02:00 PM - 04:00 PM', 
    day: 'Day 3', 
    category: 'Learning Lab', 
    location: 'Lab B',
    details: {
      fullDescription: 'Build a "Rich" web service using GraphQL and Federation. Learn how to stitch together multiple APIs into a single, cohesive graph that drives a complex frontend application.',
      speakerBio: 'Zorro is a Backend Architect.',
      level: 'Intermediate',
      tracks: ['GraphQL', 'API'],
      takeaways: [
        'Setting up Apollo Federation.',
        'Schema design best practices.',
        'Optimizing GraphQL query performance.'
      ]
    }
  },
  { 
    id: 'LRN512', 
    title: 'Syndicate End-To-End Models', 
    description: 'Syndicating end-to-end models workshop.', 
    speaker: 'Alan Turing', 
    time: '09:00 AM - 11:00 AM', 
    day: 'Day 1', 
    category: 'Learning Lab', 
    location: 'Lab C',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. You will build a CI/CD pipeline for an ML model.',
      speakerBio: 'Alan Turing is the Father of Computer Science (and an MLOps enthusiast).',
      level: 'Advanced',
      tracks: ['MLOps', 'DevOps'],
      takeaways: [
        'Building ML pipelines with Kubeflow.',
        'Model versioning with MLflow.',
        'Canary deployments for ML models.'
      ]
    }
  },
  { 
    id: 'LRN711', 
    title: 'Streamline B2C Experiences', 
    description: 'Streamlining B2C experiences lab.', 
    speaker: 'Ada Lovelace', 
    time: '09:00 AM - 11:00 AM', 
    day: 'Day 2', 
    category: 'Learning Lab', 
    location: 'Lab C',
    details: {
      fullDescription: 'Focus on frontend performance and UX. You will optimize a sluggish React application, implementing code splitting (like we just did!), lazy loading, and accessible UI components.',
      speakerBio: 'Ada Lovelace is the First Programmer and a Frontend Wizard.',
      level: 'Intermediate',
      tracks: ['Frontend', 'React'],
      takeaways: [
        'React performance profiling.',
        'Implementing code splitting and suspense.',
        'Building accessible components.'
      ]
    }
  },
  { 
    id: 'LRN713', 
    title: 'Scale Next-Generation E-Business', 
    description: 'Scaling next-generation e-business strategies.', 
    speaker: 'Grace Hopper', 
    time: '09:00 AM - 11:00 AM', 
    day: 'Day 3', 
    category: 'Learning Lab', 
    location: 'Lab C',
    details: {
      fullDescription: 'Prepare for Black Friday traffic. This lab simulates massive traffic spikes and teaches you how to configure autoscaling, caching strategies (Redis/Varnish), and database read replicas to survive the load.',
      speakerBio: 'Grace Hopper is a Rear Admiral and Scalability Expert.',
      level: 'Advanced',
      tracks: ['Scalability', 'SRE'],
      takeaways: [
        'Load testing with k6.',
        'Configuring horizontal pod autoscalers.',
        'Caching strategies for high-traffic sites.'
      ]
    }
  },
  { 
    id: 'LRN951', 
    title: 'E-Enable Next-Generation Web Services', 
    description: 'E-Enabling next-generation web services.', 
    speaker: 'Katherine Johnson', 
    time: '04:00 PM - 06:00 PM', 
    day: 'Day 1', 
    category: 'Learning Lab', 
    location: 'Lab A',
    details: {
      fullDescription: 'Explore WebAssembly (Wasm) and how it enables high-performance code in the browser. You will compile a Rust function to Wasm and integrate it into a JavaScript application.',
      speakerBio: 'Katherine Johnson is a Mathematician and Wasm Pioneer.',
      level: 'Advanced',
      tracks: ['WebAssembly', 'Rust'],
      takeaways: [
        'Introduction to WebAssembly.',
        'Compiling Rust to Wasm.',
        'Interfacing between JS and Wasm.'
      ]
    }
  },
];