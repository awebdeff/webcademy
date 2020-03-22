main()

function main () {
  const collection = $('.current')
  collection.on('click', function () {
    collection.html('Привет!')
    collection.off('click', arguments.callee)
  })
}

function clickHandler () {
  console.log('click by me')
}