import type { Language, LocalizedText, PhysicsTopicId } from '../types/stem';

export type QuantumExperimentId =
  | 'double-slit'
  | 'photoelectric'
  | 'bohr-atom'
  | 'quantum-tunneling'
  | 'de-broglie';

export type ExperimentId = QuantumExperimentId | PhysicsTopicId;

export type ExperimentCategory = 'quantum' | 'basic';

export interface ExperimentParamValues {
  // Double-Slit
  wavelengthNm: number;
  slitSepMm: number;
  screenDistM: number;
  // Photoelectric
  peWavelengthNm: number;
  workFunctionEv: number;
  intensityPct: number;
  // Bohr Atom
  nInitial: number;
  nFinal: number;
  atomicZ: number;
  // Quantum Tunneling
  particleEnergyEv: number;
  barrierHeightEv: number;
  barrierWidthNm: number;
  // De Broglie
  accelVoltageV: number;
  crystalSpacingNm: number;
  particleType: 'electron' | 'proton';
  // Mechanics
  mechAngle: number;
  mechVelocity: number;
  mechGravity: number;
  mechMass: number;
  // Electricity
  elecVoltage: number;
  elecR1: number;
  elecR2: number;
  elecTopology: 'series' | 'parallel';
  // Magnetism
  magTurns: number;
  magSpeed: number;
  magField: number;
  // Optics
  optAngle: number;
  optN1: number;
  optN2: number;
  // Waves
  waveF1: number;
  waveF2: number;
  waveAmp: number;
  // Thermodynamics
  thermoTemp: number;
  thermoVol: number;
  thermoColdTemp: number;
}

export const DEFAULT_EXPERIMENT_PARAMS: ExperimentParamValues = {
  wavelengthNm: 532,
  slitSepMm: 0.4,
  screenDistM: 1.5,
  peWavelengthNm: 260,
  workFunctionEv: 2.3,
  intensityPct: 70,
  nInitial: 3,
  nFinal: 2,
  atomicZ: 1,
  particleEnergyEv: 4.0,
  barrierHeightEv: 6.5,
  barrierWidthNm: 0.6,
  accelVoltageV: 120,
  crystalSpacingNm: 0.21,
  particleType: 'electron',
  mechAngle: 45,
  mechVelocity: 24,
  mechGravity: 9.81,
  mechMass: 2.0,
  elecVoltage: 12,
  elecR1: 10,
  elecR2: 20,
  elecTopology: 'series',
  magTurns: 80,
  magSpeed: 1.2,
  magField: 1.5,
  optAngle: 32,
  optN1: 1.52,
  optN2: 1.0,
  waveF1: 260,
  waveF2: 264,
  waveAmp: 1.0,
  thermoTemp: 320,
  thermoVol: 4.0,
  thermoColdTemp: 220,
};

export interface ExperimentDefinition {
  id: ExperimentId;
  category: ExperimentCategory;
  title: LocalizedText;
  shortName: LocalizedText;
  subtitle: LocalizedText;
  formula: string;
  concept: LocalizedText;
}

