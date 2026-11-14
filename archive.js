const timeline = [
  ["1966", "Surveyor 1", "On June 2, America's first soft landing on the Moon leaves a quiet machine behind."],
  ["1967", "Surveyor 3", "On April 20, a small robot settles into the Ocean of Storms."],
  ["1969", "Apollo 11", "On July 20, the first people walk on the Moon and leave a mirror to answer lasers."],
  ["1969", "Apollo 12", "In November, astronauts visit Surveyor 3 and carry pieces of it home."],
  ["1971", "Moon buggy", "In July, Apollo 15 astronauts drive the first crewed rover across the Moon."],
  ["1972", "Apollo 17", "In December, the last humans to walk on the Moon head home."],
  ["1976", "Viking landers", "Viking 1 arrives July 20; Viking 2 follows on September 3."],
  ["1977", "Lights out on the Moon", "On September 30, NASA sends its Apollo science stations their final command."],
  ["1997", "Sojourner", "Pathfinder lands July 4, carrying the first rover to roll across Mars."],
  ["2004", "Spirit and Opportunity", "Twin rovers arrive in January, each built for a 90-day journey."],
  ["2008", "Phoenix", "On May 25, a lander reaches the Martian north and uncovers ice."],
  ["2009", "LRO and LCROSS", "LRO begins mapping the Moon June 18. On October 9, LCROSS strikes a crater in search of water."],
  ["2012", "Curiosity", "In August, a rocket-powered \"sky crane\" lowers Curiosity to Mars. GRAIL's twin probes finish their lunar mission December 17."],
  ["2018", "InSight", "InSight arrives November 26 to listen for marsquakes. Opportunity falls silent in a dust storm on June 10."],
  ["2019", "Opportunity", "On February 13, NASA declares the long-running rover's mission complete."],
  ["2021", "Perseverance and Ingenuity", "Both arrive February 18. Ingenuity makes its first flight April 19."],
  ["2022", "InSight", "On December 21, the lander's listening mission comes to an end."],
  ["2024", "Ingenuity", "After 72 flights, the little helicopter is retired January 25."],
  ["2026", "Artemis II", "From April 1–10, astronauts circle the Moon and return safely. Curiosity and Perseverance are still exploring Mars."]
];

