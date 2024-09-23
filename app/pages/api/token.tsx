// pages/api/getSpotifyToken.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;  
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const authHeader = 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: new URLSearchParams({
        grant_type: 'client_credentials',
      }).toString(),
    });

    if (response.status === 200) {
      const token = response.data.access_token;
      // Return the access token as JSON
      return res.status(200).json({ access_token: token });
    } else {
      return res.status(response.status).json({ error: 'Failed to fetch token from Spotify' });
    }
  } catch (error: any) {
    console.error('Error fetching Spotify token:', error.response ? error.response.data : error.message);
    return res.status(500).json({ error: 'Failed to fetch token' });
  }
}
