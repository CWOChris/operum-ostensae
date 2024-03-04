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
                            <ListItemText primary="Blackhawk Pilot" secondary="US Army - January 2010 to December 2016" />
                        </ListItem>
                        {/* Add more job experience(s) here as the example above indicates to */}
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
                        {/* Add more education experience(s) here as the example above indicates to */}
                    </List>
                </Paper>

                <Paper elevation={3} sx={{ my: 4, p: 2 }}>
                    <Typography variant="h6" component="h2">
                        Skills
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL" />
                        </ListItem>
                        {/* Add more skills here as the example above indicates to */}
                    </List>
                </Paper>
                {/* Add more sections as applicable with time */}
            </Box>
        </Container>
    );
};

export default Resume;