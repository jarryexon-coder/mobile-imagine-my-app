import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

const API_URL = 'https://imaginemyapps.com/api/contact';

export default function ConsultationScreen({ navigation }) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '' 
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '',
          message: form.message,
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        Alert.alert('Success', 'Consultation request received!');
        navigation.navigate('ThankYou');
      } else {
        Alert.alert('Error', data.error || 'Submission failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.title}>Free Consultation</Text>
        <Text style={styles.subtitle}>Tell us about your app idea.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Full Name *</Text>
          <TextInput 
            style={styles.input} 
            value={form.name} 
            onChangeText={(t) => setForm({...form, name: t})} 
            placeholder="Your name" 
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email *</Text>
          <TextInput 
            style={styles.input} 
            value={form.email} 
            onChangeText={(t) => setForm({...form, email: t})} 
            placeholder="your@email.com" 
            keyboardType="email-address" 
            autoCapitalize="none"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Phone</Text>
          <TextInput 
            style={styles.input} 
            value={form.phone} 
            onChangeText={(t) => setForm({...form, phone: t})} 
            placeholder="Your phone number" 
            keyboardType="phone-pad" 
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Your App Idea *</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            value={form.message} 
            onChangeText={(t) => setForm({...form, message: t})} 
            placeholder="Describe your app..." 
            multiline 
            numberOfLines={4} 
            textAlignVertical="top" 
          />
        </View>

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress={handleSubmit} 
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.submitText}>Submit →</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 20 },
  card: { backgroundColor: 'white', borderRadius: 20, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', marginBottom: 6 },
  input: { 
    borderWidth: 1, 
    borderColor: '#ddd', 
    borderRadius: 10, 
    padding: 14, 
    fontSize: 16, 
    backgroundColor: '#fafafa' 
  },
  textArea: { height: 120 },
  submitButton: { 
    backgroundColor: '#4F46E5', 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginTop: 8 
  },
  submitText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});
