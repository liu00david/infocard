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
             <span class="green-text"> University of Chicago </span> in 2022 with a BS in Computer Science and a BA
            in Economics. I'm based in NYC, and during
            my free time, I explore personal finance, travel deals, cryptocurrency, mechanical keyboards,
            bouldering, and cooking.
          </div>
          <div className="heading">engineering</div>
          <div className="paragraph">
            My primary scope is <span class="green-text">Cloud Platform Engineering</span>. Some
            key projects I work on include the migration of Yahoo's Location service applications
            to cloud native technologies such as <span class="green-text">AWS</span> and
            <span class="green-text"> GCP.</span> Most services are based in <span class="green-text"> Kubernetes </span> via managed services AWS EKS and GCP GKE.
            I'm directly involved in architecting solutions with an
            emphasis in reliability, scalability, and observability, to 
            serve the <span class="green-text"> 100M+ </span> requests our APIs handle daily.
            <div class="mini-space"></div>
            Through my involvement in software handling sensitive PII data, I've obtained a strong understanding of <span class="green-text"> corporate security and compliance. </span>
            Using infrastructure as code, <span class="green-text"> IaC, </span>
            our systems can be maintained easily and carefully to ensure data security.
            <div class="mini-space"></div>
            As I continue to hone my skills as an engineer, I look forward to diving deeper into
            applications of AI and ML and how we can leverage its potential to further enhance our world.

            <div className="heading">some links</div>
            <div className="paragraph">
              <div class="mini-space"></div>
              <a href="https://github.com/liu00david/" target="_blank" rel="noreferrer" class="linkcontainer">
                Github
              </a>
              <a href="https://liu00david.github.io/home/" target="_blank" rel="noreferrer" class="linkcontainer">
                Main website
              </a>
              <a href="https://www.linkedin.com/in/liu00david/" target="_blank" rel="noreferrer" class="linkcontainer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/finding.david/" target="_blank" rel="noreferrer" class="linkcontainer">
                Insta @finding.david
              </a>
              <a href="https://drive.google.com/drive/folders/1Su2RrV7zt-fZYIWyg7A7FQkvEoXyHUFQ?usp=drive_link" target="_blank" rel="noreferrer" class="linkcontainer">
                My spreadsheets
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
              <a href="https://www.youtube.com/watch?v=4V9pPGrpN1E" target="_blank" rel="noreferrer" class="darklinkcontainer">
                make easy butter chicken for $2.40
              </a>
              <a href="https://www.youtube.com/watch?v=dsHyUgGMht0" target="_blank" rel="noreferrer" class="darklinkcontainer">
                how github's database self-destructed in 43 seconds
              </a>
              <a href="https://www.youtube.com/watch?v=Sle2xnj5VSw" target="_blank" rel="noreferrer" class="darklinkcontainer">
                el salvador's $17,000,000,000 bitcoin city
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
