import './Navigation.css'
import { Link } from "react-router-dom"

export const Navigation = ({getResourse, prevPage, nextPage, counterPage }) => {
    const handleChangeNext = () => getResourse(nextPage)
    const handleChangePrev = () => getResourse(prevPage)

    return (
        <>
            <div>
                <Link to ={`/people/?page=${counterPage-1}`}>
                    <button onClick={handleChangePrev} className="btnNav">Rpevious</button>
                </Link>
                <Link  to ={`/people/?page=${counterPage+1}`}>
                    <button onClick={handleChangeNext} className="btnNav" >Next</button>

                </Link>
            </div>

        </>
    )
}
