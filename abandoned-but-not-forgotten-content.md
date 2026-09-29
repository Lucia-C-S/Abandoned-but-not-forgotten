# ABANDONED BUT NOT FORGOTTEN: Website Content Pack

Content for a NASA Space Apps Challenge storytelling website about hardware NASA left on the **Moon** and **Mars**. Audience: school-age space fans (about ages 9–14) plus teachers. Language: English. Facts checked against sources as of **29 Sept 2026** (see the verification checklist at the end).

---

## 0. BRIEF FOR THE VS CODE AI (read first)

**Task:** Build a static, responsive, accessible website from the copy below. Use the text **verbatim**. Do not invent facts, numbers, dates or quotes. If a component needs extra text (button labels, alt text), write it in the same voice and keep it short.

**Tech default:** plain HTML + CSS + vanilla JS (no build step, no external runtime dependencies), deployable on GitHub Pages. Only switch stack if you have a strong reason and say why.

**Structure (single page, sticky top nav, smooth-scroll anchors):**
1. Hero
2. "What does abandoned mean?" (status legend)
3. By the numbers (stat strip)
4. Timeline (horizontal scroll on mobile)
5. The Moon (story-card grid; each card opens a detail panel or modal)
6. Mars (same pattern)
7. When things go wrong (small callout)
8. Science it made possible (grid of discovery cards, each linking back to its story)
9. Why do things last on the Moon but not on Mars? (two-column comparison)
10. Why leave things behind? + Not forgotten (heritage)
11. Quiz (8 questions, instant feedback, score at end)
12. Glossary (tooltip or accordion)
13. FAQ (accordion)
14. Teacher's corner
15. What's next
16. Credits and sources (footer)

**Design direction:** dark "night sky" theme; one accent color per status (see section 2); large readable type (18px+ body); short paragraphs; generous spacing. Each story card shows: status badge, years, location, headline, and a 1-line teaser. Detail panel shows the full fields.
**Accessibility:** WCAG AA contrast, keyboard navigable modals, visible focus, `prefers-reduced-motion` respected, alt text for every image, never rely on color alone for status (always show the text label plus an icon).
**Images:** use NASA public media only (see section 17). Put each image credit in a caption. Use lazy loading. Provide a graceful fallback (CSS/SVG illustration) if an image fails.
**Data model suggestion:** store all story cards in one `stories.js` array with fields: `id, world, status, years, where, title, teaser, story[], science, didYouKnow, image, alt`.

---

## 1. SITE META

- **Site name:** Abandoned. Not Forgotten.
- **Page title (`<title>`):** Abandoned. Not Forgotten. | NASA's Robots and Relics on the Moon and Mars
- **Meta description (under 160 chars):** Meet the rovers, landers and machines NASA left on the Moon and Mars, what they discovered, and which ones are still working today.
- **Open Graph title:** Abandoned. Not Forgotten.
- **Open Graph description:** The true stories of NASA hardware left on the Moon and Mars, and the science it made possible.
- **Tagline options:** "Still up there. Still teaching us." / "Parked on other worlds. Still part of our story."
- **Language attribute:** `en`
- **Footer disclaimer (short):** Made for the NASA Space Apps Challenge. This is an independent project and is not endorsed by NASA.

## 2. NAVIGATION LABELS AND STATUS SYSTEM

**Nav:** Home · What "abandoned" means · Timeline · The Moon · Mars · Discoveries · Quiz · Glossary · Teachers

**Status badges (use these exact labels):**

| Badge | Label | Meaning (tooltip text) |
|---|---|---|
| 🟢 | Still working | This hardware is still sending data or being used today. |
| 🟡 | Mission complete | It finished its job, then went silent or was switched off. It is still there. |
| 🟠 | Crashed on purpose | Mission planners guided it into the surface for one last piece of science or for safety. |
| ⚪ | Lost | Contact was lost before the mission could be finished. |

---

## 3. HERO

**Headline:** Abandoned. Not Forgotten.

**Subheadline:** Since the 1960s, NASA has left machines on the Moon and Mars. Some finished their missions and went quiet. A few are still working. All of them changed what we know about other worlds.

**Buttons:** Explore the Moon · Explore Mars

**Scroll hint:** Scroll to visit the parking lots of the solar system ↓

---

## 4. WHAT DOES "ABANDONED" MEAN?

**Heading:** First, a plot twist: nothing here was thrown away.