const stories = [
  {
    id: "moon-story-1", world: "moon", status: "Mission complete", years: "1969–1972", where: "Six sites on the near side of the Moon", title: "Six launchpads beneath the stars",
    teaser: "The descent stages stayed behind, still standing at all six landing sites.",
    story: ["Every Apollo Lunar Module arrived in two pieces. Its lower half, the descent stage, held the landing engine and four sturdy legs. When it was time to go, the upper half lifted the astronauts back to lunar orbit. The lower half remained where it landed, a launchpad for a journey home. All six are still there, beside scattered tools, cameras and other gear."],
    science: "At these sites, scientists can see how a landing engine stirs lunar soil, and how patiently footprints and wheel tracks endure.",
    didYouKnow: "From orbit, cameras can still trace the landers, rover tracks and even the astronauts' old footpaths.", alt: "Apollo Lunar Module descent stage at a lunar landing site"
  },
  {
    id: "moon-story-2", world: "moon", status: "Mission complete", years: "1971–1972", where: "Apollo 15, 16 and 17 landing sites", title: "Three electric buggies, parked",
    teaser: "Together, the three rovers travelled roughly 90 km across the Moon.",
    story: ["The Lunar Roving Vehicle carried two astronauts over ground their boots could never reach. Folded like a picnic table, it rode on the side of the lander. It was designed to travel about 13 km/h (8 mph); all three rovers covered roughly 90 km together. At each mission's end, the crew parked its buggy nearby and flew home. On Apollo 17, a broken fender was patched with duct tape and maps. The fix held."],
    science: "The buggies carried crews farther from the lander, where they gathered rocks that helped scientists work out the Moon's age.",
    didYouKnow: "Their batteries could not be recharged. When the power ran out, each buggy's driving days were over.", alt: "Lunar Roving Vehicle parked on the Moon"
  },
  {
    id: "moon-story-3", world: "moon", status: "Still working", years: "1969–today", where: "Apollo 11, 14 and 15 sites", title: "The mirrors that still answer",
    teaser: "A beam leaves Earth, touches a mirror, and comes home with the Moon's distance inside it.",
    story: ["Apollo 11, 14 and 15 left small mirrors called retroreflectors on the Moon. They need no power and have no moving parts. From Earth, scientists send a laser pulse toward one; the mirror returns the light along its path. By timing that round trip, they measure the Moon's distance with great precision. More than fifty years later, observatories still listen for the returning light. The mirrors have faded a little, but they still answer."],
    science: "Those measurements show the Moon drifting away from Earth by about 3.8 cm (1.5 inches) each year. They have also helped test Einstein's theory of gravity.",
    didYouKnow: "A laser pulse makes its round trip to the Moon in about two and a half seconds.", alt: "Laser retroreflector left on the lunar surface"
  },
  {
    id: "moon-story-4", world: "moon", status: "Mission complete", years: "1969–1977", where: "Apollo 12, 14, 15, 16 and 17 sites (Apollo 11 left a smaller set)", title: "The day NASA turned off the Moon",
    teaser: "For years, small stations sent the Moon's tremors and warmth back to Earth.",
    story: ["Apollo crews left behind small science stations called ALSEPs. Their instruments included seismometers, which felt the ground tremble, and sent readings to Earth for years. Small nuclear power units carried them through the Moon's long, freezing nights. On September 30, 1977, NASA sent a final shut-down command, mostly to save money. Since then, the stations have kept their silence."],
    science: "Their seismometers recorded thousands of moonquakes and revealed a layered Moon: crust, mantle and a small core.",
    didYouKnow: "At two landing sites, heat probes measured warmth rising from the Moon's interior.", alt: "Apollo Lunar Surface Experiments Package science station"
  },
  {
    id: "moon-story-5", world: "moon", status: "Mission complete", years: "1967–1969", where: "Ocean of Storms", title: "The robot that got a visit",
    teaser: "Two and a half years after Surveyor landed, astronauts came back to see it.",
    story: ["Surveyor 3 touched down in the Moon's Ocean of Storms in April 1967. Two and a half years later, Pete Conrad and Alan Bean guided Apollo 12 to a landing about 180 metres (600 feet) away. They walked over, removed pieces of the little robot, including its camera, and carried them home."],
    science: "Back on Earth, engineers could study how metal, wires and glass weathered on the Moon. The visit also proved a spacecraft could land almost exactly where its planners aimed.",
    didYouKnow: "Surveyor 3 is the only spacecraft on the Moon that people have visited.", alt: "Surveyor 3 robot lander in the Ocean of Storms"
  },
  {
    id: "moon-story-6", world: "moon", status: "Crashed on purpose", years: "1969–2014", where: "Many places on the Moon", title: "A final experiment, written in impact",
    teaser: "Some missions end not with silence, but with one last question for the ground.",
    story: ["On the Moon, a mission's final act can be an impact. After Apollo 12–17, crews steered their ascent stages into the surface so seismometers could feel the shock and reveal what lay below. In 2009, LCROSS and its spent rocket stage struck a crater near the south pole; telescopes watched the plume for signs of water. In 2012, after mapping lunar gravity, GRAIL's twin probes Ebb and Flow were guided into a mountain near the north pole."],
    science: "LCROSS revealed water ice in permanently shadowed craters. GRAIL left behind the most detailed map of the Moon's gravity yet.",
    didYouKnow: "Students chose targets for GRAIL's cameras. Its final impact site was later named for astronaut Sally Ride.", alt: "Lunar spacecraft impact site studied for science"
  },
  {
    id: "moon-story-7", world: "moon", status: "Mission complete", years: "1969–1972", where: "Apollo sites", title: "Small keepsakes from Apollo",
    teaser: "A flag, a feather, a pair of golf balls: the Moon holds stories both large and small.",
    story: ["Beyond the great machines, Apollo crews left small traces of the people who travelled there.", "<ul><li><strong>Flags.</strong> Each of the six crews planted a U.S. flag. Orbiting cameras have photographed the shadows of flags still standing at most of the sites.</li><li><strong>The hammer and the feather.</strong> Apollo 15 commander David Scott dropped a hammer and a feather together in the airless Moon. They landed at the same moment. He left both behind.</li><li><strong>Golf balls.</strong> Apollo 14's Alan Shepard hit two golf balls with a club made from a tool handle.</li><li><strong>A tiny memorial.</strong> Apollo 15 left a small figure called <em>Fallen Astronaut</em>, honoring people who died exploring space.</li><li><strong>A message disc.</strong> Apollo 11 left a small silicon disc carrying goodwill messages from leaders of 73 countries.</li></ul>"],
    science: "Scott's hammer-and-feather drop brought Galileo's idea to the lunar surface: without air, objects fall at the same rate.",
    didYouKnow: "The crews also left about 96 bags of human waste. Some scientists hope to study them one day.", alt: "Apollo-era artifacts and astronaut footprints on the Moon"
  },
  {
    id: "moon-story-8", world: "moon", status: "Still working", years: "2009–today", where: "In orbit around the Moon", title: "A camera keeping watch",
    teaser: "From orbit, LRO can pick out a lander, a rover track, even a path across the dust.",
    story: ["The Lunar Reconnaissance Orbiter (LRO) left Earth in June 2009 for a mission planned to last about a year. It kept going. From orbit, its camera can spot objects as small as a car: old landers, rover tracks and the paths astronauts walked. Its detailed maps also help prepare the way for future missions."],
    science: "LRO's maps and images help choose landing sites for future crews and robots, while keeping an eye on the old Apollo sites.",
    didYouKnow: "One of LRO's instruments helped reveal cold, shadowed craters where water ice may be hiding.", alt: "Lunar Reconnaissance Orbiter mapping the Moon"
  },
  {
    id: "mars-story-1", world: "mars", status: "Mission complete", years: "1976–1982", where: "Chryse Planitia (Viking 1) and Utopia Planitia (Viking 2)", title: "The first postcards from Mars",
    teaser: "Viking 1 arrived on the seventh anniversary of Apollo 11's first steps on the Moon.",
    story: ["In 1976, two Viking landers became the first American spacecraft to work on Mars. Viking 1 touched down on July 20, exactly seven years after Apollo 11 landed on the Moon. Each carried a camera, a weather station and a tiny chemistry lab built to search for signs of life. Viking 2 worked until 1980; Viking 1 kept sending signals until late 1982."],
    science: "Viking revealed a cold, dusty world beneath a pink-orange sky. Its life tests returned puzzling results; most scientists read them as \"no life found.\" The question is still being studied.",
    didYouKnow: "For more than six years, Viking 1 sent home weather reports that helped scientists follow Mars' seasons.", alt: "Viking lander on the surface of Mars"
  },
  {
    id: "mars-story-2", world: "mars", status: "Mission complete", years: "1997", where: "Ares Vallis, Mars", title: "Sojourner's first small steps",
    teaser: "Built for a week, the microwave-sized rover explored for about 83 days.",
    story: ["Sojourner was the first rover to drive on Mars, no bigger than a microwave oven. It rode inside Pathfinder, which reached Mars on July 4, 1997, bouncing to a stop inside giant airbags. The rover was meant to last one week; it worked for about 83 days and travelled roughly 100 metres (330 feet). Pathfinder's final signal reached Earth on September 27, 1997."],
    science: "With a spectrometer, Sojourner read the chemistry of rocks, including two nicknamed Barnacle Bill and Yogi. It showed that small, lower-cost rovers could explore Mars.",
    didYouKnow: "Every Mars rover that followed began with a path Sojourner helped open.", alt: "Sojourner rover beside a Martian rock"
  },
  {
    id: "mars-story-3", world: "mars", status: "Mission complete", years: "2004–2010", where: "Gusev Crater, Mars", title: "The rover that got stuck and kept going",
    teaser: "When its wheels caught in soft sand, Spirit kept working as a science station.",
    story: ["Spirit arrived at Gusev Crater on January 4, 2004, built for about 90 days. It lasted nearly six years. In 2009, its wheels sank through a crust of soft sand. Engineers tried for months to free it, then Spirit stayed where it was and kept studying. Winter lowered the Sun and its power faded. Its last message reached Earth on March 22, 2010."],
    science: "A damaged wheel dragged through the soil and uncovered bright, silica-rich material. On Earth, similar deposits form around hot springs, hinting that ancient Mars once held warm, wet places.",
    didYouKnow: "Now and then, dust-devil winds swept Spirit's solar panels clean and gave the rover a little more power.", alt: "Spirit rover exploring Gusev Crater on Mars"
  },
  {
    id: "mars-story-4", world: "mars", status: "Mission complete", years: "2004–2019", where: "Meridiani Planum, Mars", title: "The 90-day rover that ran for 14 years",
    teaser: "A 90-day mission became a 14-year journey of roughly 45 km (28 miles).",
    story: ["Opportunity landed on January 25, 2004, with a plan to work for 90 sols, or Mars days. It kept going for about 14 years, driving roughly 45 km (28 miles), farther than a marathon. In 2018, a vast dust storm hid the Sun and starved the rover's solar panels of light. Its last message came June 10. After many attempts to reach it, NASA closed the mission on February 13, 2019."],
    science: "Opportunity found tiny hematite pebbles nicknamed \"blueberries\" and layers of rock shaped by salty water: strong evidence that liquid water once soaked this region.",
    didYouKnow: "Opportunity set the record for the longest rover drive on another world, until later explorers began to challenge it.", alt: "Opportunity rover tracks across the Martian surface"
  },
  {
    id: "mars-story-5", world: "mars", status: "Mission complete", years: "2008", where: "Northern plains near the Martian north pole", title: "The lander that touched Martian ice",
    teaser: "Phoenix scratched the soil and found bright ice that slowly vanished in the thin air.",
    story: ["Phoenix settled near Mars' north pole on May 25, 2008. It could not roam, but its robotic arm could reach into the soil. In one shallow trench, it uncovered bright pieces that faded away over a few days: water ice evaporating into the thin air. Phoenix was built for a short summer. As the season darkened and cooled, its solar panels could no longer keep it awake. Its final signal came November 2, 2008."],
    science: "Phoenix confirmed water ice just beneath the Martian arctic soil. It also found salts and watched snow fall from clouds.",
    didYouKnow: "A tiny lab aboard Phoenix heated soil samples to learn what they were made of.", alt: "Phoenix lander trench revealing water ice on Mars"
  },
  {
    id: "mars-story-6", world: "mars", status: "Mission complete", years: "2018–2022", where: "Elysium Planitia, Mars", title: "The lander that listened to Mars",
    teaser: "For years, InSight listened as Mars trembled beneath its quiet sky.",
    story: ["InSight arrived November 26, 2018, and placed a seismometer directly on the ground, a kind of stethoscope for Mars. It recorded more than 1,300 marsquakes and the impacts of falling meteoroids. Dust slowly settled across its solar panels and its power dwindled. NASA closed the mission on December 21, 2022."],
    science: "InSight's readings revealed the thickness of Mars' crust, showed that its core is liquid and measured its size.",
    didYouKnow: "A small dome shielded the seismometer from the wind that crossed the landing site.", alt: "InSight lander and its seismometer on Mars"
  },
  {
    id: "mars-story-7", world: "mars", status: "Mission complete", years: "2021–2024", where: "Jezero Crater, Mars", title: "The helicopter that flew 72 times",
    teaser: "Five test flights became 72, and Mars briefly had a helicopter in its sky.",
    story: ["Ingenuity rode beneath Perseverance, expected to make just five flights. On April 19, 2021, it lifted about 3 metres (10 feet) above Mars for 39 seconds: the first powered, controlled flight on another planet. It flew 72 times. A hard landing on January 18, 2024, damaged its rotor blades, and NASA retired it on January 25. Ingenuity now rests in Jezero Crater."],
    science: "Ingenuity showed that flight is possible in Mars' very thin air. Future missions may send flying scouts ahead.",
    didYouKnow: "A tiny piece of fabric from the Wright brothers' first airplane travelled with Ingenuity. A student chose the helicopter's name in a NASA contest.", alt: "Ingenuity helicopter resting on the Martian surface"
  },
  {
    id: "mars-story-8", world: "mars", status: "Still working", years: "2012–today", where: "Gale Crater, Mars", title: "Still driving, more than a decade later",
    teaser: "Curiosity is still climbing Mount Sharp, reading Mars one rock layer at a time.",
    story: ["Curiosity is about the size of a small car. In August 2012, a rocket-powered \"sky crane\" lowered it onto Mars. Today it climbs Mount Sharp, a tall stack of rock in Gale Crater. Each layer holds a page from a different chapter of Martian history. The rover keeps driving and drilling, even with a worn, cracked wheel."],
    science: "Curiosity found that Gale Crater once held a lake with ingredients that could support microbial life. It also found organic molecules in ancient rock.",
    didYouKnow: "A 12-year-old student gave Curiosity its name in a NASA contest.", alt: "Curiosity rover on Mount Sharp in Gale Crater"
  },
  {
    id: "mars-story-9", world: "mars", status: "Still working", years: "2021–today", where: "Jezero Crater, Mars", title: "The rover collecting samples for the future",
    teaser: "Perseverance gathers sealed samples, small pieces of Mars meant for a journey home.",
    story: ["Perseverance landed inside an ancient lake bed on February 18, 2021. It searches for rocks that might preserve signs of ancient microbial life and seals selected samples in tubes. Some wait in a backup depot on the crater floor for a future mission to bring them to Earth. By late August 2026, the rover had driven about 45 km."],
    science: "In 2024, patterns in a rock called Cheyava Falls raised a question: could they be signs of past life, or did chemistry alone make them? The answer is still open. In September 2026, NASA reported that rocks at Jezero's edge record at least three episodes of water, including hot groundwater.",
    didYouKnow: "A student chose Perseverance's name. Its MOXIE instrument also made oxygen from Mars' carbon-dioxide air, a step toward supporting future astronauts.", alt: "Perseverance rover exploring Jezero Crater"
  }
];

