// serialiser et deserialiser les donnees
const stockData = {
    clearData() {
        localStorage.clear();
    },
    setAuthentication(email, firstName, lastName, token) {
        const userData = {
            isAuthenticated: true,
            email,
            firstName,
            lastName,
            token
        };

        const serializedUserData = JSON.stringify(userData);
        localStorage.setItem('userData', serializedUserData);
    },
    getAuthentication() {
        const serializedUserData = localStorage.getItem('userData');
        if (serializedUserData) {
            const userData = JSON.parse(serializedUserData);
            return userData;
        }
        return {
            isAuthenticated: false,
            email: null,
            firstName: null,
            lastName: null,
            token: null
        };
    }
};


export default stockData;
