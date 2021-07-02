import cookie from 'cookie';
import { compose, head, last, split } from 'ramda'

export async function handle ({ request, resolve }){
  const cookies = cookie.parse(request.headers.cookie || '{}');
  request.locals.gitHubToken = (cookies.data && cookies.data !== 'deleted') ? compose(last, split('|'))(cookies.data) : '';
  request.locals.userName = (cookies.data && cookies.data !== 'deleted') ? compose(head, split('|'))(cookies.data) : '';

  const response = await resolve(request)

  if (request.locals.gitHubToken !== '') {
    response.headers['set-cookie'] = `data=${request.locals.userName}|${request.locals.gitHubToken}; Path=/; HttpOnly`;
  }

  if (request.locals.logout) {
    response.headers['set-cookie'] = `data=deleted; Path=/; HttpOnly`;
  }

  return response
}

export async function getSession(request) {
  return {
    userName: request.locals.userName
  }
}