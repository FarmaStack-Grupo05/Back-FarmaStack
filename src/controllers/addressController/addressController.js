const { sequelize: { models: { Order, OrderItems, Cart, Address } } } = require("../../db");

const createAddress = async (addressObj = {}) => {
  const missingFields = []
  const requiredFields = ['address', 'city', 'state', 'country']

  requiredFields.forEach(field => {
    if (!addressObj[field]) missingFields.push(field)
  })

  if (missingFields.length) throw new Error(`Missing fields: ${missingFields.join(', ')}`)

  const address = await Address.create(addressObj)

  return address
}

module.exports = { createAddress };