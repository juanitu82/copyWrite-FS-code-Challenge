import Navbar from './components/navbar';
import ResponseBar from './components/responseBox';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect} from 'react'
import { getResponses } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(getResponses())
  },[dispatch])
  const data = useSelector(state => state.responses)
  return (
    <div >
      
        <Navbar/>
        <ResponseBar data={data}/>
    </div>
  );
}

export default App;
