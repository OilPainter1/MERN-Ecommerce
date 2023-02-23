const connection = require('../config/connection')
const { Product, User } = require('../models')
const productSeeds = require('./productSeeds.json')
const userSeeds = require('./userSeeds.json')

connection.once('open', async () => {
    try {
        await Product.deleteMany({})
        await User.deleteMany({})
        await Product.insertMany(productSeeds)
        
        for (const userSeed of userSeeds) {
            await User.create(userSeed)
        }  
        console.log('all done!')
    } catch (err) {
        console.log(err)
        throw err
    } finally {
    process.exit(0)
    }
})