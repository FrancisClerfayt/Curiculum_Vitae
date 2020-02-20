function age() {
  var birthday = new Date(1991, 5, 10);
  var currentYear = new Date();
  var age = currentYear.getYear() - birthday.getYear();
  var month = currentYear.getMonth() - birthday.getMonth();
  var day = currentYear.getDay() - birthday.getDay();
  if((month < 0) || (day < 0)){
    age--;
  }
  return age;
}

function showTab(tabName) {
  var about = document.getElementById("aPropos");
  var linkAbout = document.getElementById("linkAbout");
  var experience = document.getElementById("experience");
  var linkExp = document.getElementById("linkExp");
  var training = document.getElementById("formation");
  var linkTraining = document.getElementById("linkTraining");
  var skill = document.getElementById("skills");
  var linkSkill = document.getElementById("linkSkill");
  var hobby = document.getElementById("hobby");
  var linkHobby = document.getElementById("linkHobby");

  if (tabName === "about") {
    about.className = about.className + " active ";
    linkAbout.className = linkAbout.className + " active ";
    experience.className = experience.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkExp.className = linkExp.className.replace(/(?:^|\s)active(?!\S)/g, '');
    training.className = training.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkTraining.className = linkTraining.className.replace(/(?:^|\s)active(?!\S)/g, '');
    skill.className = skill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkSkill.className = linkSkill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    hobby.className = hobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkHobby.className = linkHobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
  } else if (tabName === "XP") {
    about.className = about.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkAbout.className = linkAbout.className.replace(/(?:^|\s)active(?!\S)/g, '');
    experience.className = experience.className + " active ";
    linkExp.className = linkExp.className + " active ";
    training.className = training.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkTraining.className = linkTraining.className.replace(/(?:^|\s)active(?!\S)/g, '');
    skill.className = skill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkSkill.className = linkSkill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    hobby.className = hobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkHobby.className = linkHobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
  } else if (tabName === "training") {
    about.className = about.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkAbout.className = linkAbout.className.replace(/(?:^|\s)active(?!\S)/g, '');
    experience.className = experience.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkExp.className = linkExp.className.replace(/(?:^|\s)active(?!\S)/g, '');
    training.className = training.className + " active ";
    linkTraining.className = linkTraining.className + " active ";
    skill.className = skill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkSkill.className = linkSkill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    hobby.className = hobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkHobby.className = linkHobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
  } else if (tabName === "skill") {
    about.className = about.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkAbout.className = linkAbout.className.replace(/(?:^|\s)active(?!\S)/g, '');
    experience.className = experience.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkExp.className = linkExp.className.replace(/(?:^|\s)active(?!\S)/g, '');
    training.className = training.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkTraining.className = linkTraining.className.replace(/(?:^|\s)active(?!\S)/g, '');
    skill.className = skill.className + " active ";
    linkSkill.className = linkSkill.className + " active ";
    hobby.className = hobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkHobby.className = linkHobby.className.replace(/(?:^|\s)active(?!\S)/g, '');
  } else if (tabName === "hobby") {
    about.className = about.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkAbout.className = linkAbout.className.replace(/(?:^|\s)active(?!\S)/g, '');
    experience.className = experience.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkExp.className = linkExp.className.replace(/(?:^|\s)active(?!\S)/g, '');
    training.className = training.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkTraining.className = linkTraining.className.replace(/(?:^|\s)active(?!\S)/g, '');
    skill.className = skill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    linkSkill.className = linkSkill.className.replace(/(?:^|\s)active(?!\S)/g, '');
    hobby.className = hobby.className + " active ";
    linkHobby.className = linkHobby.className + " active ";
  } else {
    alert("Erreur : mauvaise valeur en entrée de showTab");
  }
}
