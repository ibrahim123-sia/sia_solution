export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const homeFaqs: FaqItem[] = [
  {
    id: 'why-build-first',
    question: 'Why do you build the website first without an advance?',
    answer:
      'Most web development agencies demand 50% deposits upfront, lock clients into long contracts, and deliver bloated templates months later. We believe the client should not carry the development risk. Because we build custom, high-speed sites quickly without bureaucratic layers, we build your complete functional website first. You test it live and verify everything works before paying a single dollar or rupee.',
  },
  {
    id: 'what-if-dont-like',
    question: 'What happens if I don’t like the finished website?',
    answer:
      'We iterate on the design and functionality until you are genuinely delighted. In the rare case that we cannot reach a solution that meets your standards, you owe us nothing. You are never obligated to pay for work you cannot use.',
  },
  {
    id: 'code-and-domain-ownership',
    question: 'Who owns the code and domain name?',
    answer:
      'You have 100% ownership of everything. Once the project goes live and payment is completed, we hand over full Git repository access, deployment credentials, and any custom code. We do not lock your data into proprietary systems.',
  },
  {
    id: 'turnaround-time',
    question: 'How long does a typical project take from start to finish?',
    answer:
      'A landing page is typically built in 3 to 5 days. A complete multi-page business website takes 5 to 10 days. A full-stack e-commerce store with custom filtering and payments takes 10 to 18 days. We ship in days, not months.',
  },
  {
    id: 'international-clients',
    question: 'Do you work with clients outside Pakistan?',
    answer:
      'Yes. We regularly work with founders and businesses in the United States, United Kingdom, UAE, and Gulf region. All communication is conducted in English via WhatsApp, Slack, Google Meet, or email, with invoices settled seamlessly via international bank transfers or Wise.',
  },
  {
    id: 'after-launch-support',
    question: 'What happens after the website is launched?',
    answer:
      'Every project includes 30 days of complimentary technical support and bug fixes post-launch. After that, we offer lightweight maintenance packages or on-demand hourly updates as your brand grows.',
  },
  {
    id: 'hosting-and-domain',
    question: 'Do you provide hosting and domain registration?',
    answer:
      'We set up and configure global edge hosting on high-speed CDN networks (such as Vercel and Cloudflare) and connect your custom domain. Hosting and domain renewals are billed strictly at direct provider cost without any agency markup.',
  },
  {
    id: 'payment-methods',
    question: 'How do payments work once the site is live?',
    answer:
      'For clients in Pakistan, we accept direct bank transfers (IBFT), Raast, and PayFast. For overseas clients, we accept Wise, direct wire transfers, and credit card payments in USD or GBP. You pay only after the site is live on your domain and you have tested all features.',
  },
];
