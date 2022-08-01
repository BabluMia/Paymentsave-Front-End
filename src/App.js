import './App.css';
import Inprogress from './Components/InProgress/Inprogress';
import NewApplication from './Components/NewApplication/NewApplication';
import Header from './Components/Shared/Header';

function App() {
  return (
    <div className='bg-[#FFFFFF] max-w-[1230px] mx-auto'>
      <Header/>
      <NewApplication/>
      <Inprogress/>
    </div>
  );
}

export default App;
