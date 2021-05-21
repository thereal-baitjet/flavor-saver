const router = require("express").Router();
const { Day } = require("../models");
const withAuth = require("../utils/auth");

//Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

const users = userData.map((user) => user.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/weekly", async (req, res) => {
  function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(
        DayAsString(currentDate.getDay()) +
          ", " +
          MonthAsString(currentDate.getMonth())  +
          " " +
          currentDate.getDate() +  "," +
          " " +
          currentDate.getFullYear()
      );
    }

    return aryDates;
  }

  function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
  }

  function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
  }

  var startDate = new Date();
  var aryDates = GetDates(startDate, 7);
  console.log(aryDates);

  aryDates = aryDates.map( async (d) => {
    let test = await Day.findOne({
      where: {
        date: d,
        belongsTo: req.session.user_id,
      },
    })

    return  {
          selectedDate: d,
           breakfast: test?.breakfast,
  //     lunch: "PB&J Sando",
  //     dinner: "Salmon with a salad",
  //     snack: "Peanuts"
    }
  });

  console.log(aryDates);

  // aryDates = aryDates.map(date => {
  //  return {
  //     selectedDate: date,s
  //     breakfast: "Avocado Toast",
  //     lunch: "PB&J Sando",
  //     dinner: "Salmon with a salad",
  //     snack: "Peanuts"
  //   }
  // })


  return res.render("weekly", { aryDates });
});

router.get("/", async (req, res) => {
  return res.render("homepage");
});

router.get("/mealplanner", async (req, res) => {
  return res.render("datepicker");
});
router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
