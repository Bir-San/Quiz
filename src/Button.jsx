function Button( {alternative , onClick}) {
    

    return ( 
        <button onClick={onClick}>{alternative}</button>
     );
}

export default Button;