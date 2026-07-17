import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const projects = [
  { id: 1, name: 'FitTrack Pro', description: 'Fitness tracking app.', tech: ['React Native', 'Node.js'], icon: 'fitness', isFeatured: false },
  { id: 2, name: 'UrbanMart', description: 'E-commerce platform.', tech: ['Next.js', 'Stripe'], icon: 'cart', isFeatured: false },
  { id: 3, name: 'DataDash', description: 'Business intelligence dashboard.', tech: ['Vue.js', 'Firebase'], icon: 'bar-chart', isFeatured: false },
  { id: 4, name: 'Creator API Hub', description: 'API aggregation platform.', tech: ['Node.js', 'Express'], icon: 'git-network', isFeatured: false },
  { id: 5, name: 'Nexus AI', description: 'Intelligent personal assistant.', tech: ['Python', 'TensorFlow'], icon: 'hardware-chip', isFeatured: false },
  { id: 6, name: 'Web Scraper Pro', description: 'Intelligent data mining.', tech: ['Python', 'Scrapy'], icon: 'globe', isFeatured: false },
  { id: 7, name: 'Sports Analytics Pro', description: 'AI-powered sports insights.', tech: ['Python', 'TensorFlow'], icon: 'stats-chart', isFeatured: true },
];

export default function PortfolioScreen({ navigation }) {
  const featured = projects.find(p => p.isFeatured);
  const others = projects.filter(p => !p.isFeatured);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {featured && (
        <View style={styles.featuredSection}>
          <Text style={styles.featuredLabel}>⭐ Featured Project</Text>
          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => navigation.navigate('CaseStudy', { projectId: featured.id })}
          >
            <View style={styles.featuredIconContainer}>
              <Ionicons name={featured.icon} size={40} color="white" />
            </View>
            <View style={styles.featuredContent}>
              <Text style={styles.featuredTitle}>{featured.name}</Text>
              <Text style={styles.featuredDescription}>{featured.description}</Text>
              <Text style={styles.viewCaseStudy}>View Case Study →</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.otherSection}>
        <Text style={styles.otherTitle}>Other Projects</Text>
        <View style={styles.projectsGrid}>
          {others.map((project) => (
            <TouchableOpacity
              key={project.id}
              style={styles.projectCard}
              onPress={() => navigation.navigate('CaseStudy', { projectId: project.id })}
            >
              <Ionicons name={project.icon} size={24} color="#4F46E5" />
              <Text style={styles.projectName}>{project.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  featuredSection: { marginBottom: 30 },
  featuredLabel: { fontSize: 14, color: '#666', marginBottom: 10, fontWeight: '600' },
  featuredCard: { backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 3 },
  featuredIconContainer: { backgroundColor: '#4F46E5', padding: 20, alignItems: 'center' },
  featuredContent: { padding: 16 },
  featuredTitle: { fontSize: 18, fontWeight: 'bold' },
  featuredDescription: { fontSize: 14, color: '#666', marginVertical: 8 },
  viewCaseStudy: { color: '#4F46E5', fontWeight: '600' },
  otherTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  projectsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  projectCard: {
    width: '30%',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  projectName: { fontSize: 12, textAlign: 'center', marginTop: 6 },
});
