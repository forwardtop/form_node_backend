const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./config/database');
const cifRoutes = require('./routes/cifRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(cors()); 
app.use(express.json());
// CIF routes
app.use('/api', cifRoutes);

// Global error handler
app.use(errorHandler);

// Sync database
sequelize.sync()
    .then(() => console.log('Database synced'))
    .catch(err => console.error('Failed to sync database:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
