const Button = ({handleClick, name}) => {

    return (

        <button onClick = {handleClick} className="border border-black rounded-md p-4">{name}</button>
    )
}

export default Button