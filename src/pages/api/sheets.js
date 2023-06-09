import { google } from 'googleapis';

// Decode the service account credentials from the environment variable
const serviceAccountCredentials = JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS, 'base64').toString());

// Initialize the Sheets API client
const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccountCredentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export default async function handler(req, res) {
  // Get auth client
  const authClient = await auth.getClient();
  const request = {
    // TODO: Replace with your Google Sheets ID
    spreadsheetId: '1Hc_OwLZiJCj8yiWQemx1ZIk00seDwlABH8K0wxNLaFg',
    // TODO: Replace with the range of cells to fetch
    range: 'Grado-3!A2:Q100000',
    auth: authClient,
  };

  if (req.method === 'GET') {
    // Handle GET request
    try {
      const response = await sheets.spreadsheets.values.get(request);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  } else if (req.method === 'POST') {
    // Handle POST request
    try {
      // TODO: Replace with the new data
      const newData = req.body;
      request['resource'] = {
        values: newData,
      };
      request['valueInputOption'] = 'USER_ENTERED';
      const response = await sheets.spreadsheets.values.update(request);
      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  } else {
    // Handle unsupported HTTP methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
