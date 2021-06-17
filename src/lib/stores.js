import { writable } from 'svelte/store';

function createLoggedInUser() {
    const {subscribe, set, update} = writable(null)

    return {
        subscribe,
        setUser: () => update(user => user),
        reset: () => set(null)
    }

}


export const loggedInUser = createLoggedInUser();