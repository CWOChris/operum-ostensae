import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AboutPage = () => {
    return (
        <Container component="main" maxWidth="md">
            <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography component="h1" variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a full-stack web developer with a passion for building and maintaining web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also familiar with SQL. I am a lifelong learner and am always looking for opportunities to expand my skill set.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a United States Army veteran with over 10 years of service. I have experience in leadership, management, and training. I am a team player and am comfortable working in a team environment or independently. I am a problem solver and am comfortable working in high-stress environments.
                </Typography>

            </Box>
        </Container>
    );
};

export default AboutPage;

// delete below once harvested:

// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';

// const AboutPage = () => {
//   return (
//     <Container component="main" maxWidth="md">
//       <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <Typography component="h1" variant="h4" gutterBottom>
//           About Me
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Hi, I'm [Your Name], a web developer with a passion for creating engaging and
//           intuitive digital experiences. With a background in [Your Background], I've
//           developed a diverse skill set in both frontend and backend technologies,
//           specializing in React.js, Node.js, and modern web development practices.
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Throughout my career, I've had the opportunity to work on a variety of projects,
//           from small business websites to large-scale web applications. My approach to
//           development is centered around user experience, ensuring that every project I work
//           on is accessible, responsive, and performant.
//         </Typography>
//         <Typography variant="body1" paragraph>
//           I'm constantly exploring new technologies and techniques to expand my knowledge
//           and improve my craft. When I'm not coding, you can find me [Your Hobbies or Interests].
//         </Typography>
//         <Typography variant="body1" paragraph>
//           Feel free to explore my portfolio to see a selection of my work, or get in touch
//           if you'd like to discuss how I can contribute to your project.
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default AboutPage;
