import "./PeopleList.css"

export const PeopleList = ({ people }) => {
    return (
        <div>
            <ul className="list_container">
                {people.map(({ id, name, img }) =>
                    <li className="list_item" key={id}>
                        <a href="">
                            <img className="person_img" src={img} alt={name} />
                            <p>{name}</p>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}