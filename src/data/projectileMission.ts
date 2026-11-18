import type { LocalizedText, QuizQuestion } from '../types/stem';

export interface ProjectileMission {
  id: string;
  title: LocalizedText;
  scenario: LocalizedText;
  targetDistance: number; // meters
  tolerance: number; // +/- meters
  defaultGravity: number;
  gravityLabel: LocalizedText;
  starterAngle: number;
  starterVelocity: number;
  predictionPrompt: LocalizedText;
  predictionOptions: LocalizedText[];
  predictionCorrectIndex: number;
  predictionExplanation: LocalizedText;
}

export const PROJECTILE_MISSIONS: ProjectileMission[] = [
  {
    id: 'mission-village-pass',
    title: {
      en: 'Mission 1: Cricket Boundary Throw (45 m)',
      hi: 'मिशन 1: क्रिकेट बाउंड्री थ्रो (45 m)',
      kn: 'ಮಿಷನ್ 1: ಕ್ರಿಕೆಟ್ ಬೌಂಡರಿ ಎಸೆತ (45 m)',
    },
    scenario: {
      en: 'A fielder throws a cricket ball across a flat school ground to reach the wicket-keeper 45.0 m away. Predict, adjust angle & speed, and land inside the ±2.5 m target zone.',
      hi: 'एक खिलाड़ी समतल स्कूल मैदान में 45.0 m दूर खड़े विकेटकीपर तक गेंद फेंकना चाहता है। पहले अनुमान लगाएँ, फिर कोण व वेग बदलकर ±2.5 m लक्ष्य क्षेत्र में गेंद पहुँचाएँ।',
      kn: 'ಒಬ್ಬ ಆಟಗಾರನು ಸಮತಟ್ಟಾದ ಶಾಲಾ ಮೈದಾನದಲ್ಲಿ 45.0 m ದೂರದಲ್ಲಿರುವ ವಿಕೆಟ್ ಕೀಪರ್‌ಗೆ ಚೆಂಡನ್ನು ಎಸೆಯಬೇಕು. ಮೊದಲು ಊಹಿಸಿ, ನಂತರ ಕೋನ ಮತ್ತು ವೇಗವನ್ನು ಹೊಂದಿಸಿ ±2.5 m ಗುರಿ ವಲಯಕ್ಕೆ ತಲುಪಿಸಿ.',
    },
    targetDistance: 45,
    tolerance: 2.5,
    defaultGravity: 9.81,
    gravityLabel: {
      en: 'Earth (g = 9.81 m/s²)',
      hi: 'पृथ्वी (g = 9.81 m/s²)',
      kn: 'ಭೂಮಿ (g = 9.81 m/s²)',
    },
    starterAngle: 30,
    starterVelocity: 20,
    predictionPrompt: {
      en: 'Before launching: With speed = 20 m/s and angle = 30° on Earth, where will the ball land compared to 45 m?',
      hi: 'प्रक्षेपण से पहले अनुमान: पृथ्वी पर 20 m/s चाल और 30° कोण से गेंद 45 m लक्ष्य से कहाँ गिरेगी?',
      kn: 'ಉಡಾವಣೆಗೆ ಮೊದಲು ಊಹೆ: ಭೂಮಿಯ ಮೇಲೆ 20 m/s ವೇಗ ಮತ್ತು 30° ಕೋನದಲ್ಲಿ ಚೆಂಡು 45 m ಗುರಿಗೆ ಹೋಲಿಸಿದರೆ ಎಲ್ಲಿ ಬೀಳುತ್ತದೆ?',
    },
    predictionOptions: [
      {
        en: 'Short of 45 m (around 35 m)',
        hi: '45 m से कम दूरी पर (लगभग 35 m)',
        kn: '45 m ಗಿಂತ ಕಡಿಮೆ ದೂರದಲ್ಲಿ (ಸುಮಾರು 35 m)',
      },
      {
        en: 'Right on 45 m',
        hi: 'ठीक 45 m पर',
        kn: 'ಸರಿಯಾಗಿ 45 m ಮೇಲೆ',
      },
      {
        en: 'Far beyond 45 m (over 60 m)',
        hi: '45 m से बहुत आगे (60 m से अधिक)',
        kn: '45 m ಗಿಂತ ಬಹಳ ಮುಂದೆ (60 m ಗಿಂತ ಹೆಚ್ಚು)',
      },
    ],
    predictionCorrectIndex: 0,
    predictionExplanation: {
      en: 'At v₀ = 20 m/s and θ = 30°, R = (20² × sin 60°) / 9.81 ≈ 35.3 m—about 9.7 m short of the 45 m target.',
      hi: 'v₀ = 20 m/s और θ = 30° पर, R = (20² × sin 60°) / 9.81 ≈ 35.3 m होता है—जो 45 m लक्ष्य से लगभग 9.7 m कम है।',
      kn: 'v₀ = 20 m/s ಮತ್ತು θ = 30° ನಲ್ಲಿ, R = (20² × sin 60°) / 9.81 ≈ 35.3 m ಆಗುತ್ತದೆ—ಇದು 45 m ಗುರಿಗಿಂತ ಸುಮಾರು 9.7 m ಕಡಿಮೆಯಾಗಿದೆ.',
    },
  },
  {
    id: 'mission-canal-supply',
    title: {
      en: 'Mission 2: High-Arc Over Wall (60 m)',
      hi: 'मिशन 2: ऊँची चाप से लक्ष्य पार (60 m)',
      kn: 'ಮಿಷನ್ 2: ಎತ್ತರದ ಕಮಾನು ಎಸೆತ (60 m)',
    },
    scenario: {
      en: 'Deliver a practice sensor pod 60.0 m across a courtyard. Notice how two complementary angles (like 35° and 55°) give the exact same range!',
      hi: 'आँगन के पार 60.0 m दूर एक अभ्यास सेंसर पॉड पहुँचाएँ। देखें कि कैसे दो पूरक कोण (जैसे 35° और 55°) बिल्कुल समान परास देते हैं!',
      kn: 'ಮೈದಾನದ ಆಚೆ 60.0 m ದೂರದಲ್ಲಿರುವ ಗುರಿಗೆ ಅಭ್ಯಾಸ ಪಾಡ್ ಅನ್ನು ತಲುಪಿಸಿ. ಎರಡು ಪೂರಕ ಕೋನಗಳು (ಉದಾ. 35° ಮತ್ತು 55°) ಒಂದೇ ದೂರ ನೀಡುವುದನ್ನು ಗಮನಿಸಿ!',
    },
    targetDistance: 60,
    tolerance: 2.5,
    defaultGravity: 9.81,
    gravityLabel: {
      en: 'Earth (g = 9.81 m/s²)',
      hi: 'पृथ्वी (g = 9.81 m/s²)',
      kn: 'ಭೂಮಿ (g = 9.81 m/s²)',
    },
    starterAngle: 65,
    starterVelocity: 24,
    predictionPrompt: {
      en: 'If you keep speed fixed at 24 m/s and compare 30° vs 60°, how do their horizontal ranges compare (ignoring air resistance)?',
      hi: 'यदि चाल 24 m/s स्थिर रखें, तो 30° और 60° पर क्षैतिज परास (वायु प्रतिरोध न मानने पर) कैसे होंगे?',
      kn: 'ವೇಗವನ್ನು 24 m/s ನಲ್ಲಿ ಸ್ಥಿರವಾಗಿಟ್ಟರೆ, 30° ಮತ್ತು 60° ಕೋನಗಳಲ್ಲಿ ಸಮತಲ ದೂರ (ಗಾಳಿಯ ಪ್ರತಿರೋಧವಿಲ್ಲದೆ) ಹೇಗಿರುತ್ತದೆ?',
    },
    predictionOptions: [
      {
        en: '60° goes twice as far as 30°',
        hi: '60° पर परास 30° से दोगुना होगा',
        kn: '60° ಕೋನದಲ್ಲಿ ದೂರವು 30° ಗಿಂತ ಎರಡು ಪಟ್ಟು ಇರುತ್ತದೆ',
      },
      {
        en: 'Both land at the exact same distance, though 60° goes higher',
        hi: 'दोनों ठीक एक ही दूरी पर गिरेंगे, पर 60° अधिक ऊँचाई तक जाएगा',
        kn: 'ಎರಡೂ ಒಂದೇ ದೂರದಲ್ಲಿ ಬೀಳುತ್ತವೆ, ಆದರೆ 60° ಹೆಚ್ಚು ಎತ್ತರಕ್ಕೆ ಏರುತ್ತದೆ',
      },
      {
        en: '30° always goes farther than 60°',
        hi: '30° हमेशा 60° से अधिक दूर जाता है',
        kn: '30° ಯಾವಾಗಲೂ 60° ಗಿಂತ ಹೆಚ್ಚು ದೂರ ಹೋಗುತ್ತದೆ',
      },
    ],
    predictionCorrectIndex: 1,
    predictionExplanation: {
      en: 'Because sin(2 × 30°) = sin(60°) = sin(120°) = sin(2 × 60°), complementary angles produce identical ideal range, while 60° gives greater height and flight time.',
      hi: 'चूँकि sin(60°) = sin(120°), इसलिए पूरक कोण (30° व 60°) समान आदर्श परास देते हैं, जबकि 60° अधिक ऊँचाई व उड्डयन समय देता है।',
      kn: 'sin(60°) = sin(120°) ಆಗಿರುವುದರಿಂದ ಪೂರಕ ಕೋನಗಳು ಒಂದೇ ಆದರ್ಶ ದೂರವನ್ನು ನೀಡುತ್ತವೆ; ಆದರೆ 60° ಹೆಚ್ಚಿನ ಎತ್ತರ ಮತ್ತು ಹಾರಾಟದ ಸಮಯವನ್ನು ನೀಡುತ್ತದೆ.',
    },
  },
  {
    id: 'mission-lunar-rover',
    title: {
      en: 'Mission 3: Moon Gravity Experiment (75 m)',
      hi: 'मिशन 3: चंद्रमा गुरुत्व प्रयोग (75 m)',
      kn: 'ಮಿಷನ್ 3: ಚಂದ್ರನ ಗುರುತ್ವ ಪ್ರಯೋಗ (75 m)',
    },
    scenario: {
      en: 'Test projectile motion under Lunar gravity (g = 1.62 m/s²). Because gravity pulls downward 6× more weakly than on Earth, even moderate speeds fly very far!',
      hi: 'चंद्रमा के गुरुत्व (g = 1.62 m/s²) में प्रक्षेप्य गति का परीक्षण करें। पृथ्वी से 6 गुना कम गुरुत्व होने के कारण कम वेग पर भी गेंद बहुत दूर जाती है!',
      kn: 'ಚಂದ್ರನ ಗುರುತ್ವದಲ್ಲಿ (g = 1.62 m/s²) ಪ್ರಕ್ಷೇಪಕ ಚಲನೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ. ಭೂಮಿಗಿಂತ 6 ಪಟ್ಟು ಕಡಿಮೆ ಗುರುತ್ವ ಇರುವುದರಿಂದ ಮಧ್ಯಮ ವೇಗದಲ್ಲೂ ಚೆಂಡು ಬಹಳ ದೂರ ಹಾರುತ್ತದೆ!',
    },
    targetDistance: 75,
    tolerance: 3.0,
    defaultGravity: 1.62,
    gravityLabel: {
      en: 'Moon (g = 1.62 m/s²)',
      hi: 'चंद्रमा (g = 1.62 m/s²)',
      kn: 'ಚಂದ್ರ (g = 1.62 m/s²)',
    },
    starterAngle: 45,
    starterVelocity: 16,
    predictionPrompt: {
      en: 'If you keep speed and angle unchanged and lower gravity g to Moon gravity (1/6 of Earth), what happens to the range?',
      hi: 'यदि चाल और कोण वही रखकर गुरुत्व को चंद्रमा (पृथ्वी का 1/6) कर दें, तो परास पर क्या प्रभाव पड़ेगा?',
      kn: 'ವೇಗ ಮತ್ತು ಕೋನವನ್ನು ಬದಲಾಯಿಸದೆ ಗುರುತ್ವವನ್ನು ಚಂದ್ರನ ಗುರುತ್ವಕ್ಕೆ (ಭೂಮಿಯ 1/6) ಇಳಿಸಿದರೆ ದೂರ ಏನಾಗುತ್ತದೆ?',
    },
    predictionOptions: [
      {
        en: 'Range increases by about 6 times',
        hi: 'परास लगभग 6 गुना बढ़ जाता है',
        kn: 'ದೂರವು ಸುಮಾರು 6 ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ',
      },
      {
        en: 'Range stays the same',
        hi: 'परास वही रहता है',
        kn: 'ದೂರ ಒಂದೇ ಆಗಿರುತ್ತದೆ',
      },
      {
        en: 'Range shrinks to 1/6',
        hi: 'परास घटकर 1/6 रह जाता है',
        kn: 'ದೂರ 1/6 ಕ್ಕೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ',
      },
    ],
    predictionCorrectIndex: 0,
    predictionExplanation: {
      en: 'In R = (v₀² sin 2θ) / g, range is inversely proportional to g. Dividing g by 6 multiplies both flight time and range by 6.',
      hi: 'सूत्र R = (v₀² sin 2θ) / g के अनुसार परास g के व्युत्क्रमानुपाती है। g को 6 से भाग देने पर परास 6 गुना बढ़ जाता है।',
      kn: 'R = (v₀² sin 2θ) / g ಸೂತ್ರದಲ್ಲಿ ದೂರವು g ಗೆ ವಿಲೋಮಾನುಪಾತದಲ್ಲಿರುತ್ತದೆ. g ಅನ್ನು 6 ರಿಂದ ಭಾಗಿಸಿದರೆ ದೂರವು 6 ಪಟ್ಟು ಹೆಚ್ಚಾಗುತ್ತದೆ.',
    },
  },
];

