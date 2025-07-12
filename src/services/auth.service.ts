import axios from 'axios';

const AUTH_URL = 'http://localhost:8081/realms/reservation-realm/protocol/openid-connect/token';

export default {
  async login(username: string, password: string) {
    const params = new URLSearchParams();
    params.append('client_id', 'reservation-client');
    params.append('username', username);
    params.append('password', password);
    params.append('grant_type', 'password');

    const response = await axios.post(AUTH_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
    return response.data;
  },

  refreshToken(refreshToken: string) {
    const params = new URLSearchParams();
    params.append('client_id', 'reservation-client');
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', refreshToken);

    return axios.post(AUTH_URL, params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  },

  logout() {
    // Implémentez la déconnexion si nécessaire
  }
};