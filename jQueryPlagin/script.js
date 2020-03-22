// основная концепция в jQuery
// ссылка на объект

const point = {
  x: 100,
  y: 12,

  print () {
    console.log(this.x, this.y)
    return this
  },

  moveTo (dx, dy) {
    this.x += dx
    this.y += dy
    console.log(this.x, this.y)
    return this
  }

}

main()

function main() {
  const result = point.print()
  const result2 = result.print()
  result2.print()
}