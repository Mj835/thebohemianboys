import styles from "../styles/Home.module.css";

const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
      <h1>Roadmap</h1>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineContainer}>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <strike>
                <h3>25% | Phase 1</h3>
              </strike>
              <div>
                <ul>
                  <li>Giveaway to 25 holders</li>
                  <li>Merchandise store of fancy travel equipments and
                    gears for holders (Suitcases & Luggage)</li>
                  <li>Funds will be given to an organization for providing
                    better water supply in African countries</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <strike>
                <h3>50% | Phase 2</h3>
              </strike>
              <div>
                <ul>
                  <li>Activation of funds & community wallet for staking</li>
                  <li>First IRL meet up with 25 selected holders (all
                    expenses paid)</li>
                  <li>Funds will be given to an NGO providing better
                    shelter to animals</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <strike>
                <h3>75% | Phase 3</h3>
              </strike>
              <div>
                <ul>
                  <li>Adding more items to Merchandise store</li>
                  <li>First ever Metaverse museum of our collection and
                    collaboration with other NFT collections to take part
                    in the museum</li>
                  <li>Exclusive flight tickets to selected countries to 20
                    holders</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <strike>
                <h3>100% | Phase 4</h3>
              </strike>
              <div>
                <ul>
                  <li>Legendary holders will receive rewards</li>
                  <li>Uncommon & common holders will get a chance to
participate in giveaway</li>
                  <li>10 holders will get to travel to their favorite country
for a week with all expenses paid</li>
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
