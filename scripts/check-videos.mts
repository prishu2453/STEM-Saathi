import { EXPERIMENT_VIDEOS } from '../src/data/experimentVideos';
import { validateRegistry, videoStats } from '../src/lib/videoCheck';

const problems = validateRegistry(EXPERIMENT_VIDEOS);
const s = videoStats(EXPERIMENT_VIDEOS);
console.log(`Experiments in syllabus data: ${s.totalExperiments}`);
console.log(`Verified videos registered:   ${s.verifiedVideos}`);
console.log(`Experiments without a video:  ${s.withoutVideo}`);
if (problems.length) {
  console.error('\nProblems found (these entries will NOT be shown to students):');
  for (const p of problems) console.error(` - ${p.experimentId}: ${p.problem}`);
  process.exit(1);
}
console.log('\nAll registered videos pass the checks.');
