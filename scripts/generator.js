#!/usr/bin/env node

import { mkdirSync, writeFileSync, rmSync, existsSync } from "fs";
import { join } from "path";

// Get command-line arguments (skip node and script path)
const args = process.argv.slice(2);

// Usage check
if (
  args.length < 3 ||
  !["component", "page", "destroy"].includes(args[0]) ||
  !args[1].startsWith("path=")
) {
  console.error(
    "Usage: npm run g [component|page|destroy] path=some/path Name1 Name2 ..."
  );
  process.exit(1);
}

const action = args[0]; // "component", "page", or "destroy"
const type = action === "destroy" ? args[1] : action; // "component" or "page"
const basePath = args[1].replace("path=", "");
const names = args.slice(2);

const toPascalCase = (str) =>
  str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

names.forEach((name) => {
  const pascalCaseName = toPascalCase(name);
  const targetDir =
    type === "component"
      ? join("src", "components", basePath, pascalCaseName)
      : join("src", "app", basePath, pascalCaseName);

  if (action === "destroy") {
    if (existsSync(targetDir)) {
      rmSync(targetDir, { recursive: true, force: true });
      console.log(`Deleted ${type} '${pascalCaseName}' at ${targetDir}`);
    } else {
      console.log(
        `Nothing to delete for ${type} '${pascalCaseName}' at ${targetDir}`
      );
    }
    return;
  }

  mkdirSync(targetDir, { recursive: true });

  const fileName = type === "component" ? "index.tsx" : "page.tsx";
  const fileContent = `
  "use client";
  import React from 'react';

const ${pascalCaseName} = () => {
    return <div>${pascalCaseName}</div>;
}

export default ${pascalCaseName};
`;

  writeFileSync(join(targetDir, fileName), fileContent);

  console.log(
    `Generated ${type} '${pascalCaseName}' in ${targetDir}\nCreated: ${fileName}`
  );
});

console.log("Done!");
console.log("You can now start building your project!");
console.log("Happy coding! 🎉");
