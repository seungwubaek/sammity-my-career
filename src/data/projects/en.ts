import path from 'path';
import { Project } from '@/types/projects';

let baseUrlPathname = '';

const projects: Project[] = [
  {
    title: 'Dockerizing Internal Solutions',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_docker.png'),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Docker Packaging of Solutions, and OpenSource Thrift, Spark, Hadoop, Zeppelin, R-Studio, Jupyter Notebook, and ' +
      'Memcached that are communicated with the solutions, and Link between docker containers',
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
      'Packaging 3~4 solutions and OpenSource Thrift, Spark Hadoop, Zeppelin, R-Studio, Jupyter Notebook, ' +
        'Memcached to Docker Image (Docker Image can omit complex Installation process required by each program ' +
        'on bare metal, and can install and link Opensource in closed network environment without internet)',
      'Link docker containers so that Authentication of each program is performed normally in Docker',
      'Prevent data generated by each program from being volatile by Docker Container up/down',
      'Implement shell-based general-purpose build script that can automatically re-build to Docker Image ' +
        'after updating each program code',
      'Minimize Docker Image by installing minimum required OS and dependency packages',
    ],
  },
  {
    title: 'Development of ETL Solution',
    representativeImageSrc: path.join(baseUrlPathname, 'proj_etl_process.png'),
    where: 'Mobigen Co., Ltd.',
    summary:
      'ETL server based on Spring Boot and Worker Agent solution based on Python.' +
      'ETL server serves management, monitoring and data visualization of connected Worker Agent and Slave Node. ' +
      'Worker Agent executes ETL Java Job created by Talend on each Node.',
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
      'Development page of ETL Dashboard and system summary data visualization',
      'Development page of management, monitoring, visualization for Master and Slave Node',
      'Development page of Talend Job execution/stop by controlling Worker Agent using API, and monitoring management',
      'Development page of user access control and management',
    ],
  },
  {
    title: 'L* Co. - Refrigerator Pre-diagnosis Service using Deep Learning',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_l_refrig_deep.png'
    ),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Research and development of deep learning engine that diagnoses machine failure from sensor data output from ' +
      'smart refrigerator, and Development of platform running that deep learning engine',
    startedAt: '2017. 11',
    endedAt: '2018. 11',
    participationRate: 75,
    usedSkills: ['Python', 'Tensorflow', 'R', 'Tkinter'],
    tasks: [
      'Basic statistics analysis and visualization',
      'Correlation analysis, Cross-correlation analysis, Logistic Regression, Time series analysis',
      'Development of Deep Learning algorithm (DNN, CNN, Bi-LSTM, AutoEndoder, Ensemble Model)',
      'Development of final failure pre-diagnosis program using Deep Learning engine (Deep Learning Classification)',
      'Development of GUI program for real-time data visualization and failure diagnosis of refrigerator',
    ],
  },
  {
    title: 'SmartCity SW Security Monitoring System Development',
    representativeImageSrc: path.join(baseUrlPathname, 'proj_audit_system.png'),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Development of internal security threat detection system for Linux system administrator in SmartCity',
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
      'Research on internal security policies such as NISPOM and prior papers',
      'Linux user activity log tracking with RHEL Audit Subsystem',
      'Implementation of logic to process Linux user audit logs using Telegraf, Logstash, and send them to Kafka',
      'Implementation of preprocessing logic using PySpark before sending Audit data stored in HDFS to Deep Learning engine',
    ],
  },
  {
    title: 'S* Co. - Similar Sound Recommendation',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_s_recommendation_engine.png'
    ),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Seoul National University-Industry Cooperation Project - Deep Learning Platform for Similar Sound Recommendation',
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
      'Research and share the information of Mel-Spectrogram and Deep Learning algorithm VGG used in sound embedding',
      'Development of Restful Agent Server based on Flask',
      'Development of Fast Vector Search Machine using FAISS (Facebook AI Similarity Search)',
      'Packaging Flask Server to Docker and Link with other programs',
    ],
  },
  {
    title: 'Pre-research on Financial Data Analysis',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_stock_collector.png'
    ),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Pre-research on collecting and analyzing stock data of KOSPI top stocks',
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
      'Analysis of stock data',
      'Development of GUI program to collect data of hundreds of stocks in top KOSPI every day using PyQt and multi-threading technology',
      'Install windows virtual OS using Linux KVM for non-stop operation',
    ],
  },
  {
    title:
      'Data Enhancement and Dataset Bias Mitigation Techniques Based on Data Quality Evaluation',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_data_fairness.png'
    ),
    where: 'Mobigen Co., Ltd.',
    summary:
      'Development of data quality measurement, quality improvement, and bias mitigation techniques for data used in deep learning',
    startedAt: '2020. 04',
    endedAt: '2020. 12',
    participationRate: 33,
    usedSkills: ['Python', 'Tensorflow', 'AIF360'],
    tasks: [
      'Research on prior studies such as IBM AIF360, Microsoft Fairlearn, Google PAIR',
      'Development of data bias detection and processing program using IBM AIF360',
      "Research biased learning of Large Language Model (MS 'Tay', ScatterLab 'Luda Lee' v1), " +
        'Adversarial Attack on Deep Learning Model, Latest Model Research (ELMo, Attention Mechanism, Transformer, BERT)',
    ],
  },
  {
    title: 'Marine Food B2B E-Commerce Platform - SeaRoadS',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_searoad_s.png'),
    where: 'MosePeople Co., Ltd.',
    summary:
      'B2B E-Commerce platform project that connects marine food producers and small and medium-sized marine food wholesalers.' +
      'Afterwards, we plan to build a nationwide smart distribution network, automate marine food preservation and distribution, ' +
      'provide marine food price information, and develop a platform for distributors only',
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
      'Planning service and Design system',
      'Development of React-based Web Server',
      'Development of Django-based Restful API BackEnd Server',
      'Design and Construction of DB based on MySQL',
      'Django-based Authentication using phone number and email',
      'Easy login function based on OAuth2.0 in Django',
      'Toss Payment System Integration',
      'SEO Implementation',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster',
      'Construction of cloud server infrastructure, Web Server CI/CD, and Deployment of Backend Server using AWS Route53, VPC, Elastic Load Balancer, Amplify, EC2, MySql, S3',
    ],
  },
  {
    title: 'Company Official Homepage',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_mosepeople.png'),
    where: 'MosePeople Co., Ltd.',
    summary:
      'Development of React-based company official homepage. From backend restful api server based on django, ' +
      'create/read/update/delete news articles, and From frontend based on react, render CSR pages and ' +
      'news articles fetched from backend',
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
      'Development of React-based Web Server',
      'Development of Django-based Restful API BackEnd Server',
      'Implementation of article CRUD using Django-based custom Admin Site',
      'SEO Implementation',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster',
      'Construction of cloud server infrastructure, Web Server CI/CD, and Deployment of Backend Server ' +
        'using AWS Route53, VPC, Elastic Load Balancer, Amplify, EC2, MySql, S3',
    ],
  },
  {
    title: 'Landing Page',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'proj_ir_landing_page.png'
    ),
    where: 'MosePeople Co., Ltd.',
    summary: 'Production of landing page for IR and product promotion',
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
      'Development of static web page based on Jekyll',
      'SEO Implementation',
      'Google Analytics, Naver Search Adviser, Microsoft Bing Webmaster Tools, Yandex Webmaster',
      'Web Server CI/CD using AWS Amplify',
    ],
  },
  {
    title:
      'Food Ingredients B2C Distribution Platform for Medium & Small Mart - Domego',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_domego.png'),
    where: 'MosePeople Co., Ltd.',
    summary:
      'B2C E-Commerce Platform that connects medium/small marts, who have difficulty promoting on online, ' +
      'and customers. with React-based frontend and Fastapi-based MVC backend server',
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
      'Planning service and Design system',
      'Development of React-based Web Server',
      'Design and Construction of DB based on MariaDB',
      'Development of FastAPI-based Restful API Backend Server',
      'Construction of cloud server infrastructure, Web Server CI/CD, and Deployment of Backend Server ' +
        'using AWS OpenSearch, DynamoDB, Amplify, EC2, MariaDB, S3',
    ],
  },
  {
    title: 'Korean Product Promotion Site for Uzbekistan - KOMART',
    representativeImageSrc: path.join(baseUrlPathname, 'logo_komart.png'),
    imageBorderRadius: 'round',
    where: 'MosePeople Co., Ltd.',
    summary:
      'Development of React-based website that introduces Korean products to Uzbekistan, ' +
      'and connects local wholesalers with Korean manufacturers',
    startedAt: '2023. 05',
    endedAt: '2023. 08',
    participationRate: 100,
    usedSkills: ['MS PPT'],
    tasks: [
      'Research on similar services',
      'Initial design considering local culture',
      'Service planning',
      'DataBase design',
    ],
  },
  {
    title: 'Convenient MoneyBook',
    representativeImageSrc: path.join(
      baseUrlPathname,
      'logo_conv_moneybook.png'
    ),
    where: 'Personal Project',
    summary:
      'Mobile Application based on React Native that records personal transactions by distinguishing ' +
      'between income and expenditure, and provides transaction information visualization and reporting services. ' +
      'Supports both Google Play Store and Apple App Store.',
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
      'Reasearch on similar services',
      'Design of DB Schema',
      'Planning and Design of personalization using Firebase',
      'Design of UI',
      'Planning AdMob-based advertising exposure',
      'Implementation of Transaction (income/expenditure/transfer) CRUD function and UI',
      'Implementation of Asset (Cash/Hana Card/Samsung Card, etc.) management function and UI',
      'Implementation of Asset Group (Check Card/Credit Card/Insurance, etc.) management function and UI',
      'Implementation of Category (transportation expenses/food expenses/shopping, etc.) management function and UI',
      'Implementation of Bottom Sheet UI that can edit asset, asset group, and category in transaction CRUD screen',
      'Implementation of Report Generation Function of Transaction and UI',
      'Support both Android and iOS',
    ],
  },
];

export default projects;
