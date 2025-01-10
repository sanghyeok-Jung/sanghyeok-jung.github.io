import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Home from './Home';
import Resume from './Resume';
import Qa from './Qa';
import Developer from './Developer';
import Contact from './Contact';

const navItems = ['Resume', 'QA', 'Developer', 'Contact'];

export default function App() {
  const [content, setContent] = useState('Home');

  return (
    <>
      <Box sx={{ width: '100%', minWidth: '1080px', backgroundColor: '#1b1b1b' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button key={'Home'} sx={{ color: 'white' }} onClick={() => setContent('Home')}>
              HOME
            </Button>
          </Box>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white' }} onClick={() => { setContent(item) }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
      <Box sx={{ backgroundColor: '#1b1b1b', width: '100%', minWidth: '1080px', color: 'white', mx: 'auto' }}>
        {
          content === 'Home' ? <Home />
            : content === 'Resume' ? <Resume />
              : content === 'QA' ? <Qa />
                : content === 'Developer' ? <Developer />
                  : content === 'Contact' ? <Contact />
                    : null
        }
      </Box>
    </>
  );
}
