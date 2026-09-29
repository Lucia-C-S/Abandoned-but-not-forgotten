const timeline = [
  ["1966", "Surveyor 1", "First American soft landing on the Moon (June 2)."],
  ["1967", "Surveyor 3", "A robot lander arrives at the Ocean of Storms (April 20)."],
  ["1969", "Apollo 11", "First humans on the Moon (July 20). They leave a laser mirror behind."],
  ["1969", "Apollo 12", "Astronauts walk to Surveyor 3 and bring parts of it home (November)."],
  ["1971", "Moon buggy", "First rover with people aboard drives on the Moon (Apollo 15, July)."],
  ["1972", "Apollo 17", "The last humans to walk on the Moon (December)."],
  ["1976", "Viking landers", "Viking 1 (July 20) and Viking 2 (September 3) touch down on Mars."],
  ["1977", "Lights out on the Moon", "NASA switches off the Apollo science stations (September 30)."],
  ["1997", "Sojourner", "The first rover on Mars (Pathfinder landed July 4)."],
  ["2004", "Spirit and Opportunity", "Twin rovers land in January and are built for 90 days."],
  ["2008", "Phoenix", "A lander digs up Martian ice (landed May 25)."],
  ["2009", "LRO and LCROSS", "A Moon-mapping orbiter launches (June 18). LCROSS hits a crater to look for water (October 9)."],
  ["2012", "Curiosity", "Lowered onto Mars by a rocket-powered \"sky crane\" (August). GRAIL's twin probes end their mission on the Moon (December 17)."],
  ["2018", "InSight", "A Mars lander with a seismometer arrives (November 26). Opportunity goes silent in a dust storm (June 10)."],
  ["2019", "Opportunity", "Declared complete (February 13)."],
  ["2021", "Perseverance and Ingenuity", "Land on Mars (February 18). The helicopter's first flight is on April 19."],
  ["2022", "InSight", "Mission ends (December 21)."],
  ["2024", "Ingenuity", "Retired after 72 flights (January 25)."],
  ["2026", "Artemis II", "Astronauts fly around the Moon and return safely (April 1–10). Curiosity and Perseverance are still exploring Mars."]
];

