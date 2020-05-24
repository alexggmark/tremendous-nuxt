// import MarkdownIt from 'markdown-it'
import moment from 'moment'

export const handleize = (handle) => {
  return handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')
}

// export const markdown = (text) => {
//   const md = new MarkdownIt().use(require('markdown-it-highlightjs'))
//   return md.render(text)
// }

export const processDate = (date) => {
  const processedDate = date.slice(0, 10)
  return moment(processedDate).format('Do MMMM YYYY')
}
