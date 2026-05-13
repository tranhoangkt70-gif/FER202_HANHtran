let tong = (a, b) => a + b;

console.log(tong(5, 10)); // Output: 15

let chao =() => console.log("Xin chào, tôi là Trần Hoàng Anh!");
chao();// Output: Xin chào, tôi là Trần Hoàng Anh!


//1.Viet ham Chao1 nhan 1 tham so ten va in ra loi chao voi ten do
// sau do goi ham Chao1 voi ten cua ban
let chao1 = (ten) => console.log(`Xin chào, tôi là ${ten}!`);
chao1("Trần Hoàng Anh"); // Output: Xin chào, tôi là Trần Hoàng Anh!

//2.Viet ham Chao2 nhan 1 tham so la 1 doi tuong Person
let chao2 = (person) => console.log(`Xin chào, tôi có số tuổi là ${person.age}!`);

// có các thuộc tính id, name, age, address
let person = {
    id: 1,
    name: "Trần Hoàng Anh",
    age: 30,
    address: "123 Đường ABC, Thành phố XYZ"
};
//Sau đo in ra lời chao với tên của đối tượng đó.

// Gọi ham Chao2 voi mot đoi tượng Person mau.

chao2(person);
