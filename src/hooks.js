import cookie from 'cookie';
import { compose, nth, split } from 'ramda'

export async function handle ({ request, resolve }){
  const cookies = cookie.parse(request.headers.cookie || '{}');
  
  request.locals.userName = (cookies.data && cookies.data !== 'deleted') ? compose(nth(0), split('|'))(cookies.data) : ''
  request.locals.gitHubToken = (cookies.data && cookies.data !== 'deleted') ? compose(nth(1), split('|'))(cookies.data) : ''
  request.locals.scopes = (cookies.data && cookies.data !== 'deleted') ? compose(nth(2), split('|'))(cookies.data) : ''
  request.locals.movieAPIToken = (cookies.data && cookies.data !== 'deleted') ? compose(nth(3), split('|'))(cookies.data) : ''

  const response = await resolve(request)

  if (request.locals.gitHubToken !== '') {
    response.headers['set-cookie'] = `data=${request.locals.userName}|${request.locals.gitHubToken}|${request.locals.scopes}|${request.locals.movieAPIToken}; Path=/; HttpOnly`;
  }

  if (request.locals.logout) {
    response.headers['set-cookie'] = `data=deleted; Path=/; HttpOnly`;
  }

  return response
}

export async function getSession(request) {
  return {
    userName: request.locals.userName,
    scopes: request.locals.scopes,
    movieAPIToken: request.locals.movieAPIToken
  }
}