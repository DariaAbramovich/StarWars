export const HTTPS  = "https://"
export const HTTP = "http://"
// swapi
export const SWAPI_ROOT = "swapi.dev/api/"
export const SWAPI_PEOPLE = "people"
export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

// visualguide
export const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/"
export const GUIDE_PEOPLE = "characters"
export const GUIDE_IMG =".jpg"
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE
// промисы
// export const getApiResource = (url) =>{
//     fetch(url)
//         .then(res => res.json())
//         .then(body => console.log(body))
//         .catch(err => console.log(err.message))
// }

export const getApiResource = async (url) => {

    try {
        const res = await fetch(url)
        
        if(!res.ok){
            console.error("Could not Fetch", res.status)
            return false
        }

        return await res.json()
    } catch (error) {
        console.error('Could not fetch', error.message)
        return false
    }

}

// getApiResource(URL)
//     .then(body => console.log(body))
// самовызывающаяся асинхронная
(async () => {
    const body = await getApiResource(API_PEOPLE)
    console.log(body)
})()