export const EXPERIMENT_DEFINITIONS: ExperimentDefinition[] = [
  // Quantum Physics
  {
    id: 'double-slit',
    category: 'quantum',
    title: {
      en: 'Double-Slit Experiment',
      hi: 'डबल-स्लिट प्रयोग',
      kn: 'ಡಬಲ್-ಸ್ಲಿಟ್ ಪ್ರಯೋಗ',
    },
    shortName: {
      en: 'Double-Slit Experiment',
      hi: 'डबल-स्लिट प्रयोग',
      kn: 'ಡಬಲ್-ಸ್ಲಿಟ್ ಪ್ರಯೋಗ',
    },
    subtitle: {
      en: 'Quantum wave interference fringes through two coherent slits',
      hi: 'दो स्लिट्स से क्वांटम तरंग व्यतिकरण फ्रिंज पैटर्न',
      kn: 'ಎರಡು ಸ್ಲಿಟ್‌ಗಳ ಮೂಲಕ ಕ್ವಾಂಟಮ್ ತರಂಗ ವ್ಯತಿಕರಣ ಪಟ್ಟಿಗಳು',
    },
    formula: 'β = (λ · L) / d   |   d sin θ = mλ   |   E = hc / λ',
    concept: {
      en: 'Even single photons or electrons interfere with themselves as probability waves, creating alternating bright constructive and dark destructive fringes on the screen.',
      hi: 'एकल फोटॉन या इलेक्ट्रॉन भी संभाव्यता तरंग की तरह स्वयं से व्यतिकरण करते हैं, जिससे स्क्रीन पर चमकीली और गहरी पट्टियाँ बनती हैं।',
      kn: 'ಒಂಟಿ ಫೋಟಾನ್ ಅಥವಾ ಎಲೆಕ್ಟ್ರಾನ್ ಕೂಡ ಸಂಭವನೀಯ ತರಂಗದಂತೆ ವರ್ತಿಸಿ ಪರದೆಯ ಮೇಲೆ ಬೆಳಕು ಮತ್ತು ಕತ್ತಲೆಯ ಪಟ್ಟಿಗಳನ್ನು ರಚಿಸುತ್ತದೆ.',
    },
  },
  {
    id: 'photoelectric',
    category: 'quantum',
    title: {
      en: 'Photoelectric Effect',
      hi: 'प्रकाश-विद्युत प्रभाव',
      kn: 'ಫೋಟೋಎಲೆಕ್ಟ್ರಿಕ್ ಪರಿಣಾಮ',
    },
    shortName: {
      en: 'Photoelectric Effect',
      hi: 'प्रकाश-विद्युत प्रभाव',
      kn: 'ಫೋಟೋಎಲೆಕ್ಟ್ರಿಕ್ ಪರಿಣಾಮ',
    },
    subtitle: {
      en: 'Photon energy ejection of electrons above threshold frequency',
      hi: 'देहली आवृत्ति से अधिक ऊर्जा पर इलेक्ट्रॉनों का उत्सर्जन',
      kn: 'ಮಿತಿ ಆವರ್ತನಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಶಕ್ತಿಯಲ್ಲಿ ಎಲೆಕ್ಟ್ರಾನ್ ಹೊರಸೂಸುವಿಕೆ',
    },
    formula: 'K_max = (hc / λ) − φ   |   eV_s = K_max   |   λ₀ = hc / φ',
    concept: {
      en: 'Light delivers energy in discrete packets (photons). Electrons escape only when photon energy hc/λ exceeds the metal work function φ.',
      hi: 'प्रकाश ऊर्जा फोटॉन पैकेट में आती है। इलेक्ट्रॉन तभी बाहर निकलते हैं जब फोटॉन ऊर्जा धातु के कार्य फलन φ से अधिक हो।',
      kn: 'ಬೆಳಕು ಫೋಟಾನ್ ಪ್ಯಾಕೆಟ್‌ಗಳಲ್ಲಿ ಬರುತ್ತದೆ. ಫೋಟಾನ್ ಶಕ್ತಿ ಲೋಹದ ವರ್ಕ್ ಫಂಕ್ಷನ್ φ ಗಿಂತ ಹೆಚ್ಚಿದ್ದಾಗ ಮಾತ್ರ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಹೊರಬರುತ್ತವೆ.',
    },
  },
  {
    id: 'bohr-atom',
    category: 'quantum',
    title: {
      en: 'Bohr Hydrogen Atom',
      hi: 'बोर हाइड्रोजन परमाणु',
      kn: 'ಬೋರ್ ಹೈಡ್ರೋಜನ್ ಪರಮಾಣು',
    },
    shortName: {
      en: 'Bohr Atom Transitions',
      hi: 'बोर परमाणु संक्रमण',
      kn: 'ಬೋರ್ ಪರಮಾಣು ಪರಿವರ್ತನೆ',
    },
    subtitle: {
      en: 'Quantized electron shells & spectral photon emission',
      hi: 'क्वांटित इलेक्ट्रॉन कक्षाएँ और फोटॉन उत्सर्जन',
      kn: 'ಕ್ವಾಂಟೀಕೃತ ಎಲೆಕ್ಟ್ರಾನ್ ಕಕ್ಷೆಗಳು ಮತ್ತು ಫೋಟಾನ್ ಹೊರಸೂಸುವಿಕೆ',
    },
    formula: 'E_n = −13.6 · Z² / n² eV   |   ΔE = E_i − E_f = hc / λ',
    concept: {
      en: 'Electrons occupy discrete stationary orbits. Jumping from a higher shell nᵢ to a lower shell n_f emits a single photon with exact energy ΔE.',
      hi: 'इलेक्ट्रॉन निश्चित कक्षाओं में रहते हैं। ऊँची कक्षा से निचली कक्षा में कूदने पर ठीक ΔE ऊर्जा का फोटॉन निकलता है।',
      kn: 'ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ನಿರ್ದಿಷ್ಟ ಕಕ್ಷೆಗಳಲ್ಲಿರುತ್ತವೆ. ಮೇಲಿನ ಕಕ್ಷೆಯಿಂದ ಕೆಳಗಿನ ಕಕ್ಷೆಗೆ ಜಿಗಿದಾಗ ΔE ಶಕ್ತಿಯ ಫೋಟಾನ್ ಹೊರಬರುತ್ತದೆ.',
    },
  },
  {
    id: 'quantum-tunneling',
    category: 'quantum',
    title: {
      en: 'Quantum Tunneling',
      hi: 'क्वांटम टनलिंग',
      kn: 'ಕ್ವಾಂಟಮ್ ಟನೆಲಿಂಗ್',
    },
    shortName: {
      en: 'Quantum Tunneling',
      hi: 'क्वांटम टनलिंग',
      kn: 'ಕ್ವಾಂಟಮ್ ಟನೆಲಿಂಗ್',
    },
    subtitle: {
      en: 'Wavefunction penetration across a potential energy barrier',
      hi: 'विभव अवरोध के पार क्वांटम तरंग का पारगमन',
      kn: 'ವಿಭವ ತಡೆಗೋಡೆಯ ಮೂಲಕ ಕ್ವಾಂಟಮ್ ತರಂಗ ಹಾಯುವಿಕೆ',
    },
    formula: 'κ = √(2m(V₀ − E)) / ℏ   |   T ≈ 16(E/V₀)(1 − E/V₀)·e^(−2κa)',
    concept: {
      en: 'Unlike a classical ball, a quantum particle has a non-zero probability of tunneling straight through a thin barrier even when E < V₀.',
      hi: 'क्वांटम कण अपनी तरंग प्रकृति के कारण ऊर्जा कम (E < V₀) होने पर भी पतले अवरोध के पार जा सकता है।',
      kn: 'ಶಾಸ್ತ್ರೀಯ ಚೆಂಡಿಗಿಂತ ಭಿನ್ನವಾಗಿ, ಕ್ವಾಂಟಮ್ ಕಣವು E < V₀ ಇದ್ದರೂ ತೆಳುವಾದ ತಡೆಗೋಡೆಯನ್ನು ದಾಟಿ ಹೋಗುವ ಸಾಧ್ಯತೆ ಹೊಂದಿದೆ.',
    },
  },
  {
    id: 'de-broglie',
    category: 'quantum',
    title: {
      en: 'De Broglie Matter Waves',
      hi: 'डी ब्रोग्ली द्रव्य तरंगें',
      kn: 'ಡಿ ಬ್ರೋಗ್ಲಿ ದ್ರವ್ಯ ತರಂಗಗಳು',
    },
    shortName: {
      en: 'De Broglie Matter Waves',
      hi: 'डी ब्रोग्ली द्रव्य तरंगें',
      kn: 'ಡಿ ಬ್ರೋಗ್ಲಿ ತರಂಗಗಳು',
    },
    subtitle: {
      en: 'Electron crystal diffraction & wave-particle duality',
      hi: 'इलेक्ट्रॉन क्रिस्टल विवर्तन और तरंग-कण द्वैत',
      kn: 'ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ಫಟಿಕ ವಿವರ್ತನೆ ಮತ್ತು ತರಂಗ-ಕಣ ದ್ವಂದ್ವತೆ',
    },
    formula: 'λ = h / p = h / √(2mqV)   |   2 d sin θ = λ',
    concept: {
      en: 'Moving particles behave like waves with wavelength λ = h/p. Higher accelerating voltage shortens λ and shrinks the crystal diffraction rings.',
      hi: 'गतिमान कण λ = h/p तरंगदैर्ध्य वाली तरंग की तरह व्यवहार करते हैं। वोल्टेज बढ़ाने पर λ घटता है और विवर्तन वलय सिकुड़ते हैं।',
      kn: 'ಚಲಿಸುವ ಕಣಗಳು λ = h/p ತರಂಗಾಂತರದ ತರಂಗಗಳಂತೆ ವರ್ತಿಸುತ್ತವೆ. ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚಾದಂತೆ ವಿವರ್ತನೆ ಉಂಗುರಗಳು ಚಿಕ್ಕದಾಗುತ್ತವೆ.',
    },
  },

  // Basic & Classical Physics
  {
    id: 'mechanics',
    category: 'basic',
    title: {
      en: 'Projectile Motion Mission',
      hi: 'प्रक्षेप्य गति मिशन',
      kn: 'ಪ್ರಕ್ಷೇಪಕ ಚಲನೆ ಮಿಷನ್',
    },
    shortName: {
      en: 'Projectile Motion',
      hi: 'प्रक्षेप्य गति',
      kn: 'ಪ್ರಕ್ಷೇಪಕ ಚಲನೆ',
    },
    subtitle: {
      en: '2D mission challenge, interactive tutorial & 3D parabolic trajectory',
      hi: '2D लक्ष्य मिशन, ट्यूटोरियल और 3D प्रक्षेप पथ',
      kn: '2D ಗುರಿ ಮಿಷನ್, ಟ್ಯುಟೋರಿಯಲ್ ಮತ್ತು 3D ಪಥ',
    },
    formula: 'R = v² sin(2θ) / g   |   H = (v sin θ)² / (2g)   |   T = 2v sin θ / g',
    concept: {
      en: 'Horizontal speed stays constant while gravity accelerates the ball downward. In vacuum, mass does not change range or height.',
      hi: 'क्षैतिज वेग स्थिर रहता है जबकि गुरुत्वाकर्षण नीचे की ओर खींचता है। निर्वात में द्रव्यमान बदलने से परास नहीं बदलता।',
      kn: 'ಸಮತಲ ವೇಗ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ, ಗುರುತ್ವಾಕರ್ಷಣೆ ಕೆಳಗೆ ಎಳೆಯುತ್ತದೆ. ನಿರ್ವಾತದಲ್ಲಿ ದ್ರವ್ಯರಾಶಿಯಿಂದ ದೂರ ಬದಲಾಗುವುದಿಲ್ಲ.',
    },
  },
  {
    id: 'electricity',
    category: 'basic',
    title: {
      en: "Ohm's Law & DC Circuits",
      hi: 'ओम का नियम और DC परिपथ',
      kn: 'ಓಮ್ ನಿಯಮ ಮತ್ತು DC ಸರ್ಕ್ಯೂಟ್',
    },
    shortName: {
      en: "Ohm's Law & Circuits",
      hi: 'ओम का नियम और परिपथ',
      kn: 'ಓಮ್ ನಿಯಮ ಮತ್ತು ಸರ್ಕ್ಯೂಟ್',
    },
    subtitle: {
      en: 'Series & parallel resistor networks, current drift & power',
      hi: 'श्रेणी और समानांतर प्रतिरोध, धारा और शक्ति',
      kn: 'ಸರಣಿ ಮತ್ತು ಸಮಾನಾಂತರ ರೋಧಕಗಳು, ವಿದ್ಯುತ್ ಪ್ರವಾಹ',
    },
    formula: 'V = I · R_eq   |   R_s = R₁ + R₂   |   1/R_p = 1/R₁ + 1/R₂   |   P = V·I',
    concept: {
      en: 'Parallel paths reduce total resistance and draw more current from the battery than the same two resistors wired in series.',
      hi: 'समानांतर पथ कुल प्रतिरोध घटाते हैं और श्रेणीक्रम की तुलना में अधिक धारा प्रवाहित करते हैं।',
      kn: 'ಸಮಾನಾಂತರ ಮಾರ್ಗಗಳು ಒಟ್ಟು ರೋಧವನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಹೆಚ್ಚಿನ ವಿದ್ಯುತ್ ಪ್ರವಾಹವನ್ನು ಹರಿಸುತ್ತವೆ.',
    },
  },
  {
    id: 'magnetism',
    category: 'basic',
    title: {
      en: 'Electromagnet & Faraday Induction',
      hi: 'विद्युतचुंबक और फैराडे प्रेरण',
      kn: 'ವಿದ್ಯುತ್ಕಾಂತ ಮತ್ತು ಫ್ಯಾರಡೆ ಪ್ರೇರಣೆ',
    },
    shortName: {
      en: 'Magnetism & Induction',
      hi: 'चुंबकत्व और प्रेरण',
      kn: 'ಕಾಂತೀಯತೆ ಮತ್ತು ಪ್ರೇರಣೆ',
    },
    subtitle: {
      en: '3D copper solenoid & oscillating bar magnet EMF',
      hi: '3D तांबे की कुंडली और प्रेरित विद्युत वाहक बल',
      kn: '3D ತಾಮ್ರದ ಕಾಯಿಲ್ ಮತ್ತು ಪ್ರೇರಿತ ವಿದ್ಯುತ್ ಬಲ',
    },
    formula: 'ε = −N · (dΦ_B / dt)   |   Φ_B = B · A · cos θ',
    concept: {
      en: 'Moving a magnet faster or adding more coil turns N increases the rate of magnetic flux change and produces a higher induced voltage.',
      hi: 'चुंबक को तेज़ चलाने या कुंडली के फेरे N बढ़ाने से चुंबकीय फ्लक्स परिवर्तन बढ़ता है और प्रेरित वोल्टेज बढ़ता है।',
      kn: 'ಕಾಂತವನ್ನು ವೇಗವಾಗಿ ಚಲಿಸಿದಾಗ ಅಥವಾ ಕಾಯಿಲ್ ಸುತ್ತುಗಳನ್ನು ಹೆಚ್ಚಿಸಿದಾಗ ಪ್ರೇರಿತ ವೋಲ್ಟೇಜ್ ಹೆಚ್ಚಾಗುತ್ತದೆ.',
    },
  },
  {
    id: 'optics',
    category: 'basic',
    title: {
      en: 'Optical Prism & Refraction',
      hi: 'प्रकाशीय प्रिज्म और अपवर्तन',
      kn: 'ದೃಗ್ವಿಜ್ಞಾನ ಪ್ರಿಸ್ಮ್ ಮತ್ತು ವಕ್ರೀಭವನ',
    },
    shortName: {
      en: 'Optical Prism & Snell Law',
      hi: 'प्रिज्म और स्नेल का नियम',
      kn: 'ಪ್ರಿಸ್ಮ್ ಮತ್ತು ಸ್ನೆಲ್ ನಿಯಮ',
    },
    subtitle: {
      en: "Snell's law refraction, dispersion spectrum & critical angle",
      hi: 'स्नेल का नियम, वर्ण विक्षेपण और क्रांतिक कोण',
      kn: 'ಸ್ನೆಲ್ ನಿಯಮ, ವರ್ಣ ವಿಭಜನೆ ಮತ್ತು ಕ್ರಾಂತಿ ಕೋನ',
    },
    formula: 'n₁ sin(θ₁) = n₂ sin(θ₂)   |   sin(θ_c) = n₂ / n₁',
    concept: {
      en: 'Light bends toward or away from the normal when changing speed between media. Exceeding θ_c when n₁ > n₂ causes Total Internal Reflection.',
      hi: 'माध्यम बदलने पर प्रकाश मुड़ता है। जब n₁ > n₂ और θ₁ > θ_c हो, तो पूर्ण आंतरिक परावर्तन होता है।',
      kn: 'ಮಾಧ್ಯಮ ಬದಲಾದಾಗ ಬೆಳಕು ಬಾಗುತ್ತದೆ. θ₁ > θ_c ಆದಾಗ ಸಂಪೂರ್ಣ ಆಂತರಿಕ ಪ್ರತಿಫಲನ ಸಂಭವಿಸುತ್ತದೆ.',
    },
  },
  {
    id: 'waves',
    category: 'basic',
    title: {
      en: 'Waves, Beats & Interference',
      hi: 'तरंगें, विस्पंद और ध्वनि',
      kn: 'ತರಂಗಗಳು, ಬೀಟ್ಸ್ ಮತ್ತು ಧ್ವನಿ',
    },
    shortName: {
      en: 'Waves & Sound',
      hi: 'तरंगें और ध्वनि',
      kn: 'ತರಂಗಗಳು ಮತ್ತು ಧ್ವನಿ',
    },
    subtitle: {
      en: 'Superposition of two frequencies & beat frequency',
      hi: 'दो तरंगों का अध्यारोपण और विस्पंद आवृत्ति',
      kn: 'ಎರಡು ತರಂಗಗಳ ಅಧ್ಯಾರೋಪಣ ಮತ್ತು ಬೀಟ್ ಆವರ್ತನ',
    },
    formula: 'v = f · λ   |   f_beat = |f₁ − f₂|',
    concept: {
      en: 'Two close frequencies interfere constructively and destructively in time, producing audible beat pulses at rate |f₁ − f₂|.',
      hi: 'दो निकट आवृत्तियाँ समय के साथ मिलकर |f₁ − f₂| दर से विस्पंद उत्पन्न करती हैं।',
      kn: 'ಎರಡು ಹತ್ತಿರದ ಆವರ್ತನಗಳು ಸೇರಿ |f₁ − f₂| ದರದಲ್ಲಿ ಬೀಟ್‌ಗಳನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ.',
    },
  },
  {
    id: 'thermodynamics',
    category: 'basic',
    title: {
      en: 'Ideal Gas & Thermodynamics',
      hi: 'आदर्श गैस और ऊष्मागतिकी',
      kn: 'ಆದರ್ಶ ಅನಿಲ ಮತ್ತು ಉಷ್ಣಬಲವಿಜ್ಞಾನ',
    },
    shortName: {
      en: 'Thermodynamics & Gas Law',
      hi: 'ऊष्मागतिकी और गैस नियम',
      kn: 'ಉಷ್ಣಬಲವಿಜ್ಞಾನ',
    },
    subtitle: {
      en: 'Molecular kinetic motion, gas pressure & Carnot efficiency',
      hi: 'अणुओं की गति, गैस दाब और कार्नो दक्षता',
      kn: 'ಅಣುಗಳ ಚಲನೆ, ಅನಿಲ ಒತ್ತಡ ಮತ್ತು ಕಾರ್ನೋ ದಕ್ಷತೆ',
    },
    formula: 'P · V = n · R · T   |   η_max = 1 − (T_c / T_h)',
    concept: {
      en: 'Heating gas raises average molecular speed and chamber pressure P = nRT/V. Compressing volume V raises pressure proportionally.',
      hi: 'तापमान बढ़ाने से अणु तेज़ चलते हैं और दाब P = nRT/V बढ़ता है। आयतन घटाने पर भी दाब बढ़ता है।',
      kn: 'ತಾಪಮಾನ ಹೆಚ್ಚಿದಂತೆ ಅಣುಗಳ ವೇಗ ಮತ್ತು ಒತ್ತಡ P = nRT/V ಹೆಚ್ಚಾಗುತ್ತದೆ.',
    },
  },
];

