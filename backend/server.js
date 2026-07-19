const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'online', 
    message: 'ImagineMyApps API is running',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message, timeframe } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }

  res.json({
    success: true,
    message: 'Consultation request received!',
    data: { name, email, service },
    notifications: { emailSent: false, dbSaved: true }
  });
});

// Admin endpoint
app.get('/api/consultations', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = process.env.ADMIN_TOKEN;

  if (!authHeader || authHeader !== `Bearer ${token}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.json({
    success: true,
    data: [
      { id: 1, name: 'Test User', email: 'test@example.com', message: 'Test consultation' }
    ]
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});
