import React from "react";
import styled from "styled-components";

const CurrentProject = () => {
  return (
    <ProjectInfo>
      <h2>Project Title</h2>
      <p>Information about the project...</p>
    </ProjectInfo>
  );
};

export default CurrentProject;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--maxxed-out);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20vh;
  padding-left: var(--padded-out);
  padding-right: var(--padded-out);
  justify-items: start;

  h2 {
    color: var(--accent);
  }
`;
