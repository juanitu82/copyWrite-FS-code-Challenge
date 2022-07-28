import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addResponse, getResponses } from '../redux';
import { setResponse, getResponses } from '../redux/actions';

const Form = () => {
    const dispatch = useDispatch()

    const fetchData = async (text) =>  {
    
        try {
            fetch(`http://localhost:3001/iecho?text=${text}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.data !== 'no text') {
                    dispatch(setResponse({
                    palindromo: data.palindromo, 
                    text: data.data
                    }))
                    dispatch(getResponses())
            }})
    
        } catch (error) {
            console.log(error)
        }
      };
    const [input, setInput] = useState('');

    const handleChangeForm = (e) => setInput(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetchData(input)
        setInput('')
        document.getElementById('input').value = ''
    }

    return(
        <div className="container center">
            <form className="container ml-3" role="search" onSubmit={e => handleSubmit(e)}>
                <div className="input-group gap-3 pt-3">
                    <input className="form-control ml-3" type='search' onChange={handleChangeForm} id='input' autoComplete='off' placeholder='Insert Text'/>
                    <button className="btn btn-primary" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Form