export const PROJECTILE_SCIENCE_NOTES = {
  idealAssumption: {
    en: 'Ideal Motion Model: Calculations assume level launch & landing ground (y₀ = 0), uniform downward gravity (g), and ZERO air resistance. Real balls experience air drag that slightly shortens range.',
    hi: 'आदर्श गति मॉडल: गणना में समतल भूमि (y₀ = 0), एकसमान गुरुत्व (g) और शून्य वायु प्रतिरोध माना गया है। वास्तविक हवा में घर्षण से परास थोड़ा कम होता है।',
    kn: 'ಆದರ್ಶ ಚಲನೆ ಮಾದರಿ: ಈ ಲೆಕ್ಕಾಚಾರಗಳು ಸಮತಟ್ಟಾದ ನೆಲ (y₀ = 0), ಸ್ಥಿರ ಗುರುತ್ವ (g) ಮತ್ತು ಗಾಳಿಯ ಪ್ರತಿರೋಧ ಶೂನ್ಯ ಎಂದು ಊಹಿಸುತ್ತವೆ. ನಿಜ ಜೀವನದಲ್ಲಿ ಗಾಳಿಯ ಪ್ರತಿರೋಧ ದೂರವನ್ನು ಸ್ವಲ್ಪ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.',
  },
  massNote: {
    en: 'Why does changing Mass NOT change the trajectory? Gravitational acceleration is a = F/m = (mg)/m = g, independent of mass (in vacuum). However, doubling mass doubles Initial Kinetic Energy: KE₀ = ½mv₀².',
    hi: 'द्रव्यमान (Mass) बदलने से पथ क्यों नहीं बदलता? गुरुत्वीय त्वरण a = (mg)/m = g होता है, जो द्रव्यमान से स्वतंत्र है। लेकिन द्रव्यमान दोगुना करने से प्रारंभिक गतिज ऊर्जा KE₀ = ½mv₀² दोगुनी हो जाती है।',
    kn: 'ದ್ರವ್ಯರಾಶಿ (Mass) ಬದಲಾಯಿಸಿದರೆ ಪಥ ಏಕೆ ಬದಲಾಗುವುದಿಲ್ಲ? ಗುರುತ್ವ ವೇಗೋತ್ಕರ್ಷ a = (mg)/m = g ಆಗಿದ್ದು ದ್ರವ್ಯರಾಶಿಯನ್ನು ಅವಲಂಬಿಸಿಲ್ಲ. ಆದರೆ ದ್ರವ್ಯರಾಶಿ ದ್ವಿಗುಣಗೊಂಡರೆ ಆರಂಭಿಕ ಚಲನ ಶಕ್ತಿ KE₀ = ½mv₀² ದ್ವಿಗುಣಗೊಳ್ಳುತ್ತದೆ.',
  },
};

