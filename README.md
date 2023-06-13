# Google Sheets API Integration

This project integrates with the Google Sheets API to fetch data from a Google Sheet based on a phone number query.

## Getting Started

First, you need to set up your Google Cloud project and service account:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the Google Sheets API for your project.
4. Create a new service account and download the JSON credentials file.
5. Share your Google Sheet with the service account email.

Then, you need to set up your environment variables:

1. Convert your service account credentials JSON file to a base64 string. For example, in a Unix-like system, you can use the `base64` command in the terminal:
   ```bash
   base64 service-account-file.json
   ```
2. Set the base64 string as an environment variable named `GOOGLE_SERVICE_ACCOUNT_CREDENTIALS` in your hosting environment.

## Usage

This project exposes an API endpoint that you can use to fetch data from your Google Sheet. The endpoint is:

```
https://your-domain/api/sheets?phone=<phone_number>
```

Replace `<phone_number>` with the phone number you're looking for. Note that the "+" character should be URL encoded as "%2B".

If data matching the phone number is found in the sheet, it will be returned in the response. If not, the server will respond with a 404 status and an error message.

## Code Overview

The main code is located in the `handler` function, which is exported as the default function of the module. The function checks if the request is a GET request, and if so, fetches data from the Google Sheet and filters it based on the phone number query. If the request is not a GET request, it responds with a 405 status and an error message.

The phone number query is sanitized by replacing any spaces with an empty string. This is necessary because the "+" character in a URL is interpreted as a space.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
```

Please replace "https://your-domain" with your actual domain. This is a very basic README file, you may want to add more sections according to your project's needs, like sections for 'Installation', 'Testing', etc.