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
                <h3>Project Foundation</h3>
              </strike>
              <div>
                <ul>
                  <li>Establish Artistic Direction</li>
                  <li>Secure $100k in funding</li>
                  <li>Legal &amp; Fiscal Structure</li>
                  <li>Onboard Inhouse dev &amp; artist</li>
                </ul>
              </div>
              <span className={styles.circle}></span>
            </div>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineItemContent}>
              <strike>
                <h3>Community Launch</h3>
              </strike>
              <div>
                <ul>
                  <li>Launch Twitter &amp; Discord</li>
                  <li>Hire team of Moderators</li>
                  <li>Launch Artist Grant Program</li>
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
