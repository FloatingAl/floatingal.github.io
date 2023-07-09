import React, { Component } from 'react'
import { motion } from "framer-motion"
import Card from '../components/Card'
import { ReactComponent as Baesystemlogo } from '../images/baesystem.svg'
import { ReactComponent as Cpluspluslogo } from '../images/c++.svg'
import { ReactComponent as Pythonlogo } from '../images/python.svg'
import { ReactComponent as Dockerlogo } from '../images/docker.svg'
import { ReactComponent as Postgresqllogo } from '../images/postgresql.svg'
import { ReactComponent as Reactlogo } from '../images/react.svg'
import { ReactComponent as Javascriptlogo } from '../images/javascript.svg'
import { ReactComponent as Raytehonlogo } from '../images/raytheon.svg'
import { ReactComponent as Jenkinslogo } from '../images/jenkins.svg'
import { ReactComponent as Grafanalogo } from '../images/grafana.svg'
import { ReactComponent as MySQLlogo } from '../images/mysql.svg'
import { ReactComponent as Kronoslogo } from '../images/kronos.svg'
import { ReactComponent as Gitlogo } from '../images/git.svg' 
import { ReactComponent as Javalogo } from '../images/java.svg'
import { ReactComponent as Junitlogo } from '../images/junit.svg'

export default class Workpage extends Component {
  render() {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //exit={{opacity: 0}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <div className='m-auto items-center container justify-center place-content-center p-6 font-mono space-y-6 overflow-hidden overflow-y-auto'>
        <h1 className="flex m-auto text-start text-6xl">Work Experience</h1>
        <h5 className="flex m-auto text-start text-xl">(Scroll Down & click on card for more information)</h5>
        <div className="flex flex-col m-auto space-y-16">
          <div className=''>
            <Card
            logo={<Baesystemlogo/>}
            company="BAE Systems"
            duration="Januray 2022 - Present"
            title="Software Engineer II"
            technologies={{ "C++": <Cpluspluslogo/>, "Python": <Pythonlogo/>, "Docker": <Dockerlogo/>, "Postgressql": <Postgresqllogo/>, "React": <Reactlogo/>, "Javascript": <Javascriptlogo/>}}
            bullets={[
              "Maintain and extend software running on radio platforms used to translate coordinates and communicate between multiple devices.",
              "Created a web application that alerts and monitors live network traffic between multiple radio platforms to measure better metrics using React.js and PostgreSQL.",
              "Developed new features and tools in C++ for aircraft control & messaging systems used in real-time using Python.",
              "Refactored and decoupled multiple core legacy components to utilize newer developer tools, resulting in over 30% reduction in build time and faster testing.",
              "Lead & migrated CI/CD environment from BitBucket to Gitlabs to gain access to better tools and  functionality such as Docker."
            ]}
            />
          </div>
          <div className=''>
            <Card
            logo={<Raytehonlogo/>}
            company="Raytheon"
            duration="May 2019 - December 2021"
            title="Software Engineer I"
            technologies={{ "C++": <Cpluspluslogo/>, "Python": <Pythonlogo/>, "Javascript": <Javascriptlogo/>,"Grafana": <Grafanalogo/>, "Jenkins": <Jenkinslogo/>, "MySQL": <MySQLlogo/>}}
            bullets={[
              "Developed and maintained tools in C++ that helped improve functionality and efficiency by implementing a UI with additional features and capabilities for radar runs.",
              "Implemented automation scripts to facilitate a CI/CD environment used for Jenkins & GitHub Actions.",
              "Designed and implemented scripts using Python that parsed and inserted data to different databases to reduce the number of steps for a six sigma project.",
              "Presented and monitored database metrics in MYSQL through analytic tools such as Grafana.",
              "Refactored and refined legacy code in support of a migrating effort to newer technologies for the team."
            ]}
            />
          </div>
          <div className=''>
            <Card
            logo={<Kronoslogo/>}
            company="Kronos Inc."
            duration="Januraru 2017 - June 2017"
            title="Software Engineer"
            technologies={{ "Java": <Javalogo/>, "Git": <Gitlogo/>, "Junit": <Junitlogo/>, "Javascript": <Javascriptlogo/>}}
            bullets={[
              "Worked on unit tests to help ensure code quality & better production.",
              "Resolved tickets created by customers through community pages while on-call.",
              "Handled a large volume of tickets in a comprehensive and timely manner."
            ]}
            />
          </div>
        </div>
        
      </div>
    </motion.div>
    )
  }
}
