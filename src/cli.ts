import { add } from "./commands/add.js";

const [, , command, ...args] = process.argv;

async function main() {
  switch (command) {
    case "add":
      await add(args);
      break;
    default:
      console.log("Usage: dds-skills add <skill-name>");
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
