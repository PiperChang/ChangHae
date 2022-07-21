import React from 'react';
import styles from './Project.module.css';
import gitHubLogo from '../../asset/github-logo.svg';
interface Props {
  project: {
    title: string;
    description: string;
    link: string;
  };
}

export default function Project({ project }: Props) {
  return (
    <div className={styles.Container}>
      <div className={styles.ImgContainer}>
        <img
          src={require(`../../asset/project/${project.title}.PNG`)}
          alt={project.title}
        />
      </div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} className={styles.gitHub}>
        <img
          src={gitHubLogo}
          style={{
            filter:
              'invert(100%) sepia(5%) saturate(7500%) hue-rotate(265deg) brightness(112%) contrast(102%)',
          }}
        />
      </a>
    </div>
  );
}
