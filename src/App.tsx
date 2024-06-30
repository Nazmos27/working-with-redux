import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {

  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex border-b-2 bg-slate-300 ">
        <button onClick={() => dispatch(increment()) } className="px-4 bg-green-400 py-3 rounded-md text-white ">
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-4 bg-red-400 py-3 rounded-md text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