export interface ExperimentComputation {
  metrics: { label: string; value: string; unit?: string; accent?: 'teal' | 'amber' | 'emerald' }[];
  steps: string[];
  readingParameterSummary: string;
  readingMeasuredSummary: string;
  readingCalculatedSummary: string;
  extra: {
    wavelengthHex?: string;
    fringeWidthMm?: number;
    photonEnergyEv?: number;
    kMaxEv?: number;
    stoppingV?: number;
    thresholdNm?: number;
    emittedPhoton?: boolean;
    deltaEEv?: number;
    bohrLambdaNm?: number;
    spectralSeries?: string;
    tunnelProb?: number;
    reflectProb?: number;
    deBroglieNm?: number;
    braggDeg?: number;
    photocurrentMa?: number;
    pressureKpa?: number;
  };
}

export function wavelengthToHex(nm: number): string {
  if (nm < 380) return '#a855f7'; // UV represented as violet glow
  if (nm < 440) return '#8b5cf6';
  if (nm < 490) return '#3b82f6';
  if (nm < 510) return '#06b6d4';
  if (nm < 580) return '#22c55e';
  if (nm < 610) return '#eab308';
  if (nm < 645) return '#f97316';
  if (nm <= 750) return '#ef4444';
  return '#dc2626';
}

