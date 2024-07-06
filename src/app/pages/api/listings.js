// pages/api/listings.js
export default function handler(req, res) {
  console.log('Incoming request to /api/listings:', req.method);
  if (req.method === 'GET') {
    res.status(200).json({ message: 'List of listings' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
