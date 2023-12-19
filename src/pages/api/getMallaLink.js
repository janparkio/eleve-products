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
    spreadsheetId: '1e_xRv3VqNzlBJD1zl1Jls2rNY9wpB9CG42CgAHzGi2M',
    // TODO: Replace with the range of cells to fetch
    range: 'mallas!A1:Z10000',
    auth: authClient,
  };

  if (req.method === 'GET') {
    // Handle GET request
    try {
      const response = await sheets.spreadsheets.values.get(request);
      const carreraId = req.query.product_id_dynamics;

      const data = response.data.values;
      const values = data.map((row, index) => ({
        id: index + 1, // plus 2 to account for spreadsheet header and 0-based index
        product_id_dynamics: row[0], // Column: A
        slug: row[2], // Column: C
        mallaLink: row[3], // Column: D
        productName: row[4], // Column: E
        productCategory: row[5], // Column: F
        cuotaNuevo: row[8], // Column: I
        description: row[9], // Column: J
        inicioClases: row[10] // Column: K
      }));

      if (carreraId) {
        const found = values.find(entry => entry.product_id_dynamics === carreraId);
        if (found) {
          return res.status(200).json(found);
        } else {
          return res.status(404).json({ error: 'No data found for this carreraId' });
        }
      }

      return res.status(200).json(values);

    } catch (error) {
      return res.status(500).json({ error: error.toString() });
    }
  } else if (req.method === 'POST') {
    // Handle POST request
    // ...
  } else {
    // Handle unsupported HTTP methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
