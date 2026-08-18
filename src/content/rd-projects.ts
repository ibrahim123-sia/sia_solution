export interface RdProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  oneLiner: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  details?: {
    architecture: string;
    keyFeatures: string[];
    technicalTakeaway: string;
  };
}

export const rdProjects: RdProject[] = [
  {
    id: 'uniassist',
    slug: 'uniassist',
    title: 'UniAssist — AI University Assistant',
    category: 'RAG Platform',
    oneLiner:
      'A full-stack RAG platform allowing students to query academic documents with precise semantic retrieval across 100+ document formats.',
    description:
      'UniAssist was developed to explore high-density academic document parsing, vector indexing, and grounded context synthesis with zero hallucinations.',
    technologies: ['FastAPI', 'Python', 'React', 'MongoDB', 'RAG', 'Vector Embeddings'],
    githubUrl: 'https://github.com/ibrahim123-sia/UniAssist',
    image: '/images/rd/UniAssist.svg',
    details: {
      architecture:
        'FastAPI asynchronous vector retrieval engine connecting LangChain document loaders to a React client with streaming text generation.',
      keyFeatures: [
        'Document chunking optimized for complex academic syllabi and policy PDFs.',
        'Semantic similarity search with reranking for high-precision retrieval.',
        'Source passage highlighting for verifiable answers.',
      ],
      technicalTakeaway:
        'Proves our expertise in building grounded domain-specific retrieval pipelines with sub-second response times.',
    },
  },
  {
    id: 'sprintlog-agent',
    slug: 'sprintlog-agent',
    title: 'Sprintlog Agent — Autonomous EOD Reporting',
    category: 'Multi-Agent System',
    oneLiner:
      'A multi-agent AI pipeline that inspects daily GitHub commits and diffs, reasoning about code changes to generate structured EOD standup reports.',
    description:
      'An autonomous developer tooling system that eliminates manual standup logging by directly analyzing git histories and PR diffs through a LangGraph workflow.',
    technologies: ['Python', 'LangGraph', 'Multi-Agent Systems', 'GitHub API', 'LLMs'],
    githubUrl: 'https://github.com/ibrahim123-sia/sprintlog-agent',
    details: {
      architecture:
        'Stateful LangGraph multi-agent graph with specialized agents for commit inspection, diff summarization, and executive bullet synthesis.',
      keyFeatures: [
        'Automated GitHub Webhook listening and commit parsing.',
        'Multi-agent debate loop verifying code summary accuracy before report emission.',
        'Direct Slack and Discord markdown report delivery.',
      ],
      technicalTakeaway:
        'Demonstrates our ability to architect stateful multi-agent pipelines for automated business process workflows.',
    },
  },
  {
    id: 'nochat',
    slug: 'nochat',
    title: 'NoChat — AI Assistant & Image Generator',
    category: 'Conversational AI',
    oneLiner:
      'A versatile AI assistant interface with ultra-low latency Groq LLM inference, prompt-based image generation, and authenticated chat persistence.',
    description:
      'Explored sub-second token streaming and multimodal capabilities by coupling high-throughput LLM inference with automated image rendering pipelines.',
    technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Groq LPU', 'AI Generation'],
    githubUrl: 'https://github.com/ibrahim123-sia/NoChat',
    liveUrl: 'https://no-chat-y2my.vercel.app',
    image: '/images/rd/Nochat.jpeg',
    details: {
      architecture:
        'React frontend coupled to Express backend leveraging Groq API LPU inference for instant token delivery.',
      keyFeatures: [
        'Sub-200ms time-to-first-token streaming interface.',
        'Multi-session chat memory persisted in MongoDB.',
        'Prompt-driven image synthesis integration.',
      ],
      technicalTakeaway:
        'Validates our real-world implementation of ultra-fast AI chat interfaces and state management.',
    },
  },
  {
    id: 'learning-path-recommender',
    slug: 'learning-path-recommender',
    title: 'AI Learning Path Recommender',
    category: 'Recommendation Agent',
    oneLiner:
      'An AI agent that constructs tailored 4–6 week learning roadmaps, curating videos, articles, and milestones based on learner goals and availability.',
    description:
      'Created to experiment with structured JSON schema outputs and multi-step curriculum synthesis from unstructured user skill queries.',
    technologies: ['React', 'Node.js', 'Groq AI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ibrahim123-sia/Learning-Path-Recommender',
    liveUrl: 'https://learning-path-recommender-2gdj.vercel.app',
    image: '/images/rd/LPR.jpeg',
    details: {
      architecture:
        'Structured prompt pipeline producing strict JSON curriculum schemas validated before client rendering.',
      keyFeatures: [
        'Time-budgeted weekly milestone generation.',
        'Dynamic difficulty adjustment according to prior user experience.',
        'Direct link synthesis to verified online technical documentation.',
      ],
      technicalTakeaway:
        'Demonstrates our ability to elicit reliable, structured JSON schemas from generative models for UI rendering.',
    },
  },
  {
    id: 'study-planner',
    slug: 'study-planner',
    title: 'Study Session Planner Assistant',
    category: 'Planning Assistant',
    oneLiner:
      'Translates short-term exam goals into actionable day-by-day study schedules with balanced workload distribution and break intervals.',
    description:
      'Engineered to solve academic scheduling friction by applying algorithmic time-blocking over user topic lists and calendar constraints.',
    technologies: ['React', 'Node.js', 'Groq AI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ibrahim123-sia/Study-Session-Planner-Assistant',
    liveUrl: 'https://study-session-planner-assistant-gyn.vercel.app',
    image: '/images/rd/SSP.jpeg',
    details: {
      architecture:
        'Client-driven planning assistant applying heuristics and LLM synthesis to balance revision intervals.',
      keyFeatures: [
        'Dynamic day-by-day study block calculation.',
        'Topic priority weighting based on exam proximity.',
        'Exportable study calendar schedule.',
      ],
      technicalTakeaway:
        'Shows practical UX design for AI agents where users need immediate, actionable task breakdowns.',
    },
  },
  {
    id: 'assortment-dashboard',
    slug: 'assortment-dashboard',
    title: 'Assortment Dashboard — Retail Analytics',
    category: 'Machine Learning',
    oneLiner:
      'A retail analytics dashboard implementing Market Basket Analysis (Apriori and FP-Growth) and association rule mining for merchandising decisions.',
    description:
      'Built to explore algorithmic retail intelligence, uncovering item affinity patterns, cross-sell probabilities, and basket co-occurrences in transactional datasets.',
    technologies: ['React', 'FastAPI', 'Python', 'Machine Learning', 'Pandas'],
    githubUrl: 'https://github.com/ibrahim123-sia/Assortment-Dashboard',
    details: {
      architecture:
        'Python FastAPI backend processing transaction logs through FP-Growth algorithms, exposing rule confidence metrics to an interactive dashboard.',
      keyFeatures: [
        'Support, Confidence, and Lift calculation across catalog transactions.',
        'Interactive visual node graph showing product affinity clusters.',
        'Automated product bundle recommendations for e-commerce merchandising.',
      ],
      technicalTakeaway:
        'Proves quantitative analytical capability and custom dashboard engineering for retail data applications.',
    },
  },
];
