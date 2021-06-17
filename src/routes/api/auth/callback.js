import fetch from 'node-fetch'
import { contains } from 'ramda'

const clientId = import.meta.env.VITE_CLIENT_ID
const secret = import.meta.env.VITE_CLIENT_SECRET
const tokenUrl = 'https://github.com/login/oauth/access_token'
const userUrl = 'https://api.github.com/user'

export async function get(req) {
  const code = req.query.get('code')
  const state = req.query.get('state')

  // need to get JWT with fetch
  const result = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: secret,
      code: code,
      state: state
    })
  }).then(r => r.json())
  const user = await fetch(userUrl, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      authorization: `Bearer ${result.access_token}`
    }
  }).then(r => r.json())

  // if (contains(user.login, ['twilson63', 'tripott'])) {
    req.locals.token = result.access_token
    req.locals.username = user.login
  // }

  console.log('workshop-app src/routes/api/auth/callback.js')
  console.log({access_token: result.access_token, login: user.login})

  // Need to setup session
  return {
    status: 302,
    headers: {
      location: '/'
    },
    body: 'redirect'
  }
}