**Body:**
When a space mission ends, the hardware usually stays where it is. A rover cannot drive home. A lander has no fuel to lift off again. And every extra kilogram carried back to Earth would need a lot more rocket to launch in the first place.

So "abandoned" does not mean "littered". It means the mission is over and the machine is parked for good.

"Not forgotten" is just as true. Old rovers taught us how to build new ones. Old data is still being studied. Some machines are still being used, and orbiting cameras still photograph the ones that went quiet.

**Mini heading:** Four ways a mission can end
1. **Still working.** Some hardware keeps going for decades.
2. **Mission complete.** The job is done, the power is gone, and the machine sits in silence.
3. **Crashed on purpose.** Some spacecraft are guided into the surface as a final experiment.
4. **Lost.** Sometimes things simply go wrong.

---

## 5. BY THE NUMBERS

- **6** crewed Moon landings, 1969–1972
- **12** people have walked on the Moon
- **3** electric Moon buggies still parked there
- **382 kg** (842 lb) of Moon rocks brought back to Earth
- **9** NASA landing missions on Mars so far
- **2** of them still working today (Curiosity and Perseverance)
- **72** flights by a helicopter on another world (Ingenuity)
- **45 km** (28 miles): distance driven by the rover Opportunity, more than a marathon

---

## 6. TIMELINE

*(Format as a horizontal timeline. Each entry: year, short title, 1 line.)*

- **1966 · Surveyor 1:** First American soft landing on the Moon (June 2).
- **1967 · Surveyor 3:** A robot lander arrives at the Ocean of Storms (April 20).
- **1969 · Apollo 11:** First humans on the Moon (July 20). They leave a laser mirror behind.
- **1969 · Apollo 12:** Astronauts walk to Surveyor 3 and bring parts of it home (November).
- **1971 · Moon buggy:** First rover with people aboard drives on the Moon (Apollo 15, July).
- **1972 · Apollo 17:** The last humans to walk on the Moon (December).
- **1976 · Viking landers:** Viking 1 (July 20) and Viking 2 (September 3) touch down on Mars.
- **1977 · Lights out on the Moon:** NASA switches off the Apollo science stations (September 30).
- **1997 · Sojourner:** The first rover on Mars (Pathfinder landed July 4).
- **2004 · Spirit and Opportunity:** Twin rovers land in January and are built for 90 days.
- **2008 · Phoenix:** A lander digs up Martian ice (landed May 25).
- **2009 · LRO and LCROSS:** A Moon-mapping orbiter launches (June 18). LCROSS hits a crater to look for water (October 9).
- **2012 · Curiosity:** Lowered onto Mars by a rocket-powered "sky crane" (August). GRAIL's twin probes end their mission on the Moon (December 17).
- **2018 · InSight:** A Mars lander with a seismometer arrives (November 26). Opportunity goes silent in a dust storm (June 10).
- **2019 · Opportunity:** Declared complete (February 13).
- **2021 · Perseverance and Ingenuity:** Land on Mars (February 18). The helicopter's first flight is on April 19.
- **2022 · InSight:** Mission ends (December 21).
- **2024 · Ingenuity:** Retired after 72 flights (January 25).
- **2026 · Artemis II:** Astronauts fly around the Moon and return safely (April 1–10). Curiosity and Perseverance are still exploring Mars.

---

## 7. THE MOON

**Section heading:** The Moon: Footprints That Last

**Intro:** The Moon has no wind, no rain and no plants. Things left there change very slowly. That makes it the biggest outdoor museum in the solar system. Here are eight stories from it.

---

### MOON STORY 1: Apollo landing sites

- **Status:** 🟡 Mission complete
- **Years:** 1969–1972
- **Where:** Six sites on the near side of the Moon
- **Title:** Six parking lots on the Moon
- **Story:** Each Apollo Lunar Module had two parts. The bottom part, the descent stage, had the legs and the landing engine. When the astronauts were ready to leave, the top part, the ascent stage, blasted off and carried them back to lunar orbit. The bottom part stayed behind and became a launch pad. It is still there at all six landing sites, along with tools, cameras and other gear.
- **Science it made possible:** Studying these sites showed scientists how landing engines disturb lunar soil and how long footprints and wheel tracks can last.
- **Did you know?** Orbiting cameras can photograph the descent stages, the rover tracks and even the astronauts' footpaths from far above.
- **Image idea:** LRO close-up of the Apollo 11 or Apollo 17 landing site. Search: "LROC Apollo 17 landing site".

### MOON STORY 2: The Lunar Roving Vehicles

