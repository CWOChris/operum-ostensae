import React from "react";
import { Typography, Box, Container, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ marginTop: 8, paddingTop: '64px' }}>
        <Grid container spacing={2} alignItems="flex-start">
          <Grid item xs={12} md={4}> {/* Image takes full width on xs, 1/3 on md and up */}
            <img 
              src={`${process.env.PUBLIC_URL}/assets/CWOChris.jpg`} 
              alt="CWOChris" 
              style={{ height: '300px', width: '100%', maxWidth: '300px', display: 'block', marginRight: 'auto', marginLeft: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={8}> {/* Text takes full width on xs, 2/3 on md and up */}
            <Typography component="h1" variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" paragraph>
              I am a full-stack web developer with a passion for building and maintaining web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also familiar with SQL. I am a lifelong learner and am always looking for opportunities to expand my skill set.
            </Typography>
            <Typography variant="body1" paragraph>
              I am a United States Army veteran with over 10 years of service. I have experience in leadership, management, and training. I am a team player and am comfortable working in a team environment or independently. I am a problem solver and am comfortable working in high-stress and fast-paced environments.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPage;
