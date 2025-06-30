import React, { Component } from 'react'
import { AnimatePresence, motion, wrap } from "framer-motion"
import Card from '../components/Card'
import { ReactComponent as Baesystemlogo } from '../images/baesystem.svg'
import { ReactComponent as Cpluspluslogo } from '../images/c++.svg'
import { ReactComponent as Pythonlogo } from '../images/python.svg'
import { ReactComponent as Dockerlogo } from '../images/docker.svg'
import { ReactComponent as Postgresqllogo } from '../images/postgresql.svg'
import { ReactComponent as Reactlogo } from '../images/react.svg'
import { ReactComponent as Javascriptlogo } from '../images/javascript.svg'
import { ReactComponent as Canonlogo } from '../images/canon.svg'
import { ReactComponent as Raytehonlogo } from '../images/raytheon.svg'
import { ReactComponent as Jenkinslogo } from '../images/jenkins.svg'
import { ReactComponent as Grafanalogo } from '../images/grafana.svg'
import { ReactComponent as MySQLlogo } from '../images/mysql.svg'
import { ReactComponent as Gitlogo } from '../images/git.svg' 

export default class Workpage extends Component {
  constructor(props) {
    super(props)
    this.cards = [
      {
        id: 1,
        company: "Canon U.S.A Inc.",
        duration: "September 2023 - Present",
        title: "Software Engineer II",
        technologies: {
          Cplusplus: <Cpluspluslogo/>,
          Python: <Pythonlogo/>,
          Git: <Gitlogo />,
          Javascript: <Javascriptlogo />,
          Jenkins: <Jenkinslogo/>,
          C: <Cpluspluslogo/>,
          GPIO: <Cpluspluslogo/>
        },
        bullets: [
          "Built a C++ API enabling real-time communication between GUI interfaces and robotic hardware, enhancing system responsiveness during clinical operations.",
          "Architected and Integrated a service health manager written in C++ that monitors active robot diagnostics of health (temperature, voltage and currents) helping prevent system damage.",
          "Designed and implemented wxWidgets and C++ based GUI for controlling robot capabilities during a real-time clinical procedure. ",
          "Spearheaded the automation of CI/CD pipelines using Jenkins, streamlining testing and deployment workflow, increasing our delivery cycles and eliminating manual build bottleneck.",
          "Optimized and modularized legacy codebase, enabling independent module compilation and reducing build times by 60%."
        ],
        logo: <Canonlogo />,
      },

      {
        id: 2,
        company: "BAE Systems",
        duration: "January 2022 - September 2023",
        title: "Software Engineer II",
        technologies: {
          Cplusplus: <Cpluspluslogo/>,
          Python: <Pythonlogo/>,
          Docker: <Dockerlogo/>,
          Postgresql: <Postgresqllogo/>,
          ReactName: <Reactlogo/>,
          Javascript: <Javascriptlogo/>,

        },
        bullets: [
          "Maintain and extend software running on radio platforms used to translate coordinates and communicate between multiple devices.",
          "Created a web application that alerts and monitors live network traffic between multiple radio platforms to measure better metrics using React.js and PostgreSQL.",
          "Developed new features and tools in C++ for aircraft control & messaging systems used in real-time using Python.",
          "Refactored and decoupled multiple core legacy components to utilize newer developer tools, resulting in over 30% reduction in build time and faster testing.",
          "Lead & migrated CI/CD environment from BitBucket to Gitlabs to gain access to better tools and  functionality such as Docker."
        ],
        logo: <Baesystemlogo />,
      },

      {
        id: 3,
        company: "Raytheon",
        duration: "May 2019 - December 2021",
        title: "Software Engineer I",
        technologies: {
          Cplusplus: <Cpluspluslogo/>,
          Python: <Pythonlogo/>,
          Docker: <Dockerlogo/>,
          Postgresql: <Postgresqllogo/>,
          Javascript: <Javascriptlogo/>,
          Grafana: <Grafanalogo/>,
          MYSQL: <MySQLlogo/>

        },
        bullets: [
          "Developed and maintained tools in C++ that helped improve functionality and efficiency by implementing a UI with additional features and capabilities for radar runs.",
          "Implemented automation scripts to facilitate a CI/CD environment used for Jenkins & GitHub Actions.",
          "Designed and implemented scripts using Python that parsed and inserted data to different databases to reduce the number of steps for a six sigma project.",
          "Presented and monitored database metrics in MYSQL through analytic tools such as Grafana.",
          "Refactored and refined legacy code in support of a migrating effort to newer technologies for the team."
        ],
        logo: <Raytehonlogo />,
      },
      
    ]

    this.state = {
      index: 0,
      direction: 1,
    }
  }
  setSlide = (newDirection) => {
    this.setState((prevState) => ({
      index: wrap(0, this.cards.length, prevState.index + newDirection),
      direction: newDirection,
    }))
  }

  render() {

    const { index, direction } = this.state
    const currentCard = this.cards[index]
    const color = '#FB5012' // if you want hue-based backgrounds

    return (
    <motion.div
      id="workPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //exit={{opacity: 0}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <div className='items-center justify-center place-content-center p-6 font-mono space-y-6'>
        <div className='m-auto container'>
          <h1 className="flex m-auto text-start text-5xl max-[640px]:text-3xl">work experience</h1>
          <h5 className="flex m-auto text-start text-xl max-[640px]:text-lg">(Scroll & click on card for more information)</h5>
        </div>
        
        <motion.div 
          className="flex flex-row items-center justify-center w-full px-4 gap-4 sm:gap-6 lg:gap-8 "
          variants={container}
          initial="hidden"
          animate="visible"
          >
          <motion.button
            initial={false}
            animate={{ backgroundColor: color }}
            className='w-10 h-10 flex items-center justify-center rounded-full shrink-0'
            aria-label="Previous"
            style={button}
            onClick={() => this.setSlide(-1)}
            whileFocus={{ outline: `2px solid ${color}` }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft />
          </motion.button>
          
          <div className="relative flex-grow max-w-2xl">
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={currentCard.id}
              className="w-full"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
            >
              <Card
                logo={currentCard.logo}
                company={currentCard.company}
                duration={currentCard.duration}
                title={currentCard.title}
                technologies={currentCard.technologies}
                bullets={currentCard.bullets}
              />
            </motion.div>
          </AnimatePresence>
        </div>

          <motion.button
          initial={false}
          animate={{ backgroundColor: color }}
          className='w-10 h-10 flex items-center justify-center rounded-full shrink-0'
          aria-label="Next"
          style={button}
          onClick={() => this.setSlide(1)}
          whileFocus={{ outline: `2px solid ${color}` }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight />
        </motion.button>
        
        </motion.div>
        
      </div>
    </motion.div>
    )
  }
}

/**
 * ==============   Icons   ================
 */
const iconsProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ffffff",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
}

/**
 * ==============   Styles   ================
 */
const container = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
}

const button = {
  backgroundColor: "#f70c0c",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
}