import {Command} from "commander";

const argsv = new Command();

argsv.option("--mode <mode>", "to specify mode", "dev");
argsv.parse();

export default argsv.opts();