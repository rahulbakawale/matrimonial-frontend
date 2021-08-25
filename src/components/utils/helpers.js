import axiosInstance from 'axiosInstance'


export const isLogin = () => {
    return !!localStorage.user
}

export const currentUser = () => {
    return localStorage.user && JSON.parse(localStorage.user)

}

export const currentProfile= () => {
    return localStorage.profile && JSON.parse(localStorage.profile)

}
export const getCompleteStep = async(headersData) => {
    let res;
    if(headersData){
        const headers = {
            'access-token': headersData['access-token'],
            'client': headersData['client'],
            'uid': headersData["uid"],
            
        }
        res = await axiosInstance.get(`/profiles/completed_steps`,{ headers: headers, timeout: 30000 })
    }else{
        res = await axiosInstance.get(`/profiles/completed_steps`)
    }
    debugger
    localStorage.setItem('completeStep',JSON.stringify(res.data))
}

export const completeStep = () => {
   return localStorage.getItem('completeStep') && JSON.parse(localStorage.completeStep)
}