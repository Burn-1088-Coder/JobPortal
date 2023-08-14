import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import {Logo} from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
            aliquam culpa eligendi unde at adipisci dignissimos nisi ipsa hic
            nostrum maxime iusto impedit quas, dolore earum tempore nihil a
            quae, in similique vero nemo recusandae cumque. Illum assumenda
            voluptas non eos reprehenderit, natus ullam esse distinctio
            consequuntur, saepe iure error.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="main" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
