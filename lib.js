'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
listings =>
  carts =>
  carts.map(cart => ({
      customer: cart.customer[0].toUpperCase() + cart.customer.slice(1),
      total: cart.items.reduce((acc, next) =>
        acc + listings.filter(item =>
          item.name === next).map(item =>
            item.price).reduce((acc, next) =>
              acc + next, 0), 0)
  })
  )

module.exports = {
  listing,
  cart,
  calculateTotals
}