- **Status:** 🟡 Mission complete
- **Years:** 1971–1972
- **Where:** Apollo 15, 16 and 17 landing sites
- **Title:** Three Moon buggies with no keys
- **Story:** The Lunar Roving Vehicle was an electric car for two astronauts. It folded up like a picnic table and was carried on the side of the lander. It was designed for about 13 km/h (8 mph), and the three rovers together drove roughly 90 km on the Moon. Then the astronauts drove them a short distance away, parked them and flew home. On Apollo 17, a fender broke. The astronauts fixed it with duct tape and some maps, and it worked.
- **Science it made possible:** The rovers let crews collect rocks far from the lander, including samples that helped date the Moon.
- **Did you know?** The batteries were not rechargeable, so once they ran out the rovers could never be used again.
- **Image idea:** Apollo 15 or 17 rover on the surface. Search: "Lunar Roving Vehicle Apollo 15".

### MOON STORY 3: The laser mirrors

- **Status:** 🟢 Still working
- **Years:** 1969–today
- **Where:** Apollo 11, 14 and 15 sites
- **Title:** The mirrors that still answer
- **Story:** The Apollo 11, 14 and 15 crews left special mirrors on the Moon called retroreflectors. They have no power and no moving parts. Scientists on Earth fire a laser beam at one, and the mirror bounces the light straight back. By timing the trip, they can measure the distance to the Moon very precisely. More than fifty years later, observatories still do this. The mirrors have faded a little over the years, but they still work.
- **Science it made possible:** These measurements showed that the Moon is slowly drifting away from Earth, about 3.8 cm (1.5 inches) a year, and they have been used to test Einstein's theory of gravity.
- **Did you know?** Laser light takes about two and a half seconds to make the round trip to the Moon and back.
- **Image idea:** Buzz Aldrin near the Apollo 11 retroreflector, or an observatory laser aimed at the Moon. Search: "Apollo 11 laser ranging retroreflector".

### MOON STORY 4: The science stations that were switched off

- **Status:** 🟡 Mission complete
- **Years:** 1969–1977
- **Where:** Apollo 12, 14, 15, 16 and 17 sites (Apollo 11 left a smaller set)
- **Title:** The day NASA turned off the Moon
- **Story:** Apollo crews set up small science stations called ALSEPs (Apollo Lunar Surface Experiments Packages). Each had instruments such as seismometers, which feel shaking, and it sent its data to Earth for years. Small nuclear power units kept them running through the long, freezing lunar nights. On September 30, 1977, NASA sent the command to shut them down, mostly to save money. The stations have been silent ever since.
- **Science it made possible:** The seismometers recorded thousands of moonquakes, and they revealed that the Moon has layers: a crust, a mantle and a small core.
- **Did you know?** Heat probes at two landing sites measured how much warmth flows out of the Moon's interior.
- **Image idea:** An astronaut deploying an ALSEP. Search: "Apollo ALSEP deployment".

### MOON STORY 5: Surveyor 3

- **Status:** 🟡 Mission complete
- **Years:** 1967–1969
- **Where:** Ocean of Storms
- **Title:** The robot that got a visit
- **Story:** Surveyor 3 was a robot lander that reached the Moon in April 1967. Two and a half years later, Apollo 12 astronauts Pete Conrad and Alan Bean landed about 180 metres (600 feet) away, on purpose. They walked over, cut off pieces such as its camera, and brought them back to Earth.
- **Science it made possible:** Engineers could finally study how metal, wires and glass behave after years on the Moon. The visit also proved a spacecraft could land precisely where planners aimed.
- **Did you know?** Surveyor 3 is the only spacecraft on the Moon that has been visited by people.
- **Image idea:** Astronaut Conrad beside Surveyor 3 with the Apollo 12 lander in the background. Search: "Apollo 12 Surveyor 3 Conrad".

### MOON STORY 6: Crashed on purpose

- **Status:** 🟠 Crashed on purpose
- **Years:** 1969–2014
- **Where:** Many places on the Moon
- **Title:** Ending with a bang, for science
- **Story:** Ending a mission on the Moon does not always mean going quiet. Sometimes the last chapter is a planned crash. After Apollo 12–17 crews left, their ascent stages were steered into the Moon so seismometers could record the impact and reveal what lay underground. In 2009, the LCROSS probe and its spent rocket stage hit a crater near the Moon's south pole so telescopes could look at the debris for water. In 2012, the twin GRAIL probes, Ebb and Flow, finished mapping the Moon's gravity and were guided into a mountain near its north pole.
- **Science it made possible:** The LCROSS plume showed water ice hiding in permanently shadowed craters. GRAIL produced the most detailed gravity map of the Moon yet.
- **Did you know?** GRAIL carried cameras that let students choose photo targets. The crash site was later named for astronaut Sally Ride.
- **Image idea:** Artwork of GRAIL Ebb and Flow, or the LCROSS impact plume. Search: "LCROSS impact" and "GRAIL Ebb Flow".

