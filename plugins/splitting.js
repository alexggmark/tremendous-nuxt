// import Vue from 'vue'
import Splitting from 'splitting'

export default ({ app }, inject) => {
  console.log('Injecting')
  inject('splitting', Splitting)
}

// if (process.browser) {
//   const Splitting = require('splitting')
// }

// export default ({ app }, inject) => {
//   inject('splitting', Splitting)
// }
