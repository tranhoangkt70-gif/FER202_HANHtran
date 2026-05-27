import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Thanh Navbar sẽ luôn đứng cố định ở đầu tất cả các trang */}
      <AppNavbar />

      {/* Định nghĩa danh sách các trang và đường dẫn tương ứng */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/about' element={<About />} />
        {/* Dấu * có nghĩa là nếu gõ sai bất kỳ URL nào khác, nó sẽ đá về trang 404 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;