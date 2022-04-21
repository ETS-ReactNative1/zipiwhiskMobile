const pool = require("../../config/db");

module.exports = async (req, res) => {
  let { user_id, category } = req.query;
  if (user_id === undefined) {
    user_id = req.user.id;
  }

  try {
    pool.query(
      `SELECT
      r.id,
      r.recipe_name AS title,
      r.yield AS recipeYield,
      r.ingredients AS ingredientList,
      r.instructions,
      r.created_at,
      r.media_type,
      r.media_url,
      r.caption,
      u.id AS created_by,
      u.image_url user_image_url,
      u.username,
      (SELECT COUNT(*) FROM comments WHERE recipe_id = r.id) numComments,
      (SELECT COUNT(*) FROM users_likes WHERE recipe_id = r.id) numLikes,
      (SELECT COUNT(*) > 0 FROM users_likes WHERE recipe_id = r.id AND user_id = ?) liked,
      (SELECT COUNT(*) FROM users_saves WHERE recipe_id = r.id) numSaves,
      (SELECT COUNT(*) > 0 FROM users_saves WHERE recipe_id = r.id AND user_id = ?) saved,
      (SELECT created_at FROM users_saves WHERE recipe_id = r.id AND user_id = ?) saved_at
      FROM recipes r
      INNER JOIN users_recipes ur ON ur.recipe_id = r.id
      INNER JOIN users u ON u.id = ur.user_id
      WHERE
      CASE WHEN ? != ''
      THEN r.id IN
        (SELECT us.recipe_id FROM users_saves us
          INNER JOIN recipes_categories rc ON rc.recipe_id = us.recipe_id AND rc.category = ?
          WHERE us.user_id = ?)
          OR
        r.id IN
        (SELECT ur.recipe_id FROM users_recipes ur
          INNER JOIN recipes_categories rc ON rc.recipe_id = ur.recipe_id AND rc.category = ?
          WHERE ur.user_id = ?)
        ELSE 
        r.id IN (SELECT us.recipe_id FROM users_saves us WHERE us.user_id = ?)
          OR
        r.id IN (SELECT ur.recipe_id FROM users_recipes ur WHERE ur.user_id = ?)
        END
      ORDER BY
      CASE WHEN u.id = ? THEN r.created_at
      ELSE saved_at END DESC
      LIMIT 18`,
      [
        req.user.id,
        req.user.id,
        user_id,
        category,
        category,
        user_id,
        category,
        user_id,
        user_id,
        user_id,
        user_id,
      ],
      (err, results) => {
        if (err) throw err;
        return res.status(200).json(results);
      }
    );
  } catch (err) {
    return res.status(401).json(err);
  }
};
