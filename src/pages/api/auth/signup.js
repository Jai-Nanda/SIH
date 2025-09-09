import clientPromise from '../../../lib/mongodb';
import { hash } from 'bcrypt';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and Password are required' });
  }

  const client = await clientPromise;
  const usersCollection = client.db().collection('users');

  const existingUser = await usersCollection.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  const hashedPassword = await hash(password, 10);

  const result = await usersCollection.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  return res.status(201).json({ message: 'User created successfully', userId: result.insertedId });
};
