import React from 'react'
import Person from "./Person"

function ListRender() {
    const heroes = ["Bruce", "Clark", "Diana", "Barry"]
    const people = [{
        id: 1,
        name: "Tony",
        age: 30,
        skill: "Science"
    },
    {
        id: 2,
        name: "Thor",
        age: 28,
        skill: "Magic"
    },
    {
        id: 3,
        name: "Wanda",
        age: 25,
        skill: "Psychic"
    }
    ]
    const personList = people.map((person) => <Person key={person.id} person={person} />
    )
    return (<div>
        <div>
            {personList}
        </div>
        <div>
            {
                heroes.map((name, index) => <h2 key={index}>{name}</h2>)
            }

        </div>
    </div>
    )
}

export default ListRender
