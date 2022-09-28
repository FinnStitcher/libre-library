const {User} = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            console.log('query: me');
        }
    }
};

module.exports = resolvers;