export function computeExperiment(
  id: ExperimentId,
  p: ExperimentParamValues,
  magLive?: { emf: number; flux: number }
): ExperimentComputation {
  switch (id) {
    case 'double-slit': {
      const lambdaM = p.wavelengthNm * 1e-9;
      const dM = p.slitSepMm * 1e-3;
      const L = p.screenDistM;
      const betaM = (lambdaM * L) / dM;
      const betaMm = betaM * 1e3;
      const sinTheta1 = Math.min(1, lambdaM / dM);
      const theta1Deg = (Math.asin(sinTheta1) * 180) / Math.PI;
      const photonEv = 1239.84 / p.wavelengthNm;
      return {
        metrics: [
          { label: 'Fringe Width (β)', value: `${betaMm.toFixed(2)} mm`, accent: 'teal' },
          { label: '1st Order Angle (θ₁)', value: `${theta1Deg.toFixed(3)}°`, accent: 'amber' },
          { label: 'Photon Energy (E)', value: `${photonEv.toFixed(2)} eV`, accent: 'emerald' },
        ],
        steps: [
          `Convert SI values: λ = ${p.wavelengthNm} nm = ${lambdaM.toExponential(2)} m, d = ${p.slitSepMm.toFixed(2)} mm = ${dM.toExponential(2)} m, L = ${L.toFixed(2)} m.`,
          `Fringe separation β = (λ · L) / d = (${lambdaM.toExponential(2)} × ${L.toFixed(2)}) / ${dM.toExponential(2)} = ${betaMm.toFixed(3)} mm.`,
          `First bright maximum angle θ₁ = arcsin(λ / d) = arcsin(${(lambdaM / dM).toFixed(5)}) = ${theta1Deg.toFixed(3)}°.`,
          `Individual photon energy E = hc / λ = 1239.84 / ${p.wavelengthNm} = ${photonEv.toFixed(2)} eV.`,
        ],
        readingParameterSummary: `λ=${p.wavelengthNm}nm, d=${p.slitSepMm.toFixed(2)}mm, L=${L.toFixed(1)}m`,
        readingMeasuredSummary: `β = ${betaMm.toFixed(2)} mm`,
        readingCalculatedSummary: `θ₁=${theta1Deg.toFixed(3)}°, E=${photonEv.toFixed(2)}eV`,
        extra: {
          wavelengthHex: wavelengthToHex(p.wavelengthNm),
          fringeWidthMm: betaMm,
          photonEnergyEv: photonEv,
        },
      };
    }

    case 'photoelectric': {
      const ePhoton = 1239.84 / p.peWavelengthNm;
      const emitted = ePhoton > p.workFunctionEv;
      const kMax = Math.max(0, ePhoton - p.workFunctionEv);
      const stoppingV = kMax;
      const thresholdNm = 1239.84 / p.workFunctionEv;
      const photocurrentMa = emitted ? (p.intensityPct / 100) * (1.2 + kMax * 0.35) : 0;
      return {
        metrics: [
          { label: 'Photon Energy (hf)', value: `${ePhoton.toFixed(2)} eV`, accent: 'teal' },
          { label: 'Max Kinetic (K_max)', value: `${kMax.toFixed(2)} eV`, accent: emitted ? 'emerald' : 'amber' },
          { label: 'Threshold λ₀', value: `${thresholdNm.toFixed(0)} nm`, accent: 'amber' },
        ],
        steps: [
          `Photon energy E = hc / λ = 1239.84 / ${p.peWavelengthNm} nm = ${ePhoton.toFixed(2)} eV.`,
          `Compare with metal work function φ = ${p.workFunctionEv.toFixed(2)} eV (Threshold λ₀ = 1239.84 / ${p.workFunctionEv.toFixed(2)} = ${thresholdNm.toFixed(1)} nm).`,
          emitted
            ? `Since E > φ, electrons are emitted! K_max = E − φ = ${ePhoton.toFixed(2)} − ${p.workFunctionEv.toFixed(2)} = ${kMax.toFixed(2)} eV.`
            : `Since E ≤ φ, no electrons escape regardless of light intensity (${p.intensityPct}%).`,
          `Stopping potential V_s = K_max / e = ${stoppingV.toFixed(2)} V · Photocurrent ≈ ${photocurrentMa.toFixed(2)} mA.`,
        ],
        readingParameterSummary: `λ=${p.peWavelengthNm}nm, φ=${p.workFunctionEv.toFixed(2)}eV, I=${p.intensityPct}%`,
        readingMeasuredSummary: emitted ? `K_max=${kMax.toFixed(2)} eV` : `No Emission (E ≤ φ)`,
        readingCalculatedSummary: `V_s=${stoppingV.toFixed(2)}V, i=${photocurrentMa.toFixed(2)}mA`,
        extra: {
          wavelengthHex: wavelengthToHex(p.peWavelengthNm),
          photonEnergyEv: ePhoton,
          kMaxEv: kMax,
          stoppingV,
          thresholdNm,
          emittedPhoton: emitted,
          photocurrentMa,
        },
      };
    }

    case 'bohr-atom': {
      const ni = Math.max(2, p.nInitial);
      const nf = Math.min(ni - 1, Math.max(1, p.nFinal));
      const z2 = p.atomicZ * p.atomicZ;
      const eInitial = (-13.6 * z2) / (ni * ni);
      const eFinal = (-13.6 * z2) / (nf * nf);
      const deltaE = eInitial - eFinal;
      const lambdaNm = 1239.84 / Math.max(deltaE, 0.01);
      const series =
        nf === 1 ? 'Lyman (UV)' : nf === 2 ? 'Balmer (Visible)' : nf === 3 ? 'Paschen (IR)' : nf === 4 ? 'Brackett (IR)' : nf === 5 ? 'Pfund (IR)' : 'Humphreys (IR)';
      return {
        metrics: [
          { label: 'Transition ΔE', value: `${deltaE.toFixed(2)} eV`, accent: 'teal' },
          { label: 'Emitted λ', value: `${lambdaNm.toFixed(1)} nm`, accent: 'amber' },
          { label: 'Spectral Series', value: series, accent: 'emerald' },
        ],
        steps: [
          `Initial shell energy E_${ni} = −13.6 × ${p.atomicZ}² / ${ni}² = ${eInitial.toFixed(2)} eV.`,
          `Final shell energy E_${nf} = −13.6 × ${p.atomicZ}² / ${nf}² = ${eFinal.toFixed(2)} eV.`,
          `Emitted photon energy ΔE = E_${ni} − E_${nf} = (${eInitial.toFixed(2)}) − (${eFinal.toFixed(2)}) = ${deltaE.toFixed(2)} eV.`,
          `Photon wavelength λ = hc / ΔE = 1239.84 / ${deltaE.toFixed(2)} = ${lambdaNm.toFixed(1)} nm (${series}).`,
        ],
        readingParameterSummary: `Z=${p.atomicZ}, nᵢ=${ni} → n_f=${nf}`,
        readingMeasuredSummary: `ΔE = ${deltaE.toFixed(2)} eV`,
        readingCalculatedSummary: `λ=${lambdaNm.toFixed(1)}nm (${series})`,
        extra: {
          deltaEEv: deltaE,
          bohrLambdaNm: lambdaNm,
          spectralSeries: series,
          wavelengthHex: wavelengthToHex(lambdaNm),
        },
      };
    }

    case 'quantum-tunneling': {
      const E = p.particleEnergyEv;
      const V0 = p.barrierHeightEv;
      const aNm = p.barrierWidthNm;
      let T = 1.0;
      let kappaNmInv = 0;
      if (E < V0) {
        // For electron in eV & nm: sqrt(2m_e / hbar^2) ≈ 5.123 nm^-1 * sqrt(eV)
        kappaNmInv = 5.123 * Math.sqrt(V0 - E);
        const sinhVal = Math.sinh(kappaNmInv * aNm);
        const denom = 1 + (V0 * V0 * sinhVal * sinhVal) / Math.max(4 * E * (V0 - E), 1e-4);
        T = 1 / denom;
      } else {
        // Over-barrier: T = [1 + V0² sin²(k₂a) / (4E(E−V0))]⁻¹, k₂ = √(2m(E−V0))/ℏ
        const dE = Math.max(E - V0, 1e-4);
        const k2 = 5.123 * Math.sqrt(dE);
        T = 1 / (1 + (V0 * V0 * Math.pow(Math.sin(k2 * aNm), 2)) / (4 * E * dE));
      }
      const R = Math.max(0, 1 - T);
      return {
        metrics: [
          { label: 'Transmission (T)', value: `${(T * 100).toFixed(2)}%`, accent: 'emerald' },
          { label: 'Reflection (R)', value: `${(R * 100).toFixed(2)}%`, accent: 'amber' },
          { label: 'Decay Rate (κ)', value: E < V0 ? `${kappaNmInv.toFixed(2)} nm⁻¹` : 'Propagating', accent: 'teal' },
        ],
        steps: [
          `Particle energy E = ${E.toFixed(2)} eV, barrier height V₀ = ${V0.toFixed(2)} eV, width a = ${aNm.toFixed(2)} nm.`,
          E < V0
            ? `Decay constant κ = √(2m(V₀ − E))/ℏ = 5.123 × √(${(V0 - E).toFixed(2)}) = ${kappaNmInv.toFixed(2)} nm⁻¹.`
            : `Since E ≥ V₀, the particle passes over the barrier but is still partly reflected: T = [1 + V₀² sin²(k₂a) / (4E(E−V₀))]⁻¹ with k₂ = √(2m(E−V₀))/ℏ.`,
          E < V0
            ? `Barrier transmission T = [1 + V₀² sinh²(κa) / (4E(V₀−E))]⁻¹ = ${(T * 100).toFixed(2)}%.`
            : `Transmission T = ${(T * 100).toFixed(2)}%.`,
          `Probability check: T + R = ${(T * 100).toFixed(2)}% + ${(R * 100).toFixed(2)}% = 100.00%.`,
        ],
        readingParameterSummary: `E=${E.toFixed(1)}eV, V₀=${V0.toFixed(1)}eV, a=${aNm.toFixed(2)}nm`,
        readingMeasuredSummary: `T = ${(T * 100).toFixed(2)}%`,
        readingCalculatedSummary: `R=${(R * 100).toFixed(2)}%, κ=${kappaNmInv.toFixed(2)}/nm`,
        extra: {
          tunnelProb: T,
          reflectProb: R,
        },
      };
    }

    case 'de-broglie': {
      const h = 6.626e-34;
      const e = 1.602e-19;
      const mass = p.particleType === 'electron' ? 9.109e-31 : 1.673e-27;
      const K = e * p.accelVoltageV;
      const momentum = Math.sqrt(2 * mass * K);
      const lambdaM = h / momentum;
      const lambdaNm = lambdaM * 1e9;
      const dM = p.crystalSpacingNm * 1e-9;
      const ratio = lambdaM / (2 * dM);
      const braggDeg = ratio <= 1 ? (Math.asin(ratio) * 180) / Math.PI : 90;
      return {
        metrics: [
          { label: 'De Broglie λ', value: `${lambdaNm.toFixed(4)} nm`, accent: 'teal' },
          { label: 'Momentum (p)', value: `${(momentum * 1e24).toFixed(2)}×10⁻²⁴ kg·m/s`, accent: 'amber' },
          { label: 'Bragg Angle (θ)', value: ratio <= 1 ? `${braggDeg.toFixed(1)}°` : 'λ > 2d (No ring)', accent: 'emerald' },
        ],
        steps: [
          `Kinetic energy K = q·V = ${p.accelVoltageV} eV = ${K.toExponential(2)} J (${p.particleType}).`,
          `Momentum p = √(2mK) = ${momentum.toExponential(3)} kg·m/s.`,
          `De Broglie wavelength λ = h / p = ${lambdaNm.toFixed(4)} nm.`,
          `First crystal diffraction sin θ = λ / (2d) = ${ratio.toFixed(3)} → θ = ${ratio <= 1 ? `${braggDeg.toFixed(1)}°` : 'N/A (λ exceeds 2d)'}.`,
        ],
        readingParameterSummary: `${p.particleType}, V=${p.accelVoltageV}V, d=${p.crystalSpacingNm.toFixed(2)}nm`,
        readingMeasuredSummary: `λ = ${lambdaNm.toFixed(4)} nm`,
        readingCalculatedSummary: ratio <= 1 ? `θ_Bragg=${braggDeg.toFixed(1)}°` : `No Bragg ring`,
        extra: {
          deBroglieNm: lambdaNm,
          braggDeg,
        },
      };
    }

    case 'mechanics': {
      const rad = (p.mechAngle * Math.PI) / 180;
      const tFlight = (2 * p.mechVelocity * Math.sin(rad)) / p.mechGravity;
      const maxHeight = Math.pow(p.mechVelocity * Math.sin(rad), 2) / (2 * p.mechGravity);
      const range = (Math.pow(p.mechVelocity, 2) * Math.sin(2 * rad)) / p.mechGravity;
      const ke0 = 0.5 * p.mechMass * p.mechVelocity * p.mechVelocity;
      return {
        metrics: [
          { label: 'Range (R)', value: `${range.toFixed(2)} m`, accent: 'teal' },
          { label: 'Max Height (H)', value: `${maxHeight.toFixed(2)} m`, accent: 'amber' },
          { label: 'Flight Time (T)', value: `${tFlight.toFixed(2)} s`, accent: 'emerald' },
        ],
        steps: [
          `Components: vₓ = v₀ cos(${p.mechAngle}°) = ${(p.mechVelocity * Math.cos(rad)).toFixed(2)} m/s, v_y = v₀ sin(${p.mechAngle}°) = ${(p.mechVelocity * Math.sin(rad)).toFixed(2)} m/s.`,
          `Time of flight T = 2·v_y / g = ${(2 * p.mechVelocity * Math.sin(rad)).toFixed(2)} / ${p.mechGravity.toFixed(2)} = ${tFlight.toFixed(2)} s.`,
          `Maximum height H = v_y² / (2g) = ${maxHeight.toFixed(2)} m (independent of mass ${p.mechMass.toFixed(1)} kg).`,
          `Horizontal range R = v₀² sin(2θ) / g = ${range.toFixed(2)} m · Launch KE₀ = ${ke0.toFixed(0)} J.`,
        ],
        readingParameterSummary: `θ=${p.mechAngle}°, v₀=${p.mechVelocity}m/s, g=${p.mechGravity.toFixed(2)}`,
        readingMeasuredSummary: `R = ${range.toFixed(2)} m`,
        readingCalculatedSummary: `H=${maxHeight.toFixed(2)}m, T=${tFlight.toFixed(2)}s`,
        extra: {},
      };
    }

    case 'electricity': {
      const req =
        p.elecTopology === 'series'
          ? p.elecR1 + p.elecR2
          : (p.elecR1 * p.elecR2) / Math.max(p.elecR1 + p.elecR2, 0.01);
      const current = p.elecVoltage / Math.max(req, 0.01);
      const power = p.elecVoltage * current;
      return {
        metrics: [
          { label: 'Equivalent R_eq', value: `${req.toFixed(2)} Ω`, accent: 'teal' },
          { label: 'Current (I)', value: `${current.toFixed(2)} A`, accent: 'emerald' },
          { label: 'Power (P)', value: `${power.toFixed(2)} W`, accent: 'amber' },
        ],
        steps: [
          p.elecTopology === 'series'
            ? `Series combination: R_eq = R₁ + R₂ = ${p.elecR1} + ${p.elecR2} = ${req.toFixed(2)} Ω.`
            : `Parallel combination: R_eq = (R₁·R₂)/(R₁+R₂) = (${p.elecR1}×${p.elecR2})/(${p.elecR1 + p.elecR2}) = ${req.toFixed(2)} Ω.`,
          `By Ohm's Law: I = V / R_eq = ${p.elecVoltage} / ${req.toFixed(2)} = ${current.toFixed(2)} A.`,
          `Electrical Power dissipated: P = V · I = ${p.elecVoltage} × ${current.toFixed(2)} = ${power.toFixed(2)} W.`,
        ],
        readingParameterSummary: `${p.elecTopology}, V=${p.elecVoltage}V, R₁=${p.elecR1}Ω, R₂=${p.elecR2}Ω`,
        readingMeasuredSummary: `I = ${current.toFixed(2)} A`,
        readingCalculatedSummary: `R_eq=${req.toFixed(2)}Ω, P=${power.toFixed(1)}W`,
        extra: {},
      };
    }

    case 'magnetism': {
      const emf = magLive?.emf ?? p.magTurns * p.magField * 0.01 * p.magSpeed * 2.2;
      const flux = magLive?.flux ?? p.magField * 0.008; // A = 0.008 m² coil area
      return {
        metrics: [
          { label: 'Induced EMF (ε)', value: `${emf.toFixed(2)} V`, accent: 'teal' },
          { label: 'Flux (Φ_B)', value: `${(flux * 1000).toFixed(2)} mWb`, accent: 'emerald' },
          { label: 'Coil Turns (N)', value: `${p.magTurns} turns`, accent: 'amber' },
        ],
        steps: [
          `Coil parameters: N = ${p.magTurns} turns, Magnetic Field B = ${p.magField.toFixed(1)} T, Magnet speed factor = ${p.magSpeed.toFixed(1)}×.`,
          `Peak Magnetic Flux Φ_B = B · A ≈ ${(flux * 1000).toFixed(2)} mWb.`,
          `By Faraday's Law |ε| = N |dΦ_B / dt|, increasing N or speed scales induced voltage proportionally (${emf.toFixed(2)} V live).`,
        ],
        readingParameterSummary: `N=${p.magTurns}, B=${p.magField.toFixed(1)}T, v=${p.magSpeed.toFixed(1)}×`,
        readingMeasuredSummary: `ε = ${emf.toFixed(2)} V`,
        readingCalculatedSummary: `Φ = ${(flux * 1000).toFixed(2)} mWb`,
        extra: {},
      };
    }

    case 'optics': {
      const theta1Rad = (p.optAngle * Math.PI) / 180;
      const sinTheta2 = (p.optN1 / p.optN2) * Math.sin(theta1Rad);
      const tir = Math.abs(sinTheta2) > 1;
      const theta2Deg = tir ? p.optAngle : (Math.asin(sinTheta2) * 180) / Math.PI;
      const criticalDeg = p.optN1 > p.optN2 ? (Math.asin(p.optN2 / p.optN1) * 180) / Math.PI : null;
      return {
        metrics: [
          { label: 'Refracted θ₂', value: tir ? 'TIR Reflected' : `${theta2Deg.toFixed(1)}°`, accent: 'teal' },
          { label: 'Critical Angle θ_c', value: criticalDeg ? `${criticalDeg.toFixed(1)}°` : 'N/A (n₁ ≤ n₂)', accent: 'amber' },
          { label: 'Index Ratio n₁/n₂', value: `${(p.optN1 / p.optN2).toFixed(2)}×`, accent: 'emerald' },
        ],
        steps: [
          `Snell's Law: n₁ sin θ₁ = n₂ sin θ₂ → ${p.optN1.toFixed(2)} × sin(${p.optAngle}°) = ${p.optN2.toFixed(2)} × sin θ₂.`,
          `Computed sin θ₂ = ${sinTheta2.toFixed(3)}.`,
          tir
            ? `Since |sin θ₂| > 1 (${criticalDeg ? `θ₁ > θ_c = ${criticalDeg.toFixed(1)}°` : ''}), Total Internal Reflection occurs!`
            : `Refracted angle θ₂ = arcsin(${sinTheta2.toFixed(3)}) = ${theta2Deg.toFixed(1)}°.`,
        ],
        readingParameterSummary: `θ₁=${p.optAngle}°, n₁=${p.optN1.toFixed(2)}, n₂=${p.optN2.toFixed(2)}`,
        readingMeasuredSummary: tir ? 'Total Internal Reflection' : `θ₂ = ${theta2Deg.toFixed(1)}°`,
        readingCalculatedSummary: criticalDeg ? `θ_c=${criticalDeg.toFixed(1)}°` : `n₁/n₂=${(p.optN1 / p.optN2).toFixed(2)}`,
        extra: {},
      };
    }

    case 'waves': {
      const vSound = 343;
      const lambda1 = vSound / p.waveF1;
      const beatFreq = Math.abs(p.waveF1 - p.waveF2);
      return {
        metrics: [
          { label: 'Beat Frequency', value: `${beatFreq} Hz`, accent: 'amber' },
          { label: 'Wavelength λ₁', value: `${lambda1.toFixed(3)} m`, accent: 'teal' },
          { label: 'Wave Speed', value: `${vSound} m/s`, accent: 'emerald' },
        ],
        steps: [
          `Wavelength of wave 1: λ₁ = v / f₁ = ${vSound} / ${p.waveF1} = ${lambda1.toFixed(3)} m.`,
          `Wavelength of wave 2: λ₂ = v / f₂ = ${vSound} / ${p.waveF2} = ${(vSound / p.waveF2).toFixed(3)} m.`,
          `Beat frequency f_beat = |f₁ − f₂| = |${p.waveF1} − ${p.waveF2}| = ${beatFreq} Hz.`,
        ],
        readingParameterSummary: `f₁=${p.waveF1}Hz, f₂=${p.waveF2}Hz, A=${p.waveAmp.toFixed(1)}×`,
        readingMeasuredSummary: `f_beat = ${beatFreq} Hz`,
        readingCalculatedSummary: `λ₁ = ${lambda1.toFixed(3)} m`,
        extra: {},
      };
    }

    case 'thermodynamics': {
      const nMoles = 1.5;
      const R = 8.314;
      const pressureKpa = (nMoles * R * p.thermoTemp) / p.thermoVol;
      const carnotEff = Math.max(0, (1 - Math.min(p.thermoColdTemp, p.thermoTemp - 10) / p.thermoTemp) * 100);
      return {
        metrics: [
          { label: 'Pressure (P)', value: `${pressureKpa.toFixed(1)} kPa`, accent: 'amber' },
          { label: 'Temperature (T_h)', value: `${p.thermoTemp} K`, accent: 'teal' },
          { label: 'Carnot Max η', value: `${carnotEff.toFixed(1)}%`, accent: 'emerald' },
        ],
        steps: [
          `Ideal Gas Law (n = 1.5 mol): P = nRT / V = (1.5 × 8.314 × ${p.thermoTemp}) / ${p.thermoVol.toFixed(1)} = ${pressureKpa.toFixed(1)} kPa.`,
          `Hot source T_h = ${p.thermoTemp} K, cold sink T_c = ${Math.min(p.thermoColdTemp, p.thermoTemp - 10)} K.`,
          `Maximum Carnot Efficiency η = 1 − T_c / T_h = ${carnotEff.toFixed(1)}%.`,
        ],
        readingParameterSummary: `T_h=${p.thermoTemp}K, V=${p.thermoVol.toFixed(1)}L, T_c=${p.thermoColdTemp}K`,
        readingMeasuredSummary: `P = ${pressureKpa.toFixed(1)} kPa`,
        readingCalculatedSummary: `η_Carnot = ${carnotEff.toFixed(1)}%`,
        extra: {
          pressureKpa,
        },
      };
    }
  }
}

export function getExperimentTitle(id: ExperimentId, language: Language): string {
  return EXPERIMENT_DEFINITIONS.find((e) => e.id === id)?.title[language] ?? id;
}