const questions = [
  { question: "Which piece of Apollo hardware still answers scientists today?", options: ["The Lunar Roving Vehicle", "The laser mirrors", "The flags", "The descent stage"], answer: 1, explanation: "With no power or moving parts, the mirrors still send laser light back to Earth." },
  { question: "Why did the Apollo rovers stay on the Moon?", options: ["They were broken", "Astronauts forgot", "Bringing them back would cost too much fuel", "The Moon wanted them"], answer: 2, explanation: "Every kilogram on the return trip would have needed more rocket fuel to launch." },
  { question: "What finally stopped Opportunity?", options: ["A crash", "A giant dust storm blocking sunlight", "It ran out of fuel", "Aliens"], answer: 1, explanation: "A huge dust storm covered Mars and blocked the sunlight that powered the rover." },
  { question: "Which craft first made a powered flight on another planet?", options: ["Sojourner", "Phoenix", "Ingenuity", "InSight"], answer: 2, explanation: "Ingenuity lifted into the thin Martian air for the first powered, controlled flight on another planet." },
  { question: "How many times did Ingenuity fly?", options: ["5", "19", "42", "72"], answer: 3, explanation: "Its planned five test flights became 72 flights over Jezero Crater." },
  { question: "What did InSight listen for?", options: ["Marsquakes", "Martian music", "Thunder", "Volcano eruptions"], answer: 0, explanation: "Its seismometer recorded more than 1,300 marsquakes, along with impacts from falling meteoroids." },
  { question: "Which rover is still exploring Mars?", options: ["Spirit", "Opportunity", "Sojourner", "Curiosity"], answer: 3, explanation: "Curiosity is still driving and drilling among the layers of Mount Sharp." },
  { question: "What does \"crashed on purpose\" mean?", options: ["It was an accident", "Mission planners guided it into the surface for science or safety", "It was stolen", "It got lost"], answer: 1, explanation: "A planned impact can be a mission's final experiment, or a way to keep a world safe." }
];

