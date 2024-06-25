// server.js
import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/PasswordGenerator';
mongoose.connect(mongoURI, {
}).then(() => {
    console.log('MongoDB connected successfully.');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

// Password Schema
const passwordSchema = new mongoose.Schema({
    password: String,
    label: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Password = mongoose.model('values', passwordSchema);

// Routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.post('/api/submitData', async (req, res) => {
    const { password, label } = req.body;

    try {
        const newPassword = new Password({ password, label });
        await newPassword.save();
        res.status(201).json({ message: 'Password saved successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving password.', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
