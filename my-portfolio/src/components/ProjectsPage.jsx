import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';

// Example project data
const projects = [
  {
    name: 'Project 1',
    description: 'This is a description for Project 1.',
    imageUrl: 'path/to/screenshot1.png',
    repoUrl: 'https://github.com/user/project1'
  },
  {
    name: 'Project 2',
    description: 'This is a description for Project 2.',
    imageUrl: 'path/to/screenshot2.png',
    repoUrl: 'https://github.com/user/project2'
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
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