const glossary = [
  ["Ascent stage", "The upper half of the Apollo lander, carrying the astronauts back to lunar orbit."],
  ["Biosignature", "A clue that could have been made by living things, though nature can sometimes make similar signs without life."],
  ["Crater", "A bowl-shaped hollow, often carved by an impact or a volcano."],
  ["Descent stage", "The lander's lower half: its legs, landing engine and the part left on the surface."],
  ["Lander", "A spacecraft built to settle onto the surface of another world."],
  ["Marsquake", "A tremor beneath Mars, like an earthquake beneath our feet."],
  ["Orbiter", "A spacecraft that follows a path around a planet or moon."],
  ["Regolith", "The loose dust and broken rock spread across the Moon's surface."],
  ["Retroreflector", "A mirror that sends light back toward the place it came from."],
  ["Rover", "A robot explorer with wheels, made to travel across another world."],
  ["Seismometer", "An instrument that feels tiny movements and tremors in the ground."],
  ["Sol", "One Martian day: about 24 hours and 40 minutes, a little longer than a day on Earth."],
  ["Sky crane", "A rocket-powered platform that lowers a rover to the ground on cables."]
];

const faqs = [
  ["Is all this stuff just space junk?", "It can look that way from far away, but each piece belongs to a mission story. These machines were left where they worked, and their data still teaches us. Scientists and historians also want the oldest sites treated with care."],
  ["Can I see the Apollo landing sites with a telescope?", "Not from Earth: even the largest telescopes cannot resolve objects that small. But orbiters such as LRO have photographed the sites up close, and those images are online."],
  ["Are any of these machines still working?", "Yes. The Apollo laser mirrors still return light, and Curiosity, Perseverance and the Lunar Reconnaissance Orbiter continue their work. The other machines here have finished their missions."],
  ["Will anyone go pick them up?", "No collection mission is planned now. Some pieces may be studied or protected in the future; for the moment, they remain part of the worlds they explored."],
  ["How long do signals take to reach Mars?", "About 3 to 22 minutes, depending on where Earth and Mars are in their orbits. By the time a reply arrives, a rover may need to make a few decisions on its own."],
  ["How do NASA rovers get their names?", "Students have named many explorers through NASA contests, including Curiosity, Ingenuity and Perseverance."],
  ["Will people return to the Moon?", "Artemis II flew around the Moon in April 2026. NASA's future landing plans are still being scheduled; its Artemis page carries the latest dates."]
];

