export const API_URL = `${process.env.APP_URL}/api`

export const getGenresUrl = (url: string) => `/genre${url}`
export const getUsersUrl = (url: string) => `/users${url}`
export const getMoviesUrl = (url: string) => `/movie${url}`
export const getAuthUrl = (url: string) => `/auth${url}`
export const getActorsUrl = (url: string) => `/actor${url}`
export const getRatingUrl = (url: string) => `/ratings${url}`
