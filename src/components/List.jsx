import React, { useState } from 'react'
//import ListView from "./ListView"

const ListView = (index, info) => {
    const [state, setState] = useState({ detail: "" })
    const detail = state.detail
    console.log(index)
    const newFun = () => {
        setState(prevState => {
            return { detail: index }
        })
    }
    newFun();
    return (
        <div>
            <h3>Details: {detail}</h3>
        </div>
    )

}
const List = () => {
    const [state, setState] = useState({ detail: "", info: false })
    const detail = state.detail;
    const info = state.info
    let array = [
        { id: 1, title: "Farhan", details: "he wrote the idea" },
        { id: 2, title: "23.11.2020", details: "the date the idea was writtern" },
        { id: 3, title: "Mr X", details: "he edited the idea" }
    ]


    const handleSelect = (index) => {
        console.log(index)
        //setDetail(array.map((arr) => <ListView key={person.id} arr={arr} />)
        setState(prevState => {
            return { detail: index, info: true }
        })
        // ListView(details, true)
    }
    return (
        <div>{
            array.map((name, index) => <h2 onClick={() => handleSelect(name.details)} key={index}>{name.title}</h2>)

        }
            {info ? (
                <div>{detail}</div>
            )
                :
                (null)
            }
        </div >
    )
}
export default List;