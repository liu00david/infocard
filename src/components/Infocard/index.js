import React from "react";
import { InfocardContainer } from './InfocardElements'
import './styles.css'; // Import your CSS file for styling

const Landing = () => {
  return (
    <InfocardContainer>
      <div className="infocard">
        <div className="infocard-content">
          <div className="title">David Liu</div>
          <div className="heading">about me</div>
          <div className="paragraph">
            I'm currently a <span class="green-text">software engineer at Yahoo! </span>
            I graduated from the
            University of Chicago in 2022 with a BS in Computer Science and a BA
            in Economics. Currently I'm based in NYC. During
            my free time, I'm working on personal finance, building keyboards,
            bouldering, and cooking.
          </div>
          <div className="heading">engineering</div>
          <div className="paragraph">
            My primary focus is on <span class="green-text">DevOps and Production Engineering</span>. Some of
            the key projects I've led involve migrating Yahoo's production apps
            to cloud services such as <span class="green-text">AWS</span> and
            <span class="green-text"> GCP</span>, and building out the
            <span class="green-text"> CI/CD</span> pipelines
            integrating both our internal and external dependencies.
            <div class="mini-space"></div>
            Importantly, as our apps adapted to the cloud environment, I've also introduced
            containerization and orchestration using <span class="green-text"> Docker </span>and<span class="green-text"> Kubernetes</span>.
            Through this work I've also developed a strong understanding of the security and compliance,
            and how to use <span class="green-text">IaC</span> (infrastructure as code) to enforce these policies.
            <div class="mini-space"></div>
            As I continue this journey, I additionally look forward to diving deeper into
            applications of AI and ML and how we can leverage its potential to further enhance our technological landscape.

            <div className="heading">links</div>
            <div className="paragraph">
              <a href="https://github.com/liu00david/fun" class="linkcontainer">
                Github
              </a>
              <a href="https://liu00david.github.io/home/" class="linkcontainer">
                Main site
              </a>
              <a href="https://drive.google.com/drive/folders/1Su2RrV7zt-fZYIWyg7A7FQkvEoXyHUFQ?usp=drive_link" class="linkcontainer">
                Spreadsheets I can't live without
              </a>
              <a href="https://www.linkedin.com/in/liu00david/" class="linkcontainer">
                Linkedin
              </a>
            </div>

          </div>
        </div>
      </div>
    </InfocardContainer>
  );
};

export default Landing