const timelineTrack = document.querySelector("#timeline-track");
if (timelineTrack) {
  timelineTrack.innerHTML = timeline.map(([year, title, description]) => `
    <article class="timeline-item"><span class="timeline-year">${year}</span><h3>${title}</h3><p>${description}</p></article>
  `).join("");
}

function renderStory(story) {
  const paragraphs = story.story.map((paragraph) => paragraph.startsWith("<ul>") ? paragraph : `<p>${paragraph}</p>`).join("");
  return `
    <details class="story-card" id="${story.id}">
      <summary>
        <div class="story-info">
          <span class="story-status" data-status="${story.status}">${story.status}</span>
          <div class="story-meta"><span>${story.years}</span><span>${story.where}</span></div>
          <h3>${story.title}</h3><p class="story-teaser">${story.teaser}</p>
        </div>
        <figure class="story-art" data-world="${story.world}"><img alt="${story.alt}" loading="lazy" decoding="async"><i aria-hidden="true"></i><figcaption>NASA IMAGE / LOADING</figcaption></figure>
      </summary>
      <div class="story-detail"><h4>The story</h4>${paragraphs}<h4>What it taught us</h4><p>${story.science}</p><h4>A small surprise</h4><p class="did-you-know">${story.didYouKnow}</p></div>
    </details>`;
}

