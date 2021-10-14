import axiosInstance from 'axiosInstance'


export const isLogin = () => {
    return !!localStorage.user
}

export const currentUser = () => {
    return localStorage.user && JSON.parse(localStorage.user)

}

export const currentProfile= () => {
    return localStorage.profile && JSON.parse(localStorage.profile) ||
    localStorage.completeStep && JSON.parse(localStorage.completeStep)?.profile

}

export const truncateString = (length,value) => {
    return value.substring(0, length) + '...';
}

export const handleAmount = ( value, setFieldValue, name ) => {
    var vl = value
    vl = vl.replace(/,/g,'')
    const parseValue = parseInt(vl) || 0 
    if(parseValue <= 10000000){
      const val = vl ?  parseValue?.toLocaleString('hi') : ''
      setFieldValue(name,val)
    }
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

export const getTimeFromString = (strTime) => {
    const time = strTime && strTime.split('T')[1]
    const splitTime = time?.split(',')
    return splitTime &&  `${splitTime[0]}:${splitTime[1]}`

}

export const getFeetData = (startft,endft) => {
    var arr = []
    for(var i=startft; i<=endft; i++){
        for(var j=0; j<=11; j++){
            arr.push(`${i}Feet' ${j}inch`)
        }
    }
    return arr
}

export const completeStep = () => {
   return localStorage.getItem('completeStep') && JSON.parse(localStorage.completeStep)
}

export const convertToCm = ( value ) => {
    const digits = value.match(/\d/g);
    const val = parseFloat(`${digits[0]}.${digits[1]}`)
    return val/0.032808

}

export const convertToFeet = ( value ) => {
    var realFeet = ((value*0.393700) / 12);
    var feet = realFeet.toFixed(1).toString()
    var data =  feet.split('.')
    return value === null ? "4Feet' 0inch" : `${data[0] }Feet' ${data[1]}inch`
}