import styles from "../styles/Home.module.css";

const Roadmap = () => {
  return (
    <div name="roadmap" className={styles.roadmap}>
      <h1>Roadmap</h1>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>25% / Phase 1 (100 ETH)</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>
                    25holders will get chance to travel in private jet(25ETH)
                  </li>
                  <li>
                    Merchandise store of fancy travel equipments and gears for
                    holders (Suitcases & Luggage) (50ETH)
                  </li>
                  <li>
                    25ETH will be given to an organization for providing better
                    water supply in African countries.
                  </li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>50% / Phase 2 (100ETH)</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>
                    Activation of funds & community wallet for staking of
                    (50ETH)
                  </li>
                  <li>
                    First IRL meet up with 150 selected holders (all travel
                    expenses paid)(10ETH)
                  </li>
                  <li>
                    15ETH will be given to an NGO providing better shelter to
                    animals
                  </li>
                  <li>
                    Exclusive meeting with travel bloggers, celebrities (25ETH)
                  </li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>75% / Phase 3 (100ETH)</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>
                    15 holders will get chance to travel in chartered
                    helicopters around the famous cities. (35ETH)
                  </li>
                  <li>
                    10ETH worth of giveaways to 100 holders(roomcard, luxury
                    escapes)
                  </li>
                  <li>
                    First ever Metaverse museum of our collection and
                    collaboration with other NFT collections to take part in the
                    museum(35ETH)
                  </li>
                  <li>
                    Exclusive first-class flight tickets to selected countries
                    to 20 holders worth 1ETH each (20ETH)
                  </li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <h3>100% / Phase 4 (200ETH)</h3>

              <div>
                <ul style={{ listStyle: "disc", marginLeft: 25 }}>
                  <li>Legendary holders will receive 10ETH each (50ETH)</li>
                  <li>
                    Uncommon & common holders will get a chance to participate
                    in giveaway worth of 1ETH each (50ETH)
                  </li>
                  <li>
                    10 holders will get a 7 days’ vacation to their favorite
                    country with all expenses paid (10ETH) each
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
