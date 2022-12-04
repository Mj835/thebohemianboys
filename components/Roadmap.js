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
                  <li>Activation of Staking</li>
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
                  <li>
                    First IRL meet up with 150 selected holders (all travel
                    expenses paid)
                  </li>
                  <li>
                    A portion of funds will be given to an NGO providing better
                    shelter to animals
                  </li>
                  <li>Exclusive meeting with travel bloggers, celebrities</li>
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
                  <li>
                    Holders will get a chance to travel in chartered helicopters
                    around world famous cities.
                  </li>
                  <li>Travel themed Giveaways to 100 holders</li>
                  <li>First ever Metaverse museum</li>
                  <li>
                    Exclusive first-class flight tickets to selected countries
                    to Limited holders.
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
                  <li>Legendary holders will receive giveaway</li>
                  <li>
                    Uncommon & common holders will get a chance to participate
                    in giveaway
                  </li>
                  <li>
                    Holders will get a 7 day vacation to their destination of
                    there choosing all expenses paid
                  </li>
                  <li>
                    Holders will have the opportunity to travel in private jet
                  </li>
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
