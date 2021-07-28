export const isLogin = () => {
    return !!localStorage.user
}

export const currentUser = () => {
    return localStorage.user && JSON.parse(localStorage.user)
}