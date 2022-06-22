// sets up base url for api calls
export const configureBaseUrl = (stage: string, localApiPort = 80) => {
  let baseUrl = ''

  switch (stage) {
    default:
      baseUrl += `http://localhost:${localApiPort}`
  }

  return baseUrl + '/api/'
}
