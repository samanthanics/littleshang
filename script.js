// =====================================
// CONFIG
// =====================================
const START_DATE = new Date("2024-04-10");
const YOUR_NAME = "SC";
const STORAGE_KEY = "shangLettersStateV4";
const SECRET_PASSWORD = "littleshang";

// =====================================
// LOADER
// =====================================
const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");

if (loader && loaderProgress) {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    loaderProgress.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => loader.classList.add("hide"), 350);
    }
  }, 28);
}

// =====================================
// FALLING ITEMS
// =====================================
const fallingContainer = document.getElementById("falling-container");
const fallingItems = ["💖", "✨", "🍌", "💛", "🌸", "💌"];

function createFallingItem() {
  if (!fallingContainer) return;
  const item = document.createElement("div");
  item.className = "fall";
  item.textContent = fallingItems[Math.floor(Math.random() * fallingItems.length)];
  item.style.left = Math.random() * 100 + "vw";
  item.style.animationDuration = (6 + Math.random() * 6) + "s";
  item.style.fontSize = (14 + Math.random() * 18) + "px";
  fallingContainer.appendChild(item);

  setTimeout(() => item.remove(), 13000);
}
setInterval(createFallingItem, 700);

// =====================================
// POPUP
// =====================================
const welcomeOverlay = document.getElementById("welcomeOverlay");
const openSiteBtn = document.getElementById("openSiteBtn");
const welcomeText = document.getElementById("welcomeText");

const popupMessages = [
  "I made this little place for you so you can come back here whenever you miss me, need comfort, or just want to feel loved for a while.",
  "This website is basically SC showing clingy side.",
  "Hi my little Shang. Just in case you forgot, I love you very much 💖",
  "Certified little Shang website. Banana approved 🍌"
];

if (welcomeText) {
  welcomeText.textContent = popupMessages[Math.floor(Math.random() * popupMessages.length)];
}
if (openSiteBtn && welcomeOverlay) {
  openSiteBtn.addEventListener("click", () => {
    welcomeOverlay.style.display = "none";
  });
}

// =====================================
// TYPED HERO LINE
// =====================================
const typedLine = document.getElementById("typedLine");
const typedText = "made with love, missing you, and a few bananas 🍌";
let typedIndex = 0;

function typeHeroLine() {
  if (!typedLine) return;
  if (typedIndex < typedText.length) {
    typedLine.textContent += typedText.charAt(typedIndex);
    typedIndex++;
    setTimeout(typeHeroLine, 55);
  }
}
setTimeout(typeHeroLine, 650);

// =====================================
// DAYS COUNTER
// =====================================
const daysCounter = document.getElementById("daysCounter");
if (daysCounter) {
  const today = new Date();
  const diffTime = today - START_DATE;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  daysCounter.textContent = `${diffDays} days`;
}

// =====================================
// FLIP CARDS
// =====================================
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

