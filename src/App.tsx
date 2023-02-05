import { Modal } from './Components/Modal';
import { useModal } from './hooks/useModal';

function App() {
  const { openModal } = useModal();
  return (
    <div>
      <button onClick={() => openModal('Modal Title', 'Modal Content')}>OPEN MODAL</button>
      <Modal />
    </div>
  );
}

export default App;
