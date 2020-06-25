function age() {
  let birthday = new Date(1991, 5, 10);
  let currentYear = new Date();
  let age = currentYear.getYear() - birthday.getYear();
  let month = currentYear.getMonth() - birthday.getMonth();
  let day = currentYear.getDate() - birthday.getDate();
  if(month < 0){
    age--;
  } else if (month == 0 && day < 0){
    age--;
  }
  return age;
}

let previous = "";

function showTab(tabName) {

  if(previous != ""){
    previous.removeClass("active");
  }
  $(".active").removeClass("active");

  switch (tabName) {
    case "about":
      $("#aPropos").addClass("active");
      previous = $("#aPropos");
      $("#linkAbout").addClass("active");
      break;
    case "XP":
      $("#experience").addClass("active");
      previous = $("#experience");
      $("#linkExp").addClass("active");
      break;
    case "training":
      $("#formation").addClass("active");
      previous = $("#formation");
      $("#linkTraining").addClass("active");
      break;
    case "skill":
      $("#skills").addClass("active");
      previous = $("#skills");
      $("#linkSkill").addClass("active");
      break;
    case "hobby":
      $("#hobby").addClass("active");
      $("#linkHobby").addClass("active");
      break;
    default:
      alert("Erreur : mauvaise valeur en entrée de showTab");
      break;
  }
}

$('document').ready(function(){
  $("#age").text(age() + " ans.");
  showTab("about");
});
