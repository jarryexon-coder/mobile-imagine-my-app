import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const caseStudies = {
  1: {
    id: 1,
    title: 'FitTrack Pro: Helping People Stay Consistent With Their Fitness Goals',
    description: 'An all-in-one fitness app that makes healthy living simpler, smarter, and more motivating.',
    image: 'https://imaginemyapps.com/assets/images/case-studies/fittrack-case.png',
    challenge: 'The fitness app market is packed with hundreds of options, making it difficult for a new app to stand out.',
    solution: 'We designed and developed a modern mobile app that works on both iPhone and Android.',
    results: '50,000+ downloads in the first month. 200% increase in user engagement.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Firebase'],
  },
  7: {
    id: 7,
    title: 'Sports Analytics Pro: AI That Gives Players a Competitive Edge',
    description: 'An intelligent analytics platform that helps fantasy sports players make smarter decisions using AI.',
    image: 'https://imaginemyapps.com/assets/images/case-studies/sportsanalytics-case.png',
    challenge: 'Winning in Daily Fantasy Sports requires analyzing thousands of variables.',
    solution: 'We built an end-to-end sports analytics platform with ML models trained on 10+ years of historical data.',
    results: '78% prediction accuracy. 3.2× average ROI improvement. 15,000+ active users.',
    tech: ['Python', 'TensorFlow', 'XGBoost', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
};

export default function CaseStudyScreen({ route, navigation }) {
  const { projectId } = route.params || { projectId: 7 };
  const study = caseStudies[projectId] || caseStudies[7];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Image 
          source={{ uri: study.image }} 
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.title}>{study.title}</Text>
          <Text style={styles.subtitle}>{study.description}</Text>
        </View>
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
        <Text style={styles.sectionTitle}>The Results</Text>
        <Text style={styles.sectionText}>{study.results}</Text>
      </View>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { paddingBottom: 30 },
  header: { position: 'relative', height: 220 },
  headerImage: { width: '100%', height: '100%', backgroundColor: '#f0f0f0' },
  headerOverlay: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: { fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 4 },
  subtitle: { fontSize: 14, color: 'rgba(255,255,255,0.85)' },
  section: { backgroundColor: 'white', padding: 20, marginHorizontal: 16, marginTop: 16, borderRadius: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 8 },
  sectionText: { fontSize: 14, color: '#555', lineHeight: 22 },
  techTags: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 },
  techTag: { backgroundColor: '#f0f0f0', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, marginRight: 8, marginBottom: 8 },
  techTagText: { fontSize: 12, color: '#555' },
  backButton: { padding: 16, alignItems: 'center', marginTop: 10 },
  backButtonText: { color: '#4F46E5', fontSize: 16, fontWeight: '600' },
});
