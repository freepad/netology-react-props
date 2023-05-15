import { UserProfile } from './components/UserProfile.jsx'
import './App.css'

function App() {
  const user = {
    name: 'Vasya',
    status: 'React Developer',
    avatar: 'https://dummyimage.com/200x100',
  };

  return (<UserProfile user={user} />);
}


export default App
