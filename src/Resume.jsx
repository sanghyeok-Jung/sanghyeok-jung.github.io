import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedIcon from '@mui/icons-material/Verified';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';

export default function Resume() {
    return (
        <Box className="container" sx={{ padding: '20px', backgroundColor: '#1b1b1b', color: 'white' }}>
            {/* Introduce Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <PersonIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Introduce
                    </Typography>
                </Box>
                <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#1b1b1b', color: 'white' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '15px', width: '100%' }}>
                        <CardContent sx={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '16px', padding: '16px', backgroundColor: '#1b1b1b', color: 'white' }}>
                            <Typography variant="body1" component="p" align="left" fontWeight={'bold'}>
                                개발 지식을 겸비한 QA<br />
                                - 웹 서비스 개발 업무 경험<br />
                                - 개발 프로세스에 대한 폭 넓은 이해<br />
                                - 프로그래밍 언어에 대한 지식
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', backgroundColor: '#1b1b1b', color: 'white' }}>
                            <Typography variant="body1" component="p" align="left" fontWeight={'bold'}>
                                모바일 앱 자동화 테스트 개발이 가능한 QA<br />
                                - Python, Appium 을 활용한 모바일 앱 자동화 테스트 개발 주도<br />
                                - 자동화 테스트 결과 및 성능 측정 결과를 기록/관리 하기 위해 데이터베이스 구축<br />
                                - 데이터베이스 데이터를 시각화한 대시보드 웹 페이지 구축
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* Education Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <SchoolIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Education
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 인덕대학교 컴퓨터소프트웨어학과 졸업 (전공심화과정 수료 및 학사 졸업)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 자바 & 스프링 프레임워크 개발자 양성 과정 수료 (강남 그린 컴퓨터 아카데미)
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* History Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <WorkIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        History
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 넥슨네트웍스 (2017 - 2020): 모바일 게임 QA
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - K2 KOREA (2021 - 2022): 사내 전산 관리 및 ERP 유지보수
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 아이엔소프트 (2022 - 2023): 웹 서비스 개발
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - SOOP (2023 - 2025): Android, AndroidTV, iOS 앱 QA 및 자동화 테스트 개발
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* Certificates Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <VerifiedIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Certificates
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 정보처리기사 (2020.11)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - ISTQB foundation level (2018.07)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 정보처리산업기사 (2016.07)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 네트워크관리사 2급 (2012.12)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 정보기술자격ITQ 한글 (2011.10)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 정보기술자격ITQ 파워포인트 (2011.10)
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - 정보기술자격ITQ 엑셀 (2011.06)
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* Skills Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <BuildIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Skills
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - Python, Appium, Selenium, Git
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - Java, Spring, javascript, React
                        </Typography>
                        <Typography variant="body1" component="p" align="left">
                            - SQL, MariaDB, MySQL
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}