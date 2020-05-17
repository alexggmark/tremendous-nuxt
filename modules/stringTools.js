export const handleize = (handle) => {
  return handle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '')
}
