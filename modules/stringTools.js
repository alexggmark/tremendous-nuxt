import MarkdownIt from 'markdown-it'

export const handleize = (handle) => {
  return handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')
}

export const markdown = (text) => {
  const md = new MarkdownIt()
  return md.render(text)
}