// =====================================
// LETTERS DATA
// based on the uploaded envelope website
// =====================================
const letters = [
  {
    id: "sad",
    emoji: "🌧️",
    wax: "🤍",
    label: "Open When",
    title: "You're Sad",
    teaser: "For the heavy-hearted moments",
    heading: "When the world feels too heavy…",
    quote: "It's okay to not be okay. Feel it all.",
    body: [
      "Hey, my love. I wish I could be right there with you right now, wrapping my arms around you and telling you it's going to be okay. But since I can't, I hope these words find you gently.",
      "I need you to know that every single feeling you're carrying right now is valid. You don't have to be okay. You don't have to pretend. You're allowed to cry, to feel, to just be.",
      "Remember when we laughed so hard we couldn't breathe? That smile of yours is the one I fall in love with every single day. And it will come back, I promise.",
      "You are loved far more than you know. By me, completely and always. This sadness is just a visitor, Shang. It won't stay forever. And when it leaves, I'll still be here, holding your hand through every part of it."
    ],
    ps: "P.S. I'm only ever a message away. Please reach out whenever you need. 🤍",
    sign: `All my love, ${YOUR_NAME}`
  },
  {
    id: "miss",
    emoji: "🌙",
    wax: "💜",
    label: "Open When",
    title: "You Miss Me",
    teaser: "Distance means so little when you mean so much",
    heading: "Hey, I've been thinking of you too…",
    quote: "Somewhere, I'm thinking of you too.",
    body: [
      "If you're opening this, I'm guessing there's a little ache in your chest, the one that only happens when you miss someone. I feel that ache too, more than you know.",
      "No matter what I'm doing, some part of me is always thinking of you. The way you laugh. The way you talk. The little things only you do. You stay in my head in the softest way possible.",
      "I know distance can feel heavy sometimes, but I hope you remember that missing each other is just proof that what we have matters.",
      "Until I can be with you again, keep this little reminder close. I love you, and I'm thinking of you too."
    ],
    ps: "P.S. I can't wait to be with you again. 🌙",
    sign: `Always yours, ${YOUR_NAME}`
  },
  {
    id: "angry",
    emoji: "🌊",
    wax: "❤️",
    label: "Open When",
    title: "You're Angry at Me",
    teaser: "For the moments when I messed up",
    heading: "I hear you, and I’m sorry",
    quote: "Being angry doesn't mean the love is gone.",
    body: [
      "If you're reading this because you're mad at me, I want to start by saying this clearly. Your feelings matter to me.",
      "I know there are moments I get things wrong. Moments where I hurt you, disappoint you, or make you feel unheard, and I'm sorry for those things.",
      "Even if we're upset, even if things feel tense, I still love you. That doesn't disappear just because we're having a bad moment.",
      "When you're ready, I want to listen, understand better, and do better. I never want your hurt to feel small to me."
    ],
    ps: "P.S. Take your time if you need it. I’ll still be here.",
    sign: `Still yours, ${YOUR_NAME}`
  },
  {
    id: "overthink",
    emoji: "🌀",
    wax: "💙",
    label: "Open When",
    title: "You're Overthinking",
    teaser: "For the nights when your mind won't slow down",
    heading: "Come here for a second",
    quote: "Not every thought deserves to be believed.",
    body: [
      "I know your mind right now, it's spinning, running through every scenario, every 'what if.' It's exhausting, isn't it? I see it, and I want you to know you're safe.",
      "The story your brain is writing right now? It's just that, a story. Not the truth. The truth is that I love you. The truth is that you are not too much, you are not a burden, and nothing has changed.",
      "Take three slow breaths. In… and out. In… and out. In… and out. You don't have to solve everything tonight.",
      "If something is genuinely worrying you, please tell me. I would rather you say the scary thought out loud than suffer through it alone. We talk. That's what we do. I've got you, always."
    ],
    ps: "P.S. Your mind deserves rest too, baby.",
    sign: `Right here, ${YOUR_NAME}`
  },
  {
    id: "reassure",
    emoji: "🕯️",
    wax: "🩷",
    label: "Open When",
    title: "You Need Reassurance",
    teaser: "For the moments you need to hear it again",
    heading: "Let me remind you of a few things",
    quote: "You are loved, chosen, and not going anywhere.",
    body: [
      "You are loved. Not just on the easy days, not just when everything feels perfect. You are loved as you are.",
      "I chose you, Shang. Not a perfect version of you. I chose all of you.",
      "You are not too needy for wanting reassurance. If you need comfort from me, I want you to ask for it.",
      "I’m here, and I’m still choosing you."
    ],
    ps: "P.S. You can ask me for reassurance as many times as you need.",
    sign: `Forever yours, ${YOUR_NAME}`
  },
  {
    id: "motivation",
    emoji: "🌟",
    wax: "💛",
    label: "Open When",
    title: "You Need Motivation",
    teaser: "For the days when you feel tired and stuck",
    heading: "I need you to remember who you are",
    quote: "You've already done hard things. This is one more.",
    body: [
      "Whatever it is you're facing right now, I need you to hear this. You are capable. Not just a little, genuinely, deeply, remarkably capable.",
      "I've watched you do hard things. I've seen you show up even when you didn't feel like it, push through when it would've been easier to stop, and grow in ways that leave me in awe. That's all you, Shang.",
      "Your goals are not too big. Your dreams are not silly. And the path you're on? It's going somewhere beautiful, even when it doesn't feel like it.",
      "I believe in you with my whole chest. Now go show the world what you're made of. I'll be cheering the loudest. ✨"
    ],
    ps: "P.S. And when you get there, and you will, I want to celebrate every bit of it with you. 🌟",
    sign: `Your #1 fan, ${YOUR_NAME}`
  },
  {
    id: "smile",
    emoji: "😄",
    wax: "🌈",
    label: "Open When",
    title: "You Need a Smile",
    teaser: "Warning, silliness ahead",
    heading: "Okay I need you to smile RIGHT NOW",
    quote: "Your laugh is literally my favourite sound.",
    body: [
      "Seriously. Stop what you're doing. I'm demanding a smile. This is not a request.",
      "Remember our most embarrassing moment together? Yeah. You're welcome for that memory. ",
      "And here's a truth. You have one of those laughs that makes other people start laughing too, even when they don't know what's funny. It's an actual superpower. I could listen to it forever.",
      "There it is. That smile.  That's the one. That's my favourite thing in the world."
    ],
    ps: "P.S. I love you even when you're weird. Especially when you're weirder than me. 🌈",
    sign: `Your silly person, ${YOUR_NAME}`
  },
  {
    id: "sleep",
    emoji: "🌠",
    wax: "🌙",
    label: "Open When",
    title: "You Can't Sleep",
    teaser: "A quiet letter for a quiet night",
    heading: "Hey, night owl. Let's slow things down.",
    quote: "Under these same stars, I'm thinking of you.",
    body: [
      "The world is very still right now, and so am I, thinking of you, somewhere under these same stars.",
      "Close your eyes for a moment. Unclench your jaw. Let your shoulders drop. You don't have to carry the weight of tomorrow tonight.",
      "Picture somewhere that makes you feel peaceful. Maybe it's a place we've been together. Maybe it's the feeling of being wrapped up warm. Sit there for a little while.",
      "You've done enough today. You've been enough today. Tomorrow can wait. Right now, all you have to do is rest.",
      "Goodnight, my love. I hope you drift off to somewhere beautiful. 🌙"
    ],
    ps: "P.S. If you're still awake in an hour, call me. I'll stay up with you.",
    sign: `Dreaming of you, ${YOUR_NAME}`,
    starry: true
  },
  {
    id: "love",
    emoji: "💗",
    wax: "💌",
    label: "Open When",
    title: "You Want to Know How Much I Love You",
    teaser: "If you ever need a reminder",
    heading: "How much do I love you",
    quote: "More than yesterday, less than tomorrow.",
    body: [
      "I love you in the quiet moments, the comfortable silences, the mundane Tuesday afternoons, the ordinary days that somehow feel extraordinary because you're in them.",
      "I love the way your mind works. How passionate you get about things that matter to you. How deeply you feel everything. How strong you are, even when you don't feel it.",
      "I love that you exist. Out of everywhere and everything, you ended up here, and so did I, and somehow we found each other. I think about that and it genuinely amazes me.",
      "I love you more than yesterday and less than tomorrow. I love you in a way that has no end point, no expiry, no conditions. Just fully, and always.",
      "That's how much I love you, my little Shang. And I'll spend as long as you'll let me showing you. 💗"
    ],
    ps: "P.S. In case you were wondering, yes, it's a lot.",
    sign: `Completely yours, ${YOUR_NAME}`
  },
  {
    id: "hardday",
    emoji: "🍵",
    wax: "🤎",
    label: "Open When",
    title: "You've Had a Hard Day",
    teaser: "For the exhausting days",
    heading: "The day is over now, baby",
    quote: "You got through it. That matters.",
    body: [
      "Whatever today handed you, I'm proud of you for getting through it. You showed up, even when it was hard, and that matters more than you think.",
      "You don't have to have anything figured out tonight. You don't have to plan tomorrow or fix what went wrong. Right now you just get to rest.",
      "Take off whatever you're still carrying from today, the meeting, the comment that stung, the thing you're replaying in your head. Set it down. It can wait until morning.",
      "I'm proud of you for getting through today. I'm proud of you on the easy days too, but especially today."
    ],
    ps: "P.S. Buy some ice cream. You've earned it. 🤎",
    sign: `Cheering you on, ${YOUR_NAME}`
  },
  {
    id: "proud",
    emoji: "🎉",
    wax: "🧡",
    label: "Open When",
    title: "You Did Something Great",
    teaser: "This one is a celebration",
    heading: "Look at you go!",
    quote: "I hope you're as proud of yourself as I am of you.",
    body: [
      "I don't know exactly what you did today, but I know you did it well, because that's who you are.",
      "I want you to actually sit with this feeling for a second. Not brush it off, not immediately think about the next thing. Just let yourself feel proud.",
      "You work so hard, often without anyone clapping for it. So consider this me clapping, loudly, for whatever you just accomplished.",
      "I love watching you become who you're becoming. Keep going. I'm so proud of you."
    ],
    ps: "P.S. Tell me about it. I want every detail. 🎉",
    sign: `Your loudest cheerleader, ${YOUR_NAME}`
  },
  {
    id: "secret",
    emoji: "🔮",
    wax: "🔮",
    label: "Open When",
    title: "You've Read Every Letter",
    teaser: "You found the secret one ✨",
    heading: "You found it. 🔮",
    quote: "The best love stories are the ones we keep writing.",
    body: [
      "You really did read all of them, didn't you? That's so you, thorough, curious, and secretly a little sentimental. I love that about you.",
      "If you've made it here, I want you to know something. The fact that you opened each one of these, that you let yourself feel all of those things, that takes courage. You're braver than you think.",
      "This is my secret letter. The one I didn't write for a specific feeling. I wrote it just to say thank you. Thank you for being someone worth writing letters for. Thank you for letting me love you.",
      "I don't know exactly what our future looks like, but I know I want you in it. Every version of it. The ordinary days, the hard ones, the magical ones, all of it.",
      "You are the best thing. Full stop. And I would do every single thing again, every step that led me to you, without a moment's hesitation."
    ],
    ps: "P.S. You can start from the beginning whenever you need to. I'll always be here.",
    sign: `Endlessly yours, ${YOUR_NAME}`,
    secret: true
  }
];

