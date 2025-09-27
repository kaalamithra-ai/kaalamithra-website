import project1 from "./project1.json";
import project2 from "./project2.json";

export const portfolioProjects = [project1, project2];

export const findPortfolioProject = (slug) =>
  portfolioProjects.find((project) => project.slug === slug);
