export const getTotalSum = (cart) => {
    let totalSum = 0
    cart && cart.forEach(product => {
        totalSum += product.count * product.price
    })
    return totalSum
}

export const getTotalCount = (cart) => {
    let totalCountSum = 0
    cart && cart.forEach(product => {
        totalCountSum += product.count
    })
    return totalCountSum + 1 // 1 for delivery
}