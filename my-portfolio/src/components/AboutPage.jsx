import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AboutPage = () => {
    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                <img src="/public/assets/CWOChris.jpg" alt="Photo of me on a beach of Tiran Island, Saudi Arabia" style={{ height: '300px', width: '300px', marginRight: '20px' }} />
                <Box>
                    <Typography component="h1" variant="h4" gutterBottom>
                        About Me
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I am a full-stack web developer with a passion for building and maintaining web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also familiar with SQL. I am a lifelong learner and am always looking for opportunities to expand my skill set.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        I am a United States Army veteran with over 10 years of service. I have experience in leadership, management, and training. I am a team player and am comfortable working in a team environment or independently. I am a problem solver and am comfortable working in high-stress and fast-paced environments.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutPage;