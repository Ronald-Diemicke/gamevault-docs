import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

import ImgLibrary from "@site/static/img/features/library.png";
import ImgMicrosoftStore from "@site/static/img/features/microsoftstore.png";
import ImgAuth from "@site/static/img/features/adminview.png";
import ImgSocial from "@site/static/img/features/communitytab.png";
import ImgEnrichments from "@site/static/img/features/gameview.png";
import ImgGithub from "@site/static/img/features/opensource.png";

const FeatureList = [
  {
    title: "🎮 Create your own Gaming Platform and Share It with Friends!",
    img: ImgLibrary,
    description: (
      <>
        Keep your game collection organized and share your favorite titles with
        your friends using our user-friendly platform on your file server.
      </>
    ),
  },
  {
    title: "🔒 Complete Control of Your Server, Games, and Access!",
    img: ImgAuth,
    description: (
      <>
        Our platform allows you to control who can access your server and choose
        who can download and play your games.
      </>
    ),
  },
  {
    title:
      "🕹️ Keep in touch with your buddies and check their gaming progress!",
    img: ImgSocial,
    description: (
      <>
        Using social features, you can keep in touch with friends and find out
        what they're playing and explore new games to try.
      </>
    ),
  },
  {
    title: "📈 Enhance your Games with endless Metadata!",
    img: ImgEnrichments,
    description: (
      <>
        Add juicy metadata to your games with our powerful integrations and
        unlock the full potential of GameVault.
      </>
    ),
  },
  {
    title: "🪟 Install easily from Microsoft Store",
    img: ImgMicrosoftStore,
    description: (
      <>
        There's no need to compile anything. Our client application is
        officially available in the{" "}
        <a href="https://www.microsoft.com/store/apps/9PCKDV76GL75">
          Microsoft Store
        </a>
        .
      </>
    ),
  },
  {
    title: "👥 Join our community and help us with our project!",
    img: ImgGithub,
    description: (
      <>
        Join our expanding community, contribute to our source-available
        project! Everybody can help!
      </>
    ),
  },
];

function Feature({ title, img, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={img}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
