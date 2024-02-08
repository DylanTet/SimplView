const createElement = tagName => (strings, ...args) => ({
    type: tagName,
    template: strings.reduce((acc, currString, index) => acc + currString + (args[index] || ""), "") 
});

const div = createElement("div");
const p = createElement("p");

const firstName = "Dylan";
const lastName = "Tettemer";

// const template = div`Hello ${firstName} ${lastName} !`;
const { template } = p`Hello ${firstName} ${lastName} !`;
console.log(template);