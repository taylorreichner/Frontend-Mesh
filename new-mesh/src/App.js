import './App.css';
import { fetchEvents } from './Services/eventsApi';
import Feed from './Containers/feed'

function App() {
  



fetchEvents()

  return (
    <div>
      <Feed />
    </div>
  );
}

export default App;
