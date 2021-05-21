const router = require("express").Router();
const { Day, Recipe } = require("../models");
const { belongsTo } = require("../models/User");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log(req.session);
  res.render('homepage', {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
    });
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("login");
});

//Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//   });

//   const users = userData.map((user) => user.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/weekly", withAuth, async (req, res) => {
    // query the Day table for all days belonging to logged in user
    const allDaysData = await Day.findAll({
      where: {
        belongs_to: req.session.user_id
      },
      // include meal names
      // include: [{ model: Recipe, attributes: ['name'] }]
    });

    // serialize
    const allDays = allDaysData.map((day) => day.get({ plain: true }));
    console.log(allDays);

    // limit array to 7 elements
    const sevenDays = allDays.slice(0,7)

  // pass into weekly.handlerbars
  return res.render("weekly", {
    sevenDays,
    logged_in: req.session.logged_in,
    });
});

router.get("/mealplanner", async (req, res) => {
  return res.render("datepicker", {
    // Pass the logged in flag to the template
    logged_in: req.session.logged_in,
    });
});

// TODO: add get /recipes

module.exports = router;
