const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', port: PORT });
});

// CONSULTATIONS ENDPOINT - This is what was missing!
app.get('/api/consultations', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = process.env.ADMIN_TOKEN || 'TRVcKCwVCRHKUpk8asfmqAufYpR0wICcKzk0pEMuTW4=';

  // Check authorization
  if (!authHeader || authHeader !== `Bearer ${token}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Return mock data for now
  res.json({
    success: true,
    data: [
      { 
        id: 1, 
        name: 'Test User', 
        email: 'test@example.com', 
        phone: '555-1234',
        message: 'Test consultation from mobile app',
        status: 'pending',
        created_at: new Date().toISOString()
      }
    ]
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }

  res.json({
    success: true,
    message: 'Consultation request received!',
    data: { name, email, phone },
    notifications: { emailSent: false, dbSaved: false }
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📡 Health: /api/health`);
  console.log(`📡 Consultations: /api/consultations`);
});
