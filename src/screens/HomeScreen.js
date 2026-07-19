import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Use web image from your website
const sportsAnalyticsImage = 'https://imaginemyapps.com/assets/images/portfolio-covers/sportsanalytics-cover.png';

export default function HomeScreen({ navigation }) {
  const services = [
    { id: 1, name: 'Mobile Apps', icon: 'phone-portrait', price: 'From $1,599', color: ['#667eea', '#764ba2'] },
    { id: 2, name: 'Web Apps', icon: 'laptop', price: 'From $899', color: ['#f093fb', '#f5576c'] },
    { id: 3, name: 'Backend Systems', icon: 'server', price: 'From $979', color: ['#4facfe', '#00f2fe'] },
    { id: 4, name: '24/7 Support', icon: 'headset', price: 'From $299/mo', color: ['#43e97b', '#38f9d7'] },
  ];

  const trustBadges = [
    { icon: 'shield-checkmark', label: 'SSL Secure', color: '#28a745' },
    { icon: 'star', label: '4.9/5 Rating', color: '#ffc107' },
    { icon: 'time', label: '24/7 Support', color: '#4F46E5' },
    { icon: 'checkmark-circle', label: '50+ Apps', color: '#4F46E5' },
  ];

  const handleTitleTap = () => {
    navigation.navigate('Admin');
  };

  // Image component with fallback
  const FeaturedImage = ({ imageUrl, style }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
      return (
        <View style={[style, styles.placeholderImage]}>
          <Ionicons name="image-outline" size={40} color="#ccc" />
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroSection}
        >
          <TouchableOpacity onPress={handleTitleTap} activeOpacity={0.7}>
            <Text style={styles.heroTitle}>Build Your Dream App</Text>
          </TouchableOpacity>
          <Text style={styles.heroSubtitle}>
            Professional app development tailored to your business needs.
          </Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => navigation.navigate('Consultation')}
            >
              <Text style={styles.primaryButtonText}>🚀 Free Consultation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => navigation.navigate('Portfolio')}
            >
              <Text style={styles.secondaryButtonText}>✨ View Our Work</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.adminHint}>Tap title 5x for admin</Text>
        </LinearGradient>

        {/* Trust Badges */}
        <View style={styles.trustBadgesContainer}>
          {trustBadges.map((badge, index) => (
            <View key={index} style={styles.trustBadge}>
              <Ionicons name={badge.icon} size={16} color={badge.color} />
              <Text style={styles.trustBadgeText}>{badge.label}</Text>
            </View>
          ))}
        </View>

        {/* Sports Analytics Pro - Featured Image */}
        <TouchableOpacity
          style={styles.sportsAnalyticsCard}
          onPress={() => navigation.navigate('CaseStudy', { projectId: 7 })}
          activeOpacity={0.9}
        >
          <FeaturedImage 
            imageUrl={sportsAnalyticsImage} 
            style={styles.sportsAnalyticsImage} 
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
            style={styles.sportsAnalyticsGradient}
          >
            <View style={styles.sportsAnalyticsContent}>
              <View style={styles.sportsAnalyticsBadge}>
                <Text style={styles.sportsAnalyticsBadgeText}>🔥 Featured Project</Text>
              </View>
              <Text style={styles.sportsAnalyticsTitle}>Sports Analytics Pro</Text>
              <View style={styles.sportsAnalyticsStats}>
                <View style={styles.sportsAnalyticsStat}>
                  <Text style={styles.sportsAnalyticsStatNumber}>78%</Text>
                  <Text style={styles.sportsAnalyticsStatLabel}>Accuracy</Text>
                </View>
                <View style={styles.sportsAnalyticsDivider} />
                <View style={styles.sportsAnalyticsStat}>
                  <Text style={styles.sportsAnalyticsStatNumber}>15K+</Text>
                  <Text style={styles.sportsAnalyticsStatLabel}>Users</Text>
                </View>
                <View style={styles.sportsAnalyticsDivider} />
                <View style={styles.sportsAnalyticsStat}>
                  <Text style={styles.sportsAnalyticsStatNumber}>3.2x</Text>
                  <Text style={styles.sportsAnalyticsStatLabel}>ROI</Text>
                </View>
              </View>
              <View style={styles.sportsAnalyticsButton}>
                <Text style={styles.sportsAnalyticsButtonText}>View Case Study →</Text>
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Services Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <Text style={styles.sectionSubtitle}>
              Comprehensive app development solutions
            </Text>
          </View>
          <View style={styles.servicesGrid}>
            {services.map((service) => (
              <LinearGradient
                key={service.id}
                colors={service.color}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.serviceCard}
              >
                <Ionicons name={service.icon} size={36} color="white" />
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </LinearGradient>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <LinearGradient
          colors={['#667eea', '#764ba2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.ctaBanner}
        >
          <Text style={styles.ctaBannerTitle}>Ready to Build Your App?</Text>
          <Text style={styles.ctaBannerSubtitle}>
            Let's discuss your app idea. Free consultation.
          </Text>
          <TouchableOpacity
            style={styles.ctaBannerButton}
            onPress={() => navigation.navigate('Consultation')}
          >
            <Text style={styles.ctaBannerButtonText}>Get Started →</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 16, paddingBottom: 30 },
  heroSection: { borderRadius: 24, padding: 28, marginBottom: 16, shadowColor: '#667eea', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 },
  heroTitle: { fontSize: 30, fontWeight: 'bold', color: 'white', marginBottom: 8 },
  heroSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.9)', marginBottom: 20, lineHeight: 24 },
  heroButtons: { flexDirection: 'row', gap: 10 },
  primaryButton: { backgroundColor: 'white', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 14, flex: 1, marginRight: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  primaryButtonText: { color: '#4F46E5', fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
  secondaryButton: { backgroundColor: 'rgba(255,255,255,0.15)', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 14, flex: 1, borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)' },
  secondaryButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
  adminHint: { color: 'rgba(255,255,255,0.5)', fontSize: 10, textAlign: 'center', marginTop: 12 },
  trustBadgesContainer: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 16, padding: 12, backgroundColor: 'white', borderRadius: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  trustBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: '#f8f9fa', borderRadius: 20 },
  trustBadgeText: { fontSize: 11, color: '#555' },
  sportsAnalyticsCard: { borderRadius: 20, overflow: 'hidden', marginBottom: 20, shadowColor: '#f5576c', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 8 },
  sportsAnalyticsImage: { width: '100%', height: 220, backgroundColor: '#f0f0f0' },
  sportsAnalyticsGradient: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, paddingTop: 60 },
  sportsAnalyticsContent: { gap: 8 },
  sportsAnalyticsBadge: { backgroundColor: 'rgba(255,255,255,0.2)', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  sportsAnalyticsBadgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  sportsAnalyticsTitle: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  sportsAnalyticsStats: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 14, padding: 12, marginTop: 4 },
  sportsAnalyticsStat: { alignItems: 'center' },
  sportsAnalyticsStatNumber: { fontSize: 18, fontWeight: 'bold', color: 'white' },
  sportsAnalyticsStatLabel: { fontSize: 11, color: 'rgba(255,255,255,0.7)' },
  sportsAnalyticsDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.2)' },
  sportsAnalyticsButton: { backgroundColor: 'white', paddingVertical: 10, borderRadius: 12, alignItems: 'center', marginTop: 4 },
  sportsAnalyticsButtonText: { color: '#f5576c', fontWeight: 'bold', fontSize: 15 },
  sectionContainer: { backgroundColor: 'white', borderRadius: 24, padding: 20, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#1a1a1a' },
  sectionSubtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceCard: { width: '48%', borderRadius: 16, padding: 18, marginBottom: 12, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4 },
  serviceName: { fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: 8, textAlign: 'center' },
  servicePrice: { fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: '500', marginTop: 4 },
  ctaBanner: { borderRadius: 24, padding: 28, alignItems: 'center', shadowColor: '#667eea', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 6 },
  ctaBannerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white', marginBottom: 4 },
  ctaBannerSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.9)', marginBottom: 16 },
  ctaBannerButton: { backgroundColor: 'white', paddingHorizontal: 32, paddingVertical: 14, borderRadius: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  ctaBannerButtonText: { color: '#4F46E5', fontWeight: 'bold', fontSize: 16 },
  placeholderImage: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' },
  placeholderText: { fontSize: 12, color: '#ccc', marginTop: 4 },
});