const moonStories = document.querySelector("#moon-stories");
const marsStories = document.querySelector("#mars-stories");
if (moonStories) moonStories.innerHTML = stories.filter((story) => story.world === "moon").map(renderStory).join("");
if (marsStories) marsStories.innerHTML = stories.filter((story) => story.world === "mars").map(renderStory).join("");

const photoQueriesByStory = {
  "moon-story-1": "Apollo landing sites lunar module descent stage NASA",
  "moon-story-2": "Apollo 15 lunar rover vehicle surface",
  "moon-story-3": "Apollo 15 lunar laser ranging retroreflector",
  "moon-story-4": "Apollo Lunar Surface Experiments Package ALSEP Moon",
  "moon-story-5": "Apollo 12 Surveyor 3 Moon NASA",
  "moon-story-6": "LCROSS Moon impact crater NASA",
  "moon-story-7": "Apollo astronauts lunar surface Moon mission NASA",
  "moon-story-8": "Lunar Reconnaissance Orbiter Apollo landing site",
  "mars-story-1": "Viking 1 Mars lander surface NASA",
  "mars-story-2": "Sojourner Pathfinder Mars rover NASA",
  "mars-story-3": "Spirit Mars rover panorama NASA",
  "mars-story-4": "Opportunity Mars rover panorama NASA",
  "mars-story-5": "Phoenix Mars lander ice trench NASA",
  "mars-story-6": "InSight Mars lander selfie NASA",
  "mars-story-7": "Ingenuity helicopter Mars flight NASA",
  "mars-story-8": "Curiosity rover Mars selfie NASA",
  "mars-story-9": "Perseverance Jezero crater rover NASA"
};

async function populateStoryPhotos() {
  if (!moonStories && !marsStories) return;
  const visibleStories = stories.filter((story) => document.getElementById(story.id));
  await Promise.all(visibleStories.map(async (story) => {
    const endpoint = `https://images-api.nasa.gov/search?q=${encodeURIComponent(photoQueriesByStory[story.id])}&media_type=image&page_size=8`;
    try {
      const response = await fetch(endpoint);
      if (!response.ok) return;
      const results = await response.json();
      const images = results.collection.items.filter((item) => item.links?.some((link) => link.rel === "preview"));
      const card = document.getElementById(story.id);
      const image = card?.querySelector(".story-art img");
      const asset = images[0];
      if (!image || !asset) return;
      const preview = asset.links.find((link) => link.rel === "preview");
      const metadata = asset.data[0];
      image.alt = metadata.title || story.alt;
      image.addEventListener("load", () => image.closest(".story-art").classList.add("has-photo"), { once: true });
      image.addEventListener("error", () => image.closest(".story-art").classList.add("photo-failed"), { once: true });
      image.src = preview.href;
      const center = metadata.center ? `NASA/${metadata.center}` : "NASA Image and Video Library";
      card.querySelector(".story-art figcaption").textContent = `Image: ${center}`;
    } catch {
      document.getElementById(story.id)?.querySelector(".story-art")?.classList.add("photo-failed");
    }
  }));
}

populateStoryPhotos();

function renderAccordionItems(target, entries) {
  const container = document.querySelector(target);
  if (!container) return;
  container.innerHTML = entries.map(([term, definition]) => `
    <details><summary>${term}</summary><p>${definition}</p></details>
  `).join("");
}

renderAccordionItems("#glossary-list", glossary);
renderAccordionItems("#faq-list", faqs);

const quizConsole = document.querySelector("#quiz-console");
let questionIndex = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const current = questions[questionIndex];
  answered = false;
  quizConsole.innerHTML = `
    <div class="quiz-head"><span>MISSION KNOWLEDGE / ${String(questionIndex + 1).padStart(2, "0")} OF ${questions.length}</span><span class="quiz-progress">SCORE ${score}</span></div>
    <p class="quiz-question">${current.question}</p>
    <div class="quiz-options">${current.options.map((option, index) => `<button class="quiz-option" type="button" data-answer="${index}">${String.fromCharCode(97 + index)}) ${option}</button>`).join("")}</div>
    <div class="quiz-feedback" id="quiz-feedback">The signal is yours.</div>
    <div class="quiz-controls"><button type="button" id="quiz-next" disabled>${questionIndex === questions.length - 1 ? "See score" : "Next question"} →</button></div>
  `;

  quizConsole.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const selected = Number(button.dataset.answer);
      const isCorrect = selected === current.answer;
      if (isCorrect) score += 1;
      quizConsole.querySelectorAll(".quiz-option").forEach((option) => {
        option.disabled = true;
        if (Number(option.dataset.answer) === current.answer) option.classList.add("correct");
        else if (option === button) option.classList.add("incorrect");
      });
      quizConsole.querySelector("#quiz-feedback").innerHTML = `<strong>${isCorrect ? "Correct." : "Not quite."}</strong>${current.explanation}`;
      quizConsole.querySelector(".quiz-progress").textContent = `SCORE ${score}`;
      quizConsole.querySelector("#quiz-next").disabled = false;
    });
  });

  quizConsole.querySelector("#quiz-next").addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex < questions.length) renderQuestion();
    else renderResults();
  });
}

