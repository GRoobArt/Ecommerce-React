export default class Cart {
  constructor() {
    this.subtotal = 0
    this.shipping = 0
    this.count = 0
    this.total = 0
    this.items = []
  }

  addProduct(product) {
    const { id, name, url, size, color, amount, img, qty } = product
    const item = this.items.find(
      (item) => item.id === id && item.size === size && item.color === color
    )
    if (!item) {
      this.items.push({
        id,
        name,
        url,
        size,
        color,
        qty: Number(qty),
        amount,
        img,
      })
      this.subtotal += Number(amount)
      this.count += Number(qty)
    } else {
      item.qty += Number(qty)
      this.count += Number(qty)
      this.subtotal += Number(amount)
    }
  }
}
