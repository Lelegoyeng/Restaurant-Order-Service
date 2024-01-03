import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import gambartable from './assets/table.png'

const tableData = [
  {
    id: 1,
    status: "Available",
  },
  {
    id: 2,
    status: "Available"
  },
  {
    id: 3,
    status: "Available"
  },
  {
    id: 4,
    status: "Available"
  },
  {
    id: 5,
    status: "Available"
  },
  {
    id: 6,
    status: "Available"
  },
]

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className='grid grid-cols-3 gap-3'>
          {tableData.map((g, xx) => {
            return <div className='h-52 flex justify-center items-center'>
              <div className='w-40 rounded-md text-center relative flex justify-center items-center cursor-pointer'>
                <img src={gambartable} alt="table" className='w-full' />
                <div className='absolute'>
                  <h1>Table {g.id}</h1>
                  <p className='font-bold '>{g.status}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