const stories = [
  {
    id: "moon-story-1", world: "moon", status: "Mission complete", years: "1969–1972", where: "Six sites on the near side of the Moon", title: "Six parking lots on the Moon",
    teaser: "The bottom part stayed behind and became a launch pad.",
    story: ["Each Apollo Lunar Module had two parts. The bottom part, the descent stage, had the legs and the landing engine. When the astronauts were ready to leave, the top part, the ascent stage, blasted off and carried them back to lunar orbit. The bottom part stayed behind and became a launch pad. It is still there at all six landing sites, along with tools, cameras and other gear."],
    science: "Studying these sites showed scientists how landing engines disturb lunar soil and how long footprints and wheel tracks can last.",
    didYouKnow: "Orbiting cameras can photograph the descent stages, the rover tracks and even the astronauts' footpaths from far above.", alt: "Apollo Lunar Module descent stage at a lunar landing site"
  },
  {
    id: "moon-story-2", world: "moon", status: "Mission complete", years: "1971–1972", where: "Apollo 15, 16 and 17 landing sites", title: "Three Moon buggies with no keys",
    teaser: "The three rovers together drove roughly 90 km on the Moon.",
    story: ["The Lunar Roving Vehicle was an electric car for two astronauts. It folded up like a picnic table and was carried on the side of the lander. It was designed for about 13 km/h (8 mph), and the three rovers together drove roughly 90 km on the Moon. Then the astronauts drove them a short distance away, parked them and flew home. On Apollo 17, a fender broke. The astronauts fixed it with duct tape and some maps, and it worked."],
    science: "The rovers let crews collect rocks far from the lander, including samples that helped date the Moon.",
    didYouKnow: "The batteries were not rechargeable, so once they ran out the rovers could never be used again.", alt: "Lunar Roving Vehicle parked on the Moon"
  },
  {
    id: "moon-story-3", world: "moon", status: "Still working", years: "1969–today", where: "Apollo 11, 14 and 15 sites", title: "The mirrors that still answer",
    teaser: "Scientists on Earth fire a laser beam at one, and the mirror bounces the light straight back.",
    story: ["The Apollo 11, 14 and 15 crews left special mirrors on the Moon called retroreflectors. They have no power and no moving parts. Scientists on Earth fire a laser beam at one, and the mirror bounces the light straight back. By timing the trip, they can measure the distance to the Moon very precisely. More than fifty years later, observatories still do this. The mirrors have faded a little over the years, but they still work."],
    science: "These measurements showed that the Moon is slowly drifting away from Earth, about 3.8 cm (1.5 inches) a year, and they have been used to test Einstein's theory of gravity.",
    didYouKnow: "Laser light takes about two and a half seconds to make the round trip to the Moon and back.", alt: "Laser retroreflector left on the lunar surface"
  },
  {
    id: "moon-story-4", world: "moon", status: "Mission complete", years: "1969–1977", where: "Apollo 12, 14, 15, 16 and 17 sites (Apollo 11 left a smaller set)", title: "The day NASA turned off the Moon",
    teaser: "Small nuclear power units kept them running through the long, freezing lunar nights.",
    story: ["Apollo crews set up small science stations called ALSEPs (Apollo Lunar Surface Experiments Packages). Each had instruments such as seismometers, which feel shaking, and it sent its data to Earth for years. Small nuclear power units kept them running through the long, freezing lunar nights. On September 30, 1977, NASA sent the command to shut them down, mostly to save money. The stations have been silent ever since."],
    science: "The seismometers recorded thousands of moonquakes, and they revealed that the Moon has layers: a crust, a mantle and a small core.",
    didYouKnow: "Heat probes at two landing sites measured how much warmth flows out of the Moon's interior.", alt: "Apollo Lunar Surface Experiments Package science station"
  },
  {
    id: "moon-story-5", world: "moon", status: "Mission complete", years: "1967–1969", where: "Ocean of Storms", title: "The robot that got a visit",
    teaser: "Apollo 12 astronauts landed about 180 metres (600 feet) away, on purpose.",
    story: ["Surveyor 3 was a robot lander that reached the Moon in April 1967. Two and a half years later, Apollo 12 astronauts Pete Conrad and Alan Bean landed about 180 metres (600 feet) away, on purpose. They walked over, cut off pieces such as its camera, and brought them back to Earth."],
    science: "Engineers could finally study how metal, wires and glass behave after years on the Moon. The visit also proved a spacecraft could land precisely where planners aimed.",
    didYouKnow: "Surveyor 3 is the only spacecraft on the Moon that has been visited by people.", alt: "Surveyor 3 robot lander in the Ocean of Storms"
  },
  {
    id: "moon-story-6", world: "moon", status: "Crashed on purpose", years: "1969–2014", where: "Many places on the Moon", title: "Ending with a bang, for science",
    teaser: "Sometimes the last chapter is a planned crash.",
    story: ["Ending a mission on the Moon does not always mean going quiet. Sometimes the last chapter is a planned crash. After Apollo 12–17 crews left, their ascent stages were steered into the Moon so seismometers could record the impact and reveal what lay underground. In 2009, the LCROSS probe and its spent rocket stage hit a crater near the Moon's south pole so telescopes could look at the debris for water. In 2012, the twin GRAIL probes, Ebb and Flow, finished mapping the Moon's gravity and were guided into a mountain near its north pole."],
    science: "The LCROSS plume showed water ice hiding in permanently shadowed craters. GRAIL produced the most detailed gravity map of the Moon yet.",
    didYouKnow: "GRAIL carried cameras that let students choose photo targets. The crash site was later named for astronaut Sally Ride.", alt: "Lunar spacecraft impact site studied for science"
  },
  {
    id: "moon-story-7", world: "moon", status: "Mission complete", years: "1969–1972", where: "Apollo sites", title: "Small things left behind",
    teaser: "Besides big machines, Apollo crews left small things that tell a human story.",
    story: ["Besides big machines, Apollo crews left small things that tell a human story.", "<ul><li><strong>Flags.</strong> Each of the six crews planted a U.S. flag. Orbiting cameras have photographed the shadows of flags still standing at most of the sites.</li><li><strong>The hammer and the feather.</strong> Apollo 15's commander, David Scott, dropped a hammer and a feather together in the airless Moon. They landed at the same moment. He left both behind.</li><li><strong>Golf balls.</strong> Apollo 14's Alan Shepard hit two golf balls using a club rigged from a tool handle.</li><li><strong>A tiny memorial.</strong> Apollo 15 left a small figure called <em>Fallen Astronaut</em> to honor people who died exploring space.</li><li><strong>A message disc.</strong> Apollo 11 left a small silicon disc carrying goodwill messages from leaders of 73 countries.</li></ul>"],
    science: "The hammer and feather gave a live test of an idea from Galileo: without air, all objects fall at the same rate.",
    didYouKnow: "Apollo crews also left about 96 bags of human waste. Some scientists would like to study them.", alt: "Apollo-era artifacts and astronaut footprints on the Moon"
  },
  {
    id: "moon-story-8", world: "moon", status: "Still working", years: "2009–today", where: "In orbit around the Moon", title: "The camera that photographs the old hardware",
    teaser: "Its camera can see objects on the ground as small as a car.",
    story: ["The Lunar Reconnaissance Orbiter (LRO) launched in June 2009 and was meant to work for about a year. It has kept going far longer. Its camera can see objects on the ground as small as a car, which is enough to spot old landers, rover tracks and even the paths astronauts walked. It also mapped the Moon in fine detail for future missions."],
    science: "LRO's maps and photos are used to plan where the next crews and robots will land, and to track how the old sites are changing.",
    didYouKnow: "An instrument on LRO helped find cold, dark craters where water ice may be hiding.", alt: "Lunar Reconnaissance Orbiter mapping the Moon"
  },
  {
    id: "mars-story-1", world: "mars", status: "Mission complete", years: "1976–1982", where: "Chryse Planitia (Viking 1) and Utopia Planitia (Viking 2)", title: "The first postcards from the surface",
    teaser: "Viking 1 touched down on July 20, 1976, exactly seven years after Apollo 11 landed on the Moon.",
    story: ["The two Viking landers were the first American spacecraft to work on the surface of Mars. Viking 1 touched down on July 20, 1976, exactly seven years after Apollo 11 landed on the Moon. Each lander carried a camera, a weather station and a tiny chemistry lab built to look for signs of life. Viking 2 worked until 1980, and Viking 1 kept going until late 1982."],
    science: "Viking showed that Mars is a cold, dusty desert with a pinkish-orange sky. Its life-detection tests gave puzzling results that most scientists read as \"no life found.\" That question is still studied today.",
    didYouKnow: "Viking 1 sent back weather reports for more than six years, which helped scientists see how Mars' seasons work.", alt: "Viking lander on the surface of Mars"
  },
  {
    id: "mars-story-2", world: "mars", status: "Mission complete", years: "1997", where: "Ares Vallis, Mars", title: "The microwave-oven-sized pioneer",
    teaser: "It was designed to work for one week. It worked for about 83 days.",
    story: ["Sojourner was the first rover to drive on Mars. It was about the size of a microwave oven and rode inside the Pathfinder lander, which reached Mars on July 4, 1997, by bouncing to a stop inside giant airbags. It was designed to work for one week. It worked for about 83 days and drove only about 100 metres (330 feet). Pathfinder's last signal came on September 27, 1997."],
    science: "Sojourner used a tool called a spectrometer to identify the chemistry of rocks, including two named Barnacle Bill and Yogi. It proved that small, cheap rovers could work on Mars.",
    didYouKnow: "Every rover since Sojourner has followed its example.", alt: "Sojourner rover beside a Martian rock"
  },
  {
    id: "mars-story-3", world: "mars", status: "Mission complete", years: "2004–2010", where: "Gusev Crater, Mars", title: "The rover that got stuck and kept going",
    teaser: "Spirit became a fixed science station after getting stuck in soft sand.",
    story: ["Spirit landed on January 4, 2004, and was built to last about 90 days. It worked for about six years. In 2009, its wheels broke through a crust of soft sand and it got stuck. Engineers tried for months to free it and could not. Spirit became a fixed science station. Winter came, the sun's angle dropped, and its last message reached Earth on March 22, 2010."],
    science: "Spirit dragged a damaged wheel through the soil and uncovered bright, silica-rich material. On Earth, this kind of material forms around hot springs, a hint that ancient Mars had warm, wet places.",
    didYouKnow: "Dust-devil winds sometimes cleaned Spirit's solar panels and gave it extra power.", alt: "Spirit rover exploring Gusev Crater on Mars"
  },
  {
    id: "mars-story-4", world: "mars", status: "Mission complete", years: "2004–2019", where: "Meridiani Planum, Mars", title: "The 90-day rover that ran for 14 years",
    teaser: "Opportunity drove about 45 km (28 miles), more than a marathon.",
    story: ["Opportunity landed on January 25, 2004, planned for 90 sols (Mars days). It kept going for about 14 years and drove about 45 km (28 miles), more than a marathon. In 2018, a huge dust storm covered Mars and blocked the sunlight that powered the rover. Its last message came on June 10, 2018. After many attempts to reach it, NASA declared the mission complete on February 13, 2019."],
    science: "Opportunity found tiny round pebbles of hematite, nicknamed \"blueberries,\" and layered rocks shaped by salty water. It was strong evidence that liquid water once soaked this region.",
    didYouKnow: "The mission set a record for the longest distance driven on another world by any rover, at least until other rovers challenged it.", alt: "Opportunity rover tracks across the Martian surface"
  },
  {
    id: "mars-story-5", world: "mars", status: "Mission complete", years: "2008", where: "Northern plains near the Martian north pole", title: "The lander that touched Martian ice",
    teaser: "Its robotic arm dug a shallow trench and uncovered bright chunks that vanished a few days later.",
    story: ["Phoenix landed on May 25, 2008, near the north pole. It could not roam, but it had a robotic arm. The arm dug a shallow trench and uncovered bright chunks that vanished a few days later. They were water ice, evaporating in the thin air. Phoenix was designed for a short summer mission. As the Martian arctic grew colder and darker, its solar panels could no longer keep it alive. Its last signal came on November 2, 2008."],
    science: "Phoenix confirmed that there is water ice just under the soil in the Martian arctic. It also found salts in the soil and watched snow fall from clouds.",
    didYouKnow: "Phoenix carried a tiny lab that \"cooked\" soil samples to see what they were made of.", alt: "Phoenix lander trench revealing water ice on Mars"
  },
  {
    id: "mars-story-6", world: "mars", status: "Mission complete", years: "2018–2022", where: "Elysium Planitia, Mars", title: "The lander that listened to Mars",
    teaser: "It recorded more than 1,300 marsquakes and even the impacts of falling meteoroids.",
    story: ["InSight landed on November 26, 2018, and set a seismometer directly on the ground. It was Mars' first \"stethoscope.\" It recorded more than 1,300 marsquakes and even the impacts of falling meteoroids. Over time, dust settled on its solar panels, its power dropped, and NASA ended the mission on December 21, 2022."],
    science: "InSight's data revealed the thickness of Mars' crust, showed that its core is liquid, and measured how big the core is.",
    didYouKnow: "Wind was a problem for the seismometer, so the team covered it with a small dome to shield it.", alt: "InSight lander and its seismometer on Mars"
  },
  {
    id: "mars-story-7", world: "mars", status: "Mission complete", years: "2021–2024", where: "Jezero Crater, Mars", title: "The helicopter that flew 72 times",
    teaser: "It made the first powered, controlled flight on another planet.",
    story: ["Ingenuity hitched a ride under Perseverance and was supposed to make five flights. On April 19, 2021, it made the first powered, controlled flight on another planet, hovering about 3 metres (10 feet) up for 39 seconds. It flew 72 times in total. On January 18, 2024, it damaged its rotor blades on landing, and NASA retired it on January 25, 2024. It is now parked in Jezero Crater."],
    science: "Ingenuity proved that flying on Mars is possible, even though the air is very thin. Future missions may include flying scouts.",
    didYouKnow: "A tiny piece of fabric from the Wright brothers' first airplane rode with Ingenuity. A student named it in NASA's naming contest.", alt: "Ingenuity helicopter resting on the Martian surface"
  },
  {
    id: "mars-story-8", world: "mars", status: "Still working", years: "2012–today", where: "Gale Crater, Mars", title: "Still driving, more than a decade later",
    teaser: "It now climbs Mount Sharp, a tall mountain of layered rock in the middle of Gale Crater.",
    story: ["Curiosity is as big as a small car. It landed in August 2012, lowered from a rocket-powered \"sky crane.\" It now climbs Mount Sharp, a tall mountain of layered rock in the middle of Gale Crater. The layers are like pages of a history book, with each one recording a different time on Mars. It keeps driving and drilling, even with a worn and cracked wheel."],
    science: "Curiosity showed that Gale Crater once held a lake with the right ingredients for microbial life to live, and it also found organic molecules in ancient rock.",
    didYouKnow: "A 12-year-old student named Curiosity in a NASA contest.", alt: "Curiosity rover on Mount Sharp in Gale Crater"
  },
  {
    id: "mars-story-9", world: "mars", status: "Still working", years: "2021–today", where: "Jezero Crater, Mars", title: "The rover collecting samples for the future",
    teaser: "Its main job is to find rocks that might hold signs of ancient microbial life and to store them in sealed tubes.",
    story: ["Perseverance landed on February 18, 2021, inside an ancient lake bed. Its main job is to find rocks that might hold signs of ancient microbial life and to store them in sealed tubes. Some tubes are left in a depot on the crater floor as a backup, waiting for a future mission to bring them to Earth. As of late August 2026, Perseverance had driven about 45 km."],
    science: "In 2024, a rock called Cheyava Falls showed patterns that could be a possible sign of past life, or could be caused by chemistry alone. That question is still open. In September 2026, NASA also reported that rocks at Jezero's edge show at least three separate episodes of water, including hot groundwater.",
    didYouKnow: "A student named it. Its instrument MOXIE also made oxygen from Mars' carbon-dioxide air, a step toward supporting future astronauts.", alt: "Perseverance rover exploring Jezero Crater"
  }
];

