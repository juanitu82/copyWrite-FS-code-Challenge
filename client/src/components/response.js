
const Response = (props) => {

    return(
        <div className=' d-flex justify-content-around' >
          
                <div className='card p-3' style={{width: '80%', textAlign: 'center', fontSize: '25px'}}> {props.text} </div>
           
         
                {props && props.flag ? <div className='card' style={{width: '20%', textAlign: 'center'}}> Es Palindromo </div> : false}
        
        </div>
    )
}

export default Response