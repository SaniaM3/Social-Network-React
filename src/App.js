import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import NavBar from './NavBar';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
