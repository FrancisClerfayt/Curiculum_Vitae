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

function showTab(tabName) {

  $(".active").removeClass("active");

  if (tabName === "about") {
    $("#aPropos").addClass("active");
    $("#linkAbout").addClass("active");
  } else if (tabName === "XP") {
    $("#experience").addClass("active");
    $("#linkExp").addClass("active");
  } else if (tabName === "training") {
    $("#formation").addClass("active");
    $("#linkTraining").addClass("active");
  } else if (tabName === "skill") {
    $("#skills").addClass("active");
    $("#linkSkill").addClass("active");
  } else if (tabName === "hobby") {
    $("#hobby").addClass("active");
    $("#linkHobby").addClass("active");
  } else {
    alert("Erreur : mauvaise valeur en entrée de showTab");
  }
}

$('document').ready(function(){
  $("#age").text(age() + " ans.");
  showTab("about");
});
