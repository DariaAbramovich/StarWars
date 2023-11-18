import {  HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, GUIDE_IMG, URL_IMG_PERSON} from "../utils/network"

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