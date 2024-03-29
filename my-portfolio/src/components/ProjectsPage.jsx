import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { Link } from'react-router-dom';
// import { waitFor } from '@testing-library/react';

// Example project data
const projects = [
  {
    name: 'Bassline',
    description: 'Final Group Project for the Web Development Bootcamp at the University of Minnesota.',
    imageUrl: 'path/to/screenshot1.png', // TODO: Add image
    repoUrl: 'https://github.com/CWOChris/bassline.git',
    liveUrl: 'https://koeboldt.github.io/bassline/'
  },
  {
    name: 'Learn You Somethin',
    description: 'This app will generate a professional looking readme.md file for your project.',
    imageUrl: 'path/to/screenshot2.png',
    repoUrl: 'https://github.com/CWOChris/learn-you-somethin.git',
    liveUrl: 'https://cwochris.github.io/learn-you-somethin/'
  },
  {
    name: 'Silver-Screenr',
    description: "An app that allows users to search for movies,view their trailers and other info and to like and comment on movies they've watched.",
    imageUrl: `${process.env.PUBLIC_URL}/assets/silver-screenr.png`,
    repoUrl: 'https://github.com/CWOChris/silver-screenr.git',
    liveUrl: 'https://cwochris.github.io/Silver-Screenr/'
  },
  {
    name: 'Administratio-Personarum',
    description: 'A full stack web application that allows users to create, edit, and delete employee information.',
    imageUrl: 'path/to/screenshot4.png',
    repoUrl: 'https://github.com/CWOChris/administratio-personarum.git',
    liveUrl: 'https://cwochris.github.io/administratio-personarum/'
  },
  {
    name: 'Symbolum-Magicae',
    description: 'An SVG logo creator.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/circle-ex.svg`,
    repoUrl: 'https://github.com/CWOChris/symbolum-magicae.git',
    liveUrl: 'https://cwochris.github.io/symbolum-magicae/'
  },
  {
    name: 'Actus-Dei',
    description: 'A 5 day weather forecast app.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/actus-dei.png`,
    repoUrl: 'https://github.com/CWOChris/actus-dei.git',
    liveUrl: 'https://cwochris.github.io/actus-dei/'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Grid container spacing={4} sx={{ padding: '20px', paddingTop: '96px' }}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: '100%', borderRadius: '13px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={project.repoUrl} target="_blank">
                View Repo
              </Button>
              <Button size="small" color="primary" href={project.liveUrl} target="_blank">
                View Live
              </Button>
              <Button size="small" color="primary" component={Link} to="/contact">
                Contact Me!
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
