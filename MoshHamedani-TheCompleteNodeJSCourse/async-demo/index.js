console.log('Before')
const user = getUser(1)
console.log(user)
console.log('After')

// Callbacks
// Promises
// Async/await

function getUser(id) {
  setTimeout(() => {
    return { id: id, gitHubUsername: 'mosh' }
  }, 2000)
}
