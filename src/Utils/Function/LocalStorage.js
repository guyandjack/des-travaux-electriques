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

  return true;
}

//Attribut des valeurs par defaut issu du local storage dans les inputs utilisateurs du formulaire principal

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
}

//Permet de recuperer l' Url Courante.
export function getUrl() {
  return window.location.href;
}

//Chaque page ouverte est reference ds le local storage
export function pageAperture() {

  //Si une session user est ouverte on ajoute une page active
  let sessionUser = localStorage.getItem("session")? localStorage.getItem("session"):null;
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

  if (localStorage.getItem("session")) {
    localStorage.removeItem("session");
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
