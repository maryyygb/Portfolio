export const getAllProjects = (req, res) => {
  res.status(200).send("you got 5 projects");
};

export const createNewProject = (req, res) => {
  res.status(201).send("you add new project");
};

export const getProject = (req, res) => {
  res.status(200).send("you view one project");
};

export const updateProject = (req, res) => {
  res.status(200).send("you updated a project");
};

export const deleteProject = (req, res) => {
  res.status(200).send("you deleted a project");
};
