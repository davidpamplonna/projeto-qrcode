import handle from "./handle.js";
import chalk from "chalk";

async function createPassword() {
  console.log(chalk.green("passoword"));
  const passoword = await handle();
  console.log(passoword);
}

export default createPassword;
