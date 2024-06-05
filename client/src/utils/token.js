export const setTokens=(payload)=>{
    return localStorage.setItem("acess_token",JSON.stringify(payload))
};
export const getToken=()=>{};
export const removeToken=()=>{};