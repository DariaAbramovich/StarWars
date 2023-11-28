import {  HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, GUIDE_IMG, URL_IMG_PERSON, SWAPI_PARAM_PAGE} from "../utils/network"

export const getPeoplePageId = url =>{
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE)
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length,url.length)
    console.log(id)
    return Number(id)
}

const getId = (url, category) =>{
    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, "" ) // глобалльизация перебора символов
        return id
}
const getImg = () =>{

}


export const getPeopleId = url => getId(url, SWAPI_PEOPLE)
export const getPeopleImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG}`