// =====================================
// LETTER STATE
// =====================================
const opened = new Set();
const openDates = {};
let lastFocusedEl = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    (data.opened || []).forEach(id => opened.add(id));
    Object.assign(openDates, data.dates || {});
  } catch (e) {
    console.warn("Could not load saved state", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      opened: [...opened],
      dates: openDates
    }));
  } catch (e) {
    console.warn("Could not save state", e);
  }
}

function markOpened(id) {
  if (!opened.has(id)) {
    opened.add(id);
    openDates[id] = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
    updateCard(id);
    updateProgress();
    saveState();
    if (allNonSecretOpened()) unlockSecretEnvelope();
  }
}

function allNonSecretOpened() {
  return letters.filter(l => !l.secret).every(l => opened.has(l.id));
}

loadState();

// =====================================
// BUILD ENVELOPES
// =====================================
const envelopesGrid = document.getElementById("envelopesGrid");
const lettersRemaining = document.getElementById("lettersRemaining");

if (envelopesGrid) {
  letters.forEach((letter) => {
    const isSecret = !!letter.secret;
    const isLockedNow = isSecret && !allNonSecretOpened();

    const card = document.createElement("div");
    card.className = "envelope-card";
    card.dataset.id = letter.id;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `${letter.label} ${letter.title}. ${letter.teaser}`);

    card.innerHTML = `
      <div class="envelope-inner">
        <div class="env-letter-peek" aria-hidden="true"></div>
        <div class="env-flap-css" aria-hidden="true"></div>
        <div class="env-opened-stamp">opened ✓</div>
        <div class="env-body">
          <div class="env-wax">${letter.wax}</div>
          <p class="env-label">${letter.label}</p>
          <h3 class="env-title">${letter.title}</h3>
          <p class="env-teaser" id="teaser-${letter.id}">${letter.teaser}</p>
          <span class="env-click-hint" id="hint-${letter.id}">tap to open ✉️</span>
        </div>
        ${isLockedNow ? `
          <div class="env-locked" id="lock-${letter.id}">
            <span class="env-locked-icon">🔒</span>
            <p class="env-locked-text">Read all other letters first to unlock this one</p>
          </div>
        ` : ""}
      </div>
    `;

    const triggerOpen = () => {
      if (isSecret && !allNonSecretOpened()) return;
      spawnSparks(card);
      card.classList.add("is-opening");
      setTimeout(() => {
        openLetter(letter.id, card);
        card.classList.remove("is-opening");
      }, 300);
    };

    card.addEventListener("click", triggerOpen);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        triggerOpen();
      }
    });

    envelopesGrid.appendChild(card);
  });

  letters.forEach(letter => {
    if (opened.has(letter.id)) updateCard(letter.id);
  });
  updateProgress();
}

