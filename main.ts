import * as fs from "fs";
import * as path from "path";

const line = "Sorry, I thought 'rm -rf /' meant 'really move forward'.";

const outPath = path.resolve("/output/entry.txt");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, line + "\n");
