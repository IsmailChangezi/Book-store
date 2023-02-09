import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';
// eslint-disable-next-line
import Books from "./components/Books";
// eslint-disable-next-line
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Bookstore</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">BOOKS</Link>
              </li>
              <li>
                <Link to="categories">CATEGORIES</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route index element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
