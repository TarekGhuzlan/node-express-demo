const express = require("express");
const router = express.Router();

let courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" },
];

router.get("/", (req, res) => {
  res.send(courses);
});

router.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

router.get("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given id was not found.");
  res.send(course);
});

router.post("/", (req, res) => {
  //*post
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given id was not found.");

  const { error } = validateCourse(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  course.name = req.body.name;

  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return (result = schema.validate(course));
}

router.delete("/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given id was not found.");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

//* PORT
const port = process.env.PORT || 3000;
router.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = router;
