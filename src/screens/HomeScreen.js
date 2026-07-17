import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [tapCount, setTapCount] = useState(0);
  const tapTimer = useRef(null);

  // Secret admin access: Tap the title 5 times quickly
  const handleTitleTap = () => {
    setTapCount(prev => prev + 1);
    if (tapTimer.current) clearTimeout(tapTimer.current);
    
    if (tapCount + 1 >= 5) {
      setTapCount(0);
      navigation.navigate('Admin');
      console.log('🔐 Admin dashboard accessed!');
    } else {
      tapTimer.current = setTimeout(() => {
        setTapCount(0);
      }, 2000);
    }
  };

  const services = [
    { id: 1, name: 'Mobile Apps', icon: 'phone-portrait', price: 'From $1,599', color: ['#667eea', '#764ba2'] },
    { id: 2, name: 'Web Apps', icon: 'laptop', price: 'From $899', color: ['#f093fb', '#f5576c'] },
    { id: 3, name: 'Backend Systems', icon: 'server', price: 'From $979', color: ['#4facfe', '#00f2fe'] },
    { id: 4, name: '24/7 Support', icon: 'headset', price: 'From $299/mo', color: ['#43e97b', '#38f9d7'] },
  ];

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

        {/* Featured Project - Sports Analytics Pro */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredHeader}>
            <Text style={styles.featuredLabel}>⭐ Featured Project</Text>
            <TouchableOpacity
              style={styles.featuredViewAll}
              onPress={() => navigation.navigate('Portfolio')}
            >
              <Text style={styles.featuredViewAllText}>View All →</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.featuredCard}
            onPress={() => navigation.navigate('CaseStudy', { projectId: 7 })}
            activeOpacity={0.9}
          >
            <LinearGradient
              colors={['#f093fb', '#f5576c']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.featuredCardGradient}
            >
              <View style={styles.featuredCardContent}>
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>🔥 Trending</Text>
                </View>
                <Text style={styles.featuredCardTitle}>Sports Analytics Pro</Text>
                <Text style={styles.featuredCardDesc}>
                  AI-powered insights for daily fantasy sports with real-time predictions and player projections.
                </Text>
                <View style={styles.featuredCardTech}>
                  <View style={styles.techPill}><Text style={styles.techPillText}>Python</Text></View>
                  <View style={styles.techPill}><Text style={styles.techPillText}>TensorFlow</Text></View>
                  <View style={styles.techPill}><Text style={styles.techPillText}>XGBoost</Text></View>
                </View>
                <View style={styles.featuredCardStats}>
                  <View style={styles.featuredStat}>
                    <Text style={styles.featuredStatNumber}>78%</Text>
                    <Text style={styles.featuredStatLabel}>Accuracy</Text>
                  </View>
                  <View style={styles.featuredDivider} />
                  <View style={styles.featuredStat}>
                    <Text style={styles.featuredStatNumber}>15K+</Text>
                    <Text style={styles.featuredStatLabel}>Users</Text>
                  </View>
                  <View style={styles.featuredDivider} />
                  <View style={styles.featuredStat}>
                    <Text style={styles.featuredStatNumber}>3.2x</Text>
                    <Text style={styles.featuredStatLabel}>ROI</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.featuredCardButton}
                  onPress={() => navigation.navigate('CaseStudy', { projectId: 7 })}
                >
                  <Text style={styles.featuredCardButtonText}>View Case Study →</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Services Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <Text style={styles.sectionSubtitle}>
              Comprehensive app development solutions tailored to your needs
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
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  heroSection: {
    borderRadius: 24,
    padding: 28,
    marginBottom: 24,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  heroTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 20,
    lineHeight: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    color: '#4F46E5',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  adminHint: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 12,
  },
  featuredSection: {
    marginBottom: 24,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  featuredLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  featuredViewAll: {
    paddingHorizontal: 8,
  },
  featuredViewAllText: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: '600',
  },
  featuredCard: {
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#f5576c',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 8,
  },
  featuredCardGradient: {
    padding: 24,
  },
  featuredCardContent: {
    gap: 12,
  },
  featuredBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  featuredBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  featuredCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  featuredCardDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
  },
  featuredCardTech: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  techPill: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  techPillText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  featuredCardStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    padding: 14,
    marginTop: 4,
  },
  featuredStat: {
    alignItems: 'center',
  },
  featuredStatNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  featuredStatLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  featuredDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  featuredCardButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  featuredCardButtonText: {
    color: '#f5576c',
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionContainer: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  serviceName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
    textAlign: 'center',
  },
  servicePrice: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '500',
    marginTop: 4,
  },
  ctaBanner: {
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  ctaBannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  ctaBannerSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  ctaBannerButton: {
    backgroundColor: 'white',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaBannerButtonText: {
    color: '#4F46E5',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
