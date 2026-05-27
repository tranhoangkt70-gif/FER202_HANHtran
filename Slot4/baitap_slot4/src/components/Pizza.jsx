//Pizza component hien thị thông tin của 1 pizza,
// gom: id, name, price, description, imageUrl, orignalPrice,
// salePrice, tag
//Hiển thị thông tin của pizza trong một card,
// sử dụng react-bootstrap để tạo giao diện đẹp mắt và dễ đọc.
//CSS cho card để nó có nền sáng, chữ mau tối và được căn giữa.

import React from 'react';
import {Card, Button} from 'react-bootstrap';
function Pizza ({pizaa}){
    return(
        <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#f8f9fa', color: '#343a40', textAlign: 'center' }}>
            <Card.Img variant="top" src={pizaa.imageUrl} alt={pizaa.name} />
            <Card.Body>
                <Card.Title>{pizaa.name}</Card.Title>
                <Card.Text>
                    {pizaa.description}
                </Card.Text>
                <Button variant="Secondary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}
export default Pizza;