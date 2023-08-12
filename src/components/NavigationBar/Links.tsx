import { Button } from "@chakra-ui/react";
import React from "react";

export function Links() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection && aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#experience");
    experienceSection && experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection && projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection && contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Button variant="ghost" onClick={scrollToAbout}>
        Sobre
      </Button>
      <Button variant="ghost" onClick={scrollToExperience}>
        Experiência
      </Button>
      <Button variant="ghost" onClick={scrollToProjects}>
        Projetos
      </Button>
      <Button variant="ghost" onClick={scrollToContact}>
        Contato
      </Button>
    </>
  )
}