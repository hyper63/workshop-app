import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
import { default as jwt } from 'jsonwebtoken'

let SECRET = process.env['SECRET']

const token = jwt.sign({ sub: 'tripott', scope: 'foo' }, SECRET)
//const token = jwt.sign({ sub: user, scope: session.get('scope') }, SECRET)
export default {SECRET, token}


// const result = await fetch(apiUrl, { headers: { authorization: `Bearer ${token}` } })
//   .then(r => r.json())