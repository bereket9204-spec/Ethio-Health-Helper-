const GEMINI_API_KEY = "AIzaSyC5opHwo0vvW0O_3C330E33lrws5l2TeL4";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const translations = {
  en: {
    title: "Stop Guessing. Start Knowing.",
    subtitle: "Decoding complex medicine into simple human language.",
    placeholder: "Type a medical term or result here...",
    btn: "Decode the Truth",
    resultTitle: "🩺 The Simple Truth:",
    error: "Our connection to the lab is down. Try again shortly.",
    studyBtn: "🔥 The 5 Lethal Health Myths",
    backBtn: "🔙 Back to Decoder",
    lessons: [
      { title: "The 'Butter' Burn Trap", text: "<b>Stop putting butter on burns.</b> It traps heat and cooks your skin deeper. Use <b>cold running water</b>. It’s the only way to save the tissue." },
      { title: "Antibiotics are NOT Candy", text: "Taking antibiotics for a flu is like using a key on a wall. <b>Flu is a virus; antibiotics only kill bacteria.</b> You’re just making your body weaker for the next real fight." },
      { title: "The Silent Killer", text: "High Blood Pressure doesn't 'feel' like anything. <b>You can feel perfect while your heart is struggling.</b> Check it. Don't wait for a signal that might never come." },
      { title: "TID is a Clock, not a Choice", text: "When a doctor says TID (3 times a day), they mean <b>every 8 hours</b>. If you miss the window, the medicine stops fighting. Be the person who follows the clock." },
      { title: "Dehydration Kills Kids", text: "Water isn't enough for a child with diarrhea. They are losing salts. <b>ORS is the only medicine they need.</b> It's not just water; it's a life-saver." }
    ]
  },
  am: {
    title: "መገመትን ያቁሙ። እውነቱን ይወቁ።",
    subtitle: "ውስብስብ የህክምና ቃላትን ወደ ቀላል የሰው ቋንቋ እንቀይራለን።",
    placeholder: "የህክምና ቃሉን እዚህ ይጻፉ...",
    btn: "እውነቱን ይወቁ",
    resultTitle: "🩺 ቀላሉ እውነት፡",
    error: "ሲስተሙ ለጊዜው አልሰራም። እባክዎ ትንሽ ቆይተው ይሞክሩ።",
    studyBtn: "🔥 5ቱ አደገኛ የጤና ስህተቶች",
    backBtn: "🔙 ወደ መፍቻው ይመለሱ",
    lessons: [
      { title: "የቅቤ ወጥመድ", text: "<b>በተቃጠለ ቁስል ላይ ቅቤ መቀባት ያቁሙ።</b> ቅቤው ሙቀቱን በማፈን ቆዳዎ የበለጠ እንዲበላሽ ያደርጋል። <b>ቀዝቃዛ የሚፈስ ውሃ</b> ብቻ ይጠቀሙ።" },
      { title: "አንቲባዮቲክ ከረሜላ አይደለም", text: "ለጉንፋን አንቲባዮቲክ መውሰድ ግድግዳን በቁልፍ ለመክፈት መሞከር ነው። <b>ጉንፋን ቫይረስ ነው፤ አንቲባዮቲክ የሚገድለው ባክቴሪያን ብቻ ነው።</b>" },
      { title: "ዝምተኛው ገዳይ", text: "ከፍተኛ የደም ግፊት ምልክት የለውም። <b>ውስጥዎ እየተጎዳ እርስዎ ጤነኛ ሊመስልዎት ይችላል።</b> ቼክ ያድርጉ፤ ምልክት አይጠብቁ።" },
      { title: "TID ምርጫ አይደለም", text: "ዶክተር TID (በቀን 3 ጊዜ) ሲልዎ <b>በየ 8 ሰዓቱ</b> ማለት ነው። ሰዓቱን ካሳለፉ መድሃኒቱ ስራውን ያቆማል። በሰዓት መውሰድ ይልመዱ።" },
      { title: "የህጻናት ድርቀት", text: "ተቅማጥ ላለበት ህጻን ውሃ ብቻ አይበቃም። <b>ORS ብቸኛው መድሃኒት ነው።</b> ውሃ ብቻ ሳይሆን ህይወት አዳኝ ጨው ነው።" }
    ]
  },
  om: {
    title: "Tilmaama Dhiisaa. Dhugaa Hubadhaa.",
    subtitle: "Jechoota walxaxaa gara afaan salphaatti hiikna.",
    placeholder: "Jechocha asitti barreessi...",
    btn: "Dhugaa Hubadhu",
    resultTitle: "🩺 Dhugaa Salphaa:",
    error: "Gargaaraa fayyaa argachuu hin dandeenye. Maaloo booda yaali.",
    studyBtn: "🔥 Dogoggora Fayyaa 5n Nama Miidhan",
    backBtn: "🔙 Gara Hiikaatti",
    lessons: [
      { title: "Kkiyyo Dadaa", text: "<b>Bakka gubate irratti dadaa hin dibinaa.</b> Ho'a dhowbuun gogaa keessan caalaatti miidha. <b>Bishaan qabbanaawaa</b> qofa fayyadamaa." },
      { title: "Antibiyootikiin 'Candy' Mitii", text: "Utalluuf antibiyootikii fudhachuun kkiyyo dha. <b>Utalluun vaayirasii dha; antibiyootikiin ammoo baakteeriyaa qofa ajjeesa.</b>" },
      { title: "Ajjeesaa Cal-jechaa", text: "Dhiibbaan dhiigaa mallattoo hin qabu. <b>Hamma dhumni ga'utti miira gaarii qabaachuu dandeessa.</b> Mallattoo hin eeggatin, qorachiisi." },
      { title: "TID Filannoo Mitii", text: "Ogeessi fayyaa TID (guyyaatti si'a 3) yoo jedhu <b>sa'aatii 8 hundaatti</b> jechuu dha. Sa'aatii yoo dabarsite qorichi sun hojii dhaaba." },
      { title: "Akkaataa Mucaan Hin Miidhamne", text: "Mucaa garaa kaasaa qabuuf bishaan qofaan gahaa mitii. <b>ORS qoricha hunda caalu dha.</b> Kun bishaan qofa miti, lubbuu oolcha." }
    ]
  }
};

