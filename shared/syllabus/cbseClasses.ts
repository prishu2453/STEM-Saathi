import { buildChapter } from './meta';
import type { BoardSyllabusRecord } from './types';

const NCERT_URL = 'https://ncert.nic.in/textbook.php';
const CBSE_PRAC_URL = 'https://cbseacademic.nic.in/curriculum_2025.html';

export const CBSE_OTHER_CLASSES: BoardSyllabusRecord[] = [
  // =========================================================================
  // CBSE CLASS 6 — NCERT Curiosity (2025-26)
  // =========================================================================
  {
    id: 'cbse-c6-2025-26',
    classLevel: 6,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · NCERT Curiosity Class 6',
    textbookName: 'Curiosity — Class 6 Science (NCERT)',
    sourceTitle: 'NCERT Class 6 Science (Curiosity)',
    sourceUrl: NCERT_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'NCERT Class 6 Science chapters with interactive virtual simulations mapped to motion, magnets, light/shadows, materials, and living organisms.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse6-phy-motion',
        chapterNumber: 5,
        title: { en: 'Measurement of Length and Motion', hi: 'लंबाई और गति का मापन', kn: 'ಉದ್ದ ಮತ್ತು ಚಲನೆಯ ಅಳತೆ' },
        primarySubject: 'physics',
        topicTag: { en: 'Motion & Measurement' },
        textbookName: 'Curiosity Class 6',
        board: 'cbse',
        classLevel: 6,
        session: '2025-26',
        conceptSummary: {
          en: 'Standard SI units (metre, centimetre) allow fair measurements anywhere; moving objects trace linear, circular, oscillatory, or projectile paths.',
        },
        topics: [
          {
            id: 'cbse6-phy-m-t1',
            title: { en: 'SI Units, Curved Lengths & Types of Motion' },
            subtopics: { en: ['1 m = 100 cm = 1000 mm', 'Parallax eye alignment error', 'Rectilinear, circular, periodic & projectile motion'] },
            explanation: { en: 'A curved line is measured with thread and a straight ruler; every thrown ball follows a parabolic trajectory under gravity.' },
          },
        ],
        definitions: [
          { id: 'cbse6-phy-m-d1', term: { en: 'SI Unit of Length' }, definition: { en: 'The metre (m), used worldwide so handspans or cubits never confuse measurements.' } },
        ],
        keyConcepts: { en: ['Always keep your eye vertically above the ruler scale mark to avoid parallax error.', 'Moving objects change position relative to a reference point with time.'] },
        diagramKind: 'projectile-motion',
        diagramCaption: { en: 'Motion path of a thrown ball showing height and horizontal distance.' },
        formulas: [
          { id: 'cbse6-phy-m-f1', name: { en: 'Average Speed' }, formula: 'v = d / t', variables: { en: 'v = speed, d = distance (m), t = time (s)' }, unit: 'm/s' },
        ],
        solvedNumericals: [
          {
            id: 'cbse6-phy-m-n1',
            problem: { en: 'A bicycle covers 150 m along a village road in 30 s. Find its speed in m/s.' },
            given: ['d = 150 m', 't = 30 s'],
            formulaUsed: 'v = d / t',
            solutionSteps: ['v = 150 / 30 = 5 m/s'],
            finalAnswer: '5 m/s',
          },
        ],
        realLifeApplications: { en: ['Tailors use flexible tape (cm/m); athletes time 100 m sprints with stopwatches.'] },
        revisionNotes: { en: ['A pendulum and swing show periodic motion; a thrown cricket ball moves in two dimensions.'] },
        chapterQuestions: [
          {
            id: 'cbse6-phy-m-q1',
            type: 'short',
            question: { en: 'Why are footsteps or handspans unsuitable as standard units of measurement?' },
            answer: { en: 'Footsteps and handspans differ from person to person, whereas SI metres remain identical everywhere.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse6-phy-m-m1',
            question: { en: 'A child on a playground swing repeats its path to and fro in equal time intervals. This is:' },
            options: { en: ['Random motion', 'Periodic (oscillatory) motion', 'Circular spin only', 'Rest'] },
            correctIndex: 1,
            explanation: { en: 'Motion repeating regularly at fixed intervals is periodic/oscillatory motion.' },
          },
        ],
        experiments: [
          {
            id: 'cbse6-phy-m-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'mechanics',
            title: { en: 'Simulated Motion Lab: Launch Angle & Curved Ball Trajectory' },
            objective: { en: 'Use the interactive simulation alongside a tabletop ruler launch to see how angle changes horizontal distance.' },
            materials: { en: ['Interactive Projectile Simulation', 'Plastic ruler & light paper ball', 'Measuring tape'] },
            scientificPrinciple: { en: 'Both launch speed and angle determine how high and how far a projectile travels before hitting the ground.' },
            steps: {
              en: [
                'Open the Projectile & Motion Simulation and set velocity v₀ = 18 m/s.',
                'Test launch angles 30°, 45°, and 60° while observing total horizontal distance R.',
                'Compare with tossing a rolled paper ball gently at low vs medium arc across a desk.',
              ],
            },
            observationTable: {
              columns: { en: ['Launch Angle', 'Max Height H (m)', 'Range R (m)'] },
              sampleRows: [['30°', '4.1 m', '28.6 m'], ['45°', '8.3 m', '33.0 m'], ['60°', '12.4 m', '28.6 m']],
            },
            expectedResult: { en: '45° achieves the farthest horizontal distance for the same launch push.' },
            conclusion: { en: 'Curved paths combine steady forward motion with downward gravitational pull.' },
            safetyNote: { en: 'Use soft paper balls indoors away from glass bulbs or windows.' },
            predictionQuestion: { en: 'At equal speed, which launch angle throws a ball farthest on flat ground?' },
            predictionOptions: { en: ['45°', '85°', '5°'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Too flat hits ground early; too steep goes high without forward reach.'] },
            whyItHappens: { en: 'At 45°, horizontal reach and hang-time balance optimally (sin 90° = 1).' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse6-phy-magnets',
        chapterNumber: 4,
        title: { en: 'Exploring Magnets', hi: 'चुंबकों का अन्वेषण', kn: 'ಕಾಂತಗಳ ಅನ್ವೇಷಣೆ' },
        primarySubject: 'physics',
        topicTag: { en: 'Magnetism & Poles' },
        textbookName: 'Curiosity Class 6',
        board: 'cbse',
        classLevel: 6,
        session: '2025-26',
        conceptSummary: {
          en: 'Magnets attract iron, nickel, and cobalt, align North–South when freely suspended, and exhibit attraction between opposite poles.',
        },
        topics: [
          {
            id: 'cbse6-phy-mag-t1',
            title: { en: 'Magnetic vs Non-Magnetic Materials & Finding Directions' },
            subtopics: { en: ['Bar & horseshoe magnets', 'Like poles repel, unlike poles attract', 'Making a needle magnetic compass'] },
            explanation: { en: 'Poles always occur in pairs; breaking a magnet yields two smaller N–S magnets.' },
          },
        ],
        definitions: [
          { id: 'cbse6-phy-mag-d1', term: { en: 'Magnetic Compass' }, definition: { en: 'A pivoted magnetized needle that freely turns to point toward geographic North–South.' } },
        ],
        keyConcepts: { en: ['Magnetic attraction is strongest near the two ends (poles) of a bar magnet.', 'Never heat, hammer, or drop a magnet on hard stone—it loses magnetism.'] },
        diagramKind: 'magnet-induction',
        diagramCaption: { en: 'North and South poles of a magnet generating field lines near a coil.' },
        realLifeApplications: { en: ['Magnetic cupboard latches, refrigerator door strips, and hiker compasses.'] },
        revisionNotes: { en: ['Plastic, brass, copper, and wood are non-magnetic; iron/steel pins are magnetic.'] },
        chapterQuestions: [
          {
            id: 'cbse6-phy-mag-q1',
            type: 'conceptual',
            question: { en: 'How can you distinguish a true magnet from an unmagnetized iron bar without any other magnet?' },
            answer: { en: 'Suspend it freely by a thread from its midpoint: a true magnet always settles pointing North–South.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse6-phy-mag-m1',
            question: { en: 'Bringing the North pole of one bar magnet near the North pole of another causes:' },
            options: { en: ['Strong attraction', 'Repulsion', 'Electric spark', 'Melting'] },
            correctIndex: 1,
            explanation: { en: 'Like magnetic poles (N–N or S–S) always push apart (repel).' },
          },
        ],
        experiments: [
          {
            id: 'cbse6-phy-mag-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'magnetism',
            title: { en: 'Cork-Cup Compass & Magnetic Field Simulation' },
            objective: { en: 'Float a magnetized sewing needle to find North and test magnetic flux in the 3D coil simulation.' },
            materials: { en: ['Sewing needle', 'Small cork or leaf piece', 'Bowl of water', 'Bar magnet', 'Interactive Magnetism Sim'] },
            scientificPrinciple: { en: 'Earth behaves like a giant magnet that aligns a free-floating magnetic needle.' },
            steps: {
              en: [
                'Stroke a needle 30 times in one direction with a bar magnet.',
                'Rest the needle on a floating leaf or cork in calm water away from iron tables.',
                'Open the Magnetism Simulation to visualize magnetic flux lines around a moving bar magnet.',
              ],
            },
            observationTable: {
              columns: { en: ['Trial', 'Needle Direction at Rest', 'Effect of Nearby Magnet'] },
              sampleRows: [['1 (No nearby iron)', 'Aligns N–S consistently', 'Returns to N–S after spin'], ['2 (Magnet N-pole near)', 'Needle tip turns away/toward', 'Deflects sharply']],
            },
            expectedResult: { en: 'The floating needle settles pointing North–South every time.' },
            conclusion: { en: 'A magnetized needle rotates along Earth’s magnetic field.' },
            safetyNote: { en: 'Handle the pointed sewing needle carefully by its blunt eye end.' },
            predictionQuestion: { en: 'What happens if you rotate the cup slightly?' },
            predictionOptions: { en: ['The needle turns back to point North–South', 'The water turns green', 'The needle sinks to brass'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Water lets the needle spin with almost zero friction.'] },
            whyItHappens: { en: 'Earth’s geomagnetic field pulls the magnetic poles back toward North–South.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse6-chem-materials',
        chapterNumber: 6,
        title: { en: 'Materials Around Us & Separation of Substances', hi: 'हमारे चारों ओर के पदार्थ', kn: 'ನಮ್ಮ ಸುತ್ತಲಿನ ವಸ್ತುಗಳು' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Properties & Separation' },
        textbookName: 'Curiosity Class 6',
        board: 'cbse',
        classLevel: 6,
        session: '2025-26',
        conceptSummary: {
          en: 'Materials differ in lustre, hardness, solubility, and transparency; mixtures are separated via filtration, sedimentation, decantation, and evaporation.',
        },
        topics: [
          {
            id: 'cbse6-chem-t1',
            title: { en: 'Solubility, Transparency & Mixture Separation' },
            subtopics: { en: ['Translucent vs transparent vs opaque', 'Sedimentation & decantation', 'Filtration & solar salt evaporation'] },
            explanation: { en: 'Insoluble sand settles during sedimentation and separates cleanly through filter paper pores.' },
          },
        ],
        definitions: [
          { id: 'cbse6-chem-d1', term: { en: 'Filtrate' }, definition: { en: 'The clear liquid that passes through a strainer or filter paper after trapping solid residue.' } },
        ],
        keyConcepts: { en: ['Sugar and salt dissolve completely in water (soluble); chalk and sawdust do not.'] },
        diagramKind: 'states-of-matter',
        diagramCaption: { en: 'Particle arrangement in solids, liquids, and dissolved mixtures.' },
        realLifeApplications: { en: ['Salt pans evaporate seawater in sunlight; tea strainers perform everyday filtration.'] },
        revisionNotes: { en: ['Churning separates cream/butter from curd by centrifugal density difference.'] },
        chapterQuestions: [
          {
            id: 'cbse6-chem-q1',
            type: 'short',
            question: { en: 'How can you separate a dry mixture of iron filings, sand, and common salt?' },
            answer: { en: 'Pull iron out with a magnet, dissolve salt in water, filter out insoluble sand, then evaporate water to recover dry salt.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse6-chem-m1',
            question: { en: 'Which method recovers dissolved salt from seawater?' },
            options: { en: ['Handpicking', 'Winnowing', 'Evaporation', 'Sieving'] },
            correctIndex: 2,
            explanation: { en: 'Water escapes as vapour while solid salt crystals stay behind.' },
          },
        ],
        experiments: [
          {
            id: 'cbse6-chem-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'Muddy Water Sedimentation, Filtration & Chemistry Lab Simulation' },
            objective: { en: 'Clarify muddy water step-by-step and compare mixtures vs pure substances in Chemistry World.' },
            materials: { en: ['2 clean tumblers', 'Soil + tap water', 'Clean cotton cloth / filter paper', 'Funnel'] },
            scientificPrinciple: { en: 'Heavier soil particles settle by gravity; finer suspended silt is trapped by narrow cloth pores.' },
            steps: {
              en: [
                'Stir a spoon of garden soil in water and let it stand undisturbed for 10 minutes (sedimentation).',
                'Pour upper cloudy layer gently into another cup (decantation) and pass through folded cloth/filter paper.',
                'Explore pure elements, compounds, and reactions inside the Chemistry Lab.',
              ],
            },
            observationTable: {
              columns: { en: ['Stage', 'Water Appearance'] },
              sampleRows: [['Freshly stirred', 'Brown & muddy'], ['After 10 min settling', 'Soil at bottom, slightly cloudy top'], ['After filtration', 'Clear water (filtrate)']],
            },
            expectedResult: { en: 'Visible mud particles are left behind on the filter cloth.' },
            conclusion: { en: 'Sedimentation followed by filtration separates insoluble solids from water.' },
            safetyNote: { en: 'Do not drink filtered classroom test water—germs pass through paper pores.' },
            predictionQuestion: { en: 'Can cloth filtration remove dissolved table salt from water?' },
            predictionOptions: { en: ['No, dissolved salt ions are smaller than cloth pores', 'Yes, every salt crystal stops', 'Water turns solid'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Dissolved salt breaks down to microscopic ions.'] },
            whyItHappens: { en: 'Only undissolved suspended solids are trapped mechanically by filter pores.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse6-bio-diversity',
        chapterNumber: 2,
        title: { en: 'Diversity in the Living World', hi: 'सजीव जगत में विविधता', kn: 'ಜೀವಜಗತ್ತಿನಲ್ಲಿ ವೈವಿಧ್ಯತೆ' },
        primarySubject: 'biology',
        topicTag: { en: 'Plant Venation & Adaptations' },
        textbookName: 'Curiosity Class 6',
        board: 'cbse',
        classLevel: 6,
        session: '2025-26',
        conceptSummary: {
          en: 'Plants show clear patterns connecting leaf venation, root systems, and cotyledons; animals adapt traits to desert, aquatic, or mountain habitats.',
        },
        topics: [
          {
            id: 'cbse6-bio-t1',
            title: { en: 'Reticulate vs Parallel Venation & Root Types' },
            subtopics: { en: ['Dicot taproot + reticulate net veins', 'Monocot fibrous root + parallel veins', 'Camel & cactus desert adaptations'] },
            explanation: { en: 'Examining a fallen leaf predicts whether a plant has a deep taproot or shallow fibrous roots.' },
          },
        ],
        definitions: [
          { id: 'cbse6-bio-d1', term: { en: 'Adaptation' }, definition: { en: 'Special body features or habits that help an organism survive in its natural habitat.' } },
        ],
        keyConcepts: { en: ['Reticulate venation pairs with taproot (hibiscus, neem); parallel venation pairs with fibrous roots (grass, maize).'] },
        diagramKind: 'photosynthesis-stomata',
        diagramCaption: { en: 'Leaf structure, veins, and stomatal exchange adapted to local habitat.' },
        biologyProcesses: [
          {
            id: 'cbse6-bio-bp1',
            title: { en: 'Identifying Plant Groups Safely' },
            steps: { en: ['Inspect vein pattern on fallen leaf.', 'Check soaked seed for 1 (monocot) or 2 (dicot) halves.'] },
          },
        ],
        realLifeApplications: { en: ['Planting deep-rooted native trees holds hillside soil; fibrous grasses prevent bund erosion.'] },
        revisionNotes: { en: ['Cactus spines reduce water loss; streamlined fish bodies reduce water drag.'] },
        chapterQuestions: [
          {
            id: 'cbse6-bio-q1',
            type: 'short',
            question: { en: 'What kind of roots will a maize plant with parallel leaf veins have?' },
            answer: { en: 'Fibrous roots (monocot plant).' },
          },
        ],
        mcqs: [
          {
            id: 'cbse6-bio-m1',
            question: { en: 'Which feature helps mountain pine trees shed heavy snow easily?' },
            options: { en: ['Flat broad banana leaves', 'Cone-shaped crown & sloping needle leaves', 'Floating air bladders', 'Pneumatophores'] },
            correctIndex: 1,
            explanation: { en: 'Sloping branches and narrow needle leaves prevent snow from piling up and breaking limbs.' },
          },
        ],
        experiments: [
          {
            id: 'cbse6-bio-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'Leaf Venation & Seed Cotyledon Classification Lab' },
            objective: { en: 'Compare leaf veins and soaked seed halves alongside the interactive Biology cell & plant explorer.' },
            materials: { en: ['Fallen peepal/hibiscus & grass leaves', 'Soaked chana & maize seeds', 'Biology Lab Simulator'] },
            scientificPrinciple: { en: 'Leaf vein architecture correlates directly with embryo seed leaves (1 vs 2 cotyledons).' },
            steps: {
              en: [
                'Trace veins of two fallen leaves: net-like (reticulate) vs straight lines (parallel).',
                'Gently peel soaked chana and maize seeds to count cotyledons.',
                'Open Biology World to inspect plant tissues and photosynthetic cells.',
              ],
            },
            observationTable: {
              columns: { en: ['Plant', 'Venation', 'Seed Halves', 'Likely Root Type'] },
              sampleRows: [['Chana / Hibiscus', 'Reticulate', '2 (Dicot)', 'Taproot'], ['Maize / Grass', 'Parallel', '1 (Monocot)', 'Fibrous root']],
            },
            expectedResult: { en: 'Two-cotyledon seeds match net-veined leaves; one-cotyledon seeds match parallel veins.' },
            conclusion: { en: 'Plant structure follows coordinated botanical classification rules.' },
            safetyNote: { en: 'Collect fallen leaves; do not uproot healthy garden plants.' },
            predictionQuestion: { en: 'If a mango leaf has net-like reticulate veins, how many cotyledons does a mango seed have?' },
            predictionOptions: { en: ['2 cotyledons (Dicot)', '1 cotyledon (Monocot)', 'Zero'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Reticulate venation belongs to dicots.'] },
            whyItHappens: { en: 'Vascular bundle arrangement in dicots forms branching nets in leaves and two seed leaves.' },
          },
        ],
      }),
    ],
  },

  // =========================================================================
  // CBSE CLASS 7 — NCERT Science (2025-26)
  // =========================================================================
  {
    id: 'cbse-c7-2025-26',
    classLevel: 7,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · NCERT Class 7 Science',
    textbookName: 'Science — Class 7 (NCERT)',
    sourceTitle: 'NCERT Class 7 Science Textbook',
    sourceUrl: NCERT_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'Class 7 CBSE Science units covering Heat & Thermodynamics, Electric Current & Circuits, Light/Mirrors/Lenses, Acids & Bases, and Life Transportation with simulations.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse7-phy-electric',
        chapterNumber: 10,
        title: { en: 'Electric Current and its Effects', hi: 'विद्युत धारा और इसके प्रभाव', kn: 'ವಿದ್ಯುತ್ ಪ್ರವಾಹ ಮತ್ತು ಅದರ ಪರಿಣಾಮಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Circuits, Heating & Electromagnet' },
        textbookName: 'NCERT Class 7 Science',
        board: 'cbse',
        classLevel: 7,
        session: '2025-26',
        conceptSummary: {
          en: 'Circuit symbols represent cells, switches, bulbs, and resistors; current warms high-resistance coils and magnetizes solenoids.',
        },
        topics: [
          {
            id: 'cbse7-phy-el-t1',
            title: { en: 'Circuit Diagrams, Series/Parallel & Heating Effect' },
            subtopics: { en: ['Battery vs single cell symbols', 'Open vs closed switch', 'Fuse & MCB protection'] },
            explanation: { en: 'Current flows only along an unbroken conducting path from positive terminal to negative terminal.' },
          },
        ],
        definitions: [
          { id: 'cbse7-phy-el-d1', term: { en: 'Battery' }, definition: { en: 'A combination of two or more electric cells connected positive-to-negative to supply higher voltage.' } },
        ],
        keyConcepts: { en: ['Filament bulbs waste energy as heat; LEDs stay cooler and last far longer.'] },
        diagramKind: 'electric-circuit',
        diagramCaption: { en: 'Closed DC circuit with voltage source, resistor load, and ammeter.' },
        formulas: [
          { id: 'cbse7-phy-el-f1', name: { en: "Ohm's Law & Power" }, formula: 'I = V / R   |   P = V × I', variables: { en: 'V = Volts, I = Amperes, R = Ohms' }, unit: 'Ampere (A)' },
        ],
        solvedNumericals: [
          {
            id: 'cbse7-phy-el-n1',
            problem: { en: 'Two 1.5 V cells drive current through a 6 Ω bulb filament. Calculate circuit current.' },
            given: ['V = 1.5 + 1.5 = 3.0 V', 'R = 6 Ω'],
            formulaUsed: 'I = V / R',
            solutionSteps: ['I = 3.0 / 6 = 0.5 A'],
            finalAnswer: '0.5 A',
          },
        ],
        realLifeApplications: { en: ['Electric bells use intermittent electromagnets; geysers and rice cookers use heating coils.'] },
        revisionNotes: { en: ['Always inspect ISI certification on fuses, extension cords, and appliances.'] },
        chapterQuestions: [
          {
            id: 'cbse7-phy-el-q1',
            type: 'short',
            question: { en: 'Why does a compass needle near a wire deflect when the switch is turned ON?' },
            answer: { en: 'Electric current creates a magnetic field around the conductor that exerts torque on the compass magnet.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse7-phy-el-m1',
            question: { en: 'Which symbol has a longer vertical line and a shorter thicker vertical line?' },
            options: { en: ['Switch ON', 'Electric cell (+ long, − thick short)', 'Bulb', 'Resistor'] },
            correctIndex: 1,
            explanation: { en: 'Long thin line marks positive terminal; short thick line marks negative terminal.' },
          },
        ],
        experiments: [
          {
            id: 'cbse7-phy-el-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'electricity',
            title: { en: 'Simulated Series vs Parallel Circuit Lab' },
            objective: { en: 'Compare current flow and equivalent resistance in Series vs Parallel connections inside the virtual circuit lab.' },
            materials: { en: ["Interactive Ohm's Law & DC Circuit Simulation", 'Notebook for V–I readings'] },
            scientificPrinciple: { en: 'Series bulbs share voltage and dim; parallel paths share total voltage equally and draw larger current.' },
            steps: {
              en: [
                "Launch the Ohm's Law & Circuits Simulation and set Voltage = 12 V, R₁ = 10 Ω, R₂ = 20 Ω.",
                'Measure Current I and Power P in Series topology.',
                'Switch to Parallel topology and observe how Current I jumps upward.',
              ],
            },
            observationTable: {
              columns: { en: ['Topology', 'Equivalent R_eq (Ω)', 'Total Current I (A)', 'Power (W)'] },
              sampleRows: [['Series', '30.0 Ω', '0.40 A', '4.8 W'], ['Parallel', '6.67 Ω', '1.80 A', '21.6 W']],
            },
            expectedResult: { en: 'Parallel circuit resistance drops below either individual resistor and carries higher current.' },
            conclusion: { en: 'Household wiring uses parallel circuits so every appliance gets full voltage independently.' },
            safetyNote: { en: 'In real circuits, use dry 1.5 V–6 V cells only—never mains wall outlets.' },
            predictionQuestion: { en: 'If one bulb fuses in a parallel household room circuit, what happens to the other bulbs?' },
            predictionOptions: { en: ['Other bulbs stay brightly lit', 'All bulbs immediately shut off', 'Battery voltage reverses'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Parallel branches have independent paths back to the source.'] },
            whyItHappens: { en: 'Current continues flowing through intact parallel branches.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse7-phy-light',
        chapterNumber: 11,
        title: { en: 'Light — Reflection, Mirrors & Lenses', hi: 'प्रकाश — परावर्तन और लेंस', kn: 'ಬೆಳಕು — ಪ್ರತಿಫಲನ ಮತ್ತು ಮಸೂರಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Mirrors, Lenses & Spectrum' },
        textbookName: 'NCERT Class 7 Science',
        board: 'cbse',
        classLevel: 7,
        session: '2025-26',
        conceptSummary: {
          en: 'Plane mirrors form upright laterally inverted virtual images; concave/convex mirrors and lenses curve light rays to focus or spread beams.',
        },
        topics: [
          {
            id: 'cbse7-phy-lt-t1',
            title: { en: 'Spherical Mirrors, Convex/Concave Lenses & Newton Disc' },
            subtopics: { en: ['Real vs virtual images', 'Converging convex lens magnifying glass', '7 colours of sunlight (VIBGYOR)'] },
            explanation: { en: 'A glass prism splits white sunlight into seven spectral colours because different wavelengths bend slightly differently.' },
          },
        ],
        definitions: [
          { id: 'cbse7-phy-lt-d1', term: { en: 'Real Image' }, definition: { en: 'An inverted image formed where light rays actually converge, which can be caught on a screen.' } },
        ],
        keyConcepts: { en: ['Convex mirrors give a wide rear view on scooters and cars.', 'White light is a mixture of seven rainbow colours.'] },
        diagramKind: 'optics-lens-mirror',
        diagramCaption: { en: 'Refraction and dispersion of white light passing through an optical prism.' },
        formulas: [
          { id: 'cbse7-phy-lt-f1', name: { en: 'Law of Reflection' }, formula: '∠i = ∠r', variables: { en: '∠i = angle of incidence, ∠r = angle of reflection' }, unit: 'degrees (°)' },
        ],
        solvedNumericals: [],
        realLifeApplications: { en: ['Dentists use concave mirrors to see enlarged teeth; vehicle wing mirrors are convex.'] },
        revisionNotes: { en: ['Never look directly at the Sun through any lens or magnifying glass!'] },
        chapterQuestions: [
          {
            id: 'cbse7-phy-lt-q1',
            type: 'short',
            question: { en: 'Why does the word AMBULANCE appear reversed on the front hood of an ambulance?' },
            answer: { en: 'Plane and convex rear-view mirrors laterally invert images, making the reversed letters read correctly to drivers ahead.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse7-phy-lt-m1',
            question: { en: 'Which mirror always forms an erect, diminished image over a wide field of view?' },
            options: { en: ['Concave mirror', 'Convex mirror', 'Double-concave lens', 'Prism'] },
            correctIndex: 1,
            explanation: { en: 'Convex mirrors diverge rays outward so vehicles behind appear smaller within a wide field.' },
          },
        ],
        experiments: [
          {
            id: 'cbse7-phy-lt-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'optics',
            title: { en: 'Prism Dispersion & Snell Refraction Simulation' },
            objective: { en: 'Bend light beams through glass/water prisms inside the Optical Prism Simulation and spin a Newton colour disc.' },
            materials: { en: ['Optical Prism 3D Simulation', 'Compact mirror / prism / CD edge', 'Cardboard disc + 7 crayons'] },
            scientificPrinciple: { en: 'Refraction occurs because light speed slows down in denser glass (n ≈ 1.52) compared to air (n = 1.00).' },
            steps: {
              en: [
                'Launch the Optical Prism Simulation and vary incidence angle θ₁ from 15° to 50°.',
                'Observe bent refracted ray θ₂ and check when Total Internal Reflection triggers if n₁ > n₂.',
                'Hold a shiny CD at a window slant or spin a 7-colour cardboard Newton disc to test colour mixing.',
              ],
            },
            observationTable: {
              columns: { en: ['Incident Angle θ₁', 'Glass Index n₁', 'Refracted Angle θ₂', 'Observation'] },
              sampleRows: [['20°', '1.52', '31.3° (air exit)', 'Beam bends away from normal'], ['45°', '1.52', 'TIR Reflected', 'θ₁ exceeds critical angle 41.1°']],
            },
            expectedResult: { en: 'White light spreads into rainbow colours; steep angles inside glass reflect internally.' },
            conclusion: { en: 'Optical media bend rays predictably by Snell’s Law.' },
            safetyNote: { en: 'Never focus sunlight onto skin, dry paper, or eyes.' },
            predictionQuestion: { en: 'When a rainbow cardboard disc spins very rapidly in bright light, what colour does it appear?' },
            predictionOptions: { en: ['Greyish-white', 'Jet black', 'Pure red'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Persistence of vision blends all seven spectral colours together.'] },
            whyItHappens: { en: 'Your retina merges fast-moving VIBGYOR colours back into white light.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse7-phy-heat',
        chapterNumber: 3,
        title: { en: 'Heat, Temperature & Transfer Modes', hi: 'ऊष्मा और तापमान', kn: 'ಉಷ್ಣ ಮತ್ತು ತಾಪಮಾನ' },
        primarySubject: 'physics',
        topicTag: { en: 'Thermodynamics & Heat Transfer' },
        textbookName: 'NCERT Class 7 Science',
        board: 'cbse',
        classLevel: 7,
        session: '2025-26',
        conceptSummary: {
          en: 'Heat travels from hotter to colder objects by conduction in solids, convection in fluids, and radiation across vacuum.',
        },
        topics: [
          {
            id: 'cbse7-phy-ht-t1',
            title: { en: 'Thermometers, Conduction, Convection & Sea Breeze' },
            subtopics: { en: ['Clinical 35–42 °C vs Laboratory −10–110 °C', 'Conductors vs insulators', 'Day sea breeze & night land breeze'] },
            explanation: { en: 'Metals conduct heat quickly via free electrons; trapped air in woollen blankets blocks heat loss.' },
          },
        ],
        definitions: [
          { id: 'cbse7-phy-ht-d1', term: { en: 'Radiation' }, definition: { en: 'Heat transfer via infrared waves that needs no material medium—how sunlight reaches Earth.' } },
        ],
        keyConcepts: { en: ['Dark matte surfaces absorb and emit heat faster than shiny white surfaces.'] },
        diagramKind: 'gas-particles',
        diagramCaption: { en: 'Faster particle kinetic motion as chamber temperature increases.' },
        formulas: [
          { id: 'cbse7-phy-ht-f1', name: { en: 'Kelvin-Celsius Link' }, formula: 'T(K) = T(°C) + 273.15', variables: { en: 'T = Temperature' }, unit: 'Kelvin (K)' },
        ],
        solvedNumericals: [],
        realLifeApplications: { en: ['Cooking pans have copper bottoms (conductor) and plastic handles (insulator).'] },
        revisionNotes: { en: ['Normal human body temperature is 37 °C (98.6 °F).'] },
        chapterQuestions: [
          {
            id: 'cbse7-phy-ht-q1',
            type: 'short',
            question: { en: 'Why do coastal towns experience cool sea breezes during hot afternoons?' },
            answer: { en: 'Land heats faster than water, causing warm land air to rise while cooler air sweeps in from the sea.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse7-phy-ht-m1',
            question: { en: 'How does warmth from the Sun reach Earth across empty space?' },
            options: { en: ['Conduction', 'Convection', 'Radiation', 'Filtration'] },
            correctIndex: 2,
            explanation: { en: 'Only thermal radiation crosses vacuum without needing solid or fluid particles.' },
          },
        ],
        experiments: [
          {
            id: 'cbse7-phy-ht-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'thermodynamics',
            title: { en: 'Particle Heat Motion & Sun-Warmth Tin Simulation' },
            objective: { en: 'Observe molecular speed increase with temperature in the 3D Gas & Heat Simulator.' },
            materials: { en: ['3D Thermodynamics Simulation', 'Black-painted tin vs silver tin + thermometer'] },
            scientificPrinciple: { en: 'Higher temperature means higher average molecular kinetic energy inside matter.' },
            steps: {
              en: [
                'Launch the Thermodynamics Simulation and raise temperature T_h from 250 K to 450 K.',
                'Watch particle collisions intensify against the piston and pressure P climb.',
              ],
            },
            observationTable: {
              columns: { en: ['Temperature T (K)', 'Chamber Volume (L)', 'Measured Pressure (kPa)'] },
              sampleRows: [['260 K', '4.0 L', '810.6 kPa'], ['420 K', '4.0 L', '1309.5 kPa']],
            },
            expectedResult: { en: 'Raising temperature linearly boosts particle speed and pressure.' },
            conclusion: { en: 'Thermal energy increases microscopic particle motion.' },
            safetyNote: { en: 'Never put clinical thermometers in boiling water—they crack above 42 °C.' },
            predictionQuestion: { en: 'Which clothing keeps a person cooler in harsh summer sun?' },
            predictionOptions: { en: ['Light white cotton', 'Thick black polyester', 'Rubber raincoat'] },
            predictionCorrectIndex: 0,
            hints: { en: ['White reflects solar radiation.'] },
            whyItHappens: { en: 'White fabric reflects most visible sunlight instead of absorbing heat.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse7-chem-acids',
        chapterNumber: 4,
        title: { en: 'Acids, Bases and Salts', hi: 'अम्ल, क्षारक और लवण', kn: 'ಆಮ್ಲಗಳು, ಪ್ರತ್ಯಾಮ್ಲಗಳು ಮತ್ತು ಲವಣಗಳು' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Indicators & Neutralization' },
        textbookName: 'NCERT Class 7 Science',
        board: 'cbse',
        classLevel: 7,
        session: '2025-26',
        conceptSummary: {
          en: 'Acids taste sour and turn blue litmus red; bases feel soapy and turn red litmus blue; together they react to form salt and water.',
        },
        topics: [
          {
            id: 'cbse7-chem-t1',
            title: { en: 'Natural Indicators: Litmus, Turmeric & China Rose' },
            subtopics: { en: ['Citric, acetic & lactic acids', 'Turmeric turns reddish-brown in soap', 'Neutralization reaction'] },
            explanation: { en: 'Plant dyes change molecular shape when exposed to H⁺ (acids) or OH⁻ (bases).' },
          },
        ],
        definitions: [
          { id: 'cbse7-chem-d1', term: { en: 'Neutralization' }, definition: { en: 'Reaction between an acid and a base forming salt, water, and releasing heat.' } },
        ],
        keyConcepts: { en: ['Ant bites inject formic acid—calamine (zinc carbonate) or baking soda neutralizes the sting.'] },
        diagramKind: 'acids-bases-ph',
        diagramCaption: { en: 'pH indicator bar showing acidic (0–6), neutral (7), and basic (8–14) behaviour.' },
        chemicalEquations: [
          {
            id: 'cbse7-chem-eq1',
            title: { en: 'Hydrochloric Acid + Sodium Hydroxide' },
            equation: 'HCl (aq) + NaOH (aq) → NaCl (aq) + H₂O (l) + Heat',
            reactionType: 'Neutralization',
            explanation: { en: 'Equal acid and base neutralize into common salt and water.' },
          },
        ],
        realLifeApplications: { en: ['Farmers add slaked lime (base) to overly acidic soil; milk of magnesia eases stomach acidity.'] },
        revisionNotes: { en: ['Never taste unknown lab chemicals—always use indicators!'] },
        chapterQuestions: [
          {
            id: 'cbse7-chem-q1',
            type: 'short',
            question: { en: 'Why does a turmeric curry stain on a shirt turn red when washed with soap?' },
            answer: { en: 'Soap solution is basic (alkaline), and turmeric indicator turns reddish-brown in bases.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse7-chem-m1',
            question: { en: 'China rose (Hibiscus) petal extract turns ______ in acidic lemon juice.' },
            options: { en: ['Dark pink / magenta', 'Green', 'Black', 'Colourless'] },
            correctIndex: 0,
            explanation: { en: 'China rose turns dark pink (magenta) in acids and green in bases.' },
          },
        ],
        experiments: [
          {
            id: 'cbse7-chem-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'Turmeric Secret-Message Indicator & Chemistry pH Simulation' },
            objective: { en: 'Test household lemon juice and soap with homemade turmeric strips and explore the Chemistry Lab.' },
            materials: { en: ['Turmeric powder + paper strip', 'Lemon juice drops', 'Soap water drops', 'Chemistry World Simulator'] },
            scientificPrinciple: { en: 'Curcumin pigment switches from yellow (acid/neutral) to deep red-brown in alkaline solutions.' },
            steps: {
              en: [
                'Rub turmeric paste onto white paper, dry it, and cut into strips.',
                'Touch one drop of soap water (turns brick-red) then add lemon juice over it (returns yellow!).',
                'Open Chemistry World to balance acid-base neutralization reactions.',
              ],
            },
            observationTable: {
              columns: { en: ['Sample', 'Turmeric Strip Colour', 'Nature'] },
              sampleRows: [['Soap water', 'Reddish-brown', 'Basic'], ['Lemon juice', 'Stays yellow / restores yellow', 'Acidic']],
            },
            expectedResult: { en: 'Lemon acid reverses the red turmeric stain back to yellow.' },
            conclusion: { en: 'Acid neutralizes base and restores indicator colour.' },
            safetyNote: { en: 'Wash hands after handling strong detergents or washing soda.' },
            predictionQuestion: { en: 'What colour appears on turmeric paper if dipped in baking soda solution?' },
            predictionOptions: { en: ['Reddish-brown (Basic)', 'Bright blue', 'Purple'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Baking soda is mildly alkaline.'] },
            whyItHappens: { en: 'Curcumin ionizes in alkaline pH to reflect red wavelengths.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse7-bio-transport',
        chapterNumber: 7,
        title: { en: 'Transportation in Animals and Plants', hi: 'जंतुओं और पादपों में परिवहन', kn: 'ಪ್ರಾಣಿಗಳು ಮತ್ತು ಸಸ್ಯಗಳಲ್ಲಿ ಸಾಗಣೆ' },
        primarySubject: 'biology',
        topicTag: { en: 'Heart, Blood, Xylem & Phloem' },
        textbookName: 'NCERT Class 7 Science',
        board: 'cbse',
        classLevel: 7,
        session: '2025-26',
        conceptSummary: {
          en: 'The four-chambered heart pumps oxygen-rich and CO₂-rich blood through arteries and veins; plants move water up xylem via transpiration pull.',
        },
        topics: [
          {
            id: 'cbse7-bio-t1',
            title: { en: 'Heart Pulse, Blood Vessels & Xylem/Phloem' },
            subtopics: { en: ['Arteries vs veins', 'Platelets clotting', 'Xylem water vs Phloem food transport'] },
            explanation: { en: 'Xylem draws water upward like a drinking straw when water evaporates out of leaf stomata.' },
          },
        ],
        definitions: [
          { id: 'cbse7-bio-d1', term: { en: 'Xylem' }, definition: { en: 'Vascular pipe tissue carrying water and dissolved soil minerals upward from roots to leaves.' } },
        ],
        keyConcepts: { en: ['Pulse rate averages ~72–80 beats/min at rest and speeds up during running.'] },
        diagramKind: 'human-circulatory',
        diagramCaption: { en: 'Circulation loop exchanging oxygen and carbon dioxide across heart chambers.' },
        biologyProcesses: [
          {
            id: 'cbse7-bio-bp1',
            title: { en: 'Double Loop Blood Flow' },
            steps: { en: ['Right ventricle pumps deoxygenated blood to lungs.', 'Left ventricle pumps oxygenated blood to the entire body.'] },
          },
        ],
        realLifeApplications: { en: ['Wrist pulse checks heart rate; drip irrigation feeds root zones efficiently.'] },
        revisionNotes: { en: ['Red blood cells carry haemoglobin; white blood cells fight infection.'] },
        chapterQuestions: [
          {
            id: 'cbse7-bio-q1',
            type: 'short',
            question: { en: 'Why do veins have one-way valves while thick elastic arteries normally do not?' },
            answer: { en: 'Veins return blood under lower pressure toward the heart, so valves stop blood from flowing backward.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse7-bio-m1',
            question: { en: 'Which plant tissue carries prepared sugar food from green leaves to roots and fruits?' },
            options: { en: ['Xylem', 'Phloem', 'Root hair only', 'Guard cell'] },
            correctIndex: 1,
            explanation: { en: 'Phloem transports food sugars throughout the plant.' },
          },
        ],
        experiments: [
          {
            id: 'cbse7-bio-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'Wrist Pulse Rate Counter & Biology Organ Explorer' },
            objective: { en: 'Compare resting vs post-jog wrist pulse beats per minute and inspect transport vessels in Biology World.' },
            materials: { en: ['Stopwatch / phone timer', 'Notebook', 'Interactive Biology Lab'] },
            scientificPrinciple: { en: 'Muscles consume more oxygen during exercise, signalling the heart to pump faster.' },
            steps: {
              en: [
                'Place two fingertips gently on your inner wrist below the thumb and count beats for 60 seconds while seated.',
                'Jog safely in place for 60 seconds and immediately recount wrist beats.',
                'Open Biology World to explore heart chambers, RBCs, and plant xylem flow.',
              ],
            },
            observationTable: {
              columns: { en: ['Activity State', 'Beats in 1 Minute'] },
              sampleRows: [['Seated Calmly', '74 bpm'], ['Right After 1 min Jog', '112 bpm']],
            },
            expectedResult: { en: 'Pulse jumps noticeably after movement and settles back within 3–4 minutes.' },
            conclusion: { en: 'Heart pumping rate adapts dynamically to cellular oxygen demand.' },
            safetyNote: { en: 'Rest immediately if dizzy; press gently on wrist without squeezing.' },
            predictionQuestion: { en: 'What happens to your breathing and pulse rate when climbing 3 flights of stairs?' },
            predictionOptions: { en: ['Both pulse and breathing rate rise together', 'Both drop to zero', 'Only height changes'] },
            predictionCorrectIndex: 0,
            hints: { en: ['More muscle work needs faster oxygen delivery.'] },
            whyItHappens: { en: 'Increased cardiac output delivers O₂ and clears CO₂ faster.' },
          },
        ],
      }),
    ],
  },

  // =========================================================================
  // CBSE CLASS 9 — NCERT Science (2025-26)
  // =========================================================================
  {
    id: 'cbse-c9-2025-26',
    classLevel: 9,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · NCERT Class 9 Science',
    textbookName: 'Science — Class 9 (NCERT)',
    sourceTitle: 'NCERT Class 9 & CBSE Practicals',
    sourceUrl: NCERT_URL,
    secondarySourceTitle: 'CBSE Secondary Practical Syllabus',
    secondarySourceUrl: CBSE_PRAC_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'Class 9 Physics (Motion, Forces, Gravitation, Sound), Chemistry (Matter & Atoms), and Biology (Cells) with official CBSE practicals and interactive simulations.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse9-phy-motion',
        chapterNumber: 7,
        title: { en: 'Motion, Equations of Motion & 2D Trajectory', hi: 'गति और गति के समीकरण', kn: 'ಚಲನೆ ಮತ್ತು ಚಲನೆಯ ಸಮೀಕರಣಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Kinematics & Graphs' },
        textbookName: 'NCERT Class 9 Science',
        board: 'cbse',
        classLevel: 9,
        session: '2025-26',
        conceptSummary: {
          en: 'Speed, velocity, and acceleration describe how objects move; the three kinematic equations link u, v, a, t, and displacement s.',
        },
        topics: [
          {
            id: 'cbse9-phy-m-t1',
            title: { en: 'Distance vs Displacement & Three Equations of Motion' },
            subtopics: { en: ['v = u + at', 's = ut + ½at²', 'v² − u² = 2as', 'Velocity–time graph area'] },
            explanation: { en: 'Slope of a velocity–time graph gives acceleration; total area beneath it gives displacement.' },
          },
        ],
        definitions: [
          { id: 'cbse9-phy-m-d1', term: { en: 'Acceleration (a)' }, definition: { en: 'Rate of change of velocity per unit time, a = (v − u)/t, in m/s².' } },
        ],
        keyConcepts: { en: ['Returning to your starting point gives zero displacement even if total distance is large.'] },
        diagramKind: 'projectile-motion',
        diagramCaption: { en: 'Constant downward acceleration g = 9.81 m/s² curves vertical motion.' },
        formulas: [
          { id: 'cbse9-phy-m-f1', name: { en: 'First & Second Equations' }, formula: 'v = u + at   |   s = ut + ½at²', variables: { en: 'u = initial velocity, v = final velocity, a = acceleration' }, unit: 'm/s, m' },
        ],
        solvedNumericals: [
          {
            id: 'cbse9-phy-m-n1',
            problem: { en: 'A train starts from rest and reaches 20 m/s in 10 s uniformly. Find acceleration and distance covered.' },
            given: ['u = 0', 'v = 20 m/s', 't = 10 s'],
            formulaUsed: 'a = (v − u)/t; s = ut + ½at²',
            solutionSteps: ['a = (20 − 0)/10 = 2 m/s²', 's = 0 + 0.5 × 2 × 10² = 100 m'],
            finalAnswer: 'a = 2 m/s², Distance = 100 m',
          },
        ],
        realLifeApplications: { en: ['Vehicle braking distances scale with v²; rocket launches obey uniform acceleration equations.'] },
        revisionNotes: { en: ['Convert km/h to m/s by multiplying by 5/18.'] },
        chapterQuestions: [
          {
            id: 'cbse9-phy-m-q1',
            type: 'short',
            question: { en: 'When does a moving object have constant speed yet non-zero acceleration?' },
            answer: { en: 'In uniform circular motion (like a stone whirled on a string), speed is constant while velocity direction keeps changing.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse9-phy-m-m1',
            question: { en: 'What physical quantity does the area under a velocity–time graph represent?' },
            options: { en: ['Acceleration', 'Displacement', 'Mass', 'Force'] },
            correctIndex: 1,
            explanation: { en: 'Velocity × time equals displacement.' },
          },
        ],
        experiments: [
          {
            id: 'cbse9-phy-m-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'mechanics',
            title: { en: 'Simulated Projectile Kinematics: Independence of Horizontal & Vertical Motion' },
            objective: { en: 'Measure flight time T, maximum height H, and horizontal range R using Projectile Motion Simulation.' },
            materials: { en: ['Interactive Projectile Motion Simulation'] },
            scientificPrinciple: { en: 'Horizontal velocity vₓ stays constant while vertical velocity v_y accelerates downward at g = 9.81 m/s².' },
            steps: {
              en: [
                'Set v₀ = 24 m/s and gravity g = 9.81 m/s² in the Projectile Motion Simulation.',
                'Vary angle θ = 30°, 45°, 60° and verify T = 2v₀sinθ / g and H = (v₀sinθ)²/(2g).',
              ],
            },
            observationTable: {
              columns: { en: ['Angle θ', 'Flight Time T (s)', 'Max Height H (m)', 'Range R (m)'] },
              sampleRows: [['30°', '2.45 s', '7.34 m', '50.8 m'], ['45°', '3.46 s', '14.68 m', '58.7 m'], ['60°', '4.24 s', '22.02 m', '50.8 m']],
            },
            expectedResult: { en: 'Complementary angles 30° and 60° produce identical range R.' },
            conclusion: { en: 'Kinematic equations accurately predict 2D flight paths.' },
            safetyNote: { en: 'Ensure ample open ground when testing real ball throws outdoors.' },
            predictionQuestion: { en: 'If you double launch speed v₀ at 45°, by what factor does horizontal range R increase?' },
            predictionOptions: { en: ['4 times (since R ∝ v₀²)', '2 times', 'Halves'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Check R = v₀² sin(2θ) / g.'] },
            whyItHappens: { en: 'Both horizontal speed and total time in the air double, multiplying range by 2 × 2 = 4.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse9-phy-sound',
        chapterNumber: 11,
        title: { en: 'Sound — Waves, Beats & Reflection', hi: 'ध्वनि और तरंगें', kn: 'ಧ್ವನಿ ಮತ್ತು ತರಂಗಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Mechanical Waves & Sound' },
        textbookName: 'NCERT Class 9 Science',
        board: 'cbse',
        classLevel: 9,
        session: '2025-26',
        conceptSummary: {
          en: 'Sound travels as longitudinal pressure waves needing a material medium; pitch rises with frequency f and wave speed satisfies v = f × λ.',
        },
        topics: [
          {
            id: 'cbse9-phy-s-t1',
            title: { en: 'Compression/Rarefaction, Pitch & Echoes' },
            subtopics: { en: ['v = λf wave equation', 'Audible 20 Hz–20 kHz range', 'Minimum 17.2 m echo distance & SONAR'] },
            explanation: { en: 'Sound speed in air (~343 m/s at 20 °C) is much faster in solids like steel (~5960 m/s).' },
          },
        ],
        definitions: [
          { id: 'cbse9-phy-s-d1', term: { en: 'Frequency (ν / f)' }, definition: { en: 'Number of complete oscillations per second, measured in Hertz (Hz).' } },
        ],
        keyConcepts: { en: ['To hear a distinct echo in air, a wall must be at least ~17.2 m away (0.1 s persistence).'] },
        diagramKind: 'waves-sound',
        diagramCaption: { en: 'Interactive sound wave showing wavelength λ and frequency oscillations.' },
        formulas: [
          { id: 'cbse9-phy-s-f1', name: { en: 'Wave Speed Relation' }, formula: 'v = f × λ', variables: { en: 'v = speed (m/s), f = frequency (Hz), λ = wavelength (m)' }, unit: 'm/s' },
        ],
        solvedNumericals: [
          {
            id: 'cbse9-phy-s-n1',
            problem: { en: 'A tuning fork vibrates at 343 Hz in air (speed 343 m/s). What is its wavelength?' },
            given: ['v = 343 m/s', 'f = 343 Hz'],
            formulaUsed: 'λ = v / f',
            solutionSteps: ['λ = 343 / 343 = 1.0 m'],
            finalAnswer: '1.0 m',
          },
        ],
        realLifeApplications: { en: ['Ultrasound hospital imaging, SONAR seafloor mapping, and stethoscope acoustics.'] },
        revisionNotes: { en: ['Higher amplitude = louder sound; higher frequency = shriller pitch.'] },
        chapterQuestions: [
          {
            id: 'cbse9-phy-s-q1',
            type: 'short',
            question: { en: 'Why can astronauts not hear each other directly in outer space without radios?' },
            answer: { en: 'Sound is a mechanical wave requiring air or solid molecules to vibrate; space is a vacuum.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse9-phy-s-m1',
            question: { en: 'Which property of a sound wave determines its musical pitch?' },
            options: { en: ['Amplitude', 'Frequency', 'Colour', 'Mass'] },
            correctIndex: 1,
            explanation: { en: 'Higher frequency produces higher pitch.' },
          },
        ],
        experiments: [
          {
            id: 'cbse9-phy-s-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'waves',
            title: { en: 'CBSE Class 9 Practical & Simulation: Sound Waves, Beats & Reflection' },
            objective: { en: 'Measure wavelength λ and beat frequency |f₁ − f₂| in the Waves Simulation & verify ∠i = ∠r sound reflection.' },
            materials: { en: ['Waves & Sound Interactive Simulation', '2 rolled chart-paper tubes', 'Ticking clock & hard board'] },
            scientificPrinciple: { en: 'Sound waves obey the laws of reflection just like light and superpose to create periodic beats.' },
            steps: {
              en: [
                'Launch the Waves & Sound Simulation; set f₁ = 260 Hz and f₂ = 264 Hz to see 4 Hz beat pulses.',
                'Vary frequency slider to observe wavelength λ = v / f shrink as frequency rises.',
                'Aim two paper tubes at a smooth hard board and check angle θ_r when ticking is loudest.',
              ],
            },
            observationTable: {
              columns: { en: ['Frequency f₁ (Hz)', 'Frequency f₂ (Hz)', 'Wavelength λ₁ (m)', 'Beat Freq (Hz)'] },
              sampleRows: [['260 Hz', '264 Hz', '1.319 m', '4 Hz'], ['440 Hz', '446 Hz', '0.780 m', '6 Hz']],
            },
            expectedResult: { en: 'Maximum tick sound occurs at ∠r = ∠i; higher f produces shorter λ.' },
            conclusion: { en: 'Sound obeys reflection and wave superposition v = fλ.' },
            safetyNote: { en: 'Keep headphone/speaker audio at comfortable moderate volume.' },
            predictionQuestion: { en: 'If f₁ = 300 Hz and f₂ = 305 Hz sound together, how many loudness beats are heard per second?' },
            predictionOptions: { en: ['5 beats/sec', '605 beats/sec', '0 beats/sec'] },
            predictionCorrectIndex: 0,
            hints: { en: ['f_beat = |f₁ − f₂|.'] },
            whyItHappens: { en: 'Constructive and destructive overlap peaks 5 times each second.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse9-chem-atoms',
        chapterNumber: 3,
        title: { en: 'Atoms, Molecules and Conservation of Mass', hi: 'परमाणु एवं अणु', kn: 'ಪರಮಾಣುಗಳು ಮತ್ತು ಅಣುಗಳು' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Chemical Laws & Mole Concept' },
        textbookName: 'NCERT Class 9 Science',
        board: 'cbse',
        classLevel: 9,
        session: '2025-26',
        conceptSummary: {
          en: 'Mass is neither created nor destroyed in a closed chemical reaction; pure compounds always combine elements in fixed mass ratios.',
        },
        topics: [
          {
            id: 'cbse9-chem-t1',
            title: { en: 'Conservation of Mass, Atomic Mass & Valency' },
            subtopics: { en: ['Lavoisier Conservation Law', 'Proust Constant Proportions (H₂O = 1:8)', 'Writing chemical formulas'] },
            explanation: { en: 'Balanced chemical equations ensure exact atom counts match on reactant and product sides.' },
          },
        ],
        definitions: [
          { id: 'cbse9-chem-d1', term: { en: 'Atomic Mass Unit (u)' }, definition: { en: 'Exactly 1/12th the mass of a single Carbon-12 atom.' } },
        ],
        keyConcepts: { en: ['Avogadro number N_A = 6.022 × 10²³ particles per mole.'] },
        diagramKind: 'chemical-reaction',
        diagramCaption: { en: 'Balanced reaction conserving every atom inside a closed flask.' },
        chemicalEquations: [
          {
            id: 'cbse9-chem-eq1',
            title: { en: 'Vinegar + Baking Soda (CO₂ Check)' },
            equation: 'NaHCO₃ + CH₃COOH → CH₃COONa + H₂O + CO₂↑',
            reactionType: 'Acid-Carbonate Reaction',
            explanation: { en: 'In a sealed flask total mass stays identical before and after fizzing.' },
          },
        ],
        realLifeApplications: { en: ['Accurate pharmaceutical dosing and water treatment stoichiometry.'] },
        revisionNotes: { en: ['Water always contains 1 g hydrogen per 8 g oxygen by mass.'] },
        chapterQuestions: [
          {
            id: 'cbse9-chem-q1',
            type: 'short',
            question: { en: 'Find the molecular mass of water H₂O (H = 1 u, O = 16 u).' },
            answer: { en: '2(1) + 16 = 18 u.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse9-chem-m1',
            question: { en: 'What is the mass ratio of Hydrogen to Oxygen in pure water (H₂O)?' },
            options: { en: ['1 : 8', '2 : 1', '8 : 1', '1 : 16'] },
            correctIndex: 0,
            explanation: { en: '2 u hydrogen : 16 u oxygen reduces to 1 : 8.' },
          },
        ],
        experiments: [
          {
            id: 'cbse9-chem-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'CBSE Class 9 Practical & Sim: Conservation of Mass in Chemical Reactions' },
            objective: { en: 'Verify mass stays conserved inside a sealed flask reaction and balance equations in Chemistry World.' },
            materials: { en: ['Conical flask + balloon', 'Baking soda + diluted vinegar', 'Digital scale', 'Chemistry World'] },
            scientificPrinciple: { en: 'Chemical reactions rearrange existing atoms without destroying or creating mass.' },
            steps: {
              en: [
                'Place vinegar inside flask and baking soda inside an attached uninflated balloon; weigh total assembly.',
                'Lift balloon so baking soda drops in; keep balloon sealed over neck and re-weigh.',
                'Practice balancing equations inside Chemistry World.',
              ],
            },
            observationTable: {
              columns: { en: ['State', 'Total Mass (g)'] },
              sampleRows: [['Before mixing (sealed)', '142.4 g'], ['After fizzing (balloon inflated)', '142.4 g']],
            },
            expectedResult: { en: 'Scale reading stays unchanged while balloon swells with CO₂.' },
            conclusion: { en: 'Total mass of reactants equals total mass of products in a closed system.' },
            safetyNote: { en: 'Secure the balloon tightly with a rubber band so gas does not pop it off.' },
            predictionQuestion: { en: 'Why would total mass appear slightly lower if the flask were left open?' },
            predictionOptions: { en: ['CO₂ gas escapes into room air', 'Atoms evaporate into nothing', 'Gravity turns off'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Gases have mass too!'] },
            whyItHappens: { en: 'Escaping CO₂ gas leaves the balance pan unless trapped.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse9-bio-cell',
        chapterNumber: 5,
        title: { en: 'The Fundamental Unit of Life (Cells & Osmosis)', hi: 'जीवन की मौलिक इकाई (कोशिका)', kn: 'ಜೀವದ ಮೂಲ ಘಟಕ (ಕೋಶ)' },
        primarySubject: 'biology',
        topicTag: { en: 'Cell Organelles & Osmosis' },
        textbookName: 'NCERT Class 9 Science',
        board: 'cbse',
        classLevel: 9,
        session: '2025-26',
        conceptSummary: {
          en: 'All organisms consist of cells containing selectively permeable membranes, nucleus, mitochondria, ER, Golgi body, and (in plants) cell wall + chloroplasts.',
        },
        topics: [
          {
            id: 'cbse9-bio-t1',
            title: { en: 'Prokaryotic vs Eukaryotic Cells & Osmosis' },
            subtopics: { en: ['Hypotonic swelling vs hypertonic shrinkage', 'Mitochondria ATP synthesis', 'Plant onion peel slide staining'] },
            explanation: { en: 'Water crosses plasma membranes toward higher solute concentration via osmosis.' },
          },
        ],
        definitions: [
          { id: 'cbse9-bio-d1', term: { en: 'Osmosis' }, definition: { en: 'Net movement of water molecules across a selectively permeable membrane from higher to lower water concentration.' } },
        ],
        keyConcepts: { en: ['Rigid cellulose cell walls prevent plant cells from bursting in pure water.'] },
        diagramKind: 'cell-osmosis',
        diagramCaption: { en: 'Plant cell swelling/shrinking inside hypotonic vs hypertonic salt water.' },
        biologyProcesses: [
          {
            id: 'cbse9-bio-bp1',
            title: { en: 'Preparing Onion Peel Temporary Mount' },
            steps: { en: ['Peel thin transparent epidermis.', 'Stain with safranin 60 s and mount under coverslip without bubbles.'] },
          },
        ],
        realLifeApplications: { en: ['Salted pickles preserve food by drawing water out of microbes (plasmolysis).'] },
        revisionNotes: { en: ['Mitochondria generate ATP; lysosomes digest worn organelles.'] },
        chapterQuestions: [
          {
            id: 'cbse9-bio-q1',
            type: 'short',
            question: { en: 'Why do dried raisins swell when soaked in plain water but shrink in thick sugar syrup?' },
            answer: { en: 'Plain water is hypotonic so water enters by osmosis; concentrated syrup is hypertonic so water exits.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse9-bio-m1',
            question: { en: 'Which organelle is known as the powerhouse of the cell because it synthesizes ATP?' },
            options: { en: ['Golgi apparatus', 'Mitochondria', 'Vacuole', 'Ribosome'] },
            correctIndex: 1,
            explanation: { en: 'Mitochondria carry out cellular respiration to produce ATP.' },
          },
        ],
        experiments: [
          {
            id: 'cbse9-bio-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'CBSE Class 9 Practical & Sim: Raisin Osmosis & Onion Cell Lab' },
            objective: { en: 'Measure percentage water gained by osmosis in raisins and inspect cell organelles in Biology World.' },
            materials: { en: ['Dry raisins', 'Plain water bowl + strong sugar water', 'Biology World Simulator'] },
            scientificPrinciple: { en: 'Water moves through the semi-permeable raisin skin along water-potential gradient.' },
            steps: {
              en: [
                'Soak 5 weighed raisins in plain water and 5 in concentrated sugar water for 2 hours.',
                'Blot dry gently and record swollen vs shrunken condition.',
                'Open Biology World to label plant cell nucleus, vacuole, and cell wall.',
              ],
            },
            observationTable: {
              columns: { en: ['Medium', 'Initial Mass', 'After 2 hrs', 'Osmosis Direction'] },
              sampleRows: [['Plain water (Hypotonic)', '3.0 g', '4.6 g (+53%)', 'Endosmosis (water enters)'], ['Thick sugar syrup (Hypertonic)', '3.0 g', '2.5 g', 'Exosmosis (water exits)']],
            },
            expectedResult: { en: 'Raisins plump in plain water and wrinkle in thick syrup.' },
            conclusion: { en: 'Selectively permeable membranes permit net water osmosis.' },
            safetyNote: { en: 'Avoid touching safranin stain directly; do not eat lab specimens.' },
            predictionQuestion: { en: 'If a marine fish is placed into distilled water, what osmotic risk occurs?' },
            predictionOptions: { en: ['Excess water rushes into cells (endosmosis)', 'Cells immediately freeze', 'Cell wall builds'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Pure water has higher water concentration than marine cytoplasm.'] },
            whyItHappens: { en: 'Rapid osmotic water influx bursts animal cells lacking walls.' },
          },
        ],
      }),
    ],
  },

  // =========================================================================
  // CBSE CLASS 10 — NCERT Science (2025-26)
  // =========================================================================
  {
    id: 'cbse-c10-2025-26',
    classLevel: 10,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · NCERT Class 10 Board Science',
    textbookName: 'Science — Class 10 (NCERT)',
    sourceTitle: 'NCERT Class 10 Science',
    sourceUrl: NCERT_URL,
    secondarySourceTitle: 'CBSE Class 10 Practical Syllabus',
    secondarySourceUrl: CBSE_PRAC_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'Class 10 Board curriculum covering Light/Refraction/Prism, Electricity/Ohm’s Law, Magnetic Effects/Induction, Chemical Reactions, and Life Processes with simulations & official practicals.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse10-phy-optics',
        chapterNumber: 9,
        title: { en: 'Light — Reflection, Refraction & Optical Prism', hi: 'प्रकाश — परावर्तन तथा अपवर्तन', kn: 'ಬೆಳಕು — ಪ್ರತಿಫಲನ ಮತ್ತು ವಕ್ರೀಭವನ' },
        primarySubject: 'physics',
        topicTag: { en: 'Ray Optics & Snell’s Law' },
        textbookName: 'NCERT Class 10 Science',
        board: 'cbse',
        classLevel: 10,
        session: '2025-26',
        conceptSummary: {
          en: 'Mirror formula 1/f = 1/v + 1/u, lens formula 1/f = 1/v − 1/u, and Snell’s refraction law n₁sinθ₁ = n₂sinθ₂ govern lenses, slabs, and dispersion prisms.',
        },
        topics: [
          {
            id: 'cbse10-phy-op-t1',
            title: { en: 'Snell’s Law, Refractive Index & Lens Power' },
            subtopics: { en: ['Sign convention (New Cartesian)', 'Magnification m = v/u for lenses', 'Dioptre P = 1/f(m)', 'Dispersion through triangular glass prism'] },
            explanation: { en: 'Shorter focal length lenses bend light harder and carry higher optical power in dioptres.' },
          },
        ],
        definitions: [
          { id: 'cbse10-phy-op-d1', term: { en: 'Refractive Index (n)' }, definition: { en: 'Ratio c / v of speed of light in vacuum to speed in a transparent medium (glass ≈ 1.5).' } },
        ],
        keyConcepts: { en: ['Convex lenses have +ve focal length (+D); concave lenses have −ve focal length (−D).'] },
        diagramKind: 'optics-lens-mirror',
        diagramCaption: { en: 'Light bending across air–glass prism faces obeying Snell’s Law.' },
        formulas: [
          { id: 'cbse10-phy-op-f1', name: { en: 'Lens Formula & Power' }, formula: '1/f = 1/v − 1/u   |   P = 1/f(m)', variables: { en: 'f = focal length, v = image distance, u = object distance' }, unit: 'Dioptre (D)' },
          { id: 'cbse10-phy-op-f2', name: { en: "Snell's Law" }, formula: 'n₁ sin θ₁ = n₂ sin θ₂', variables: { en: 'n = refractive index' }, unit: 'Dimensionless' },
        ],
        solvedNumericals: [
          {
            id: 'cbse10-phy-op-n1',
            problem: { en: 'An object is placed 30 cm in front of a convex lens of focal length +20 cm. Find image distance v.' },
            given: ['u = −30 cm', 'f = +20 cm'],
            formulaUsed: '1/v = 1/f + 1/u',
            solutionSteps: ['1/v = 1/20 + 1/(−30) = (3 − 2)/60 = 1/60', 'v = +60 cm'],
            finalAnswer: 'v = +60 cm (real, inverted, magnified −2×)',
          },
        ],
        realLifeApplications: { en: ['Spectacle lenses correct myopia/hypermetropia; glass prisms produce solar spectra.'] },
        revisionNotes: { en: ['Violet bends most and red bends least inside a glass prism.'] },
        chapterQuestions: [
          {
            id: 'cbse10-phy-op-q1',
            type: 'short',
            question: { en: 'A doctor prescribes a corrective lens of power +2.0 D. What is its focal length and type?' },
            answer: { en: 'f = 1 / (+2.0) = +0.50 m (+50 cm), a converging convex lens.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse10-phy-op-m1',
            question: { en: 'For a prism dispersing white sunlight, which colour bends through the largest angle?' },
            options: { en: ['Red', 'Orange', 'Green', 'Violet'] },
            correctIndex: 3,
            explanation: { en: 'Violet has shortest wavelength and highest refractive index in crown glass.' },
          },
        ],
        experiments: [
          {
            id: 'cbse10-phy-op-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'optics',
            title: { en: 'CBSE Class 10 Official Practical & Sim: Glass Prism & Snell Refraction' },
            objective: { en: 'Trace incident angle θ₁ vs refracted angle θ₂ and critical angle in the Optical Prism 3D Simulation.' },
            materials: { en: ['Optical Prism Simulation', 'Glass slab / equilateral prism', 'Drawing board & optical pins'] },
            scientificPrinciple: { en: 'Ratio sin(i) / sin(r) remains constant for any fixed pair of media (Snell’s Law).' },
            steps: {
              en: [
                'Open Optical Prism Simulation and set n₁ = 1.00 (air) → n₂ = 1.52 (glass) or test internal glass-to-air exit.',
                'Record θ₂ for θ₁ = 20°, 30°, 40°, and 50° and compute ratio sin θ₁ / sin θ₂.',
              ],
            },
            observationTable: {
              columns: { en: ['Medium Pair', 'Angle θ₁', 'Angle θ₂', 'TIR?'] },
              sampleRows: [['Glass (1.52) → Air (1.0)', '30°', '49.5°', 'No'], ['Glass (1.52) → Air (1.0)', '45°', 'Reflected', 'Yes (>41.1°)']],
            },
            expectedResult: { en: 'sin θ₁ / sin θ₂ stays constant; exceeding θ_c causes Total Internal Reflection.' },
            conclusion: { en: 'Snell’s Law predicts both refraction and optical fibre total internal reflection.' },
            safetyNote: { en: 'Handle glass prisms on flat tables so edges do not chip.' },
            predictionQuestion: { en: 'Which glass colour ray travels fastest inside a glass prism?' },
            predictionOptions: { en: ['Red', 'Violet', 'Indigo'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Less bending means higher speed inside glass.'] },
            whyItHappens: { en: 'Longer-wavelength red slows slightly less in glass than violet.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse10-phy-electricity',
        chapterNumber: 11,
        title: { en: 'Electricity — Ohm’s Law, Resistors & Power', hi: 'विद्युत — ओम का नियम', kn: 'ವಿದ್ಯುತ್ — ಓಮ್ ನಿಯಮ' },
        primarySubject: 'physics',
        topicTag: { en: "Ohm's Law & Circuits" },
        textbookName: 'NCERT Class 10 Science',
        board: 'cbse',
        classLevel: 10,
        session: '2025-26',
        conceptSummary: {
          en: 'Potential difference V = I·R governs conductors; series resistors add directly while parallel combinations lower net resistance.',
        },
        topics: [
          {
            id: 'cbse10-phy-el-t1',
            title: { en: 'Ohm’s Law, Resistivity ρ & Series/Parallel Combinations' },
            subtopics: { en: ['R = ρL/A', 'R_s = R₁ + R₂', '1/R_p = 1/R₁ + 1/R₂', '1 kWh = 3.6 × 10⁶ J'] },
            explanation: { en: 'Plotting V against I yields a straight line through the origin whose slope equals resistance R.' },
          },
        ],
        definitions: [
          { id: 'cbse10-phy-el-d1', term: { en: '1 Ohm (Ω)' }, definition: { en: 'Resistance of a conductor carrying 1 Ampere current when 1 Volt is applied across its ends.' } },
        ],
        keyConcepts: { en: ['Doubling wire length doubles resistance; doubling cross-section area halves resistance.'] },
        diagramKind: 'electric-circuit',
        diagramCaption: { en: 'Ammeter in series and voltmeter across resistor verifying V = IR.' },
        formulas: [
          { id: 'cbse10-phy-el-f1', name: { en: "Ohm's Law & Joule Power" }, formula: 'V = I·R   |   P = V·I = I²R = V²/R', variables: { en: 'V = Voltage, I = Current, R = Resistance' }, unit: 'Ohm (Ω), Watt (W)' },
        ],
        solvedNumericals: [
          {
            id: 'cbse10-phy-el-n1',
            problem: { en: 'A 10 Ω and 20 Ω resistor are wired in parallel across a 12 V battery. Find R_eq and total current I.' },
            given: ['R₁ = 10 Ω', 'R₂ = 20 Ω', 'V = 12 V'],
            formulaUsed: '1/R_p = 1/R₁ + 1/R₂; I = V/R_p',
            solutionSteps: ['1/R_p = 1/10 + 1/20 = 3/20 → R_p = 6.67 Ω', 'I = 12 / 6.67 = 1.80 A'],
            finalAnswer: 'R_eq = 6.67 Ω, Current = 1.80 A',
          },
        ],
        realLifeApplications: { en: ['Domestic kWh meters measure household electrical energy consumption.'] },
        revisionNotes: { en: ['Ammeter has very low resistance (series); voltmeter has very high resistance (parallel).'] },
        chapterQuestions: [
          {
            id: 'cbse10-phy-el-q1',
            type: 'short',
            question: { en: 'Why is tungsten used in filament lamps while nichrome alloy is used in toaster coils?' },
            answer: { en: 'Tungsten melts only at 3380 °C to emit bright white light; nichrome resists oxidation when red-hot in air.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse10-phy-el-m1',
            question: { en: 'Three 6 Ω resistors connected in parallel have an equivalent resistance of:' },
            options: { en: ['18 Ω', '2 Ω', '6 Ω', '12 Ω'] },
            correctIndex: 1,
            explanation: { en: '1/R_p = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 → R_p = 2 Ω.' },
          },
        ],
        experiments: [
          {
            id: 'cbse10-phy-el-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'electricity',
            title: { en: "CBSE Class 10 Official Practical & Sim: Ohm's Law & Series/Parallel Resistors" },
            objective: { en: 'Verify linear V–I proportionality and compare Series vs Parallel resistance inside the DC Circuits Simulation.' },
            materials: { en: ["Ohm's Law & DC Circuits Simulation", 'Nichrome resistor, voltmeter, ammeter, rheostat'] },
            scientificPrinciple: { en: 'At constant temperature, current through a metallic conductor is directly proportional to potential difference.' },
            steps: {
              en: [
                'Open DC Circuits Simulation; vary Voltage V = 6 V, 12 V, 18 V across R₁ = 10 Ω, R₂ = 20 Ω in Series.',
                'Switch to Parallel and verify R_eq drops from 30 Ω to 6.67 Ω while current climbs proportionally.',
              ],
            },
            observationTable: {
              columns: { en: ['Voltage V', 'Series Current (30 Ω)', 'Parallel Current (6.67 Ω)'] },
              sampleRows: [['6 V', '0.20 A', '0.90 A'], ['12 V', '0.40 A', '1.80 A'], ['18 V', '0.60 A', '2.70 A']],
            },
            expectedResult: { en: 'V/I remains constant in every trial, confirming Ohm’s Law.' },
            conclusion: { en: 'Equivalent resistance drops in parallel networks and increases in series.' },
            safetyNote: { en: 'Open key switch between readings so resistor heating does not alter R.' },
            predictionQuestion: { en: 'What shape is a V vs I graph for an ohmic metallic resistor?' },
            predictionOptions: { en: ['A straight line passing through the origin', 'A circle', 'A flat horizontal zero line'] },
            predictionCorrectIndex: 0,
            hints: { en: ['V = I × R has constant slope R.'] },
            whyItHappens: { en: 'Constant resistance produces direct proportionality between V and I.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse10-phy-magnetism',
        chapterNumber: 12,
        title: { en: 'Magnetic Effects of Electric Current', hi: 'विद्युत धारा के चुंबकीय प्रभाव', kn: 'ವಿದ್ಯುತ್ ಪ್ರವಾಹದ ಕಾಂತೀಯ ಪರಿಣಾಮಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Solenoids & Electromagnetic Induction' },
        textbookName: 'NCERT Class 10 Science',
        board: 'cbse',
        classLevel: 10,
        session: '2025-26',
        conceptSummary: {
          en: 'Current-carrying wires and solenoids create magnetic fields governed by Right-Hand Thumb Rule; moving magnets induce EMF in coils.',
        },
        topics: [
          {
            id: 'cbse10-phy-mag-t1',
            title: { en: 'Solenoid Fields, Fleming Rules & Domestic Circuits' },
            subtopics: { en: ['Maxwell Right-Hand Thumb Rule', 'Fleming Left-Hand Motor Rule', 'Live, Neutral & Earth green wire'] },
            explanation: { en: 'Uniform field lines run parallel inside a long current-carrying solenoid just like a bar magnet.' },
          },
        ],
        definitions: [
          { id: 'cbse10-phy-mag-d1', term: { en: 'Solenoid' }, definition: { en: 'A cylindrical coil of many circular turns of insulated copper wire producing a bar-magnet field when current flows.' } },
        ],
        keyConcepts: { en: ['Indian domestic AC mains run at 220 V and 50 Hz; Earth wire prevents electric shock on metal casings.'] },
        diagramKind: 'magnet-induction',
        diagramCaption: { en: 'Moving bar magnet inducing electric current in a multi-turn copper solenoid.' },
        formulas: [
          { id: 'cbse10-phy-mag-f1', name: { en: 'Magnetic Force on Wire' }, formula: 'F = B · I · L sin θ', variables: { en: 'B = magnetic field (T), I = current (A), L = length (m)' }, unit: 'Newton (N)' },
        ],
        solvedNumericals: [],
        realLifeApplications: { en: ['Electric fans/mixers (DC/AC motors), MRI scanners, and MCB safety switches.'] },
        revisionNotes: { en: ['Reversing battery polarity reverses both magnetic poles of a solenoid.'] },
        chapterQuestions: [
          {
            id: 'cbse10-phy-mag-q1',
            type: 'short',
            question: { en: 'What is the role of the green Earth wire on a metallic toaster or water heater?' },
            answer: { en: 'It connects the metal body safely to the ground so leakage current trips the fuse/MCB instead of shocking users.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse10-phy-mag-m1',
            question: { en: 'What is the frequency of alternating current (AC) supplied to homes in India?' },
            options: { en: ['50 Hz', '12 Hz', '500 Hz', '0 Hz (DC)'] },
            correctIndex: 0,
            explanation: { en: 'Indian AC supply reverses direction 100 times per second (50 complete cycles = 50 Hz).' },
          },
        ],
        experiments: [
          {
            id: 'cbse10-phy-mag-exp1',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'magnetism',
            title: { en: 'Simulated Solenoid & Faraday Electromagnetic Induction Lab' },
            objective: { en: 'Observe how coil turns N, field B, and magnet motion speed govern induced voltage inside the 3D Magnetism Lab.' },
            materials: { en: ['Interactive Magnetism & Induction 3D Simulation'] },
            scientificPrinciple: { en: 'Changing magnetic flux through a coil induces electromotive force ε = −N(dΦ/dt).' },
            steps: {
              en: [
                'Launch the Magnetism & Induction Simulation and increase coil turns N from 40 to 120.',
                'Slide magnet oscillation speed upward and track peak induced EMF ε on the live readout.',
              ],
            },
            observationTable: {
              columns: { en: ['Coil Turns N', 'Magnet Speed', 'Peak Induced EMF'] },
              sampleRows: [['40 turns', '1.0×', '~1.3 V'], ['120 turns', '1.5×', '~5.9 V']],
            },
            expectedResult: { en: 'Stopping the magnet drops induced voltage immediately to 0 V.' },
            conclusion: { en: 'Relative motion or changing magnetic flux is essential to induce electricity.' },
            safetyNote: { en: 'Never tamper with live home distribution boards or MCB boxes.' },
            predictionQuestion: { en: 'If a strong bar magnet sits completely stationary inside a coil, how much EMF is induced?' },
            predictionOptions: { en: ['Zero (no changing magnetic flux)', '1000 V', 'Coil melts'] },
            predictionCorrectIndex: 0,
            hints: { en: ['dΦ/dt equals zero when nothing changes!'] },
            whyItHappens: { en: 'Voltage depends on the rate of change of magnetic flux, not static field presence alone.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse10-chem-reactions',
        chapterNumber: 1,
        title: { en: 'Chemical Reactions, Equations & Metals', hi: 'रासायनिक अभिक्रियाएँ एवं समीकरण', kn: 'ರಾಸಾಯನಿಕ ಕ್ರಿಯೆಗಳು ಮತ್ತು ಸಮೀಕರಣಗಳು' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Reaction Types & Reactivity' },
        textbookName: 'NCERT Class 10 Science',
        board: 'cbse',
        classLevel: 10,
        session: '2025-26',
        conceptSummary: {
          en: 'Combination, decomposition, displacement, double displacement, and redox reactions explain rusting, limewater testing, and thermite welding.',
        },
        topics: [
          {
            id: 'cbse10-chem-t1',
            title: { en: 'Displacement & Redox Equations' },
            subtopics: { en: ['Fe + CuSO₄ → FeSO₄ + Cu', 'CaO + H₂O → Ca(OH)₂ + Heat', 'Rancidity & Corrosion'] },
            explanation: { en: 'More reactive metals like iron or zinc displace copper ions out of blue copper sulphate solution.' },
          },
        ],
        definitions: [
          { id: 'cbse10-chem-d1', term: { en: 'Redox Reaction' }, definition: { en: 'Simultaneous oxidation (oxygen gain / electron loss) and reduction (oxygen loss / electron gain).' } },
        ],
        keyConcepts: { en: ['Flushing chip bags with nitrogen gas prevents oily rancidity.'] },
        diagramKind: 'chemical-reaction',
        diagramCaption: { en: 'Displacement and redox electron exchange conserving atomic count.' },
        chemicalEquations: [
          {
            id: 'cbse10-chem-eq1',
            title: { en: 'Iron Nail in Copper Sulphate' },
            equation: 'Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s)',
            reactionType: 'Single Displacement',
            explanation: { en: 'Blue solution turns pale green while reddish-brown copper coats the nail.' },
          },
        ],
        realLifeApplications: { en: ['Galvanization coats steel roofs with zinc to halt monsoon rusting.'] },
        revisionNotes: { en: ['White silver chloride turns grey in sunlight via photochemical decomposition.'] },
        chapterQuestions: [
          {
            id: 'cbse10-chem-q1',
            type: 'short',
            question: { en: 'Why does blue copper sulphate solution turn pale green when an iron nail is dipped in it?' },
            answer: { en: 'Iron displaces copper to form green ferrous sulphate (FeSO₄) and deposits copper metal onto the nail.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse10-chem-m1',
            question: { en: 'Slaked lime Ca(OH)₂ reacts slowly with atmospheric CO₂ on whitewashed walls to form shiny:' },
            options: { en: ['Calcium carbonate CaCO₃', 'Iron oxide', 'Copper chloride', 'Ammonia'] },
            correctIndex: 0,
            explanation: { en: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O creates a bright calcium carbonate finish.' },
          },
        ],
        experiments: [
          {
            id: 'cbse10-chem-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'CBSE Class 10 Official Practical & Sim: Classifying Chemical Reactions' },
            objective: { en: 'Identify combination, decomposition, and displacement changes in Chemistry World and lab procedures.' },
            materials: { en: ['Dilute CuSO₄ solution + iron nail', 'Test tube', 'Chemistry World Interactive Lab'] },
            scientificPrinciple: { en: 'Reactivity series dictates which metal displaces another from aqueous salt solutions.' },
            steps: {
              en: [
                'Observe clean iron nail immersed in blue CuSO₄ solution over 20 minutes.',
                'Open Chemistry World to test balancing combination, displacement, and neutralization reactions.',
              ],
            },
            observationTable: {
              columns: { en: ['Reaction', 'Colour / Heat Change', 'Reaction Type'] },
              sampleRows: [['Fe + CuSO₄', 'Blue → Pale green, Cu coat', 'Displacement'], ['CaO + H₂O', 'Beaker turns warm', 'Exothermic Combination']],
            },
            expectedResult: { en: 'Brown copper layer plates onto iron as solution fades green.' },
            conclusion: { en: 'Iron sits higher than copper on the metal reactivity series.' },
            safetyNote: { en: 'Do not touch hot quicklime water directly; handle laboratory salts with tongs.' },
            predictionQuestion: { en: 'What happens if a silver coin is dropped into blue CuSO₄ solution?' },
            predictionOptions: { en: ['No reaction—silver is less reactive than copper', 'Instant explosion', 'Water freezes'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Check position of Ag vs Cu in reactivity series.'] },
            whyItHappens: { en: 'A less reactive metal cannot displace a more reactive metal from its salt.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse10-bio-life',
        chapterNumber: 5,
        title: { en: 'Life Processes (Photosynthesis & Respiration)', hi: 'जैव प्रक्रम', kn: 'ಜೀವ ಕ್ರಿಯೆಗಳು' },
        primarySubject: 'biology',
        topicTag: { en: 'Nutrition, Respiration & Circulation' },
        textbookName: 'NCERT Class 10 Science',
        board: 'cbse',
        classLevel: 10,
        session: '2025-26',
        conceptSummary: {
          en: 'Autotrophs synthesize glucose via chlorophyll and stomata; heterotrophs oxidize glucose via aerobic or anaerobic respiration and filter wastes via nephrons.',
        },
        topics: [
          {
            id: 'cbse10-bio-t1',
            title: { en: 'Stomatal Mounts, CO₂ Evolution & Nephron Filtration' },
            subtopics: { en: ['Guard cells swelling', 'Aerobic vs lactic acid/yeast respiration', 'Double circulation in humans'] },
            explanation: { en: 'Potassium hydroxide (KOH) absorbs CO₂ in sealed flasks, demonstrating CO₂ necessity for photosynthesis.' },
          },
        ],
        definitions: [
          { id: 'cbse10-bio-d1', term: { en: 'Nephron' }, definition: { en: 'Microscopic filtration unit inside each kidney removing urea while reabsorbing useful glucose and water.' } },
        ],
        keyConcepts: { en: ['Guard cells swell with water to open stomatal pores during daylight.'] },
        diagramKind: 'photosynthesis-stomata',
        diagramCaption: { en: 'Stomatal pore opening for daytime CO₂ uptake and water vapour transpiration.' },
        biologyProcesses: [
          {
            id: 'cbse10-bio-bp1',
            title: { en: 'Stages of Photosynthesis' },
            steps: { en: ['Light energy absorbed by chlorophyll.', 'Water splits releasing O₂.', 'CO₂ reduces into carbohydrate glucose.'] },
          },
        ],
        realLifeApplications: { en: ['Breathalyzers & yeast fermentation in idli/bread batters showcase anaerobic CO₂ release.'] },
        revisionNotes: { en: ['Left side of human heart handles oxygenated blood; right side handles deoxygenated blood.'] },
        chapterQuestions: [
          {
            id: 'cbse10-bio-q1',
            type: 'short',
            question: { en: 'Why do muscle cramps sometimes happen during sudden heavy sprinting?' },
            answer: { en: 'Lack of oxygen switches muscle cells temporarily to anaerobic respiration, forming lactic acid.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse10-bio-m1',
            question: { en: 'Which reagent turns milky white when exhaled CO₂ is bubbled through it?' },
            options: { en: ['Limewater Ca(OH)₂', 'Pure distilled water', 'Salt water', 'Cooking oil'] },
            correctIndex: 0,
            explanation: { en: 'Ca(OH)₂ + CO₂ forms insoluble white calcium carbonate CaCO₃.' },
          },
        ],
        experiments: [
          {
            id: 'cbse10-bio-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'CBSE Class 10 Official Practical & Sim: Germinating Seeds Release CO₂' },
            objective: { en: 'Verify CO₂ gas release during aerobic respiration and explore leaf stomata in Biology World.' },
            materials: { en: ['Soaked germinating moong/gram seeds', 'Conical flask + bent tube + limewater', 'Biology World Simulator'] },
            scientificPrinciple: { en: 'Germinating seeds rapidly respire stored food with O₂, exhaling CO₂ gas.' },
            steps: {
              en: [
                'Place moist germinating seeds in a sealed flask connected to a test tube of fresh limewater.',
                'Wait 45 minutes and observe limewater turning milky white.',
                'Open Biology World to examine plant cells and stomatal transport.',
              ],
            },
            observationTable: {
              columns: { en: ['Setup', 'Limewater Appearance'] },
              sampleRows: [['Live germinating seeds', 'Turns milky white'], ['Boiled dead seeds (Control)', 'Stays clear']],
            },
            expectedResult: { en: 'Only living respiring seeds turn limewater milky.' },
            conclusion: { en: 'Cellular respiration releases carbon dioxide continuously.' },
            safetyNote: { en: 'Do not pipette or taste limewater or KOH reagents.' },
            predictionQuestion: { en: 'Why are seeds kept moist—not dry—during this respiration test?' },
            predictionOptions: { en: ['Dry dormant seeds respire too slowly; moisture activates germination', 'Water freezes them', 'To dissolve glass'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Dry seeds sit dormant until watered.'] },
            whyItHappens: { en: 'Water rehydrates enzymes and accelerates cellular respiration.' },
          },
        ],
      }),
    ],
  },

  // =========================================================================
  // CBSE CLASS 11 — Senior Secondary Physics, Chemistry & Biology (2025-26)
  // =========================================================================
  {
    id: 'cbse-c11-2025-26',
    classLevel: 11,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · Class 11 NCERT Science & Official Physics Practicals',
    textbookName: 'NCERT Physics Part I & II, Chemistry, Biology (Class 11)',
    sourceTitle: 'NCERT & CBSE Senior Secondary Physics Syllabus',
    sourceUrl: CBSE_PRAC_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'Class 11 Physics syllabus experiments & interactive simulations (Projectile/Vectors, Simple Pendulum, Ideal Gas & Thermodynamics, Resonance & Beats) plus Class 11 Chemistry and Biology.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse11-phy-projectile',
        chapterNumber: 3,
        title: { en: 'Motion in a Plane — Vectors, Projectile & Pendulum Lab', hi: 'समतल में गति — प्रक्षेप्य गति', kn: 'ಸಮತಲದಲ್ಲಿ ಚಲನೆ — ಪ್ರಕ್ಷೇಪಕ' },
        primarySubject: 'physics',
        topicTag: { en: 'Vectors, Projectiles & Gravitation' },
        textbookName: 'NCERT Class 11 Physics Part I',
        board: 'cbse',
        classLevel: 11,
        session: '2025-26',
        conceptSummary: {
          en: 'Two-dimensional projectile trajectory y = x tanθ − gx²/(2v₀²cos²θ) proves path is parabolic; simple pendulum T = 2π√(L/g) measures local gravitational acceleration.',
        },
        topics: [
          {
            id: 'cbse11-phy-p-t1',
            title: { en: 'Projectile Range, Max Height & Simple Pendulum L–T² Graph' },
            subtopics: { en: ['Time of flight T = 2v₀sinθ/g', 'Horizontal range R = v₀²sin(2θ)/g', 'Parallelogram law of vector addition'] },
            explanation: { en: 'Complementary launch angles θ and (90°−θ) yield identical horizontal range R in absence of drag.' },
          },
        ],
        definitions: [
          { id: 'cbse11-phy-p-d1', term: { en: 'Trajectory' }, definition: { en: 'The parabolic spatial path traced by a projectile under uniform gravity alone.' } },
        ],
        keyConcepts: { en: ['At peak height, vertical velocity v_y = 0 while horizontal velocity remains v₀cosθ.', 'Simple pendulum period depends only on length L and g, not bob mass.'] },
        diagramKind: 'projectile-motion',
        diagramCaption: { en: 'Interactive parabolic projectile arc with live launch angle adjustment.' },
        formulas: [
          { id: 'cbse11-phy-p-f1', name: { en: 'Projectile Range & Max Height' }, formula: 'R = v₀² sin(2θ)/g   |   H = (v₀ sinθ)²/(2g)', variables: { en: 'v₀ = speed, θ = launch angle, g = 9.81 m/s²' }, unit: 'metre (m)' },
          { id: 'cbse11-phy-p-f2', name: { en: 'Simple Pendulum Period' }, formula: 'T = 2π √(L / g)', variables: { en: 'L = effective pendulum length, T = time period' }, unit: 'second (s)' },
        ],
        solvedNumericals: [
          {
            id: 'cbse11-phy-p-n1',
            problem: { en: 'A cricket ball is launched at 28 m/s at 30° to the horizontal (g = 9.8 m/s²). Find maximum height H and range R.' },
            given: ['v₀ = 28 m/s', 'θ = 30°', 'g = 9.8 m/s²'],
            formulaUsed: 'H = v₀²sin²θ/(2g); R = v₀²sin(2θ)/g',
            solutionSteps: ['sin30° = 0.5 → v_y = 14 m/s', 'H = 14² / (2 × 9.8) = 196 / 19.6 = 10.0 m', 'R = 784 × sin(60°) / 9.8 = 80 × 0.866 = 69.3 m'],
            finalAnswer: 'H = 10.0 m, R = 69.3 m',
          },
        ],
        realLifeApplications: { en: ['Long-jump takeoff ~42–45°; pendulum gravimeters map local Earth density.'] },
        revisionNotes: { en: ['Speed at projectile landing equals launch speed v₀ at same elevation.'] },
        chapterQuestions: [
          {
            id: 'cbse11-phy-p-q1',
            type: 'conceptual',
            question: { en: 'What is the angle between velocity and acceleration vectors at the highest point of a projectile?' },
            answer: { en: '90° — velocity is purely horizontal (v₀cosθ) while acceleration g points vertically downward.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse11-phy-p-m1',
            question: { en: 'Which two launch angles produce equal horizontal range for the same initial speed?' },
            options: { en: ['30° and 60°', '20° and 40°', '45° and 90°', '10° and 20°'] },
            correctIndex: 0,
            explanation: { en: 'Since sin(2×30°) = sin(60°) and sin(2×60°) = sin(120°) = sin(60°), complementary angles match range.' },
          },
        ],
        experiments: [
          {
            id: 'cbse11-phy-p-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'mechanics',
            title: { en: 'CBSE Class 11 Physics Practical & 3D Sim: Projectile Range & g Verification' },
            objective: { en: 'Verify R = v₀²sin(2θ)/g, mass-independence in vacuum, and L vs T² proportionality for gravity g.' },
            materials: { en: ['Projectile Motion 3D/2D Simulation', 'Brass bob, cotton thread, Vernier callipers & stopwatch'] },
            scientificPrinciple: { en: 'Gravitational acceleration g governs both parabolic vertical fall y = ½gt² and simple harmonic pendulum restoring torque.' },
            steps: {
              en: [
                'Open Projectile Motion Simulation with v₀ = 24 m/s and g = 9.81 m/s².',
                'Compare Range R and Time T across θ = 30°, 45°, 60°, then change Mass m from 1 kg to 5 kg to verify R stays invariant.',
                'In school lab, plot L vs T² for pendulum lengths 60 cm, 80 cm, 100 cm to confirm g = 4π²(L/T²) ≈ 9.8 m/s².',
              ],
            },
            observationTable: {
              columns: { en: ['Launch θ / Length L', 'Mass m', 'Range R / Period T²', 'Calculated Metric'] },
              sampleRows: [['θ = 45°', '2.0 kg', 'R = 58.72 m', 'H = 14.68 m'], ['θ = 45°', '5.0 kg', 'R = 58.72 m', 'Mass invariant'], ['L = 1.00 m', 'Brass bob', 'T² = 4.02 s²', 'g = 9.82 m/s²']],
            },
            expectedResult: { en: 'Projectile range is identical across masses; L/T² stays constant for pendulum.' },
            conclusion: { en: 'Galileo/Newton kinematics holds accurately in both projectile and pendulum systems.' },
            safetyNote: { en: 'Stand clear of swinging heavy brass pendulum bobs; check clamp tightness.' },
            predictionQuestion: { en: 'If a 1 kg iron ball and 10 kg cannonball are launched identically in vacuum, which goes farther?' },
            predictionOptions: { en: ['Both land at the exact same distance R', '10 kg travels 10× farther', '1 kg stops mid-air'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Check whether mass m appears in R = v₀²sin(2θ)/g.'] },
            whyItHappens: { en: 'Gravitational acceleration g acts equally on all masses in free fall.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse11-phy-thermo',
        chapterNumber: 12,
        title: { en: 'Thermodynamics, Kinetic Theory & Carnot Engine', hi: 'ऊष्मागतिकी और अणुगति सिद्धांत', kn: 'ಉಷ್ಣಬಲವಿಜ್ಞಾನ ಮತ್ತು ಅನಿಲ ನಿಯಮ' },
        primarySubject: 'physics',
        topicTag: { en: 'Ideal Gas & Thermodynamics' },
        textbookName: 'NCERT Class 11 Physics Part II',
        board: 'cbse',
        classLevel: 11,
        session: '2025-26',
        conceptSummary: {
          en: 'First Law ΔQ = ΔU + ΔW links heat, internal energy, and work; Ideal Gas Law PV = nRT and Carnot theorem η = 1 − T_c/T_h set engine limits.',
        },
        topics: [
          {
            id: 'cbse11-phy-th-t1',
            title: { en: 'Isothermal/Adiabatic Processes, Ideal Gas & Carnot Efficiency' },
            subtopics: { en: ['PV = nRT & rms molecular speed', 'Specific heats C_p − C_v = R', 'Second Law & Carnot η_max = 1 − T_c/T_h'] },
            explanation: { en: 'Average translational kinetic energy per gas molecule depends solely on Kelvin temperature: ½mv² = (3/2)k_BT.' },
          },
        ],
        definitions: [
          { id: 'cbse11-phy-th-d1', term: { en: 'Carnot Efficiency' }, definition: { en: 'Theoretical upper efficiency bound η = 1 − T_cold / T_hot for any reversible heat engine.' } },
        ],
        keyConcepts: { en: ['No real cyclic heat engine can convert 100% of absorbed heat into mechanical work (Kelvin-Planck statement).'] },
        diagramKind: 'gas-particles',
        diagramCaption: { en: '3D piston chamber relating pressure, temperature, and molecular collision rate.' },
        formulas: [
          { id: 'cbse11-phy-th-f1', name: { en: 'Ideal Gas & Carnot Limit' }, formula: 'PV = nRT   |   η_max = 1 − (T_c / T_h)', variables: { en: 'R = 8.314 J/mol·K, T in Kelvin' }, unit: 'kPa, %' },
        ],
        solvedNumericals: [
          {
            id: 'cbse11-phy-th-n1',
            problem: { en: 'A Carnot engine operates between T_h = 500 K and T_c = 300 K. Find maximum efficiency %.' },
            given: ['T_h = 500 K', 'T_c = 300 K'],
            formulaUsed: 'η = (1 − T_c/T_h) × 100%',
            solutionSteps: ['η = (1 − 300/500) × 100 = 0.40 × 100 = 40%'],
            finalAnswer: '40.0%',
          },
        ],
        realLifeApplications: { en: ['Thermal power turbines, refrigerators, and diesel compression ignition.'] },
        revisionNotes: { en: ['Always convert temperatures to Kelvin before using PV = nRT or Carnot formula!'] },
        chapterQuestions: [
          {
            id: 'cbse11-phy-th-q1',
            type: 'conceptual',
            question: { en: 'Why does compressing a bicycle tyre pump rapidly make the metal barrel warm?' },
            answer: { en: 'Rapid adiabatic compression does work ΔW on trapped air with negligible heat escape, raising internal energy ΔU and temperature.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse11-phy-th-m1',
            question: { en: 'If volume V of an ideal gas halves at constant temperature T, pressure P:' },
            options: { en: ['Doubles (2P)', 'Halves', 'Stays zero', 'Quadruples'] },
            correctIndex: 0,
            explanation: { en: "By Boyle's Law P₁V₁ = P₂V₂ at constant T." },
          },
        ],
        experiments: [
          {
            id: 'cbse11-phy-th-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'thermodynamics',
            title: { en: 'CBSE Class 11 Physics Practical & 3D Sim: Ideal Gas Law (P–V–T) & Cooling Curve' },
            objective: { en: 'Verify P ∝ T/V inside the 3D Thermodynamics Chamber Simulation and inspect Carnot efficiency.' },
            materials: { en: ['Ideal Gas & Thermodynamics 3D Simulation', 'Newton cooling calorimeter setup'] },
            scientificPrinciple: { en: 'Pressure arises from elastic molecular wall impacts proportional to molecular density (n/V) and temperature T.' },
            steps: {
              en: [
                'Launch the Thermodynamics 3D Simulation (n = 1.5 mol fixed).',
                'Hold Volume V = 4.0 L and step T_h = 250 K, 350 K, 450 K; check P/T ratio stays constant.',
                'Compress Chamber Volume from 6.0 L down to 3.0 L at constant T and verify Pressure doubles.',
              ],
            },
            observationTable: {
              columns: { en: ['T_h (K)', 'Volume V (L)', 'Pressure P (kPa)', 'Carnot η (T_c=220K)'] },
              sampleRows: [['320 K', '4.0 L', '997.7 kPa', '31.3%'], ['450 K', '4.0 L', '1403.0 kPa', '51.1%'], ['320 K', '2.0 L', '1995.4 kPa', '31.3%']],
            },
            expectedResult: { en: 'P·V / T remains strictly constant across every chamber configuration.' },
            conclusion: { en: 'Kinetic molecular theory precisely matches macroscopic gas law measurements.' },
            safetyNote: { en: 'In cooling labs, handle hot water calorimeters with insulated tongs.' },
            predictionQuestion: { en: 'Lowering sink temperature T_c while holding source T_h fixed makes Carnot efficiency:' },
            predictionOptions: { en: ['Increase toward 100%', 'Drop to negative', 'Remain unchanged'] },
            predictionCorrectIndex: 0,
            hints: { en: ['η = 1 − T_c / T_h.'] },
            whyItHappens: { en: 'A smaller T_c/T_h fraction allows more thermal energy conversion into work.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse11-phy-waves',
        chapterNumber: 14,
        title: { en: 'Waves, Standing Waves & Resonance Beats', hi: 'तरंगें, अप्रगामी तरंगें और विस्पंद', kn: 'ತರಂಗಗಳು ಮತ್ತು ಬೀಟ್‌ಗಳು' },
        primarySubject: 'physics',
        topicTag: { en: 'Wave Superposition & Acoustics' },
        textbookName: 'NCERT Class 11 Physics Part II',
        board: 'cbse',
        classLevel: 11,
        session: '2025-26',
        conceptSummary: {
          en: 'Progressive waves y = A sin(kx − ωt) superpose to form stationary organ-pipe harmonics and audible beat pulsations at frequency |f₁ − f₂|.',
        },
        topics: [
          {
            id: 'cbse11-phy-w-t1',
            title: { en: 'Beats, Closed Organ Pipe Resonance & Speed of Sound' },
            subtopics: { en: ['Principle of superposition', 'f_beat = |f₁ − f₂|', 'End correction in resonance column: v = 2f(l₂ − l₁)'] },
            explanation: { en: 'Using two consecutive resonance lengths eliminates open-end air bulge correction error.' },
          },
        ],
        definitions: [
          { id: 'cbse11-phy-w-d1', term: { en: 'Beat Frequency' }, definition: { en: 'Number of alternating loudness maxima heard per second when two close frequencies overlap: |f₁ − f₂|.' } },
        ],
        keyConcepts: { en: ['Humans resolve beats distinctly when |f₁ − f₂| ≤ 10 Hz.', 'Closed organ pipes sustain odd harmonics f, 3f, 5f only.'] },
        diagramKind: 'waves-sound',
        diagramCaption: { en: 'Superposition envelope showing periodic constructive and destructive beat cycles.' },
        formulas: [
          { id: 'cbse11-phy-w-f1', name: { en: 'Beats & Resonance Speed' }, formula: 'f_beat = |f₁ − f₂|   |   v = 2f(l₂ − l₁)', variables: { en: 'l₁, l₂ = 1st & 2nd resonance column lengths' }, unit: 'Hz, m/s' },
        ],
        solvedNumericals: [
          {
            id: 'cbse11-phy-w-n1',
            problem: { en: 'A 512 Hz tuning fork resonates an air column first at l₁ = 16.2 cm and second at l₂ = 49.8 cm. Find speed of sound in air.' },
            given: ['f = 512 Hz', 'l₁ = 0.162 m', 'l₂ = 0.498 m'],
            formulaUsed: 'v = 2f(l₂ − l₁)',
            solutionSteps: ['l₂ − l₁ = 0.498 − 0.162 = 0.336 m', 'v = 2 × 512 × 0.336 = 344.1 m/s'],
            finalAnswer: '344.1 m/s',
          },
        ],
        realLifeApplications: { en: ['Instrument tuning by counting zero beats; pipe organ & flute design.'] },
        revisionNotes: { en: ['String wave speed v = √(T/μ) rises with tension T.'] },
        chapterQuestions: [
          {
            id: 'cbse11-phy-w-q1',
            type: 'short',
            question: { en: 'Why are odd harmonics present in a closed-end organ pipe while all harmonics appear in an open pipe?' },
            answer: { en: 'A closed end forces a displacement node while the open mouth has an antinode, fitting odd multiples of λ/4.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse11-phy-w-m1',
            question: { en: 'A 256 Hz fork produces 3 beats/sec with fork B. Filing fork B gently drops beats to 1/sec. Fork B originally had frequency:' },
            options: { en: ['253 Hz', '259 Hz', '262 Hz', '512 Hz'] },
            correctIndex: 0,
            explanation: { en: 'Filing slightly lowers mass and raises frequency; moving closer to 256 Hz confirms B started at 253 Hz.' },
          },
        ],
        experiments: [
          {
            id: 'cbse11-phy-w-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'waves',
            title: { en: 'CBSE Class 11 Physics Practical & Sim: Resonance Air Column & Beats Superposition' },
            objective: { en: 'Simulate superposition beats |f₁ − f₂| and calculate speed of sound v = fλ / 2f(l₂ − l₁).' },
            materials: { en: ['Waves & Sound Interactive Simulation', 'Resonance tube apparatus & tuning forks'] },
            scientificPrinciple: { en: 'Two waves differing slightly in frequency slip cyclically in and out of phase, modulating resultant amplitude.' },
            steps: {
              en: [
                'Launch the Waves & Sound Simulation; set f₁ = 340 Hz and f₂ = 345 Hz.',
                'Listen/observe beat envelope pulsing 5 times/sec and inspect λ₁ = v / f₁.',
                'Adjust f₂ → 340 Hz to achieve exact unison (0 beats/sec).',
              ],
            },
            observationTable: {
              columns: { en: ['f₁ (Hz)', 'f₂ (Hz)', 'Beat Rate (Hz)', 'λ₁ in Air (m)'] },
              sampleRows: [['340 Hz', '345 Hz', '5 Hz', '1.009 m'], ['340 Hz', '342 Hz', '2 Hz', '1.009 m'], ['340 Hz', '340 Hz', '0 Hz (Unison)', '1.009 m']],
            },
            expectedResult: { en: 'Beat pulses vanish completely at f₁ = f₂.' },
            conclusion: { en: 'Beat frequency equals exact difference |f₁ − f₂|.' },
            safetyNote: { en: 'Strike tuning forks gently on a rubber pad—never on glass or metal.' },
            predictionQuestion: { en: 'Which distance equals half a wavelength λ/2 in a resonance tube?' },
            predictionOptions: { en: ['Difference (l₂ − l₁) between consecutive loud nodes', 'Twice l₂', 'Radius of tube'] },
            predictionCorrectIndex: 0,
            hints: { en: ['l₁ ≈ λ/4, l₂ ≈ 3λ/4.'] },
            whyItHappens: { en: 'Subtracting l₁ from l₂ gives 3λ/4 − λ/4 = λ/2 while cancelling end correction.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse11-chem-thermo',
        chapterNumber: 6,
        title: { en: 'Chemical Equilibrium & Thermodynamics', hi: 'रासायनिक साम्य एवं ऊष्मागतिकी', kn: 'ರಾಸಾಯನಿಕ ಸಮತೋಲನ' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Enthalpy & Le Chatelier Principle' },
        textbookName: 'NCERT Class 11 Chemistry',
        board: 'cbse',
        classLevel: 11,
        session: '2025-26',
        conceptSummary: {
          en: 'Gibbs free energy ΔG = ΔH − TΔS determines reaction spontaneity; pH = −log[H⁺] quantifies ionic equilibrium.',
        },
        topics: [
          {
            id: 'cbse11-chem-t1',
            title: { en: 'pH Scale, Buffers & Equilibrium Constant K_c' },
            subtopics: { en: ['K_w = 10⁻¹⁴ at 298 K', 'Le Chatelier shift', 'Buffer solutions'] },
            explanation: { en: 'Disturbing concentration, pressure, or temperature pushes reversible equilibrium to counteract the change.' },
          },
        ],
        definitions: [
          { id: 'cbse11-chem-d1', term: { en: 'Spontaneous Reaction' }, definition: { en: 'A process proceeding naturally with negative Gibbs energy change (ΔG < 0) at fixed T and P.' } },
        ],
        keyConcepts: { en: ['At 25 °C, neutral pure water has [H⁺] = 10⁻⁷ M → pH = 7.'] },
        diagramKind: 'acids-bases-ph',
        diagramCaption: { en: 'pH logarithmic acidity/alkalinity scale.' },
        chemicalEquations: [
          {
            id: 'cbse11-chem-eq1',
            title: { en: 'Haber Ammonia Equilibrium' },
            equation: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g),   ΔH = −92.4 kJ/mol',
            reactionType: 'Exothermic Reversible Synthesis',
            explanation: { en: 'High pressure favours 2 moles NH₃ over 4 reactant gas moles.' },
          },
        ],
        realLifeApplications: { en: ['Blood bicarbonate buffer keeps human arterial pH steady near 7.4.'] },
        revisionNotes: { en: ['Catalysts speed equilibrium attainment equally forward and reverse without shifting K_c.'] },
        chapterQuestions: [
          {
            id: 'cbse11-chem-q1',
            type: 'short',
            question: { en: 'What is the pH of a 0.001 M HCl strong acid solution?' },
            answer: { en: '[H⁺] = 10⁻³ M → pH = −log(10⁻³) = 3.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse11-chem-m1',
            question: { en: 'For an endothermic equilibrium (ΔH > 0), raising temperature shifts equilibrium:' },
            options: { en: ['Forward toward products', 'Backward to reactants', 'K_c becomes zero', 'No change'] },
            correctIndex: 0,
            explanation: { en: 'Added heat is absorbed by the forward endothermic path.' },
          },
        ],
        experiments: [
          {
            id: 'cbse11-chem-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'CBSE Class 11 Practical & Sim: Enthalpy of Neutralization & pH Titration' },
            objective: { en: 'Track acid-base stoichiometry and pH endpoint inside Chemistry World.' },
            materials: { en: ['0.1 M NaOH, HCl, phenolphthalein', 'Burette & Chemistry World Lab'] },
            scientificPrinciple: { en: 'Strong acid + strong base releases nearly constant −57.1 kJ per mole of water formed.' },
            steps: {
              en: [
                'Titrate 10 mL HCl with NaOH using 2 drops phenolphthalein until permanent pale pink appears.',
                'Open Chemistry World to review stoichiometry and balanced ionic equations.',
              ],
            },
            observationTable: {
              columns: { en: ['HCl Volume', 'NaOH Endpoint', 'Calculated Molarity'] },
              sampleRows: [['10.0 mL', '10.0 mL (0.1 M)', '0.10 M HCl']],
            },
            expectedResult: { en: 'Sharp colour switch marks equivalence point n_acid = n_base.' },
            conclusion: { en: 'Volumetric titration determines unknown concentration precisely.' },
            safetyNote: { en: 'Wear lab goggles; never pipette acids/bases by mouth—use a pipette bulb.' },
            predictionQuestion: { en: 'Phenolphthalein stays colourless in acid and turns ____ just past equivalence in base.' },
            predictionOptions: { en: ['Pink', 'Green', 'Opaque black'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Standard acid-base titration endpoint indicator.'] },
            whyItHappens: { en: 'Alkaline pH > 8.2 flips phenolphthalein to its pink quinonoid ion.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse11-bio-plantphys',
        chapterNumber: 11,
        title: { en: 'Photosynthesis in Higher Plants & Respiration', hi: 'उच्च पादपों में प्रकाश संश्लेषण', kn: 'ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ' },
        primarySubject: 'biology',
        topicTag: { en: 'Chloroplast Light/Calvin Cycles' },
        textbookName: 'NCERT Class 11 Biology',
        board: 'cbse',
        classLevel: 11,
        session: '2025-26',
        conceptSummary: {
          en: 'Light reactions in thylakoid grana produce ATP and NADPH + O₂; Calvin cycle in stroma fixes CO₂ via RuBisCO into sugars.',
        },
        topics: [
          {
            id: 'cbse11-bio-t1',
            title: { en: 'C3 Calvin Cycle vs C4 Hatch-Slack Pathway' },
            subtopics: { en: ['Chlorophyll a & b absorption peaks (blue/red)', 'Photolysis of water', 'C4 Kranz anatomy'] },
            explanation: { en: 'C4 crops like maize and sugarcane concentrate CO₂ in bundle-sheath cells, cutting photorespiration loss.' },
          },
        ],
        definitions: [
          { id: 'cbse11-bio-d1', term: { en: 'RuBisCO' }, definition: { en: 'Earth’s most abundant enzyme catalyzing CO₂ fixation onto RuBP in the Calvin cycle.' } },
        ],
        keyConcepts: { en: ['All photosynthetic O₂ comes from splitting H₂O, not CO₂.'] },
        diagramKind: 'photosynthesis-stomata',
        diagramCaption: { en: 'Stomatal gas exchange feeding Calvin carbon fixation.' },
        biologyProcesses: [
          {
            id: 'cbse11-bio-bp1',
            title: { en: 'Paper Chromatography of Leaf Pigments' },
            steps: { en: ['Extract spinach pigments in acetone.', 'Separate carotene (yellow-orange), xanthophyll, chlorophyll a & b on chromatography strip.'] },
          },
        ],
        realLifeApplications: { en: ['Drought-resilient C4 millets and sugarcane thrive in sunny warm rural regions.'] },
        revisionNotes: { en: ['C4 fixation uses 2 extra ATP per CO₂ fixed to prevent photorespiration.'] },
        chapterQuestions: [
          {
            id: 'cbse11-bio-q1',
            type: 'short',
            question: { en: 'Why are C4 plants like sorghum and maize superior in bright, hot tropical fields?' },
            answer: { en: 'PEP carboxylase in mesophyll cells avoids oxygenase waste, minimizing photorespiration.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse11-bio-m1',
            question: { en: 'Oxygen released during green-plant photosynthesis originates directly from:' },
            options: { en: ['Photolysis of Water (H₂O)', 'Splitting of CO₂', 'Soil nitrates', 'Chlorophyll nitrogen'] },
            correctIndex: 0,
            explanation: { en: 'H₂O splits in Photosystem II into 2H⁺, 2e⁻, and ½O₂.' },
          },
        ],
        experiments: [
          {
            id: 'cbse11-bio-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'CBSE Class 11 Practical & Sim: Leaf Stomatal Index & Pigment Separation' },
            objective: { en: 'Examine guard cell control and chlorophyll cellular energy in Biology World.' },
            materials: { en: ['Fresh spinach/tradescantia leaf', 'Slide & microscope', 'Biology World Simulator'] },
            scientificPrinciple: { en: 'Differential capillary solubility separates photosynthetic pigments cleanly by R_f value.' },
            steps: {
              en: [
                'Count open stomata per field of view on lower tradescantia peel under microscope.',
                'Launch Biology World to explore chloroplast ATP & cell respiration balance.',
              ],
            },
            observationTable: {
              columns: { en: ['Pigment Band', 'Colour on Paper', 'Typical R_f'] },
              sampleRows: [['Carotene', 'Yellow-orange', '0.95'], ['Chlorophyll a', 'Blue-green', '0.62'], ['Chlorophyll b', 'Yellow-green', '0.45']],
            },
            expectedResult: { en: 'Four distinct pigment bands separate upward.' },
            conclusion: { en: 'Leaves carry accessory pigments capturing broad solar wavelengths.' },
            safetyNote: { en: 'Use acetone/petroleum ether strictly in ventilated space away from flames.' },
            predictionQuestion: { en: 'Which pigment travels farthest near the solvent front?' },
            predictionOptions: { en: ['Non-polar yellow-orange Carotene', 'Chlorophyll b', 'Water'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Carotene dissolves best in non-polar solvent.'] },
            whyItHappens: { en: 'Lowest affinity for polar cellulose paper gives carotene highest R_f.' },
          },
        ],
      }),
    ],
  },

  // =========================================================================
  // CBSE CLASS 12 — Senior Secondary Physics Practicals & Quantum/Optics (2025-26)
  // =========================================================================
  {
    id: 'cbse-c12-2025-26',
    classLevel: 12,
    board: 'cbse',
    session: '2025-26',
    academicYearLabel: '2025–26',
    syllabusVersionLabel: 'CBSE · Class 12 NCERT & Board Physics Practicals',
    textbookName: 'NCERT Physics Part I & II, Chemistry, Biology (Class 12)',
    sourceTitle: 'NCERT & CBSE Class 12 Physics Curriculum',
    sourceUrl: CBSE_PRAC_URL,
    lastVerified: '2026-01-15',
    coverageNote: {
      en: 'Complete Class 12 Physics experiments mapped to interactive simulations: Ohm’s Law/Metre Bridge, Faraday/Galvanometer, Glass Prism Deviation, Young’s Double-Slit, Photoelectric Effect, Bohr Atom, De Broglie & Tunneling, plus Class 12 Chemistry & Biology.',
    },
    availableSubjects: ['physics', 'chemistry', 'biology'],
    chapters: [
      buildChapter({
        id: 'cbse12-phy-electricity',
        chapterNumber: 3,
        title: { en: 'Current Electricity — Ohm’s Law, Metre Bridge & Kirchhoff', hi: 'विद्युत धारा — ओम का नियम एवं मीटर सेतु', kn: 'ವಿದ್ಯುತ್ ಪ್ರವಾಹ — ಓಮ್ ನಿಯಮ' },
        primarySubject: 'physics',
        topicTag: { en: 'Resistivity & Circuits' },
        textbookName: 'NCERT Class 12 Physics Part I',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Drift velocity v_d = I/(neA), Wheatstone bridge balance R₁/R₂ = R₃/R₄, and series/parallel combinations govern precision laboratory measurements.',
        },
        topics: [
          {
            id: 'cbse12-phy-el-t1',
            title: { en: 'Resistivity by Metre Bridge, Series/Parallel & Kirchhoff Laws' },
            subtopics: { en: ['Specific resistance ρ = R·A / L', 'Metre bridge balance R/S = l/(100−l)', 'Emf vs Terminal Voltage V = E − Ir'] },
            explanation: { en: 'Zero galvanometer deflection ensures null-point resistance ratios free from battery internal resistance drops.' },
          },
        ],
        definitions: [
          { id: 'cbse12-phy-el-d1', term: { en: 'Kirchhoff Junction Rule' }, definition: { en: 'Algebraic sum of currents entering any circuit node equals sum leaving it (charge conservation).' } },
        ],
        keyConcepts: { en: ['Keep null balance near 45–55 cm on a Metre Bridge to minimize percentage scale error.'] },
        diagramKind: 'electric-circuit',
        diagramCaption: { en: 'Precision DC circuit verifying V–I slope, series/parallel equivalence & power.' },
        formulas: [
          { id: 'cbse12-phy-el-f1', name: { en: 'Resistivity & Metre Bridge' }, formula: 'ρ = (πr² R) / L   |   X = R · (100 − l) / l', variables: { en: 'r = wire radius, L = length, l = null point (cm)' }, unit: 'Ω·m' },
        ],
        solvedNumericals: [
          {
            id: 'cbse12-phy-el-n1',
            problem: { en: 'In a Metre Bridge with R = 6 Ω in left gap, null point occurs at l = 40 cm. Find unknown resistance X.' },
            given: ['R = 6 Ω', 'l = 40 cm', '100 − l = 60 cm'],
            formulaUsed: 'X = R · (100 − l) / l',
            solutionSteps: ['X = 6 × (60 / 40) = 6 × 1.5 = 9.0 Ω'],
            finalAnswer: '9.0 Ω',
          },
        ],
        realLifeApplications: { en: ['Strain gauge load sensors on weighbridges use Wheatstone bridges.'] },
        revisionNotes: { en: ['Copper alloys like manganin have tiny α so resistor boxes stay accurate across temperatures.'] },
        chapterQuestions: [
          {
            id: 'cbse12-phy-el-q1',
            type: 'short',
            question: { en: 'Why are the connecting strips on a Metre Bridge made of thick copper plates?' },
            answer: { en: 'Thick copper strips have negligible resistance so they do not distort the wire balance ratio.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-phy-el-m1',
            question: { en: 'Kirchhoff’s Second (Loop) Rule is a direct consequence of conservation of:' },
            options: { en: ['Energy', 'Momentum', 'Angular spin', 'Mass only'] },
            correctIndex: 0,
            explanation: { en: 'Sum of potential rises and drops around a closed loop equals zero (energy per unit charge).' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-phy-el-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'electricity',
            title: { en: 'CBSE Class 12 Official Practical A1/A2 & Sim: Resistivity by V–I Graph & Series/Parallel Verification' },
            objective: { en: 'Verify laws of series & parallel resistor combinations and V/I resistivity slope in the DC Circuits Simulation.' },
            materials: { en: ["Ohm's Law & DC Circuits Simulation", 'Resistance wire, ammeter, voltmeter, jockey & Metre Bridge'] },
            scientificPrinciple: { en: 'Series adds individual resistances; parallel adds conductances 1/R.' },
            steps: {
              en: [
                'Launch DC Circuits Simulation and record V, I for R₁ = 10 Ω and R₂ = 20 Ω in Series (expected 30 Ω).',
                'Switch topology to Parallel (expected 6.67 Ω) and compare V/I ratio against theoretical formula.',
              ],
            },
            observationTable: {
              columns: { en: ['Configuration', 'V (V)', 'Measured I (A)', 'Experimental R_eq (Ω)'] },
              sampleRows: [['Series (10 Ω + 20 Ω)', '12 V', '0.40 A', '30.00 Ω'], ['Parallel (10 Ω || 20 Ω)', '12 V', '1.80 A', '6.67 Ω']],
            },
            expectedResult: { en: 'Measured R_eq matches theoretical series and parallel values within 0.5%.' },
            conclusion: { en: 'Series/parallel resistance laws are confirmed experimentally.' },
            safetyNote: { en: 'Do not drag jockey hard across the Metre Bridge wire or scratch its uniform cross-section.' },
            predictionQuestion: { en: 'Swapping the battery and galvanometer at Wheatstone balance alters null point by:' },
            predictionOptions: { en: ['Zero—bridge remains balanced', '50 cm shift', 'Current turns infinite'] },
            predictionCorrectIndex: 0,
            hints: { en: ['P/Q = R/S symmetry stays valid.'] },
            whyItHappens: { en: 'Equal potential at conjugate nodes stops galvanometer current either way.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-phy-emi',
        chapterNumber: 6,
        title: { en: 'Electromagnetic Induction & Alternating Current', hi: 'विद्युतचुंबकीय प्रेरण', kn: 'ವಿದ್ಯುತ್ಕಾಂತೀಯ ಪ್ರೇರಣೆ' },
        primarySubject: 'physics',
        topicTag: { en: 'Faraday Law & Lenz Law' },
        textbookName: 'NCERT Class 12 Physics Part I',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Induced EMF ε = −N(dΦ_B/dt) opposes the flux change producing it (Lenz Law); transformers and AC generators rely on mutual and self induction.',
        },
        topics: [
          {
            id: 'cbse12-phy-em-t1',
            title: { en: 'Faraday Laws, Lenz Law & Eddy Currents' },
            subtopics: { en: ['Magnetic flux Φ_B = B·A cosθ', 'Induced EMF vs turns N', 'Motional EMF ε = B l v'] },
            explanation: { en: 'Lenz Law preserves conservation of energy: pushing a magnet into a coil faces opposing magnetic force.' },
          },
        ],
        definitions: [
          { id: 'cbse12-phy-em-d1', term: { en: 'Self-Inductance (L)' }, definition: { en: 'Ratio Φ/I measuring a coil’s opposition to changes in its own current; SI unit Henry (H).' } },
        ],
        keyConcepts: { en: ['Induced EMF magnitude scales with coil turns N, field B, and speed dΦ/dt.'] },
        diagramKind: 'magnet-induction',
        diagramCaption: { en: 'Oscillating bar magnet changing flux Φ_B across an N-turn copper solenoid.' },
        formulas: [
          { id: 'cbse12-phy-em-f1', name: { en: 'Faraday–Lenz Law' }, formula: 'ε = −N · (dΦ_B / dt)', variables: { en: 'Φ_B = magnetic flux (Wb), N = coil turns' }, unit: 'Volt (V)' },
        ],
        solvedNumericals: [
          {
            id: 'cbse12-phy-em-n1',
            problem: { en: 'Magnetic flux through a 200-turn coil changes from 0.04 Wb to 0.01 Wb in 0.15 s. Find magnitude of induced EMF.' },
            given: ['N = 200', 'ΔΦ = −0.03 Wb', 'Δt = 0.15 s'],
            formulaUsed: '|ε| = N |ΔΦ/Δt|',
            solutionSteps: ['|ε| = 200 × (0.03 / 0.15) = 200 × 0.2 = 40 V'],
            finalAnswer: '40.0 V',
          },
        ],
        realLifeApplications: { en: ['Hydroelectric turbines, bicycle dynamos, induction cooktops, and regenerative EV braking.'] },
        revisionNotes: { en: ['Eddy current losses in transformers are minimized by laminating silicon-steel cores.'] },
        chapterQuestions: [
          {
            id: 'cbse12-phy-em-q1',
            type: 'conceptual',
            question: { en: 'Why does a magnet drop slowly inside a thick copper pipe without touching its walls?' },
            answer: { en: 'Induced circular eddy currents inside copper generate an upward opposing magnetic pole by Lenz Law.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-phy-em-m1',
            question: { en: 'Lenz Law directly reflects which fundamental law of physics?' },
            options: { en: ['Conservation of Energy', 'Conservation of Colour', 'Snell Refraction', 'Stefan Cooling'] },
            correctIndex: 0,
            explanation: { en: 'Mechanical work done against opposing Lenz force converts into induced electrical energy.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-phy-em-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'magnetism',
            title: { en: 'CBSE Class 12 Practical & 3D Sim: Faraday Flux Induction & Solenoid EMF' },
            objective: { en: 'Measure how turns N, magnetic field B, and oscillation speed affect induced EMF in the 3D Magnetism Lab.' },
            materials: { en: ['3D Magnetism & Faraday Induction Simulation', 'Centre-zero galvanometer, copper solenoid & bar magnet'] },
            scientificPrinciple: { en: 'Peak induced sinusoidal voltage scales linearly with N × B × ω.' },
            steps: {
              en: [
                'Launch the Magnetism 3D Simulation and set Turns N = 80, Field B = 1.5 T, Speed = 1.2×.',
                'Double Turns N → 160 and verify instantaneous peak EMF doubles proportionally.',
              ],
            },
            observationTable: {
              columns: { en: ['Turns N', 'Field B (T)', 'Speed Factor', 'Peak EMF (V)'] },
              sampleRows: [['80', '1.5 T', '1.2×', '~3.2 V'], ['160', '1.5 T', '1.2×', '~6.4 V']],
            },
            expectedResult: { en: 'Doubling N doubles induced peak EMF while flux reversal flips galvanometer polarity.' },
            conclusion: { en: 'Faraday’s induction equation ε = −N(dΦ/dt) is verified directly.' },
            safetyNote: { en: 'Keep strong neodymium magnets away from mechanical watches and storage media.' },
            predictionQuestion: { en: 'Reversing magnet entry direction switches induced current direction because:' },
            predictionOptions: { en: ['Sign of dΦ_B/dt flips', 'Coil resistance reverses', 'Mass becomes negative'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Withdrawal decreases flux whereas entry increases flux.'] },
            whyItHappens: { en: 'Opposing flux growth vs flux decay requires opposite current loops.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-phy-rayoptics',
        chapterNumber: 9,
        title: { en: 'Ray Optics & Glass Prism Minimum Deviation', hi: 'किरण प्रकाशिकी और प्रिज्म', kn: 'ಕಿರಣ ದೃಗ್ವಿಜ್ಞಾನ ಮತ್ತು ಪ್ರಿಸ್ಮ್' },
        primarySubject: 'physics',
        topicTag: { en: 'Refraction, Prism & TIR' },
        textbookName: 'NCERT Class 12 Physics Part II',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Prism refractive index n = sin[(A + δ_m)/2] / sin(A/2) and critical angle sin θ_c = n₂/n₁ explain total internal reflection in optical fibres.',
        },
        topics: [
          {
            id: 'cbse12-phy-ro-t1',
            title: { en: 'Prism Deviation Curve, Critical Angle & Lens Maker Formula' },
            subtopics: { en: ['1/f = (n−1)(1/R₁ − 1/R₂)', 'i–δ U-shaped deviation curve', 'Total Internal Reflection θ_i > θ_c'] },
            explanation: { en: 'Minimum deviation δ_m happens symmetrically when angle of incidence equals angle of emergence (i = e).' },
          },
        ],
        definitions: [
          { id: 'cbse12-phy-ro-d1', term: { en: 'Critical Angle (θ_c)' }, definition: { en: 'Incidence angle in denser medium giving a 90° refracted ray grazing the interface.' } },
        ],
        keyConcepts: { en: ['Optical fibres carry telecom light pulses worldwide via Total Internal Reflection.'] },
        diagramKind: 'optics-lens-mirror',
        diagramCaption: { en: 'Interactive prism ray refraction and critical-angle TIR.' },
        formulas: [
          { id: 'cbse12-phy-ro-f1', name: { en: 'Prism Index & Critical Angle' }, formula: 'n = sin[(A+δ_m)/2] / sin(A/2)   |   sin θ_c = n₂/n₁', variables: { en: 'A = prism angle (60°), δ_m = minimum deviation' }, unit: 'Dimensionless' },
        ],
        solvedNumericals: [
          {
            id: 'cbse12-phy-ro-n1',
            problem: { en: 'Find critical angle θ_c for crown glass (n₁ = 1.52) bounded by air (n₂ = 1.00).' },
            given: ['n₁ = 1.52', 'n₂ = 1.00'],
            formulaUsed: 'sin θ_c = n₂ / n₁',
            solutionSteps: ['sin θ_c = 1.00 / 1.52 = 0.6579', 'θ_c = arcsin(0.6579) = 41.1°'],
            finalAnswer: '41.1°',
          },
        ],
        realLifeApplications: { en: ['Medical endoscopes, sparkling cut diamonds (n=2.42, θ_c=24.4°), and glass fibre internet.'] },
        revisionNotes: { en: ['At minimum deviation δ_m, refracted ray inside an equilateral prism runs parallel to its base.'] },
        chapterQuestions: [
          {
            id: 'cbse12-phy-ro-q1',
            type: 'short',
            question: { en: 'State the two necessary conditions for Total Internal Reflection to occur.' },
            answer: { en: '1) Light travels from denser to rarer medium (n₁ > n₂), and 2) Angle of incidence exceeds critical angle (θ₁ > θ_c).' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-phy-ro-m1',
            question: { en: 'At minimum deviation δ_m of a symmetric triangular prism:' },
            options: { en: ['Angle of incidence i equals emergence e', 'Incident ray hits at 0°', 'Refracted beam freezes', 'Emergence becomes 90°'] },
            correctIndex: 0,
            explanation: { en: 'Symmetry yields i = e and internal ray parallel to the base.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-phy-ro-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'optics',
            title: { en: 'CBSE Class 12 Official Practical B3 & 3D Sim: Glass Prism Refraction & Critical Angle' },
            objective: { en: 'Determine Snell refraction angles and critical angle θ_c = arcsin(n₂/n₁) in the Optical Prism 3D Simulation.' },
            materials: { en: ['Optical Prism 3D Simulation', 'Equilateral 60° glass prism, drawing pins & protractor'] },
            scientificPrinciple: { en: 'Refractive index quantifies phase speed change c/n at optical interfaces.' },
            steps: {
              en: [
                'Launch the Optical Prism Simulation; set n₁ = 1.52 (Crown Glass) and n₂ = 1.00 (Air).',
                'Sweep incidence angle θ₁ from 20° past 42° and watch the refracted ray snap into Total Internal Reflection.',
              ],
            },
            observationTable: {
              columns: { en: ['Angle θ₁', 'n₁ / n₂', 'Refracted θ₂ / Result'] },
              sampleRows: [['25°', '1.52 / 1.00', 'θ₂ = 40.0°'], ['41.1°', '1.52 / 1.00', 'Grazing θ₂ = 90° (θ_c)'], ['46°', '1.52 / 1.00', 'Total Internal Reflection']],
            },
            expectedResult: { en: 'Above 41.1°, 100% of light reflects cleanly inside the prism.' },
            conclusion: { en: 'Total Internal Reflection confirms Snell’s boundary limits.' },
            safetyNote: { en: 'Use optical pin points safely and never direct laser pointers into eyes.' },
            predictionQuestion: { en: 'Does submerging a glass prism in water (n₂ = 1.33) raise or lower its critical angle?' },
            predictionOptions: { en: ['Raises critical angle from 41.1° to ~61°', 'Drops to 0°', 'Turns glass opaque'] },
            predictionCorrectIndex: 0,
            hints: { en: ['sin θ_c = n₂ / n₁ rises when n₂ increases from 1.00 to 1.33.'] },
            whyItHappens: { en: 'Closer refractive indices bend rays less sharply at the boundary.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-phy-waveoptics',
        chapterNumber: 10,
        title: { en: 'Wave Optics — Young’s Double-Slit Interference', hi: 'तरंग प्रकाशिकी — यंग का द्वि-स्लिट प्रयोग', kn: 'ತರಂಗ ದೃಗ್ವಿಜ್ಞಾನ — ಡಬಲ್-ಸ್ಲಿಟ್' },
        primarySubject: 'physics',
        topicTag: { en: 'Interference & Diffraction' },
        textbookName: 'NCERT Class 12 Physics Part II',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Coherent waves passing two narrow slits interfere constructively at Δx = mλ and destructively at (m + ½)λ, creating equal-width bright and dark fringes β = λD/d.',
        },
        topics: [
          {
            id: 'cbse12-phy-wo-t1',
            title: { en: 'Coherence, Fringe Width β & Single-Slit Diffraction' },
            subtopics: { en: ['β = λL / d', 'd sin θ = mλ maxima', 'Intensity I = 4I₀ cos²(φ/2)'] },
            explanation: { en: 'Increasing wavelength λ or screen distance L widens fringes; widening slit spacing d crowds fringes closer.' },
          },
        ],
        definitions: [
          { id: 'cbse12-phy-wo-d1', term: { en: 'Fringe Width (β)' }, definition: { en: 'Centre-to-centre distance between two adjacent bright (or dark) interference bands.' } },
        ],
        keyConcepts: { en: ['Energy is conserved in interference—dark fringe intensity simply redistributes into bright peaks.'] },
        diagramKind: 'waves-sound',
        diagramCaption: { en: 'Interference fringe periodicity controlled by wavelength λ and slit separation d.' },
        formulas: [
          { id: 'cbse12-phy-wo-f1', name: { en: 'YDSE Fringe Width' }, formula: 'β = (λ · L) / d   |   d sin θ = mλ', variables: { en: 'λ = wavelength, L = screen distance, d = slit gap' }, unit: 'millimetre (mm)' },
        ],
        solvedNumericals: [
          {
            id: 'cbse12-phy-wo-n1',
            problem: { en: 'Green laser light (λ = 532 nm) hits two slits d = 0.40 mm apart with screen at L = 1.5 m. Find fringe width β.' },
            given: ['λ = 5.32×10⁻⁷ m', 'd = 4.0×10⁻⁴ m', 'L = 1.5 m'],
            formulaUsed: 'β = λL / d',
            solutionSteps: ['β = (5.32×10⁻⁷ × 1.5) / 4.0×10⁻⁴ = 1.995×10⁻³ m'],
            finalAnswer: '2.00 mm',
          },
        ],
        realLifeApplications: { en: ['Anti-reflective camera lens coatings, soap-bubble colours, and optical interferometers.'] },
        revisionNotes: { en: ['Immersing YDSE in water shrinks λ → λ/n and narrows fringes β/n.'] },
        chapterQuestions: [
          {
            id: 'cbse12-phy-wo-q1',
            type: 'conceptual',
            question: { en: 'Why do two independent incandescent bulbs side-by-side fail to show steady interference fringes?' },
            answer: { en: 'Two separate thermal sources emit random unlinked phase jumps every ~10⁻⁸ s, so they are incoherent.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-phy-wo-m1',
            question: { en: 'Switching from red light (650 nm) to violet light (420 nm) in Young’s Double-Slit setup causes fringe width β to:' },
            options: { en: ['Decrease (fringes become closer)', 'Increase', 'Turn white', 'Double'] },
            correctIndex: 0,
            explanation: { en: 'Since β ∝ λ, shorter violet wavelength shrinks fringe spacing.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-phy-wo-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'double-slit',
            title: { en: 'CBSE Class 12 Syllabus Practical & 3D Sim: Young’s Double-Slit Wave Interference' },
            objective: { en: 'Measure fringe spacing β = λL/d and 1st-order diffraction angle θ₁ in the 3D Double-Slit Simulation.' },
            materials: { en: ['3D Double-Slit Experiment Simulation'] },
            scientificPrinciple: { en: 'Constructive path difference Δ = d sin θ = mλ produces alternating bright maxima across the detector screen.' },
            steps: {
              en: [
                'Launch the Double-Slit 3D Simulation; set λ = 532 nm (green), slit gap d = 0.40 mm, screen L = 1.5 m.',
                'Vary λ from 450 nm (blue) to 650 nm (red) and verify β grows proportionally.',
                'Increase slit gap d from 0.25 mm to 0.80 mm and observe fringes crowd tighter.',
              ],
            },
            observationTable: {
              columns: { en: ['Wavelength λ (nm)', 'Slit Gap d (mm)', 'Screen L (m)', 'Fringe Width β (mm)'] },
              sampleRows: [['450 nm (Blue)', '0.40 mm', '1.5 m', '1.69 mm'], ['532 nm (Green)', '0.40 mm', '1.5 m', '2.00 mm'], ['650 nm (Red)', '0.40 mm', '1.5 m', '2.44 mm']],
            },
            expectedResult: { en: 'Fringe width β matches β = λL/d across all visible wavelengths.' },
            conclusion: { en: 'Light exhibits coherent wave interference through double apertures.' },
            safetyNote: { en: 'Never stare down real laboratory diode laser beams.' },
            predictionQuestion: { en: 'Doubling screen distance L while halving slit separation d multiplies fringe width β by:' },
            predictionOptions: { en: ['4× wider fringes', '1× (no change)', '1/4×'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Check β = λ × (L / d).'] },
            whyItHappens: { en: '2 / (1/2) = 4.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-phy-quantum',
        chapterNumber: 11,
        title: { en: 'Dual Nature, Photoelectric Effect & Bohr Atom', hi: 'विकिरण तथा द्रव्य की द्वैत प्रकृति एवं परमाणु', kn: 'ದ್ವಂದ್ವ ಸ್ವಭಾವ ಮತ್ತು ಪರಮಾಣು' },
        primarySubject: 'physics',
        topicTag: { en: 'Modern & Quantum Physics' },
        textbookName: 'NCERT Class 12 Physics Part II',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Einstein’s photoelectric equation K_max = hc/λ − φ proves light carries discrete photon quanta; De Broglie wavelength λ = h/p and Bohr stationary levels E_n = −13.6 Z²/n² explain atomic spectra and quantum tunneling.',
        },
        topics: [
          {
            id: 'cbse12-phy-q-t1',
            title: { en: 'Photoelectric Threshold, De Broglie Waves, Bohr Spectrum & Tunneling' },
            subtopics: { en: ['Stopping potential eV_s = K_max', 'De Broglie λ = h / √(2mqV)', 'Lyman/Balmer series transitions', 'Quantum barrier tunneling'] },
            explanation: { en: 'Below threshold photon energy φ, zero electrons eject regardless of brightness; above threshold, photocurrent scales with intensity.' },
          },
        ],
        definitions: [
          { id: 'cbse12-phy-q-d1', term: { en: 'Work Function (φ)' }, definition: { en: 'Minimum photon energy (in eV) required to liberate an electron from a metal surface.' } },
        ],
        keyConcepts: { en: ['K_max depends strictly on photon frequency/wavelength, NOT intensity.', 'Balmer transitions (n_i → 2) emit visible spectral lines.'] },
        diagramKind: 'waves-sound',
        diagramCaption: { en: 'Photon energy quanta and quantized atomic matter waves.' },
        formulas: [
          { id: 'cbse12-phy-q-f1', name: { en: "Einstein's Photoelectric Equation" }, formula: 'K_max = (hc / λ) − φ   |   eV_s = K_max', variables: { en: 'hc ≈ 1240 eV·nm, φ = metal work function (eV)' }, unit: 'eV, Volt' },
          { id: 'cbse12-phy-q-f2', name: { en: 'Bohr Shell & De Broglie' }, formula: 'E_n = −13.6 Z²/n² eV   |   λ = h / √(2mqV)', variables: { en: 'n = principal shell, V = accelerating voltage' }, unit: 'eV, nm' },
        ],
        solvedNumericals: [
          {
            id: 'cbse12-phy-q-n1',
            problem: { en: 'UV light of wavelength 260 nm falls on Sodium (φ = 2.30 eV). Find photon energy E and max electron kinetic energy K_max.' },
            given: ['λ = 260 nm', 'φ = 2.30 eV', 'hc = 1239.84 eV·nm'],
            formulaUsed: 'E = hc/λ; K_max = E − φ',
            solutionSteps: ['E = 1239.84 / 260 = 4.77 eV', 'K_max = 4.77 − 2.30 = 2.47 eV'],
            finalAnswer: 'E = 4.77 eV, K_max = 2.47 eV (V_s = 2.47 V)',
          },
        ],
        realLifeApplications: { en: ['Solar rooftop PV panels, automatic street-light LDR sensors, electron microscopes, and tunnel diodes.'] },
        revisionNotes: { en: ['Cesium (2.14 eV) ejects electrons in visible light; Zinc (4.3 eV) needs UV light.'] },
        chapterQuestions: [
          {
            id: 'cbse12-phy-q-q1',
            type: 'conceptual',
            question: { en: 'Why does bright red light (700 nm) fail to eject electrons from Zinc (φ = 4.3 eV) while dim UV light (250 nm) succeeds immediately?' },
            answer: { en: 'Red photon energy (1.77 eV) is below Zinc work function 4.3 eV, whereas each UV photon carries 4.96 eV (> φ).' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-phy-q-m1',
            question: { en: 'In the Photoelectric Effect above threshold frequency, doubling light intensity while keeping wavelength constant will:' },
            options: { en: ['Double photocurrent while K_max stays unchanged', 'Double stopping potential V_s', 'Stop all electrons', 'Double work function'] },
            correctIndex: 0,
            explanation: { en: 'More photons per second release more electrons (current), while energy per electron remains hc/λ − φ.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-phy-q-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'photoelectric',
            title: { en: 'CBSE Class 12 Syllabus Practical & 3D Sim: Photoelectric Effect & Stopping Potential' },
            objective: { en: 'Determine threshold wavelength λ₀, work function φ, and K_max = hc/λ − φ inside the 3D Photoelectric Chamber.' },
            materials: { en: ['3D Photoelectric Effect Simulation'] },
            scientificPrinciple: { en: 'One photon transfers its full energy E = hc/λ to one electron instantaneously if E > φ.' },
            steps: {
              en: [
                'Launch the Photoelectric 3D Simulation; choose Sodium cathode (φ = 2.3 eV) and sweep λ from 620 nm (Red) down to 260 nm (UV).',
                'Record threshold wavelength λ₀ ≈ 539 nm where electrons just start escaping.',
                'Above threshold, adjust Intensity (%) and verify Photocurrent rises while K_max remains constant.',
              ],
            },
            observationTable: {
              columns: { en: ['Wavelength λ (nm)', 'Photon Energy E (eV)', 'Work Fn φ', 'K_max / Current'] },
              sampleRows: [['620 nm (Red)', '2.00 eV', '2.30 eV', '0.00 eV (No emission)'], ['450 nm (Blue)', '2.76 eV', '2.30 eV', '0.46 eV (Emitted)'], ['260 nm (UV)', '4.77 eV', '2.30 eV', '2.47 eV (Fast beam)']],
            },
            expectedResult: { en: 'Zero emission occurs above λ₀; K_max grows linearly with 1/λ.' },
            conclusion: { en: 'Light quantization (photons) explains photoelectric emission cleanly.' },
            safetyNote: { en: 'In laboratory mercury lamps, shield UV quartz emission from bare eyes.' },
            predictionQuestion: { en: 'If a green 532 nm laser (2.33 eV) barely ejects slow electrons from Sodium (2.30 eV), making the laser 10× brighter changes K_max to:' },
            predictionOptions: { en: ['Unchanged (0.03 eV)—only current increases', '0.30 eV', '23.0 eV'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Intensity increases photon count, not individual photon energy.'] },
            whyItHappens: { en: 'Each electron absorbs one 2.33 eV photon regardless of beam brightness.' },
          },
          {
            id: 'cbse12-phy-q-exp2',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'bohr-atom',
            title: { en: 'CBSE Class 12 Atoms & Nuclei Lab: Bohr Hydrogen Spectral Series Simulation' },
            objective: { en: 'Explore Lyman (UV), Balmer (Visible), and Paschen transitions E_i − E_f inside the 3D Bohr Atom Model.' },
            materials: { en: ['3D Bohr Atom Transition Simulation'] },
            scientificPrinciple: { en: 'Electrons jumping between stationary shells emit discrete photons ΔE = 13.6 Z² (1/n_f² − 1/n_i²).' },
            steps: {
              en: [
                'Launch the Bohr Atom Simulation with Z = 1 (Hydrogen).',
                'Trigger transitions n = 3 → 2 (Balmer H-α red, 656.3 nm) and n = 2 → 1 (Lyman UV, 121.6 nm).',
              ],
            },
            observationTable: {
              columns: { en: ['Transition', 'ΔE (eV)', 'Emitted λ (nm)', 'Series'] },
              sampleRows: [['n=3 → n=2', '1.89 eV', '656.3 nm', 'Balmer (Visible Red)'], ['n=4 → n=2', '2.55 eV', '486.2 nm', 'Balmer (Cyan)'], ['n=2 → n=1', '10.20 eV', '121.6 nm', 'Lyman (UV)']],
            },
            expectedResult: { en: 'Only discrete line wavelengths appear rather than a continuous blur.' },
            conclusion: { en: 'Atomic electron energies are quantized.' },
            safetyNote: { en: 'High-voltage gas discharge tubes in labs must only be powered by instructors.' },
            predictionQuestion: { en: 'Which transition emits the shortest wavelength (highest energy) photon?' },
            predictionOptions: { en: ['n=3 → n=1 (Lyman)', 'n=4 → n=3 (Paschen)', 'n=3 → n=2 (Balmer)'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Ground state n=1 has E₁ = −13.6 eV, giving the largest jump.'] },
            whyItHappens: { en: 'Larger ΔE yields shorter λ = hc / ΔE.' },
          },
          {
            id: 'cbse12-phy-q-exp3',
            relationType: 'in-chapter',
            activityMode: 'virtual-sim',
            linkedSimExperiment: 'de-broglie',
            title: { en: 'CBSE Class 12 Dual Nature & Semiconductors: De Broglie Diffraction & Quantum Tunneling' },
            objective: { en: 'Verify Davisson–Germer matter-wave wavelength λ = h/√(2mqV) and barrier tunneling T.' },
            materials: { en: ['De Broglie Matter Wave Simulation', 'Quantum Tunneling Simulation'] },
            scientificPrinciple: { en: 'Electrons exhibit crystal Bragg diffraction 2d sinθ = λ and wave-function penetration across thin semiconductor barriers.' },
            steps: {
              en: [
                'Open De Broglie Simulation; vary accelerating voltage V from 54 V to 200 V and inspect λ shrinking from 0.167 nm to 0.087 nm.',
                'Also test the Quantum Tunneling Simulator by narrowing barrier width a from 1.0 nm down to 0.3 nm.',
              ],
            },
            observationTable: {
              columns: { en: ['Voltage V', 'Particle', 'De Broglie λ (nm)', 'Bragg Angle θ'] },
              sampleRows: [['54 V', 'Electron', '0.1669 nm', '23.4°'], ['120 V', 'Electron', '0.1120 nm', '15.5°']],
            },
            expectedResult: { en: 'Increasing voltage shortens matter wavelength λ and narrows diffraction angle.' },
            conclusion: { en: 'Matter particles possess measurable wave wavelengths.' },
            safetyNote: { en: 'No physical hazard inside simulation workbench.' },
            predictionQuestion: { en: 'Comparing an electron and a proton accelerated across the same voltage V, which has a shorter De Broglie wavelength?' },
            predictionOptions: { en: ['Proton (much larger mass m)', 'Electron', 'Both identical'] },
            predictionCorrectIndex: 0,
            hints: { en: ['λ = h / √(2mqV).'] },
            whyItHappens: { en: 'Larger proton mass (~1836×) puts a larger √m in the denominator.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-chem-electro',
        chapterNumber: 2,
        title: { en: 'Electrochemistry & Chemical Kinetics', hi: 'वैद्युतरसायन एवं रासायनिक बलगतिकी', kn: 'ವಿದ್ಯುತ್ ರಸಾಯನಶಾಸ್ತ್ರ' },
        primarySubject: 'chemistry',
        topicTag: { en: 'Galvanic Cells & Reaction Rates' },
        textbookName: 'NCERT Class 12 Chemistry Part I',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Daniel galvanic cells convert chemical Gibbs energy into electrical EMF governed by Nernst equation; activation energy E_a controls reaction rate constants.',
        },
        topics: [
          {
            id: 'cbse12-chem-t1',
            title: { en: 'Nernst Equation, Kohlrausch Law & First-Order Half-Life' },
            subtopics: { en: ['E°_cell = E°_cathode − E°_anode', 't₁/₂ = 0.693 / k', 'Arrhenius k = A e^(−E_a/RT)'] },
            explanation: { en: 'A salt bridge preserves electrical neutrality across half-cells without mixing electrolytes directly.' },
          },
        ],
        definitions: [
          { id: 'cbse12-chem-d1', term: { en: 'Half-Life (t₁/₂)' }, definition: { en: 'Time needed for reactant concentration to drop to half its initial value; for first-order reactions t₁/₂ = 0.693/k is constant.' } },
        ],
        keyConcepts: { en: ['Standard Daniell cell Zn | Zn²⁺ || Cu²⁺ | Cu generates E° = +1.10 V.'] },
        diagramKind: 'chemical-reaction',
        diagramCaption: { en: 'Redox electron transfer between zinc anode and copper cathode.' },
        chemicalEquations: [
          {
            id: 'cbse12-chem-eq1',
            title: { en: 'Daniell Cell Overall Redox' },
            equation: 'Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s),   E°_cell = +1.10 V',
            reactionType: 'Electrochemical Redox',
            explanation: { en: 'Zinc oxidizes at anode (−) while copper ions reduce at cathode (+).' },
          },
        ],
        realLifeApplications: { en: ['Lithium-ion phone batteries, lead-acid inverters, and green hydrogen fuel cells.'] },
        revisionNotes: { en: ['Cathode attracts reduction; Anode sees oxidation (AN OX, RED CAT).'] },
        chapterQuestions: [
          {
            id: 'cbse12-chem-q1',
            type: 'short',
            question: { en: 'Why does the voltage of a dry cell gradually fall over months of storage even unused?' },
            answer: { en: 'Acidic NH₄Cl paste slowly corrodes the zinc casing inside the cell.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-chem-m1',
            question: { en: 'For a first-order reaction with rate constant k = 0.0693 min⁻¹, what is its half-life?' },
            options: { en: ['10 min', '69.3 min', '1 min', '0.1 min'] },
            correctIndex: 0,
            explanation: { en: 't₁/₂ = 0.693 / 0.0693 = 10 min.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-chem-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'chemistry',
            title: { en: 'CBSE Class 12 Practical & Sim: Volumetric KMnO₄ Redox Titration' },
            objective: { en: 'Determine strength of ferrous ammonium sulphate via self-indicator KMnO₄ redox equation.' },
            materials: { en: ['KMnO₄, Mohr salt, dil. H₂SO₄', 'Burette & Chemistry World'] },
            scientificPrinciple: { en: 'MnO₄⁻ oxidizes five Fe²⁺ ions cleanly in acidic medium until pink endpoint.' },
            steps: {
              en: [
                'Prepare 10 mL acidified Mohr salt and titrate against KMnO₄ without extra indicator.',
                'Open Chemistry World to review redox stoichiometry and molarity formulas.',
              ],
            },
            observationTable: {
              columns: { en: ['Trial', 'Mohr Salt (mL)', 'KMnO₄ Used (mL)', 'Endpoint'] },
              sampleRows: [['Concordant', '10.0 mL', '9.8 mL', 'Faint permanent pink']],
            },
            expectedResult: { en: 'Faint pink colour persists for 30 s at redox equivalence.' },
            conclusion: { en: 'M₁V₁/n₁ = M₂V₂/n₂ gives exact unknown molarity.' },
            safetyNote: { en: 'Never use HCl or HNO₃ instead of H₂SO₄ in permanganate titrations.' },
            predictionQuestion: { en: 'Why is no external indicator needed in a KMnO₄ titration?' },
            predictionOptions: { en: ['KMnO₄ itself acts as a vivid purple self-indicator', 'Paper changes temperature', 'Solution boils'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Purple MnO₄⁻ turns colourless Mn²⁺ until excess drops remain.'] },
            whyItHappens: { en: 'First unreacted MnO₄⁻ drop tints the clear flask pink.' },
          },
        ],
      }),

      buildChapter({
        id: 'cbse12-bio-genetics',
        chapterNumber: 5,
        title: { en: 'Molecular Inheritance & Ecosystem Energy', hi: 'वंशागति के आणविक आधार और पारिस्थितिकी', kn: 'ಆಣ್ವಿಕ ಅನುವಂಶಿಕತೆ' },
        primarySubject: 'biology',
        topicTag: { en: 'DNA, Transcription & Ecosystems' },
        textbookName: 'NCERT Class 12 Biology',
        board: 'cbse',
        classLevel: 12,
        session: '2025-26',
        conceptSummary: {
          en: 'Central dogma DNA → RNA → Protein drives heredity via complementary base pairing; solar energy flows unidirectionally at ~10% trophic efficiency.',
        },
        topics: [
          {
            id: 'cbse12-bio-t1',
            title: { en: 'DNA Double Helix, Central Dogma & Ecological Pyramids' },
            subtopics: { en: ['A=T, G≡C base pairing', 'Semi-conservative replication', '10% Lindeman energy rule'] },
            explanation: { en: 'Each strand templates its exact complement, preserving genetic fidelity across generations.' },
          },
        ],
        definitions: [
          { id: 'cbse12-bio-d1', term: { en: 'Transcription' }, definition: { en: 'Synthesis of single-stranded mRNA complementary to a template DNA gene strand.' } },
        ],
        keyConcepts: { en: ['Energy pyramids are always upright because heat dissipates at every trophic step.'] },
        diagramKind: 'ecosystem-web',
        diagramCaption: { en: 'Interactive energy transfer and material recycling loop.' },
        biologyProcesses: [
          {
            id: 'cbse12-bio-bp1',
            title: { en: 'DNA Isolation Principle' },
            steps: { en: ['Lyse membranes with detergent + salt.', 'Precipitate pure white DNA threads using chilled ethanol.'] },
          },
        ],
        realLifeApplications: { en: ['DNA fingerprinting forensics, Bt crops, and wetland biodiversity restoration.'] },
        revisionNotes: { en: ['Stop codons UAA, UAG, UGA terminate translation cleanly.'] },
        chapterQuestions: [
          {
            id: 'cbse12-bio-q1',
            type: 'short',
            question: { en: 'If a double-stranded DNA sample contains 22% Cytosine, calculate its percentage of Adenine.' },
            answer: { en: 'G = C = 22%, leaving 56% for A + T → Adenine = 28%.' },
          },
        ],
        mcqs: [
          {
            id: 'cbse12-bio-m1',
            question: { en: 'In DNA extraction using papaya or onion pulp, chilled ethanol is poured gently to:' },
            options: { en: ['Precipitate insoluble white DNA strands', 'Dissolve glass beaker', 'Kill sunlight', 'Break down all bases'] },
            correctIndex: 0,
            explanation: { en: 'DNA is insoluble in cold alcohol and spools cleanly at the water–ethanol interface.' },
          },
        ],
        experiments: [
          {
            id: 'cbse12-bio-exp1',
            relationType: 'official-practical',
            activityMode: 'virtual-sim',
            linkedSupportingWorld: 'biology',
            title: { en: 'CBSE Class 12 Practical & Sim: Plant DNA Isolation & Quadrat Population Analysis' },
            objective: { en: 'Spool visible DNA threads from ripe papaya/banana pulp and simulate Biology systems.' },
            materials: { en: ['Mashed ripe banana/papaya', 'Table salt + mild dish soap', 'Chilled ethanol/rubbing alcohol', 'Biology World'] },
            scientificPrinciple: { en: 'Detergent dissolves lipid membranes; Na⁺ shields negative DNA phosphate backbone so chilled alcohol precipitates threads.' },
            steps: {
              en: [
                'Filter salted soap fruit homogenate cleanly through coffee/muslin filter.',
                'Trickle ice-cold ethanol down the side and spool cloudy white DNA filaments with a clean toothpick.',
              ],
            },
            observationTable: {
              columns: { en: ['Layer', 'Visible Result'] },
              sampleRows: [['Lower aqueous layer', 'Clear pinkish/straw filtrate'], ['Chilled ethanol interface', 'White cottony DNA strands spool upward']],
            },
            expectedResult: { en: 'Distinct white DNA threads gather cleanly at the interface.' },
            conclusion: { en: 'Chilled ethanol precipitates long genomic DNA polymers intact.' },
            safetyNote: { en: 'Keep ethanol strictly away from open flames or heaters.' },
            predictionQuestion: { en: 'Why is mild detergent added to fruit mash before filtering?' },
            predictionOptions: { en: ['To break open fatty cell and nuclear membranes releasing DNA', 'To turn DNA green', 'To boil water'] },
            predictionCorrectIndex: 0,
            hints: { en: ['Detergents dissolve lipids and fats.'] },
            whyItHappens: { en: 'Phospholipid bilayers dissolve into soap micelles, freeing nuclear DNA.' },
          },
        ],
      }),
    ],
  },
];
