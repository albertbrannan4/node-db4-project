async function getRecipes() {
  const result = await Promise.resolve("getting all recipes");
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
