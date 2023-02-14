const connection = require('../config/connection')
const { Product, User } = require('../models')
const productSeeds = require('./productSeeds.json')
const userSeeds = require('./userSeeds.json')

connection.once('open', async () => {
    try {
        await Product.deleteMany({})
        await User.deleteMany({})
        await Product.create(productSeeds)
        await User.create(userSeeds)

        console.log('all done!')
        Process.exit(0)
    } catch (err) {
        throw err
    }
})