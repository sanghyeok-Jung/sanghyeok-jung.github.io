import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <Box className="container" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#1b1b1b', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="resources/profile.png" alt="profile" style={{ marginRight: '20px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%' }}>
                    <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', padding: '50px' }}>
                        Jung Sang Hyeok
                    </Typography>
                    <Typography variant="body1" component="p" align="left" style={{ alignSelf: 'flex-end', padding: '20px' }}>
                        안녕하세요.<br/>
                        배우는 것을 좋아하고, 새로운 것에 도전하는 것을 좋아하는 QA 정상혁입니다.<br/>
                        제 좌우명은 'Carpe diem' (현재를 즐겨라) 입니다.<br/>
                        천재는 노력하는 자를 이길 수 없고,<br/>
                        노력하는 자는 즐기는 자를 이길 수 없다는 말이 있습니다.<br/>
                        저는 제게 주어진 것을 즐기면서 항상 최고가 될 수 있도록 노력하겠습니다.
                    </Typography>
                </div>
            </div>
        </Box>
    )
}