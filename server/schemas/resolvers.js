const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Product } = require("../models");

const resolvers = {
  Query: {
    me: async () => {
      return await User.find();
    },

    user: async (parent, { username }) => {
      return await User.findOne({ username: username });
    },

    products: async (parent, args) => {
      console.log(args.searchTerm);
      if (args.searchTerm) {
        const searchTermRegex = { $regex: args.searchTerm, $options: "i" };
        return await Product.find({ name: searchTermRegex });
      }
      return await Product.find();
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

    addToStock: async (parent, { productId, stock }) => {
      console.log(productId);
      const changedProductStock = await Product.findByIdAndUpdate(
        productId,
        { quantityInStock: stock },
        { new: true }
      );

      return changedProductStock;
    },

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    saveProduct: async (parent, args) => {
      return await Product.create(args.input);
    },

    removeProduct: async (parent, { args }) => {
      return User.findOneAndUpdate(
        { $pull: { products: product } },
        { new: true }
      );
    },
}};

module.exports = resolvers