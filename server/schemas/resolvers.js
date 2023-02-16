const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find();
        },

        user: async (parent, { username }) => {
            return User.findOne({ username: username });
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, { username, email, password}) => {
            const user = await User.create({ username, email, password});
            const token = signToken(user);

            return { token, user };
        },

        saveProduct: async (parent, { args }) => {
            return User.findOneAndUpdate(
                { 
                    $addToSet: { products: product }, 
                },
                {
                    new: true
                }
            )
        },

        removeProduct: async (parent, { args }) => {
            return User.findOneAndUpdate(
                { $pull: { products: product } },
                { new: true } 
            );
        },
    },
};

module.exports = resolvers;