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

export const truncateString = (length,value) => {
    return value.substring(0, length) + '...';
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
    localStorage.setItem('completeStep',JSON.stringify(res.data))
}

export const completeStep = () => {
   return localStorage.getItem('completeStep') && JSON.parse(localStorage.completeStep)
}

export const convertToCm = ( value ) => {
    const val = parseFloat(value.replace("'",'.'))
    return val/0.032808

}

export const convertToFeet = ( value ) => {
    var realFeet = ((value*0.393700) / 12);
    var feet = realFeet.toFixed(1).toString()
    return feet.replace('.',"'")

}