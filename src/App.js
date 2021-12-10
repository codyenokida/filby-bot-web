import React from "react";
import FadeIn from "react-fade-in";

import discordImg from "./images/landing-page-img.png";
import airtableExample from "./images/airtable-example.png";
import commands from "./images/commands.png";
import whitelistProspect from "./images/whitelist-prospect.png";
import monitors from "./images/monitors.png";

import ImageTextRow from "./components/ImageTextRow";
import "./App.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <nav className="navigation">Filby Bots 🤖</nav>
      <div className="landing-page-container">
        <div className="landing-page-items">
          <h1>The Premier Discord Service for NFT Projects</h1>
          <h3 className="landing-page-subtitle">
            FILBY is the all-in-one discord service for any NFT related project
            in the space. We provide tons of features, including wallet
            collection, server management, opensea monitors, and more.
          </h3>
        </div>
        <div className="landing-page-image-container">
          <img
            src={discordImg}
            className="landing-page-image"
            alt="landing-page"
          />
        </div>
      </div>
      <FadeIn>
        <ImageTextRow
          title="Unparalleled Organization 📙"
          imagePosition="left"
          imageSrc={airtableExample}
        >
          FILBY Bots gives you the easiest whitelist address collection. No
          setup, no bullsh*t. All whitelisted members in your discord server
          will be able to directly input their ETH address directly from
          discord.
        </ImageTextRow>
      </FadeIn>
      <FadeIn>
        <ImageTextRow
          title="Easy commands 🔒"
          imagePosition="right"
          imageSrc={commands}
        >
          FILBY Bots provides 8+ commands for whitelisted users, admins, and
          moderators. Each command can be configured with role ids for maximum
          security.
        </ImageTextRow>
      </FadeIn>
      <FadeIn>
        <ImageTextRow
          title="Organize your whitelisting process 📒"
          imagePosition="left"
          imageSrc={whitelistProspect}
        >
          FILBY Bots includes a brand new whitelist prospect functionality for
          administrators to easily organize how many whitelists (and a reason
          why) they want to give out per day.
        </ImageTextRow>
      </FadeIn>
      <FadeIn>
        <ImageTextRow
          title="Monitor OpenSea and Twitter 🖥️"
          imagePosition="right"
          imageSrc={monitors}
        >
          FILBY Bots also hooks up OpenSea and Twitter monitors for your server.
          All you need is a webhook and a community.
        </ImageTextRow>
      </FadeIn>
      <FadeIn>
        <div className="interested">
          <h1>Intersted???</h1>
          <p>
            Our starting prices are 0.5 ETH, but price negotiable on the
            package. Hit us up on discord!
          </p>
          <button className="blue-button">Open Discord</button>
        </div>
      </FadeIn>
      <Footer />
    </div>
  );
};

export default App;
