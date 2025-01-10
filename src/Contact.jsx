import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
    return (
        <Box className="container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1b1b1b', color: 'white' }}>
            <Card sx={{ minWidth: 275, backgroundColor: '#1b1b1b', color: 'white', border: '1px solid #ddd', borderRadius: '8px' }}>
                <CardContent>
                    <Typography variant="h4" component="div" gutterBottom>
                        Contact
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PersonIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" component="p">
                            정상혁
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <CakeIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" component="p">
                            1993. 5. 12
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <PhoneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" component="p">
                            010-4875-4939
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" mb={2}>
                        <EmailIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" component="p">
                            tkdgur1798@gmail.com
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <GitHubIcon sx={{ mr: 1 }} />
                        <Typography variant="body1" component="p">
                            tkdgur1798@gmail.com
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}