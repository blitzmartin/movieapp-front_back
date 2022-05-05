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
    return (
        <div style={btnDiv}>
            <button style={btn}><i className={props.btn}></i></button>           
        </div>

    )
}

export default Buttons

// fa-solid fa-heart fa-solid fa-trash