### MOON STORY 7: Objects with a story

- **Status:** 🟡 Mission complete
- **Years:** 1969–1972
- **Where:** Apollo sites
- **Title:** Small things left behind
- **Story:** Besides big machines, Apollo crews left small things that tell a human story.
  - **Flags.** Each of the six crews planted a U.S. flag. Orbiting cameras have photographed the shadows of flags still standing at most of the sites.
  - **The hammer and the feather.** Apollo 15's commander, David Scott, dropped a hammer and a feather together in the airless Moon. They landed at the same moment. He left both behind.
  - **Golf balls.** Apollo 14's Alan Shepard hit two golf balls using a club rigged from a tool handle.
  - **A tiny memorial.** Apollo 15 left a small figure called *Fallen Astronaut* to honor people who died exploring space.
  - **A message disc.** Apollo 11 left a small silicon disc carrying goodwill messages from leaders of 73 countries.
- **Science it made possible:** The hammer and feather gave a live test of an idea from Galileo: without air, all objects fall at the same rate.
- **Did you know?** Apollo crews also left about 96 bags of human waste. Some scientists would like to study them.
- **Image idea:** Apollo 15 flag with astronaut, or the *Fallen Astronaut* sculpture. Search: "Apollo 15 Fallen Astronaut".

### MOON STORY 8: LRO, the orbiter that keeps watch

- **Status:** 🟢 Still working *(verify current status before publishing)*
- **Years:** 2009–today
- **Where:** In orbit around the Moon
- **Title:** The camera that photographs the old hardware
- **Story:** The Lunar Reconnaissance Orbiter (LRO) launched in June 2009 and was meant to work for about a year. It has kept going far longer. Its camera can see objects on the ground as small as a car, which is enough to spot old landers, rover tracks and even the paths astronauts walked. It also mapped the Moon in fine detail for future missions.
- **Science it made possible:** LRO's maps and photos are used to plan where the next crews and robots will land, and to track how the old sites are changing.
- **Did you know?** An instrument on LRO helped find cold, dark craters where water ice may be hiding.
- **Image idea:** LRO artwork or the Apollo site photos it took. Search: "Lunar Reconnaissance Orbiter LROC".

---

## 8. MARS

**Section heading:** Mars: Robots in the Dust

**Intro:** Mars is farther away, colder and dustier. Nobody has walked there yet, so every story here is about a robot. Some lasted for months. Some lasted for years. Two are still driving today.

---

### MARS STORY 1: Viking 1 and Viking 2

- **Status:** 🟡 Mission complete
- **Years:** 1976–1982
- **Where:** Chryse Planitia (Viking 1) and Utopia Planitia (Viking 2)
- **Title:** The first postcards from the surface
- **Story:** The two Viking landers were the first American spacecraft to work on the surface of Mars. Viking 1 touched down on July 20, 1976, exactly seven years after Apollo 11 landed on the Moon. Each lander carried a camera, a weather station and a tiny chemistry lab built to look for signs of life. Viking 2 worked until 1980, and Viking 1 kept going until late 1982.
- **Science it made possible:** Viking showed that Mars is a cold, dusty desert with a pinkish-orange sky. Its life-detection tests gave puzzling results that most scientists read as "no life found." That question is still studied today.
- **Did you know?** Viking 1 sent back weather reports for more than six years, which helped scientists see how Mars' seasons work.
- **Image idea:** Viking 1 lander photo or its first surface image. Search: "Viking 1 lander Mars surface".

### MARS STORY 2: Sojourner

- **Status:** 🟡 Mission complete
- **Years:** 1997
- **Where:** Ares Vallis, Mars
- **Title:** The microwave-oven-sized pioneer
- **Story:** Sojourner was the first rover to drive on Mars. It was about the size of a microwave oven and rode inside the Pathfinder lander, which reached Mars on July 4, 1997, by bouncing to a stop inside giant airbags. It was designed to work for one week. It worked for about 83 days and drove only about 100 metres (330 feet). Pathfinder's last signal came on September 27, 1997.
- **Science it made possible:** Sojourner used a tool called a spectrometer to identify the chemistry of rocks, including two named Barnacle Bill and Yogi. It proved that small, cheap rovers could work on Mars.
- **Did you know?** Every rover since Sojourner has followed its example.
- **Image idea:** Sojourner next to the rock Yogi. Search: "Sojourner rover Yogi rock".

