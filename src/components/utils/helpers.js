export const isLogin = () => {
    return !!localStorage.user
}

export const currentUser = () => {
    debugger
    return localStorage.user && JSON.parse(localStorage.user)
}