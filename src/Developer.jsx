import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import BuildIcon from '@mui/icons-material/Build';
import StarIcon from '@mui/icons-material/Star';

export default function Developer() {
    return (
        <Box className="container" sx={{ padding: '20px', backgroundColor: '#1b1b1b', color: 'white', maxWidth: '800px', mx: 'auto' }}>
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <BuildIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Projects
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            1. 현대홈쇼핑 차세대 프로젝트<br/>
                            - 소개 : 배치/스케줄 관리 어드민 시스템<br/>
                            - 기술 : Spring Batch, Spring Boot, Quartz, Mybatis, Oracle, React, typescript, Material UI<br/>
                            - 담당 업무 : 배치 어드민(관리자 포탈) 개발, 배치 실행 API 서버 개발, 배치 스케줄러 API 서버 전체 구조 설계 및 개발
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> Batch Admin
                        </Typography>
                        <img src="resources/dev_1.png" width="100%" />
                        <img src="resources/dev_2.png" width="100%" />
                    </CardContent>
                </Card>

                <Divider sx={{ backgroundColor: 'white' }} />

                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            2. 중소벤처24 헬프데스크<br/>
                            - 소개 : Q&A 및 요청사항 관리 서비스<br/>
                            - 기술 : Spring Boot, Postgresql, JPA, Mybatis, React, typescript, Bootstrap<br/>
                            - 담당 업무 : 웹페이지 및 API 개발
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> Help Desk
                        </Typography>
                        <img src="resources/dev_3.png" width="100%" />
                        <img src="resources/dev_4.png" width="100%" />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}