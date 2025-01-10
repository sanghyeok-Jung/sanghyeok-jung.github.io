import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/WorkOutline';
import StarIcon from '@mui/icons-material/Star';

export default function Qa() {
    return (
        <Box className="container" sx={{ padding: '20px', backgroundColor: '#1b1b1b', color: 'white', maxWidth: '800px', mx: 'auto' }}>
            {/* Achievements Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <BuildIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Achievements
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            1. SOOP<br/>
                            - Appium, Python을 활용한 모바일 앱 UI 자동화 테스트 개발<br/>
                            - adb를 활용한 Android 디바이스 성능 지표 측정 자동화 (CPU, Memory, Battery)<br/>
                            - 테스트 결과 및 성능 지표를 기록하기 위한 Database 구축 및 관리<br/>
                            - Database 시각화 웹페이지를 개발하여 지표 모니터링 환경 구축
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            2. Nexon Networks<br/>
                            - 블랙박스 테스트 한계를 극복하기 위해 문서 기반 관련 자동화 개발<br/>
                            - 확률형 아이템의 구성품 포함 여부 및 확률 점검을 위해 데이터 문서 검토 매크로 개발<br/>
                            - 업무 문서 양식 자동 생성 기능을 개발하여 <b>'올해의 시도 상'</b> 수상
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* Automation Testing Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <CodeIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Automation Testing
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 프로그래밍 능력을 활용하여 자동화 테스트 개발 주도<br/>
                            - 타인과의 코드 유사성을 높여 유지보수가 용이하도록 자동화 프로젝트 구조 개편 담당<br/>
                            - 데이터베이스를 활용한 모니터링 대시보드 웹페이지 구축
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 2023년 자동화 성과 자료 (자동화 개발 초기)
                        </Typography>
                        <iframe width="100%" height="400" src="resources/2023_automation_achievements.pdf" title="Automation Test Achievement" />
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 2024년 자동화 성과 자료 (자동화 개발 프로젝트 개선)
                        </Typography>
                        <iframe width="100%" height="400" src="resources/2024_automation_achievements.pdf" title="Automation Test Achievement" />
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 데모 영상
                        </Typography>
                        <iframe width="100%" height="400" src="resources/automation_test_demo.mp4" title="Automation Test Demo" />
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 자동화 테스트 코드 예시 (element 처리 기능을 하나의 함수로 통합하여 사용이 쉽도록 관리)
                        </Typography>
                        <Typography variant="body2" component="pre" align="left" sx={{ backgroundColor: '#333', padding: '10px', borderRadius: '8px' }}>
                            {`# Element 동작 공통 함수
def element_action(driver,
                elements,
                id: str = '',
                find: Literal['id', 'xpath', 'icc', 'aid'] = '',
                action: Literal['get_text', 'get_location', 'input', 'check', 'click', 'long_tap', 'get_attribute'] = '',
                value: str = '',
                index: int = 0,
                timeout: int = 40):
    try:
        locator_type = __get_locator_type(find=find)
        wait = WebDriverWait(driver=driver, timeout=timeout)
        element_list = wait.until(EC.visibility_of_all_elements_located((locator_type, elements[id][find])))
        result, element = __select_element(elements=element_list, action=action, value=value, index=index)
        if result:
            if action == 'check':
                logging.info(f'{id} check => True')
                pass
            elif action == 'get_text':
                logging.info(f'{id} get text => {{{element.text}}}')
                return element.text
            elif action == 'get_location':
                el_location = element.location
                el_x = el_location['x']
                el_y = el_location['y']
                logging.info(f'{id} x = {el_x}, y= {el_y}')
                return (el_x, el_y)
            elif action == 'input':
                logging.info(f'{id} input text => {{{value}}}')
                element.send_keys(value)
            elif action == 'click':
                element.click()
                logging.info(f'{id} click => SUCCESS')
            elif action == 'long_tap':
                ActionChains(driver).click_and_hold(element).pause(3).release().perform()
                logging.info(f'{id} long_tap => SUCCESS')
            elif action == 'get_attribute':
                attribute = element.get_attribute(value)
                logging.info(f"{id} get_attribute('{value}') => {attribute}")
                return attribute
            return True
        else:
            return False
    except Exception as e:
        return False`}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* QA Monitoring Dashboard Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <CodeIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        QA Monitoring Dashboard
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 직접 데이터베이스를 구축하고, 저장된 데이터를 모니터링하기 위한 웹 페이지 개발<br/>
                            - 데이터베이스에 대한 지식이 없는 팀원들이 가독성 좋은 방법으로 지표를 파악할 수 있도록 구성
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 자동화 테스트 결과 성공/실패 비율 모니터링
                        </Typography>
                        <img src="resources/dashboard_test_result.png" width="100%"/>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 자동화 테스트 중 측정한 디바이스 성능 지표 모니터링
                        </Typography>
                        <img src="resources/dashboard_performance.png" width="100%"/>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> Firebase Crashlytics 크래시 미발생률 지표 모니터링
                        </Typography>
                        <img src="resources/dashboard_crash_free.png" width="100%"/>
                    </CardContent>
                </Card>
            </Box>

            <Divider sx={{ backgroundColor: 'white' }} />

            {/* Documents Macro Section */}
            <Box mb={4} mt={4}>
                <Box display="flex" alignItems="center" mb={2}>
                    <WorkIcon sx={{ mr: 1, color: 'white' }} />
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'white' }}>
                        Documents Macro
                    </Typography>
                </Box>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            - 블랙박스 테스트만 가능한 환경에서의 자동화 시도<br/>
                            - 실 전체가 사용하는 공통 문서에 자동 완성 매크로를 추가하여 <b>'올해의 시도 상'</b> 수상
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 확률형 아이템 구성품 포함 여부 점검 매크로
                        </Typography>
                        <img src="resources/qa_macro1.png" wihdth="100%"/>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 확률형 아이템 확률 점검을 위한 시뮬레이션 테스트 점검 매크로
                        </Typography>
                        <img src="resources/qa_macro2.png" wihdth="100%"/>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#1b1b1b', color: 'white' }}>
                    <CardContent>
                        <Typography variant="body1" component="p" align="left">
                            <StarIcon sx={{ mr: 1, color: 'white' }} /> 실 공통 사용 문서 양식 자동 완성 매크로
                        </Typography>
                        <img src="resources/qa_macro3.png" wihdth="100%"/>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}