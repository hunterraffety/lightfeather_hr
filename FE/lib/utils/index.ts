export const configureBaseUrl = (stage: string, localApiPort = 3300) => {
  let baseUrl = ''

  switch (stage) {
    default:
      baseUrl += `http://localhost:${localApiPort}`
  }

  return baseUrl + '/api/'
}