const questions = [
  { question: "Which piece of Apollo hardware is still used by scientists today?", options: ["The Lunar Roving Vehicle", "The laser mirrors", "The flags", "The descent stage"], answer: 1, explanation: "The mirrors have no power and still bounce laser light back to Earth." },
  { question: "Why did NASA leave the Apollo rovers on the Moon?", options: ["They were broken", "Astronauts forgot", "Bringing them back would cost too much fuel", "The Moon wanted them"], answer: 2, explanation: "Every extra kilogram carried back to Earth would need a lot more rocket to launch in the first place." },
  { question: "What ended Opportunity's mission?", options: ["A crash", "A giant dust storm blocking sunlight", "It ran out of fuel", "Aliens"], answer: 1, explanation: "A huge dust storm covered Mars and blocked the sunlight that powered the rover." },
  { question: "Which Mars spacecraft made the first powered flight on another planet?", options: ["Sojourner", "Phoenix", "Ingenuity", "InSight"], answer: 2, explanation: "Ingenuity made the first powered, controlled flight on another planet." },
  { question: "How many flights did Ingenuity make?", options: ["5", "19", "42", "72"], answer: 3, explanation: "It flew 72 times in total." },
  { question: "What did InSight's seismometer record?", options: ["Marsquakes", "Martian music", "Thunder", "Volcano eruptions"], answer: 0, explanation: "It recorded more than 1,300 marsquakes and even the impacts of falling meteoroids." },
  { question: "Which of these rovers is still working today?", options: ["Spirit", "Opportunity", "Sojourner", "Curiosity"], answer: 3, explanation: "Curiosity keeps driving and drilling on Mars." },
  { question: "What does \"crashed on purpose\" mean for a spacecraft?", options: ["It was an accident", "Mission planners guided it into the surface for science or safety", "It was stolen", "It got lost"], answer: 1, explanation: "Sometimes the last chapter is a planned crash for science or safety." }
];

