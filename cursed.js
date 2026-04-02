#!/usr/bin/env node

// Tested with Node.js v22.17.1.

import { basename } from "path";
import { statfsSync } from "fs";

function getCommand() {
  try {
    return basename(process.argv[1]);
  } catch (error) {
    console.error("Error getting command:", error);
    process.exit(1);
  }
}

function cmem() {
  try {
    console.log("Memory usage:", process.memoryUsage());
  } catch (error) {
    console.error("Error getting memory usage:", error);
    process.exit(1);
  }
}

function cdsk() {
  try {
    const stats = statfsSync("/");
    console.log("Disk usage:", stats);
  } catch (error) {
    console.error("Error getting disk usage:", error);
    process.exit(1);
  }
}

function ccpu() {
  try {
    console.log("CPU usage:", process.cpuUsage());
  } catch (error) {
    console.error("Error getting CPU usage:", error);
    process.exit(1);
  }
}

function main() {
  const command = getCommand();
  switch (command) {
    case "cdsk":
      cdsk();
      break;
    case "cmem":
      cmem();
      break;
    case "ccpu":
      ccpu();
      break;
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
  process.exit(0);
}

main();
