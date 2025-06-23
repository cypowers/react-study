import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';  

function App() {
  const name = "홍길동";
  const BodyProps = {
    name: "유지하1",
    location: "부천시",
    // favorList: ["영화", "음악", "독서"],
  };
  return (
  <div className="App">
    <Header />    
    <Body {...BodyProps}/>
    <Footer />
  </div>
  );
}

export default App;