const glossary = [
  ["Ascent stage", "The top part of the Apollo lander that carried astronauts back up from the Moon."],
  ["Biosignature", "A sign that might have been made by living things, though it can sometimes have other causes."],
  ["Crater", "A bowl-shaped hole made by an impact or a volcano."],
  ["Descent stage", "The bottom part of a lander, with the legs and landing engine. It stays on the surface."],
  ["Lander", "A spacecraft designed to touch down on another world."],
  ["Marsquake", "A shaking of the ground on Mars, like an earthquake."],
  ["Orbiter", "A spacecraft that circles a planet or moon."],
  ["Regolith", "The loose dust and broken rock that covers the Moon's surface."],
  ["Retroreflector", "A mirror that sends light straight back to where it came from."],
  ["Rover", "A robot vehicle that drives across another world."],
  ["Seismometer", "An instrument that senses ground shaking."],
  ["Sol", "One Martian day, a little longer than an Earth day (about 24 hours and 40 minutes)."],
  ["Sky crane", "A rocket-powered platform that lowers a rover to the ground on cables."]
];

const faqs = [
  ["Is all this stuff just space junk?", "Fair question. Each item was left on purpose and is a record of a real mission. Today, planners think carefully about what to leave behind and where. Some scientists and historians want to protect the oldest sites."],
  ["Can I see the Apollo landing sites with a telescope?", "No. Even the largest telescopes on Earth cannot see objects that small. But orbiting spacecraft like LRO have taken close-up photos, and you can see them online."],
  ["Are any of these machines still working?", "Yes: the Apollo laser mirrors, the rovers Curiosity and Perseverance, and the orbiter LRO (verify). The others have finished their missions."],
  ["Will anyone go pick them up?", "Not at the moment. Some pieces may be studied or protected in the future."],
  ["How long do signals take to reach Mars?", "Between about 3 and 22 minutes, depending on where Earth and Mars are in their orbits. That is why rovers have to make some decisions on their own."],
  ["How do NASA rovers get their names?", "Many are named by students in NASA contests, including Curiosity, Ingenuity and Perseverance."],
  ["Will people return to the Moon?", "Yes. Artemis II flew around the Moon in April 2026. NASA's plans for future landings are still being scheduled, so check NASA's Artemis page for the newest dates."]
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
      <div class="story-detail"><h4>Story</h4>${paragraphs}<h4>Science it made possible</h4><p>${story.science}</p><h4>Did you know?</h4><p class="did-you-know">${story.didYouKnow}</p></div>
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
    <div class="quiz-feedback" id="quiz-feedback">Choose your answer.</div>
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
    ? "Mission started! Read the stories and try again."
    : score <= 6
      ? "Solid crew member. You know your way around the solar system."
      : "Mission commander! You know your abandoned hardware.";
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