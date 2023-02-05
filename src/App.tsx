import { ModalContainer } from './Components/ModalContainer';
import { useModal } from './hooks/useModal';

function App() {
  const { openModal } = useModal();
  return (
    <div>
      <button onClick={() => openModal('Modal Title', 'Modal Content')}>OPEN MODAL</button>
      <ModalContainer />
    </div>
  );
}

export default App;
