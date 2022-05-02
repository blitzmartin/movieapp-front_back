import React, {useState} from "react"

function DropdownMenu({ options }) {

    const [item, setValue] = useState('')

    function selectOption(item){
        console.log(item);
    }

    return (
        <>
                <select className='options' onChange={(e) => selectOption(e.target.value)} id="genre" name="genre">
                    {options.map((item) => {
                        return (
                            <option value={item}>{item}</option>
                        )
                    })}
                </select>
        </>
    )
}

export default DropdownMenu

