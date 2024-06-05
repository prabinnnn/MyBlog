export const setTokens=(payload)=>{
    return localStorage.setItem("access_token",JSON.stringify(payload))
};
export const getToken=()=>{
    return localStorage.getItem("access_token")
};
export const removeToken=()=>{
    return localStorage.removeItem("access_token")
};