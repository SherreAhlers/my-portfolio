import React from "react"

import useStyles from "./styles"

const AboutContainer = () => {
  const classes = useStyles()
  return (
    <main className={classes.homeContainer}>
      <section>
        <div className={classes.homeHeader}>
          <div className={classes.homeTitle}>SHERRE AHLERS PORTFOLIO</div>
          <div className={classes.homeJobTitle}>Frontend Developer</div>
        </div>
      </section>
      <section className={classes.imageContainer}>
        <div className={classes.homeImageContainer}>
          <div className={classes.homeImageParent}>
            <img
              className={classes.homeImage}
              src="https://i.imgur.com/GlKkc40.jpg"
              alt="profile"
            />
          </div>
        </div>
      </section>
      <section className={classes.homeAboutContainer}>
        <div className={classes.backgroundInfo}>
          <h1 className={classes.whoAmI}>Who am I?</h1>
          <p className={classes.homeBio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis nec augue vel tincidunt. Pellentesque accumsan imperdiet
            pharetra. Etiam congue posuere lectus quis malesuada. Nullam pretium
            non orci sit amet dapibus. Sed efficitur, nulla id pulvinar
            faucibus, mauris est suscipit nulla, id fermentum odio tellus non
            nisl. Sed convallis condimentum erat sed elementum. Fusce ut augue
            nec erat ullamcorper pretium. In mauris enim, euismod eget
            consectetur eget, sollicitudin nec nibh.
            <br></br>Nulla ullamcorper nibh lacus, in pellentesque odio feugiat
            a. Duis scelerisque ex eu lorem ultricies ultrices. Vestibulum non
            lorem mi. Vivamus sodales consequat porttitor. Quisque maximus
            eleifend purus eu fringilla. Duis eget nisl accumsan, aliquet mauris
            ut, porttitor sapien.
          </p>
        </div>
      </section>
      <section className={classes.schoolContainer}>
        <div>
          <h2 className={classes.schoolName}>General Assembly</h2>
          <p className={classes.whatILearned}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis nec augue vel tincidunt. Pellentesque accumsan imperdiet
            pharetra. Etiam congue posuere lectus quis malesuada. Nullam pretium
            non orci sit amet dapibus. Sed efficitur, nulla id pulvinar
            faucibus, mauris est suscipit nulla, id fermentum odio tellus non
            nisl.
          </p>
        </div>
      </section>
      <section className={classes.careerPathContainer}>
        <h2 className={classes.careerPathTitle}>Why Frontend Development?</h2>
        <p className={classes.whyFrontendDeveloper}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          convallis nec augue vel tincidunt. Pellentesque accumsan imperdiet
          pharetra. Etiam congue posuere lectus quis malesuada.
        </p>
      </section>
    </main>
  )
}

export default AboutContainer
