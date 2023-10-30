import path from 'path';

import { type Skill } from '@/types/skills';

let baseUrlPathname = '';
// if (process.env.NODE_ENV === 'development') {
//   baseUrlPathname = '/assets/images';
// } else {
//   baseUrlPathname =
//     'https://cdn-sammity-career.s3.ap-northeast-2.amazonaws.com/assets/images';
// }

const skills: Skill[] = [
  {
    name: 'HTML',
    level: 8,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_html.png'),
      width: 256,
      height: 361,
      borderRadius: 'square',
    },
  },
  {
    name: 'CSS',
    level: 6,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_css.png'),
      width: 256,
      height: 361,
      borderRadius: 'square',
    },
  },
  {
    name: 'Sass',
    level: 5,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_sass.png'),
      width: 256,
      height: 192,
    },
  },
  {
    name: 'Jekyll',
    level: 6,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_jekyll.png'),
      width: 512,
      height: 209,
    },
  },
  {
    name: 'Liquid',
    level: 6,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_liquid.jpg'),
      width: 693,
      height: 334,
    },
  },
  {
    name: 'JavaScript',
    level: 6,
    category: ['Language', 'FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_javascript.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'TypeScript',
    level: 6,
    category: ['Language', 'FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_typescript.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'React',
    level: 6,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_react.png'),
      width: 256,
      height: 228,
    },
  },
  {
    name: 'React Native',
    level: 5,
    category: ['FrontEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_react_native.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'Next.js',
    level: 6,
    category: ['FrontEnd', 'FullStack'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_nextjs.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'Python',
    level: 7,
    category: ['Language', 'FullStack', 'DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_python.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'TensorFlow',
    level: 4,
    category: ['DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_tensorflow.png'),
      width: 256,
      height: 287,
    },
  },
  {
    name: 'Django',
    level: 6,
    category: ['BackEnd', 'FullStack'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_django.png'),
      width: 256,
      height: 256,
      borderRadius: 'square',
    },
  },
  {
    name: 'FastAPI',
    level: 6,
    category: ['BackEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_fastapi.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'Flask',
    level: 6,
    category: ['BackEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_flask.png'),
      width: 256,
      height: 256,
      borderRadius: 'square',
    },
  },
  {
    name: 'Gunicorn',
    level: 3,
    category: ['FrontEnd', 'BackEnd'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_gunicorn.png'),
      width: 256,
      height: 156,
    },
  },
  {
    name: 'PyQt',
    level: 4,
    category: ['GUI'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_pyqt.png'),
      width: 224,
      height: 160,
    },
  },
  {
    name: 'Linux',
    level: 6,
    category: ['Linux'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_linux.png'),
      width: 256,
      height: 295,
    },
  },
  {
    name: 'Bash',
    level: 6,
    category: ['Language', 'Linux'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_bash.png'),
      width: 224,
      height: 256,
    },
  },
  {
    name: 'Linux Audit',
    level: 4,
    category: ['Linux'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_linux_audit.png'),
      width: 200,
      height: 200,
    },
  },
  {
    name: 'Docker',
    level: 6,
    category: ['Infrastructure'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_docker.png'),
      width: 256,
      height: 185,
    },
  },
  {
    name: 'AWS',
    level: 4.5,
    category: ['Infrastructure'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_aws.png'),
      width: 256,
      height: 153,
      borderRadius: 'square',
    },
  },
  {
    name: 'Firebase',
    level: 2,
    category: ['Infrastructure'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_firebase.png'),
      width: 256,
      height: 351,
    },
  },
  {
    name: 'Jupyter',
    level: 8,
    category: ['DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_jupyter.png'),
      width: 256,
      height: 300,
    },
  },
  {
    name: 'Zeppelin',
    level: 4,
    category: ['DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_zeppelin.png'),
      width: 500,
      height: 310,
    },
  },
  {
    name: 'R',
    level: 3,
    category: ['Language', 'DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_r_lang.png'),
      width: 256,
      height: 193,
      borderRadius: 'square',
    },
  },
  {
    name: 'R Studio',
    level: 6,
    category: ['DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_r_studio.png'),
      width: 1784,
      height: 626,
    },
  },
  {
    name: 'AIF360',
    level: 4,
    category: ['DataScience'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_aif360.png'),
      width: 150,
      height: 150,
    },
  },
  {
    name: 'MySQL',
    level: 5,
    category: ['DBMS'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_mysql.png'),
      width: 256,
      height: 252,
    },
  },
  {
    name: 'SQLite',
    level: 5,
    category: ['DBMS'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_sqlite.png'),
      width: 512,
      height: 228,
    },
  },
  {
    name: 'Realm',
    level: 3,
    category: ['DBMS'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_realm.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'SQLAlchemy',
    level: 4,
    category: ['DBMS'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_sqlalchemy.png'),
      width: 300,
      height: 63,
    },
  },
  {
    name: 'Hadoop',
    level: 4,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_hadoop.png'),
      width: 256,
      height: 192,
    },
  },
  {
    name: 'Spark',
    level: 3,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_spark.png'),
      width: 512,
      height: 256,
    },
  },
  {
    name: 'Kafka',
    level: 3,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_kafka.png'),
      width: 256,
      height: 413,
    },
  },
  {
    name: 'Logstash',
    level: 3,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_logstash.png'),
      width: 256,
      height: 307,
      borderRadius: 'square',
    },
  },
  {
    name: 'Telegraf',
    level: 3,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_telegraf.png'),
      width: 230,
      height: 54,
    },
  },
  {
    name: 'FAISS',
    level: 3,
    category: ['DataEngineering'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_meta_faiss.png'),
      width: 256,
      height: 256,
    },
  },
  {
    name: 'Github',
    level: 7,
    category: ['CodeManagement'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_github.png'),
      width: 256,
      height: 250,
    },
  },
  {
    name: 'Analytics',
    level: 3,
    category: ['SEO'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_google_analytics.png'),
      width: 256,
      height: 284,
      borderRadius: 'square',
    },
  },
  {
    name: 'Markdown',
    level: 9,
    category: ['Documentation'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_markdown.png'),
      width: 256,
      height: 158,
      borderRadius: 'square',
    },
  },
  {
    name: 'C',
    level: 1,
    category: ['Language', 'FullStack'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_c.png'),
      width: 256,
      height: 288,
    },
  },
  {
    name: 'C++',
    level: 1,
    category: ['Language', 'FullStack'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_c_plusplus.png'),
      width: 256,
      height: 288,
    },
  },
  {
    name: 'Java',
    level: 1,
    category: ['Language', 'FullStack'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_java.png'),
      width: 256,
      height: 346,
    },
  },
  {
    name: 'Kotlin',
    level: 1,
    category: ['Language'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_kotlin.png'),
      width: 256,
      height: 256,
      borderRadius: 'square',
    },
  },
  {
    name: 'Scala',
    level: 1,
    category: ['Language'],
    logo: {
      url: path.join(baseUrlPathname, 'logo_scala.png'),
      width: 256,
      height: 416,
      borderRadius: 'square',
    },
  },
];

export default skills;
