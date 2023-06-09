const DButils = require("./DButils");

exports.markAsFavorite = async function markAsFavorite(user_id, recipe_id) {
    await DButils.execQuery(`insert into favoriterecipes values ('${user_id}',${recipe_id})`);
}

exports.removeFromFavorite = async function removeFromFavorite(user_id, recipe_id) {
    return await DButils.execQuery(`delete from favoriterecipes where user_id='${user_id}' and recipe_id=${recipe_id}`);
}

exports.getFavoriteRecipes = async function getFavoriteRecipes(user_id) {
    return await DButils.execQuery(`select recipe_id from favoriterecipes where user_id='${user_id}'`);
}

exports.markAsWatched = async function markAsWatched(user_id, recipe_id) {
    await DButils.execQuery(`insert into watchedrecipes values ('${user_id}',${recipe_id})`);
}

exports.getWatchedRecipes = async function getWatchedRecipes(user_id) {
    return await DButils.execQuery(`select recipe_id from watchedrecipes where user_id='${user_id}'`);
}

exports.addNewRecipe = async function addNewRecipe(user_id, { title, image, readyInMinutes, aggregateLikes, vegan, vegetarian, glutenFree, instructions, servings, extendedIngredients }) {
    return await DButils.execQuery(`insert into recipes (user_id, title, image, readyInMinutes, aggregateLikes, vegan, vegetarian, glutenFree, instructions, servings, extendedIngredients) values ('${user_id}','${title}','${image}',${readyInMinutes},${aggregateLikes},${vegan},${vegetarian},${glutenFree},'${instructions}',${servings},'${extendedIngredients}')`);
}

exports.getMyRecipes = async function getMyRecipes(user_id) {
    return await DButils.execQuery(`select * from recipes where user_id='${user_id}'`);
}

exports.getFamilyRecipes = async function getFamilyRecipes(user_id) {
    return await DButils.execQuery(`select * from familyRecipe where user_id='${user_id}'`);
}

