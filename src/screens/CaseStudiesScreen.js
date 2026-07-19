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

// Use web images from your website
const caseImages = {
  fittrack: 'https://imaginemyapps.com/assets/images/case-studies/fittrack-case.png',
  urbanmart: 'https://imaginemyapps.com/assets/images/case-studies/urbanmart-case.png',
  datadash: 'https://imaginemyapps.com/assets/images/case-studies/datadash-case.png',
  creatorhub: 'https://imaginemyapps.com/assets/images/case-studies/creatorhub-case.png',
  nexus: 'https://imaginemyapps.com/assets/images/case-studies/nexus-case.png',
  webscraper: 'https://imaginemyapps.com/assets/images/case-studies/webscraper-case.png',
  sportsanalytics: 'https://imaginemyapps.com/assets/images/case-studies/sportsanalytics-case.png',
};

const caseStudies = [
  {
    id: 1,
    title: 'FitTrack Pro',
    subtitle: 'Fitness tracking app with workout plans and nutrition tracking.',
    image: caseImages.fittrack,
    color: '#4F46E5',
  },
  {
    id: 2,
    title: 'UrbanMart',
    subtitle: 'E-commerce platform with payment integration and inventory management.',
    image: caseImages.urbanmart,
    color: '#f7971e',
  },
  {
    id: 3,
    title: 'DataDash',
    subtitle: 'Business intelligence dashboard with real-time analytics.',
    image: caseImages.datadash,
    color: '#00b4db',
  },
  {
    id: 4,
    title: 'Creator API Hub',
    subtitle: 'API aggregation platform for content creators.',
    image: caseImages.creatorhub,
    color: '#764ba2',
  },
  {
    id: 5,
    title: 'Nexus AI',
    subtitle: 'Intelligent personal assistant that manages tasks autonomously.',
    image: caseImages.nexus,
    color: '#3f2b96',
  },
  {
    id: 6,
    title: 'Web Scraper Pro',
    subtitle: 'Intelligent data mining platform for web discovery.',
    image: caseImages.webscraper,
    color: '#11998e',
  },
  {
    id: 7,
    title: 'Sports Analytics Pro',
    subtitle: 'AI-powered insights for daily fantasy sports with real-time predictions.',
    image: caseImages.sportsanalytics,
    color: '#f5576c',
  },
];

// Image component with fallback
const CaseImage = ({ imageUrl, style }) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <View style={[style, styles.placeholderImage]}>
        <Ionicons name="image-outline" size={30} color="#ccc" />
        <Text style={styles.placeholderText}>Image unavailable</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: imageUrl }}
      style={style}
      resizeMode="cover"
      onError={() => setHasError(true)}
    />
  );
};

export default function CaseStudiesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Case Studies</Text>
        <Text style={styles.headerSubtitle}>
          Explore our successful projects and learn how we helped businesses grow.
        </Text>
      </View>

      {caseStudies.map((study) => (
        <TouchableOpacity
          key={study.id}
          style={styles.card}
          onPress={() => navigation.navigate('CaseStudy', { projectId: study.id })}
          activeOpacity={0.8}
        >
          <CaseImage imageUrl={study.image} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{study.title}</Text>
            <Text style={styles.cardSubtitle} numberOfLines={2}>
              {study.subtitle}
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardReadMore}>Read Case Study →</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 16, paddingBottom: 30 },
  header: { marginBottom: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 8 },
  headerSubtitle: { fontSize: 16, color: '#666', lineHeight: 24 },
  card: { backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3 },
  cardImage: { width: '100%', height: 160, backgroundColor: '#f0f0f0' },
  cardContent: { padding: 16 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 4 },
  cardSubtitle: { fontSize: 14, color: '#666', marginBottom: 12, lineHeight: 20 },
  cardFooter: { flexDirection: 'row', justifyContent: 'flex-end' },
  cardReadMore: { fontSize: 14, color: '#4F46E5', fontWeight: '600' },
  placeholderImage: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa', width: '100%', height: '100%' },
  placeholderText: { fontSize: 12, color: '#ccc', marginTop: 4 },
});