function updateCard(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (!card) return;
  card.classList.add("is-opened");

  const hintEl = document.getElementById(`hint-${id}`);
  if (hintEl) hintEl.textContent = "read again ✉️";

  const teaserEl = document.getElementById(`teaser-${id}`);
  if (teaserEl && openDates[id]) teaserEl.textContent = `opened ${openDates[id]}`;
}

function updateProgress() {
  if (!lettersRemaining) return;
  const total = letters.filter(l => !l.secret).length;
  const count = [...opened].filter(id => !letters.find(l => l.id === id)?.secret).length;
  const remaining = total - count;

  lettersRemaining.textContent = remaining <= 0
    ? "You have opened every letter 🌸"
    : `${remaining} letter${remaining === 1 ? "" : "s"} still waiting for you ✦`;
}

// =====================================
// MODAL
// =====================================
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const letterPaper = document.getElementById("letterPaper");
const letterDate = document.getElementById("letterDate");
const letterEmoji = document.getElementById("letterEmoji");
const modalHeading = document.getElementById("modalHeading");
const letterBody = document.getElementById("letterBody");
const letterSign = document.getElementById("letterSign");
const letterPs = document.getElementById("letterPs");

function openLetter(id, triggerEl) {
  const letter = letters.find(l => l.id === id);
  if (!letter || !modal) return;

  lastFocusedEl = triggerEl || document.activeElement;

  letterDate.textContent = openDates[id] ? `opened ${openDates[id]}` : "";
  letterEmoji.textContent = letter.emoji;
  modalHeading.textContent = letter.heading;

  let bodyHTML = "";
  if (letter.quote) bodyHTML += `<div class="letter-quote">${letter.quote}</div>`;
  bodyHTML += letter.body.map(p => `<p>${p}</p>`).join("");
  letterBody.innerHTML = bodyHTML;

  letterSign.textContent = letter.sign;
  letterPs.textContent = letter.ps;

  if (letter.starry) {
    letterPaper.style.background = "linear-gradient(160deg,#0d0b1e,#1a1040)";
    letterPaper.style.color = "#f5f0ff";
  } else {
    letterPaper.style.background = "#fffdfd";
    letterPaper.style.color = "";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  markOpened(id);
}

function closeLetter() {
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
  if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
    lastFocusedEl.focus();
  }
}

