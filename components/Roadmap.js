import styles from "../styles/Home.module.css";

const Roadmap = () => {
  return (
    <div name="roadmap" className={styles.roadmap}>
      <h1>Roadmap</h1>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>25% / Phase 1</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>High end merch such as travel equipment and gear</li>
                  <li>
                    A portion of funds will be donated to charities focusing on
                    water supply issues in Africa.
                  </li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>50% / Phase 2</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>Activation of Staking</li>
                  <li>Travel goodies giveaways</li>
                  <li>First IRL with holders 75%</li>
                  <li>
                    A portion of funds will be given to an NGO providing better
                    shelter to animals
                  </li>
                  <li>Exclusive meeting with travel bloggers</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>75% / Phase 3</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>First IRL with holders</li>
                  <li>
                    Holders will get a chance to travel in helicopters around
                    famous citiies
                  </li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>100% / Phase 4</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>Metaverse museum</li>
                  <li>Exclusive first class ticket giveaways</li>
                  <li>Legendary holders will receive giveaways</li>
                  <li>
                    Few holders will get a 7 days vacation to their favorite
                    country
                  </li>
                  <li>Exclusive private jet tickets</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
