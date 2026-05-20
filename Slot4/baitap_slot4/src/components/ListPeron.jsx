//2. Hiển thị thông tin của từng người trong một danh sách gồm 10 người, 
// mỗi người có tên và tuổi ra danh sách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 15 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'Avid', age: 40 },
        { name: 'Eve', age: 18 },
        { name: 'Frank', age: 18 },
        { name: 'Grace', age: 55 },
        { name: 'Ceidi', age: 20 },
        { name: 'Ivan', age: 25 },
        { name: 'Budy', age: 50 }   
    ];
    //3. Tìm người đầu tiên trong mảng people là thanh thiếu niên 
    // (tuổi từ 10 đến 20) và hiển thị thông tin của người đó
    const firstTeenager = people.find(person => person.age >= 10 
        && person.age <= 20);
    
    //4. Tìm tất cả những người trong mảng people là thanh thiếu niên
    // (tuổi từ 10 đến 20) và hiển thị thông tin của những người đó
    const allTeenagers = people.filter(person => person.age >= 10 
        && person.age <= 20);
    
    //5. Kiểm tra xem tất cả những người trong mảng people có phải là thanh thiếu niên
    // (tuổi từ 10 đến 20) hay không, trả về true hoặc false
    const isEveryoneTeenager = people.every(person => person.age >= 10 
        && person.age <= 20);
    
    //6. Kiểm tra xem có bất kỳ người nào trong mảng people là thanh thiếu niên
    // (tuổi từ 10 đến 20) hay không, trả về true hoặc false
    const isAnyoneTeenager = people.some(person => person.age >= 10 
        && person.age <= 20);
    
    //7. Sắp xếp danh sách people theo tên tăng dần, tuổi giảm dần
    const sortedPeople = [...people].sort((a, b) => {
        if (a.name.localeCompare(b.name) !== 0) {
            return a.name.localeCompare(b.name);
        }
        return b.age - a.age;
    });
    return (
        <>
        <h1>1.List of People</h1>
        <div>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>{person.name} - {person.age} years old</li>
                ))}
            </ul>
        </div>
        <h3>2.Find the first person off the people array is teenager</h3>
        <div>
            {firstTeenager ? (
                <p>{firstTeenager.name} - {firstTeenager.age} years old</p>
            ) : (<p>No teenager found.</p>)}
        </div>
        <h3>3.Find all persons of the people array is teenager</h3>
        <div>
            {allTeenagers.length > 0 ? (
                <ul>
                    {allTeenagers.map((person, index) => (
                        <li key={index}>{person.name} - {person.age} years old</li>
                    ))}
                </ul>
            ) : (<p>No teenager found.</p>)}
        </div>
        <h3>4.Check if every person of the people array is teenager</h3>
        <div>
            <p>Result: {isEveryoneTeenager ? 'true' : 'false'}</p>
        </div>
        <h3>5.Check if any person of the people array is teenager</h3>
        <div>
            <p>Result: {isAnyoneTeenager ? 'true' : 'false'}</p>
        </div>
        <h3>6.Display sorted list (Name ascending, Age descending)</h3>
        <div>
            <table border="1" style={{borderCollapse: 'collapse', width: '100%', marginTop: '10px'}}>
                <thead>
                    <tr style={{backgroundColor: '#f2f2f2'}}>
                        <th style={{padding: '8px', textAlign: 'left'}}>STT</th>
                        <th style={{padding: '8px', textAlign: 'left'}}>Name</th>
                        <th style={{padding: '8px', textAlign: 'left'}}>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedPeople.map((person, index) => (
                        <tr key={index}>
                            <td style={{padding: '8px'}}>{index + 1}</td>
                            <td style={{padding: '8px'}}>{person.name}</td>
                            <td style={{padding: '8px'}}>{person.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
        
        
    );
}
export default ListPerson;