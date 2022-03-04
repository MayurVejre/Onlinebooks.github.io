import './App.css';
import {Header} from "./MyComponent/Header";
import {MainFile} from "./MyComponent/MainFile";
import {Footer} from "./MyComponent/Footer";
import {Ssc} from "D:/github/OnlineBooks/src/MyComponent/Ssc";
import {Hsc} from "D:/github/OnlineBooks/src/MyComponent/Hsc";
import {Arts} from "D:/github/OnlineBooks/src/MyComponent/Arts";
import {Commerce} from "D:/github/OnlineBooks/src/MyComponent/Commerce";
import {Nineth} from "D:/github/OnlineBooks/src/MyComponent/Nineth";
import {About} from "D:/github/OnlineBooks/src/MyComponent/About";
import {Feedback} from "D:/github/OnlineBooks/src/MyComponent/Feedback";
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Header title="Online Books"/>
      
      <Routes>
          <Route path="/" element={<MainFile/>}/>
          <Route path="/10thstandard" element={<Ssc/>}/>
          <Route path="/Science" element={<Hsc/>}/>
          <Route path="/Arts" element={<Arts/>}/>
          <Route path="/Commerce" element={<Commerce/>}/>
          <Route path="/Nineth" element={<Nineth/>}/>
      </Routes>
      <About/>
      <Feedback/>
      <Footer/>
    </>
  );
}

export default App;
