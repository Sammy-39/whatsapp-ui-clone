import Sidebar from "./sidebar"
import Chat from "./chat";
import './app.css';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
