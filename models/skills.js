const skills = [
    {id: 2035, skill: "Gaming Wizard", done: true},
    {id: 1976, skill: "Research Assistant", done: false},
    {id: 1738, skill: "Time Management", done: true}
]

function getAll() {
    return skills;
}

function oneSkill(id) {
    id = parseInt(id)

    return skills.find(skill => skill.id === id);
}
function create(skill) {
skill.id = Date.now() % 1000000;

    skill.done =false;
    skills.push(skill);
  }

  function deleteOne (id) {
    id = parseInt(id)

    const idx = skills.findIndex(skill => skill.id ===id);
    skills.splice(idx, 1);
  }
  
  module.exports = {
    getAll,
    oneSkill,
    create,
    deleteOne,
    update
  };

  function update(id, updateSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => todo.id === id);
    skill.skill = updatedSkill.skill;
    Object.assign(skill, updatedSkill);
  }
