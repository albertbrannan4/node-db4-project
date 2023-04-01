const db = require("../../data/db-config");

async function getRecipes() {
  //const result = await Promise.resolve("getting all recipes");
  const result = await db("recipes");
  return result;
}

async function getRecipe(id) {
  const result = await Promise.resolve(`getting recipe ${id}`);
  return result;
}
module.exports = {
  getRecipes,
  getRecipe,
};
