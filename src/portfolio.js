/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "husnainarshad97",
  title: "Hey, I'm Hasnain",
  subTitle: emoji(
    "Experienced Digital Business Consultant specializing in Website Development🚀, Shopify stores🚀, Digital marketing🚀, Graphic design🚀, and Software development🚀, with a proven track record of driving business growth and brand visibility"
  ),
  resumeLink:
    "https://1drv.ms/b/c/7f24649c53aa33cf/ERRQZOkV0fBOhkin4TQ0A5EBvbliAUXooLQHKIoDNCNayg?e=5xKkc6", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/husnainarshad97",
  linkedin: "https://www.linkedin.com/in/hasnainarshad/",
  gmail: "meetmrhasnain@gmail.com",
  // gitlab: "https://gitlab.com/husnainarshad97",
  // facebook: "https://www.facebook.com/husnainmairajarshad",
  // medium: "https://medium.com/@husnainarshad97",
  // stackoverflow: "https://stackoverflow.com/users/23037221/hasnain-arshad",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A Crazy Digital Business Consultant Ready to Explore Every Tech Stack",
  skills: [
    emoji(
      "⚡ Dynamic digital business consultant delivering comprehensive solutions that drive company growth from inception to success."
    ),
    emoji("⚡ Expertise in website development, Shopify store creation, digital marketing, graphic design, and software development, dedicated to enhancing brand visibility and operational efficiency for clients."),
    emoji(
      "⚡ Create attractive designs of Business cards, Flyers, Banners, posters and made animated videos"
    )
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // Framework fronend
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "React Native",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "Angular",
    //   fontAwesomeClassname: "fab fa-angular"
    // },
    // {
    //   skillName: "Typescript",
    //   fontAwesomeClassname: "fab fa-angular"
    // },
    // {
    //   skillName: "Redux",
    //   fontAwesomeClassname: "fab fa-frontend"
    // },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "Bootstrap",
    //   fontAwesomeClassname: "fab fa-bootstrap"
    // },
    // {
    //   skillName: "Material UI",
    //   fontAwesomeClassname: "fab fa-materialui"
    // },
    // {
    //   skillName: "AntD",
    //   fontAwesomeClassname: "fab fa-antd"
    // },
    // {
    //   skillName: "Formik",
    //   fontAwesomeClassname: "fab fa-formik"
    // },
    ///////////////////////////////backend
    // {
    //   skillName: "Express",
    //   fontAwesomeClassname: "fab fa-e"
    // },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fa fa-firebase"
    // },

    //  payment
    {
      skillName: "PayPal",
      fontAwesomeClassname: "fab fa-cc-paypal"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-cc-stripe"
    },

    // Database
    // {
    //   skillName: "mongoDB",
    //   fontAwesomeClassname: "fa fa-database"
    // },
    // {
    //   skillName: "SQL",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // {
    //   skillName: "PostgreSQL",
    //   fontAwesomeClassname: "fas fa-database"
    // },

    // {
    //   skillName: "Oracle",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    // Languages
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "java",
    //   fontAwesomeClassname: "fab fa-java"
    // },
    // {
    //   skillName: "C++",
    //   fontAwesomeClassname: "fab fa-cplusplus"
    // },
    // {
    //   skillName: "c#",
    //   fontAwesomeClassname: "fab fa-cuttlefish"
    // },
    ////////other not realted
    {
      skillName: "Web Scrapping",
      fontAwesomeClassname: "fa fa-chrome"
    },

    // {
    //   skillName: "Unity",
    //   fontAwesomeClassname: "fab fa-unity"
    // },

    ////////////////////hosting

    // {
    //   skillName: "Cpanel",
    //   fontAwesomeClassname: "fab fa-cpanel"
    // },
    // {
    //   skillName: "digital ocean",
    //   fontAwesomeClassname: "fab fa-digital-ocean"
    // },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // other useful supporting
    // {
    //   skillName: "github",
    //   fontAwesomeClassname: "fab fa-github"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },

    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },
    // Graphic designing
    {
      skillName: "Adobe Photoshop",
      fontAwesomeClassname: "fas fa-photo-video"
    },
    {
      skillName: "Adobe Illustrator",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "Adobe Premiere Pro",
      fontAwesomeClassname: "fa fa-edit"
    },
    {
      skillName: "CoralDRAW",
      fontAwesomeClassname: "fas fa-draw-polygon"
    },
    {
      skillName: "Blender",
      fontAwesomeClassname: "fas fa-blender"
    },
    {
      skillName: "Canva",
      fontAwesomeClassname: "fa fa-viadeo"
    },
    //Digital Marketing
    {
      skillName: "Digital Marketing",
      fontAwesomeClassname: "fa fa-dragon"
    },
    {
      skillName: "Page per Click (Facebook)",
      fontAwesomeClassname: "fa fa-facebook-official"
    },
    {
      skillName: "Page per Click (Instagram)",
      fontAwesomeClassname: "fab fa-instagram"
    },
    {
      skillName: "Page per Click (Google)",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Page per Click (Amazon)",
      fontAwesomeClassname: "fa fa-amazon"
    },
    {
      skillName: "Search Engine Optimization",
      fontAwesomeClassname: "fa fa-envira"
    },
    {
      skillName: "Email Marketing",
      fontAwesomeClassname: "fas fa-television"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fas fa-shopping-bag"
    },
    // learning
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "figma",
    //   fontAwesomeClassname: "fab fa-figma"
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Illmenau University Germany",
    //   logo: require("./assets/images/illmenau_logo.png"),
    //   subHeader: "Master of Science in Artificial Intelligence and Data Science",
    //   duration: "September 2024 - Present",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Comsats University Islamabad",
      logo: require("./assets/images/COMSATS_logo.jpg"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "September 2016 - January 2021",
      desc: "Ranked top 10% in the program. Took courses about Artificial Intelligence, Web Security, Operating Systems,... ",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    // {
    //   schoolName: "Punjab University Lahore",
    //   logo: require("./assets/images/pu_logo.png"),
    //   subHeader: "Bachelor of Laws",
    //   duration: "September 2021 - Present",
    //   // desc: "Participated in the research of XXX and published 3 papers.",
    //   // descBullets: [
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   // ]
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Digital marketing (Social Media Accounts handling, Email marketing, PPC, Facebook Ads))",
      progressPercentage: "100%"
    },
    {
      Stack: "Graphic Designing(Illustrator, Photoshop, CoralDRAW, Canva)",
      progressPercentage: "100%"
    },
    {
      Stack: "Website development(React JS/ Node JS / Wordpress)", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    // {
    //   Stack: "Frontend development(React JS)", //Insert stack or technology you have experience in
    //   progressPercentage: "100%" //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "Backend development(Node JS)",
    //   progressPercentage: "85%"
    // },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "100%"
    // },
    {
      Stack: "Video Editing(Premiere Pro, Filmora, Canva)",
      progressPercentage: "85%"
    },
    {
      Stack: "3D Modeling(Blender)",
      progressPercentage: "70%"
    },
    {
      Stack: "Animations(After Effect)",
      progressPercentage: "70%"
    },
    {
      Stack: "Game Development(Unity Engine)",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer | Graphic Designer | Digital Marketer",
      company: "Upwork",
      companylogo: require("./assets/images/upwork_logo.png"),
      date: "Dec 2021 – Present",
      desc: "I am currently self-employed, working as a freelance professional at Upwork."
    },
    {
      role: "Software Developer | Graphic Designer | Digital Marketer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiver_logo.png"),
      date: "March 2018 – Present",
      desc: "I started my freelancing career at fiverr with graphic designing. Currently I am offering services for Graphic designing, Website developemnt and Digital marketing on Fiverr"
    },
    {
      role: "Full Stack Developer",
      company: "Sectem technologies",
      companylogo: require("./assets/images/sectem_logo.jpg"),
      date: "Dec 2021 – Dec 2023",
      desc: "I worked in sectem technologies, as a full stack developer, company affiliated with an American corporation."
    },
    {
      role: "Junior Mern Stack Developer",
      company: "Codebrakers Technologies",
      companylogo: require("./assets/images/codebreaker_logo.png"),
      date: "Feb 2021 – Dec 2021",
      desc: "After completing my degree I started working as a Full stack developer, who is responsible for making whole software(frontend, backend and database)",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Impressive Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR BUSINESS.",
  projects: [
    {
      image: require("./assets/images/natural_herbs.png"),
      projectName: "Natural Herbs Ltd.",
      projectDesc: "I designed and developed the website for Natural Herbs Ltd., specializing in in selling Ashwagandha and Shilajit in UK. I implemented SEO strategies to boost visibility, created brand-aligned packaging, developed a Shopify store for e-commerce, and managed digital marketing campaigns to promote products effectively.",
      footerLink: [
        {
          name: "Visit Website",
          url: "naturabherbs.world"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mk_online.png"),
      projectName: "MK Online Trade LLC",
      projectDesc: "I designed and developed the website for them, specializing in selling Electronics Accessories in USA. I implemented PPC Amazon to boost visibility, created brand-aligned packaging, and managed digital marketing campaigns to promote products effectively.",
      footerLink: [
        {
          name: "Visit Amazon Store",
          url: "https://www.amazon.com/s?me=AGJY3NU0L16XX&marketplaceID=ATVPDKIKX0DER"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/4m.jpg"),
      projectName: "4M Ent. Real Estate",
      projectDesc: "I designed and developed the website for them, specializing in in selling Homes in Pakistan in diffrent Socities. I implemented SEO strategies to boost visibility, created brand-aligned packaging, developed a Shopify store for e-commerce, and managed digital marketing campaigns to promote products effectively.",
      footerLink: [
        {
          name: "Visit Facebook Page",
          url: "https://www.facebook.com/4MOfficial"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/smartwarehouse.png"),
      projectName: "Smart Warehouse Services",
      projectDesc: "I designed and developed the website for them, they provide warehouse services in UK for E-Commerce sellers who operate outside the UK. Currently we are working on SEO strategies to boost visibility, and digital marketing campaigns.",
      footerLink: [
        {
          name: "Visit Website",
          url: "smartwarehouseservices.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aljaleel.png"),
      projectName: "Al-Jaleel",
      projectDesc: "I designed and developed the website for them, they have Amazon Store and sell diffrent accessories. Currently we are working on digital marketing campaigns and PPC for them.",
      footerLink: [
        {
          name: "Visit Amazon Store",
          url: "smartwarehouseservices.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tradenest.png"),
      projectName: "Trade Nest",
      projectDesc: "I designing and developing the website for them.",
      footerLink: [
        {
          name: "In Progress",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Thugofcomsats_logo.png"),
      projectName: "Thug of Comsats",
      projectDesc: "It was my Final Year Project in University. Its a game inspired from GTA Series.",
      footerLink: [
        {
          name: "See Video of Project",
          url: "https://www.youtube.com/@hasnainarshad5217/videos"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/seactempearls_logo.jpg"),
      projectName: "Sectem Pearls",
      projectDesc: "It was a desktop application used to scrap data from diffrent websites",
      footerLink: [
        {
          name: "Visit Companies FB Page",
          url: "https://www.facebook.com/photo/?fbid=641010864705428&set=a.464003239072859&__cft__[0]=AZWDiC8I9CqhtlPC5diJVii6VPE0zQeFj5uhwpTc-IHCvhfy-2K1Emi9HtllETD6s0_xFBcNrUTpst6UYp6Wg5yg-aH6kCfG5fuzoXCvct41L8wyVAVDoxU8BXXIjWAc76VIUzKuklw8-ENBT_KcThAduZkzyqdhFdHNX6-vaQbucgcR5b2ItC9-39IvxGkZU2L1iPdwVgN5bGtZZfZTRR0ig9njZlD1X-WmJb1q3FAsNQ&__tn__=EH-y-R"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Reachinmail_logo.png"),
      projectName: "Reach In Mail",
      projectDesc: "It was a software designed to prevent emails from being marked as spam, primarily used for marketing purposes.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    {
      image: require("./assets/images/jaria_logo.png"),
      projectName: "Jaria",
      projectDesc: "it was a website of charity company, based in USA to collect funds and raise compaigns.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://nextu.se/"
        // }
      ]
    },
    // {
    //   image: require("./assets/images/livesupportrep_logo.png"),
    //   projectName: "Live Support Rep",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/mobiles4u_logo.png"),
    //   projectName: "Mobiles4U",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/grofo_logo.png"),
      projectName: "Grofo",
      projectDesc: "It was a mobile application used to order groceries online",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: ""
      //   }
      // ]
    },
    {
      image: require("./assets/images/urpixpays_logo.png"),
      projectName: "UrPixPays",
      projectDesc: "It was a website, where users can upload their best images, and other users can download and use that images for their use.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://urpixpays.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "INTRODUCTION TO AUGMENTED REALITY AND ARCORE",
      subtitle:
        "I know the basics of augmented reality (AR) and how to create AR experiences using ARCore, a tool from Google.I learned what AR is, how it works, and where it can be used. I also use ARCore to practice important skills like motion tracking, understanding the environment, and estimating light. I can make simple AR applications and understand how to create exciting AR experiences.",
      image: require("./assets/images/googlearvr_logo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1RYJCg-otW9vOZODmCpxam5T1rX_YweoZ/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "INTRODUCTION TO USER EXPERIENCE DESIGN",
      subtitle:
        "Introduction to User Experience Design is a beginner-level course that teaches the fundamentals of creating user-friendly digital products. Students learn how to design websites and apps that are easy and enjoyable for people to use, focusing on research, planning, and testing to meet user needs effectively",
      image: require("./assets/images/gtuniversity_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1IfpVzWCCWv6t_7UmiPeyVH8dgD5PBfyR/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "MACHINE LEARNING BASICS",
      subtitle:
        "Machine Learning Basics is a beginner-level course where you learn how computers can learn from data. It teaches you how machines use patterns in data to make predictions and decisions automatically. You'll explore topics like different types of learning, how to analyze data with machine learning, and how it is used in real-world applications.",
      image: require("./assets/images/sungkyunkwanuniversity_logo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Yj8Ua77d9_Y70Hk2LhmlcQ5fvz8ytWZr/view?usp=drive_link"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "INTRODUCTION TO GENERATIVE ARTIFICIAL INTELLIGENCE",
      subtitle:
        " know how AI can create new things like pictures, music, and text. I know the basic techniques that AI uses, such as neural networks, how these technologies work and where they can be used. I understand the basics of generative AI and able to make my own simple AI projects.",
      image: require("./assets/images/googlecloud_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/16vx04ISp5i6zuoFwWRv2SdOpPP7iJM8u/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Search Engine Optimization(SEO)",
      subtitle:
        "SEO, or Search Engine Optimization, means making your website better so more people can find it when they search online. It involves using the right words and techniques to appear higher in search engine results, like Google, Yahoo, or Bing. Good SEO helps websites get more visitors without paying for ads.",
      image: require("./assets/images/coursera_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1OZXMiHyFzyCs9qzbefiUIXIm4JL9Q_zc/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Azure",
      subtitle:
        "Azure is Microsoft's cloud platform offering computing, storage, and services over the internet. It enables businesses to build, deploy, and manage applications globally. Azure supports diverse programming languages and tools, facilitating scalable and innovative solutions.",
      image: require("./assets/images/microsoft_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10Z-ii4hP5NPvjeea6-d4xg2TKHihqMWQ/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Game Dev Workshop",
      subtitle:
        "The Microsoft Game Development Workshop teaches participants how to create video games using Microsoft tools. It covers game design, development frameworks like Unity or Unreal Engine, and deployment strategies. Participants gain practical skills in designing, developing, and publishing games with Microsoft's support.",
      image: require("./assets/images/microsoft_logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/10Z-ii4hP5NPvjeea6-d4xg2TKHihqMWQ/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@hasnain/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/hasnain-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // "https://anchor.fm/codevcast/embed/episodes/DevStory---Hasnain-Arshad-from-Islamabad--Pakistan-e9givv/a-a15itvo"
    "https://www.youtube.com/embed/F6rKyxQm7o8"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3247329406",
  email_address: "meetmrhasnain@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "husnain_mairaj", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
