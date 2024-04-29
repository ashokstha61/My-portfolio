/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div className={styles.container}>
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={getImageUrl(imageSrc)}
      alt={`Image of ${title}`}
      className={styles.image}
    />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
      {skills.map((skill, id) => {
        return (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        );
      })}
    </ul>
    <div className={styles.links}>
      <a href={demo} className={styles.link}>
        Demo
      </a>
      <a href={source} className={styles.link}>
        Source
      </a>
    </div>
  </div>
);
