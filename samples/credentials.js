const { writeFileSync } = require('fs');
const { OAuth2Client } = require('google-auth-library');

const getAuthorizationCode = (oAuth2Client) => new Promise((resolve) => {
  // Generate the url that will be used for the consent dialog.
  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/assistant-sdk-prototype',
  });

  console.log(`Open your browser at: ${authorizeUrl}`)
  console.log(`When you're done, paste your authorization code down here:`);

  const stdin = process.openStdin();
  stdin.once('data', (data) => resolve(data.toString().trim()));
});

const getRefreshToken = async (oAuth2Client) => {
  const code = await getAuthorizationCode(oAuth2Client);
  const { tokens } = await oAuth2Client.getToken(code);
  return tokens.refresh_token;
}

const getCredentials = async () => {
  try {
    return require('./credentials.json');
  } catch (e) {
    const {
      installed: { client_id, client_secret },
    } = require('./client_secret.json');
  
    // Create an oAuth client. Secrets are kept in a `client_secret_<...>.json`
    // file, which should be downloaded from the Google Developers Console.
    const oAuth2Client = new OAuth2Client(
      client_id,
      client_secret,
      'urn:ietf:wg:oauth:2.0:oob',
    );
    const refresh_token = await getRefreshToken(oAuth2Client);
    const credentials = {
      type: 'authorized_user',
      client_id,
      client_secret,
      refresh_token,
    };
    writeFileSync('./credentials.json', JSON.stringify(credentials));
    return credentials;
  }
};

module.exports = {
  getAuthorizationCode,
  getRefreshToken,
  getCredentials,
};
