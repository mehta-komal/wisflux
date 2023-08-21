// src/routes/users.ts

import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { User, Gender } from '../models/User';

const router = express.Router();
const dataFilePath = path.join(__dirname, '..', '..', 'data.json');

router.post('/', (req: Request, res: Response) => {
  const newUser: User = req.body;
  const users: User[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  
  const existingUser = users.find(user => user.email === newUser.email);
  if (existingUser) {
    return res.status(400).json({ message: 'User with this email already exists.' });
  }

  users.push(newUser);
  fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));

  return res.status(201).json({ message: 'User created successfully.' });
});

router.put('/:email', (req: Request, res: Response) => {
  const emailToUpdate = req.params.email;
  const updatedUser: User = req.body;
  const users: User[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  const userIndex = users.findIndex(user => user.email === emailToUpdate);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' });
  }

  users[userIndex] = updatedUser;
  fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2));

  return res.status(200).json({ message: 'User updated successfully.' });
});

router.get('/:email', (req: Request, res: Response) => {
  const emailToFind = req.params.email;
  const users: User[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  const user = users.find(user => user.email === emailToFind);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }

  return res.status(200).json(user);
});

router.delete('/:email', (req: Request, res: Response) => {
  const emailToDelete = req.params.email;
  const users: User[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

  const updatedUsers = users.filter(user => user.email !== emailToDelete);
  fs.writeFileSync(dataFilePath, JSON.stringify(updatedUsers, null, 2));

  return res.status(200).json({ message: 'User deleted successfully.' });
});

router.get('/', (req: Request, res: Response) => {
  const users: User[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  return res.status(200).json(users);
});

export default router;
