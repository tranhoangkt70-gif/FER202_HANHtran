import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Form, InputGroup, Button } from 'react-bootstrap';
import { posts } from '../data/posts';

function PostList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Thuật toán gộp và lọc để lấy ra danh sách các Category độc nhất (không trùng lặp)
  const categories = ['Tất cả', ...new Set(posts.map(p => p.category))];

  // Logic xử lý lọc bài viết đồng thời theo ô Tìm Kiếm và nút Category
  const filtered = posts.filter(post => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'Tất cả' || post.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <Container className="py-4">
      <h2 className='mb-4'>📚 Danh sách bài viết</h2>

      {/* Thanh tìm kiếm */}
      <InputGroup className="mb-3">
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Tìm kiếm bài viết...'
        />
        {search && (
          <Button variant='outline-secondary' onClick={() => setSearch('')}>× Xóa</Button>
        )}
      </InputGroup>

      {/* Các nút bấm chọn Bộ lọc danh mục */}
      <div className='mb-4 d-flex gap-2 flex-wrap'>
        {categories.map(cat => (
          <Button
            key={cat}
            variant={activeCategory === cat ? 'primary' : 'outline-primary'}
            size="sm"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Render kết quả bài viết sau khi lọc */}
      {filtered.length === 0 ? (
        <p className='text-muted text-center py-5'>Không tìm thấy bài viết nào.</p>
      ) : (
        <Row>
          {filtered.map(post => (
            <Col md={6} lg={4} key={post.id} className="mb-4">
              <Card
                className='h-100 shadow-sm'
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/posts/${post.id}`)} // Chuyển trang bằng code
              >
                <Card.Body>
                  <div className='d-flex justify-content-between mb-2'>
                    <Badge bg='primary'>{post.category}</Badge>
                    <small className='text-muted'>{post.date}</small>
                  </div>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text className='text-muted small'>
                    {post.body.substring(0, 70)}...
                  </Card.Text>
                  <div className='d-flex flex-wrap gap-1 mt-2'>
                    {post.tags.map(tag => (
                      <Badge key={tag} bg='secondary' className='fw-normal'>#{tag}</Badge>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className='text-muted small'>✍️ {post.author}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default PostList;