import { createRequire } from "module";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export async function add(args: string[]) {
  if (args.length === 0) {
    console.error("Usage: dds-skills add <skill-name>");
    process.exit(1);
  }

  const skillName = args[0];

  // Skills are shipped alongside this package
  const skillsDir = resolve(__dirname, "../skills");
  const skillSrc = join(skillsDir, skillName, "SKILL.md");

  if (!existsSync(skillSrc)) {
    console.error(`Skill "${skillName}" not found.`);
    console.error(`Available skills are in: ${skillsDir}`);
    process.exit(1);
  }

  // Install into .claude/commands/ of the current working directory
  const targetDir = resolve(process.cwd(), ".claude", "commands");
  mkdirSync(targetDir, { recursive: true });

  const targetFile = join(targetDir, `${skillName}.md`);
  copyFileSync(skillSrc, targetFile);

  console.log(`Installed skill "${skillName}" to ${targetFile}`);
}
