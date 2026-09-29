// Task 2: listUsers()
export function listUsers() {
fetch("http://localhost:3000/users")
.then(response => response.json())
.then(users => console.log(users))
}
