import PropTypes from 'prop-types'

import { useState, useEffect } from "react"
import { withErrorApi } from "@hoc-helpers/witthErrorApi.jsx"

import { getApiResource } from "@utils/network"
import { API_PEOPLE } from "@utils/network"
import { getPeopleId, getPeopleImage , getPeoplePageId} from "@services/getPeopleData"
import { PeopleList } from "@components/PeoplePage/PeopleList/PeopleList.jsx"
import { useQueryParams } from '../../hooks/useQueryParams.js'
import { Navigation } from '../../components/Navigation/Navigation.jsx'
const PeoplePage = ({setErrorApi}) => {
   
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nexPage, setNexPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)



    const query = useQueryParams()
    const queryPage = query.get('page')
    console.log(queryPage)
    const getResourse = async (url) => {
        const res = await getApiResource(url)
        console.log(res)
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
            setPrevPage(res.previous)
            setNexPage(res.next)
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        }
        else {
            setErrorApi(true)
        }
    }               

    useEffect(() => {
        getResourse(API_PEOPLE+queryPage)
    }, [])

    return (
        <>
           <h1 className="header_text">Navigation</h1>
           <Navigation
                getResourse = {getResourse}
                prevPage = {prevPage}
                nexPage = {nexPage}
                counterPage = {counterPage}
           />
           {people && <PeopleList people={people} />}
        </>
    )
}

PeopleList.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage)
