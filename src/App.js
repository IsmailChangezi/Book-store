import './index.css';
import { Route, Routes } from 'react-router-dom';
import Container from './Components/Container';
import Categories from './Components/Categories';

function App() {
  return (
    <>
      {/* <Container /> */}
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