export const PROJECTILE_EXPERIMENT_NOTES: LocalizedText[] = [
  {
    en: 'Step 1 (Angle Sweep): Keep v₀ = 24 m/s and g = 9.81 m/s². Launch at 30°, 45°, and 60° and compare the ghost curve with the Angle vs Range graph.',
    hi: 'चरण 1 (कोण परीक्षण): v₀ = 24 m/s और g = 9.81 m/s² स्थिर रखें। 30°, 45°, व 60° पर प्रक्षेपण करें और पिछले वक्र से तुलना करें।',
    kn: 'ಹಂತ 1 (ಕೋನ ಪರೀಕ್ಷೆ): v₀ = 24 m/s ಮತ್ತು g = 9.81 m/s² ಸ್ಥಿರವಾಗಿಡಿ. 30°, 45°, ಮತ್ತು 60° ನಲ್ಲಿ ಉಡಾವಣೆ ಮಾಡಿ ಗ್ರಾಫ್ ಹೋಲಿಸಿ.',
  },
  {
    en: 'Step 2 (Speed Scaling): Keep θ = 45° and increase speed from 15 m/s to 30 m/s (2×). Observe that range increases by 4× (since R ∝ v₀²).',
    hi: 'चरण 2 (वेग परीक्षण): θ = 45° रखकर चाल को 15 m/s से 30 m/s (2×) करें। देखें कि परास 4× बढ़ जाता है (क्योंकि R ∝ v₀²)।',
    kn: 'ಹಂತ 2 (ವೇಗ ಪರೀಕ್ಷೆ): θ = 45° ಇಟ್ಟು ವೇಗವನ್ನು 15 m/s ನಿಂದ 30 m/s (2×) ಕ್ಕೆ ಹೆಚ್ಚಿಸಿ. ದೂರ 4× ಹೆಚ್ಚಾಗುವುದನ್ನು ಗಮನಿಸಿ (R ∝ v₀²).',
  },
  {
    en: 'Step 3 (Mass Check): Change mass from 1 kg to 8 kg without changing angle or speed. Verify R, H, and T stay identical while KE₀ increases 8×.',
    hi: 'चरण 3 (द्रव्यमान जाँच): कोण व वेग बदले बिना द्रव्यमान को 1 kg से 8 kg करें। पुष्टि करें कि R, H व T समान रहते हैं जबकि KE₀ 8 गुना बढ़ती है।',
    kn: 'ಹಂತ 3 (ದ್ರವ್ಯರಾಶಿ ಪರೀಕ್ಷೆ): ಕೋನ ಮತ್ತು ವೇಗ ಬದಲಾಯಿಸದೆ ದ್ರವ್ಯರಾಶಿಯನ್ನು 1 kg ನಿಂದ 8 kg ಮಾಡಿ. R, H, T ಒಂದೇ ಇದ್ದು KE₀ 8× ಆಗುವುದನ್ನು ಖಚಿತಪಡಿಸಿ.',
  },
];

