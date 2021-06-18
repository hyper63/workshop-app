const github = 'https://github.com/login/oauth/authorize'
const clientId = import.meta.env.VITE_CLIENT_ID
import { loginRedirectTo } from '$lib/stores';
export async function get(req) {

  console.log('LOGIN QUERY STRING redirectTo', req.query.get("redirectTo"))

  const redirectTo = req.query.get("redirectTo") || '/'

  loginRedirectTo.update(() => redirectTo)

  const sessionId = 'den0IsN3xt'
  return {
    status: 302,
    headers: {
      location: `${github}?client_id=${clientId}&state=${sessionId}`
    },
    body: 'redirecting...'
  }
}