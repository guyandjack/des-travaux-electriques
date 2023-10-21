//Test si une session user est ouverte
export function isSessionOpen() {
  if (
    localStorage.getItem("UserSession") == null ||
    localStorage.getItem("UserSession") == "undefined" ||
    !localStorage.getItem("UserSession")
  ) {
    return false;
  }

  let dataUserSession = JSON.parse(localStorage.getItem("UserSession"));

  if (dataUserSession.validsession == "ok") {
    return true
  }

  return false
}

//Attribut des valeurs par defaut issu du local storage dans les inputs utilisateurs de tous les formulaires de la page

export function setValueInputUser() {
  let validSession = isSessionOpen();

  //si la session est ouverte on preremplie les inputs
  if (validSession == true) {

    let dataUserSession = JSON.parse(localStorage.getItem("UserSession"));

    let listInputName = document.querySelectorAll("input[name=lastname]");

    let listInputFirstName = document.querySelectorAll("input[name=firstname]");

    let listInputEmail = document.querySelectorAll("input[name=email]");

    let listInputCheckBox = document.querySelectorAll("input[name=userdata]");

    
      listInputName.forEach((inputName) => {
        inputName.value = dataUserSession.userDataName;
        inputName.placeholder = dataUserSession.userDataName;
        inputName.readonly = true;
        inputName.classList.add("color-readonly", "border-readonly");
      });
    


    listInputFirstName.forEach((inputFirstName) => {
      inputFirstName.value = dataUserSession.userDataFirstname;
      inputFirstName.placeholder = dataUserSession.userDataFirstname;
      inputFirstName.readonly = true;
      inputFirstName.classList.add("color-readonly","border-readonly");
    });


    listInputEmail.forEach((inputEmail) => {
      inputEmail.value = dataUserSession.userDataEmail;
      inputEmail.placeholder = dataUserSession.userDataEmail;
      inputEmail.readonly = true;
      inputEmail.classList.add("color-readonly","border-readonly");
    });

    if (listInputCheckBox.length > 0) {
      listInputCheckBox.forEach((inputcheckbox) => {
        inputcheckbox.checked = true;
        inputcheckbox.disabled = true;
      })
    }
  }
}

//Permet de recuperer l' Url Courante.
export function getUrl() {
  return window.location.href;
}

//Chaque page ouverte est reference ds le local storage
export function pageAperture() {

  //Si une session user est ouverte on ajoute une page active
  let sessionUser = localStorage.getItem("UserSession")? localStorage.getItem("UserSession"):null;
  let activePage = localStorage.getItem("activePage")? localStorage.getItem("activePage"):null;

  if (sessionUser !== null && activePage !== null) {
    let activePageNbr = JSON.parse(activePage);
    activePageNbr = activePageNbr + 1;
    localStorage.setItem("activePage", JSON.stringify(activePageNbr));
  }

  else {
    console.log("aucune session user detedte!!")
  }

   
}

//Chaque page fermée doit être déréferencée
export function pageClosure() {
  let response;
  let activePage = localStorage.getItem("activePage") ? localStorage.getItem("activePage") : null;
  
  let activePageNbr = JSON.parse(activePage);
  activePageNbr = activePageNbr - 1;


  
  if (activePageNbr == 0) {
    response = window.confirm("Femer ma session, et supprimer mes donneés de session?");

    if (response == true) {
      deleteSession();
      window.location.href = "http://localhost:3000"
      return
    }
    else {
      window.location.reload();
    }
  }

  if (activePageNbr < 0) {
    deleteSession();
    return
  }
  else {
    localStorage.setItem("activePage", activePageNbr);
  }


  
}

// Efface les donnees de session lors de la fermeture de l' onglet actif.
export function deleteSession() {
  let flag1 = false;
  let flag2 = false;

  if (localStorage.getItem("UserSession")) {
    localStorage.removeItem("UserSession");
    flag1 = true;
  }

  if (localStorage.getItem("activePage")) {
    localStorage.removeItem("activePage");
    flag2 = true;
  }

  if (flag1 && flag2) {
    
    //window.location.href = "http"
    console.log("session utislisateur fermée.");
    return true;
  }
  else {
    
    console.log("session utislisateur pas fermée.");
    return false;
  }
}
