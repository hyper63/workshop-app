import cookie from 'cookie';
import { compose, head, last, split } from 'ramda'

export async function handle ({ request, resolve }){
  const cookies = cookie.parse(request.headers.cookie || '{}');
  request.locals.token = (cookies.data && cookies.data !== 'deleted') ? compose(last, split('|'))(cookies.data) : '';
  request.locals.username = (cookies.data && cookies.data !== 'deleted') ? compose(head, split('|'))(cookies.data) : '';

  const response = await resolve(request)

  if (request.locals.token !== '') {
    response.headers['set-cookie'] = `data=${request.locals.username}|${request.locals.token}; Path=/; HttpOnly`;
  }

  if (request.locals.logout) {
    response.headers['set-cookie'] = `data=deleted; Path=/; HttpOnly`;
  }

  return response
}

export async function getSession(request) {
  return {
    username: request.locals.username
  }
}