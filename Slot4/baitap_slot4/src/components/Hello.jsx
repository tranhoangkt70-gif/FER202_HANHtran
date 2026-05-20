//Tạo Hello.jsx để hiển thị "Hello, React!" trong thẻ p, chữ React in đậm
import React from 'react';
function Hello() {
  return (
    <div>
      <p>Hello, <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span>!</p>
    </div>
  );
}
export default Hello;