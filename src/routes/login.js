const github = 'https://github.com/login/oauth/authorize'
const clientId = import.meta.env.VITE_CLIENT_ID

export async function get(req) {
  const sessionId = 'den0IsN3xt'
  return {
    status: 302,
    headers: {
      location: `${github}?client_id=${clientId}&state=${sessionId}`
    },
    body: 'redirecting...'
  }
}