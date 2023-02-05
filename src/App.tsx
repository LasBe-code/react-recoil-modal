import { useModal } from './hooks/useModal';
import { Modal } from './Components/Modal';

function App() {
  const { openModal } = useModal();

  const modalData = {
    title: 'Modal Title',
    content: 'Modal Content',
    callback: () => alert('Modal Callback()'),
  };

  return (
    <div>
      <button onClick={() => openModal(modalData)}>OPEN MODAL</button>
      <Modal />
    </div>
  );
}

export default App;
