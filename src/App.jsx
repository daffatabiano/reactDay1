import {useState} from "react";
import Sidebar from './components/Sidebar'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar (!showSidebar)
  }

  return (
    <div>

    <button onClick={handleSidebar}>|||</button>
      {/* <button onClick ={handleSidebar}>|||</button>
      {showSidebar ? <div>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </div> : null}
     */}

     {showSidebar && (
      <Sidebar/>
      )}
    </div>
  )
}

export default App;