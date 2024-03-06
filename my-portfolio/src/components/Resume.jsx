import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";

const Resume = () => {
    return (
        <Box sx={{ paddingTop: '64px' }}>
            <Container component="main" maxWidth="md">
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        My Resume
                    </Typography>

                    <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                        <Typography variant="h6" component="h2">
                            Work Experience
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Full Stack Web Developer" secondary="Freelance - February 2024 to Present" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Tech Team Member" secondary="Target - February 2023 to May 2023" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Field Operations Coordinator Veteran Intern" secondary="Soldiers' Angels July 2022 to December 2022" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Package Handler" secondary="Contract/UPS - October 2021 to January 2022" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Driver/Account Manager" secondary="Koch Trucking - October 2017 to July 2020" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Blackhawk Pilot" secondary="US Army - January 2010 to December 2016" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Medic" secondary="US Army - August 2006 to January 2010" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Meat Dept Team Member" secondary="Target - June 2003 to July 2006" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Produce Associate" secondary="Bob's Produce Ranch - January 2002 to June 2006" />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                        <Typography variant="h6" component="h2">
                            Education
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="Full Stack Web Development" secondary="U of MN Full Stack Web Development Coding BootCamp by EdX - 2024" />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="UH-60 Pilot" secondary="US Army Aviation Center of Excellence - 2010 to 2012" />
                            </ListItem>
                        </List>
                    </Paper>

                    <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                        <Typography variant="h6" component="h2">
                            Skills
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary="HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Leadership, Problem Solving, Teamwork, Time Management, Adaptability, Communication, and Organization" />
                            </ListItem>
                        </List>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default Resume;