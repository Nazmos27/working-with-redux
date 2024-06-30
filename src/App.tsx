function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex border-b-2 bg-slate-300 ">
        <button className="px-4 bg-green-400 py-3 rounded-md text-white ">
          Increment
        </button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-4 bg-red-400 py-3 rounded-md text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