function renderResults() {
  const message = score <= 3
    ? "Every expedition begins with a question. Wander the archive, then try again."
    : score <= 6
      ? "A steady hand at mission control. You know your way around the solar system."
      : "Mission commander! You know the stories these worlds keep.";
  quizConsole.innerHTML = `<div class="quiz-results"><p>MISSION SCORE</p><strong>${score} / ${questions.length}</strong><p>${message}</p><button type="button" id="quiz-restart">Run the quiz again</button></div>`;
  quizConsole.querySelector("#quiz-restart").addEventListener("click", () => {
    questionIndex = 0;
    score = 0;
    renderQuestion();
  });
}

if (quizConsole) renderQuestion();

const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");

function closeNavigation() {
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
  primaryNav.classList.remove("is-open");
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const currentPage = window.location.pathname.split("/").pop() || "home.html";
primaryNav.querySelectorAll("[data-page]").forEach((link) => {
  link.classList.toggle("active", link.dataset.page === currentPage);
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function followStoryFragment() {
  if (!window.location.hash) return;
  const story = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (!story?.matches(".story-card")) return;
  story.open = true;
  const previousScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, Math.max(0, story.getBoundingClientRect().top + window.scrollY - 90));
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
}

if (window.location.hash) window.setTimeout(followStoryFragment, 0);
window.addEventListener("hashchange", followStoryFragment);

const revealElements = document.querySelectorAll(".reveal");
if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  revealElements.forEach((element) => revealObserver.observe(element));
}
const canvas = document.querySelector("#cosmos");
const context = canvas.getContext("2d");
const fullEffectsMode = document.body.dataset.effectMode === "full";
const stars = Array.from({ length: 150 }, () => ({
  x: Math.random(), y: Math.random(), size: Math.random() * 1.4 + .25,
  phase: Math.random() * Math.PI * 2, speed: Math.random() * .8 + .25
}));
let viewportWidth = 0;
let viewportHeight = 0;
let scrollAmount = 0;
let animationFrame = 0;

function resizeCanvas() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  canvas.width = Math.round(viewportWidth * pixelRatio);
  canvas.height = Math.round(viewportHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  drawCosmos(performance.now());
}

function clamp(value, minimum = 0, maximum = 1) {
  return Math.max(minimum, Math.min(maximum, value));
}

function drawPlanet(x, y, radius, color, alpha, residue, time) {
  if (alpha <= .005 && residue <= .005) return;
  context.save();
  context.globalAlpha = alpha;
  const glow = context.createRadialGradient(x, y, radius * .2, x, y, radius * 1.55);
  glow.addColorStop(0, `${color}55`);
  glow.addColorStop(1, `${color}00`);
  context.fillStyle = glow;
  context.beginPath();
  context.arc(x, y, radius * 1.55, 0, Math.PI * 2);
  context.fill();
  const surface = context.createRadialGradient(x - radius * .32, y - radius * .34, radius * .07, x, y, radius);
  surface.addColorStop(0, color);
  surface.addColorStop(.72, color);
  surface.addColorStop(1, "#121613");
  context.fillStyle = surface;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
  context.restore();

  if (residue > .01) {
    const pieces = 150;
    for (let index = 0; index < pieces; index += 1) {
      const angle = (index / pieces) * Math.PI * 2 + index * 2.4;
      const drift = radius * (.75 + ((index * 17) % 100) / 42) + (prefersReducedMotion ? 0 : (time * .006 + index * 9) % (radius * .35));
      const particleX = x + Math.cos(angle) * drift;
      const particleY = y + Math.sin(angle) * drift;
      if (particleX < -10 || particleX > viewportWidth + 10 || particleY < -10 || particleY > viewportHeight + 10) continue;
      context.globalAlpha = residue * (.35 + ((index * 13) % 65) / 100);
      context.fillStyle = index % 4 === 0 ? "#c7ff76" : color;
      context.fillRect(particleX, particleY, index % 9 === 0 ? 3 : 2, index % 9 === 0 ? 3 : 2);
    }
    context.globalAlpha = 1;
  }
}

function drawCosmos(time = 0) {
  if (!context || !viewportWidth || !viewportHeight) return;
  context.clearRect(0, 0, viewportWidth, viewportHeight);
  stars.forEach((star) => {
    const twinkle = prefersReducedMotion ? .72 : .4 + ((Math.sin(time * .001 * star.speed + star.phase) + 1) * .3);
    context.globalAlpha = twinkle;
    context.fillStyle = star.size > 1.2 ? "#d9e5d8" : "#9da99d";
    context.fillRect(star.x * viewportWidth, star.y * viewportHeight, star.size, star.size);
  });
  context.globalAlpha = 1;

  if (!prefersReducedMotion) {
    [1.7, 5.8, 9.3].forEach((offset, index) => {
      const phase = (time / 1000 + offset) % 12;
      if (phase > .72) return;
      const progress = phase / .72;
      const startX = viewportWidth * (.2 + index * .29) + progress * viewportWidth * .32;
      const startY = viewportHeight * (.08 + index * .12) + progress * viewportHeight * .19;
      const tail = Math.min(58, viewportWidth * .09);
      const streak = context.createLinearGradient(startX - tail, startY - tail * .55, startX, startY);
      streak.addColorStop(0, "#c8d1c600");
      streak.addColorStop(1, "#d6e3d6cc");
      context.globalAlpha = 1 - progress;
      context.strokeStyle = streak;
      context.lineWidth = 1.3;
      context.beginPath();
      context.moveTo(startX - tail, startY - tail * .55);
      context.lineTo(startX, startY);
      context.stroke();
    });
    context.globalAlpha = 1;
  }

  if (!prefersReducedMotion && fullEffectsMode) {
    const approach = clamp(scrollAmount * 1.45);
    const dissolve = clamp((scrollAmount - .72) / .25);
    const visibility = clamp(scrollAmount * 2.8) * (1 - dissolve);
    const planetBase = Math.min(viewportWidth, viewportHeight) * .09;
    drawPlanet(viewportWidth * .74, viewportHeight * (.92 - approach * .48), planetBase * (.4 + approach * 1.5), "#c8d1c6", visibility * .88, clamp((scrollAmount - .48) / .52), time);
    drawPlanet(viewportWidth * .2, viewportHeight * (1.04 - approach * .68), planetBase * (.28 + approach * 1.12), "#c9875c", visibility * .7, clamp((scrollAmount - .55) / .45), time);
  } else if (!prefersReducedMotion) {
    const moonProgress = clamp((scrollAmount - .02) / .42);
    const marsProgress = clamp((scrollAmount - .31) / .42);
    const moonAlpha = Math.sin(moonProgress * Math.PI) * .23;
    const marsAlpha = Math.sin(marsProgress * Math.PI) * .17;
    const moonX = viewportWidth * .82;
    const moonY = viewportHeight * (1.1 - moonProgress * 1.3);
    const marsX = viewportWidth * .14;
    const marsY = viewportHeight * (1.12 - marsProgress * 1.3);
    drawPlanet(moonX, moonY, Math.min(viewportWidth, viewportHeight) * .105, "#b9c2b8", moonAlpha, clamp((moonProgress - .72) / .28), time);
    drawPlanet(marsX, marsY, Math.min(viewportWidth, viewportHeight) * .075, "#c9875c", marsAlpha, clamp((marsProgress - .72) / .28), time);
  }
  context.globalAlpha = 1;
  if (!prefersReducedMotion) animationFrame = requestAnimationFrame(drawCosmos);
}

function updateScroll() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollAmount = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  document.body.style.setProperty("--effect-progress", scrollAmount.toFixed(3));
  if (prefersReducedMotion) drawCosmos(performance.now());
}

window.addEventListener("resize", resizeCanvas, { passive: true });
window.addEventListener("scroll", updateScroll, { passive: true });
resizeCanvas();
updateScroll();
if (!prefersReducedMotion) animationFrame = requestAnimationFrame(drawCosmos);

const heroImage = document.querySelector("#hero-image");
const heroFrame = document.querySelector("#hero-image-frame");
const imageCaption = document.querySelector(".hero-window figcaption span:last-child");
if (heroImage && heroFrame && imageCaption) {
  heroImage.addEventListener("load", () => {
    heroFrame.classList.add("has-image");
    imageCaption.textContent = "Image: NASA Image and Video Library";
  });

  fetch("https://images-api.nasa.gov/search?q=Apollo%2017%20lunar%20surface%20lunar%20module&media_type=image&page_size=8")
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("Image feed unavailable")))
    .then((results) => {
      const asset = results.collection.items.find((item) => item.links?.some((link) => link.rel === "preview"));
      const preview = asset?.links?.find((link) => link.rel === "preview");
      if (!preview) return;
      heroImage.alt = asset.data[0].title || "Apollo-era hardware on the lunar surface";
      heroImage.src = preview.href;
    })
    .catch(() => {});
}