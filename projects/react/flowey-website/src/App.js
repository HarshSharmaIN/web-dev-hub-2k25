import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { IoSearch } from "react-icons/io5";
import bbqPorkBuns from './assets/Chinese-BBQ-Pork-Steamed-Buns4-1200x1500.jpg'
import bbqPorkPuffs from './assets/chinese-bbq-pork-pastry-char-siu-sou2.jpg'
import stickyRice from './assets/how-to-make-thai-sticky-rice-4.jpg'
import radishCake from './assets/Chinese-Radish-Cake-1.jpg'
import taro from './assets/taro-puff-dumplings-wu-gok5.jpg'
import noodleRolls from './assets/images.jpeg'
import gow from './assets/har-gow-6.jpg'
import spare from './assets/asian-steamed-spare-ribs-7.jpg'
import short from './assets/dim-sum-beef-short-ribs-2.jpg'

function App() {
  const labels = [
    "Spicy", "Non Spicy", "Vegetarian", "Vegan"
  ]
  const products = [
    { label: 'BBQ Pork Buns', url: bbqPorkBuns },
    { label: 'BBQ Pork Puffs', url: bbqPorkPuffs },
    { label: 'Thai Sticky Rice', url: stickyRice },
    { label: 'Radish Cake', url: radishCake },
    { label: 'Fried Taro Dumplings', url: taro },
    { label: 'Rice Noodle Rolls', url: noodleRolls },
    { label: 'Har Gow', url: gow },
    { label: 'Steamed Spare Ribs', url: spare },
    { label: 'Steamed Beef Short Ribs', url: short }
  ]
  return (
    <div className='bg-orange-50  w-full '>
      <h1 className='text-blue-900 font-bold text-3xl w-full text-center p-4'>Recipes</h1>

      {/* search */}
      <div className="w-full my-4 flex justify-center items-center text-center">
        <div className="w-1/2 text-gray-400  text-sm pr-[0.5rem] pl-4 py-2 bg-white border border-gray-300 rounded-full flex items-center">
          Know what you want? Search it!
          <div className='flex-grow' />
          <div className='p-2 rounded-full bg-blue-800'>
            <IoSearch className='text-white' />
          </div>
        </div>
      </div>
      {/* labels */}
      <div className='flex gap-2 justify-end mr-4'>
        {labels.map((item, index) => (
          <div className='text-gray-500 text-sm  py-1 px-4 rounded-full  border border-gray-300'>{item}</div>
        ))}
      </div>
      {/* body */}
      <div className="p-4 grid grid-cols-4">
        <div><Sidebar /></div>
        <div className='col-span-3 '>
          <div className='grid grid-cols-3 gap-4 ml-4'>
            {products.map((item, index) => (
              <div className="h-[20rem] border border-blue-900 relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.label}
                  className="w-full h-[80%] object-cover p-4"
                />
                <div className="text-blue-800 text-center bottom-2 left-2  px-4 py-1 text-sm">
                  {item.label}
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
