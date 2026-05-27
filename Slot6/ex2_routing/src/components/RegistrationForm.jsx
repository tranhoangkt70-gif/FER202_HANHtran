import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  // Trạng thái lưu trữ dữ liệu các ô nhập liệu
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Trạng thái lưu trữ thông báo lỗi cho từng trường
  const [errors, setErrors] = useState({});
  // Trạng thái đánh dấu xem biểu mẫu đã được gửi (submit) hay chưa
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  /**
   * Hàm kiểm tra tính hợp lệ của từng trường dữ liệu độc lập
   */
  const validateField = (name, value, currentPassword = '') => {
    let error = '';

    // 1. Kiểm tra không nhập (Yêu cầu bắt buộc)
    if (!value || value.trim() === '') {
      switch (name) {
        case 'username':
          return 'Tên đăng nhập không được để trống';
        case 'email':
          return 'Email không được để trống';
        case 'password':
          return 'Mật khẩu không được để trống';
        case 'confirmPassword':
          return 'Xác nhận mật khẩu không được để trống';
        default:
          return 'Trường thông tin này là bắt buộc';
      }
    }

    // 2. Kiểm tra định dạng email
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        error = 'Email không đúng định dạng (VD: example@domain.com)';
      }
    }

    // 3. Kiểm tra độ mạnh mật khẩu (>= 6 kí tự, có chữ hoa, thường, số, kí tự đặc biệt)
    if (name === 'password') {
      if (value.length < 6) {
        error = 'Mật khẩu phải chứa ít nhất 6 ký tự';
      } else if (!/(?=.*[a-z])/.test(value)) {
        error = 'Mật khẩu phải chứa ít nhất 1 chữ cái thường (a-z)';
      } else if (!/(?=.*[A-Z])/.test(value)) {
        error = 'Mật khẩu phải chứa ít nhất 1 chữ cái in hoa (A-Z)';
      } else if (!/(?=.*\d)/.test(value)) {
        error = 'Mật khẩu phải chứa ít nhất 1 chữ số (0-9)';
      } else if (!/(?=.*[^A-Za-z0-9])/.test(value)) {
        error = 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (VD: @, $, !, %, *, ?, &, #, ...)';
      }
    }

    // 4. Kiểm tra mật khẩu xác nhận có khớp không
    if (name === 'confirmPassword') {
      const passwordToCompare = currentPassword || formData.password;
      if (value !== passwordToCompare) {
        error = 'Mật khẩu xác nhận không trùng khớp với mật khẩu đã nhập';
      }
    }

    return error;
  };

  /**
   * Xử lý thay đổi dữ liệu trong ô input để cập nhật state và validate trực tiếp
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      const updatedData = { ...prev, [name]: value };

      // Thực hiện kiểm tra lỗi tại chỗ cho trường vừa thay đổi
      const fieldError = validateField(name, value, updatedData.password);

      setErrors(prevErrors => {
        const newErrors = { ...prevErrors, [name]: fieldError };

        // Nếu người dùng thay đổi "password" khi đã nhập "confirmPassword", phải kiểm tra lại tính trùng khớp
        if (name === 'password' && prev.confirmPassword) {
          newErrors.confirmPassword = validateField('confirmPassword', prev.confirmPassword, value);
        }

        return newErrors;
      });

      return updatedData;
    });
  };

  /**
   * Xử lý gửi biểu mẫu đăng ký
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate toàn bộ các trường khi submit
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key], formData.password);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setValidated(true);

    // Nếu không có bất kỳ lỗi nào, chuyển hướng về trang chủ Blog Home ('/')
    if (Object.keys(newErrors).length === 0) {
      navigate('/');
    }
  };

  /**
   * Xử lý khi nhấn nút Cancel (Reset form và chuyển hướng về trang chủ)
   */
  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setValidated(false);
    navigate('/');
  };

  return (
    <div className="register-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="register-card shadow">
              <Card.Header className="register-header text-center">
                <h3 className="mb-1 fw-bold">📝 Đăng ký tài khoản</h3>
                <small className="text-white-50">Vui lòng điền thông tin để đăng ký thành viên mới</small>
              </Card.Header>
              <Card.Body className="register-body">
                <Form noValidate onSubmit={handleSubmit}>
                  
                  {/* Tên đăng nhập (username) */}
                  <Form.Group className="mb-4" controlId="username">
                    <Form.Label className="fw-semibold text-secondary">Tên đăng nhập</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Nhập tên đăng nhập"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={validated && !!errors.username}
                      className="py-2"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Địa chỉ Email */}
                  <Form.Group className="mb-4" controlId="email">
                    <Form.Label className="fw-semibold text-secondary">Địa chỉ Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Nhập email của bạn (VD: email@example.com)"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={validated && !!errors.email}
                      className="py-2"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Mật khẩu */}
                  <Form.Group className="mb-4" controlId="password">
                    <Form.Label className="fw-semibold text-secondary">Mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Từ 6 ký tự (gồm hoa, thường, số, ký tự đặc biệt)"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={validated && !!errors.password}
                      className="py-2"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Xác nhận mật khẩu (confirm password) */}
                  <Form.Group className="mb-4" controlId="confirmPassword">
                    <Form.Label className="fw-semibold text-secondary">Xác nhận mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      placeholder="Nhập lại mật khẩu"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={validated && !!errors.confirmPassword}
                      className="py-2"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Nút bấm (Register và Cancel) */}
                  <div className="d-flex justify-content-between gap-3 mt-4">
                    <Button
                      type="button"
                      variant="outline-secondary"
                      onClick={handleCancel}
                      className="btn-cancel w-50"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      className="btn-register w-50"
                    >
                      Register
                    </Button>
                  </div>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegistrationForm;
