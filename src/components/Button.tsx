
type Props = {

    handleClick: any
    name: String
}

const Button = ({handleClick, name}: Props) => {

    return (

        <button onClick = {handleClick} className="border border-black rounded-md p-4">{name}</button>
    )
}

export default Button