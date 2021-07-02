
import { default as jwt } from 'jsonwebtoken'

function createJWT ({user, scope}) {
  let SECRET = process.env['SECRET']
  return jwt.sign({ sub: user, scope}, SECRET)
}


//const token = jwt.sign({ sub: user, scope: session.get('scope') }, SECRET)
export default createJWT

