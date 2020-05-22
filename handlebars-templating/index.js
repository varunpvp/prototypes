const fs = require("fs").promises;
const Handlebars = require("handlebars");

async function main() {
  await compileTemplate("login.hbs", "login.json", "login.html");

  console.log("done");
}

async function compileTemplate(templateFile, dataFile, outputFileName) {
  const htmlTemplate = await fs.readFile(templateFile, "utf8");

  const data = JSON.parse(await fs.readFile(dataFile, "utf8"));

  const templateCompiler = Handlebars.compile(htmlTemplate);

  const compiledTemplate = templateCompiler(data);

  await fs.writeFile(outputFileName, compiledTemplate);
}

main()
  .then(() => process.exit(0))
  .catch((error) => console.log({ error }));
