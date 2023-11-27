import PropTypes from 'prop-types'

import { useState, useEffect } from "react"
import { withErrorApi } from "@hoc-helpers/witthErrorApi.jsx"

import { getApiResource } from "@utils/network"
import { API_PEOPLE } from "@utils/network"
import { getPeopleId, getPeopleImage } from "@services/getPeopleData"
import { PeopleList } from "@components/PeoplePage/PeopleList/PeopleList.jsx"

const PeoplePage = ({setErrorApi}) => {

    const [people, setPeople] = useState(null)

    const getResourse = async (url) => {
        const res = await getApiResource(url)

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)
                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList)
            setErrorApi(false)
        }
        else {
            setErrorApi(true)
        }
    }               

    useEffect(() => {
        getResourse(API_PEOPLE)
    }, [])

    return (
        <>
           <h1 className="header_text">Navigation</h1>
           {people && <PeopleList people={people} />}
        </>
    )
}

PeopleList.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)
