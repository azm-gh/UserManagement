const express = require("express");
const router = express.Router();

//static routes above the dynamic ones

router.get("/", (req, res) => {
req.body.firstName
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Type your name"});
});

router.post("/", (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else
    console.log("Error")
    res.render('users/new', {firstName: req.body.firstName})

    console.log(req.body.firstName) // Express does not allow access body directly. Gotta use MW
    res.send("Hi")
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User it with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get User it with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get User it with ID ${req.params.id}`);
  })

  //middleware running ID, calling funtion next
  //mw - running between the start and an end of a request(eg logger)
const users = [{name: "Jakub"}, { name: "Caroline"}]
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    next()
})

/*
// its easier to use router.route in case of crud changes

router.get("/:id", (req, res) => {
  res.send(`Get User it with ID ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  res.send(`Get User it with ID ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  res.send(`Get User it with ID ${req.params.id}`);
});

*/

module.exports = router;
