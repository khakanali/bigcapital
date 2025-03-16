import 'reflect-metadata'; // We need this in order to use @Decorators
import 'newrelic';
import './before';
import '@/config';

import express from 'express';
import loadersFactory from 'loaders';

// Create the Express app
const app = express();

// Initialize loaders asynchronously
async function initializeApp() {
  await loadersFactory({ expressApp: app });
}

// Export the app and initialization for Vercel
export default async (req: express.Request, res: express.Response) => {
  // Ensure initialization runs once
  if (!app.listeners('request').length) {
    await initializeApp();
  }
  // Forward the request to the Express app
  app(req, res);
};
