import { init } from "./framework";
import { User } from "./src/user";

const firstName = "Dylan";
const lastName = "Tettemer";

init("#app", User({ firstName, lastName }));