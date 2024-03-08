const filterProjects = (projects, filterType) => {
  // If 'All' is selected, return the entire projects array
  if (filterType === "All") {
    return projects;
  }

  // Filter the projects based on the projectType matching the filterType
  const filteredProjects = projects.filter(
    (project) => project.projectType === filterType
  );
  return filteredProjects;
};


export default filterProjects