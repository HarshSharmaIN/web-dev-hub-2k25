import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { IoSearch } from "react-icons/io5";

function App() {
  const labels=[
    "Spicy", "Non Spicy", "Vegetarian", "Vegan"
  ]
  return (
    <div className='bg-orange-50 h-[100vh] w-full '>
      <h1 className='font-bold text-2xl w-full text-center p-4'>Recipes</h1>

      {/* search */}
      <div className="w-full my-4 flex justify-center items-center text-center">
        <div className="w-1/2 text-gray-400 pr-[0.5rem] pl-4 py-2 bg-white border border-gray-300 rounded-full flex items-center">
          Know what you want? Search it!
          <div className='flex-grow' />
          <div className='p-2 rounded-full bg-blue-800'>
            <IoSearch className='text-white' />
          </div>
        </div>
      </div>
      {/* labels */}
      <div className='flex w-full gap-2 justify-end '>
        {labels.map((item, index) => (
          <div className='py-1 px-4 rounded-full  border border-gray-300'>{item}</div>
        ))}
      </div>
      {/* body */}
      <div className="p-4 grid grid-cols-4">
        <div><Sidebar /></div>
        <div className='col-span-3 '>body</div>
      </div>
    </div>
  );
}

export default App;
