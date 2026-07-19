import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const COLORS = {
  primary: '#1a2332',
  secondary: '#d4a853',
  background: '#f8f9fa',
  textPrimary: '#111827',
  textSecondary: '#4b5563',
  card: '#ffffff',
  accent: '#c9a84c',
};

const sportsAnalyticsImage = 'https://imaginemyapps.com/assets/images/portfolio-covers/sportsanalytics-cover.png';

export default function HomeScreen({ navigation }) {
  // Fix: Navigate to the nested CaseStudy screen correctly
  const handleCaseStudyPress = () => {
    navigation.navigate('Portfolio', {
      screen: 'CaseStudy',
      params: { projectId: 7 },
    });
  };

  const services = [
    { id: 1, name: 'Mobile Apps', icon: 'phone-portrait', price: 'From $1,599', color: ['#1a2332', '#2d3b4f'] },
    { id: 2, name: 'Web Apps', icon: 'laptop', price: 'From $899', color: ['#2d3b4f', '#1a2332'] },
    { id: 3, name: 'Backend Systems', icon: 'server', price: 'From $979', color: ['#1a2332', '#2d3b4f'] },
    { id: 4, name: '24/7 Support', icon: 'headset', price: 'From $299/mo', color: ['#2d3b4f', '#1a2332'] },
  ];

  const trustBadges = [
    { icon: 'shield-checkmark', label: 'SSL Secure', color: '#28a745' },
    { icon: 'star', label: '4.9/5 Rating', color: COLORS.secondary },
    { icon: 'time', label: '24/7 Support', color: COLORS.primary },
    { icon: 'checkmark-circle', label: '71+ Apps', color: COLORS.secondary },
  ];

  const handleTitleTap = () => {
    navigation.navigate('Admin');
  };

  const FeaturedImage = ({ imageUrl, style }) => {
    const [hasError, setHasError] = React.useState(false);

    if (hasError) {
      return (
        <View style={[style, styles.placeholderImage]}>
          <Ionicons name="image-outline" size={40} color="#ccc" />
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
          colors={['#1a2332', '#2d3b4f']}
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

        {/* Sports Analytics Card with fixed navigation */}
        <TouchableOpacity
          style={styles.sportsAnalyticsCard}
          onPress={handleCaseStudyPress}
          activeOpacity={0.9}
        >
          <FeaturedImage imageUrl={sportsAnalyticsImage} style={styles.sportsAnalyticsImage} />
          <LinearGradient
            colors={['rgba(26,35,50,0.1)', 'rgba(26,35,50,0.85)']}
            style={styles.sportsAnalyticsGradient}
          >
            <View style={styles.sportsAnalyticsContent}>
              <View style={styles.sportsAnalyticsBadge}>
                <Text style={styles.sportsAnalyticsBadgeText}>⭐ Featured Project</Text>
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
            <Text style={styles.sectionSubtitle}>Comprehensive app development solutions</Text>
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
                <Ionicons name={service.icon} size={36} color={COLORS.secondary} />
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </LinearGradient>
            ))}
          </View>
        </View>

        {/* CTA Banner */}
        <LinearGradient
          colors={['#1a2332', '#2d3b4f']}
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
  container: { flex: 1, backgroundColor: COLORS.background },
  scrollContent: { padding: 16, paddingBottom: 30 },
  heroSection: { borderRadius: 24, padding: 28, marginBottom: 16, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 10 },
  heroTitle: { fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  heroSubtitle: { fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 20, lineHeight: 24 },
  heroButtons: { flexDirection: 'row', gap: 10 },
  primaryButton: { backgroundColor: COLORS.secondary, paddingVertical: 14, paddingHorizontal: 20, borderRadius: 14, flex: 1, marginRight: 10, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, elevation: 4 },
  primaryButtonText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
  secondaryButton: { backgroundColor: 'rgba(255,255,255,0.12)', paddingVertical: 14, paddingHorizontal: 20, borderRadius: 14, flex: 1, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  secondaryButtonText: { color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 15 },
  adminHint: { color: 'rgba(255,255,255,0.4)', fontSize: 10, textAlign: 'center', marginTop: 12 },
  trustBadgesContainer: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 16, padding: 12, backgroundColor: COLORS.card, borderRadius: 16, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  trustBadge: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 6, backgroundColor: COLORS.background, borderRadius: 20 },
  trustBadgeText: { fontSize: 11, color: COLORS.textSecondary },
  sportsAnalyticsCard: { borderRadius: 20, overflow: 'hidden', marginBottom: 20, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 8 },
  sportsAnalyticsImage: { width: '100%', height: 220, backgroundColor: '#f0f0f0' },
  sportsAnalyticsGradient: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, paddingTop: 60 },
  sportsAnalyticsContent: { gap: 8 },
  sportsAnalyticsBadge: { backgroundColor: COLORS.secondary, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20 },
  sportsAnalyticsBadgeText: { color: '#ffffff', fontSize: 12, fontWeight: 'bold' },
  sportsAnalyticsTitle: { fontSize: 24, fontWeight: 'bold', color: '#ffffff' },
  sportsAnalyticsStats: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 14, padding: 12, marginTop: 4 },
  sportsAnalyticsStat: { alignItems: 'center' },
  sportsAnalyticsStatNumber: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  sportsAnalyticsStatLabel: { fontSize: 11, color: 'rgba(255,255,255,0.7)' },
  sportsAnalyticsDivider: { width: 1, backgroundColor: 'rgba(255,255,255,0.2)' },
  sportsAnalyticsButton: { backgroundColor: COLORS.secondary, paddingVertical: 10, borderRadius: 12, alignItems: 'center', marginTop: 4 },
  sportsAnalyticsButtonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 15 },
  sectionContainer: { backgroundColor: COLORS.card, borderRadius: 24, padding: 20, marginBottom: 24, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 3 },
  sectionHeader: { marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.textPrimary },
  sectionSubtitle: { fontSize: 14, color: COLORS.textSecondary, marginTop: 4 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceCard: { width: '48%', borderRadius: 16, padding: 18, marginBottom: 12, alignItems: 'center', shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.15, shadowRadius: 8, elevation: 4 },
  serviceName: { fontSize: 15, fontWeight: 'bold', color: '#ffffff', marginTop: 8, textAlign: 'center' },
  servicePrice: { fontSize: 13, color: COLORS.secondary, fontWeight: '500', marginTop: 4 },
  ctaBanner: { borderRadius: 24, padding: 28, alignItems: 'center', shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.25, shadowRadius: 16, elevation: 6 },
  ctaBannerTitle: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', marginBottom: 4 },
  ctaBannerSubtitle: { fontSize: 14, color: 'rgba(255,255,255,0.85)', marginBottom: 16 },
  ctaBannerButton: { backgroundColor: COLORS.secondary, paddingHorizontal: 32, paddingVertical: 14, borderRadius: 14, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 4 },
  ctaBannerButtonText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16 },
  placeholderImage: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa', width: '100%', height: '100%' },
});
