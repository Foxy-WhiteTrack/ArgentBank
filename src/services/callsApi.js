const BASE_URL = 'http://localhost:3001/api/v1/user';

// connexion à l'API
const fetchApi = async (url, options) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status === 200) {
            return { success: true, data };
        } else {
            return {
                success: false,
                message: data.message || 'Erreur lors de la requête API',
            };
        }
    } catch (error) {
        console.error('Erreur lors de la requête API:', error);
        return { success: false, message: 'Erreur lors de la connexion' };
    }
};

// Appel des routes de l'API
const callsApiService = {
    // Connexion
    async login(email, password) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        };

        return fetchApi(`${BASE_URL}/login`, options);
    },

    // Obtenir le profil
    async getProfile(token) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };

        return fetchApi(`${BASE_URL}/profile`, options);
    },
};

export default callsApiService;
