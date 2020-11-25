import React, { useState } from 'react'

const ListView = (index, info) => {
    const [data, setData] = useState('')
    // let arr = ["he wrote the idea",
    //     "the date the idea was writtern",
    //     "he edited the idea"
    // ]
    console.log(index)
    if (info) {
        setData(index)
    }
    //setData(arr[index - 1])
    return (
        <div>
            <h3>{data}</h3>
        </div>
    )


}
export default ListView;
