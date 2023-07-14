const Skill = require("../models/skills");

function index(req, res) {
    //req is request a user is making
    //res is the response object that helps us respond to the request
    res.render("skills/index", {
        skills: Skill.getAll() //what is returned from getAll()method in the models.todo file
    })
}
function show(req,res) {
    res.render("skills/show", {
        skill: Skill.oneSkill(req.params.id)
    });
}
function newSkill(req,res) {
    res.render('skills/new', { title: "New Skill" });
}

  function create(req, res) {
    Skill.create(req.body);


    res.redirect('/skills');
  }

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)

    res.redirect('/skills');
}
  module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/todos/${req.params.id}`);
}

function edit(req, res) {
    const skill = skill.oneSkill(req.params.id);
}

