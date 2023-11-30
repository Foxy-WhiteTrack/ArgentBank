let keys = {
    isAuthenticated: 'isAuthenticated',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    token: 'token'
};

const stockData = {
    clearData() {
        localStorage.clear();
    },
    setAuthentication(email, firstName, lastName, token) {
        localStorage.setItem(keys.isAuthenticated, true);
        localStorage.setItem(keys.email, email);
        localStorage.setItem(keys.firstName, firstName);
        localStorage.setItem(keys.lastName, lastName);
        localStorage.setItem(keys.token, token);
    },

    getAuthentication() {
        return {
            isAuthenticated: JSON.parse(localStorage.getItem(keys.isAuthenticated)),
            email: localStorage.getItem(keys.email),
            firstName: localStorage.getItem(keys.firstName),
            lastName: localStorage.getItem(keys.lastName),
            token: localStorage.getItem(keys.token)
        };
    }

};

export default stockData;
