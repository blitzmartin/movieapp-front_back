import React, {useState} from 'react'

const btnDiv = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#282c34',
    paddingBottom: '0.5rem',
    paddingLeft: '0.2rem',
    marginBottom: '0.5rem'
}

const btn = {
    padding: '0.5rem',
    backgroundColor: 'red',
    color: 'white',
    margin: '0.5rem',
    borderRadius: '5px'
}





function Buttons(props) {
    const [btnLogo, setBtnLogo] = useState("fa-regular fa-heart")
    const [value, setValue] = useState(false)

    function handleClick() {
        if (value === false) {
            setBtnLogo("fa-solid fa-heart")
        } else if ( value === true) {
            setBtnLogo("fa-regular fa-heart")
        }
        setValue(!value)
    }

    return (
        <div style={btnDiv}>
            <button onClick={handleClick} style={btn}><i className={btnLogo}></i></button>           
        </div>

    )
}

export default Buttons

// fa-solid fa-heart fa-solid fa-trash