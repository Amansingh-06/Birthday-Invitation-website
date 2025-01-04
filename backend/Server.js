const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const invitationRoutes = require('./model/Routes/invitationRoutes')




dotenv.config();

const app = express();
app.use(express.json());

// Allow CORS for your frontend URL (Vercel)
const corsOptions = {
    origin: 'https://birthday-invitation-website-d4x1.vercel.app/', // Replace with your Vercel frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you're sending cookies/tokens
};

app.use(cors(corsOptions));

app.use('/api/invitations', invitationRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