export const PROJECTILE_QUIZ: QuizQuestion[] = [
  {
    id: 'proj-q1',
    question: {
      en: 'On flat ground with no air resistance, which launch angle gives the maximum horizontal range for a fixed speed?',
      hi: 'समतल भूमि पर बिना वायु प्रतिरोध के, निश्चित चाल पर अधिकतम क्षैतिज परास किस कोण पर मिलता है?',
      kn: 'ಗಾಳಿಯ ಪ್ರತಿರೋಧವಿಲ್ಲದ ಸಮತಟ್ಟಾದ ನೆಲದ ಮೇಲೆ, ಸ್ಥಿರ ವೇಗದಲ್ಲಿ ಗರಿಷ್ಠ ಸಮತಲ ದೂರ ಯಾವ ಕೋನದಲ್ಲಿ ಸಿಗುತ್ತದೆ?',
    },
    options: [
      { en: '30°', hi: '30°', kn: '30°' },
      { en: '45°', hi: '45°', kn: '45°' },
      { en: '60°', hi: '60°', kn: '60°' },
      { en: '90°', hi: '90°', kn: '90°' },
    ],
    correctIndex: 1,
    hint: {
      en: 'Check when sin(2θ) reaches its maximum value of 1 in R = (v₀² sin 2θ)/g.',
      hi: 'जाँचें कि R = (v₀² sin 2θ)/g में sin(2θ) का मान अधिकतम (1) कब होता है।',
      kn: 'R = (v₀² sin 2θ)/g ಸೂತ್ರದಲ್ಲಿ sin(2θ) ಯಾವಾಗ ಗರಿಷ್ಠ 1 ಆಗುತ್ತದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
    },
    explanation: {
      en: 'sin(2θ) reaches its peak of 1 when 2θ = 90°, which means θ = 45°. At 90°, the ball goes straight up and lands back at 0 m.',
      hi: 'जब 2θ = 90° अर्थात् θ = 45° होता है तब sin(2θ) = 1 अधिकतम होता है। 90° पर गेंद सीधे ऊपर जाकर 0 m पर गिरती है।',
      kn: '2θ = 90° ಅಂದರೆ θ = 45° ಆದಾಗ sin(2θ) = 1 ಗರಿಷ್ಠವಾಗುತ್ತದೆ. 90° ನಲ್ಲಿ ಚೆಂಡು ನೇರವಾಗಿ ಮೇಲೆ ಹೋಗಿ 0 m ನಲ್ಲಿ ಬೀಳುತ್ತದೆ.',
    },
  },
  {
    id: 'proj-q2',
    question: {
      en: 'If you launch a 2 kg iron ball and a 6 kg iron ball at the exact same speed and angle (no air drag), how do their ranges compare?',
      hi: 'यदि 2 kg और 6 kg के दो गोलों को समान चाल व कोण से (बिना वायु प्रतिरोध) फेंका जाए, तो उनके परास कैसे होंगे?',
      kn: '2 kg ಮತ್ತು 6 kg ತೂಕದ ಎರಡು ಚೆಂಡುಗಳನ್ನು ಒಂದೇ ವೇಗ ಮತ್ತು ಕೋನದಲ್ಲಿ (ಗಾಳಿಯ ಪ್ರತಿರೋಧವಿಲ್ಲದೆ) ಎಸೆದರೆ ಅವುಗಳ ದೂರ ಹೇಗಿರುತ್ತದೆ?',
    },
    options: [
      {
        en: 'The 6 kg ball flies 3× farther',
        hi: '6 kg वाला गोला 3 गुना दूर जाएगा',
        kn: '6 kg ಚೆಂಡು 3 ಪಟ್ಟು ದೂರ ಹೋಗುತ್ತದೆ',
      },
      {
        en: 'Both travel the exact same horizontal range',
        hi: 'दोनों ठीक समान क्षैतिज दूरी तय करेंगे',
        kn: 'ಎರಡೂ ಒಂದೇ ಸಮತಲ ದೂರವನ್ನು ಕ್ರಮಿಸುತ್ತವೆ',
      },
      {
        en: 'The 2 kg ball travels farther because it is lighter',
        hi: 'हल्का होने के कारण 2 kg वाला गोला दूर जाएगा',
        kn: 'ಹಗುರವಾಗಿರುವುದರಿಂದ 2 kg ಚೆಂಡು ಹೆಚ್ಚು ದೂರ ಹೋಗುತ್ತದೆ',
      },
    ],
    correctIndex: 1,
    hint: {
      en: 'Look at the formula R = (v₀² sin 2θ) / g — does mass (m) appear anywhere in it?',
      hi: 'सूत्र R = (v₀² sin 2θ) / g देखें — क्या इसमें कहीं द्रव्यमान (m) आता है?',
      kn: 'R = (v₀² sin 2θ) / g ಸೂತ್ರವನ್ನು ನೋಡಿ — ಇದರಲ್ಲಿ ದ್ರವ್ಯರಾಶಿ (m) ಎಲ್ಲಾದರೂ ಇದೆಯೇ?',
    },
    explanation: {
      en: 'Mass does not appear in R = (v₀² sin 2θ) / g. Both fall at acceleration g, so their paths and ranges are identical—though the 6 kg ball carries 3× more kinetic energy.',
      hi: 'परास के सूत्र में m नहीं होता, इसलिए दोनों का पथ व परास समान रहता है; हाँ, 6 kg गोले की गतिज ऊर्जा 3 गुना अधिक होती है।',
      kn: 'ದೂರದ ಸೂತ್ರದಲ್ಲಿ ದ್ರವ್ಯರಾಶಿ m ಇಲ್ಲದಿರುವುದರಿಂದ ಎರಡೂ ಒಂದೇ ಪಥ ಮತ್ತು ದೂರ ಕ್ರಮಿಸುತ್ತವೆ; ಆದರೆ 6 kg ಚೆಂಡು 3 ಪಟ್ಟು ಹೆಚ್ಚು ಚಲನ ಶಕ್ತಿ ಹೊಂದಿರುತ್ತದೆ.',
    },
  },
  {
    id: 'proj-q3',
    question: {
      en: 'At the highest point (apex) of a projectile’s curved trajectory (0° < θ < 90°), what is its velocity?',
      hi: 'प्रक्षेप्य पथ के उच्चतम बिंदु (शीर्ष) पर गेंद का वेग क्या होता है?',
      kn: 'ಪ್ರಕ್ಷೇಪಕ ಪಥದ ಅತ್ಯುನ್ನತ ಬಿಂದುವಿನಲ್ಲಿ (ಶಿಖರದಲ್ಲಿ) ಚೆಂಡಿನ ವೇಗ ಎಷ್ಟಿರುತ್ತದೆ?',
    },
    options: [
      {
        en: 'Zero in both horizontal and vertical directions',
        hi: 'क्षैतिज और ऊर्ध्वाधर दोनों दिशाओं में शून्य',
        kn: 'ಸಮತಲ ಮತ್ತು ಲಂಬ ಎರಡೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಶೂನ್ಯ',
      },
      {
        en: 'Vertical velocity is zero, horizontal velocity is still v₀ cos θ',
        hi: 'ऊर्ध्वाधर वेग शून्य होता है, लेकिन क्षैतिज वेग v₀ cos θ बना रहता है',
        kn: 'ಲಂಬ ವೇಗ ಶೂನ್ಯವಾಗಿರುತ್ತದೆ, ಆದರೆ ಸಮತಲ ವೇಗ v₀ cos θ ಇನ್ನೂ ಇರುತ್ತದೆ',
      },
      {
        en: 'Equal to the full launch speed v₀ downward',
        hi: 'नीचे की ओर पूरे प्रारंभिक वेग v₀ के बराबर',
        kn: 'ಕೆಳಮುಖವಾಗಿ ಪೂರ್ಣ ವೇಗ v₀ ಗೆ ಸಮನಾಗಿರುತ್ತದೆ',
      },
    ],
    correctIndex: 1,
    hint: {
      en: 'Gravity pulls only downward (vertical). Does anything slow down the horizontal velocity v₀ cos θ in ideal motion?',
      hi: 'गुरुत्व केवल नीचे (ऊर्ध्वाधर) खींचता है। क्या आदर्श गति में क्षैतिज वेग को कोई रोकता है?',
      kn: 'ಗುರುತ್ವವು ಕೇವಲ ಕೆಳಮುಖವಾಗಿ (ಲಂಬವಾಗಿ) ಎಳೆಯುತ್ತದೆ. ಆದರ್ಶ ಚಲನೆಯಲ್ಲಿ ಸಮತಲ ವೇಗವನ್ನು ತಡೆಯುವವರು ಯಾರಾದರೂ ಇದ್ದಾರೆಯೇ?',
    },
    explanation: {
      en: 'At maximum height the ball stops rising (v_y = 0), while constant horizontal motion (v_x = v₀ cos θ) keeps carrying it forward.',
      hi: 'अधिकतम ऊँचाई पर ऊर्ध्वाधर वेग v_y = 0 हो जाता है, पर क्षैतिज वेग v_x = v₀ cos θ इसे आगे ले जाता रहता है।',
      kn: 'ಗರಿಷ್ಠ ಎತ್ತರದಲ್ಲಿ ಲಂಬ ವೇಗ v_y = 0 ಆಗುತ್ತದೆ, ಆದರೆ ಸ್ಥಿರ ಸಮತಲ ವೇಗ v_x = v₀ cos θ ಚೆಂಡನ್ನು ಮುಂದಕ್ಕೆ ಕೊಂಡೊಯ್ಯುತ್ತದೆ.',
    },
  },
];