if (modalClose) modalClose.addEventListener("click", closeLetter);
if (modal) {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeLetter();
  });
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLetter();
});

function unlockSecretEnvelope() {
  const lock = document.getElementById("lock-secret");
  if (lock) {
    lock.style.opacity = "0";
    setTimeout(() => lock.remove(), 350);
  }
}

// =====================================
// SPARKS
// =====================================
function spawnSparks(card) {
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const emojis = ["💌", "✨", "🌸", "💗", "⭐"];

  for (let i = 0; i < 5; i++) {
    const s = document.createElement("div");
    s.className = "spark";
    s.textContent = emojis[i % emojis.length];

    const angle = (i / 5) * Math.PI * 2;
    const dist = 60 + Math.random() * 50;

    s.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    s.style.setProperty("--dy", Math.sin(angle) * dist + "px");
    s.style.left = cx + "px";
    s.style.top = cy + "px";

    document.body.appendChild(s);
    setTimeout(() => s.remove(), 900);
  }
}

// =====================================
// GALLERY LIGHTBOX
// =====================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".photo-card img").forEach(img => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

if (lightbox && lightboxClose) {
  lightboxClose.addEventListener("click", () => lightbox.classList.remove("show"));
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.classList.remove("show");
  });
}

// =====================================
// SECRET PAGE GATE
// =====================================
const unlockSecretBtn = document.getElementById("unlockSecretBtn");
const secretPassword = document.getElementById("secretPassword");
const secretMessage = document.getElementById("secretMessage");

if (unlockSecretBtn && secretPassword && secretMessage) {
  unlockSecretBtn.addEventListener("click", () => {
    const value = secretPassword.value.trim().toLowerCase();

    if (value === SECRET_PASSWORD) {
      secretMessage.textContent = "Unlocked 💛 taking you there...";
      setTimeout(() => {
        window.location.href = "secret.html";
      }, 700);
    } else {
      secretMessage.textContent = "Wrong password baby 😭 try again";
    }
  });
}

// =====================================
// REVEAL ON SCROLL
// =====================================
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));