### MARS STORY 3: Spirit

- **Status:** 🟡 Mission complete
- **Years:** 2004–2010
- **Where:** Gusev Crater, Mars
- **Title:** The rover that got stuck and kept going
- **Story:** Spirit landed on January 4, 2004, and was built to last about 90 days. It worked for about six years. In 2009, its wheels broke through a crust of soft sand and it got stuck. Engineers tried for months to free it and could not. Spirit became a fixed science station. Winter came, the sun's angle dropped, and its last message reached Earth on March 22, 2010.
- **Science it made possible:** Spirit dragged a damaged wheel through the soil and uncovered bright, silica-rich material. On Earth, this kind of material forms around hot springs, a hint that ancient Mars had warm, wet places.
- **Did you know?** Dust-devil winds sometimes cleaned Spirit's solar panels and gave it extra power.
- **Image idea:** Spirit selfie or a panorama of Husband Hill. Search: "Spirit rover Gusev crater".

### MARS STORY 4: Opportunity

- **Status:** 🟡 Mission complete
- **Years:** 2004–2019
- **Where:** Meridiani Planum, Mars
- **Title:** The 90-day rover that ran for 14 years
- **Story:** Opportunity landed on January 25, 2004, planned for 90 sols (Mars days). It kept going for about 14 years and drove about 45 km (28 miles), more than a marathon. In 2018, a huge dust storm covered Mars and blocked the sunlight that powered the rover. Its last message came on June 10, 2018. After many attempts to reach it, NASA declared the mission complete on February 13, 2019.
- **Science it made possible:** Opportunity found tiny round pebbles of hematite, nicknamed "blueberries," and layered rocks shaped by salty water. It was strong evidence that liquid water once soaked this region.
- **Did you know?** The mission set a record for the longest distance driven on another world by any rover, at least until other rovers challenged it.
- **Image idea:** Opportunity selfie at Endurance Crater, or the "blueberries." Search: "Opportunity rover blueberries".

### MARS STORY 5: Phoenix

- **Status:** 🟡 Mission complete
- **Years:** 2008
- **Where:** Northern plains near the Martian north pole
- **Title:** The lander that touched Martian ice
- **Story:** Phoenix landed on May 25, 2008, near the north pole. It could not roam, but it had a robotic arm. The arm dug a shallow trench and uncovered bright chunks that vanished a few days later. They were water ice, evaporating in the thin air. Phoenix was designed for a short summer mission. As the Martian arctic grew colder and darker, its solar panels could no longer keep it alive. Its last signal came on November 2, 2008.
- **Science it made possible:** Phoenix confirmed that there is water ice just under the soil in the Martian arctic. It also found salts in the soil and watched snow fall from clouds.
- **Did you know?** Phoenix carried a tiny lab that "cooked" soil samples to see what they were made of.
- **Image idea:** The Phoenix trench and ice chunks. Search: "Phoenix lander ice trench".

### MARS STORY 6: InSight

- **Status:** 🟡 Mission complete
- **Years:** 2018–2022
- **Where:** Elysium Planitia, Mars
- **Title:** The lander that listened to Mars
- **Story:** InSight landed on November 26, 2018, and set a seismometer directly on the ground. It was Mars' first "stethoscope." It recorded more than 1,300 marsquakes and even the impacts of falling meteoroids. Over time, dust settled on its solar panels, its power dropped, and NASA ended the mission on December 21, 2022.
- **Science it made possible:** InSight's data revealed the thickness of Mars' crust, showed that its core is liquid, and measured how big the core is.
- **Did you know?** Wind was a problem for the seismometer, so the team covered it with a small dome to shield it.
- **Image idea:** InSight selfie covered in dust. Search: "InSight lander selfie".

### MARS STORY 7: Ingenuity

