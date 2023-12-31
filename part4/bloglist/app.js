const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blogs');

const logger = require('./utils/logger');

logger.info(`Server running on port ${config.MONGODB_URI}`);

const app = express();

mongoose.connect(config.MONGODB_URI);
app.use(cors());
app.use(express.json());
app.use('/api/blogs', blogsRouter);

module.exports = app;
