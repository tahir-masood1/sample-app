import React, { useEffect, useState } from "react";
import styles from "./DetailPage.module.css";
import { Card, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { jobsData } from "../../dummyData";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const params = useParams()?.id;
  console.log(params, "paramssss");
  useEffect(() => {
    const jobDetailFind = jobsData.find((item) => item?.id == params);
    setJob(jobDetailFind);
  }, []);

  return (
    <>
    <Header width={    "79%"}/>
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.cardHeader}>
          <Typography variant="h5">
            <i class="fa-solid fa-heading"></i> Title:{job?.title}
          </Typography>
        </div>
        <div className={styles.cardBody}>
          <Typography variant="body1" className={styles.location}>
            <i class="fa-solid fa-person-walking-luggage"></i> Employment Type:{" "}
            {job?.employement_type}
          </Typography>

          <Typography variant="body2" className={styles.description}>
            <i class="fa-thin fa-memo-circle-info"></i>
            Description:
            {job?.description}
          </Typography>
        </div>
        <div className={styles.cardFooter}>
          <Button
            variant="contained"
            color="primary"
            className={styles.applyButton}
          >
            Apply
          </Button>
        </div>
      </Card>
    </div    >
    <Footer/>
    </>

  );
};

export default JobDetailPage;
