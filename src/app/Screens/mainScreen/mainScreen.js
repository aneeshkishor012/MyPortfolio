"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../navBar/navBar';
import AppFooter from '../footer/footer';
import SkillsSection from '../skills/skills';
import Learnings from '../learnings/learnings';
import AnimatedBg from '../animatedBg/animatedBg';
import { experiences } from '../../../resources/datas/experiences';
import { projects } from '../../../resources/datas/projects';
import { Button } from 'antd';
import Image from 'next/image';
export default function MainScreen() {

  const menuItems = [
    { key: "home", label: "Home", link: "#home" },
    { key: "about", label: "About", link: "#about" },
    { key: "skills", label: "Skills", link: "#skills" },
    { key: "experience", label: "Experience", link: "#experience" },
    { key: "projects", label: "Projects", link: "#projects" },
    { key: "contact", label: "Contact", link: "#contact" }
  ];


  return (
    <>
      <Head>
        <title>Aneesh Kishor K | Portfolio</title>
      </Head>

      {/* Navbar */}
      <Navbar menuItems={menuItems} />

      {/* Main container */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white relative overflow-hidden mt-15">
        {/* Animated Background - only one instance */}
        <AnimatedBg />
        <div className="relative z-10">

          {/* Hero Section */}
          <section
            id="home"
            className="flex flex-col md:flex-row items-center max-w-6xl mx-auto px-8 py-16 bg-gray-800 rounded-xl shadow-lg mt-8"
          >
            <div className="flex-1 text-center md:text-left md:pr-8">
              <div style={{ fontSize: "3.5rem" }} className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                Frontend Developer
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Software Developer <span className="text-purple-400">|</span> UI Enthusiast
              </p>
              <h2 id="about" className="text-2xl font-semibold mb-2 text-purple-300">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed">
                I’m a dedicated software developer specializing in front-end development.
                I have a passion for crafting engaging user interfaces and bringing innovative ideas to life.
                Currently pursuing my B.Sc. in Electronics – Industry Track while focusing on
                <span className="text-purple-400 font-medium"> React</span>,
                <span className="text-pink-400 font-medium"> React Native</span>,
                and modern UI/UX.
              </p>
            </div>

            <motion.img
              src="https://img.freepik.com/premium-vector/customer-support-flat-design-illustration_1149263-18865.jpg"
              // src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
              alt="Profile"
              className="rounded-xl border-4 border-purple-500 shadow-lg w-64 h-64 object-cover mt-6 md:mt-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </section>

          {/* Skills */}
          <section className="max-w-6xl mx-auto px-8 my-20">
            <SkillsSection />
          </section>

          {/* Learnings */}
          <section className="max-w-6xl mx-auto px-8 my-20">
            <Learnings />
          </section>

          {/* Experience */}
          <section id="experience" className="max-w-6xl mx-auto px-8 my-20">
            <h2 className="text-3xl font-semibold mb-4">Experience</h2>
            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                >
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-400">
                    {exp.company} • {exp.duration}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="max-w-6xl mx-auto px-8 my-20">
            <h2 className="text-3xl font-semibold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl mb-4 h-60 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </section>


          {/* Contact */}
          <section id="contact" className="max-w-6xl mx-auto px-8 my-20 text-center">
            <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-300 mb-6">
              I’m looking to collaborate on React Native and React open-source projects.
              Let’s build something amazing together!
            </p>
            <Button type='primary' href="mailto:aneeshkishor012@gmail.com" size="large">
              Contact Me
            </Button>
          </section>

          {/* Footer */}
          <AppFooter />
        </div>
      </div>
    </>
  );
}
