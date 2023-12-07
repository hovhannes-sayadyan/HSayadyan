import { memo } from "react";
import "./Services.css";
import Servicecard from "./components/servicecard";

function ServicesAll() {
  return (
    <section className="ServicesAllBig">
      <div>
        <h1 className="ServH1">WHAT I DO</h1>
      </div>
      <div className="ServicesAll">
        <Servicecard
          img={`./Assets/HtmlLogo.png`}
          about={`HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. `}
          link={`https://developer.mozilla.org/en-US/docs/Web/HTML`}
        />
        <Servicecard
          img={`./Assets/CssLogo.png`}
          about={`Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML `}
          link={`https://developer.mozilla.org/en-US/docs/Web/CSS`}
        />
        <Servicecard
          img={`./Assets/JsLogo.png`}
          about={`JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions`}
          link={`https://developer.mozilla.org/en-US/docs/Web/JavaScript`}
        />
        <Servicecard
          img={`./Assets/ReactLogo.png`}
          about={`The library for web and native user interfaces`}
          link={`https://en.wikipedia.org/wiki/React_(software)`}
        />
        <Servicecard
          img={`./Assets/SassLogo.png`}
          about={`Sass is a stylesheet language that's compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax.`}
          link={`https://sass-lang.com/documentation/#:~:text=Sass%20is%20a%20stylesheet%20language,a%20fully%20CSS%2Dcompatible%20syntax.`}
        />
        <Servicecard
          img={`./Assets/GitHubLogo.png`}
          about={`GitHub, Inc. (/ˈɡɪthʌb/[a]) is a platform and cloud-based service for software development and version control, allowing developers to store and manage their code. `}
          link={`https://en.wikipedia.org/wiki/GitHub`}
        />
        <Servicecard
          img={`./Assets/GitLogo.png`}
          about={`Git allows and encourages you to have multiple local branches that can be entirely independent of each other. The creation, merging, and deletion of those lines`}
          link={`https://en.wikipedia.org/wiki/Git`}
        />
        <Servicecard
          img={`./Assets/BootstapLogo.png`}
          about={`Bootstrap is a giant collection of handy, reusable bits of code written in HTML, CSS, and JavaScript.`}
          link={`https://www.w3schools.com/whatis/whatis_bootstrap.asp`}
        />
        <Servicecard
          img={`./Assets/NpmLogo.png`}
          about={`npm stands for Node Package Manager. It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.`}
          link={`https://docs.npmjs.com/about-npm`}
        />
      </div>
    </section>
  );
}

export default memo(ServicesAll);
