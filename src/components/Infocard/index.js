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
            I'm currently a <span class="green-text">software engineer at Coinbase. </span>
            I graduated from the
             <span class="green-text"> University of Chicago </span> in 2022 with a B.S. in Computer Science and a B.A.
            in Economics. I'm based in NYC, and during
            my free time, I explore personal finance, travel deals, cryptocurrency, mechanical keyboards,
            bouldering, and cooking.
          </div>
          <div className="heading">engineering</div>
          <div className="paragraph">
            My primary field is in <span class="green-text">Cloud Platform Engineering</span>. At Coinbase, my projects focus on developer tooling and CI/CD pipelines,
            with a goal of establishing secure and robust build-to-release software lifecycles. Previously as an software engineer at Yahoo, 
            I was directly involved in architecting solutions with an
            emphasis in reliability, scalability, and observability, to 
            serve the <span class="green-text"> 100M+ </span> requests that the Location APIs handle daily.
              
            <div class="mini-space"></div>
            As an engineer that builds software that directly has financial and customer impact, I've obtained a strong understanding of <span class="green-text"> corporate security and compliance. </span>
            Using infrastructure as code, <span class="green-text"> IaC, </span>
            our systems can be maintained easily and carefully to ensure data security.
            <div class="mini-space"></div>
            Lately, I have taken a keen interest in integrating <span class="green-text"> Cursor </span> and <span class="green-text"> Claude, </span> to my daily workflows
            to maxmimize my efficiency as a developer and learner. 

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

            <div className="heading">content I like</div>
            <div className="paragraph">
              <div class="mini-space"></div>
              <a href="https://docs.google.com/document/d/1eteZbvepAMoe1eUYkyixyW-CVnuJBgaQeUKIIhMyUi4/edit?usp=drive_link" target="_blank" rel="noreferrer" class="darklinkcontainer">
                my airline lounges docs
              </a>
              <a href="https://www.youtube.com/watch?v=4V9pPGrpN1E" target="_blank" rel="noreferrer" class="darklinkcontainer">
                make easy butter chicken for $2.40
              </a>
              <a href="https://www.youtube.com/watch?v=dsHyUgGMht0" target="_blank" rel="noreferrer" class="darklinkcontainer">
                github's database self-destructed in 43 seconds
              </a>
              <a href="https://www.youtube.com/watch?v=Sle2xnj5VSw" target="_blank" rel="noreferrer" class="darklinkcontainer">
                el salvador's $17b bitcoin city
              </a>
              <a href="https://www.youtube.com/watch?v=QHQTzeve7OM" target="_blank" rel="noreferrer" class="darklinkcontainer">
                wework the $47b billion disaster
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
