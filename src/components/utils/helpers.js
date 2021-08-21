import axiosInstance from 'axiosInstance'


export const isLogin = () => {
    return !!localStorage.user
}

export const currentUser = () => {
    debugger
    return localStorage.user && JSON.parse(localStorage.user)
}

export const getCompleteStep = async(headersData) => {
    let res;
    if(headersData){
        const headers = {
            'access-token': headersData['access-token'],
            'client': headersData['uid'],
            'uid': headersData["client"],
        }
        res = await axiosInstance.get(`/profiles/completed_steps`,{ headers: headers })
    }else{
        res = await axiosInstance.get(`/profiles/completed_steps`)
    }
    debugger
    localStorage.setItem('completeStep',JSON.stringify(res.data))
}

export const completeStep = () => {
    localStorage.getItem('completeStep') && JSON.parse(localStorage.completeStep)
}