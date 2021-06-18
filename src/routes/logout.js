import { get as getter } from 'svelte/store';
import {loginRedirectTo} from '$lib/stores'

export async function get(req) {
    const redirectTo = getter(loginRedirectTo);

    console.log('LOGOUT', {redirectTo})
    // clear session
    req.locals.logout = true
    // redirect
    return {
      status: 302,
      headers: {
        location: redirectTo
      },
      body: 'logging out!'
    }
  
  }