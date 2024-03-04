import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_9f38dsw'; // Replace with your actual service ID from EmailJS
    const templateID = 'template_njm7dhu'; // Replace with your actual template ID
    const userID = '7XOzjcqx3iGUE_efT'; // Replace with your actual user ID

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ user_name: '', user_email: '', message: '' }); // Reset form after successful submission
      }, (err) => {
        console.log('FAILED...', err);
        alert("Failed to send the message, please try again.");
      });
  };

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Contact Me
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="message"
                        label="Message"
                        type="text"
                        id="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactPage;