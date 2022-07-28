import Response from './response'

const ResponseBar = (props) => {
    
    return(
        <div className='container-lg mt-2' style={{backgroundColor: "#e3f2fd", maxHeight: "80%"}}>
        <h1> Results: </h1>
            <div > { props.data && props.data.map( (response, index) => <Response key={index} text={response.text} flag={response.palindromo} /> )} </div>            
        </div>
    )
}

export default ResponseBar