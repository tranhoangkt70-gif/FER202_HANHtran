import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" sticky="top">
      <Container>
        {/* Dùng thuộc tính as={NavLink} để biến logo thành một link chuyển trang không reload */}
        <Navbar.Brand as={NavLink} to='/'>
          📝 React Blog
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className='ms-auto'>
            {/* Thuộc tính 'end' đảm bảo nút Trang chủ chỉ active khi URL chính xác là '/' */}
            <Nav.Link as={NavLink} to='/' end>🏠 Trang chủ</Nav.Link>
            <Nav.Link as={NavLink} to='/posts'>📚 Bài viết</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>ℹ️ Giới thiệu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;