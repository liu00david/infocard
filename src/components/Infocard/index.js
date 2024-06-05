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
            in Economics. I'm based in NYC, during
            my free time, I learn about personal finance, building keyboards,
            bouldering, and cooking.
          </div>
          <div className="heading">engineering</div>
          <div className="paragraph">
            My primary focus is on <span class="green-text">DevOps and Production Engineering</span>. Some of
            the key projects I've led involve migrating Yahoo's production applications
            to cloud services such as <span class="green-text">AWS</span> and
            <span class="green-text"> GCP</span>, and building out the
            <span class="green-text"> CI/CD</span> pipelines
            integrating both our internal and external dependencies.
            <div class="mini-space"></div>
            For these apps I have also developed
            containerization and orchestration using <span class="green-text"> Docker </span>and<span class="green-text"> Kubernetes</span>.
            I've obtained a strong understanding of corporate security and compliance,
            and best practices such as <span class="green-text">IaC</span> (infrastructure as code) to enforce these policies.
            <div class="mini-space"></div>
            I look forward to diving deeper into
            applications of AI and ML and how we can leverage its potential to further enhance our technological landscape.

            <div className="heading">some links</div>
            <div className="paragraph">
              <div class="mini-space"></div>
              <a href="https://github.com/liu00david/fun" target="_blank" rel="noreferrer" class="linkcontainer">
                Github
              </a>
              <a href="https://liu00david.github.io/home/" target="_blank" rel="noreferrer" class="linkcontainer">
                Main website
              </a>
              <a href="https://www.linkedin.com/in/liu00david/" target="_blank" rel="noreferrer" class="linkcontainer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/finding.david/" target="_blank" rel="noreferrer" class="linkcontainer">
                Instagram @finding.david
              </a>
              <a href="https://drive.google.com/drive/folders/1Su2RrV7zt-fZYIWyg7A7FQkvEoXyHUFQ?usp=drive_link" target="_blank" rel="noreferrer" class="linkcontainer">
                Life spreadsheets
              </a>
              <a href="mailto:liudavid@uchicago.edu" target="_blank" rel="noreferrer" class="linkcontainer">
                Email me
              </a>
            </div>

            <div className="heading">videos I liked</div>
            <div className="paragraph">
              <div class="mini-space"></div>
              <a href="https://www.youtube.com/watch?v=1S3Ca9v6pyo" target="_blank" rel="noreferrer" class="darklinkcontainer">
                one boat caused a $400 million an hour traffic jam
              </a>
              <a href="https://www.youtube.com/watch?v=wdfF-doIVjo" target="_blank" rel="noreferrer" class="darklinkcontainer">
                how singapore became the world's hub
              </a>
              <a href="https://www.youtube.com/watch?v=4V9pPGrpN1E" target="_blank" rel="noreferrer" class="darklinkcontainer">
                make easy butter chicken for $2.40
              </a>
              <a href="https://www.youtube.com/watch?v=dsHyUgGMht0" target="_blank" rel="noreferrer" class="darklinkcontainer">
                how github's database self-destructed in 43 seconds
              </a>
              <a href="https://www.youtube.com/watch?v=7ZRqeRRik8c" target="_blank" rel="noreferrer" class="darklinkcontainer">
                first descent of k2 on skis
              </a>
              <a href="https://www.youtube.com/watch?v=QHQTzeve7OM" target="_blank" rel="noreferrer" class="darklinkcontainer">
                wework the $47 billion disaster
              </a>
              <a href="https://www.youtube.com/watch?v=J-M98KLgaUU" target="_blank" rel="noreferrer" class="darklinkcontainer">
                what went wrong with drone delivery
              </a>
            </div>
            <div class="mega-space"></div>
          </div>
        </div>
      </div>
    </InfocardContainer>
  );
};

export default Landing
