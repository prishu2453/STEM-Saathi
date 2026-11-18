import { buildChapter } from './meta';
import { CBSE_XI_PART_A } from './cbsePhysicsXIa';
import { CBSE_XI_PART_B } from './cbsePhysicsXIb';
import { CBSE_XII_PHYSICS } from './cbsePhysicsXII';
import type { RichChapterData } from './types';

/**
 * Extra CBSE Physics chapters (titles follow the NCERT books). Hindi and Kannada text should be
 * reviewed by a native-speaker teacher before classroom use; English is the reference text.
 */
const base9 = { board: 'cbse' as const, classLevel: 9 as const, session: '2025-26' as const, primarySubject: 'physics' as const, textbookName: 'NCERT Class 9 Science' };
const base10 = { board: 'cbse' as const, classLevel: 10 as const, session: '2025-26' as const, primarySubject: 'physics' as const, textbookName: 'NCERT Class 10 Science' };

export const CBSE_EXTRA_PHYSICS: Record<string, RichChapterData[]> = {
  'cbse-c9-2025-26': [
    buildChapter({
      ...base9,
      id: 'cbse9-phy-force',
      chapterNumber: 8,
      title: { en: 'Force and Laws of Motion', hi: 'बल तथा गति के नियम', kn: 'ಬಲ ಮತ್ತು ಚಲನೆಯ ನಿಯಮಗಳು' },
      topicTag: { en: "Newton's laws", hi: 'न्यूटन के नियम', kn: 'ನ್ಯೂಟನ್ ನಿಯಮಗಳು' },
      conceptSummary: {
        en: 'A force can change the speed or direction of an object. Newton’s three laws explain inertia, how force and acceleration are related (F = ma), and why every action has an equal and opposite reaction.',
        hi: 'बल किसी वस्तु की चाल या दिशा बदल सकता है। न्यूटन के तीन नियम जड़त्व, बल और त्वरण के संबंध (F = ma) तथा प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया को समझाते हैं।',
        kn: 'ಬಲವು ವಸ್ತುವಿನ ವೇಗ ಅಥವಾ ದಿಕ್ಕನ್ನು ಬದಲಾಯಿಸಬಲ್ಲದು. ನ್ಯೂಟನ್‌ನ ಮೂರು ನಿಯಮಗಳು ಜಡತ್ವ, ಬಲ ಮತ್ತು ವೇಗೋತ್ಕರ್ಷದ ಸಂಬಂಧ (F = ma) ಹಾಗೂ ಪ್ರತಿ ಕ್ರಿಯೆಗೂ ಸಮಾನ ಮತ್ತು ವಿರುದ್ಧ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ವಿವರಿಸುತ್ತವೆ.',
      },
      topics: [
        {
          id: 'cbse9-phy-force-t1',
          title: { en: 'Three laws of motion', hi: 'गति के तीन नियम', kn: 'ಚಲನೆಯ ಮೂರು ನಿಯಮಗಳು' },
          subtopics: {
            en: ['First law: an object stays at rest or in uniform motion unless a net force acts (inertia)', 'Second law: F = ma, and force is the rate of change of momentum', 'Third law: to every action there is an equal and opposite reaction'],
            hi: ['पहला नियम: बाह्य बल न लगे तो वस्तु विराम या एकसमान गति में रहती है (जड़त्व)', 'दूसरा नियम: F = ma; बल संवेग परिवर्तन की दर है', 'तीसरा नियम: प्रत्येक क्रिया की समान और विपरीत प्रतिक्रिया होती है'],
            kn: ['ಮೊದಲ ನಿಯಮ: ಬಾಹ್ಯ ಬಲ ಇಲ್ಲದಿದ್ದರೆ ವಸ್ತು ನಿಶ್ಚಲ ಅಥವಾ ಸಮಗತಿಯಲ್ಲಿರುತ್ತದೆ (ಜಡತ್ವ)', 'ಎರಡನೇ ನಿಯಮ: F = ma; ಬಲವು ಸಂವೇಗ ಬದಲಾವಣೆಯ ದರ', 'ಮೂರನೇ ನಿಯಮ: ಪ್ರತಿ ಕ್ರಿಯೆಗೂ ಸಮಾನ ಮತ್ತು ವಿರುದ್ಧ ಪ್ರತಿಕ್ರಿಯೆ ಇರುತ್ತದೆ'],
          },
          explanation: {
            en: 'A heavier object is harder to start or stop because it has more inertia. The same push gives a light cart a large acceleration and a heavy cart a small one.',
            hi: 'भारी वस्तु को चलाना या रोकना कठिन होता है क्योंकि उसका जड़त्व अधिक होता है। समान धक्के से हल्की गाड़ी का त्वरण अधिक और भारी गाड़ी का कम होता है।',
            kn: 'ಭಾರವಾದ ವಸ್ತುವನ್ನು ಚಲಿಸಲು ಅಥವಾ ನಿಲ್ಲಿಸಲು ಕಷ್ಟ, ಏಕೆಂದರೆ ಅದರ ಜಡತ್ವ ಹೆಚ್ಚು. ಒಂದೇ ತಳ್ಳುವಿಕೆ ಹಗುರ ಗಾಡಿಗೆ ಹೆಚ್ಚು ಮತ್ತು ಭಾರದ ಗಾಡಿಗೆ ಕಡಿಮೆ ವೇಗೋತ್ಕರ್ಷ ನೀಡುತ್ತದೆ.',
          },
        },
      ],
      definitions: [
        { id: 'cbse9-phy-force-d1', term: { en: 'Inertia', hi: 'जड़त्व', kn: 'ಜಡತ್ವ' }, definition: { en: 'The tendency of an object to resist any change in its state of rest or motion. Mass is the measure of inertia.', hi: 'वस्तु की अपनी विराम या गति की अवस्था में परिवर्तन का विरोध करने की प्रवृत्ति। द्रव्यमान जड़त्व का माप है।', kn: 'ವಸ್ತುವು ತನ್ನ ನಿಶ್ಚಲ ಅಥವಾ ಚಲನೆಯ ಸ್ಥಿತಿಯ ಬದಲಾವಣೆಯನ್ನು ವಿರೋಧಿಸುವ ಗುಣ. ದ್ರವ್ಯರಾಶಿ ಜಡತ್ವದ ಅಳತೆ.' } },
        { id: 'cbse9-phy-force-d2', term: { en: 'Momentum (p)', hi: 'संवेग (p)', kn: 'ಸಂವೇಗ (p)' }, definition: { en: 'Product of mass and velocity, p = mv. Unit: kg·m/s.', hi: 'द्रव्यमान और वेग का गुणनफल, p = mv। मात्रक: kg·m/s।', kn: 'ದ್ರವ್ಯರಾಶಿ ಮತ್ತು ವೇಗದ ಗುಣಲಬ್ಧ, p = mv. ಏಕಮಾನ: kg·m/s.' } },
      ],
      keyConcepts: {
        en: ['Unit of force is the newton: 1 N = 1 kg·m/s².', 'Action and reaction act on different objects, so they do not cancel.', 'Friction is a force that opposes motion.'],
        hi: ['बल का मात्रक न्यूटन है: 1 N = 1 kg·m/s²।', 'क्रिया और प्रतिक्रिया अलग-अलग वस्तुओं पर लगती हैं, इसलिए वे एक-दूसरे को निरस्त नहीं करतीं।', 'घर्षण गति का विरोध करने वाला बल है।'],
        kn: ['ಬಲದ ಏಕಮಾನ ನ್ಯೂಟನ್: 1 N = 1 kg·m/s².', 'ಕ್ರಿಯೆ ಮತ್ತು ಪ್ರತಿಕ್ರಿಯೆ ಬೇರೆ ಬೇರೆ ವಸ್ತುಗಳ ಮೇಲೆ ಕೆಲಸ ಮಾಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಅವು ಪರಸ್ಪರ ರದ್ದಾಗುವುದಿಲ್ಲ.', 'ಘರ್ಷಣೆ ಚಲನೆಯನ್ನು ವಿರೋಧಿಸುವ ಬಲ.'],
      },
      diagramKind: 'force-friction',
      diagramCaption: { en: 'Applied force against friction on a block.', hi: 'ब्लॉक पर लगाया गया बल और घर्षण।', kn: 'ಬ್ಲಾಕ್ ಮೇಲೆ ಹಾಕಿದ ಬಲ ಮತ್ತು ಘರ್ಷಣೆ.' },
      formulas: [
        { id: 'cbse9-phy-force-f1', name: { en: "Newton's second law", hi: 'न्यूटन का दूसरा नियम', kn: 'ನ್ಯೂಟನ್ ಎರಡನೇ ನಿಯಮ' }, formula: 'F = m × a', variables: { en: 'F = net force (N), m = mass (kg), a = acceleration (m/s²)', hi: 'F = कुल बल (N), m = द्रव्यमान (kg), a = त्वरण (m/s²)', kn: 'F = ಒಟ್ಟು ಬಲ (N), m = ದ್ರವ್ಯರಾಶಿ (kg), a = ವೇಗೋತ್ಕರ್ಷ (m/s²)' }, unit: 'N' },
        { id: 'cbse9-phy-force-f2', name: { en: 'Momentum', hi: 'संवेग', kn: 'ಸಂವೇಗ' }, formula: 'p = m × v', variables: { en: 'm = mass (kg), v = velocity (m/s)', hi: 'm = द्रव्यमान (kg), v = वेग (m/s)', kn: 'm = ದ್ರವ್ಯರಾಶಿ (kg), v = ವೇಗ (m/s)' }, unit: 'kg·m/s' },
      ],
      solvedNumericals: [
        { id: 'cbse9-phy-force-n1', problem: { en: 'What force gives a 5 kg trolley an acceleration of 2 m/s²?', hi: '5 kg की ट्रॉली को 2 m/s² का त्वरण देने के लिए कितना बल चाहिए?', kn: '5 kg ಟ್ರಾಲಿಗೆ 2 m/s² ವೇಗೋತ್ಕರ್ಷ ನೀಡಲು ಎಷ್ಟು ಬಲ ಬೇಕು?' }, given: ['m = 5 kg', 'a = 2 m/s²'], formulaUsed: 'F = m × a', solutionSteps: ['F = 5 × 2', 'F = 10 N'], finalAnswer: 'F = 10 N' },
      ],
      realLifeApplications: {
        en: ['Seat belts protect passengers because of inertia.', 'A rocket moves forward because it pushes hot gas backward (third law).'],
        hi: ['जड़त्व के कारण सीट बेल्ट यात्रियों की रक्षा करती है।', 'रॉकेट गर्म गैस को पीछे धकेलता है, इसलिए आगे बढ़ता है (तीसरा नियम)।'],
        kn: ['ಜಡತ್ವದಿಂದಾಗಿ ಸೀಟ್ ಬೆಲ್ಟ್ ಪ್ರಯಾಣಿಕರನ್ನು ರಕ್ಷಿಸುತ್ತದೆ.', 'ರಾಕೆಟ್ ಬಿಸಿ ಅನಿಲವನ್ನು ಹಿಂದಕ್ಕೆ ತಳ್ಳುವುದರಿಂದ ಮುಂದೆ ಹೋಗುತ್ತದೆ (ಮೂರನೇ ನಿಯಮ).'],
      },
      revisionNotes: {
        en: ['F = ma; 1 N = 1 kg·m/s².', 'More mass means more inertia.', 'Action and reaction are equal, opposite and on different bodies.'],
        hi: ['F = ma; 1 N = 1 kg·m/s²।', 'अधिक द्रव्यमान यानी अधिक जड़त्व।', 'क्रिया-प्रतिक्रिया समान, विपरीत और अलग-अलग वस्तुओं पर होती हैं।'],
        kn: ['F = ma; 1 N = 1 kg·m/s².', 'ಹೆಚ್ಚು ದ್ರವ್ಯರಾಶಿ ಎಂದರೆ ಹೆಚ್ಚು ಜಡತ್ವ.', 'ಕ್ರಿಯೆ-ಪ್ರತಿಕ್ರಿಯೆ ಸಮಾನ, ವಿರುದ್ಧ ಮತ್ತು ಬೇರೆ ಬೇರೆ ವಸ್ತುಗಳ ಮೇಲೆ.'],
      },
      chapterQuestions: [
        { id: 'cbse9-phy-force-q1', type: 'short', question: { en: 'Why does a passenger lean forward when a moving bus brakes suddenly?', hi: 'चलती बस के अचानक रुकने पर यात्री आगे की ओर क्यों झुकता है?', kn: 'ಚಲಿಸುತ್ತಿರುವ ಬಸ್ ಹಠಾತ್ ನಿಂತಾಗ ಪ್ರಯಾಣಿಕ ಮುಂದೆ ಏಕೆ ಬಾಗುತ್ತಾನೆ?' }, answer: { en: 'The body wants to keep moving forward because of inertia, while the bus stops.', hi: 'जड़त्व के कारण शरीर आगे बढ़ते रहना चाहता है जबकि बस रुक जाती है।', kn: 'ಜಡತ್ವದಿಂದ ದೇಹ ಮುಂದೆ ಚಲಿಸುತ್ತಲೇ ಇರಲು ಬಯಸುತ್ತದೆ, ಆದರೆ ಬಸ್ ನಿಲ್ಲುತ್ತದೆ.' } },
      ],
      mcqs: [
        { id: 'cbse9-phy-force-m1', question: { en: 'The SI unit of force is:', hi: 'बल का SI मात्रक है:', kn: 'ಬಲದ SI ಏಕಮಾನ:' }, options: { en: ['joule', 'newton', 'watt', 'pascal'], hi: ['जूल', 'न्यूटन', 'वाट', 'पास्कल'], kn: ['ಜೂಲ್', 'ನ್ಯೂಟನ್', 'ವ್ಯಾಟ್', 'ಪಾಸ್ಕಲ್'] }, correctIndex: 1, explanation: { en: '1 newton = 1 kg·m/s².', hi: '1 न्यूटन = 1 kg·m/s²।', kn: '1 ನ್ಯೂಟನ್ = 1 kg·m/s².' } },
      ],
      experiments: [
        {
          id: 'cbse9-phy-force-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          title: { en: 'Inertia: coin and card', hi: 'जड़त्व: सिक्का और कार्ड', kn: 'ಜಡತ್ವ: ನಾಣ್ಯ ಮತ್ತು ಕಾರ್ಡ್' },
          objective: { en: 'Show that an object at rest stays at rest when the support under it is removed quickly.', hi: 'दिखाना कि आधार को तेज़ी से हटाने पर विराम में रखी वस्तु विराम में ही रहती है।', kn: 'ಆಧಾರವನ್ನು ವೇಗವಾಗಿ ತೆಗೆದಾಗ ನಿಶ್ಚಲ ವಸ್ತು ನಿಶ್ಚಲವಾಗಿಯೇ ಇರುತ್ತದೆ ಎಂದು ತೋರಿಸುವುದು.' },
          materials: { en: ['A glass or cup', 'A stiff card (postcard)', 'A coin'], hi: ['एक गिलास', 'कड़ा कार्ड (पोस्टकार्ड)', 'एक सिक्का'], kn: ['ಒಂದು ಗ್ಲಾಸ್', 'ಗಟ್ಟಿ ಕಾರ್ಡ್ (ಪೋಸ್ಟ್‌ಕಾರ್ಡ್)', 'ಒಂದು ನಾಣ್ಯ'] },
          scientificPrinciple: { en: "Newton's first law (inertia).", hi: 'न्यूटन का पहला नियम (जड़त्व)।', kn: 'ನ್ಯೂಟನ್ ಮೊದಲ ನಿಯಮ (ಜಡತ್ವ).' },
          steps: {
            en: ['Place the card over the glass and the coin on the card, above the glass opening.', 'Flick the card sideways with a quick snap of your finger.', 'Watch the coin: it drops straight into the glass.'],
            hi: ['गिलास पर कार्ड रखें और कार्ड पर गिलास के मुँह के ऊपर सिक्का रखें।', 'उँगली से कार्ड को तेज़ झटके से किनारे की ओर मारें।', 'सिक्का देखें: वह सीधे गिलास में गिर जाता है।'],
            kn: ['ಗ್ಲಾಸ್ ಮೇಲೆ ಕಾರ್ಡ್ ಇಟ್ಟು, ಕಾರ್ಡ್ ಮೇಲೆ ಗ್ಲಾಸ್ ಬಾಯಿಯ ಮೇಲೆ ನಾಣ್ಯ ಇಡಿ.', 'ಬೆರಳಿನಿಂದ ಕಾರ್ಡ್ ಅನ್ನು ವೇಗವಾಗಿ ಪಕ್ಕಕ್ಕೆ ಚಿಟಿಕೆ ಹಾಕಿ.', 'ನಾಣ್ಯವನ್ನು ನೋಡಿ: ಅದು ನೇರವಾಗಿ ಗ್ಲಾಸ್‌ಗೆ ಬೀಳುತ್ತದೆ.'],
          },
          observationTable: { columns: { en: ['Flick speed', 'Coin falls in glass?'] }, sampleRows: [['Fast', 'Yes'], ['Slow', 'Often no — the card drags the coin']] },
          expectedResult: { en: 'With a fast flick the coin drops into the glass.', hi: 'तेज़ झटके पर सिक्का गिलास में गिरता है।', kn: 'ವೇಗದ ಚಿಟಿಕೆಯಲ್ಲಿ ನಾಣ್ಯ ಗ್ಲಾಸ್‌ಗೆ ಬೀಳುತ್ತದೆ.' },
          conclusion: { en: 'The coin resists change in its state of rest — this is inertia.', hi: 'सिक्का अपनी विराम अवस्था में परिवर्तन का विरोध करता है — यही जड़त्व है।', kn: 'ನಾಣ್ಯ ತನ್ನ ನಿಶ್ಚಲ ಸ್ಥಿತಿಯ ಬದಲಾವಣೆಯನ್ನು ವಿರೋಧಿಸುತ್ತದೆ — ಇದೇ ಜಡತ್ವ.' },
          safetyNote: { en: 'Use a plastic cup if possible and keep it away from the table edge.', hi: 'हो सके तो प्लास्टिक का गिलास लें और उसे मेज़ के किनारे से दूर रखें।', kn: 'ಸಾಧ್ಯವಾದರೆ ಪ್ಲಾಸ್ಟಿಕ್ ಲೋಟ ಬಳಸಿ, ಮೇಜಿನ ಅಂಚಿನಿಂದ ದೂರ ಇಡಿ.' },
          predictionQuestion: { en: 'If the card is pulled slowly, what happens to the coin?', hi: 'यदि कार्ड धीरे खींचा जाए तो सिक्के का क्या होगा?', kn: 'ಕಾರ್ಡ್ ಅನ್ನು ನಿಧಾನವಾಗಿ ಎಳೆದರೆ ನಾಣ್ಯಕ್ಕೆ ಏನಾಗುತ್ತದೆ?' },
          predictionOptions: { en: ['It drops in the glass', 'It moves with the card'], hi: ['गिलास में गिरता है', 'कार्ड के साथ चलता है'], kn: ['ಗ್ಲಾಸ್‌ಗೆ ಬೀಳುತ್ತದೆ', 'ಕಾರ್ಡ್ ಜೊತೆ ಚಲಿಸುತ್ತದೆ'] },
          predictionCorrectIndex: 1,
          hints: { en: ['Friction drags the coin along if the card moves slowly.'], hi: ['कार्ड धीमे चलने पर घर्षण सिक्के को साथ खींच लेता है।'], kn: ['ಕಾರ್ಡ್ ನಿಧಾನವಾದರೆ ಘರ್ಷಣೆ ನಾಣ್ಯವನ್ನು ಜೊತೆ ಎಳೆಯುತ್ತದೆ.'] },
          whyItHappens: { en: 'The card moves away too quickly for friction to give the coin sideways speed, so gravity pulls the coin straight down.', hi: 'कार्ड इतनी तेज़ी से हटता है कि घर्षण सिक्के को क्षैतिज चाल नहीं दे पाता, इसलिए गुरुत्व उसे सीधा नीचे खींचता है।', kn: 'ಕಾರ್ಡ್ ಎಷ್ಟು ವೇಗವಾಗಿ ಹೋಗುತ್ತದೆ ಎಂದರೆ ಘರ್ಷಣೆ ನಾಣ್ಯಕ್ಕೆ ಪಕ್ಕದ ವೇಗ ನೀಡಲಾಗುವುದಿಲ್ಲ; ಗುರುತ್ವ ಅದನ್ನು ನೇರ ಕೆಳಗೆ ಎಳೆಯುತ್ತದೆ.' },
        },
      ],
    }),

    buildChapter({
      ...base9,
      id: 'cbse9-phy-gravitation',
      chapterNumber: 9,
      title: { en: 'Gravitation', hi: 'गुरुत्वाकर्षण', kn: 'ಗುರುತ್ವಾಕರ್ಷಣೆ' },
      topicTag: { en: 'Gravity, g and weight', hi: 'गुरुत्व, g और भार', kn: 'ಗುರುತ್ವ, g ಮತ್ತು ತೂಕ' },
      conceptSummary: {
        en: 'Every object attracts every other object. Near Earth this pulls things down with acceleration g ≈ 9.8 m/s². Weight is the force of gravity on a mass, so it changes from planet to planet while mass does not.',
        hi: 'प्रत्येक वस्तु दूसरी वस्तु को आकर्षित करती है। पृथ्वी के पास यह वस्तुओं को g ≈ 9.8 m/s² के त्वरण से नीचे खींचता है। भार किसी द्रव्यमान पर गुरुत्व बल है, इसलिए ग्रह बदलने पर भार बदलता है पर द्रव्यमान नहीं।',
        kn: 'ಪ್ರತಿ ವಸ್ತುವೂ ಇತರ ವಸ್ತುವನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ. ಭೂಮಿಯ ಬಳಿ ಇದು ವಸ್ತುಗಳನ್ನು g ≈ 9.8 m/s² ವೇಗೋತ್ಕರ್ಷದಿಂದ ಕೆಳಗೆ ಎಳೆಯುತ್ತದೆ. ತೂಕ ಎಂದರೆ ದ್ರವ್ಯರಾಶಿಯ ಮೇಲಿನ ಗುರುತ್ವ ಬಲ; ಆದ್ದರಿಂದ ಗ್ರಹ ಬದಲಾದರೆ ತೂಕ ಬದಲಾಗುತ್ತದೆ, ದ್ರವ್ಯರಾಶಿ ಅಲ್ಲ.',
      },
      topics: [
        {
          id: 'cbse9-phy-grav-t1',
          title: { en: 'Universal law of gravitation and free fall', hi: 'सार्वत्रिक गुरुत्वाकर्षण नियम और मुक्त पतन', kn: 'ಸಾರ್ವತ್ರಿಕ ಗುರುತ್ವ ನಿಯಮ ಮತ್ತು ಮುಕ್ತ ಪತನ' },
          subtopics: {
            en: ['F = G m₁ m₂ / r²', 'Acceleration due to gravity g = GM/R²', 'Mass vs weight', 'Free fall: all objects fall with the same g if air resistance is ignored'],
            hi: ['F = G m₁ m₂ / r²', 'गुरुत्वीय त्वरण g = GM/R²', 'द्रव्यमान और भार में अंतर', 'मुक्त पतन: वायु-प्रतिरोध न हो तो सभी वस्तुएँ समान g से गिरती हैं'],
            kn: ['F = G m₁ m₂ / r²', 'ಗುರುತ್ವ ವೇಗೋತ್ಕರ್ಷ g = GM/R²', 'ದ್ರವ್ಯರಾಶಿ ಮತ್ತು ತೂಕದ ವ್ಯತ್ಯಾಸ', 'ಮುಕ್ತ ಪತನ: ಗಾಳಿ ಪ್ರತಿರೋಧ ಇಲ್ಲದಿದ್ದರೆ ಎಲ್ಲ ವಸ್ತುಗಳೂ ಒಂದೇ g ನಲ್ಲಿ ಬೀಳುತ್ತವೆ'],
          },
          explanation: {
            en: 'The Moon is smaller and lighter than Earth, so its g is about 1.6 m/s², roughly one-sixth of Earth’s.',
            hi: 'चंद्रमा पृथ्वी से छोटा और हल्का है, इसलिए उसका g लगभग 1.6 m/s² है, जो पृथ्वी का लगभग छठा भाग है।',
            kn: 'ಚಂದ್ರ ಭೂಮಿಗಿಂತ ಚಿಕ್ಕದು ಮತ್ತು ಹಗುರ, ಆದ್ದರಿಂದ ಅದರ g ಸುಮಾರು 1.6 m/s², ಭೂಮಿಯ ಸುಮಾರು ಆರನೇ ಒಂದು ಭಾಗ.',
          },
        },
      ],
      definitions: [
        { id: 'cbse9-phy-grav-d1', term: { en: 'Weight', hi: 'भार', kn: 'ತೂಕ' }, definition: { en: 'The force with which the Earth (or another body) attracts a mass: W = m g. Unit: newton.', hi: 'वह बल जिससे पृथ्वी (या अन्य पिंड) किसी द्रव्यमान को आकर्षित करती है: W = m g। मात्रक: न्यूटन।', kn: 'ಭೂಮಿ (ಅಥವಾ ಬೇರೆ ಕಾಯ) ದ್ರವ್ಯರಾಶಿಯನ್ನು ಆಕರ್ಷಿಸುವ ಬಲ: W = m g. ಏಕಮಾನ: ನ್ಯೂಟನ್.' } },
      ],
      keyConcepts: {
        en: ['Mass is constant everywhere; weight depends on g.', 'G = 6.67 × 10⁻¹¹ N·m²/kg².', 'g ≈ 9.8 m/s² on Earth and ≈ 1.6 m/s² on the Moon.'],
        hi: ['द्रव्यमान हर जगह समान रहता है; भार g पर निर्भर करता है।', 'G = 6.67 × 10⁻¹¹ N·m²/kg²।', 'पृथ्वी पर g ≈ 9.8 m/s² और चंद्रमा पर ≈ 1.6 m/s²।'],
        kn: ['ದ್ರವ್ಯರಾಶಿ ಎಲ್ಲೆಡೆ ಒಂದೇ; ತೂಕ g ಮೇಲೆ ಅವಲಂಬಿತ.', 'G = 6.67 × 10⁻¹¹ N·m²/kg².', 'ಭೂಮಿಯಲ್ಲಿ g ≈ 9.8 m/s², ಚಂದ್ರನಲ್ಲಿ ≈ 1.6 m/s².'],
      },
      diagramKind: 'projectile-motion',
      diagramCaption: { en: 'Path of a thrown ball under gravity.', hi: 'गुरुत्व के अधीन फेंकी गई गेंद का पथ।', kn: 'ಗುರುತ್ವದ ಅಡಿಯಲ್ಲಿ ಎಸೆದ ಚೆಂಡಿನ ಮಾರ್ಗ.' },
      formulas: [
        { id: 'cbse9-phy-grav-f1', name: { en: 'Universal law of gravitation', hi: 'सार्वत्रिक गुरुत्वाकर्षण नियम', kn: 'ಸಾರ್ವತ್ರಿಕ ಗುರುತ್ವ ನಿಯಮ' }, formula: 'F = G m₁ m₂ / r²', variables: { en: 'm₁, m₂ = masses, r = distance between centres, G = gravitational constant', hi: 'm₁, m₂ = द्रव्यमान, r = केंद्रों के बीच दूरी, G = गुरुत्वीय स्थिरांक', kn: 'm₁, m₂ = ದ್ರವ್ಯರಾಶಿಗಳು, r = ಕೇಂದ್ರಗಳ ನಡುವಿನ ದೂರ, G = ಗುರುತ್ವ ಸ್ಥಿರಾಂಕ' }, unit: 'N' },
        { id: 'cbse9-phy-grav-f2', name: { en: 'Weight', hi: 'भार', kn: 'ತೂಕ' }, formula: 'W = m × g', variables: { en: 'm = mass (kg), g = acceleration due to gravity (m/s²)', hi: 'm = द्रव्यमान (kg), g = गुरुत्वीय त्वरण (m/s²)', kn: 'm = ದ್ರವ್ಯರಾಶಿ (kg), g = ಗುರುತ್ವ ವೇಗೋತ್ಕರ್ಷ (m/s²)' }, unit: 'N' },
      ],
      solvedNumericals: [
        { id: 'cbse9-phy-grav-n1', problem: { en: 'A student has mass 50 kg. Find the weight on Earth (g = 9.8 m/s²) and on the Moon (g = 1.6 m/s²).', hi: 'एक छात्र का द्रव्यमान 50 kg है। पृथ्वी (g = 9.8) और चंद्रमा (g = 1.6) पर भार ज्ञात करें।', kn: 'ವಿದ್ಯಾರ್ಥಿಯ ದ್ರವ್ಯರಾಶಿ 50 kg. ಭೂಮಿ (g = 9.8) ಮತ್ತು ಚಂದ್ರ (g = 1.6) ಮೇಲೆ ತೂಕ ಕಂಡುಹಿಡಿಯಿರಿ.' }, given: ['m = 50 kg', 'g_Earth = 9.8 m/s²', 'g_Moon = 1.6 m/s²'], formulaUsed: 'W = m g', solutionSteps: ['W_Earth = 50 × 9.8 = 490 N', 'W_Moon = 50 × 1.6 = 80 N'], finalAnswer: '490 N on Earth, 80 N on the Moon (mass stays 50 kg)' },
      ],
      realLifeApplications: {
        en: ['Satellites and the Moon stay in orbit because of gravity.', 'Tides are caused by the Moon’s gravity.'],
        hi: ['गुरुत्व के कारण उपग्रह और चंद्रमा कक्षा में रहते हैं।', 'ज्वार-भाटा चंद्रमा के गुरुत्व से होता है।'],
        kn: ['ಗುರುತ್ವದಿಂದಾಗಿ ಉಪಗ್ರಹಗಳು ಮತ್ತು ಚಂದ್ರ ಕಕ್ಷೆಯಲ್ಲಿರುತ್ತವೆ.', 'ಉಬ್ಬರವಿಳಿತಗಳು ಚಂದ್ರನ ಗುರುತ್ವದಿಂದ ಆಗುತ್ತವೆ.'],
      },
      revisionNotes: {
        en: ['W = mg; weight changes with place, mass does not.', 'Doubling the distance makes the gravitational force four times smaller.'],
        hi: ['W = mg; स्थान बदलने पर भार बदलता है, द्रव्यमान नहीं।', 'दूरी दोगुनी करने पर गुरुत्व बल चार गुना कम हो जाता है।'],
        kn: ['W = mg; ಸ್ಥಳ ಬದಲಾದರೆ ತೂಕ ಬದಲಾಗುತ್ತದೆ, ದ್ರವ್ಯರಾಶಿ ಅಲ್ಲ.', 'ದೂರ ಎರಡು ಪಟ್ಟಾದರೆ ಗುರುತ್ವ ಬಲ ನಾಲ್ಕು ಪಟ್ಟು ಕಡಿಮೆ.'],
      },
      chapterQuestions: [
        { id: 'cbse9-phy-grav-q1', type: 'short', question: { en: 'Does the mass of an astronaut change on the Moon? Does the weight?', hi: 'क्या चंद्रमा पर अंतरिक्ष यात्री का द्रव्यमान बदलता है? और भार?', kn: 'ಚಂದ್ರನ ಮೇಲೆ ಗಗನಯಾತ್ರಿಯ ದ್ರವ್ಯರಾಶಿ ಬದಲಾಗುತ್ತದೆಯೇ? ತೂಕ?' }, answer: { en: 'Mass stays the same. Weight becomes about one-sixth because g is smaller.', hi: 'द्रव्यमान वही रहता है। भार लगभग छठा भाग हो जाता है क्योंकि g कम है।', kn: 'ದ್ರವ್ಯರಾಶಿ ಅದೇ. g ಕಡಿಮೆ ಇರುವುದರಿಂದ ತೂಕ ಸುಮಾರು ಆರನೇ ಒಂದು ಭಾಗವಾಗುತ್ತದೆ.' } },
      ],
      mcqs: [
        { id: 'cbse9-phy-grav-m1', question: { en: 'If the distance between two masses is doubled, the gravitational force becomes:', hi: 'दो द्रव्यमानों के बीच दूरी दोगुनी करने पर गुरुत्व बल हो जाता है:', kn: 'ಎರಡು ದ್ರವ್ಯರಾಶಿಗಳ ನಡುವಿನ ದೂರ ಎರಡು ಪಟ್ಟಾದರೆ ಗುರುತ್ವ ಬಲ:' }, options: { en: ['half', 'one-fourth', 'double', 'four times'], hi: ['आधा', 'एक-चौथाई', 'दोगुना', 'चार गुना'], kn: ['ಅರ್ಧ', 'ಕಾಲುಭಾಗ', 'ಎರಡು ಪಟ್ಟು', 'ನಾಲ್ಕು ಪಟ್ಟು'] }, correctIndex: 1, explanation: { en: 'F ∝ 1/r², so doubling r gives F/4.', hi: 'F ∝ 1/r², इसलिए r दोगुना होने पर F/4।', kn: 'F ∝ 1/r², ಆದ್ದರಿಂದ r ಎರಡು ಪಟ್ಟಾದರೆ F/4.' } },
      ],
      experiments: [
        {
          id: 'cbse9-phy-grav-exp1',
          relationType: 'in-chapter',
          activityMode: 'virtual-sim',
          linkedSimExperiment: 'mechanics',
          title: { en: 'Throw a ball on Earth and on the Moon', hi: 'पृथ्वी और चंद्रमा पर गेंद फेंकना', kn: 'ಭೂಮಿ ಮತ್ತು ಚಂದ್ರನ ಮೇಲೆ ಚೆಂಡು ಎಸೆಯುವುದು' },
          objective: { en: 'See how the pull of gravity (g) changes how high and how far a ball travels.', hi: 'देखना कि गुरुत्वीय त्वरण (g) बदलने पर गेंद कितनी ऊँचाई और दूरी तक जाती है।', kn: 'ಗುರುತ್ವ (g) ಬದಲಾದಾಗ ಚೆಂಡು ಎಷ್ಟು ಎತ್ತರ ಮತ್ತು ದೂರ ಹೋಗುತ್ತದೆ ಎಂದು ನೋಡುವುದು.' },
          materials: { en: ['This simulation (no equipment needed)'], hi: ['यह सिमुलेशन (किसी उपकरण की आवश्यकता नहीं)'], kn: ['ಈ ಸಿಮ್ಯುಲೇಶನ್ (ಯಾವುದೇ ಉಪಕರಣ ಬೇಡ)'] },
          scientificPrinciple: { en: 'Gravity gives every falling object the acceleration g.', hi: 'गुरुत्व प्रत्येक गिरती वस्तु को त्वरण g देता है।', kn: 'ಗುರುತ್ವ ಪ್ರತಿ ಬೀಳುವ ವಸ್ತುವಿಗೆ ವೇಗೋತ್ಕರ್ಷ g ನೀಡುತ್ತದೆ.' },
          steps: {
            en: ['Load the simulation below. Set speed 20 m/s and angle 45°.', 'Set gravity to 9.8 (Earth) and note the range and maximum height.', 'Set gravity to 1.6 (Moon) and note the new range and height.'],
            hi: ['नीचे सिमुलेशन खोलें। चाल 20 m/s और कोण 45° रखें।', 'g = 9.8 (पृथ्वी) रखकर परास और अधिकतम ऊँचाई नोट करें।', 'g = 1.6 (चंद्रमा) रखकर नई परास और ऊँचाई नोट करें।'],
            kn: ['ಕೆಳಗಿನ ಸಿಮ್ಯುಲೇಶನ್ ತೆರೆಯಿರಿ. ವೇಗ 20 m/s ಮತ್ತು ಕೋನ 45° ಇಡಿ.', 'g = 9.8 (ಭೂಮಿ) ಇಟ್ಟು ವ್ಯಾಪ್ತಿ ಮತ್ತು ಗರಿಷ್ಠ ಎತ್ತರ ಬರೆಯಿರಿ.', 'g = 1.6 (ಚಂದ್ರ) ಇಟ್ಟು ಹೊಸ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಎತ್ತರ ಬರೆಯಿರಿ.'],
          },
          observationTable: { columns: { en: ['g (m/s²)', 'Range (m)', 'Max height (m)'] }, sampleRows: [['9.8', '40.8', '10.2'], ['1.6', '250', '62.5']] },
          expectedResult: { en: 'With about one-sixth of g, the ball goes about six times higher and farther.', hi: 'g के लगभग छठे भाग पर गेंद लगभग छह गुना ऊँची और दूर जाती है।', kn: 'g ಯ ಸುಮಾರು ಆರನೇ ಒಂದು ಭಾಗದಲ್ಲಿ ಚೆಂಡು ಸುಮಾರು ಆರು ಪಟ್ಟು ಎತ್ತರ ಮತ್ತು ದೂರ ಹೋಗುತ್ತದೆ.' },
          conclusion: { en: 'Smaller g means the ball is pulled down more slowly, so it stays in the air longer.', hi: 'कम g का अर्थ है गेंद धीरे नीचे खिंचती है, इसलिए वह अधिक देर हवा में रहती है।', kn: 'ಕಡಿಮೆ g ಎಂದರೆ ಚೆಂಡು ನಿಧಾನವಾಗಿ ಕೆಳಗೆ ಎಳೆಯಲ್ಪಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಹೆಚ್ಚು ಕಾಲ ಗಾಳಿಯಲ್ಲಿರುತ್ತದೆ.' },
          safetyNote: { en: 'Virtual activity — no safety risk.', hi: 'वर्चुअल गतिविधि — कोई जोखिम नहीं।', kn: 'ವರ್ಚುವಲ್ ಚಟುವಟಿಕೆ — ಅಪಾಯವಿಲ್ಲ.' },
          predictionQuestion: { en: 'On the Moon, will the ball go higher or lower than on Earth?', hi: 'चंद्रमा पर गेंद पृथ्वी से अधिक ऊँची जाएगी या कम?', kn: 'ಚಂದ್ರನ ಮೇಲೆ ಚೆಂಡು ಭೂಮಿಗಿಂತ ಹೆಚ್ಚು ಎತ್ತರ ಹೋಗುವುದೇ ಅಥವಾ ಕಡಿಮೆಯೇ?' },
          predictionOptions: { en: ['Higher', 'Lower', 'Same'], hi: ['अधिक', 'कम', 'समान'], kn: ['ಹೆಚ್ಚು', 'ಕಡಿಮೆ', 'ಅದೇ'] },
          predictionCorrectIndex: 0,
          hints: { en: ['Max height H = (v sin θ)² / 2g. A smaller g makes H bigger.'], hi: ['अधिकतम ऊँचाई H = (v sin θ)² / 2g। g कम होने पर H अधिक होती है।'], kn: ['ಗರಿಷ್ಠ ಎತ್ತರ H = (v sin θ)² / 2g. g ಕಡಿಮೆಯಾದರೆ H ಹೆಚ್ಚು.'] },
          whyItHappens: { en: 'The Moon’s gravity pulls less strongly, so the ball slows and falls more gradually.', hi: 'चंद्रमा का गुरुत्व कम बल से खींचता है, इसलिए गेंद धीरे धीमी होती और गिरती है।', kn: 'ಚಂದ್ರನ ಗುರುತ್ವ ಕಡಿಮೆ ಬಲದಿಂದ ಎಳೆಯುತ್ತದೆ, ಆದ್ದರಿಂದ ಚೆಂಡು ಕ್ರಮೇಣ ನಿಧಾನವಾಗಿ ಬೀಳುತ್ತದೆ.' },
        },
      ],
    }),

    buildChapter({
      ...base9,
      id: 'cbse9-phy-work-energy',
      chapterNumber: 10,
      title: { en: 'Work and Energy', hi: 'कार्य तथा ऊर्जा', kn: 'ಕೆಲಸ ಮತ್ತು ಶಕ್ತಿ' },
      topicTag: { en: 'Work, energy and power', hi: 'कार्य, ऊर्जा और शक्ति', kn: 'ಕೆಲಸ, ಶಕ್ತಿ ಮತ್ತು ಸಾಮರ್ಥ್ಯ' },
      conceptSummary: {
        en: 'Work is done when a force moves an object. Energy is the ability to do work. A moving object has kinetic energy, a raised object has potential energy, and energy is never lost — it only changes form.',
        hi: 'जब बल किसी वस्तु को विस्थापित करता है तब कार्य होता है। ऊर्जा कार्य करने की क्षमता है। गतिमान वस्तु में गतिज ऊर्जा और ऊँचाई पर रखी वस्तु में स्थितिज ऊर्जा होती है; ऊर्जा नष्ट नहीं होती, केवल रूप बदलती है।',
        kn: 'ಬಲವು ವಸ್ತುವನ್ನು ಚಲಿಸಿದಾಗ ಕೆಲಸ ಆಗುತ್ತದೆ. ಶಕ್ತಿ ಎಂದರೆ ಕೆಲಸ ಮಾಡುವ ಸಾಮರ್ಥ್ಯ. ಚಲಿಸುವ ವಸ್ತುವಿಗೆ ಚಲನಶಕ್ತಿ, ಎತ್ತರದಲ್ಲಿರುವ ವಸ್ತುವಿಗೆ ಸ್ಥಿತಿಶಕ್ತಿ ಇರುತ್ತದೆ; ಶಕ್ತಿ ನಾಶವಾಗುವುದಿಲ್ಲ, ರೂಪ ಮಾತ್ರ ಬದಲಾಗುತ್ತದೆ.',
      },
      topics: [
        {
          id: 'cbse9-phy-we-t1',
          title: { en: 'Work, kinetic and potential energy, power', hi: 'कार्य, गतिज व स्थितिज ऊर्जा, शक्ति', kn: 'ಕೆಲಸ, ಚಲನ ಮತ್ತು ಸ್ಥಿತಿಶಕ್ತಿ, ಸಾಮರ್ಥ್ಯ' },
          subtopics: {
            en: ['W = F × s (force along displacement)', 'Kinetic energy ½mv²', 'Potential energy mgh', 'Power = work / time', 'Law of conservation of energy'],
            hi: ['W = F × s (बल विस्थापन की दिशा में)', 'गतिज ऊर्जा ½mv²', 'स्थितिज ऊर्जा mgh', 'शक्ति = कार्य / समय', 'ऊर्जा संरक्षण का नियम'],
            kn: ['W = F × s (ಬಲ ಸ್ಥಳಾಂತರದ ದಿಕ್ಕಿನಲ್ಲಿ)', 'ಚಲನಶಕ್ತಿ ½mv²', 'ಸ್ಥಿತಿಶಕ್ತಿ mgh', 'ಸಾಮರ್ಥ್ಯ = ಕೆಲಸ / ಸಮಯ', 'ಶಕ್ತಿ ಸಂರಕ್ಷಣಾ ನಿಯಮ'],
          },
          explanation: {
            en: 'A ball dropped from a height loses potential energy and gains kinetic energy; just before it hits the ground, almost all the potential energy has become kinetic.',
            hi: 'ऊँचाई से गिराई गई गेंद की स्थितिज ऊर्जा घटती और गतिज ऊर्जा बढ़ती है; ज़मीन से टकराने से ठीक पहले लगभग सारी स्थितिज ऊर्जा गतिज बन जाती है।',
            kn: 'ಎತ್ತರದಿಂದ ಬಿಟ್ಟ ಚೆಂಡಿನ ಸ್ಥಿತಿಶಕ್ತಿ ಕಡಿಮೆಯಾಗಿ ಚಲನಶಕ್ತಿ ಹೆಚ್ಚುತ್ತದೆ; ನೆಲಕ್ಕೆ ಬಡಿಯುವ ಮೊದಲು ಸುಮಾರು ಎಲ್ಲ ಸ್ಥಿತಿಶಕ್ತಿ ಚಲನಶಕ್ತಿಯಾಗುತ್ತದೆ.',
          },
        },
      ],
      definitions: [
        { id: 'cbse9-phy-we-d1', term: { en: 'Joule', hi: 'जूल', kn: 'ಜೂಲ್' }, definition: { en: 'The SI unit of work and energy: the work done when a force of 1 N moves an object 1 m.', hi: 'कार्य और ऊर्जा का SI मात्रक: 1 N बल द्वारा वस्तु को 1 m विस्थापित करने में किया गया कार्य।', kn: 'ಕೆಲಸ ಮತ್ತು ಶಕ್ತಿಯ SI ಏಕಮಾನ: 1 N ಬಲ ವಸ್ತುವನ್ನು 1 m ಚಲಿಸಿದಾಗ ಆಗುವ ಕೆಲಸ.' } },
      ],
      keyConcepts: {
        en: ['No displacement means no work in the physics sense.', '1 watt = 1 joule per second.', 'Total energy stays constant (conservation of energy).'],
        hi: ['विस्थापन न हो तो भौतिकी में कार्य नहीं होता।', '1 वाट = 1 जूल प्रति सेकंड।', 'कुल ऊर्जा स्थिर रहती है (ऊर्जा संरक्षण)।'],
        kn: ['ಸ್ಥಳಾಂತರ ಇಲ್ಲದಿದ್ದರೆ ಭೌತಶಾಸ್ತ್ರದಲ್ಲಿ ಕೆಲಸ ಇಲ್ಲ.', '1 ವ್ಯಾಟ್ = ಪ್ರತಿ ಸೆಕೆಂಡಿಗೆ 1 ಜೂಲ್.', 'ಒಟ್ಟು ಶಕ್ತಿ ಸ್ಥಿರ (ಶಕ್ತಿ ಸಂರಕ್ಷಣೆ).'],
      },
      diagramKind: 'force-friction',
      diagramCaption: { en: 'A force moving a block through a distance does work.', hi: 'बल द्वारा ब्लॉक को विस्थापित करना कार्य है।', kn: 'ಬಲವು ಬ್ಲಾಕ್ ಅನ್ನು ಚಲಿಸುವುದು ಕೆಲಸ.' },
      formulas: [
        { id: 'cbse9-phy-we-f1', name: { en: 'Work', hi: 'कार्य', kn: 'ಕೆಲಸ' }, formula: 'W = F × s', variables: { en: 'F = force (N), s = displacement along the force (m)', hi: 'F = बल (N), s = बल की दिशा में विस्थापन (m)', kn: 'F = ಬಲ (N), s = ಬಲದ ದಿಕ್ಕಿನ ಸ್ಥಳಾಂತರ (m)' }, unit: 'J' },
        { id: 'cbse9-phy-we-f2', name: { en: 'Kinetic energy', hi: 'गतिज ऊर्जा', kn: 'ಚಲನಶಕ್ತಿ' }, formula: 'KE = ½ m v²', variables: { en: 'm = mass (kg), v = speed (m/s)', hi: 'm = द्रव्यमान (kg), v = चाल (m/s)', kn: 'm = ದ್ರವ್ಯರಾಶಿ (kg), v = ವೇಗ (m/s)' }, unit: 'J' },
        { id: 'cbse9-phy-we-f3', name: { en: 'Potential energy', hi: 'स्थितिज ऊर्जा', kn: 'ಸ್ಥಿತಿಶಕ್ತಿ' }, formula: 'PE = m g h', variables: { en: 'm = mass (kg), g = 9.8 m/s², h = height (m)', hi: 'm = द्रव्यमान (kg), g = 9.8 m/s², h = ऊँचाई (m)', kn: 'm = ದ್ರವ್ಯರಾಶಿ (kg), g = 9.8 m/s², h = ಎತ್ತರ (m)' }, unit: 'J' },
        { id: 'cbse9-phy-we-f4', name: { en: 'Power', hi: 'शक्ति', kn: 'ಸಾಮರ್ಥ್ಯ' }, formula: 'P = W / t', variables: { en: 'W = work (J), t = time (s)', hi: 'W = कार्य (J), t = समय (s)', kn: 'W = ಕೆಲಸ (J), t = ಸಮಯ (s)' }, unit: 'W' },
      ],
      solvedNumericals: [
        { id: 'cbse9-phy-we-n1', problem: { en: 'Find the kinetic energy of a 2 kg ball moving at 3 m/s.', hi: '3 m/s से चलती 2 kg की गेंद की गतिज ऊर्जा ज्ञात करें।', kn: '3 m/s ವೇಗದಲ್ಲಿ ಚಲಿಸುವ 2 kg ಚೆಂಡಿನ ಚಲನಶಕ್ತಿ ಕಂಡುಹಿಡಿಯಿರಿ.' }, given: ['m = 2 kg', 'v = 3 m/s'], formulaUsed: 'KE = ½ m v²', solutionSteps: ['KE = ½ × 2 × 3²', 'KE = 9 J'], finalAnswer: 'KE = 9 J' },
      ],
      realLifeApplications: {
        en: ['Hydroelectric dams turn the potential energy of water into electricity.', 'Machines are rated by power in watts or horsepower.'],
        hi: ['जलविद्युत बाँध पानी की स्थितिज ऊर्जा को बिजली में बदलते हैं।', 'मशीनों की क्षमता वाट या अश्वशक्ति में बताई जाती है।'],
        kn: ['ಜಲವಿದ್ಯುತ್ ಅಣೆಕಟ್ಟುಗಳು ನೀರಿನ ಸ್ಥಿತಿಶಕ್ತಿಯನ್ನು ವಿದ್ಯುತ್ತಾಗಿ ಮಾಡುತ್ತವೆ.', 'ಯಂತ್ರಗಳ ಸಾಮರ್ಥ್ಯವನ್ನು ವ್ಯಾಟ್ ಅಥವಾ ಅಶ್ವಶಕ್ತಿಯಲ್ಲಿ ಹೇಳುತ್ತಾರೆ.'],
      },
      revisionNotes: {
        en: ['Doubling speed makes kinetic energy four times larger.', 'Energy changes form but the total stays the same.'],
        hi: ['चाल दोगुनी करने पर गतिज ऊर्जा चार गुना हो जाती है।', 'ऊर्जा रूप बदलती है पर कुल मात्रा वही रहती है।'],
        kn: ['ವೇಗ ಎರಡು ಪಟ್ಟಾದರೆ ಚಲನಶಕ್ತಿ ನಾಲ್ಕು ಪಟ್ಟಾಗುತ್ತದೆ.', 'ಶಕ್ತಿ ರೂಪ ಬದಲಾಗುತ್ತದೆ, ಒಟ್ಟು ಮೊತ್ತ ಅದೇ.'],
      },
      chapterQuestions: [
        { id: 'cbse9-phy-we-q1', type: 'short', question: { en: 'A person pushes a wall hard but it does not move. Is work done on the wall?', hi: 'कोई व्यक्ति दीवार को ज़ोर से धक्का देता है पर वह हिलती नहीं। क्या दीवार पर कार्य हुआ?', kn: 'ವ್ಯಕ್ತಿ ಗೋಡೆಯನ್ನು ಜೋರಾಗಿ ತಳ್ಳುತ್ತಾನೆ ಆದರೆ ಅದು ಚಲಿಸುವುದಿಲ್ಲ. ಗೋಡೆಯ ಮೇಲೆ ಕೆಲಸ ಆಯಿತೇ?' }, answer: { en: 'No. There is no displacement, so W = F × 0 = 0.', hi: 'नहीं। विस्थापन शून्य है, इसलिए W = F × 0 = 0।', kn: 'ಇಲ್ಲ. ಸ್ಥಳಾಂತರ ಸೊನ್ನೆ, ಆದ್ದರಿಂದ W = F × 0 = 0.' } },
      ],
      mcqs: [
        { id: 'cbse9-phy-we-m1', question: { en: 'The SI unit of power is:', hi: 'शक्ति का SI मात्रक है:', kn: 'ಸಾಮರ್ಥ್ಯದ SI ಏಕಮಾನ:' }, options: { en: ['joule', 'newton', 'watt', 'pascal'], hi: ['जूल', 'न्यूटन', 'वाट', 'पास्कल'], kn: ['ಜೂಲ್', 'ನ್ಯೂಟನ್', 'ವ್ಯಾಟ್', 'ಪಾಸ್ಕಲ್'] }, correctIndex: 2, explanation: { en: '1 watt = 1 joule per second.', hi: '1 वाट = 1 जूल प्रति सेकंड।', kn: '1 ವ್ಯಾಟ್ = ಪ್ರತಿ ಸೆಕೆಂಡಿಗೆ 1 ಜೂಲ್.' } },
      ],
      experiments: [
        {
          id: 'cbse9-phy-we-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          title: { en: 'Height and bounce: potential energy to kinetic energy', hi: 'ऊँचाई और उछाल: स्थितिज से गतिज ऊर्जा', kn: 'ಎತ್ತರ ಮತ್ತು ಪುಟಿತ: ಸ್ಥಿತಿಶಕ್ತಿಯಿಂದ ಚಲನಶಕ್ತಿ' },
          objective: { en: 'Show that a ball dropped from a greater height hits the ground faster and bounces higher.', hi: 'दिखाना कि अधिक ऊँचाई से गिराई गेंद अधिक तेज़ी से टकराती और अधिक ऊँची उछलती है।', kn: 'ಹೆಚ್ಚು ಎತ್ತರದಿಂದ ಬಿಟ್ಟ ಚೆಂಡು ವೇಗವಾಗಿ ಬಡಿದು ಹೆಚ್ಚು ಪುಟಿಯುತ್ತದೆ ಎಂದು ತೋರಿಸುವುದು.' },
          materials: { en: ['A rubber ball', 'A metre scale or marked wall', 'A friend to watch the bounce'], hi: ['रबर की गेंद', 'मीटर पैमाना या चिह्नित दीवार', 'उछाल देखने के लिए एक मित्र'], kn: ['ರಬ್ಬರ್ ಚೆಂಡು', 'ಮೀಟರ್ ಪಟ್ಟಿ ಅಥವಾ ಗುರುತಿಸಿದ ಗೋಡೆ', 'ಪುಟಿತ ನೋಡಲು ಸ್ನೇಹಿತ'] },
          scientificPrinciple: { en: 'Conservation of energy: PE = mgh changes into KE and back.', hi: 'ऊर्जा संरक्षण: PE = mgh गतिज ऊर्जा में बदलती है और वापस।', kn: 'ಶಕ್ತಿ ಸಂರಕ್ಷಣೆ: PE = mgh ಚಲನಶಕ್ತಿಯಾಗಿ ಬದಲಾಗಿ ಮತ್ತೆ ಹಿಂದಕ್ಕೆ.' },
          steps: {
            en: ['Drop the ball from 0.5 m and note how high it bounces.', 'Repeat from 1.0 m and from 1.5 m.', 'Write the three bounce heights in the table.'],
            hi: ['गेंद को 0.5 m से गिराएँ और उछाल की ऊँचाई नोट करें।', 'इसे 1.0 m और 1.5 m से दोहराएँ।', 'तीनों उछाल ऊँचाइयाँ तालिका में लिखें।'],
            kn: ['ಚೆಂಡನ್ನು 0.5 m ನಿಂದ ಬಿಟ್ಟು ಪುಟಿದ ಎತ್ತರ ಬರೆಯಿರಿ.', 'ಇದನ್ನು 1.0 m ಮತ್ತು 1.5 m ನಿಂದ ಪುನರಾವರ್ತಿಸಿ.', 'ಮೂರು ಪುಟಿತ ಎತ್ತರಗಳನ್ನು ಕೋಷ್ಟಕದಲ್ಲಿ ಬರೆಯಿರಿ.'],
          },
          observationTable: { columns: { en: ['Drop height (m)', 'Bounce height (m)'] }, sampleRows: [['0.5', '0.3'], ['1.0', '0.6'], ['1.5', '0.9']] },
          expectedResult: { en: 'The bounce height grows with the drop height, and is always less than it because some energy becomes sound and heat.', hi: 'उछाल की ऊँचाई गिराने की ऊँचाई के साथ बढ़ती है और हमेशा उससे कम रहती है क्योंकि कुछ ऊर्जा ध्वनि और ऊष्मा बन जाती है।', kn: 'ಬಿಟ್ಟ ಎತ್ತರ ಹೆಚ್ಚಾದಂತೆ ಪುಟಿತ ಎತ್ತರ ಹೆಚ್ಚುತ್ತದೆ ಮತ್ತು ಅದಕ್ಕಿಂತ ಯಾವಾಗಲೂ ಕಡಿಮೆ; ಸ್ವಲ್ಪ ಶಕ್ತಿ ಧ್ವನಿ ಮತ್ತು ಶಾಖವಾಗುತ್ತದೆ.' },
          conclusion: { en: 'Energy changes form (potential → kinetic → some lost as heat and sound) but the total is conserved.', hi: 'ऊर्जा रूप बदलती है (स्थितिज → गतिज → कुछ ऊष्मा और ध्वनि) पर कुल ऊर्जा संरक्षित रहती है।', kn: 'ಶಕ್ತಿ ರೂಪ ಬದಲಾಗುತ್ತದೆ (ಸ್ಥಿತಿ → ಚಲನ → ಸ್ವಲ್ಪ ಶಾಖ ಮತ್ತು ಧ್ವನಿ) ಆದರೆ ಒಟ್ಟು ಸಂರಕ್ಷಿತ.' },
          safetyNote: { en: 'Do the activity on level ground away from windows.', hi: 'गतिविधि समतल ज़मीन पर खिड़कियों से दूर करें।', kn: 'ಚಟುವಟಿಕೆಯನ್ನು ಕಿಟಕಿಗಳಿಂದ ದೂರ ಸಮತಟ್ಟಾದ ನೆಲದಲ್ಲಿ ಮಾಡಿ.' },
          predictionQuestion: { en: 'Will the ball bounce higher than the height it was dropped from?', hi: 'क्या गेंद गिराने की ऊँचाई से अधिक ऊँची उछलेगी?', kn: 'ಚೆಂಡು ಬಿಟ್ಟ ಎತ್ತರಕ್ಕಿಂತ ಹೆಚ್ಚು ಪುಟಿಯುವುದೇ?' },
          predictionOptions: { en: ['Yes', 'No, lower'], hi: ['हाँ', 'नहीं, कम'], kn: ['ಹೌದು', 'ಇಲ್ಲ, ಕಡಿಮೆ'] },
          predictionCorrectIndex: 1,
          hints: { en: ['Think about where some of the energy goes at each bounce.'], hi: ['सोचें कि हर उछाल में कुछ ऊर्जा कहाँ जाती है।'], kn: ['ಪ್ರತಿ ಪುಟಿತದಲ್ಲಿ ಸ್ವಲ್ಪ ಶಕ್ತಿ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತದೆ ಎಂದು ಯೋಚಿಸಿ.'] },
          whyItHappens: { en: 'Some of the ball’s energy turns into sound and heat when it hits the floor, so it cannot climb back to the full height.', hi: 'फर्श से टकराने पर गेंद की कुछ ऊर्जा ध्वनि और ऊष्मा बन जाती है, इसलिए वह पूरी ऊँचाई तक वापस नहीं पहुँचती।', kn: 'ನೆಲಕ್ಕೆ ಬಡಿದಾಗ ಚೆಂಡಿನ ಸ್ವಲ್ಪ ಶಕ್ತಿ ಧ್ವನಿ ಮತ್ತು ಶಾಖವಾಗುತ್ತದೆ, ಆದ್ದರಿಂದ ಅದು ಪೂರ್ತಿ ಎತ್ತರಕ್ಕೆ ಮರಳಲಾರದು.' },
        },
      ],
    }),
  ],

  'cbse-c10-2025-26': [
    buildChapter({
      ...base10,
      id: 'cbse10-phy-human-eye',
      chapterNumber: 10,
      title: { en: 'The Human Eye and the Colourful World', hi: 'मानव नेत्र तथा रंग-बिरंगा संसार', kn: 'ಮಾನವ ಕಣ್ಣು ಮತ್ತು ವರ್ಣಮಯ ಜಗತ್ತು' },
      topicTag: { en: 'Eye, defects and scattering', hi: 'नेत्र, दोष और प्रकीर्णन', kn: 'ಕಣ್ಣು, ದೋಷಗಳು ಮತ್ತು ಚದುರುವಿಕೆ' },
      conceptSummary: {
        en: 'The eye lens forms a real image on the retina. Its focal length changes to see near and far objects (accommodation). Short-sight and long-sight are corrected with concave and convex lenses. Scattering of light explains the blue sky and red sunsets.',
        hi: 'नेत्र लेंस रेटिना पर वास्तविक प्रतिबिंब बनाता है। पास और दूर की वस्तुएँ देखने के लिए उसकी फोकस दूरी बदलती है (समंजन)। निकट-दृष्टि और दूर-दृष्टि दोष क्रमशः अवतल और उत्तल लेंस से ठीक होते हैं। प्रकाश का प्रकीर्णन नीले आकाश और लाल सूर्यास्त को समझाता है।',
        kn: 'ಕಣ್ಣಿನ ಮಸೂರ ರೆಟಿನಾ ಮೇಲೆ ನೈಜ ಪ್ರತಿಬಿಂಬ ಮಾಡುತ್ತದೆ. ಹತ್ತಿರ ಮತ್ತು ದೂರದ ವಸ್ತು ನೋಡಲು ಅದರ ನಾಭಿದೂರ ಬದಲಾಗುತ್ತದೆ (ಹೊಂದಾಣಿಕೆ). ಸಮೀಪದೃಷ್ಟಿ ಮತ್ತು ದೂರದೃಷ್ಟಿ ದೋಷಗಳನ್ನು ಕ್ರಮವಾಗಿ ನಿಮ್ನ ಮತ್ತು ಪೀನ ಮಸೂರದಿಂದ ಸರಿಪಡಿಸಲಾಗುತ್ತದೆ. ಬೆಳಕಿನ ಚದುರುವಿಕೆ ನೀಲಿ ಆಕಾಶ ಮತ್ತು ಕೆಂಪು ಸೂರ್ಯಾಸ್ತವನ್ನು ವಿವರಿಸುತ್ತದೆ.',
      },
      topics: [
        {
          id: 'cbse10-phy-eye-t1',
          title: { en: 'Defects of vision and their correction', hi: 'दृष्टि दोष और उनका निवारण', kn: 'ದೃಷ್ಟಿ ದೋಷಗಳು ಮತ್ತು ಅವುಗಳ ಸರಿಪಡಿಕೆ' },
          subtopics: {
            en: ['Myopia (near-sightedness): image forms in front of the retina; use a concave lens', 'Hypermetropia (far-sightedness): image forms behind the retina; use a convex lens', 'Presbyopia: weak accommodation with age; bifocal lenses'],
            hi: ['निकट-दृष्टि: प्रतिबिंब रेटिना के आगे बनता है; अवतल लेंस', 'दूर-दृष्टि: प्रतिबिंब रेटिना के पीछे बनता है; उत्तल लेंस', 'जरा-दूरदृष्टिता: आयु के साथ समंजन कमज़ोर; द्विफोकसी लेंस'],
            kn: ['ಸಮೀಪದೃಷ್ಟಿ: ಪ್ರತಿಬಿಂಬ ರೆಟಿನಾ ಮುಂದೆ; ನಿಮ್ನ ಮಸೂರ', 'ದೂರದೃಷ್ಟಿ: ಪ್ರತಿಬಿಂಬ ರೆಟಿನಾ ಹಿಂದೆ; ಪೀನ ಮಸೂರ', 'ಪ್ರೆಸ್ಬಯೋಪಿಯಾ: ವಯಸ್ಸಿನೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ ದುರ್ಬಲ; ದ್ವಿನಾಭಿ ಮಸೂರ'],
          },
          explanation: {
            en: 'A near-sighted person sees nearby objects clearly but distant ones blurred. A concave lens spreads the rays slightly so the image lands on the retina.',
            hi: 'निकट-दृष्टि वाला व्यक्ति पास की वस्तुएँ साफ़ पर दूर की धुँधली देखता है। अवतल लेंस किरणों को थोड़ा फैलाकर प्रतिबिंब रेटिना पर बनाता है।',
            kn: 'ಸಮೀಪದೃಷ್ಟಿ ಇರುವವರಿಗೆ ಹತ್ತಿರದ ವಸ್ತು ಸ್ಪಷ್ಟ, ದೂರದ್ದು ಮಸುಕು. ನಿಮ್ನ ಮಸೂರ ಕಿರಣಗಳನ್ನು ಸ್ವಲ್ಪ ಹರಡಿ ಪ್ರತಿಬಿಂಬವನ್ನು ರೆಟಿನಾ ಮೇಲೆ ಬೀಳಿಸುತ್ತದೆ.',
          },
        },
      ],
      definitions: [
        { id: 'cbse10-phy-eye-d1', term: { en: 'Power of accommodation', hi: 'समंजन क्षमता', kn: 'ಹೊಂದಾಣಿಕೆ ಸಾಮರ್ಥ್ಯ' }, definition: { en: 'The ability of the eye lens to change its focal length to focus objects at different distances. The least distance of distinct vision is about 25 cm.', hi: 'विभिन्न दूरियों की वस्तुओं पर फोकस करने के लिए नेत्र लेंस की फोकस दूरी बदलने की क्षमता। स्पष्ट दृष्टि की न्यूनतम दूरी लगभग 25 cm है।', kn: 'ವಿವಿಧ ದೂರದ ವಸ್ತುಗಳ ಮೇಲೆ ಫೋಕಸ್ ಮಾಡಲು ಕಣ್ಣಿನ ಮಸೂರ ತನ್ನ ನಾಭಿದೂರವನ್ನು ಬದಲಿಸುವ ಸಾಮರ್ಥ್ಯ. ಸ್ಪಷ್ಟ ದೃಷ್ಟಿಯ ಕನಿಷ್ಠ ದೂರ ಸುಮಾರು 25 cm.' } },
      ],
      keyConcepts: {
        en: ['Normal far point is at infinity; near point is about 25 cm.', 'Lens power P = 1/f (f in metres), measured in dioptres; concave lenses have negative power.', 'Blue light scatters more than red, so the sky looks blue.'],
        hi: ['सामान्य दूर बिंदु अनंत पर और निकट बिंदु लगभग 25 cm पर होता है।', 'लेंस की क्षमता P = 1/f (f मीटर में), मात्रक डायोप्टर; अवतल लेंस की क्षमता ऋणात्मक होती है।', 'नीला प्रकाश लाल से अधिक प्रकीर्णित होता है, इसलिए आकाश नीला दिखता है।'],
        kn: ['ಸಾಮಾನ್ಯ ದೂರ ಬಿಂದು ಅನಂತದಲ್ಲಿ; ಹತ್ತಿರದ ಬಿಂದು ಸುಮಾರು 25 cm.', 'ಮಸೂರ ಸಾಮರ್ಥ್ಯ P = 1/f (f ಮೀಟರ್‌ನಲ್ಲಿ), ಡಯಾಪ್ಟರ್; ನಿಮ್ನ ಮಸೂರಕ್ಕೆ ಋಣ ಸಾಮರ್ಥ್ಯ.', 'ನೀಲಿ ಬೆಳಕು ಕೆಂಪಿಗಿಂತ ಹೆಚ್ಚು ಚದುರುತ್ತದೆ, ಆದ್ದರಿಂದ ಆಕಾಶ ನೀಲಿ.'],
      },
      diagramKind: 'optics-lens-mirror',
      diagramCaption: { en: 'A lens bringing parallel rays to focus.', hi: 'लेंस द्वारा समानांतर किरणों का फोकस।', kn: 'ಮಸೂರ ಸಮಾನಾಂತರ ಕಿರಣಗಳನ್ನು ಫೋಕಸ್ ಮಾಡುವುದು.' },
      formulas: [
        { id: 'cbse10-phy-eye-f1', name: { en: 'Power of a lens', hi: 'लेंस की क्षमता', kn: 'ಮಸೂರದ ಸಾಮರ್ಥ್ಯ' }, formula: 'P = 1 / f', variables: { en: 'f = focal length in metres', hi: 'f = फोकस दूरी (मीटर में)', kn: 'f = ನಾಭಿದೂರ (ಮೀಟರ್‌ನಲ್ಲಿ)' }, unit: 'dioptre (D)' },
      ],
      solvedNumericals: [
        { id: 'cbse10-phy-eye-n1', problem: { en: 'A near-sighted student can see clearly only up to 80 cm. Find the power of the lens needed to see distant objects.', hi: 'निकट-दृष्टि वाला छात्र केवल 80 cm तक साफ़ देख सकता है। दूर की वस्तुएँ देखने के लिए आवश्यक लेंस की क्षमता ज्ञात करें।', kn: 'ಸಮೀಪದೃಷ್ಟಿಯ ವಿದ್ಯಾರ್ಥಿ 80 cm ವರೆಗೆ ಮಾತ್ರ ಸ್ಪಷ್ಟ ನೋಡಬಲ್ಲ. ದೂರದ ವಸ್ತು ನೋಡಲು ಬೇಕಾದ ಮಸೂರದ ಸಾಮರ್ಥ್ಯ ಕಂಡುಹಿಡಿಯಿರಿ.' }, given: ['Far point = 80 cm', 'The lens must form an image of a distant object at 80 cm, so f = −80 cm = −0.8 m'], formulaUsed: 'P = 1 / f', solutionSteps: ['f = −0.8 m', 'P = 1 / (−0.8) = −1.25 D'], finalAnswer: 'P = −1.25 D (concave lens)' },
      ],
      realLifeApplications: {
        en: ['Spectacles and contact lenses correct vision.', 'Red is used for danger signals because it scatters least and is seen from far.'],
        hi: ['चश्मे और कॉन्टैक्ट लेंस दृष्टि दोष ठीक करते हैं।', 'लाल रंग का प्रयोग खतरे के संकेत में होता है क्योंकि वह सबसे कम प्रकीर्णित होकर दूर तक दिखता है।'],
        kn: ['ಕನ್ನಡಕ ಮತ್ತು ಕಾಂಟ್ಯಾಕ್ಟ್ ಲೆನ್ಸ್ ದೃಷ್ಟಿ ಸರಿಪಡಿಸುತ್ತವೆ.', 'ಕೆಂಪು ಅತಿ ಕಡಿಮೆ ಚದುರುವುದರಿಂದ ದೂರದಿಂದ ಕಾಣುತ್ತದೆ, ಆದ್ದರಿಂದ ಅಪಾಯ ಸೂಚನೆಗೆ ಬಳಸುತ್ತಾರೆ.'],
      },
      revisionNotes: {
        en: ['Myopia → concave (negative) lens; hypermetropia → convex (positive) lens.', 'Blue scatters most; red scatters least.'],
        hi: ['निकट-दृष्टि → अवतल (ऋणात्मक) लेंस; दूर-दृष्टि → उत्तल (धनात्मक) लेंस।', 'नीला सबसे अधिक और लाल सबसे कम प्रकीर्णित होता है।'],
        kn: ['ಸಮೀಪದೃಷ್ಟಿ → ನಿಮ್ನ (ಋಣ) ಮಸೂರ; ದೂರದೃಷ್ಟಿ → ಪೀನ (ಧನ) ಮಸೂರ.', 'ನೀಲಿ ಹೆಚ್ಚು, ಕೆಂಪು ಕಡಿಮೆ ಚದುರುತ್ತದೆ.'],
      },
      chapterQuestions: [
        { id: 'cbse10-phy-eye-q1', type: 'short', question: { en: 'Why does the sky look blue?', hi: 'आकाश नीला क्यों दिखता है?', kn: 'ಆಕಾಶ ನೀಲಿಯಾಗಿ ಏಕೆ ಕಾಣುತ್ತದೆ?' }, answer: { en: 'Air molecules scatter shorter wavelengths (blue) much more than longer ones (red), so scattered blue light reaches our eyes from all directions.', hi: 'वायु के अणु कम तरंगदैर्ध्य (नीले) को अधिक तरंगदैर्ध्य (लाल) से बहुत अधिक प्रकीर्णित करते हैं, इसलिए प्रकीर्णित नीला प्रकाश सभी दिशाओं से हमारी आँखों तक पहुँचता है।', kn: 'ಗಾಳಿಯ ಅಣುಗಳು ಕಡಿಮೆ ತರಂಗಾಂತರದ (ನೀಲಿ) ಬೆಳಕನ್ನು ಹೆಚ್ಚು ತರಂಗಾಂತರದ (ಕೆಂಪು) ಬೆಳಕಿಗಿಂತ ಬಹಳ ಹೆಚ್ಚು ಚದುರಿಸುತ್ತವೆ, ಆದ್ದರಿಂದ ಚದುರಿದ ನೀಲಿ ಬೆಳಕು ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಂದ ಕಣ್ಣಿಗೆ ತಲುಪುತ್ತದೆ.' } },
      ],
      mcqs: [
        { id: 'cbse10-phy-eye-m1', question: { en: 'Which lens corrects myopia?', hi: 'निकट-दृष्टि दोष किस लेंस से ठीक होता है?', kn: 'ಸಮೀಪದೃಷ್ಟಿ ದೋಷವನ್ನು ಯಾವ ಮಸೂರ ಸರಿಪಡಿಸುತ್ತದೆ?' }, options: { en: ['Convex', 'Concave', 'Plane', 'Cylindrical'], hi: ['उत्तल', 'अवतल', 'समतल', 'बेलनाकार'], kn: ['ಪೀನ', 'ನಿಮ್ನ', 'ಸಮತಲ', 'ಸಿಲಿಂಡರಾಕಾರ'] }, correctIndex: 1, explanation: { en: 'A concave lens diverges rays so the image falls on the retina.', hi: 'अवतल लेंस किरणों को फैलाता है जिससे प्रतिबिंब रेटिना पर बनता है।', kn: 'ನಿಮ್ನ ಮಸೂರ ಕಿರಣಗಳನ್ನು ಹರಡಿ ಪ್ರತಿಬಿಂಬ ರೆಟಿನಾ ಮೇಲೆ ಬೀಳಿಸುತ್ತದೆ.' } },
      ],
      experiments: [
        {
          id: 'cbse10-phy-eye-exp1',
          relationType: 'in-chapter',
          activityMode: 'home-safe',
          title: { en: 'Focus a window on paper with a convex lens (a model of the eye)', hi: 'उत्तल लेंस से खिड़की का प्रतिबिंब कागज़ पर बनाना (नेत्र का मॉडल)', kn: 'ಪೀನ ಮಸೂರದಿಂದ ಕಿಟಕಿಯ ಪ್ರತಿಬಿಂಬ ಕಾಗದದ ಮೇಲೆ (ಕಣ್ಣಿನ ಮಾದರಿ)' },
          objective: { en: 'Form a real, inverted image like the one on the retina and estimate the focal length of a lens.', hi: 'रेटिना जैसा वास्तविक, उलटा प्रतिबिंब बनाना और लेंस की फोकस दूरी का अनुमान लगाना।', kn: 'ರೆಟಿನಾದಲ್ಲಿರುವಂತಹ ನೈಜ, ತಲೆಕೆಳಗಾದ ಪ್ರತಿಬಿಂಬ ಮಾಡಿ ಮಸೂರದ ನಾಭಿದೂರ ಅಂದಾಜಿಸುವುದು.' },
          materials: { en: ['A magnifying glass (convex lens)', 'A white sheet of paper', 'A metre scale', 'A bright window in a dim room'], hi: ['आवर्धक लेंस (उत्तल)', 'सफ़ेद कागज़', 'मीटर पैमाना', 'हल्के अँधेरे कमरे में एक चमकीली खिड़की'], kn: ['ಭೂತಗನ್ನಡಿ (ಪೀನ ಮಸೂರ)', 'ಬಿಳಿ ಕಾಗದ', 'ಮೀಟರ್ ಪಟ್ಟಿ', 'ಮಬ್ಬಾದ ಕೋಣೆಯಲ್ಲಿ ಪ್ರಕಾಶಮಾನ ಕಿಟಕಿ'] },
          scientificPrinciple: { en: 'A convex lens forms a real image on a screen; the eye lens does the same on the retina.', hi: 'उत्तल लेंस पर्दे पर वास्तविक प्रतिबिंब बनाता है; नेत्र लेंस रेटिना पर यही करता है।', kn: 'ಪೀನ ಮಸೂರ ಪರದೆಯ ಮೇಲೆ ನೈಜ ಪ್ರತಿಬಿಂಬ ಮಾಡುತ್ತದೆ; ಕಣ್ಣಿನ ಮಸೂರ ರೆಟಿನಾದಲ್ಲಿ ಇದನ್ನೇ ಮಾಡುತ್ತದೆ.' },
          steps: {
            en: ['Stand about 2 m from the window with the lens and paper.', 'Hold the lens and move the paper back and forth until a sharp image of the window appears.', 'Measure the distance from lens to paper. This is close to the focal length f.', 'Note that the image is upside down.'],
            hi: ['लेंस और कागज़ लेकर खिड़की से लगभग 2 m दूर खड़े हों।', 'लेंस पकड़कर कागज़ को आगे-पीछे करें जब तक खिड़की का स्पष्ट प्रतिबिंब न बन जाए।', 'लेंस से कागज़ तक की दूरी मापें। यह फोकस दूरी f के निकट है।', 'देखें कि प्रतिबिंब उलटा है।'],
            kn: ['ಮಸೂರ ಮತ್ತು ಕಾಗದ ಹಿಡಿದು ಕಿಟಕಿಯಿಂದ ಸುಮಾರು 2 m ದೂರ ನಿಲ್ಲಿ.', 'ಮಸೂರ ಹಿಡಿದು ಕಾಗದವನ್ನು ಹಿಂದೆ ಮುಂದೆ ಸರಿಸಿ ಕಿಟಕಿಯ ಸ್ಪಷ್ಟ ಪ್ರತಿಬಿಂಬ ಬರುವವರೆಗೆ.', 'ಮಸೂರದಿಂದ ಕಾಗದದ ದೂರ ಅಳೆಯಿರಿ. ಇದು ನಾಭಿದೂರ f ಗೆ ಹತ್ತಿರ.', 'ಪ್ರತಿಬಿಂಬ ತಲೆಕೆಳಗಾಗಿದೆ ಎಂದು ಗಮನಿಸಿ.'],
          },
          observationTable: { columns: { en: ['Trial', 'Lens-to-paper distance (cm)'] }, sampleRows: [['1', '—'], ['2', '—'], ['3', '—']] },
          expectedResult: { en: 'A small, sharp, upside-down image of the window forms at a fixed distance, about the focal length.', hi: 'खिड़की का छोटा, स्पष्ट, उलटा प्रतिबिंब एक निश्चित दूरी (लगभग फोकस दूरी) पर बनता है।', kn: 'ಕಿಟಕಿಯ ಸಣ್ಣ, ಸ್ಪಷ್ಟ, ತಲೆಕೆಳಗಾದ ಪ್ರತಿಬಿಂಬ ನಿಗದಿತ ದೂರದಲ್ಲಿ (ಸುಮಾರು ನಾಭಿದೂರ) ಮೂಡುತ್ತದೆ.' },
          conclusion: { en: 'The eye works like this lens-and-screen arrangement; the brain turns the inverted image the right way up.', hi: 'नेत्र इसी लेंस-पर्दा व्यवस्था की तरह काम करता है; मस्तिष्क उलटे प्रतिबिंब को सीधा कर देता है।', kn: 'ಕಣ್ಣು ಈ ಮಸೂರ-ಪರದೆ ವ್ಯವಸ್ಥೆಯಂತೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ; ಮೆದುಳು ತಲೆಕೆಳಗಾದ ಪ್ರತಿಬಿಂಬವನ್ನು ನೇರ ಮಾಡುತ್ತದೆ.' },
          safetyNote: { en: 'Never focus sunlight with the lens and never look at the Sun through it — it can burn paper and damage eyes. Use a window, not the Sun.', hi: 'लेंस से सूर्य के प्रकाश को कभी फोकस न करें और सूर्य को कभी न देखें — इससे कागज़ जल सकता है और आँखों को हानि हो सकती है। सूर्य नहीं, खिड़की का उपयोग करें।', kn: 'ಮಸೂರದಿಂದ ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಎಂದೂ ಫೋಕಸ್ ಮಾಡಬೇಡಿ, ಸೂರ್ಯನನ್ನು ನೋಡಬೇಡಿ — ಕಾಗದ ಸುಡಬಹುದು, ಕಣ್ಣಿಗೆ ಹಾನಿ. ಸೂರ್ಯನಲ್ಲ, ಕಿಟಕಿ ಬಳಸಿ.' },
          predictionQuestion: { en: 'Will the image of the window be upright or upside down?', hi: 'खिड़की का प्रतिबिंब सीधा होगा या उलटा?', kn: 'ಕಿಟಕಿಯ ಪ್ರತಿಬಿಂಬ ನೇರವೋ ತಲೆಕೆಳಗೋ?' },
          predictionOptions: { en: ['Upright', 'Upside down'], hi: ['सीधा', 'उलटा'], kn: ['ನೇರ', 'ತಲೆಕೆಳಗು'] },
          predictionCorrectIndex: 1,
          hints: { en: ['A convex lens forms real images that are inverted.'], hi: ['उत्तल लेंस वास्तविक और उलटे प्रतिबिंब बनाता है।'], kn: ['ಪೀನ ಮಸೂರ ನೈಜ ಮತ್ತು ತಲೆಕೆಳಗಾದ ಪ್ರತಿಬಿಂಬ ಮಾಡುತ್ತದೆ.'] },
          whyItHappens: { en: 'Rays from a distant object are nearly parallel; a convex lens bends them to meet at its focal point, crossing over so the image is inverted.', hi: 'दूर की वस्तु की किरणें लगभग समानांतर होती हैं; उत्तल लेंस उन्हें फोकस बिंदु पर मिलाता है और किरणें एक-दूसरे को काटती हैं, इसलिए प्रतिबिंब उलटा बनता है।', kn: 'ದೂರದ ವಸ್ತುವಿನ ಕಿರಣಗಳು ಸುಮಾರು ಸಮಾಂತರ; ಪೀನ ಮಸೂರ ಅವನ್ನು ನಾಭಿಬಿಂದುವಿನಲ್ಲಿ ಸೇರಿಸುತ್ತದೆ, ಕಿರಣಗಳು ಛೇದಿಸುವುದರಿಂದ ಪ್ರತಿಬಿಂಬ ತಲೆಕೆಳಗಾಗುತ್ತದೆ.' },
        },
      ],
    }),
  ],
  'cbse-c11-2025-26': [...CBSE_XI_PART_A, ...CBSE_XI_PART_B],
  'cbse-c12-2025-26': CBSE_XII_PHYSICS,
};
