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
const images = {
  fittrack: 'https://imaginemyapps.com/assets/images/portfolio-covers/fittrack-cover.png',
  urbanmart: 'https://imaginemyapps.com/assets/images/portfolio-covers/urbanmart-cover.png',
  datadash: 'https://imaginemyapps.com/assets/images/portfolio-covers/datadash-cover.png',
  creatorhub: 'https://imaginemyapps.com/assets/images/portfolio-covers/creatorhub-cover.png',
  nexus: 'https://imaginemyapps.com/assets/images/portfolio-covers/nexus-cover.png',
  webscraper: 'https://imaginemyapps.com/assets/images/portfolio-covers/webscraper-cover.png',
  sportsanalytics: 'https://imaginemyapps.com/assets/images/portfolio-covers/sportsanalytics-cover.png',
};

const projects = [
  {
    id: 1,
    name: 'FitTrack Pro',
    description: 'Fitness tracking app with workout plans and nutrition tracking.',
    tech: ['React Native', 'Node.js'],
    coverImage: images.fittrack,
    isFeatured: false
  },
  {
    id: 2,
    name: 'UrbanMart',
    description: 'E-commerce platform with payment integration.',
    tech: ['Next.js', 'Stripe'],
    coverImage: images.urbanmart,
    isFeatured: false
  },
  {
    id: 3,
    name: 'DataDash',
    description: 'Business intelligence dashboard.',
    tech: ['Vue.js', 'Firebase'],
    coverImage: images.datadash,
    isFeatured: false
  },
  {
    id: 4,
    name: 'Creator API Hub',
    description: 'API aggregation platform.',
    tech: ['Node.js', 'Express'],
    coverImage: images.creatorhub,
    isFeatured: false
  },
  {
    id: 5,
    name: 'Nexus AI',
    description: 'Intelligent personal assistant.',
    tech: ['Python', 'TensorFlow'],
    coverImage: images.nexus,
    isFeatured: false
  },
  {
    id: 6,
    name: 'Web Scraper Pro',
    description: 'Intelligent data mining platform.',
    tech: ['Python', 'Scrapy'],
    coverImage: images.webscraper,
    isFeatured: false
  },
  {
    id: 7,
    name: 'Sports Analytics Pro',
    description: 'AI-powered sports insights.',
    tech: ['Python', 'TensorFlow'],
    coverImage: images.sportsanalytics,
    isFeatured: true
  },
];

// Image component with fallback
const ProjectImage = ({ imageUrl, style }) => {
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
            <ProjectImage imageUrl={featured.coverImage} style={styles.featuredImage} />
            <View style={styles.featuredOverlay}>
              <Text style={styles.featuredTitle}>{featured.name}</Text>
              <Text style={styles.featuredDescription}>{featured.description}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.otherSection}>
        <Text style={styles.otherTitle}>All Projects</Text>
        <View style={styles.projectsGrid}>
          {others.map((project) => (
            <TouchableOpacity
              key={project.id}
              style={styles.projectCard}
              onPress={() => navigation.navigate('CaseStudy', { projectId: project.id })}
            >
              <ProjectImage imageUrl={project.coverImage} style={styles.projectImage} />
              <View style={styles.projectOverlay}>
                <Text style={styles.projectName}>{project.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 16, paddingBottom: 30 },
  featuredSection: { marginBottom: 30 },
  featuredLabel: { fontSize: 16, fontWeight: 'bold', color: '#666', marginBottom: 12 },
  featuredCard: { backgroundColor: 'white', borderRadius: 16, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12, elevation: 4 },
  featuredImage: { width: '100%', height: 180, backgroundColor: '#f0f0f0' },
  featuredOverlay: { padding: 16 },
  featuredTitle: { fontSize: 18, fontWeight: 'bold' },
  featuredDescription: { fontSize: 14, color: '#666', marginTop: 4 },
  otherTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  projectsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  projectCard: { width: '48%', backgroundColor: 'white', borderRadius: 12, overflow: 'hidden', marginBottom: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.06, shadowRadius: 6, elevation: 2 },
  projectImage: { width: '100%', height: 110, backgroundColor: '#f0f0f0' },
  projectOverlay: { padding: 10 },
  projectName: { fontSize: 13, fontWeight: '600', textAlign: 'center' },
  placeholderImage: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  placeholderText: { fontSize: 12, color: '#ccc', marginTop: 4 },
});
