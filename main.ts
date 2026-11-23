import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "Our manager says we're a family — which explains why nobody gets paid for the chores.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${entry}\n`, 'utf8');
