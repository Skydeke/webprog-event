axios.get('https://dbaccessfunction.azurewebsites.net/api/dbaccess')
    .then(function (response) {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
            let name = document.createElement("p");
            let email = document.createElement("p");
            let div = document.createElement("div");
            name.innerText = response.data[i].name;
            email.innerText = response.data[i].email;
            div.appendChild(name)
            div.appendChild(email)
            document.body.appendChild(div);
        }

    })
    .catch(function (error) {
        console.log(error);
    });