function Button( {value , onClick, disabled}) {
    

    return ( 
        <button onClick={onClick} disabled={disabled}>{value}</button>
     );
}

export default Button;