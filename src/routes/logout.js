export async function get(req) {
    const redirectTo = req.query.get("redirectTo") || '/'
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