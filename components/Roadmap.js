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
                  <li>
                    Holders will get chance to travel in private jet
                  </li>
                  <li>
                    Merchandise store of fancy travel equipments and gears for
                    holders (Suitcases & Luggage)
                  </li>
                  <li>
                    Funds will be given to an organization for providing better
                    water supply in African countries.
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
                  <li>
                    Activation of funds & community wallet for staking of
                  </li>
                  <li>
                    First IRL meet up with 150 selected holders (all travel
                    expenses paid)
                  </li>
                  <li>
                    Funds will be given to an NGO providing better shelter to
                    animals
                  </li>
                  <li>
                    Exclusive meeting with travel bloggers, celebrities
                  </li>
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
                    Holders will get chance to travel in chartered
                    helicopters around the famous cities.
                  </li>
                  <li>
                    Giveaways to 100 holders(roomcard, luxury
                    escapes)
                  </li>
                  <li>
                    First ever Metaverse museum of our collection and
                    collaboration with other NFT collections to take part in the
                    museum
                  </li>
                  <li>
                    Exclusive first-class flight tickets to selected countries
                    to 20 holders.
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
                  <li>Legendary holders will receive gifts</li>
                  <li>
                    Uncommon & common holders will get a chance to participate
                    in giveaway.
                  </li>
                  <li>
                    Holders will get a 7 days’ vacation to their favorite
                    country with all expenses paid
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
