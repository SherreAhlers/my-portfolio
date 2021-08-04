import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import useStyles from "./styles"

const AboutContainer = () => {
  const classes = useStyles()
  return (
    <main className={classes.aboutContainer}>
      <section>
        <div className={classes.aboutHeader}>
          <h2 className={classes.aboutJobTitle}>Frontend Developer</h2>
        </div>
      </section>
      <section className={classes.imageContainer}>
        <div className={classes.aboutImageContainer}>
          <div className={classes.aboutImageParent}>
            <StaticImage
              src="../../images/about/profile-image.jpeg"
              alt="profile"
              className={classes.aboutImage}
            />
          </div>
        </div>
      </section>
      <section className={classes.aboutMeContainer}>
        <div className={classes.backgroundInfo}>
          <h1 className={classes.title}>Who am I?</h1>
          <p className={classes.sectionInfo}>
            I grew up in a small town, South Padre Island, TX. I love all things
            to do with being in the water. I went to Texas State University in
            San Marcos, TX to study English and Philosophy.<br></br> I am a fur
            baby mother X3, my children include a 13 year old Weimaraner named
            Stryker. She loves hunting for moles and playing in rivers.<br></br>{" "}
            I have a 12 year old Pug named Major Pain (a.k.a Piggy). He loves
            snuggling and sleeping.<br></br> I also have my 5 year old Rhodesian
            Ridgeback named Echo. She loves to play, but hates to snuggle.
          </p>
          <div className={classes.dogImageContainer}>
            <StaticImage
              src="../../images/about/stryker.jpeg"
              alt="stryker"
              // width={120}
              className={classes.dogImage}
            />
            <StaticImage
              src="../../images/about/piggy.jpeg"
              alt="piggy"
              // width={120}
              className={classes.dogImage}
            />
            <StaticImage
              src="../../images/about/echo.jpeg"
              alt="echo"
              // width={120}
              className={classes.dogImage}
            />
          </div>
        </div>
      </section>
      <section className={classes.schoolContainer}>
        <div>
          <h2 className={classes.title}>General Assembly</h2>
          <p className={classes.sectionInfo}>
            For all of my adult life I have been in sales and customer service.
            Up until Covid 19 happened, I was working in house sales. When the
            pandemic hit, I was laid off due to my company having to close and
            social distance.<br></br> I was devastated, but decided to take a
            look at different careers I've been interested in that wouldn't be
            the first to close down in the event of another pandemic. That is
            what led me to Tech.
            <br></br> I began to explore my options and found General Assembly.
            I signed up for their 12 week Immersive Remote Software Engineer
            Program. <br></br>During my time in school I created four projects
            using the full stack developement I was learning. That is where I
            discovered a love for Front End Development.
          </p>
        </div>
      </section>
      <section className={classes.careerPathContainer}>
        <h2 className={classes.title}>Why Frontend Development?</h2>
        <p className={classes.sectionInfo}>
          I have chosen the path of a Front End Developer because I have
          realized I have great attention to detail and I am a very meticulous
          person. I love creating components the user can seamlessly interact
          with.<br></br> I have become incredibly fond of React.js and
          JavaScript, I also have extensive knowledge in CSS(3) and HTML(5). I
          have worked with designs made on Zeplin and had the pleasure of
          bringing those designs to life while working in AGILE environments.
          Because my schooling was remote, I have grown incredibly comfortable
          with communicating with my team through video conferencing platforms
          such as Zoom, and communication platforms such as Slack. I understand
          that no one knows everything, so if I am ever stuck I am very
          resourceful and know my way around Stack Overflow, Google, and various
          chat platforms such as Discord. I am very comfortable working with Git
          and utilizing its platform by creating branches, merging code, and
          debugging code.
        </p>
      </section>
    </main>
  )
}

export default AboutContainer