- **Status:** 🟡 Mission complete
- **Years:** 2021–2024
- **Where:** Jezero Crater, Mars
- **Title:** The helicopter that flew 72 times
- **Story:** Ingenuity hitched a ride under Perseverance and was supposed to make five flights. On April 19, 2021, it made the first powered, controlled flight on another planet, hovering about 3 metres (10 feet) up for 39 seconds. It flew 72 times in total. On January 18, 2024, it damaged its rotor blades on landing, and NASA retired it on January 25, 2024. It is now parked in Jezero Crater.
- **Science it made possible:** Ingenuity proved that flying on Mars is possible, even though the air is very thin. Future missions may include flying scouts.
- **Did you know?** A tiny piece of fabric from the Wright brothers' first airplane rode with Ingenuity. A student named it in NASA's naming contest.
- **Image idea:** Ingenuity shadow photo or a flight image. Search: "Ingenuity helicopter Mars flight".

### MARS STORY 8: Curiosity

- **Status:** 🟢 Still working
- **Years:** 2012–today
- **Where:** Gale Crater, Mars
- **Title:** Still driving, more than a decade later
- **Story:** Curiosity is as big as a small car. It landed in August 2012, lowered from a rocket-powered "sky crane." It now climbs Mount Sharp, a tall mountain of layered rock in the middle of Gale Crater. The layers are like pages of a history book, with each one recording a different time on Mars. It keeps driving and drilling, even with a worn and cracked wheel.
- **Science it made possible:** Curiosity showed that Gale Crater once held a lake with the right ingredients for microbial life to live, and it also found organic molecules in ancient rock.
- **Did you know?** A 12-year-old student named Curiosity in a NASA contest.
- **Image idea:** Curiosity selfie on Mount Sharp. Search: "Curiosity rover selfie Mount Sharp".

### MARS STORY 9: Perseverance

- **Status:** 🟢 Still working
- **Years:** 2021–today
- **Where:** Jezero Crater, Mars
- **Title:** The rover collecting samples for the future
- **Story:** Perseverance landed on February 18, 2021, inside an ancient lake bed. Its main job is to find rocks that might hold signs of ancient microbial life and to store them in sealed tubes. Some tubes are left in a depot on the crater floor as a backup, waiting for a future mission to bring them to Earth. As of late August 2026, Perseverance had driven about 45 km.
- **Science it made possible:** In 2024, a rock called Cheyava Falls showed patterns that could be a possible sign of past life, or could be caused by chemistry alone. That question is still open. In September 2026, NASA also reported that rocks at Jezero's edge show at least three separate episodes of water, including hot groundwater.
- **Did you know?** A student named it. Its instrument MOXIE also made oxygen from Mars' carbon-dioxide air, a step toward supporting future astronauts.
- **Image idea:** Perseverance selfie with Ingenuity, or the sample depot. Search: "Perseverance rover selfie", "Three Forks sample depot".

---

## 9. WHEN THINGS GO WRONG

**Heading:** Not every mission has a happy ending

**Body:** In 1999, NASA lost two Mars spacecraft. Mars Climate Orbiter was lost because two teams used different units of measurement, one metric and one not. Mars Polar Lander lost contact as it tried to land. Both failures taught engineers to double-check everything, and the lessons made later missions safer.

**Badge:** ⚪ Lost

---

## 10. SCIENCE IT MADE POSSIBLE

*(Grid of discovery cards. Each card links back to its story.)*

1. **The Moon is drifting away.** Laser mirrors from Apollo measured it: about 3.8 cm a year. → Moon Story 3
2. **The Moon has moonquakes and layers.** Apollo seismometers listened for years. → Moon Story 4
3. **Objects fall at the same rate without air.** The hammer-and-feather test. → Moon Story 7
4. **Water ice hides in dark lunar craters.** LCROSS and orbiters found signs of it. → Moon Story 6
5. **Mars once had water.** Spirit, Opportunity, Curiosity and Perseverance each found evidence. → Mars Stories 3, 4, 8, 9
6. **Mars has a liquid core and quakes.** InSight listened. → Mars Story 6
7. **Ice lies just below the Martian arctic soil.** Phoenix dug it up. → Mars Story 5
8. **You can fly on Mars.** Ingenuity flew 72 times. → Mars Story 7
9. **Some ancient Martian rocks might hold clues to life.** Perseverance is still investigating. → Mars Story 9

**Note under the grid (important):** "Possible signs of life" is not the same as "proof of life." Scientists need more evidence, and that is why samples matter.

---

## 11. WHY DO THINGS LAST ON THE MOON BUT NOT ON MARS?

**Two-column layout.**

**On the Moon**
- No air, so no wind or rain to wear things down
- Extreme temperatures: about 120 °C (250 °F) in daylight and below −170 °C (−275 °F) at night
- Tiny space rocks (micrometeoroids) and sunlight slowly age materials
- Footprints and wheel tracks can last a very long time

