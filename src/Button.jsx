function Button( {value , onClick, disabled, style}) {
    

    return ( 
        <button style={style} onClick={onClick} disabled={disabled}>{value}</button>
     );
}

export default Button;