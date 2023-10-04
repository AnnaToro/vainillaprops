import axios from 'axios';

const CLIENT_ID = 'ebbfed28b1672a76fa9d';
const CLIENT_SECRET = 'tu-client-secret';
const REDIRECT_URI = 'http://localhost:3000/callback';

function Callback() {
  const handleAuthorization = async () => {
    const code = new URLSearchParams(window.location.search).get('code');

    try {
      const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
        redirect_uri: REDIRECT_URI,
      }, {
        headers: {
          Accept: 'application/json',
        },
      });

      const token = response.data.access_token;

    } catch (error) {
      console.error(error);
    }
  };

  handleAuthorization();

  return (
    <div>Procesando inicio de sesión...</div>
  );
}

export default Callback;