export interface DynamicHintSequence {
  summary: string;
  hints: [string, string, string];
}

/**
 * Generates encouraging, scientifically accurate, 100% offline 3-stage hints
 * tailored to the student's current angle, velocity, gravity, and target miss.
 */
export function buildOfflineProjectileHints(params: {
  language: 'en' | 'hi' | 'kn';
  angle: number;
  velocity: number;
  gravity: number;
  range: number;
  targetDistance: number;
  tolerance: number;
}): DynamicHintSequence {
  const { language: lang, angle, velocity, gravity, range, targetDistance, tolerance } = params;
  const diff = range - targetDistance;
  const maxPossibleRange = (velocity * velocity) / gravity;
  const absDiff = Math.abs(diff).toFixed(1);

  if (Math.abs(diff) <= tolerance) {
    if (lang === 'hi') {
      return {
        summary: `शाबाश! आपका प्रक्षेप्य ${range.toFixed(1)} m पर गिरा — यह ${targetDistance} m के लक्ष्य क्षेत्र में बिल्कुल सटीक बैठता है।`,
        hints: [
          'अब यह जांचने के लिए 45° के दूसरे पूरक कोण (90° − θ) को आज़माएँ कि क्या परास समान रहता है।',
          'द्रव्यमान (Mass) बदलकर देखें: आदर्श गति में पथ समान रहता है, पर गतिज ऊर्जा KE₀ बदलती है।',
          'नीचे दिए गए प्रतिबिंब (Reflection) बॉक्स में लिखें कि आपने यह सटीक लक्ष्य कैसे प्राप्त किया!',
        ],
      };
    }
    if (lang === 'kn') {
      return {
        summary: `ಅದ್ಭುತ! ನಿಮ್ಮ ಚೆಂಡು ${range.toFixed(1)} m ನಲ್ಲಿ ಬಿದ್ದಿದೆ — ಇದು ${targetDistance} m ಗುರಿ ವಲಯದ ಒಳಗೆ ಇದೆ.`,
        hints: [
          'ಈಗ ಪೂರಕ ಕೋನ (90° − θ) ಪ್ರಯತ್ನಿಸಿ ಅದೇ ದೂರ ಸಿಗುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.',
          'ದ್ರವ್ಯರಾಶಿಯನ್ನು ಬದಲಾಯಿಸಿ ನೋಡಿ: ಪಥವು ಬದಲಾಗುವುದಿಲ್ಲ ಆದರೆ ಚಲನ ಶಕ್ತಿ KE₀ ಬದಲಾಗುತ್ತದೆ.',
          'ಕೆಳಗಿನ ಪ್ರತಿಫಲನ ವಿಭಾಗದಲ್ಲಿ ನೀವು ಗುರಿಯನ್ನು ಹೇಗೆ ತಲುಪಿದಿರಿ ಎಂದು ದಾಖಲಿಸಿ!',
        ],
      };
    }
    return {
      summary: `Great launch! Your ball landed at ${range.toFixed(1)} m — right inside the ${targetDistance} ± ${tolerance} m target zone.`,
      hints: [
        'Explore further: try the complementary angle (90° − θ) at the same speed to see if it lands at the exact same range.',
        'Change mass from 1 kg to 8 kg: notice Range, Height, and Flight Time stay identical while Kinetic Energy increases.',
        'Record what changed in the reflection box below to save your observation.',
      ],
    };
  }

  const isShort = diff < 0;

  // Case 1: Speed itself is too low even at 45 degrees
  if (isShort && maxPossibleRange < targetDistance - tolerance) {
    const neededSpeed = Math.sqrt(targetDistance * gravity).toFixed(1);
    if (lang === 'hi') {
      return {
        summary: `अच्छा प्रयास! गेंद ${range.toFixed(1)} m पर गिरी (${absDiff} m कम)। इस चाल (${velocity} m/s) से 45° पर भी अधिकतम परास केवल ${maxPossibleRange.toFixed(1)} m संभव है।`,
        hints: [
          'संकेत 1 (छोटा सुराग): कोण बदलने के साथ-साथ इस बार प्रारंभिक चाल (v₀) पर ध्यान दें।',
          `संकेत 2 (सूत्र लिंक): अधिकतम परास R_max = v₀² / g होता है। अभी R_max = ${maxPossibleRange.toFixed(1)} m है, जो ${targetDistance} m से कम है।`,
          `संकेत 3 (समाधान कदम): कोण को 45° के पास रखें और प्रारंभिक चाल को कम से कम ${neededSpeed} m/s तक बढ़ाएँ।`,
        ],
      };
    }
    if (lang === 'kn') {
      return {
        summary: `ಉತ್ತಮ ಪ್ರಯತ್ನ! ಚೆಂಡು ${range.toFixed(1)} m ನಲ್ಲಿ ಬಿದ್ದಿತು (${absDiff} m ಕಡಿಮೆ). ${velocity} m/s ವೇಗದಲ್ಲಿ 45° ಕೋನದಲ್ಲೂ ಗರಿಷ್ಠ ದೂರ ಕೇವಲ ${maxPossibleRange.toFixed(1)} m ಮಾತ್ರ.`,
        hints: [
          'ಸುಳಿವು 1: ಕೋನದ ಜೊತೆಗೆ ಆರಂಭಿಕ ವೇಗವನ್ನು (v₀) ಪರಿಶೀಲಿಸಿ.',
          `ಸುಳಿವು 2: ಗರಿಷ್ಠ ದೂರ R_max = v₀² / g = ${maxPossibleRange.toFixed(1)} m ಆಗಿದ್ದು, ಇದು ${targetDistance} m ಗಿಂತ ಕಡಿಮೆಯಿದೆ.`,
          `ಸುಳಿವು 3: ಕೋನವನ್ನು 45° ಹತ್ತಿರ ಇಟ್ಟು ವೇಗವನ್ನು ಕನಿಷ್ಠ ${neededSpeed} m/s ಗೆ ಹೆಚ್ಚಿಸಿ.`,
        ],
      };
    }
    return {
      summary: `Good try! The ball landed at ${range.toFixed(1)} m (${absDiff} m short). Even at the optimal 45°, ${velocity} m/s can reach at most ${maxPossibleRange.toFixed(1)} m.`,
      hints: [
        'Hint 1 (Clue): Look closely at whether angle alone can carry the ball to the flag, or if it needs more launch speed.',
        `Hint 2 (Formula Link): Because R_max = v₀² / g, at v₀ = ${velocity} m/s your maximum possible reach is ${maxPossibleRange.toFixed(1)} m (less than ${targetDistance} m).`,
        `Hint 3 (Action Step): Keep angle near 45° and increase Initial Speed above ${neededSpeed} m/s to reach ${targetDistance} m.`,
      ],
    };
  }

  // Case 2: Short, and moving angle closer to 45 helps
  if (isShort) {
    const tooSteep = angle > 45;
    if (lang === 'hi') {
      return {
        summary: `लक्ष्य के करीब! गेंद ${range.toFixed(1)} m पर गिरी — यह ${targetDistance} m के लक्ष्य से ${absDiff} m कम है।`,
        hints: [
          tooSteep
            ? 'संकेत 1 (छोटा सुराग): आपका कोण बहुत ऊँचा है, इसलिए गेंद ऊपर ज़्यादा और आगे कम जा रही है।'
            : 'संकेत 1 (छोटा सुराग): आपका कोण काफी कम है, इसलिए गेंद हवा में ज़्यादा देर रुकने से पहले ही गिर गई।',
          'संकेत 2 (सूत्र लिंक): परास sin(2θ) पर निर्भर करता है, जो 45° पर सबसे अधिक होता है। यदि वेग बढ़ाया जाए तो परास वर्ग (v₀²) से बढ़ता है।',
          tooSteep
            ? `संकेत 3 (समाधान कदम): कोण को ${angle}° से घटाकर 45° के करीब लाएँ या चाल को 2–4 m/s बढ़ाएँ।`
            : `संकेत 3 (समाधान कदम): कोण को ${angle}° से बढ़ाकर 45° की ओर लाएँ (या चाल बढ़ाएँ) और फिर से प्रक्षेपण करें।`,
        ],
      };
    }
    if (lang === 'kn') {
      return {
        summary: `ಗುರಿಯ ಹತ್ತಿರದಲ್ಲಿದೆ! ಚೆಂಡು ${range.toFixed(1)} m ನಲ್ಲಿ ಬಿದ್ದಿತು — ಗುರಿಗಿಂತ ${absDiff} m ಕಡಿಮೆ.`,
        hints: [
          tooSteep
            ? 'ಸುಳಿವು 1: ಕೋನ ಬಹಳ ಹೆಚ್ಚಾಗಿರುವುದರಿಂದ ಚೆಂಡು ಮುಂದೆ ಹೋಗುವ ಬದಲು ಹೆಚ್ಚು ಎತ್ತರಕ್ಕೆ ಹಾರುತ್ತಿದೆ.'
            : 'ಸುಳಿವು 1: ಕೋನ ಬಹಳ ಕಡಿಮೆ ಇರುವುದರಿಂದ ಚೆಂಡು ಬೇಗನೆ ನೆಲಕ್ಕೆ ಬೀಳುತ್ತಿದೆ.',
          'ಸುಳಿವು 2: ದೂರವು sin(2θ) ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿದೆ, ಇದು 45° ನಲ್ಲಿ ಗರಿಷ್ಠವಾಗಿರುತ್ತದೆ. ವೇಗವನ್ನು ಹೆಚ್ಚಿಸಿದರೂ ದೂರ ಹೆಚ್ಚಾಗುತ್ತದೆ.',
          tooSteep
            ? `ಸುಳಿವು 3: ಕೋನವನ್ನು ${angle}° ನಿಂದ 45° ಕಡೆಗೆ ಕಡಿಮೆ ಮಾಡಿ ಅಥವಾ ವೇಗವನ್ನು ಸ್ವಲ್ಪ ಹೆಚ್ಚಿಸಿ.`
            : `ಸುಳಿವು 3: ಕೋನವನ್ನು ${angle}° ನಿಂದ 45° ಕಡೆಗೆ ಹೆಚ್ಚಿಸಿ (ಅಥವಾ ವೇಗ ಹೆಚ್ಚಿಸಿ) ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.`,
        ],
      };
    }
    return {
      summary: `Almost there! You landed at ${range.toFixed(1)} m — ${absDiff} m short of the ${targetDistance} m target.`,
      hints: [
        tooSteep
          ? 'Hint 1 (Clue): Your launch angle is steep, sending more speed upward than forward.'
          : 'Hint 1 (Clue): Your launch angle is quite low, so gravity pulls the ball down before it travels far.',
        'Hint 2 (Formula Link): Range follows R = (v₀² sin 2θ) / g, peaking at θ = 45°. Moving θ toward 45° or raising speed v₀ increases R.',
        tooSteep
          ? `Hint 3 (Action Step): Lower the angle from ${angle}° closer to 45°, or increase initial speed slightly.`
          : `Hint 3 (Action Step): Raise the angle from ${angle}° closer to 45°, or boost initial speed by 2–3 m/s.`,
      ],
    };
  }

  // Case 3: Overshot target (diff > 0)
  if (lang === 'hi') {
    return {
      summary: `अच्छा शॉट, पर लक्ष्य से आगे! गेंद ${range.toFixed(1)} m पर गिरी — ${targetDistance} m से ${absDiff} m आगे।`,
      hints: [
        'संकेत 1 (छोटा सुराग): गेंद में अभी लक्ष्य से अधिक क्षैतिज ऊर्जा या बहुत इष्टतम कोण है।',
        'संकेत 2 (सूत्र लिंक): परास कम करने के लिए या तो वेग v₀ थोड़ा घटाएँ, या कोण को 45° से दूर (जैसे 25°–32° या 58°–65°) ले जाएँ।',
        `संकेत 3 (समाधान कदम): प्रारंभिक चाल को ${Math.max(8, velocity - 3)} m/s तक कम करके देखें या कोण को 45° से थोड़ा कम/ज़्यादा करें।`,
      ],
    };
  }
  if (lang === 'kn') {
    return {
      summary: `ಉತ್ತಮ ಎಸೆತ, ಆದರೆ ಗುರಿಯನ್ನು ದಾಟಿದೆ! ಚೆಂಡು ${range.toFixed(1)} m ನಲ್ಲಿ ಬಿದ್ದಿದೆ — ${targetDistance} m ಗಿಂತ ${absDiff} m ಮುಂದೆ.`,
      hints: [
        'ಸುಳಿವು 1: ಚೆಂಡು ಗುರಿಗಿಂತ ಸ್ವಲ್ಪ ಹೆಚ್ಚು ದೂರ ಹಾರಿದೆ.',
        'ಸುಳಿವು 2: ದೂರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ವೇಗ v₀ ಸ್ವಲ್ಪ ತಗ್ಗಿಸಿ, ಅಥವಾ ಕೋನವನ್ನು 45° ನಿಂದ ದೂರಕ್ಕೆ (ಉದಾ. 28° ಅಥವಾ 62°) ಸರಿಸಿ.',
        `ಸುಳಿವು 3: ವೇಗವನ್ನು ಸುಮಾರು ${Math.max(8, velocity - 3)} m/s ಗೆ ಇಳಿಸಿ ಅಥವಾ ಕೋನ ಬದಲಾಯಿಸಿ ಮತ್ತೆ ಉಡಾವಣೆ ಮಾಡಿ.`,
      ],
    };
  }
  return {
    summary: `Strong launch — you overshot! The ball landed at ${range.toFixed(1)} m (${absDiff} m past the ${targetDistance} m target).`,
    hints: [
      'Hint 1 (Clue): Too much horizontal reach! You can shorten range either by reducing speed or steering the angle away from 45°.',
      'Hint 2 (Formula Link): Because R = (v₀² sin 2θ) / g, small drops in v₀ shrink range quickly (squared!), and angles further from 45° shrink sin(2θ).',
      `Hint 3 (Action Step): Try lowering initial speed toward ${Math.max(8, velocity - 3)} m/s, or adjust angle away from 45°.`,
    ],
  };
}
