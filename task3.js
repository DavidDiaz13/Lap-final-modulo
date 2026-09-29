// Task 3: addUser(first_name, last_name, email)

export function addUser(first_name, last_name, email) {

    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {

            let newId = Math.max(...users.map(user => user.id)) + 1;

            let newUser = {
                id: newId,
                first_name: first_name,
                last_name: last_name,
                email: email
            };

            fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });

        });
}