// import store, { get as getter } from 'svelte/store';
// import {loginRedirectTo} from '$lib/stores'

export async function get(req) {

  //console.log({store})
    //const redirectTo = getter(loginRedirectTo);
    console.log('LOGOUT QUERY STRING redirectTo', req.query.get("redirectTo"))

    const redirectTo = req.query.get("redirectTo") || '/'


    //console.log('LOGOUT', {redirectTo})
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