import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function CoolComponent({ adjective = "Cool" }) {
  return <p>Youpi So {adjective} !!</p>;
}

/**not compile because props bad context of the form = NORMAL */
function PourquoiPrefererJSXComponent() {
  return (
    <form method="post" action="/sessions" onSubmit={this.handleSubmit}>
      <p className="field">
        <label>
          E-mail
          <input
            type="email"
            name="email"
            required
            autoFocus
            value={this.state.email}
            onChange={this.handleFieldChange}
          />
        </label>
      </p>
      <p className="field">
        <label>
          Mot de passe
          <input
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleFieldChange}
          />
        </label>
      </p>
      <p>
        <button type="submit" value="Connexion" />
      </p>
    </form>
  );
}

function NiHTMLniXmlComponent() {
  return <br />;
}

function StringPropComponent() {
  return (
    <div>
      <input
        type="email"
        name="email"
        maxlength={42}
        readonly={false}
        onChange={this.handleFieldChange}
        value={this.state.value}
      />
      <input type="email" name="email" autoFocus required />

      <div className="class1">
        <form action="/action_page.php">
          <label htmlFor="male">Male</label>
        </form>
      </div>

      <div>
      <form method="post" action="/sessions" onSubmit={this.handleSubmit}>
  {/* La classe 'field' assure l’espacement vertical convenable */}
  <p className="field">
    <label>
      E-mail
      <input type="email" name="email" required autoFocus
        value={this.state.email}
      
        Comments KO
        Avec les champs controles il est indispensable de fournir onChange
        pour éviter que le champ soit fourni en lecture seule au niveau du
        DOM
       
        onChange={this.handleFieldChange}
      />
    </label>
  </p>
  <p><button type="submit" value="Connexion" /></p>
</form>
      </div>
    </div>
  );
}

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
    PourquoiPrefererJSXComponent
    <br />
    NiHTMLniXmlComponent
    <StringPropComponent />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
