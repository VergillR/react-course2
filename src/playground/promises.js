const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      message: 'This is my resolved data',
      codename: 'Cario',
      nr: 121
    })
  }, 1500)
})
console.log('before')
p.then((data) => {
  console.log('1', data)
}).catch((error) => {
  console.log(error)
})

console.log('after')
