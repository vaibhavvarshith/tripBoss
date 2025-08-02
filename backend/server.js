import express from 'express';
import cors from 'cors';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const app = express();
const PORT = 5000;

const db = new Low(new JSONFile('db.json'));

async function startServer() {
    await db.read();
    db.data ||= { customers: [] };

    app.use(cors());
    app.use(express.json());

    app.post('/api/subscribe', async (req, res) => {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required.' });
        }
        const exists = db.data.customers.find(c => c.email === email);
        if (exists) {
            return res.status(409).json({ success: false, message: 'Email already subscribed.' });
        }
        db.data.customers.push({ email, subscribedAt: new Date().toISOString() });
        await db.write();
        res.json({ success: true, message: 'Subscribed successfully!' });
    });

    app.get('/api/customers', async (req, res) => {
        await db.read();
        res.json(db.data.customers);
    });

    app.listen(PORT, () => {
        console.log(`Backend running on http://localhost:${PORT}`);
    });
}

startServer();