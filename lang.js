const translations = {
  hr: {
    mainTitle: "Znanja i sposobnosti",
    name: "Marija Malešević",
    generalText1: "Komunikativna osoba angažovana za rad u računarstvu, s ciljem rješavanju tehničkih problema u praksi.",
    generalText2: "Posjedujem osnovna tehnička znanja i veliku želju za daljim usavršavanjem.",
    generalText3: "Spremna sam na timski rad, komunikaciju i kontinuiranu edukaciju, fleksibilnost i prilagodljivost u novom radu.",
    school: "Završena gimnazija (2021-2025), s završnim radom iz informatike i računarstva na temu \"Razvoj operativnih sistema od UNIX-a do modernih OS\". Kroz rad potkrepljeno znanje prvenstvemo procesorskoog rada, hardverskih komponenti - njihove evoluicje i funkcionalnosti.",
    softverTitle: "Rad u aplikativnom softveru:",
    os: "Rada u operativnim sisteimima (Windows 7/10)",
    office: "Rad sa osnovnim računarskim programima i paketima (MS Office)",
    db: "Znanje u bazama podataka, s iskustvom korištenja Microsoft Excel i SQL jezika",
    designTitle: "Iskustvo u dizajnu",
    designIntro: "Iskustvo u izradi funkcionalnih i estetski pogodnih elemenata za interakciju unutar korisničkog prostora, dizajn za web stranice i aplikacije što uključuje:",
    ux: "Razumijevanje principa UX dizajna sa fokusom na pristupacnost i jednostavnost korištenja",
    ui: "Primjena principa UI dizajna sa tipografijom i vizuelnom hijerarhijom.",
    tools: "Korištenje alata Figma, Adobe XD i Canva",
    course: "Položen kurs iz UI/UX dizajna (js guru, banjaluka) sa praktičnim zadacima",
    responsive: "Responsivni dizajn za različite uređaje i rezolucije.",
    langTitle: "Jezičke sposobnosti",
    en: "Engleski jezik – odlično znanje u govoru i pismu; aktivno korištenje u komunikaciji i radu s tehničkom dokumentacijom",
    it: "Italijanski jezik – osnovno znanje; razumijevanje svakodencnih izraza u .Trenutno u fazi daljnjeg usavršavanja kroz samostalno učenje.",
    birth: "Datum rođenja:",
    birthValue: "2. decembar 2006.",
    place: "Mjesto prebivališta:",
  placeValue: "Banja Luka, Bosna i Hercegovina",
    citizenship: "Državljanstvo:",
    citizenshipValue: "Bosansko i hrvatsko (dvojno)",
    email: "marijja06@gmail.com"
  },
  en: {
    mainTitle: "Skills and Abilities",
    name: "Marija Malešević",
    generalText1: "A communicative person engaged in IT, aiming to solve technical problems in practice.",
    generalText2: "I possess basic technical knowledge and a strong desire for further improvement.",
    generalText3: "I am ready for teamwork, communication, continuous education, flexibility, and adaptability in a new job.",
    school: "Graduated from high school (2021-2025), with a final thesis in informatics and computer science on the topic 'Development of operating systems from UNIX to modern OS'. Work experience includes knowledge of processor operations, hardware components – their evolution and functionality.",
    softverTitle: "Work in application software:",
    os: "Work in operating systems (Windows 7/10)",
    office: "Work with basic computer programs and packages (MS Office)",
    db: "Knowledge of databases, with experience using Microsoft Excel and SQL language",
    designTitle: "Design Experience",
    designIntro: "Experience in creating functional and aesthetically pleasing elements for user interaction, design for websites and applications, including:",
    ux: "Understanding UX design principles with a focus on accessibility and ease of use",
    ui: "Applying UI design principles with typography and visual hierarchy.",
    tools: "Use of tools: Figma, Adobe XD, and Canva",
    course: "Completed a UI/UX design course (JS Guru, Banja Luka) with practical assignments",
    responsive: "Responsive design for different devices and resolutions.",
    langTitle: "Language skills",
    en: "English – excellent spoken and written skills; active use in communication and working with technical documentation",
    it: "Italian – basic knowledge; understanding of everyday expressions. Currently improving through self-study.",
    birth: "Date of birth:",
    birthValue: "December 2, 2006",
    place: "Place of residence:",
    placeValue: "Banja Luka, Bosnia and Herzegovina",
    citizenship: "Citizenship:",
    citizenshipValue: "Bosnian and Croatian (dual)",
    email: "marijja06@gmail.com"
  }
};

const langSwitch = document.getElementById('lang-switch');
let currentLang = 'hr';

function setLanguage(lang) {
  document.querySelectorAll('[data-translate-key]').forEach(el => {
    const key = el.getAttribute('data-translate-key');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  langSwitch.textContent = lang === 'hr' ? 'EN' : 'HR';
  currentLang = lang;
}

langSwitch.addEventListener('click', () => {
  setLanguage(currentLang === 'hr' ? 'en' : 'hr');
});

// Set initial language
setLanguage(currentLang); 