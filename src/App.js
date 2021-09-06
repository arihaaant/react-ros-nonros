import Header from "./components/Header";
import Home from "./components/Home";
import Body from "./components/Body";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Body/>
        <p className="container">
         Home page for ROS Robot Controller
        </p>
       <Home/>
     
    </div>
    
  );
}

export default App;