**On Mars**
- Thin air, but strong winds that move dust
- Dust can cover solar panels and cut off power (this ended Opportunity and InSight)
- Very cold winters at some sites (this ended Phoenix)
- Seasons change how much sunlight arrives

**Takeaway line:** On the Moon, it's mostly time. On Mars, it's dust, cold and sunlight.

---

## 12. WHY LEAVE THINGS BEHIND?

**Body:**
Space is like a very expensive road trip. Every kilogram takes fuel to launch, and coming home needs even more. Bringing a rover back would mean carrying another rocket to Mars and back. So missions bring home what matters most, like rocks, and leave the machines.

Apollo astronauts brought back 382 kg (842 lb) of Moon rocks and left tools, cameras and even a rover to make room and save weight for the trip home.

## 13. NOT FORGOTTEN

**Heading:** Why old hardware still matters

- **It's still teaching us.** Data from Viking, Apollo and the rovers is still being studied today.
- **It's still in use.** The Apollo laser mirrors still answer lasers.
- **It's history.** Many people think the Apollo sites should be treated like museums. In 2011, NASA published recommendations asking future visitors to protect the historic Apollo hardware.
- **It shapes the future.** Artemis II flew around the Moon in April 2026, and lessons from Apollo, robotic landers and orbiters like LRO helped plan it.

---

## 14. QUIZ (8 questions)

*(Show one question at a time, instant feedback, short explanation, score at end.)*

1. **Which piece of Apollo hardware is still used by scientists today?**
   a) The Lunar Roving Vehicle · b) The laser mirrors · c) The flags · d) The descent stage
   **Answer: b.** The mirrors have no power and still bounce laser light back to Earth.
2. **Why did NASA leave the Apollo rovers on the Moon?**
   a) They were broken · b) Astronauts forgot · c) Bringing them back would cost too much fuel · d) The Moon wanted them
   **Answer: c.**
3. **What ended Opportunity's mission?**
   a) A crash · b) A giant dust storm blocking sunlight · c) It ran out of fuel · d) Aliens
   **Answer: b.**
4. **Which Mars spacecraft made the first powered flight on another planet?**
   a) Sojourner · b) Phoenix · c) Ingenuity · d) InSight
   **Answer: c.**
5. **How many flights did Ingenuity make?**
   a) 5 · b) 19 · c) 42 · d) 72
   **Answer: d.**
6. **What did InSight's seismometer record?**
   a) Marsquakes · b) Martian music · c) Thunder · d) Volcano eruptions
   **Answer: a.**
7. **Which of these rovers is still working today?**
   a) Spirit · b) Opportunity · c) Sojourner · d) Curiosity
   **Answer: d.**
8. **What does "crashed on purpose" mean for a spacecraft?**
   a) It was an accident · b) Mission planners guided it into the surface for science or safety · c) It was stolen · d) It got lost
   **Answer: b.**

**Score messages:**
- 0–3: "Mission started! Read the stories and try again."
- 4–6: "Solid crew member. You know your way around the solar system."
- 7–8: "Mission commander! You know your abandoned hardware."

---

## 15. GLOSSARY

- **Ascent stage:** The top part of the Apollo lander that carried astronauts back up from the Moon.
- **Biosignature:** A sign that might have been made by living things, though it can sometimes have other causes.
- **Crater:** A bowl-shaped hole made by an impact or a volcano.
- **Descent stage:** The bottom part of a lander, with the legs and landing engine. It stays on the surface.
- **Lander:** A spacecraft designed to touch down on another world.
- **Marsquake:** A shaking of the ground on Mars, like an earthquake.
- **Orbiter:** A spacecraft that circles a planet or moon.
- **Regolith:** The loose dust and broken rock that covers the Moon's surface.
- **Retroreflector:** A mirror that sends light straight back to where it came from.
- **Rover:** A robot vehicle that drives across another world.
- **Seismometer:** An instrument that senses ground shaking.
- **Sol:** One Martian day, a little longer than an Earth day (about 24 hours and 40 minutes).
- **Sky crane:** A rocket-powered platform that lowers a rover to the ground on cables.

---

## 16. FAQ

**Is all this stuff just space junk?**
Fair question. Each item was left on purpose and is a record of a real mission. Today, planners think carefully about what to leave behind and where. Some scientists and historians want to protect the oldest sites.

