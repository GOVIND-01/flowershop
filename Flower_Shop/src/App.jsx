import './App.css';
import { AllRoutes } from './Routers/Routes';
import {Chat} from "./Components/chatbot/chat"

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <Chat></Chat>
    </div>
  );
}

export default App;