let currentLang = 'en';
let currentLesson = 0;

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Updating UI Texts
  document.getElementById('ui-title').innerText = t.title;
  document.getElementById('ui-subtitle').innerText = t.subtitle;
  document.getElementById('userInput').placeholder = t.placeholder;
  document.getElementById('analyzeBtn').innerText = t.btn;
  document.getElementById('ui-result-title').innerText = t.resultTitle;
  
  // Handling the Mode Toggle Button Text
  const isStudyVisible = !document.getElementById('studySection').classList.contains('hidden');
  document.getElementById('toggleStudy').innerText = isStudyVisible ? t.backBtn : t.studyBtn;
  
  // Button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `btn-${lang}`);
  });

  if (isStudyVisible) updateLesson();
}

function toggleMode() {
  const scanner = document.getElementById('scannerSection');
  const study = document.getElementById('studySection');
  const btn = document.getElementById('toggleStudy');
  
  if (study.classList.contains('hidden')) {
    scanner.classList.add('hidden');
    study.classList.remove('hidden');
    btn.innerText = translations[currentLang].backBtn;
    updateLesson();
  } else {
    scanner.classList.remove('hidden');
    study.classList.add('hidden');
    btn.innerText = translations[currentLang].studyBtn;
  }
}

function updateLesson() {
  const lesson = translations[currentLang].lessons[currentLesson];
  document.getElementById('course-title').innerText = lesson.title;
  document.getElementById('course-content').innerHTML = `<p>${lesson.text}</p>`;
  document.getElementById('ui-progress').style.width = `${((currentLesson + 1) / 5) * 100}%`;
}

function nextLesson() { if (currentLesson < 4) { currentLesson++; updateLesson(); } }
function prevLesson() { if (currentLesson > 0) { currentLesson--; updateLesson(); } }

document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const text = document.getElementById('userInput').value.trim();
    if (!text) return;
    
    const btn = document.getElementById('analyzeBtn');
    const resBox = document.getElementById('aiResponse');
    
    btn.disabled = true;
    document.getElementById('resultContainer').classList.remove('hidden');
    resBox.innerText = "Analyzing carefully...";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ 
                    parts: [{ 
                        text: `You are a medical clarifier. Someone is confused about this medical term or result: "${text}". 
                        Explain it in simple, calming language in ${currentLang}. 
                        Structure: 
                        1. Direct Meaning (No jargon).
                        2. The 'Next Step' (What to do).
                        3. A reassuring 'Unforgettable Truth'. 
                        Keep it under 100 words.` 
                    }] 
                }],
                safetySettings: [
                    { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_NONE" },
                    { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE" }
                ]
            })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content) {
            resBox.innerText = data.candidates[0].content.parts[0].text;
        } else {
            resBox.innerText = translations[currentLang].error;
        }
    } catch (e) {
        resBox.innerText = translations[currentLang].error;
    } finally {
        btn.disabled = false;
    }
});

// Default Initialization
window.onload = () => setLanguage('en');
