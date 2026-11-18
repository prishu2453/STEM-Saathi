import type { ExperimentId, ExperimentParamValues } from './physicsExperiments';

type L3 = { en: string; hi: string; kn: string };

export interface SimSlider {
  key: keyof ExperimentParamValues;
  label: L3;
  min: number;
  max: number;
  step: number;
  unit: string;
  /** For two-option parameters (e.g. series / parallel) */
  choices?: { value: string; label: L3 }[];
}

export interface SimExplanation {
  what: L3;
  why: L3;
  principle: L3;
  whatIf: L3[];
  sliders: SimSlider[];
}

/** Hindi and Kannada text should be reviewed by a native-speaker teacher before classroom use. */
export const SIM_EXPLANATIONS: Record<ExperimentId, SimExplanation> = {
  mechanics: {
    what: {
      en: 'A ball is thrown at an angle. It rises, slows down at the top, then falls, tracing a curved path.',
      hi: 'एक गेंद को कोण पर फेंका जाता है। वह ऊपर उठती है, शीर्ष पर धीमी होती है और फिर नीचे गिरती है। उसका पथ वक्र (परवलय) होता है।',
      kn: 'ಚೆಂಡನ್ನು ಕೋನದಲ್ಲಿ ಎಸೆಯಲಾಗುತ್ತದೆ. ಅದು ಮೇಲೇರಿ, ಮೇಲ್ತುದಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ, ನಂತರ ಕೆಳಗೆ ಬೀಳುತ್ತದೆ. ಅದರ ಮಾರ್ಗ ವಕ್ರವಾಗಿರುತ್ತದೆ.',
    },
    why: {
      en: 'Gravity pulls the ball down all the time, but nothing changes its sideways speed. Up-down motion and sideways motion happen independently.',
      hi: 'गुरुत्व गेंद को हर समय नीचे खींचता है, पर उसकी क्षैतिज गति नहीं बदलता। ऊपर-नीचे और आगे की गति एक-दूसरे से स्वतंत्र होती हैं।',
      kn: 'ಗುರುತ್ವವು ಚೆಂಡನ್ನು ಸದಾ ಕೆಳಗೆ ಎಳೆಯುತ್ತದೆ, ಆದರೆ ಪಕ್ಕದ ವೇಗವನ್ನು ಬದಲಾಯಿಸುವುದಿಲ್ಲ. ಮೇಲೆ-ಕೆಳಗೆ ಮತ್ತು ಮುಂದಿನ ಚಲನೆಗಳು ಸ್ವತಂತ್ರ.',
    },
    principle: {
      en: 'Independence of horizontal and vertical motion under constant gravitational acceleration.',
      hi: 'नियत गुरुत्वीय त्वरण में क्षैतिज और ऊर्ध्वाधर गति की स्वतंत्रता।',
      kn: 'ಸ್ಥಿರ ಗುರುತ್ವ ವೇಗೋತ್ಕರ್ಷದಲ್ಲಿ ಅಡ್ಡ ಮತ್ತು ಲಂಬ ಚಲನೆಗಳ ಸ್ವಾತಂತ್ರ್ಯ.',
    },
    whatIf: [
      { en: 'Angle near 45° gives the longest range (on level ground).', hi: 'लगभग 45° का कोण सबसे अधिक परास देता है (समतल भूमि पर)।', kn: 'ಸುಮಾರು 45° ಕೋನವು ಅತಿ ಹೆಚ್ಚು ವ್ಯಾಪ್ತಿ ನೀಡುತ್ತದೆ (ಸಮತಟ್ಟಾದ ನೆಲದಲ್ಲಿ).' },
      { en: 'Doubling the speed makes the range four times larger (R ∝ v²).', hi: 'चाल दोगुनी करने पर परास चार गुना हो जाती है (R ∝ v²)।', kn: 'ವೇಗ ಎರಡು ಪಟ್ಟಾದರೆ ವ್ಯಾಪ್ತಿ ನಾಲ್ಕು ಪಟ್ಟಾಗುತ್ತದೆ (R ∝ v²).' },
      { en: 'Smaller g (like on the Moon) makes the ball fly much farther.', hi: 'कम g (जैसे चंद्रमा पर) में गेंद बहुत दूर जाती है।', kn: 'ಕಡಿಮೆ g (ಚಂದ್ರನಲ್ಲಿ) ಇದ್ದರೆ ಚೆಂಡು ಬಹಳ ದೂರ ಹೋಗುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'mechAngle', label: { en: 'Launch angle', hi: 'प्रक्षेप कोण', kn: 'ಎಸೆಯುವ ಕೋನ' }, min: 5, max: 85, step: 1, unit: '°' },
      { key: 'mechVelocity', label: { en: 'Launch speed', hi: 'प्रारंभिक चाल', kn: 'ಆರಂಭಿಕ ವೇಗ' }, min: 5, max: 50, step: 1, unit: 'm/s' },
      { key: 'mechGravity', label: { en: 'Gravity g', hi: 'गुरुत्वीय त्वरण g', kn: 'ಗುರುತ್ವ g' }, min: 1.6, max: 24.8, step: 0.1, unit: 'm/s²' },
    ],
  },
  electricity: {
    what: {
      en: 'A battery pushes current through two resistors. The meter shows total resistance, current and power.',
      hi: 'बैटरी दो प्रतिरोधों से धारा प्रवाहित करती है। मीटर कुल प्रतिरोध, धारा और शक्ति दिखाता है।',
      kn: 'ಬ್ಯಾಟರಿ ಎರಡು ರೋಧಕಗಳ ಮೂಲಕ ವಿದ್ಯುತ್ ಹರಿಸುತ್ತದೆ. ಮೀಟರ್ ಒಟ್ಟು ರೋಧ, ವಿದ್ಯುತ್ ಮತ್ತು ಶಕ್ತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ.',
    },
    why: {
      en: 'Resistance opposes the flow of charge. More voltage pushes more current; more resistance allows less current.',
      hi: 'प्रतिरोध आवेश के प्रवाह का विरोध करता है। अधिक वोल्टता अधिक धारा देती है; अधिक प्रतिरोध कम धारा देता है।',
      kn: 'ರೋಧವು ಆವೇಶದ ಹರಿವನ್ನು ವಿರೋಧಿಸುತ್ತದೆ. ಹೆಚ್ಚು ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚು ವಿದ್ಯುತ್ ನೀಡುತ್ತದೆ; ಹೆಚ್ಚು ರೋಧ ಕಡಿಮೆ ವಿದ್ಯುತ್ ನೀಡುತ್ತದೆ.',
    },
    principle: { en: "Ohm's law and the rules for series and parallel resistors.", hi: 'ओम का नियम तथा श्रेणी व समांतर क्रम के प्रतिरोध नियम।', kn: 'ಓಮ್ ನಿಯಮ ಮತ್ತು ಶ್ರೇಣಿ ಹಾಗೂ ಸಮಾಂತರ ರೋಧಕಗಳ ನಿಯಮಗಳು.' },
    whatIf: [
      { en: 'Series: resistances add, so current falls.', hi: 'श्रेणी क्रम: प्रतिरोध जुड़ते हैं, इसलिए धारा घटती है।', kn: 'ಶ್ರೇಣಿ: ರೋಧಗಳು ಕೂಡುತ್ತವೆ, ಆದ್ದರಿಂದ ವಿದ್ಯುತ್ ಕಡಿಮೆಯಾಗುತ್ತದೆ.' },
      { en: 'Parallel: total resistance is smaller than either resistor, so current rises.', hi: 'समांतर क्रम: कुल प्रतिरोध किसी भी एक से कम होता है, इसलिए धारा बढ़ती है।', kn: 'ಸಮಾಂತರ: ಒಟ್ಟು ರೋಧ ಯಾವುದೇ ಒಂದಕ್ಕಿಂತ ಕಡಿಮೆ, ಆದ್ದರಿಂದ ವಿದ್ಯುತ್ ಹೆಚ್ಚುತ್ತದೆ.' },
      { en: 'Doubling the voltage doubles the current.', hi: 'वोल्टता दोगुनी करने पर धारा दोगुनी हो जाती है।', kn: 'ವೋಲ್ಟೇಜ್ ಎರಡು ಪಟ್ಟಾದರೆ ವಿದ್ಯುತ್ ಎರಡು ಪಟ್ಟಾಗುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'elecVoltage', label: { en: 'Battery voltage', hi: 'बैटरी वोल्टता', kn: 'ಬ್ಯಾಟರಿ ವೋಲ್ಟೇಜ್' }, min: 1, max: 24, step: 1, unit: 'V' },
      { key: 'elecR1', label: { en: 'Resistor R₁', hi: 'प्रतिरोध R₁', kn: 'ರೋಧಕ R₁' }, min: 1, max: 50, step: 1, unit: 'Ω' },
      { key: 'elecR2', label: { en: 'Resistor R₂', hi: 'प्रतिरोध R₂', kn: 'ರೋಧಕ R₂' }, min: 1, max: 50, step: 1, unit: 'Ω' },
      {
        key: 'elecTopology',
        label: { en: 'Connection', hi: 'संयोजन', kn: 'ಸಂಪರ್ಕ' },
        min: 0, max: 1, step: 1, unit: '',
        choices: [
          { value: 'series', label: { en: 'Series', hi: 'श्रेणी', kn: 'ಶ್ರೇಣಿ' } },
          { value: 'parallel', label: { en: 'Parallel', hi: 'समांतर', kn: 'ಸಮಾಂತರ' } },
        ],
      },
    ],
  },
  magnetism: {
    what: {
      en: 'A bar magnet moves back and forth through a coil. The meter needle swings when the magnet moves.',
      hi: 'एक छड़ चुंबक कुंडली के भीतर आगे-पीछे चलता है। चुंबक के चलने पर मीटर की सुई हिलती है।',
      kn: 'ಕಂಬಿ ಆಯಸ್ಕಾಂತವು ಸುರುಳಿಯ ಮೂಲಕ ಹಿಂದೆ-ಮುಂದೆ ಚಲಿಸುತ್ತದೆ. ಆಯಸ್ಕಾಂತ ಚಲಿಸಿದಾಗ ಮೀಟರ್ ಮುಳ್ಳು ಅಲುಗಾಡುತ್ತದೆ.',
    },
    why: {
      en: 'The magnetic flux through the coil changes as the magnet moves. A changing flux creates a voltage. No motion means no voltage.',
      hi: 'चुंबक के चलने से कुंडली से गुजरने वाला चुंबकीय फ्लक्स बदलता है। बदलता फ्लक्स वोल्टता उत्पन्न करता है। गति नहीं तो वोल्टता नहीं।',
      kn: 'ಆಯಸ್ಕಾಂತ ಚಲಿಸಿದಾಗ ಸುರುಳಿಯ ಮೂಲಕ ಹಾದುಹೋಗುವ ಕಾಂತೀಯ ಫ್ಲಕ್ಸ್ ಬದಲಾಗುತ್ತದೆ. ಬದಲಾಗುವ ಫ್ಲಕ್ಸ್ ವೋಲ್ಟೇಜ್ ಉಂಟುಮಾಡುತ್ತದೆ. ಚಲನೆ ಇಲ್ಲದಿದ್ದರೆ ವೋಲ್ಟೇಜ್ ಇಲ್ಲ.',
    },
    principle: { en: "Faraday's law of electromagnetic induction and Lenz's law (the direction flips as the magnet reverses).", hi: 'फैराडे का विद्युत चुंबकीय प्रेरण नियम और लेंज़ का नियम (चुंबक की दिशा बदलने पर धारा की दिशा बदलती है)।', kn: 'ಫ್ಯಾರಡೆಯ ವಿದ್ಯುತ್ಕಾಂತೀಯ ಪ್ರೇರಣೆ ನಿಯಮ ಮತ್ತು ಲೆನ್ಜ್ ನಿಯಮ (ಆಯಸ್ಕಾಂತ ಹಿಮ್ಮುಖವಾದಾಗ ದಿಕ್ಕು ಬದಲಾಗುತ್ತದೆ).' },
    whatIf: [
      { en: 'More turns in the coil gives a larger voltage.', hi: 'कुंडली में अधिक फेरे होने पर वोल्टता अधिक मिलती है।', kn: 'ಸುರುಳಿಯಲ್ಲಿ ಹೆಚ್ಚು ಸುತ್ತುಗಳಿದ್ದರೆ ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚು.' },
      { en: 'Moving the magnet faster gives a larger voltage.', hi: 'चुंबक को तेज़ चलाने पर वोल्टता अधिक मिलती है।', kn: 'ಆಯಸ್ಕಾಂತವನ್ನು ವೇಗವಾಗಿ ಚಲಿಸಿದರೆ ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚು.' },
      { en: 'Pause the simulation: the voltage drops to zero.', hi: 'सिमुलेशन रोकें: वोल्टता शून्य हो जाती है।', kn: 'ಸಿಮ್ಯುಲೇಶನ್ ನಿಲ್ಲಿಸಿ: ವೋಲ್ಟೇಜ್ ಸೊನ್ನೆಯಾಗುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'magTurns', label: { en: 'Coil turns N', hi: 'कुंडली के फेरे N', kn: 'ಸುರುಳಿ ಸುತ್ತುಗಳು N' }, min: 10, max: 300, step: 10, unit: '' },
      { key: 'magSpeed', label: { en: 'Magnet speed', hi: 'चुंबक की चाल', kn: 'ಆಯಸ್ಕಾಂತದ ವೇಗ' }, min: 0.2, max: 3, step: 0.1, unit: '×' },
      { key: 'magField', label: { en: 'Magnet strength B', hi: 'चुंबक प्रबलता B', kn: 'ಆಯಸ್ಕಾಂತ ಬಲ B' }, min: 0.1, max: 2, step: 0.1, unit: 'T' },
    ],
  },
  optics: {
    what: {
      en: 'A light ray goes from one transparent material into another and bends at the boundary. At a steep angle it may reflect back completely.',
      hi: 'प्रकाश की किरण एक पारदर्शी पदार्थ से दूसरे में जाती है और सीमा पर मुड़ जाती है। अधिक कोण पर वह पूरी तरह वापस परावर्तित हो सकती है।',
      kn: 'ಬೆಳಕಿನ ಕಿರಣ ಒಂದು ಪಾರದರ್ಶಕ ವಸ್ತುವಿನಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಹೋಗುವಾಗ ಗಡಿಯಲ್ಲಿ ಬಾಗುತ್ತದೆ. ಹೆಚ್ಚು ಕೋನದಲ್ಲಿ ಅದು ಪೂರ್ತಿ ಪ್ರತಿಫಲಿಸಬಹುದು.',
    },
    why: {
      en: 'Light travels at different speeds in different materials. Changing speed at an angle makes the ray change direction.',
      hi: 'प्रकाश अलग-अलग पदार्थों में अलग चाल से चलता है। कोण पर चाल बदलने से किरण की दिशा बदल जाती है।',
      kn: 'ಬೆಳಕು ಬೇರೆ ಬೇರೆ ವಸ್ತುಗಳಲ್ಲಿ ಬೇರೆ ಬೇರೆ ವೇಗದಲ್ಲಿ ಚಲಿಸುತ್ತದೆ. ಕೋನದಲ್ಲಿ ವೇಗ ಬದಲಾದಾಗ ಕಿರಣದ ದಿಕ್ಕು ಬದಲಾಗುತ್ತದೆ.',
    },
    principle: { en: "Snell's law of refraction and total internal reflection.", hi: 'स्नेल का अपवर्तन नियम तथा पूर्ण आंतरिक परावर्तन।', kn: 'ಸ್ನೆಲ್ ವಕ್ರೀಭವನ ನಿಯಮ ಮತ್ತು ಪೂರ್ಣ ಆಂತರಿಕ ಪ್ರತಿಫಲನ.' },
    whatIf: [
      { en: 'Going into a denser material (higher n), the ray bends toward the normal.', hi: 'सघन माध्यम (अधिक n) में जाने पर किरण अभिलंब की ओर मुड़ती है।', kn: 'ಸಾಂದ್ರ ವಸ್ತು (ಹೆಚ್ಚು n) ಒಳಗೆ ಹೋದಾಗ ಕಿರಣ ಲಂಬದ ಕಡೆಗೆ ಬಾಗುತ್ತದೆ.' },
      { en: 'Set n₁ larger than n₂ and raise the angle: past the critical angle, total internal reflection appears.', hi: 'n₁ को n₂ से बड़ा रखें और कोण बढ़ाएँ: क्रांतिक कोण के बाद पूर्ण आंतरिक परावर्तन दिखता है।', kn: 'n₁ ಅನ್ನು n₂ ಗಿಂತ ದೊಡ್ಡದಾಗಿಸಿ ಕೋನ ಹೆಚ್ಚಿಸಿ: ಕ್ರಾಂತಿಕ ಕೋನ ಮೀರಿದಾಗ ಪೂರ್ಣ ಆಂತರಿಕ ಪ್ರತಿಫಲನ ಕಾಣುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'optAngle', label: { en: 'Angle of incidence', hi: 'आपतन कोण', kn: 'ಪತನ ಕೋನ' }, min: 0, max: 89, step: 1, unit: '°' },
      { key: 'optN1', label: { en: 'Refractive index n₁', hi: 'अपवर्तनांक n₁', kn: 'ವಕ್ರೀಭವನ ಸೂಚ್ಯಂಕ n₁' }, min: 1, max: 2.5, step: 0.01, unit: '' },
      { key: 'optN2', label: { en: 'Refractive index n₂', hi: 'अपवर्तनांक n₂', kn: 'ವಕ್ರೀಭವನ ಸೂಚ್ಯಂಕ n₂' }, min: 1, max: 2.5, step: 0.01, unit: '' },
    ],
  },
  waves: {
    what: {
      en: 'Two sound waves of slightly different pitch travel together. Their sum gets louder and softer again and again — these are beats.',
      hi: 'थोड़ी भिन्न आवृत्ति की दो ध्वनि तरंगें साथ चलती हैं। उनका योग बार-बार तेज़ और धीमा होता है — इन्हें विस्पंद कहते हैं।',
      kn: 'ಸ್ವಲ್ಪ ಬೇರೆ ಆವೃತ್ತಿಯ ಎರಡು ಧ್ವನಿ ತರಂಗಗಳು ಒಟ್ಟಿಗೆ ಚಲಿಸುತ್ತವೆ. ಅವುಗಳ ಮೊತ್ತ ಮತ್ತೆ ಮತ್ತೆ ಜೋರಾಗಿ ಮತ್ತು ಮೆಲ್ಲಗೆ ಆಗುತ್ತದೆ — ಇವು ಬೀಟ್ಸ್.',
    },
    why: {
      en: 'Sometimes the two waves rise together (louder) and sometimes one rises while the other falls (softer). The gap in frequency sets how fast this repeats.',
      hi: 'कभी दोनों तरंगें साथ-साथ ऊपर उठती हैं (तेज़) और कभी एक ऊपर तो दूसरी नीचे (धीमी)। आवृत्ति का अंतर तय करता है कि यह कितनी बार दोहराए।',
      kn: 'ಕೆಲವೊಮ್ಮೆ ಎರಡೂ ಒಟ್ಟಿಗೆ ಏರುತ್ತವೆ (ಜೋರು), ಕೆಲವೊಮ್ಮೆ ಒಂದು ಏರಿದರೆ ಇನ್ನೊಂದು ಇಳಿಯುತ್ತದೆ (ಮೆಲ್ಲಗೆ). ಆವೃತ್ತಿಯ ವ್ಯತ್ಯಾಸ ಇದು ಎಷ್ಟು ಬಾರಿ ಪುನರಾವರ್ತನೆ ಎಂದು ನಿರ್ಧರಿಸುತ್ತದೆ.',
    },
    principle: { en: 'Superposition of waves and the relation v = fλ.', hi: 'तरंगों का अध्यारोपण और संबंध v = fλ।', kn: 'ತರಂಗಗಳ ಅಧ್ಯಾರೋಪಣೆ ಮತ್ತು v = fλ ಸಂಬಂಧ.' },
    whatIf: [
      { en: 'Bring f₁ and f₂ closer: the beats become slower.', hi: 'f₁ और f₂ को पास लाएँ: विस्पंद धीमे हो जाते हैं।', kn: 'f₁ ಮತ್ತು f₂ ಹತ್ತಿರ ತಂದರೆ ಬೀಟ್ಸ್ ನಿಧಾನವಾಗುತ್ತವೆ.' },
      { en: 'Make f₁ = f₂: beats disappear.', hi: 'f₁ = f₂ करें: विस्पंद समाप्त हो जाते हैं।', kn: 'f₁ = f₂ ಮಾಡಿದರೆ ಬೀಟ್ಸ್ ಇಲ್ಲವಾಗುತ್ತವೆ.' },
    ],
    sliders: [
      { key: 'waveF1', label: { en: 'Frequency f₁', hi: 'आवृत्ति f₁', kn: 'ಆವೃತ್ತಿ f₁' }, min: 100, max: 1000, step: 1, unit: 'Hz' },
      { key: 'waveF2', label: { en: 'Frequency f₂', hi: 'आवृत्ति f₂', kn: 'ಆವೃತ್ತಿ f₂' }, min: 100, max: 1000, step: 1, unit: 'Hz' },
      { key: 'waveAmp', label: { en: 'Amplitude', hi: 'आयाम', kn: 'ವಿಸ್ತಾರ' }, min: 0.2, max: 2, step: 0.1, unit: '×' },
    ],
  },
  thermodynamics: {
    what: {
      en: 'Gas molecules move inside a container. The meter shows pressure, and the engine efficiency limit for the chosen hot and cold temperatures.',
      hi: 'गैस के अणु पात्र में घूमते हैं। मीटर दाब और चुने गए गर्म व ठंडे तापमान के लिए इंजन की अधिकतम दक्षता दिखाता है।',
      kn: 'ಅನಿಲ ಅಣುಗಳು ಪಾತ್ರೆಯೊಳಗೆ ಚಲಿಸುತ್ತವೆ. ಮೀಟರ್ ಒತ್ತಡ ಮತ್ತು ಆಯ್ದ ಬಿಸಿ ಹಾಗೂ ತಣ್ಣನೆಯ ತಾಪಮಾನಕ್ಕೆ ಎಂಜಿನ್ ಗರಿಷ್ಠ ದಕ್ಷತೆಯನ್ನು ತೋರಿಸುತ್ತದೆ.',
    },
    why: {
      en: 'Hotter molecules move faster and hit the walls harder, so pressure rises. Squeezing the same gas into less space also raises pressure.',
      hi: 'गर्म अणु तेज़ चलते हैं और दीवारों से ज़ोर से टकराते हैं, इसलिए दाब बढ़ता है। उसी गैस को कम जगह में दबाने पर भी दाब बढ़ता है।',
      kn: 'ಬಿಸಿ ಅಣುಗಳು ವೇಗವಾಗಿ ಚಲಿಸಿ ಗೋಡೆಗೆ ಜೋರಾಗಿ ಹೊಡೆಯುತ್ತವೆ, ಆದ್ದರಿಂದ ಒತ್ತಡ ಹೆಚ್ಚುತ್ತದೆ. ಅದೇ ಅನಿಲವನ್ನು ಕಡಿಮೆ ಜಾಗದಲ್ಲಿ ಒತ್ತಿದರೂ ಒತ್ತಡ ಹೆಚ್ಚುತ್ತದೆ.',
    },
    principle: { en: 'Ideal gas law and the Carnot limit on heat-engine efficiency (temperatures in kelvin).', hi: 'आदर्श गैस नियम और ऊष्मा इंजन की दक्षता की कार्नो सीमा (तापमान केल्विन में)।', kn: 'ಆದರ್ಶ ಅನಿಲ ನಿಯಮ ಮತ್ತು ಶಾಖ ಎಂಜಿನ್ ದಕ್ಷತೆಯ ಕಾರ್ನೋ ಮಿತಿ (ತಾಪಮಾನ ಕೆಲ್ವಿನ್‌ನಲ್ಲಿ).' },
    whatIf: [
      { en: 'Raise the temperature: pressure rises in proportion.', hi: 'तापमान बढ़ाएँ: दाब अनुपात में बढ़ता है।', kn: 'ತಾಪಮಾನ ಹೆಚ್ಚಿಸಿ: ಒತ್ತಡ ಅನುಪಾತದಲ್ಲಿ ಹೆಚ್ಚುತ್ತದೆ.' },
      { en: 'Halve the volume: pressure doubles.', hi: 'आयतन आधा करें: दाब दोगुना हो जाता है।', kn: 'ಗಾತ್ರ ಅರ್ಧ ಮಾಡಿ: ಒತ್ತಡ ಎರಡು ಪಟ್ಟಾಗುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'thermoTemp', label: { en: 'Gas temperature (hot)', hi: 'गैस का तापमान (गर्म)', kn: 'ಅನಿಲದ ತಾಪಮಾನ (ಬಿಸಿ)' }, min: 200, max: 900, step: 10, unit: 'K' },
      { key: 'thermoVol', label: { en: 'Volume', hi: 'आयतन', kn: 'ಗಾತ್ರ' }, min: 5, max: 50, step: 1, unit: 'L' },
      { key: 'thermoColdTemp', label: { en: 'Cold sink temperature', hi: 'ठंडे स्रोत का तापमान', kn: 'ತಣ್ಣನೆಯ ತಾಪಮಾನ' }, min: 100, max: 600, step: 10, unit: 'K' },
    ],
  },
  'double-slit': {
    what: { en: 'Light passes through two thin slits and makes bright and dark stripes on a screen.', hi: 'प्रकाश दो पतली झिर्रियों से गुजरकर पर्दे पर चमकीली और काली धारियाँ बनाता है।', kn: 'ಬೆಳಕು ಎರಡು ತೆಳು ಸೀಳುಗಳ ಮೂಲಕ ಹಾದು ಪರದೆಯ ಮೇಲೆ ಪ್ರಕಾಶಮಾನ ಮತ್ತು ಕಪ್ಪು ಪಟ್ಟಿಗಳನ್ನು ಮಾಡುತ್ತದೆ.' },
    why: { en: 'Waves from the two slits add up. Where crests meet crests, it is bright; where crests meet troughs, it is dark.', hi: 'दोनों झिर्रियों की तरंगें जुड़ती हैं। जहाँ शीर्ष-शीर्ष मिलते हैं वहाँ चमक, जहाँ शीर्ष-गर्त मिलते हैं वहाँ अँधेरा।', kn: 'ಎರಡು ಸೀಳುಗಳ ತರಂಗಗಳು ಕೂಡುತ್ತವೆ. ಶೃಂಗ-ಶೃಂಗ ಸೇರಿದಲ್ಲಿ ಪ್ರಕಾಶ; ಶೃಂಗ-ತಗ್ಗು ಸೇರಿದಲ್ಲಿ ಕತ್ತಲು.' },
    principle: { en: 'Interference of light — evidence that light behaves as a wave.', hi: 'प्रकाश का व्यतिकरण — प्रकाश के तरंग स्वभाव का प्रमाण।', kn: 'ಬೆಳಕಿನ ಅಡ್ಡಹಾಯುವಿಕೆ (ಇಂಟರ್ಫರೆನ್ಸ್) — ಬೆಳಕು ತರಂಗದಂತೆ ವರ್ತಿಸುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ಸಾಕ್ಷಿ.' },
    whatIf: [
      { en: 'Red light (longer wavelength) gives wider stripes than blue.', hi: 'लाल प्रकाश (अधिक तरंगदैर्ध्य) नीले से चौड़ी धारियाँ देता है।', kn: 'ಕೆಂಪು ಬೆಳಕು (ಹೆಚ್ಚು ತರಂಗಾಂತರ) ನೀಲಿಗಿಂತ ಅಗಲ ಪಟ್ಟಿಗಳನ್ನು ನೀಡುತ್ತದೆ.' },
      { en: 'Bringing the slits closer spreads the stripes further apart.', hi: 'झिर्रियों को पास लाने पर धारियाँ दूर-दूर हो जाती हैं।', kn: 'ಸೀಳುಗಳನ್ನು ಹತ್ತಿರ ತಂದರೆ ಪಟ್ಟಿಗಳು ಹೆಚ್ಚು ದೂರವಾಗುತ್ತವೆ.' },
    ],
    sliders: [
      { key: 'wavelengthNm', label: { en: 'Wavelength λ', hi: 'तरंगदैर्ध्य λ', kn: 'ತರಂಗಾಂತರ λ' }, min: 400, max: 700, step: 5, unit: 'nm' },
      { key: 'slitSepMm', label: { en: 'Slit separation d', hi: 'झिर्री दूरी d', kn: 'ಸೀಳುಗಳ ಅಂತರ d' }, min: 0.1, max: 1, step: 0.05, unit: 'mm' },
      { key: 'screenDistM', label: { en: 'Screen distance L', hi: 'पर्दे की दूरी L', kn: 'ಪರದೆಯ ದೂರ L' }, min: 0.5, max: 3, step: 0.1, unit: 'm' },
    ],
  },
  photoelectric: {
    what: { en: 'Light falls on a metal plate. Electrons come out only if the light is energetic enough.', hi: 'प्रकाश धातु की प्लेट पर पड़ता है। इलेक्ट्रॉन तभी निकलते हैं जब प्रकाश में पर्याप्त ऊर्जा हो।', kn: 'ಬೆಳಕು ಲೋಹದ ತಟ್ಟೆಯ ಮೇಲೆ ಬೀಳುತ್ತದೆ. ಬೆಳಕಿಗೆ ಸಾಕಷ್ಟು ಶಕ್ತಿ ಇದ್ದರೆ ಮಾತ್ರ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಹೊರಬರುತ್ತವೆ.' },
    why: { en: 'Light arrives in packets (photons). One photon must carry at least the work function energy to free one electron. Brighter light means more photons, not stronger ones.', hi: 'प्रकाश पैकेटों (फोटॉन) में आता है। एक इलेक्ट्रॉन मुक्त करने के लिए एक फोटॉन में कम से कम कार्य-फलन जितनी ऊर्जा चाहिए। तेज़ प्रकाश यानी अधिक फोटॉन, अधिक ऊर्जावान नहीं।', kn: 'ಬೆಳಕು ಪೊಟ್ಟಣಗಳಲ್ಲಿ (ಫೋಟಾನ್) ಬರುತ್ತದೆ. ಒಂದು ಎಲೆಕ್ಟ್ರಾನ್ ಬಿಡಿಸಲು ಒಂದು ಫೋಟಾನ್‌ಗೆ ಕನಿಷ್ಠ ಕಾರ್ಯ ಫಲನದಷ್ಟು ಶಕ್ತಿ ಬೇಕು. ಪ್ರಕಾಶಮಾನ ಹೆಚ್ಚು ಎಂದರೆ ಹೆಚ್ಚು ಫೋಟಾನ್, ಹೆಚ್ಚು ಶಕ್ತಿ ಅಲ್ಲ.' },
    principle: { en: "Einstein's photoelectric equation: K_max = hf − φ.", hi: 'आइंस्टीन का प्रकाश-विद्युत समीकरण: K_max = hf − φ।', kn: 'ಐನ್‌ಸ್ಟೈನ್ ದ್ಯುತಿವಿದ್ಯುತ್ ಸಮೀಕರಣ: K_max = hf − φ.' },
    whatIf: [
      { en: 'Use a shorter wavelength (more energy): electrons leave faster.', hi: 'कम तरंगदैर्ध्य (अधिक ऊर्जा) लें: इलेक्ट्रॉन तेज़ निकलते हैं।', kn: 'ಕಡಿಮೆ ತರಂಗಾಂತರ (ಹೆಚ್ಚು ಶಕ್ತಿ) ಬಳಸಿ: ಎಲೆಕ್ಟ್ರಾನ್ ವೇಗವಾಗಿ ಹೊರಬರುತ್ತವೆ.' },
      { en: 'Below the threshold wavelength, no electrons come out even at full intensity.', hi: 'देहली तरंगदैर्ध्य से ऊपर (कम ऊर्जा) पर पूरी तीव्रता में भी इलेक्ट्रॉन नहीं निकलते।', kn: 'ಮಿತಿ ತರಂಗಾಂತರಕ್ಕಿಂತ ಮೇಲೆ (ಕಡಿಮೆ ಶಕ್ತಿ) ಪೂರ್ಣ ತೀವ್ರತೆಯಲ್ಲೂ ಎಲೆಕ್ಟ್ರಾನ್ ಹೊರಬರುವುದಿಲ್ಲ.' },
    ],
    sliders: [
      { key: 'peWavelengthNm', label: { en: 'Light wavelength', hi: 'प्रकाश की तरंगदैर्ध्य', kn: 'ಬೆಳಕಿನ ತರಂಗಾಂತರ' }, min: 150, max: 600, step: 5, unit: 'nm' },
      { key: 'workFunctionEv', label: { en: 'Work function φ', hi: 'कार्य फलन φ', kn: 'ಕಾರ್ಯ ಫಲನ φ' }, min: 1.5, max: 5, step: 0.1, unit: 'eV' },
      { key: 'intensityPct', label: { en: 'Brightness', hi: 'तीव्रता', kn: 'ಪ್ರಕಾಶಮಾನ' }, min: 10, max: 100, step: 5, unit: '%' },
    ],
  },
  'bohr-atom': {
    what: { en: 'An electron jumps from an outer orbit to an inner orbit and the atom gives out light.', hi: 'इलेक्ट्रॉन बाहरी कक्षा से भीतरी कक्षा में कूदता है और परमाणु प्रकाश छोड़ता है।', kn: 'ಎಲೆಕ್ಟ್ರಾನ್ ಹೊರ ಕಕ್ಷೆಯಿಂದ ಒಳ ಕಕ್ಷೆಗೆ ಜಿಗಿಯುತ್ತದೆ ಮತ್ತು ಪರಮಾಣು ಬೆಳಕನ್ನು ಹೊರಸೂಸುತ್ತದೆ.' },
    why: { en: 'Electron energies are fixed levels. The light photon carries away exactly the energy difference between the two levels.', hi: 'इलेक्ट्रॉन की ऊर्जाएँ निश्चित स्तरों में होती हैं। फोटॉन दोनों स्तरों के ऊर्जा-अंतर के बराबर ऊर्जा ले जाता है।', kn: 'ಎಲೆಕ್ಟ್ರಾನ್ ಶಕ್ತಿಗಳು ನಿಗದಿತ ಮಟ್ಟಗಳು. ಫೋಟಾನ್ ಎರಡು ಮಟ್ಟಗಳ ಶಕ್ತಿ ವ್ಯತ್ಯಾಸವನ್ನೇ ಒಯ್ಯುತ್ತದೆ.' },
    principle: { en: "Bohr's model: quantised energy levels and photon emission.", hi: 'बोर मॉडल: क्वांटीकृत ऊर्जा स्तर और फोटॉन उत्सर्जन।', kn: 'ಬೋರ್ ಮಾದರಿ: ಕ್ವಾಂಟೀಕೃತ ಶಕ್ತಿ ಮಟ್ಟಗಳು ಮತ್ತು ಫೋಟಾನ್ ಹೊರಸೂಸುವಿಕೆ.' },
    whatIf: [
      { en: 'Jumps ending at n = 2 give visible light (Balmer series).', hi: 'n = 2 पर समाप्त होने वाले संक्रमण दृश्य प्रकाश देते हैं (बामर श्रेणी)।', kn: 'n = 2 ರಲ್ಲಿ ಕೊನೆಗೊಳ್ಳುವ ಜಿಗಿತಗಳು ಗೋಚರ ಬೆಳಕು ನೀಡುತ್ತವೆ (ಬ್ಯಾಮರ್ ಶ್ರೇಣಿ).' },
      { en: 'Bigger jump means higher energy and shorter wavelength.', hi: 'बड़ी छलांग यानी अधिक ऊर्जा और कम तरंगदैर्ध्य।', kn: 'ದೊಡ್ಡ ಜಿಗಿತ ಎಂದರೆ ಹೆಚ್ಚು ಶಕ್ತಿ ಮತ್ತು ಕಡಿಮೆ ತರಂಗಾಂತರ.' },
    ],
    sliders: [
      { key: 'nInitial', label: { en: 'Starting orbit n', hi: 'प्रारंभिक कक्षा n', kn: 'ಆರಂಭಿಕ ಕಕ್ಷೆ n' }, min: 2, max: 7, step: 1, unit: '' },
      { key: 'nFinal', label: { en: 'Ending orbit n', hi: 'अंतिम कक्षा n', kn: 'ಅಂತಿಮ ಕಕ್ಷೆ n' }, min: 1, max: 6, step: 1, unit: '' },
      { key: 'atomicZ', label: { en: 'Atomic number Z', hi: 'परमाणु क्रमांक Z', kn: 'ಪರಮಾಣು ಸಂಖ್ಯೆ Z' }, min: 1, max: 3, step: 1, unit: '' },
    ],
  },
  'quantum-tunneling': {
    what: { en: 'A particle meets an energy barrier that it does not have enough energy to climb. A small part of it still gets through.', hi: 'कण एक ऊर्जा-अवरोध से टकराता है जिसे पार करने की पर्याप्त ऊर्जा उसमें नहीं है। फिर भी उसका एक छोटा भाग पार हो जाता है।', kn: 'ಕಣವು ಏರಲು ಸಾಕಷ್ಟು ಶಕ್ತಿ ಇಲ್ಲದ ಶಕ್ತಿ ತಡೆಗೆ ಎದುರಾಗುತ್ತದೆ. ಆದರೂ ಅದರ ಸಣ್ಣ ಭಾಗ ಹಾದುಹೋಗುತ್ತದೆ.' },
    why: { en: 'Particles behave like waves, and a wave does not stop abruptly at a wall — it fades quickly inside it. If the wall is thin, some wave reaches the other side.', hi: 'कण तरंग की तरह व्यवहार करते हैं और तरंग दीवार पर अचानक नहीं रुकती — वह भीतर तेज़ी से क्षीण होती है। दीवार पतली हो तो कुछ तरंग दूसरी ओर पहुँच जाती है।', kn: 'ಕಣಗಳು ತರಂಗದಂತೆ ವರ್ತಿಸುತ್ತವೆ; ತರಂಗ ಗೋಡೆಯಲ್ಲಿ ತಟ್ಟನೆ ನಿಲ್ಲುವುದಿಲ್ಲ, ಒಳಗೆ ವೇಗವಾಗಿ ಕ್ಷೀಣಿಸುತ್ತದೆ. ಗೋಡೆ ತೆಳುವಾಗಿದ್ದರೆ ಸ್ವಲ್ಪ ತರಂಗ ಆಚೆ ತಲುಪುತ್ತದೆ.' },
    principle: { en: 'Quantum tunnelling: the wave nature of matter.', hi: 'क्वांटम टनलिंग: पदार्थ का तरंग स्वभाव।', kn: 'ಕ್ವಾಂಟಮ್ ಟನಲಿಂಗ್: ದ್ರವ್ಯದ ತರಂಗ ಸ್ವಭಾವ.' },
    whatIf: [
      { en: 'Making the barrier thinner increases the transmission sharply.', hi: 'अवरोध पतला करने पर पारगमन तेज़ी से बढ़ता है।', kn: 'ತಡೆಯನ್ನು ತೆಳುವಾಗಿಸಿದರೆ ಹಾದುಹೋಗುವಿಕೆ ಹೆಚ್ಚು ಹೆಚ್ಚುತ್ತದೆ.' },
      { en: 'A lower barrier also helps the particle through.', hi: 'कम ऊँचा अवरोध भी कण को पार होने में सहायता करता है।', kn: 'ಕಡಿಮೆ ಎತ್ತರದ ತಡೆಯೂ ಕಣ ಹಾದುಹೋಗಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.' },
    ],
    sliders: [
      { key: 'particleEnergyEv', label: { en: 'Particle energy E', hi: 'कण की ऊर्जा E', kn: 'ಕಣದ ಶಕ್ತಿ E' }, min: 0.5, max: 10, step: 0.1, unit: 'eV' },
      { key: 'barrierHeightEv', label: { en: 'Barrier height V₀', hi: 'अवरोध ऊँचाई V₀', kn: 'ತಡೆ ಎತ್ತರ V₀' }, min: 1, max: 10, step: 0.1, unit: 'eV' },
      { key: 'barrierWidthNm', label: { en: 'Barrier width a', hi: 'अवरोध चौड़ाई a', kn: 'ತಡೆ ಅಗಲ a' }, min: 0.1, max: 1.5, step: 0.05, unit: 'nm' },
    ],
  },
  'de-broglie': {
    what: { en: 'Electrons accelerated by a voltage scatter from a crystal like waves and form rings.', hi: 'वोल्टता से त्वरित इलेक्ट्रॉन क्रिस्टल से तरंग की तरह प्रकीर्णित होकर वलय बनाते हैं।', kn: 'ವೋಲ್ಟೇಜ್‌ನಿಂದ ವೇಗಗೊಂಡ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಹರಳಿನಿಂದ ತರಂಗದಂತೆ ಚದುರಿ ಉಂಗುರಗಳನ್ನು ಮಾಡುತ್ತವೆ.' },
    why: { en: 'Every moving particle has a wavelength λ = h/p. A faster particle has more momentum and a shorter wavelength.', hi: 'हर गतिमान कण की तरंगदैर्ध्य λ = h/p होती है। तेज़ कण का संवेग अधिक और तरंगदैर्ध्य कम होती है।', kn: 'ಚಲಿಸುವ ಪ್ರತಿ ಕಣಕ್ಕೂ ತರಂಗಾಂತರ λ = h/p ಇರುತ್ತದೆ. ವೇಗವಾದ ಕಣಕ್ಕೆ ಹೆಚ್ಚು ಸಂವೇಗ ಮತ್ತು ಕಡಿಮೆ ತರಂಗಾಂತರ.' },
    principle: { en: 'de Broglie matter waves and Bragg diffraction.', hi: 'डी ब्रॉग्ली पदार्थ तरंगें और ब्रैग विवर्तन।', kn: 'ಡಿ ಬ್ರಾಗ್ಲಿ ದ್ರವ್ಯ ತರಂಗಗಳು ಮತ್ತು ಬ್ರಾಗ್ ವಿವರ್ತನೆ.' },
    whatIf: [
      { en: 'Raise the voltage: the wavelength shrinks (λ ∝ 1/√V).', hi: 'वोल्टता बढ़ाएँ: तरंगदैर्ध्य घटती है (λ ∝ 1/√V)।', kn: 'ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚಿಸಿ: ತರಂಗಾಂತರ ಕಡಿಮೆಯಾಗುತ್ತದೆ (λ ∝ 1/√V).' },
      { en: 'A proton has a much shorter wavelength than an electron at the same voltage.', hi: 'समान वोल्टता पर प्रोटॉन की तरंगदैर्ध्य इलेक्ट्रॉन से बहुत कम होती है।', kn: 'ಅದೇ ವೋಲ್ಟೇಜ್‌ನಲ್ಲಿ ಪ್ರೋಟಾನ್‌ನ ತರಂಗಾಂತರ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಿಂತ ಬಹಳ ಕಡಿಮೆ.' },
    ],
    sliders: [
      { key: 'accelVoltageV', label: { en: 'Accelerating voltage', hi: 'त्वरक वोल्टता', kn: 'ವೇಗವರ್ಧಕ ವೋಲ್ಟೇಜ್' }, min: 10, max: 1000, step: 10, unit: 'V' },
      { key: 'crystalSpacingNm', label: { en: 'Crystal spacing d', hi: 'क्रिस्टल अंतराल d', kn: 'ಹರಳಿನ ಅಂತರ d' }, min: 0.05, max: 0.5, step: 0.01, unit: 'nm' },
      {
        key: 'particleType',
        label: { en: 'Particle', hi: 'कण', kn: 'ಕಣ' },
        min: 0, max: 1, step: 1, unit: '',
        choices: [
          { value: 'electron', label: { en: 'Electron', hi: 'इलेक्ट्रॉन', kn: 'ಎಲೆಕ್ಟ್ರಾನ್' } },
          { value: 'proton', label: { en: 'Proton', hi: 'प्रोटॉन', kn: 'ಪ್ರೋಟಾನ್' } },
        ],
      },
    ],
  },
};
