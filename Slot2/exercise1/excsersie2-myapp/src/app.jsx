import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './app.css'

export function App() {
  let chao1 = (ten) => console.log(`Xin chào, tôi là ${ten}!`);

  let person = {
    id: 1,
    name: "Trần Hoàng Anh",
    age: 20,
    address: "123 Đường ABC, Thành phố XYZ"
  };
  return (
    <>
      <h1>
        Xin chào. đây là bài tập về nhà của ứng dụng react
      </h1>
      <h2>Tôi là Trần Hoàng Anh</h2>
      <button onClick={() => chao1("Hoàng Anh")}>Click me</button>
      <div className="card">
        <h2>Thông tin cá nhân</h2>
        <p>ID: {person.id}</p>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Address: {person.address}</p>
      </div>   
    </>
  )
}
