function selectLanguage(language) {

  localStorage.setItem('language', language);
  // window.onload = setLanguageOnLoad;
  var languageSelection = document.getElementById('language-selection');
  languageSelection.style.display = 'none';

  if (language === 'ru') {
    // navbar-menu
    document.getElementById('navbar-brand').textContent = 'КПВК';
    document.getElementById('nav-home').textContent = 'Главная';
    document.getElementById('nav-about').textContent = 'О нас';
    document.getElementById('nav-programs').textContent = 'Программы обучения';
    document.getElementById('navbarDropdownMenuLink').textContent = 'Поступления';
    document.getElementById('nav-admission-requirements').textContent = 'Условия поступления';
    document.getElementById('nav-admission-process').textContent = 'Сроки и процесс поступления';
    document.getElementById('nav-financial-support').textContent = 'Финансовая поддержка';
    document.getElementById('nav-college-description').textContent = 'Описание колледжа';
    document.getElementById('nav-learning-facilities').textContent = 'Учебные объекты';
    document.getElementById('nav-student-life').textContent = 'Студенческая жизнь';
    document.getElementById('nav-personal').textContent = 'Преподователь и персонал?';
    document.getElementById('nav-partner').textContent = 'Сотрудничество и партнерства';
    document.getElementById('nav-progres').textContent = 'Достижения';
    document.getElementById('nav-contacts').textContent = 'Контакты';
    document.getElementById('nav-faq').textContent = 'Вопросы и ответы';
    
  } else if (language === 'kz') {
    // navbar-menu
    document.getElementById('navbar-brand').textContent = 'КПВК';
    document.getElementById('nav-home').textContent = 'Басты бет';
    document.getElementById('nav-about').textContent = 'Біз туралы';
    document.getElementById('nav-programs').textContent = 'Оқу бағдарламалары';
    document.getElementById('nav-admission-requirements').textContent = 'Өтініш беру шарттары';
    document.getElementById('navbarDropdownMenuLink').textContent = 'Өтініш беру';
    document.getElementById('nav-admission-process').textContent = 'Өтініш беру процесі мен уақытша';
    document.getElementById('nav-financial-support').textContent = 'Қаржылық көмек';
    document.getElementById('nav-college-description').textContent = 'Колледж түсінігі';
    document.getElementById('nav-learning-facilities').textContent = 'Оқу бағдарламалары';
    document.getElementById('nav-student-life').textContent = 'Студенттік өмір';
    document.getElementById('nav-personal').textContent = 'Преподователь и персонал?';
    document.getElementById('nav-partner').textContent = 'Сотрудничество и партнерства';
    document.getElementById('nav-progres').textContent = 'Жетістіктер';
    document.getElementById('nav-contacts').textContent = 'Байланыстар';
    document.getElementById('nav-faq').textContent = 'Суреттік-жауаптар';

  }
}
function getSavedLanguage(){
  return localStorage.getItem('language');
}

function setLanguageOnLoad(){
  let savedLanguage = getSavedLanguage();
  if(savedLanguage){
    selectLanguage(savedLanguage);
  }
}
window.onload = setLanguageOnLoad;