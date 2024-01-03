import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import gambartable from './assets/table.png'
import Modal from './components/modal';
import { useState } from 'react';

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

  const ModalHandle = (data: any) => {
    const handleConfirm = () => {
      console.log(tableData)
    };


    console.log(data)
    document.getElementById('my_modal_1').showModal()
    setModalOption({
      show: true,
      title: `Table ${data?.g?.id}`,
      content: (
        <div>
          <div>
            aaaaaaaaaa
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={handleConfirm}>Konfirm</button>
            </form>
          </div>
        </div>
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