**Can I see the Apollo landing sites with a telescope?**
No. Even the largest telescopes on Earth cannot see objects that small. But orbiting spacecraft like LRO have taken close-up photos, and you can see them online.

**Are any of these machines still working?**
Yes: the Apollo laser mirrors, the rovers Curiosity and Perseverance, and the orbiter LRO (verify). The others have finished their missions.

**Will anyone go pick them up?**
Not at the moment. Some pieces may be studied or protected in the future.

**How long do signals take to reach Mars?**
Between about 3 and 22 minutes, depending on where Earth and Mars are in their orbits. That is why rovers have to make some decisions on their own.

**How do NASA rovers get their names?**
Many are named by students in NASA contests, including Curiosity, Ingenuity and Perseverance.

**Will people return to the Moon?**
Yes. Artemis II flew around the Moon in April 2026. NASA's plans for future landings are still being scheduled, so check NASA's Artemis page for the newest dates.

---

## 17. TEACHER'S CORNER

Three ready-to-use classroom activities.

1. **Design a rover.** Give students a mission: "Survive a Martian dust storm" or "Last 14 years." Ask them to sketch a rover, choose a power source and explain their choices.
2. **Scale it up.** Cut out the size of Sojourner (microwave oven), Curiosity (small car) and the Apollo rover, and compare them on the floor.
3. **Signal delay game.** Two students play "Mission Control" and "Rover." Add a 3-minute to 22-minute delay between messages. What changes?

**Discussion questions:**
- Is it OK to leave machines on other worlds? Why or why not?
- Which discovery in this site surprised you the most?
- If you designed the next lander, what would you leave behind?

---

## 18. WHAT'S NEXT

**Heading:** The story keeps going

- **The Moon:** Artemis II carried astronauts around the Moon in April 2026. NASA is working toward future landings, and private companies are sending robotic landers too.
- **Mars:** Curiosity and Perseverance are still exploring. The sealed sample tubes are waiting, but how they will come home is still being worked out.
- **You:** The next generation of engineers, scientists and storytellers might be reading this page.

---

## 19. CREDITS, SOURCES AND IMAGE GUIDE

**Sources to cite (link each in the footer):**
- NASA Science (science.nasa.gov): Mars rovers and landers, Artemis, LRO
- NASA JPL (jpl.nasa.gov): rover and helicopter mission pages, news releases
- NASA Image and Video Library (images.nasa.gov)
- NASA Photojournal (photojournal.jpl.nasa.gov)
- LROC, Arizona State University (lroc.asu.edu): Apollo site photos
- NASA Space Science Data Archive / NSSDCA (nssdc.gsfc.nasa.gov): mission facts
- Apollo Lunar Surface Journal and Apollo Flight Journal (NASA)

**Image credit format:** "Image: NASA/JPL-Caltech" or "NASA/GSFC/Arizona State University" as given by each image page.

**Usage note:** NASA images are generally free to use, but check NASA's media usage guidelines. Do not use the NASA logo or imply endorsement.

**Footer text:** Made for the NASA Space Apps Challenge, "Abandoned but Not Forgotten." This is an independent educational project and is not endorsed by NASA.

---

## 20. VERIFICATION CHECKLIST (do before publishing)

Check each of these against an official source. Items marked ⚠ are the ones I am least sure of or that may have changed.

- ⚠ LRO is still active in 2026 (I could not confirm this).
- ⚠ Student namers: Curiosity (Clara Ma, age 12), Perseverance (Alexander Mather), Ingenuity (Vaneeza Rupani). Confirm names and ages.
- ⚠ The 2011 NASA recommendations for protecting lunar heritage sites.
- ⚠ "About 96 bags" of human waste left on the Moon.
- ⚠ Apollo LRV distances (27.9 / 26.7 / 35.9 km) and top design speed.
- ⚠ Opportunity distance (45.16 km) and "record" claim, since Perseverance is at about 45 km.
- ⚠ GRAIL crash site naming after Sally Ride.
- ⚠ Retroreflector drift rate (about 3.8 cm/year).
- ⚠ Next crewed Moon landing dates (they keep changing, so the copy avoids a date).
- ⚠ Sample return plans for Perseverance's tubes (the copy avoids specifics).
- Perseverance and Curiosity are still operating as of Sept 2026 (confirmed in multiple sources).
- Artemis II dates: launch April 1, splashdown April 10, 2026 (confirmed).
- Ingenuity retired Jan 25, 2024 after 72 flights (confirmed).
