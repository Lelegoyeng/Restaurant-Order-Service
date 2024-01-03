import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import gambartable from './assets/table.png'
import Modal from './components/modal';
import { useState } from 'react';
import produk1 from './assets/produk/burger.png';
import produk2 from './assets/produk/roti.png';
import produk3 from './assets/produk/kentang.png';

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
  const [modalOption, setModalOption] = useState({});
  const [qty, setQty] = useState(0)

  const ModalHandle = (data: any) => {
    const handleConfirm = () => {
      console.log(tableData)
    };

    document.getElementById('my_modal_1').showModal();
    setModalOption({
      show: true,
      title: `Table ${data?.g?.id}`,
      content: (
        <div>
          <hr className='border mt-5 mb-5' />
          <div className='flex mt-5 mb-5'>
            <img src={produk1} alt={`produk1`} className='w-16 h-16' />
            <div className='ml-10 flex justify-center items-center text-2xl'>Rp. 5000</div>
            <div className='flex justify-center items-center ml-28'>
              <div className='flex '><button onClick={() => console.log('tambah')} className='btn btn-xs bg-slate-700 text-white'>+</button></div>
              <div className='text-2xl ml-5 mr-5'>{qty}</div>
              <div className='flex '><button onClick={() => console.log('kurang')} className='btn btn-xs bg-slate-700 text-white'>-</button></div>
            </div>
          </div>
          <div className='flex mt-5 mb-5'>
            <img src={produk2} alt={`produk2`} className='w-16 h-16' />
            <div className='ml-10 flex justify-center items-center text-2xl'>Rp. 15000</div>
            <div className='flex justify-center items-center ml-28'>
              <div className='flex '><button onClick={() => console.log('tambah')} className='btn btn-xs bg-slate-700 text-white'>+</button></div>
              <div className='text-2xl ml-5 mr-5'>{qty}</div>
              <div className='flex '><button onClick={() => console.log('kurang')} className='btn btn-xs bg-slate-700 text-white'>-</button></div>
            </div>
          </div>
          <div className='flex mt-5 mb-5'>
            <img src={produk3} alt={`produk3`} className='w-16 h-16' />
            <div className='ml-10 flex justify-center items-center text-2xl'>Rp. 21000</div>
            <div className='flex justify-center items-center ml-28'>
              <div className='flex '><button onClick={() => console.log('tambah')} className='btn btn-xs bg-slate-700 text-white'>+</button></div>
              <div className='text-2xl ml-5 mr-5'>{qty}</div>
              <div className='flex '><button onClick={() => console.log('kurang')} className='btn btn-xs bg-slate-700 text-white'>-</button></div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleConfirm}>Konfirm</button>
            </form>
          </div>
        </div >
      ),

    });
  }

  return (
    <div className="flex">
      <Modal modalOption={modalOption} />
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className='grid grid-cols-3 gap-3'>
          {tableData.map((g) => {
            return (
              <div key={g.id} className='h-52 flex justify-center items-center'>
                <div
                  className='w-40 rounded-md text-center relative flex justify-center items-center cursor-pointer'
                  onClick={() => ModalHandle({ g })}
                >
                  <img src={gambartable} alt={`table ${g.id}`} className='w-full' />
                  <div className='absolute'>
                    <h1>Table {g.id}</h1>
                    <p className='font-bold '>{g.status}</p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default App;
