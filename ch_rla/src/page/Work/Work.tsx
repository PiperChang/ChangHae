import React from 'react';
import Project from '../../components/Work/Project';
import styles from './Work.module.css';
import projects from '../../components/Work/Projects';

export default function Work() {
  console.log(projects);

  const projectList = projects.map((project) => (
    <Project key={project.title} project={project} />
  ));
  return (
    <>
      <header>Work</header>
      <main className={styles.Container}>
        <div className={styles.ProjectsList}>{projectList}</div>
      </main>
    </>
  );
}
