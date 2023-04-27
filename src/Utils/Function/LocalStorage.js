//Test si une session user est ouverte
export function isSessionOpen() {
    if (
      localStorage.getItem("session") == null ||
      localStorage.getItem("session") == "undefined" ||
      !localStorage.getItem("session")
    ) {
      return false;
    }

    let dataUser = JSON.parse(localStorage.getItem("session"));

    if (dataUser.validsession !== "ok") {
      return false;
    }

    return true
}


//Attribut des valeurs par defaut issu du local storage dans les inputs utilisateurs

export function setValueInputUser() {
    
    let validSession = isSessionOpen();

    //si la session est ouverte on preremplie les inputs
    if (validSession == true) {
        
        let dataUser = JSON.parse(localStorage.getItem("session"));
    
        let listInputName = document.querySelectorAll("input[name=lastname]");

        let listInputFirstName = document.querySelectorAll("input[name=firstname]");

        let listInputEmail = document.querySelectorAll("input[name=email]");

        listInputName.forEach((inputName) => {
            inputName.value = dataUser.userDataName;
            inputName.placeholder = dataUser.userDataName;
        });

        listInputFirstName.forEach((inputFirstName) => {
            inputFirstName.value = dataUser.userDataFirstname;
            inputFirstName.placeholder = dataUser.userDataFirstname;
        });

        listInputEmail.forEach((inputEmail) => {
            inputEmail.value = dataUser.userDataEmail;
            inputEmail.placeholder = dataUser.userDataEmail;
        });
        
    }
};
