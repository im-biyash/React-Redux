import Navbar from "./Components/Navbar";
 import {useSelector, useDispatch} from "react-redux"
 import { incNum, decNum } from "./actions";
import NextController from "./Components/NextController";
//  import CounterControls from "./Components/CounterControls";
function App() {
  
  const myState = useSelector((state) =>state.changeNum);
 const  dispatch = useDispatch();
  return (
    <>
    <Navbar counter ={myState}/>
      <div className='bg-black h-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold text-white mb-8'>Increment/decrement counter</h1>  
        <div className="flex items-center justify-center gap-2">
          <button type="text" className="text-white font-bold p-2 w-37 h-auto rounded-lg bg-red-400 mr-2" onClick = {() => dispatch(decNum())}>-</button>
          <input type="text" value= {myState} className="w-16 text-center" />
          <button type="text" className="font-bold  p-2 text-white w-37 h-auto rounded-lg bg-green-400" onClick={() => dispatch(incNum())}>+</button>
        </div>
        <NextController/>
      </div>
    </>
  )
}

export default App;
