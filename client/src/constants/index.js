export const BASE_URL=import.meta.env.VITE_API_URL

export const API_URL=BASE_URL+"/api/v1"
export const APIs={
    USERS:API_URL+"/users",
    BLOG:API_URL+"/blogs",
}