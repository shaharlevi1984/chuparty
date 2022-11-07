import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="left-nav">
          <div className="logo-container">
            <div className="logo-text"><a href="#">Chuparty</a></div>
            <div className="logo-img"><img src="./assets/logo.png" alt="icon" id="logo-img"/></div>
          </div>
        </div>
      </nav>

      <div className="header">
        <header>ברוכים הבאים ל- !ChuParty</header>
      </div>

      <section className="info">
      <div className="details">
      המערכת המספקת את היכולת לתרגל את הקורסים שלכם, <br/>
            ולפתור מבחנים בצורה נוחה <br/>
            <button class="login">Login</button>
      </div>
      </section>

      <div class="banner">
        <img src="./assets/chuparty_banner.png" alt="banner"/>
      </div>
    </div>
  );
}

export default App;
