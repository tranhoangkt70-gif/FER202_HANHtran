import './App.css';
import Hello from './components/Hello';
import ListPerson from './components/ListPeron';
import Footer from './components/Footer';
import PizzaList from './components/PizzaList';

function App() {
  return (
    <div>
      <Hello />
      <ListPerson />
      <PizzaList />
      <Footer
        id="123"
        name="Tran Hoàng Anh"
        email="tranhoangkt70@gmail.com"
        githubLink="https://github.com/tranhoangkt70-gif/FER202_HANHtran"
      />
    </div>
  );
}

export default App;

