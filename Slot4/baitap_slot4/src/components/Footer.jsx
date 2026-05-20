// 1 Footer component hiển thị thông tin bản quyền và liên kết
// đến trang chủ của tác giả : ID, tên, Email,Link github
import React from 'react';
function Footer({id, name, email, githubLink}) {
    return(
        <footer>
            <p>&copy; 2023 Tran Hoàng Anh. All rights reserved.</p>
            <p>ID: {id}</p>
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
            <p><a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
        </footer>
    );
}
export default Footer;