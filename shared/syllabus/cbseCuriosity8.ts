import { buildChapter } from './meta';
import type { BoardSyllabusRecord } from './types';

const BOOK = 'Curiosity — Class 8 Science (NCERT 2025–26)';

export const CBSE_CLASS_8_CURIOSITY: BoardSyllabusRecord = {
  id: 'cbse-c8-2025-26',
  classLevel: 8,
  board: 'cbse',
  session: '2025-26',
  academicYearLabel: '2025–26',
  syllabusVersionLabel: 'CBSE · NCERT Curiosity (2025–26)',
  textbookName: BOOK,
  sourceTitle: 'NCERT Official Textbooks (Curiosity Grade 8)',
  sourceUrl: 'https://ncert.nic.in/textbook.php',
  lastVerified: '2026-01-15',
  coverageNote: {
    en: 'Complete verified Physics, Chemistry, and Biology chapters from the NCERT Class 8 Science ("Curiosity") textbook (2025–26).',
    hi: 'NCERT कक्षा 8 विज्ञान ("Curiosity", 2025–26) के भौतिकी, रसायन विज्ञान और जीव विज्ञान के सत्यापित अध्याय।',
    kn: 'NCERT ತರಗತಿ 8 ವಿಜ್ಞಾನ ("Curiosity", 2025–26) ಪಠ್ಯಪುಸ್ತಕದ ಪರಿಶೀಲಿಸಿದ ಭೌತಶಾಸ್ತ್ರ, ರಸಾಯನಶಾಸ್ತ್ರ ಮತ್ತು ಜೀವಶಾಸ್ತ್ರ ಅಧ್ಯಾಯಗಳು.',
  },
  availableSubjects: ['physics', 'chemistry', 'biology'],
  chapters: [
    // PHYSICS CHAPTERS (Ch 4, 5, 6, 10, 11)
    buildChapter({
      id: 'curiosity-ch04',
      chapterNumber: 4,
      title: {
        en: 'Electricity: Magnetic and Heating Effects',
        hi: 'विद्युत: चुंबकीय और तापीय प्रभाव',
        kn: 'ವಿದ್ಯುತ್: ಕಾಂತೀಯ ಮತ್ತು ಉಷ್ಣ ಪರಿಣಾಮಗಳು',
      },
      primarySubject: 'physics',
      topicTag: { en: 'Electricity & Electromagnetism', hi: 'विद्युत एवं चुंबकत्व', kn: 'ವಿದ್ಯುತ್ ಮತ್ತು ಕಾಂತೀಯತೆ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: {
        en: 'Electric current flowing through a wire produces both a heating effect (Joule heating used in iron/kettle) and a magnetic field around the conductor (electromagnets & bells).',
        hi: 'तार से बहने वाली विद्युत धारा ऊष्मा (तापीय प्रभाव) और चारों ओर चुंबकीय क्षेत्र (विद्युत चुंबक) दोनों उत्पन्न करती है।',
        kn: 'ತಂತಿಯ ಮೂಲಕ ಹರಿಯುವ ವಿದ್ಯುತ್ ಪ್ರವಾಹವು ಉಷ್ಣ ಪರಿಣಾಮ ಮತ್ತು ಕಾಂತೀಯ ಕ್ಷೇತ್ರ ಎರಡನ್ನೂ ಉಂಟುಮಾಡುತ್ತದೆ.',
      },
      topics: [
        {
          id: 'c8-ch04-t1',
          title: { en: 'Heating Effect of Electric Current', hi: 'विद्युत धारा का तापीय प्रभाव', kn: 'ವಿದ್ಯುತ್ ಪ್ರವಾಹದ ಉಷ್ಣ ಪರಿಣಾಮ' },
          subtopics: { en: ['Resistance of nichrome wire', 'Fuse safety wire', 'Electric iron & heater coils'] },
          explanation: { en: 'When electrons collide with lattice ions in a high-resistance nichrome wire, electrical energy converts to thermal energy.' },
        },
        {
          id: 'c8-ch04-t2',
          title: { en: 'Magnetic Effect & Electromagnet', hi: 'चुंबकीय प्रभाव और विद्युत चुंबक', kn: 'ಕಾಂತೀಯ ಪರಿಣಾಮ ಮತ್ತು ವಿದ್ಯುತ್ಕಾಂತ' },
          subtopics: { en: ['Oersted compass deflection', 'Solenoid iron nail electromagnet', 'Increasing coil turns'] },
          explanation: { en: 'Wrapping insulated copper wire around an iron nail creates a temporary magnet whose strength rises with coil turns and current.' },
        },
      ],
      definitions: [
        {
          id: 'c8-ch04-d1',
          term: { en: 'Electromagnet' },
          definition: { en: 'A soft iron core surrounded by a current-carrying coil that behaves as a magnet only while current flows.' },
        },
        {
          id: 'c8-ch04-d2',
          term: { en: 'Electric Fuse' },
          definition: { en: 'A safety device containing a low-melting-point wire that melts and breaks the circuit during excessive current.' },
        },
      ],
      keyConcepts: {
        en: [
          'Nichrome wire glows red-hot due to high resistivity; thick copper connecting wires stay cool.',
          'Magnetic needle deflects perpendicular to a current-carrying wire (Hans Christian Oersted, 1820).',
          'MCBs (Miniature Circuit Breakers) replace traditional fuses by tripping automatically.',
        ],
      },
      diagramKind: 'electric-circuit',
      diagramCaption: { en: 'Closed DC circuit illustrating current flow I = V / R and resistive heating glow.' },
      formulas: [
        {
          id: 'c8-ch04-f1',
          name: { en: 'Ohm’s Law Relation' },
          formula: 'V = I × R',
          variables: { en: 'V = Voltage (V), I = Current (A), R = Resistance (Ω)' },
          unit: 'Volt (V)',
        },
        {
          id: 'c8-ch04-f2',
          name: { en: 'Joule Heating' },
          formula: 'H = I² × R × t',
          variables: { en: 'H = Heat energy (J), I = Current (A), R = Resistance (Ω), t = Time (s)' },
          unit: 'Joule (J)',
        },
      ],
      solvedNumericals: [
        {
          id: 'c8-ch04-n1',
          problem: { en: 'A 6 V battery drives current through a 4 Ω nichrome coil for 10 s. Find the current and heat produced.' },
          given: ['V = 6 V', 'R = 4 Ω', 't = 10 s'],
          formulaUsed: 'I = V / R; H = I² × R × t',
          solutionSteps: ['I = 6 / 4 = 1.5 A', 'H = (1.5)² × 4 × 10 = 2.25 × 40 = 90 J'],
          finalAnswer: 'Current = 1.5 A, Heat produced = 90 J',
        },
      ],
      realLifeApplications: {
        en: [
          'Electric bells, school buzzers, and scrapyard crane lifters use electromagnets.',
          'Electric room heaters, geysers, and pressing irons use nichrome heating elements.',
        ],
      },
      revisionNotes: {
        en: [
          'Heating depends on current squared (I²), resistance (R), and time (t).',
          'More coil turns around a soft iron nail make a stronger electromagnet.',
        ],
      },
      chapterQuestions: [
        {
          id: 'c8-ch04-q1',
          type: 'conceptual',
          question: { en: 'Why is soft iron used instead of steel inside an electromagnet?' },
          answer: { en: 'Soft iron magnetizes quickly when current turns on and loses magnetism immediately when switched off, whereas steel retains permanent magnetism.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch04-m1',
          question: { en: 'Which property makes a fuse wire effective at protecting appliances?' },
          options: { en: ['High melting point & low resistance', 'Low melting point & high resistance', 'Zero electrical conductivity', 'Permanent magnetization'] },
          correctIndex: 1,
          explanation: { en: 'A fuse wire has high resistance to heat up fast and a low melting point so it melts safely before wires catch fire.' },
        },
        {
          id: 'c8-ch04-m2',
          question: { en: 'Doubling the number of insulated wire turns on an iron nail will:' },
          options: { en: ['Decrease magnetic attraction', 'Increase electromagnet strength', 'Stop current completely', 'Reverse battery polarity'] },
          correctIndex: 1,
          explanation: { en: 'Electromagnet strength is directly proportional to the number of coil turns carrying current.' },
          isPracticeTest: true,
        },
      ],
      experiments: [
        {
          id: 'c8-ch04-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSimExperiment: 'magnetism',
          title: { en: 'Build an Iron-Nail Electromagnet', hi: 'लोहे की कील से विद्युत चुंबक बनाएँ', kn: 'ಕಬ್ಬಿಣದ ಮೊಳೆಯಿಂದ ವಿದ್ಯುತ್ಕಾಂತ ತಯಾರಿಸಿ' },
          objective: { en: 'Observe how electric current turns a coiled iron nail into a magnet that lifts steel paperclips.' },
          materials: { en: ['1.5 V AA cell', '80 cm insulated copper wire', '7 cm iron nail', '10 steel paperclips', 'Switch / tape'] },
          scientificPrinciple: { en: 'A current-carrying solenoid concentrates magnetic flux inside a ferromagnetic iron core.' },
          steps: {
            en: [
              'Wrap 25 tight turns of insulated copper wire around the iron nail, leaving 10 cm bare ends.',
              'Connect ends cleanly across a single 1.5 V battery cell using a switch (never hold bare hot wires).',
              'Bring the nail tip near paperclips and count how many stick.',
              'Disconnect the battery and observe what happens to the paperclips.',
            ],
          },
          observationTable: {
            columns: { en: ['Coil Turns', 'Battery State', 'Paperclips Lifted'] },
            sampleRows: [['25 turns', 'ON', '4'], ['25 turns', 'OFF', '0'], ['45 turns', 'ON', '8']],
          },
          expectedResult: { en: 'More turns lift more clips; cutting current drops all clips.' },
          conclusion: { en: 'Electric current creates a controllable temporary magnetic field.' },
          safetyNote: { en: 'Use only a 1.5 V battery cell; never plug copper wire into a wall AC socket. Disconnect after 10 seconds to prevent battery heating.' },
          predictionQuestion: { en: 'What happens the moment you disconnect the battery from the nail coil?' },
          predictionOptions: { en: ['Paperclips fall off immediately', 'Nail remains a strong magnet forever', 'Clips glow brightly', 'Battery charges faster'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Soft iron loses magnetism once current stops.'] },
          whyItHappens: { en: 'Without current, magnetic domains inside soft iron relax back to random directions.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch05',
      chapterNumber: 5,
      title: { en: 'Exploring Forces', hi: 'बलों की खोज', kn: 'ಬಲಗಳ ಅನ್ವೇಷಣೆ' },
      primarySubject: 'physics',
      topicTag: { en: 'Forces & Friction', hi: 'बल और घर्षण', kn: 'ಬಲ ಮತ್ತು ಘರ್ಷಣೆ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: {
        en: 'Contact and non-contact forces change speed, direction, or shape of objects; friction opposes relative sliding between surfaces.',
      },
      topics: [
        {
          id: 'c8-ch05-t1',
          title: { en: 'Contact vs Non-Contact Forces' },
          subtopics: { en: ['Muscular & frictional force', 'Magnetic, electrostatic, gravitational force'] },
          explanation: { en: 'Gravity and magnetism act across empty space without physical touching, while friction requires surface contact.' },
        },
      ],
      definitions: [
        {
          id: 'c8-ch05-d1',
          term: { en: 'Force' },
          definition: { en: 'A push or pull resulting from interaction between two objects; SI unit is Newton (N).' },
        },
      ],
      keyConcepts: {
        en: [
          'Balanced forces produce zero net acceleration; unbalanced forces alter speed or direction.',
          'Rolling friction is much smaller than sliding friction.',
        ],
      },
      diagramKind: 'force-friction',
      diagramCaption: { en: 'Free-body forces: applied pull versus opposing kinetic friction.' },
      formulas: [
        {
          id: 'c8-ch05-f1',
          name: { en: 'Newton’s Second Law' },
          formula: 'F = m × a',
          variables: { en: 'F = Net Force (N), m = Mass (kg), a = Acceleration (m/s²)' },
          unit: 'Newton (N)',
        },
      ],
      solvedNumericals: [
        {
          id: 'c8-ch05-n1',
          problem: { en: 'A pull of 40 N acts on a 4 kg wooden crate while friction opposes with 24 N. Find acceleration.' },
          given: ['F_pull = 40 N', 'f_friction = 24 N', 'm = 4 kg'],
          formulaUsed: 'F_net = F_pull - f_friction; a = F_net / m',
          solutionSteps: ['F_net = 40 - 24 = 16 N', 'a = 16 / 4 = 4 m/s²'],
          finalAnswer: 'Acceleration = 4 m/s²',
        },
      ],
      realLifeApplications: { en: ['Grooved bicycle tyres increase grip; ball bearings replace sliding with rolling friction.'] },
      revisionNotes: { en: ['1 Newton ≈ weight of a 100 g mass on Earth.'] },
      chapterQuestions: [
        {
          id: 'c8-ch05-q1',
          type: 'short',
          question: { en: 'Why do carrom players sprinkle fine powder on the board?' },
          answer: { en: 'Fine powder fills microscopic surface grooves and reduces sliding friction so the striker glides smoothly.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch05-m1',
          question: { en: 'Which of these is a non-contact force?' },
          options: { en: ['Friction on a road', 'Muscular push on a cart', 'Gravitational pull on a falling mango', 'Air drag on a parachute'] },
          correctIndex: 2,
          explanation: { en: 'Earth pulls the mango downward without touching it directly.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch05-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSimExperiment: 'mechanics',
          title: { en: 'Coin & Surface Friction Slide Test' },
          objective: { en: 'Compare stopping distances of a sliding coin across newspaper, dry wood, and powdered plate.' },
          materials: { en: ['Smooth metal coin', 'Cardboard ramp', 'Newspaper sheet', 'Dry talcum powder'] },
          scientificPrinciple: { en: 'Smoother interfaces have fewer interlocking irregularities, lowering kinetic friction.' },
          steps: {
            en: [
              'Lean cardboard against 2 stacked books to form a fixed ramp.',
              'Release coin from the same top mark onto newspaper and measure slide distance.',
              'Repeat onto a clean smooth tile and onto lightly powdered tile.',
            ],
          },
          observationTable: {
            columns: { en: ['Surface', 'Slide Distance (cm)'] },
            sampleRows: [['Newspaper', '14 cm'], ['Clean tile', '36 cm'], ['Powdered tile', '62 cm']],
          },
          expectedResult: { en: 'Coin travels farthest on the powdered tile.' },
          conclusion: { en: 'Lubrication lowers surface friction and increases sliding distance.' },
          safetyNote: { en: 'Wipe talcum powder off the floor right after the test so nobody slips.' },
          predictionQuestion: { en: 'On which surface will the coin stop soonest?' },
          predictionOptions: { en: ['Rough sandpaper/newspaper', 'Powdered steel plate', 'Oiled glass'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Higher roughness creates more interlocking friction.'] },
          whyItHappens: { en: 'Greater microscopic roughness converts kinetic energy into heat faster.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch06',
      chapterNumber: 6,
      title: { en: 'Pressure, Winds, Storms, and Cyclones', hi: 'दाब, पवन, तूफ़ान और चक्रवात', kn: 'ಒತ್ತಡ, ಗಾಳಿ, ಬಿರುಗಾಳಿ ಮತ್ತು ಚಂಡಮಾರುತಗಳು' },
      primarySubject: 'physics',
      topicTag: { en: 'Fluid Pressure & Winds', hi: 'द्रव दाब और पवन', kn: 'ದ್ರವ ಒತ್ತಡ ಮತ್ತು ಗಾಳಿ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: {
        en: 'Pressure is force per unit area (P = F/A); liquids exert depth-dependent pressure and fast winds create lower pressure zones.',
      },
      topics: [
        {
          id: 'c8-ch06-t1',
          title: { en: 'Liquid Pressure with Depth & Wind Pressure' },
          subtopics: { en: ['Hydrostatic pressure P = F/A', 'Uneven heating drives winds'] },
          explanation: { en: 'Smaller contact area concentrates force into higher pressure; heated air rises leaving low pressure.' },
        },
      ],
      definitions: [
        {
          id: 'c8-ch06-d1',
          term: { en: 'Pressure' },
          definition: { en: 'Force acting perpendicularly per unit area (P = F / A); SI unit is Pascal (Pa = N/m²).' },
        },
      ],
      keyConcepts: {
        en: [
          'School bags use wide straps to increase area and reduce shoulder pressure.',
          'Air moves from high-pressure regions to low-pressure regions.',
        ],
      },
      diagramKind: 'pressure-depth',
      diagramCaption: { en: 'Water jets shoot farther near the bottom because liquid pressure increases with depth.' },
      formulas: [
        {
          id: 'c8-ch06-f1',
          name: { en: 'Pressure Formula' },
          formula: 'P = F / A',
          variables: { en: 'P = Pressure (Pa), F = Perpendicular Force (N), A = Area (m²)' },
          unit: 'Pascal (Pa)',
        },
      ],
      solvedNumericals: [
        {
          id: 'c8-ch06-n1',
          problem: { en: 'A brick weighs 25 N and rests on a face of area 0.02 m². Calculate the pressure exerted.' },
          given: ['F = 25 N', 'A = 0.02 m²'],
          formulaUsed: 'P = F / A',
          solutionSteps: ['P = 25 / 0.02 = 1250 N/m²'],
          finalAnswer: 'Pressure = 1250 Pa',
        },
      ],
      realLifeApplications: { en: ['Broad camel feet prevent sinking in sand; sharp knives cut cleanly via tiny edge area.'] },
      revisionNotes: { en: ['Pressure increases when force increases OR contact area decreases.'] },
      chapterQuestions: [
        {
          id: 'c8-ch06-q1',
          type: 'short',
          question: { en: 'Why are dam walls built much thicker at the base than at the top?' },
          answer: { en: 'Water pressure increases with depth, so the deepest water pushes hardest on the base of the dam.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch06-m1',
          question: { en: 'If you halve the contact area while keeping force constant, pressure:' },
          options: { en: ['Halves', 'Stays the same', 'Doubles', 'Becomes zero'] },
          correctIndex: 2,
          explanation: { en: 'Since P = F/A, halving A doubles P.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch06-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSimExperiment: 'thermodynamics',
          title: { en: '3-Hole Water Bottle Pressure Column' },
          objective: { en: 'Verify that water pressure increases with depth in a transparent bottle.' },
          materials: { en: ['1 L plastic bottle', 'Pushpin', 'Tap water', 'Basin'] },
          scientificPrinciple: { en: 'Hydrostatic pressure grows proportionally with vertical water column height above the opening.' },
          steps: {
            en: [
              'Make 3 vertical holes near top, middle, and bottom of an empty bottle.',
              'Cover holes with tape, fill bottle with water, and place beside a basin.',
              'Peel tape off and compare horizontal distance of all 3 streams.',
            ],
          },
          observationTable: {
            columns: { en: ['Hole Depth', 'Jet Distance (cm)'] },
            sampleRows: [['Top (5 cm)', '6 cm'], ['Middle (12 cm)', '14 cm'], ['Bottom (19 cm)', '23 cm']],
          },
          expectedResult: { en: 'Lowest hole squirts the farthest horizontal jet.' },
          conclusion: { en: 'Liquid pressure increases directly with depth.' },
          safetyNote: { en: 'Ask an adult when making holes with a pin; test over a sink or outdoors.' },
          predictionQuestion: { en: 'Which hole shoots water the farthest?' },
          predictionOptions: { en: ['Top hole', 'Bottom hole', 'All identical'] },
          predictionCorrectIndex: 1,
          hints: { en: ['More water weight presses down above the bottom hole.'] },
          whyItHappens: { en: 'Greater overlying liquid column weight produces higher outward exit velocity.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch10',
      chapterNumber: 10,
      title: { en: 'Light: Mirrors and Lenses', hi: 'प्रकाश: दर्पण और लेंस', kn: 'ಬೆಳಕು: ದರ್ಪಣಗಳು ಮತ್ತು ಮಸೂರಗಳು' },
      primarySubject: 'physics',
      topicTag: { en: 'Reflection & Refraction', hi: 'परावर्तन और अपवर्तन', kn: 'ಪ್ರತಿಫಲನ ಮತ್ತು ವಕ್ರೀಭವನ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: {
        en: 'Curved mirrors reflect rays while convex and concave lenses refract light to converge or diverge beams.',
      },
      topics: [
        {
          id: 'c8-ch10-t1',
          title: { en: 'Convex vs Concave Lenses & Curved Mirrors' },
          subtopics: { en: ['Converging convex lens', 'Diverging concave lens', 'Focal point'] },
          explanation: { en: 'Convex lenses converge parallel rays to a real focus; concave lenses spread rays outward.' },
        },
      ],
      definitions: [
        {
          id: 'c8-ch10-d1',
          term: { en: 'Focal Length (f)' },
          definition: { en: 'Distance between the optical centre of a lens/mirror and its principal focus.' },
        },
      ],
      keyConcepts: {
        en: [
          'Concave mirrors magnify teeth for dentists and focus headlights.',
          'Convex mirrors provide wide rear-view fields for vehicles.',
        ],
      },
      diagramKind: 'optics-lens-mirror',
      diagramCaption: { en: 'Convex lens image formation as object distance varies relative to focal point F.' },
      formulas: [
        {
          id: 'c8-ch10-f1',
          name: { en: 'Snell’s Law of Refraction' },
          formula: 'n₁ · sin(i) = n₂ · sin(r)',
          variables: { en: 'n₁, n₂ = refractive indices, i = angle of incidence, r = angle of refraction' },
          unit: 'Dimensionless ratio',
        },
      ],
      solvedNumericals: [
        {
          id: 'c8-ch10-n1',
          problem: { en: 'Light enters water (n₂ = 1.33) from air (n₁ = 1.0) at 30°. Find sin(r).' },
          given: ['n₁ = 1.0', 'n₂ = 1.33', 'sin(30°) = 0.5'],
          formulaUsed: 'sin(r) = (n₁ / n₂) × sin(i)',
          solutionSteps: ['sin(r) = (1.0 / 1.33) × 0.5 ≈ 0.376'],
          finalAnswer: 'sin(r) ≈ 0.376 (r ≈ 22.1°)',
        },
      ],
      realLifeApplications: { en: ['Reading spectacles, camera lenses, solar cookers, and rear-view side mirrors.'] },
      revisionNotes: { en: ['Convex lens = thicker in the middle (converging); Concave lens = thinner in middle (diverging).'] },
      chapterQuestions: [
        {
          id: 'c8-ch10-q1',
          type: 'short',
          question: { en: 'Why are convex mirrors fitted as side rear-view mirrors on vehicles?' },
          answer: { en: 'They always form erect, diminished images over a much wider field of view than flat mirrors.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch10-m1',
          question: { en: 'Which mirror is used in a solar cooker to concentrate sunlight onto a vessel?' },
          options: { en: ['Plane mirror', 'Concave mirror', 'Convex mirror', 'Frosted glass'] },
          correctIndex: 1,
          explanation: { en: 'Concave mirrors reflect parallel sunlight rays toward a single hot focus.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch10-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSimExperiment: 'optics',
          title: { en: 'Shiny Steel Spoon Concave & Convex Mirror Lab' },
          objective: { en: 'Observe erect vs inverted reflection on both faces of a polished spoon.' },
          materials: { en: ['Clean shiny steel spoon', 'Candle or bright window'] },
          scientificPrinciple: { en: 'Inner bowl acts as a concave mirror; outer bulge acts as a convex mirror.' },
          steps: {
            en: [
              'Look at your face on the outer convex back of the spoon at 20 cm.',
              'Flip to the inner concave bowl at 25 cm and note orientation.',
              'Bring the inner bowl very close (4 cm) to your nose.',
            ],
          },
          observationTable: {
            columns: { en: ['Spoon Side & Distance', 'Image Orientation'] },
            sampleRows: [['Outer convex (20 cm)', 'Upright, smaller'], ['Inner concave (25 cm)', 'Upside-down'], ['Inner concave (4 cm)', 'Upright, magnified']],
          },
          expectedResult: { en: 'Inner spoon flips upright when inside focal length.' },
          conclusion: { en: 'Curvature direction determines image size and inversion.' },
          safetyNote: { en: 'Never focus direct sunlight into eyes with shiny curved metal or lenses.' },
          predictionQuestion: { en: 'What image appears on the outer back of a steel spoon?' },
          predictionOptions: { en: ['Always upright and smaller', 'Always upside down', 'Invisible'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Convex mirrors diverge rays symmetrically.'] },
          whyItHappens: { en: 'Reflected rays appear to originate behind the convex surface, forming a virtual upright image.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch11',
      chapterNumber: 11,
      title: { en: 'Keeping Time with the Skies', hi: 'आकाश के साथ समय की गणना', kn: 'ಆಕಾಶದೊಂದಿಗೆ ಸಮಯದ ಲೆಕ್ಕಾಚಾರ' },
      primarySubject: 'physics',
      topicTag: { en: 'Astronomy & Timekeeping', hi: 'खगोल विज्ञान और समय', kn: 'ಖಗೋಳಶಾಸ್ತ್ರ ಮತ್ತು ಸಮಯ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: {
        en: 'Sun shadows, lunar phases, and Earth’s rotation/revolution established calendars and gnomon sundials.',
      },
      topics: [
        {
          id: 'c8-ch11-t1',
          title: { en: 'Shadow Sundials & Lunar Phases' },
          subtopics: { en: ['Gnomon shadow rotation', 'Synodic lunar cycle (~29.5 days)'] },
          explanation: { en: 'Moonlight is reflected sunlight whose visible fraction changes smoothly over 29.5 days.' },
        },
      ],
      definitions: [
        {
          id: 'c8-ch11-d1',
          term: { en: 'Synodic Month' },
          definition: { en: 'The ~29.5-day interval between two successive Full Moons or New Moons.' },
        },
      ],
      keyConcepts: {
        en: [
          'Shadow is shortest at local solar noon when the Sun crosses its highest daily arc.',
          'Traditional Indian lunar-solar calendars bridge 12 lunar months with leap months (Adhik Maas).',
        ],
      },
      diagramKind: 'solar-shadows',
      diagramCaption: { en: 'Sun angle controls vertical stick shadow length from morning to noon.' },
      formulas: [],
      solvedNumericals: [],
      realLifeApplications: { en: ['Jantar Mantar astronomical observatories in Jaipur and Delhi track exact solar noon.'] },
      revisionNotes: { en: ['One complete solar day = 24 hours; Earth rotates 15° per hour.'] },
      chapterQuestions: [
        {
          id: 'c8-ch11-q1',
          type: 'short',
          question: { en: 'At what time of day is a vertical stick’s shadow shortest?' },
          answer: { en: 'At local solar noon, when the Sun reaches its highest elevation in the sky.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch11-m1',
          question: { en: 'Approximately how many days separate one Full Moon from the next?' },
          options: { en: ['7 days', '14 days', '29.5 days', '365 days'] },
          correctIndex: 2,
          explanation: { en: 'The Moon’s synodic orbital cycle takes about 29.5 days.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch11-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          title: { en: 'Courtyard Stick Sundial Shadow Tracker' },
          objective: { en: 'Track Earth’s steady 15°/hour rotation by marking shadow tips on paper.' },
          materials: { en: ['Straight 20 cm pencil/stick', 'Chart paper', 'Stone weights', 'Chalk'] },
          scientificPrinciple: { en: 'Rectilinear propagation casts sharp shadows pointing opposite the Sun’s sky position.' },
          steps: {
            en: [
              'Stand pencil upright in clay/soil at the center of a sunny sheet.',
              'Mark shadow tip and record time at 9 AM, 11 AM, 12 Noon, and 2 PM.',
            ],
          },
          observationTable: {
            columns: { en: ['Time', 'Shadow Length (cm)', 'Direction'] },
            sampleRows: [['9:00 AM', '34 cm', 'West'], ['12:00 PM', '8 cm', 'North'], ['3:00 PM', '31 cm', 'East']],
          },
          expectedResult: { en: 'Shadow rotates clockwise and becomes shortest near noon.' },
          conclusion: { en: 'Shadow geometry reliably measures solar daytime.' },
          safetyNote: { en: 'Never look directly at the Sun while aligning the stick.' },
          predictionQuestion: { en: 'Which direction does a morning shadow point in India?' },
          predictionOptions: { en: ['Toward West', 'Toward East', 'Straight Down'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Morning sun rises in the East.'] },
          whyItHappens: { en: 'Shadows always fall directly opposite the light source.' },
        },
      ],
    }),

    // CHEMISTRY CHAPTERS (Ch 7, 8, 9)
    buildChapter({
      id: 'curiosity-ch07',
      chapterNumber: 7,
      title: { en: 'Particulate Nature of Matter', hi: 'पदार्थ का कणीय स्वभाव', kn: 'ದ್ರವ್ಯದ ಕಣ ಸ್ವಭಾವ' },
      primarySubject: 'chemistry',
      topicTag: { en: 'States of Matter', hi: 'पदार्थ की अवस्थाएँ', kn: 'ದ್ರವ್ಯದ ಸ್ಥಿತಿಗಳು' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'All matter consists of constantly moving particles separated by spaces that increase from solid to liquid to gas.' },
      topics: [
        {
          id: 'c8-ch07-t1',
          title: { en: 'Particle Spacing & Diffusion' },
          subtopics: { en: ['Solids, liquids, gases', 'Dissolution without volume rise'] },
          explanation: { en: 'Sugar crystals tuck between water particles, explaining why water level barely rises.' },
        },
      ],
      definitions: [
        { id: 'c8-ch07-d1', term: { en: 'Diffusion' }, definition: { en: 'Spontaneous intermixing of particles of two substances on their own.' } },
      ],
      keyConcepts: { en: ['Heating speeds up particle motion and speeds up diffusion.'] },
      diagramKind: 'states-of-matter',
      diagramCaption: { en: 'Particle arrangement transitioning from ordered solid to fluid liquid and rapid gas.' },
      chemicalEquations: [
        {
          id: 'c8-ch07-eq1',
          title: { en: 'Physical State Transition (Water)' },
          equation: 'H₂O (s) + Heat → H₂O (l) + Heat → H₂O (g)',
          reactionType: 'Endothermic Phase Change',
          explanation: { en: 'Added heat overcomes inter-particle attraction without altering chemical formula H₂O.' },
        },
      ],
      realLifeApplications: { en: ['Perfume scent spreading across a room; LPG compressed into liquid in cooking cylinders.'] },
      revisionNotes: { en: ['Gases are highly compressible because inter-particle gaps are very large.'] },
      chapterQuestions: [
        {
          id: 'c8-ch07-q1',
          type: 'short',
          question: { en: 'Why does hot food smell stronger from afar than cold food?' },
          answer: { en: 'Higher temperature gives vapour particles higher kinetic energy, accelerating diffusion through air.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch07-m1',
          question: { en: 'Which state has the strongest inter-particle attraction?' },
          options: { en: ['Gas', 'Liquid', 'Solid', 'Plasma'] },
          correctIndex: 2,
          explanation: { en: 'Solids pack particles tightly with strong attractive forces.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch07-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'chemistry',
          title: { en: 'Warm vs Cold Water Ink Diffusion' },
          objective: { en: 'Observe how temperature controls particle diffusion speed.' },
          materials: { en: ['2 clear glasses', 'Cold & warm tap water', 'Food colour or ink drop'] },
          scientificPrinciple: { en: 'Higher thermal energy raises average molecular speed.' },
          steps: {
            en: [
              'Fill one glass with cold water and one with warm water.',
              'Add 1 drop of ink to both simultaneously without stirring.',
              'Record time until colour spreads halfway down each glass.',
            ],
          },
          observationTable: {
            columns: { en: ['Water Temp', 'Time to Spread (s)'] },
            sampleRows: [['Cold (~12°C)', '55 s'], ['Warm (~55°C)', '12 s']],
          },
          expectedResult: { en: 'Ink disperses much faster in warm water.' },
          conclusion: { en: 'Particle kinetic speed rises with temperature.' },
          safetyNote: { en: 'Use comfortably warm (not boiling) tap water.' },
          predictionQuestion: { en: 'Which glass turns evenly coloured first?' },
          predictionOptions: { en: ['Warm water', 'Cold water', 'Both take identical time'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Heat gives water molecules faster motion.'] },
          whyItHappens: { en: 'Faster collisions distribute dye molecules rapidly.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch08',
      chapterNumber: 8,
      title: { en: 'Nature of Matter: Elements, Compounds, and Mixtures', hi: 'तत्व, यौगिक और मिश्रण', kn: 'ಮೂಲವಸ್ತುಗಳು, ಸಂಯುಕ್ತಗಳು ಮತ್ತು ಮಿಶ್ರಣಗಳು' },
      primarySubject: 'chemistry',
      topicTag: { en: 'Matter Classification', hi: 'पदार्थ का वर्गीकरण', kn: 'ದ್ರವ್ಯ ವರ್ಗೀಕರಣ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Elements consist of one atom type, compounds bind elements chemically in fixed ratios, and mixtures blend physically.' },
      topics: [
        {
          id: 'c8-ch08-t1',
          title: { en: 'Compounds vs Mixtures' },
          subtopics: { en: ['Fixed composition in compounds', 'Magnetic & filtration separation'] },
          explanation: { en: 'Iron filings + sulfur powder can be separated by a magnet, but heating forms black FeS which cannot.' },
        },
      ],
      definitions: [
        { id: 'c8-ch08-d1', term: { en: 'Compound' }, definition: { en: 'A pure substance formed when two or more elements combine chemically in a fixed proportion.' } },
      ],
      keyConcepts: { en: ['Mixtures retain properties of their components; compounds have new properties.'] },
      diagramKind: 'chemical-reaction',
      diagramCaption: { en: 'Chemical reaction rearranging atoms into a new compound.' },
      chemicalEquations: [
        {
          id: 'c8-ch08-eq1',
          title: { en: 'Formation of Iron Sulfide' },
          equation: 'Fe (s) + S (s) —Heat→ FeS (s)',
          reactionType: 'Combination Reaction',
          explanation: { en: 'Heating iron and sulfur produces non-magnetic iron sulfide.' },
        },
      ],
      realLifeApplications: { en: ['Saltwater separation by solar evaporation; steel alloys in bridges.'] },
      revisionNotes: { en: ['Water (H₂O) is always 1:8 by mass of hydrogen to oxygen.'] },
      chapterQuestions: [
        {
          id: 'c8-ch08-q1',
          type: 'short',
          question: { en: 'Why is air classified as a mixture and not a compound?' },
          answer: { en: 'Its gases (N₂, O₂, CO₂) vary slightly in ratio and retain individual properties without chemical bonding.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch08-m1',
          question: { en: 'Which of the following is an element?' },
          options: { en: ['Table salt (NaCl)', 'Copper wire (Cu)', 'Sugar syrup', 'Milk'] },
          correctIndex: 1,
          explanation: { en: 'Copper contains only one kind of atom.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch08-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'chemistry',
          title: { en: 'Separate Salt, Sand & Iron Filings Mixture' },
          objective: { en: 'Use magnetism, dissolution, and filtration to separate a 3-part mixture.' },
          materials: { en: ['Sand', 'Table salt', 'Small iron nails/filings', 'Magnet', 'Coffee filter/cloth'] },
          scientificPrinciple: { en: 'Components in a physical mixture keep distinct magnetic and solubility traits.' },
          steps: {
            en: [
              'Wrap magnet in paper and pass over mixture to lift iron pieces.',
              'Stir remaining sand + salt in warm water so salt dissolves.',
              'Pour through cloth filter to trap sand and collect salty filtrate.',
            ],
          },
          observationTable: {
            columns: { en: ['Step', 'Property Used', 'Isolated Component'] },
            sampleRows: [['1. Magnet', 'Ferromagnetism', 'Iron'], ['2. Dissolve & Filter', 'Solubility', 'Sand'], ['3. Dry filtrate', 'Evaporation', 'Salt']],
          },
          expectedResult: { en: 'All 3 components recover separately.' },
          conclusion: { en: 'Mixtures separate using physical differences.' },
          safetyNote: { en: 'Keep iron filings away from eyes; wash hands afterward.' },
          predictionQuestion: { en: 'Which step isolates insoluble sand from dissolved salt?' },
          predictionOptions: { en: ['Filtration through cloth/paper', 'Magnetism', 'Freezing'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Dissolved salt passes through filter pores with water.'] },
          whyItHappens: { en: 'Sand grains are far larger than filter pores, whereas dissolved salt ions pass straight through.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch09',
      chapterNumber: 9,
      title: { en: 'Acids, Bases, and Neutralisation', hi: 'अम्ल, क्षार और उदासीनीकरण', kn: 'ಆಮ್ಲಗಳು, ಪ್ರತ್ಯಾಮ್ಲಗಳು ಮತ್ತು ತಟಸ್ಥೀಕರಣ' },
      primarySubject: 'chemistry',
      topicTag: { en: 'Acids & Bases', hi: 'अम्ल और क्षार', kn: 'ಆಮ್ಲ ಮತ್ತು ಪ್ರತ್ಯಾಮ್ಲ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Natural indicators like turmeric and hibiscus distinguish acids from bases; mixing them produces salt, water, and heat.' },
      topics: [
        {
          id: 'c8-ch09-t1',
          title: { en: 'Natural Indicators & Neutralisation' },
          subtopics: { en: ['Turmeric & China rose tests', 'Acid + Base → Salt + Water'] },
          explanation: { en: 'Turmeric stays yellow in acid/neutral but turns brick-red in soap/base.' },
        },
      ],
      definitions: [
        { id: 'c8-ch09-d1', term: { en: 'Neutralisation' }, definition: { en: 'Reaction between an acid and a base producing salt and water with release of heat.' } },
      ],
      keyConcepts: { en: ['Baking soda neutralises acidic ant stings; slaked lime treats acidic soil.'] },
      diagramKind: 'acids-bases-ph',
      diagramCaption: { en: 'Interactive pH scale from strong acid (0) through neutral (7) to strong base (14).' },
      chemicalEquations: [
        {
          id: 'c8-ch09-eq1',
          title: { en: 'Neutralisation of Hydrochloric Acid' },
          equation: 'HCl (aq) + NaOH (aq) → NaCl (aq) + H₂O (l) + Heat',
          reactionType: 'Neutralisation',
          explanation: { en: 'H⁺ and OH⁻ combine to form neutral water.' },
        },
      ],
      realLifeApplications: { en: ['Antacid tablets neutralise excess stomach acid; baking soda soothes bee stings.'] },
      revisionNotes: { en: ['Blue litmus → Red in Acid; Red litmus → Blue in Base.'] },
      chapterQuestions: [
        {
          id: 'c8-ch09-q1',
          type: 'short',
          question: { en: 'Why does a yellow turmeric curry stain on a white shirt turn red when washed with soap?' },
          answer: { en: 'Soap solution is basic in nature, and turmeric turns reddish-brown in basic media.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch09-m1',
          question: { en: 'What are the products of acid + base neutralisation?' },
          options: { en: ['Oxygen & carbon', 'Salt & water', 'Hydrogen peroxide', 'Soap only'] },
          correctIndex: 1,
          explanation: { en: 'Neutralisation yields salt and water.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch09-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'chemistry',
          title: { en: 'Turmeric & Lemon Household Acid-Base Tester' },
          objective: { en: 'Test household kitchen liquids using homemade turmeric indicator.' },
          materials: { en: ['Turmeric paste', 'Lemon juice', 'Soap water', 'Baking soda solution'] },
          scientificPrinciple: { en: 'Curcumin pigment undergoes structural colour shift above pH 8.' },
          steps: {
            en: [
              'Coat a strip of paper with turmeric paste and dry.',
              'Drop lemon juice on spot A and soap solution on spot B.',
              'Observe red stain on spot B, then add lemon juice to neutralise it back to yellow.',
            ],
          },
          observationTable: {
            columns: { en: ['Sample', 'Turmeric Colour', 'Classification'] },
            sampleRows: [['Lemon juice', 'Stays Yellow', 'Acidic'], ['Soap water', 'Brick Red', 'Basic']],
          },
          expectedResult: { en: 'Soap turns turmeric red; lemon restores yellow.' },
          conclusion: { en: 'Turmeric detects bases and demonstrates reversible neutralisation.' },
          safetyNote: { en: 'Use only mild kitchen foods/soap; never taste test samples.' },
          predictionQuestion: { en: 'What happens if you drop lemon juice onto a soap-reddened turmeric strip?' },
          predictionOptions: { en: ['Turns back to yellow', 'Turns bright blue', 'Catches fire'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Citric acid neutralises the soap base.'] },
          whyItHappens: { en: 'Lowering pH returns curcumin back to its yellow neutral/acidic form.' },
        },
      ],
    }),

    // BIOLOGY CHAPTERS (Ch 2, 3, 12, 13)
    buildChapter({
      id: 'curiosity-ch02',
      chapterNumber: 2,
      title: { en: 'The Invisible Living World: Beyond Our Naked Eye', hi: 'अदृश्य जीव जगत: सूक्ष्मजीव', kn: 'ಕಣ್ಣಿಗೆ ಕಾಣದ ಜೀವ ಜಗತ್ತು' },
      primarySubject: 'biology',
      topicTag: { en: 'Microorganisms & Cells', hi: 'सूक्ष्मजीव और कोशिकाएँ', kn: 'ಸೂಕ್ಷ್ಮಜೀವಿಗಳು ಮತ್ತು ಕೋಶಗಳು' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Microorganisms—bacteria, fungi, protozoa, and algae—are single or few-celled organisms vital to curd, soil fertility, and fermentation.' },
      topics: [
        {
          id: 'c8-ch02-t1',
          title: { en: 'Beneficial Microbes & Cell Basics' },
          subtopics: { en: ['Lactobacillus curdling milk', 'Yeast CO₂ dough rising', 'Cell membrane & nucleus'] },
          explanation: { en: 'Yeast respires sugar anaerobically into CO₂ bubbles that make idli and bread fluffy.' },
        },
      ],
      definitions: [
        { id: 'c8-ch02-d1', term: { en: 'Fermentation' }, definition: { en: 'Conversion of sugar into alcohol/acid and CO₂ by microorganisms such as yeast.' } },
      ],
      keyConcepts: { en: ['Rhizobium bacteria in legume roots fix atmospheric nitrogen into soil nutrients.'] },
      diagramKind: 'cell-osmosis',
      diagramCaption: { en: 'Living cell membrane regulating water uptake by osmosis.' },
      biologyProcesses: [
        {
          id: 'c8-ch02-bp1',
          title: { en: 'Lactobacillus Milk Curdling' },
          steps: { en: ['Warm milk (~38°C) receives starter curd.', 'Lactobacillus converts lactose sugar to lactic acid.', 'Acid coagulates milk casein protein into firm curd.'] },
          microscopeNote: { en: 'Under 400× oil/compound lens, Lactobacillus appears as tiny rod-shaped bacilli.' },
        },
      ],
      realLifeApplications: { en: ['Curd making, idli/dosa batter fermentation, antibiotics, and composting.'] },
      revisionNotes: { en: ['Alexander Fleming discovered Penicillin from Penicillium mould (1928).'] },
      chapterQuestions: [
        {
          id: 'c8-ch02-q1',
          type: 'short',
          question: { en: 'Why does idli batter swell up overnight in a warm kitchen?' },
          answer: { en: 'Wild yeast and lactic bacteria ferment rice/dal sugars and trap tiny carbon dioxide gas bubbles inside the batter.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch02-m1',
          question: { en: 'Which gas makes yeast dough rise?' },
          options: { en: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'] },
          correctIndex: 1,
          explanation: { en: 'Yeast produces CO₂ during fermentation.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch02-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'biology',
          title: { en: 'Yeast Balloon CO₂ Fermentation Test' },
          objective: { en: 'Measure gas released by active yeast feeding on sugar in warm water.' },
          materials: { en: ['Small plastic bottle', '1 tsp baker’s yeast', '1 tsp sugar', 'Warm water', 'Balloon'] },
          scientificPrinciple: { en: 'Microbial respiration releases CO₂ gas that inflates the balloon.' },
          steps: {
            en: [
              'Dissolve sugar and yeast in half a bottle of lukewarm water.',
              'Stretch a deflated balloon over the bottle neck and wait 25 minutes.',
            ],
          },
          observationTable: {
            columns: { en: ['Flask Contents', 'Balloon After 25 min'] },
            sampleRows: [['Yeast + Sugar + Warm water', 'Inflated upright'], ['Yeast + Plain cold water', 'Flat']],
          },
          expectedResult: { en: 'Warm sugar-yeast bottle inflates the balloon steadily.' },
          conclusion: { en: 'Living microbes consume sugar and release CO₂ gas.' },
          safetyNote: { en: 'Wash hands after handling yeast; discard liquid in sink.' },
          predictionQuestion: { en: 'Why must sugar be added alongside yeast?' },
          predictionOptions: { en: ['Sugar is food energy for yeast respiration', 'Sugar freezes yeast', 'Sugar absorbs balloon rubber'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Microbes need carbohydrates to respire.'] },
          whyItHappens: { en: 'Yeast enzymes break down sucrose into CO₂ and ethanol.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch03',
      chapterNumber: 3,
      title: { en: 'Health: The Ultimate Treasure', hi: 'स्वास्थ्य: अनमोल ख़ज़ाना', kn: 'ಆರೋಗ್ಯ: ಪರಮ ಸಂಪತ್ತು' },
      primarySubject: 'biology',
      topicTag: { en: 'Human Health & Immunity', hi: 'मानव स्वास्थ्य एवं प्रतिरक्षा', kn: 'ಮಾನವ ಆರೋಗ್ಯ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Balanced nutrition, clean drinking water, vector control, and vaccination protect communities from communicable and lifestyle diseases.' },
      topics: [
        {
          id: 'c8-ch03-t1',
          title: { en: 'Communicable vs Non-Communicable Diseases & Vaccines' },
          subtopics: { en: ['Vectors (Aedes / Anopheles)', 'Active immunity via vaccines'] },
          explanation: { en: 'Vaccines train immune memory cells safely before real pathogens strike.' },
        },
      ],
      definitions: [
        { id: 'c8-ch03-d1', term: { en: 'Vaccination' }, definition: { en: 'Introducing weakened or killed antigen preparations to build protective immune memory.' } },
      ],
      keyConcepts: { en: ['Preventing stagnant water breaks mosquito breeding cycles for dengue and malaria.'] },
      diagramKind: 'human-circulatory',
      diagramCaption: { en: 'Blood circulation distributes oxygen, nutrients, and immune white blood cells.' },
      biologyProcesses: [
        {
          id: 'c8-ch03-bp1',
          title: { en: 'Primary Immune Response' },
          steps: { en: ['White blood cells recognise pathogen antigens.', 'Antibodies neutralise pathogens.', 'Memory cells remain ready for rapid future defence.'] },
        },
      ],
      realLifeApplications: { en: ['ORS rehydration in diarrhoea; Pulse Polio vaccination drives.'] },
      revisionNotes: { en: ['Antibiotics kill bacteria, NOT viruses like common cold or dengue.'] },
      chapterQuestions: [
        {
          id: 'c8-ch03-q1',
          type: 'short',
          question: { en: 'Why are antibiotics ineffective against viral flu?' },
          answer: { en: 'Antibiotics target bacterial cell walls/machinery, whereas viruses lack cell walls and replicate inside host cells.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch03-m1',
          question: { en: 'Which measure directly prevents malaria and dengue spread in a neighbourhood?' },
          options: { en: ['Draining stagnant puddles', 'Skipping breakfast', 'Using louder loudspeakers', 'Turning off fans'] },
          correctIndex: 0,
          explanation: { en: 'Mosquito larvae breed in standing water.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch03-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'biology',
          title: { en: 'Resting vs Post-Exercise Pulse Rate Lab' },
          objective: { en: 'Measure how heart rate rises during physical activity to deliver more oxygen.' },
          materials: { en: ['Clock/stopwatch', 'Notebook'] },
          scientificPrinciple: { en: 'Muscle respiration demands faster blood circulation during exercise.' },
          steps: {
            en: [
              'Count wrist radial pulse for 30 seconds at rest and double to get BPM.',
              'Do 20 brisk jumping jacks and re-measure immediately and after 3 minutes rest.',
            ],
          },
          observationTable: {
            columns: { en: ['Activity State', 'Beats Per Minute (BPM)'] },
            sampleRows: [['At rest', '74 BPM'], ['Right after exercise', '118 BPM'], ['3 min recovery', '80 BPM']],
          },
          expectedResult: { en: 'Pulse rises sharply right after exercise and returns toward resting rate.' },
          conclusion: { en: 'Healthy circulatory adaptation supplies working muscles with oxygen.' },
          safetyNote: { en: 'Stop immediately if feeling dizzy; stick to gentle pace.' },
          predictionQuestion: { en: 'Why does heart rate climb during running?' },
          predictionOptions: { en: ['Muscles need faster oxygen delivery', 'Blood turns solid', 'Lungs stop moving'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Active muscles burn more glucose + O₂.'] },
          whyItHappens: { en: 'Higher cardiac output increases O₂ supply and CO₂ removal.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch12',
      chapterNumber: 12,
      title: { en: 'How Nature Works in Harmony', hi: 'प्रकृति में सामंजस्य और पारिस्थितिकी', kn: 'ಪ್ರಕೃತಿಯ ಸಾಮರಸ್ಯ ಮತ್ತು ಪರಿಸರ ವ್ಯವಸ್ಥೆ' },
      primarySubject: 'biology',
      topicTag: { en: 'Ecosystems & Food Webs', hi: 'पारिस्थितिकी तंत्र', kn: 'ಪರಿಸರ ವ್ಯವಸ್ಥೆ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Producers, consumers, and decomposers form interconnected food webs recycling matter and flowing solar energy.' },
      topics: [
        {
          id: 'c8-ch12-t1',
          title: { en: 'Food Webs & Decomposers' },
          subtopics: { en: ['Trophic levels', '10% energy transfer', 'Soil decomposers'] },
          explanation: { en: 'Only ~10% of energy passes from one trophic level to the next; bacteria and fungi return minerals to soil.' },
        },
      ],
      definitions: [
        { id: 'c8-ch12-d1', term: { en: 'Decomposer' }, definition: { en: 'Bacteria and fungi that break down dead organic matter back into simple soil nutrients.' } },
      ],
      keyConcepts: { en: ['Removing a single predator or pollinator ripples across the entire food web.'] },
      diagramKind: 'ecosystem-web',
      diagramCaption: { en: 'Ecological energy pyramid illustrating 10% energy transfer per trophic level.' },
      biologyProcesses: [
        {
          id: 'c8-ch12-bp1',
          title: { en: 'Composting Nutrient Cycle' },
          steps: { en: ['Fallen leaves enter damp soil.', 'Fungi & bacteria digest cellulose into humus.', 'Plant roots re-absorb nitrates and minerals.'] },
        },
      ],
      realLifeApplications: { en: ['Farm bund vegetation supports predatory birds and bees that boost crop yield naturally.'] },
      revisionNotes: { en: ['Sun is the primary energy source of almost every land ecosystem.'] },
      chapterQuestions: [
        {
          id: 'c8-ch12-q1',
          type: 'short',
          question: { en: 'What would happen to forest soil if all decomposers disappeared?' },
          answer: { en: 'Dead leaves and wastes would pile up while soil nutrients became depleted, starving new plant growth.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch12-m1',
          question: { en: 'Which organism sits at the base (first trophic level) of a grassland food chain?' },
          options: { en: ['Eagle', 'Frog', 'Green grass (Producer)', 'Earthworm'] },
          correctIndex: 2,
          explanation: { en: 'Green plants capture solar energy directly by photosynthesis.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch12-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'biology',
          title: { en: 'Schoolyard Quadrat Biodiversity Survey' },
          objective: { en: 'Document producers, insects, and soil decomposers inside a 1 m² outdoor square.' },
          materials: { en: ['4 sticks + string (1 m × 1 m)', 'Notebook & pencil'] },
          scientificPrinciple: { en: 'Microhabitats sustain balanced food chains even inside small green patches.' },
          steps: {
            en: [
              'Lay string square gently on a garden or tree-base patch.',
              'Count distinct plant species, insects, and fungi without disturbing nests.',
            ],
          },
          observationTable: {
            columns: { en: ['Role', 'Examples Observed', 'Count'] },
            sampleRows: [['Producers', 'Grass, clover, neem', '4 species'], ['Consumers', 'Ants, butterflies', '9'], ['Decomposers', 'Mushroom/damp humus', 'Present']],
          },
          expectedResult: { en: 'Plants vastly outnumber predators in biomass and numbers.' },
          conclusion: { en: 'Producers support every higher consumer level.' },
          safetyNote: { en: 'Observe insects without touching unknown spiders or caterpillars.' },
          predictionQuestion: { en: 'Which group will have the highest count in your square?' },
          predictionOptions: { en: ['Green plants (Producers)', 'Large carnivores', 'Eagles'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Energy narrows upward along food pyramids.'] },
          whyItHappens: { en: '10% energy efficiency supports far more producer biomass than consumers.' },
        },
      ],
    }),

    buildChapter({
      id: 'curiosity-ch13',
      chapterNumber: 13,
      title: { en: 'Our Home: Earth, A Unique Life-Sustaining Planet', hi: 'हमारा घर: पृथ्वी', kn: 'ನಮ್ಮ ಮನೆ: ಭೂಮಿ' },
      primarySubject: 'biology',
      topicTag: { en: 'Biosphere & Climate', hi: 'जीवमंडल और जलवायु', kn: 'ಜೀವಗೋಳ ಮತ್ತು ಹವಾಮಾನ' },
      textbookName: BOOK,
      board: 'cbse',
      classLevel: 8,
      session: '2025-26',
      conceptSummary: { en: 'Liquid water, protective ozone, and balanced greenhouse gases keep Earth habitable; stomata regulate leaf water and gas exchange.' },
      topics: [
        {
          id: 'c8-ch13-t1',
          title: { en: 'Goldilocks Zone, Ozone & Plant Transpiration' },
          subtopics: { en: ['Greenhouse balance', 'Stomatal gas exchange', 'Water conservation'] },
          explanation: { en: 'Earth’s orbital distance and atmosphere keep average temperature around +15°C for liquid water.' },
        },
      ],
      definitions: [
        { id: 'c8-ch13-d1', term: { en: 'Greenhouse Effect' }, definition: { en: 'Natural warming caused when atmospheric gases like CO₂ and water vapour trap outgoing infrared heat.' } },
      ],
      keyConcepts: { en: ['Without any greenhouse gases, Earth’s surface would freeze around −18°C.'] },
      diagramKind: 'photosynthesis-stomata',
      diagramCaption: { en: 'Guard cells regulate CO₂ uptake and water vapour transpiration.' },
      biologyProcesses: [
        {
          id: 'c8-ch13-bp1',
          title: { en: 'Photosynthetic Carbon Sink' },
          steps: { en: ['Leaves absorb CO₂ via stomata.', 'Chlorophyll captures sunlight to convert CO₂ + H₂O into glucose.', 'Oxygen is released back to the atmosphere.'] },
        },
      ],
      realLifeApplications: { en: ['Rainwater harvesting, rooftop solar panels, and native tree belts cool rural towns.'] },
      revisionNotes: { en: ['Stratospheric ozone (O₃) blocks harmful ultraviolet UV-B radiation.'] },
      chapterQuestions: [
        {
          id: 'c8-ch13-q1',
          type: 'short',
          question: { en: 'Why is ozone helpful in the upper atmosphere yet harmful near street level?' },
          answer: { en: 'High in the stratosphere ozone blocks UV radiation, while at ground level it irritates lungs as smog.' },
        },
      ],
      mcqs: [
        {
          id: 'c8-ch13-m1',
          question: { en: 'Which gas absorbs outgoing infrared heat to maintain Earth’s warmth?' },
          options: { en: ['Argon', 'Carbon dioxide (CO₂)', 'Neon', 'Helium'] },
          correctIndex: 1,
          explanation: { en: 'CO₂ and water vapour are Earth’s primary greenhouse gases.' },
        },
      ],
      experiments: [
        {
          id: 'c8-ch13-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          linkedSupportingWorld: 'biology',
          title: { en: 'Leaf Bag Transpiration Water Test' },
          objective: { en: 'Observe water vapour transpired through living plant leaves.' },
          materials: { en: ['Potted sunlit plant', 'Clear polythene bag', 'Rubber band'] },
          scientificPrinciple: { en: 'Open leaf stomata release water vapour during daytime photosynthesis.' },
          steps: {
            en: [
              'Enclose one leafy twig gently in a clear dry bag and tie loosely.',
              'Leave in morning sunlight for 90 minutes and inspect inner bag walls.',
            ],
          },
          observationTable: {
            columns: { en: ['Condition', 'Droplets Inside Bag'] },
            sampleRows: [['Leafy twig in sunlight', 'Fine water droplets visible'], ['Empty sealed bag in sunlight', 'Dry']],
          },
          expectedResult: { en: 'Mist and water droplets condense inside the leafy bag.' },
          conclusion: { en: 'Plants actively transpire water vapour through stomata.' },
          safetyNote: { en: 'Remove the bag right after 90 minutes so the leaves do not overheat.' },
          predictionQuestion: { en: 'Where did the water droplets inside the bag come from?' },
          predictionOptions: { en: ['Transpiration from leaf stomata', 'Melted plastic', 'Soil ants'] },
          predictionCorrectIndex: 0,
          hints: { en: ['The control empty bag remains dry.'] },
          whyItHappens: { en: 'Water pulled up from roots exits as vapour through microscopic leaf stomata.' },
        },
      ],
    }),
  ],
};
