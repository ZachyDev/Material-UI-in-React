import React from 'react'
import { Button, ListItemButton,ListItemText, Alert, CircularProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Fingerprint } from '@mui/icons-material'
function Contact() {
  return (
    <>
        <h2>Contact Us</h2>
        <Button variant='contained'>Contact Us</Button>
        <Button variant='outlined' color='error'>Reach Us</Button>
        <IconButton aria-label='fingeprint' color='success'>
          <Fingerprint />
        </IconButton>
        <ListItemButton componenent='a'>
          <ListItemText primary='Coffee' />
        </ListItemButton>
        <Alert severity='warning' variant='outlined'>Follow our official accounts</Alert>
        <Alert severity='success' variant='filled'>We are now available on Twitter!</Alert>
        <CircularProgress />
        </>
  )
}

export default Contact;