import { userSlice } from '../redux/slice';

const BASE_URL = 'http://localhost:3001/api/v1/user';


// connexion à l'API
const fetchApi = {

    // Permet de se connecter
    async login(email, password) {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.status === 200) {
                return { success: true, token: data.body.token };
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
    },

    // Obtenir le profil de l'user
    async getUser(token) {
        try {
            const response = await fetch(`${BASE_URL}/profile`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.status === 200) {
                return data.body;
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération du profil:', error);
            return null;
        }
    },

    // Mettre à jour le profil de l'user
    async updateUser(token, firstName, lastName) {
        try {
            const response = await fetch(`${BASE_URL}/profile`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName }),
            });

            const data = await response.json();

            if (response.status === 200) {
                return data.body;
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            return null;
        }
    },
};

export default fetchApi;
