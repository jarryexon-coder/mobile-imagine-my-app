import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const caseStudies = {
  1: {
    id: 1,
    title: 'FitTrack Pro: Revolutionizing Fitness Tracking',
    description: 'A comprehensive case study on mobile app development',
    challenge: 'The fitness app market is crowded. FitTrack Pro needed to differentiate itself with unique features: real-time workout tracking, personalized meal plans, and a community aspect.',
    solution: 'We developed a cross-platform mobile app using React Native, allowing simultaneous launch on iOS and Android. Key features include AI-powered workout recommendations, barcode scanning for nutrition tracking, social challenges and leaderboards, and integration with Apple Health & Google Fit.',
    results: '50,000+ downloads in the first month. User engagement increased by 200%. 4.8-star rating on both app stores.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase'],
  },
  2: {
    id: 2,
    title: 'UrbanMart: E-Commerce Transformation',
    description: 'A comprehensive case study on web development',
    challenge: 'UrbanMart\'s existing platform was slow, difficult to manage, and had a high cart abandonment rate. They needed a solution that would scale with their growing business.',
    solution: 'We built a headless e-commerce platform using Next.js and Stripe. Features include Progressive Web App (PWA) for offline support, AI-powered product recommendations, abandoned cart recovery system, and real-time inventory management.',
    results: '150% increase in sales within 3 months. 60% of traffic from mobile devices. 45% cart recovery rate through automated emails.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Vercel'],
  },
  3: {
    id: 3,
    title: 'DataDash: Business Intelligence Redefined',
    description: 'A comprehensive case study on data analytics',
    challenge: 'Businesses struggle with data fragmentation. DataDash needed a solution that could aggregate data from multiple sources and present actionable insights in real-time.',
    solution: 'We created a powerful dashboard with real-time data streaming and visualization. Features include customizable widgets and reports, predictive analytics using machine learning, and seamless integration with 100+ data sources.',
    results: '90% faster decision-making for enterprise clients. 100+ data sources integrated. Real-time updates with sub-second latency.',
    tech: ['Vue.js', 'D3.js', 'Firebase', 'Python', 'TensorFlow'],
  },
  4: {
    id: 4,
    title: 'Creator API Hub: Content Automation Platform',
    description: 'A comprehensive case study on API development',
    challenge: 'Content creators spend hours searching for source material, verifying facts, and compiling research. A YouTuber creating body cam commentary needed a way to automatically retrieve relevant footage.',
    solution: 'We built a comprehensive API aggregation platform with multi-source integration. Features include automated content discovery from 50+ data sources, custom API key generation for each creator, webhook notifications for new content, and AI-powered content relevance scoring.',
    results: '10x faster content creation. 50+ data sources integrated. 100+ active creators served. 300% increase in creator revenue.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Puppeteer', 'YouTube API v3'],
  },
  5: {
    id: 5,
    title: 'Nexus AI: Intelligent Personal Assistant',
    description: 'A comprehensive case study on AI development',
    challenge: 'Busy professionals spend hours on routine tasks: screening calls, scheduling meetings, researching topics, and managing information. Existing assistants require constant prompting.',
    solution: 'We created an intelligent agent that operates across multiple platforms. Features include natural language call screening and response, automatic schedule optimization and conflict resolution, proactive topic research with personalized briefings, and cross-platform data synchronization.',
    results: '40+ hours saved weekly per user. 95% task accuracy. 24/7 autonomous operation. Users report feeling less overwhelmed and more focused on high-priority work.',
    tech: ['Python', 'TensorFlow', 'GPT-4', 'Twilio', 'Redis', 'Google Calendar API'],
  },
  6: {
    id: 6,
    title: 'Web Scraper Pro: Intelligent Data Mining Platform',
    description: 'A comprehensive case study on web scraping',
    challenge: 'Researchers, journalists, and entrepreneurs need access to niche data that isn\'t easily discoverable. Lawsuits without media coverage, trending recipes before they go viral, and money-making opportunities require specialized scraping solutions.',
    solution: 'We developed an intelligent scraping platform with specialized modules. Features include custom scraper builder for any website structure, legal database crawler for unreported cases, social media trend detection algorithm, automated data cleaning and deduplication, and real-time alerts for new discoveries.',
    results: '1M+ pages scraped daily. 1,000+ unique data sources. 99% data accuracy. Discovered over 10,000 unreported legal cases.',
    tech: ['Python', 'Scrapy', 'BeautifulSoup', 'Selenium', 'MongoDB', 'Elasticsearch'],
  },
  7: {
    id: 7,
    title: 'Sports Analytics Pro: AI-Powered Betting Insights',
    description: 'A comprehensive case study on sports analytics',
    challenge: 'DFS players need real-time projections that factor in hundreds of variables to make optimal lineup decisions and identify +EV betting opportunities.',
    solution: 'We built an end-to-end sports analytics platform with ML models trained on 10+ years of historical data. Features include real-time player projections for NBA, NFL, MLB, and NHL, live injury tracking and lineup optimization, value-based drafting (VBD) and optimal lineup generation, and PrizePicks prop bet analyzer with probability scoring.',
    results: '78% prediction accuracy rate on player props. 3.2x ROI improvement. 15,000+ active users. One user won over $50,000 using our optimal lineup recommendations.',
    tech: ['Python', 'TensorFlow', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket'],
  },
};

export default function CaseStudyScreen({ route, navigation }) {
  const { projectId } = route.params || { projectId: 7 };
  const study = caseStudies[projectId] || caseStudies[7];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>{study.title}</Text>
        <Text style={styles.subtitle}>{study.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>The Challenge</Text>
        <Text style={styles.sectionText}>{study.challenge}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Solution</Text>
        <Text style={styles.sectionText}>{study.solution}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technology Stack</Text>
        <View style={styles.techTags}>
          {study.tech.map((tech, index) => (
            <View key={index} style={styles.techTag}>
              <Text style={styles.techTagText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Results</Text>
        <Text style={styles.sectionText}>{study.results}</Text>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Portfolio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    backgroundColor: '#4F46E5',
    padding: 25,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  techTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  techTagText: {
    fontSize: 12,
    color: '#555',
  },
  backButton: {
    marginTop: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#4F46E5',
    fontSize: 16,
    fontWeight: '600',
  },
});
