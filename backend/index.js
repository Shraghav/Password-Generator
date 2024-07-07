// server.js
import express, { json } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(json());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/PasswordGenerator';
mongoose.connect(mongoURI, {
}).then(() => {
    console.log('MongoDB connected successfully.');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});
 
// //hashing
// import bcrypt from 'bcrypt';
// const password = "Password";
// const hash = await bcrypt.hash(password, 10);
// const salt = bcrypt.genSaltSync(10);
// const hash = await bcrypt.hash(password, 11);
// console.log(hash);
// const isMatch = await bcrypt.compare("cool", hash);
// console.log(isMatch);

// Password Schema
const passwordSchema = new mongoose.Schema({
    password: String,
    label: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
app.use(express.static(path.join(__dirname, 'build')));
const Password = mongoose.model('values', passwordSchema);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Routes
app.get('/getData/:label', async(req, res) => {
    const { label } = req.params;
    try {
        const findLabel = await Password.find({ label: label });
        res.json({ password: findLabel[0].password });
    }
    catch (error) {
        return res.status(404).json({ message: "Not found" })
    }
});

//submit data
app.put('/submitData/:label', async (req, res) => {
    const { label } = req.params;
    const { password } = req.body;
    try {
        const updatedPassword = await Password.findOneAndUpdate(
            { label: label },
            { password: password },
            { new: true, runValidators: true }
        );
        if (!updatedPassword) {
            const newPassword = new Password({ password, label });
            await newPassword.save();
        }
        res.status(200).json({ message: 'Password updated successfully.', updatedPassword });
    } catch (error) {
        res.status(500).json({ message: 'Error updating password.', error });
    }
});

//deleting data
app.delete('/deleteData/:label',async(req, res) => {
    const { label } = req.params;
    const result = await Password.deleteOne({ label: label });
    if (result.deletedCount==0) {
        res.send("Cannot retrieve")
    }
    res.json({ deletedCount: result.deletedCount });
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
