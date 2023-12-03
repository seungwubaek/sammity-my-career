import path from 'path';
import { Project } from '@/types/projects';

// TODO: need to use markdown converting

let baseUrlPathname = '';

const projects: Project[] = [
  {
    title: '사내 솔루션 Dockerizing',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_docker.png'),
    where: '(주)모비젠',
    summary:
      '사내 솔루션들과 사내 솔루션에 연동되는 OpenSource Thrift, Spark, Hadoop, Zeppelin, R-Studio, Jupyter Notebook, ' +
      'Memcached의 Docker 패키징과 container 간 연동 작업',
    startedAt: '2016. 10',
    endedAt: '2017. 01',
    participationRate: 100,
    usedSkills: [
      'Docker',
      'Linux',
      'Shell Script',
      'Zeppelin',
      'Jupyter Notebook',
      'R-Studio',
    ],
    tasks: [
      '3~4개 사내 솔루션과 Thrift, Spark Hadoop, Zeppelin, R-Studio, Jupyter Notebook, Memcached를 Docker Image로 ' +
        '패키징 (Docker Image를 이용하면 베어메탈에서 각 프로그램이 요구하는 복잡한 Installation 과정을 생략할 수 있으며, ' +
        '폐쇄 네트워크 환경에서도 인터넷 없이 Opensource 등을 설치하고 연동할 수 있음)',
      'Docker 내부에서 각 프로그램의 Authentication이 정상 수행 되도록 연동',
      '각 프로그램에서 생성한 데이터가 Docker Container up/down에 의해 휘발되지 않도록 처리',
      '각 프로그램을 업데이트 한 후, Docker Image로 자동 re-build 할 수 있도록 shell 기반 범용 build 스크립트 구현',
      '각 프로그램에서 요구하는 Linux Alpine 등 최소 요구 OS와 의존성 패키지를 최소 설치하여 Docker Image 경량화',
    ],
  },
  {
    title: 'ETL 솔루션 개발',
    representativeImageSrc: path.join(baseUrlPathname, 'proj_etl_process.png'),
    where: '(주)모비젠',
    summary:
      'Spring Boot 기반의 ETL 서버 및 Python 기반 Worker Agent 솔루션. ' +
      'ETL 서버는 연동되는 Worker Agent 및 Slave Node의 관리, 모니터링, 데이터 시각화 제공 ' +
      'Worker Agent는 각 Node에서 Talend로 생성한 ETL Java Job을 실행.',
    startedAt: '2017. 01',
    endedAt: '2017. 12',
    participationRate: 30,
    usedSkills: [
      'Spring Boot',
      'Tomcat',
      'Javascript',
      'HTML',
      'CSS',
      'Python',
      'Sqlite',
      'Talend',
    ],
    tasks: [
      'ETL 서버의 Dashboard 구현 및 시스템 요약 데이터 시각화 페이지 개발',
      'Master, Slave Node 관리 및 모니터링 데이터 시각화 페이지 개발',
      'Worker Agent를 API로 제어하여 Talend Job 실행/중지 및 모니터링 페이지 개발',
      '사용자 관리/권한설정 페이지 개발',
    ],
  },
  {
    title: 'L사 - 딥러닝을 이용한 스마트 냉장고 사전진단 서비스',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_l_refrig_deep.png'
    ),
    where: '(주)모비젠',
    summary:
      '스마트 냉장고에서 출력되는 센서 데이터로부터 고장을 진단하는 딥러닝 엔진의 연구 및 개발, ' +
      '해당 딥러닝 엔진을 탑재한 프로그램 개발',
    startedAt: '2017. 11',
    endedAt: '2018. 11',
    participationRate: 75,
    usedSkills: ['Python', 'Tensorflow', 'R', 'Tkinter'],
    tasks: [
      '기초통계량 분석 및 시각화',
      '상관분석, 교차상관분석, Logistic Regression, 시계열분석',
      'Deep Learning 알고리즘 개발 (DNN, CNN, Bi-LSTM, AutoEncoder, Ensemble Model)',
      'Deep Learning 엔진을 이용한 최종 고장 사전 진단 (Deep Learning Classification)',
      '냉장고 실시간 데이터 시각화 및 고장 진단 GUI 프로그램 개발',
    ],
  },
  {
    title: '한**력공사 - 스마트시티 SW보안 관제 시스템 개발',
    representativeImageSrc: path.join(baseUrlPathname, 'proj_audit_system.png'),
    where: '(주)모비젠',
    summary:
      '스마트시티 내 리눅스 시스템 권한자에 대한 내부자 보안 위협 감지 시스템 개발',
    startedAt: '2018 .06',
    endedAt: '2019 .04',
    participationRate: 50,
    usedSkills: [
      'RHEL Audit Subsystem',
      'Logstash',
      'Telegraf',
      'Hadoop',
      'HDFS',
      'Kafka',
      'Python',
      'Tensorflow',
    ],
    tasks: [
      'NISPOM 등 내부자 보안 관련 정책 및 선행 연구 논문 조사',
      'RHEL Audit Subsystem으로 Linux 사용자 활동 로그 추적',
      'Telegraf, Logstash를 활용하여 Linux 사용자 audit 로그를 가공하고 Kafka로 전송하는 로직 구현',
      'PySpark를 이용하여 HDFS에 저장된 Audit 데이터를 딥러닝 엔진으로 보내기전 전처리 로직 구현',
    ],
  },
  {
    title: 'S사 - 유사 음원 추천',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_s_recommendation_engine.png'
    ),
    where: '(주)모비젠',
    summary:
      '서울대 산학 협력 프로젝트 - 유사음원추천 딥러닝 엔진을 플랫폼에 탑재',
    startedAt: '2019. 05',
    endedAt: '2019. 06',
    participationRate: 25,
    usedSkills: [
      'Python',
      'Flask',
      'Gunicorn',
      'Tensorflow',
      'Kubernetes',
      'Docker',
      'FAISS',
    ],
    tasks: [
      '음원 임베딩에 활용한 Mel-Spectrogram과 Deep Learning 알고리즘 VGG에 대한 연구 및 사내 공유',
      'Flask 기반 Restful Agent Server 개발',
      'FAISS (Facebook AI Similarity Search) 이용한 고속 벡터 검색 서버 개발',
      'Flask Server를 Docker로 패키징하고 다른 프로그램과 네트워크 연동',
    ],
  },
  {
    title: '금융 데이터 분석 선행 연구',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_stock_collector.png'
    ),
    where: '(주)모비젠',
    summary: 'KOSPI 상위 종목에 대한 주식 데이터 수집 및 분석 선행 연구',
    startedAt: '2020. 01',
    endedAt: '2021. 08',
    participationRate: 100,
    usedSkills: [
      'Python',
      'Flask',
      'Hadoop',
      'HDFS',
      'Spark',
      'Linux',
      'KVM',
      'Windows',
    ],
    tasks: [
      '주식 데이터 분석',
      'PyQt과 멀티 쓰레딩 기술을 활용하여 매일 KOSPI 상위 수백 종목에 대한 데이터를 수집하는 GUI 프로그램 개발',
      '24시간 무중단 운영을 위하여 Linux KVM를 활용해 Windows 가상 OS 구축',
    ],
  },
  {
    title: '데이터 품질 평가기반 데이터 고도화 및 데이터셋 보정 기술',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_data_fairness.png'
    ),
    where: '(주)모비젠',
    summary:
      '딥러닝에 활용되는 데이터의 품질 측정과 품질 개선 및 편향 완화 기술 개발',
    startedAt: '2020. 04',
    endedAt: '2020. 12',
    participationRate: 33,
    usedSkills: ['Python', 'Tensorflow', 'AIF360'],
    tasks: [
      'IBM AIF360, Microsoft Fairlearn, Google PAIR 등 선행 연구 조사',
      'AIF360을 이용한 데이터 편향 탐지 및 가공 프로그램 개발',
      "거대언어모델의 학습편향 조사 (MS 'Tay', 스캐터랩 '이루다' v1), Deep Learning 모델 적대적 공격, " +
        'LLM 최신 모델 조사 (ELMo, Attention Mechanism, Transformer, BERT)',
    ],
  },
  {
    title: '수산물 B2B E-Commerce 플랫폼 - 바닷길S',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_searoad_s.png'),
    where: '(주)모세피플',
    summary:
      '전국 수산물 산지업자와 중소규모 수산 도매업자를 연결하는 B2B E-Commerce 플랫폼 프로젝트. ' +
      '이후 전국 스마트 유통망 구축, 수산물 보존 및 유통 자동화, 수산물 시세 정보 제공, 유통업자 전용 플랫폼 개발 예정',
    startedAt: '2021. 09',
    endedAt: '2023. 05',
    participationRate: 70,
    usedSkills: [
      'Python',
      'Django',
      'Javascript',
      'React',
      'AWS',
      'AWS EC2',
      'AWS Amplify',
      'AWS S3',
      'AWS Route53',
      'AWS RDS',
      'AWS Elastic Load Balancer',
      'AWS VPS',
      'SEO',
      'Google Analytics',
      'Github',
      'Payment',
    ],
    tasks: [
      '서비스 기획 및 시스템 설계',
      'React 기반 웹 서버 개발',
      'Django 기반 백엔드 Restful API 서버 개발',
      'MySQL 기반 DB 설계 및 구축',
      'Django에서 핸드폰, 메일을 이용한 Authentication 기능 구현',
      'Django에서 OAuth2.0 기반 간편로그인 기능 구현',
      'Toss Payment 결제 시스템 연동',
      'SEO 구현',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster 연동',
      'AWS Route53, VPC, Elastic Load Balancer, Amplify, EC2, MySql, S3 등을 활용하여 클라우드 서버 인프라 구축, 웹 서버 CI/CD, 백엔드 서버 배포',
    ],
  },
  {
    title: '회사 공식 홈페이지 제작',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_mosepeople.png'),
    where: '(주)모세피플',
    summary:
      'React 기반 회사 홈페이지 제작. Django 기반 백엔드 Restful API 서버에서 소식 게시물을 생성/조회/수정/삭제하고, ' +
      'React 기반 프론트엔드에서 CSR 페이지 및 백엔드로부터 가져온 소식 게시물을 렌더링',
    startedAt: '2022. 10',
    endedAt: '2023. 05',
    participationRate: 70,
    usedSkills: [
      'Python',
      'Django',
      'WYSIWYG',
      'Javascript',
      'React',
      'AWS',
      'AWS EC2',
      'AWS Amplify',
      'AWS S3',
      'AWS Route53',
      'AWS RDS',
      'AWS Elastic Load Balancer',
      'AWS VPS',
      'SEO',
      'Google Analytics',
      'Github',
      'Payment',
    ],
    tasks: [
      'React 기반 웹 서버 개발',
      'Django 기반 백엔드 Restful API 서버 개발',
      'Django 기반 커스텀 Admin Site를 이용한 게시물 작성 기능 구현',
      'SEO 구현',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster 연동',
      'AWS Route53, VPC, Elastic Load Balancer, Amplify, EC2, MySql, S3 등을 활용하여 클라우드 서버 인프라 구축, 웹 서버 CI/CD, 백엔드 서버 배포',
    ],
  },
  {
    title: '랜딩페이지',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_ir_landing_page.png'
    ),
    where: '(주)모세피플',
    summary: 'IR과 제품 홍보를 위한 랜딩페이지 제작',
    startedAt: '2021. 09',
    endedAt: '2022. 09',
    participationRate: 70,
    usedSkills: [
      'HTML',
      'CSS',
      'Javascript',
      'Jekyll',
      'SEO',
      'Google Analytics',
      'AWS Amplify',
      'Github',
    ],
    tasks: [
      'Jekyll 기반 정적 웹페이지 개발',
      'SEO 구현',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster 연동',
      'AWS Amplify를 통한 웹 서버 CI/CD ',
    ],
  },
  {
    title: '중소형 마트 식자재 B2C 유통 중개 플랫폼 - 도매공식',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_domego.png'),
    where: '(주)모세피플',
    summary:
      '온라인을 통한 판촉에 어려움을 겪는 중소형 마트 사업자를 대상으로, ' +
      '고객과 온라인 거래를 중개하는 B2C E-Commerce 플랫폼. ' +
      'React 기반 프론트엔드, Fastapi 기반 MVC 구조의 백엔드 서버로 구성.',
    startedAt: '2022. 02',
    endedAt: '2022. 12',
    participationRate: 90,
    usedSkills: [
      'Python',
      'Fastapi',
      'SQLAlchemy',
      'React',
      'AWS Amplify',
      'AWS S3',
      'AWS RDS',
      'AWS OpenSearch',
      'AWS DynamoDB',
      'Git',
    ],
    tasks: [
      '서비스 기획 및 시스템 설계',
      'React 기반 웹 서버 개발',
      'MariaDB 기반 DB 설계 및 구축',
      'FastAPI 기반 백엔드 Restful API 서버 개발',
      'AWS OpenSearch, DynamoDB, Amplify, EC2, MariaDB, S3 등을 활용하여 서버 인프라 구축, 웹 서버 CI/CD, 백엔드 서버 배포',
    ],
  },
  {
    title: '중앙아시아 무역상품 홍보 사이트- KOMART',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_komart.png'),
    imageBorderRadius: 'round',
    where: '(주)모세피플',
    summary:
      '우즈베키스탄에 한국 제품을 소개하고, 현지 도매업자와 한국 제조업자의 거래를 연결해주는 React 기반 웹사이트 개발',
    startedAt: '2023. 05',
    endedAt: '2023. 08',
    participationRate: 100,
    usedSkills: ['MS PPT'],
    tasks: [
      '동종 서비스 조사',
      '현지 문화를 고려한 초기 디자인',
      '서비스 기획',
      'DB 설계',
    ],
  },
  {
    title: '편리한 가계부',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'logo_conv_moneybook.png'
    ),
    where: '개인 프로젝트',
    summary:
      '개인의 거래를 수입/지출을 구분하여 기록하고, 거래 정보의 시각화 및 보고서 서비스 제공하는 ' +
      'React Native 기반 모바일 애플리케이션. Google Play Store, Apple App Store 모두 지원.',
    startedAt: '2021. 08',
    endedAt: '',
    participationRate: 100,
    usedSkills: [
      'React Native',
      'JavaScript',
      'TypeScript',
      'Realm',
      'Firebase',
      'AdMob',
    ],
    tasks: [
      '동종 서비스 조사',
      'Realm DB 설계',
      'Firebase를 이용한 개인화 기획 및 설계',
      'UI 기획',
      'AdMob을 이용한 광고 노출 기획',
      '거래(수입/지출/이체) CRUD 기능 및 UI 구현',
      '자산(현금/하나카드/삼성카드 등) 관리 기능 및 UI 구현',
      '자산그룹(체크카드/신용카드/보험 등) 관리 기능 및 UI 구현',
      '카테고리(교통비/식비/쇼핑 등) 관리 기능 및 UI 구현',
      '거래 CRUD 화면에서 자산, 자산그룹, 카테고리 편집 가능한 Bottom Sheet UI 구현',
      '거래 이력 보고서 생성 기능 기획 및 설계',
      'Android/iOS 지원',
    ],
  },
];

export default projects;
