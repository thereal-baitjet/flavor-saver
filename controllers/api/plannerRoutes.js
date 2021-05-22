const router = require("express").Router();
const { Day } = require('../../models');

// The api/planner endpoint
router.get('/', async (req, res) => {
    let date = req.query.date;
    let dateArray = date.split('');
    let reconstructedDate = dateArray[0]+ '/' + dateArray[1] + dateArray[2] + '/' + dateArray[3] + dateArray[4] + dateArray[5] + dateArray[6];
    let dayData = await Day.findOne({ where: { belongsTo: req.session.user_id, date: reconstructedDate } });
    let day = dayData.get({ plain: true });
    console.log(day.breakfast);
    return res.render("planner", {
        day,
        logged_in: req.session.logged_in,
        });
});

// router.post('/:date&:meal', async (req, res) => {
//     // Find Day where...
//       let date = req.params.date;
//       let dateArray = date.split();
//       let reconstructedDate = dateArray[0] + '/' + dateArray.slice(1,3) + '/' + dateArray.slice(3,);
//       let day = DataTypes.findOne({ where: { belongsTo: req.session.user_id, date: reconstructedDate } });
//       // Update Day.[COLUMN = MEAL] = selectedRecipe
//       // Save
// });

module.exports = router;