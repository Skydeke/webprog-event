function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

function sendData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let data = {
    email: email,
    name: name,
  };

  if (name == "" || email == "") {
    alert("Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein!");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Bitte geben Sie eine gültige E-Mail-Adresse ein!");
    return;
  } else {
    alert("Du hast dich erfolgreich angemeldet!");
  }

  console.log(data);

  axios
    .post(
      "https://dbaccessfunction.azurewebsites.net/api/attendee",
      JSON.stringify(data)
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
