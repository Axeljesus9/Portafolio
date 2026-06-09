import Reac, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import curriculum from "./assets/curriculum.png";
import githubPng from "./assets/github.png";
import linkedinPng from "./assets/linkedin.png";
import fotoPerfil from "./assets/photo.png";
//iconos del carrucel de skills
import servidor from "./assets/servidor-sql.png";
import java from "./assets/java.png";
import spring from "./assets/spring.png";
import js from "./assets/js.png";
import python from "./assets/python.png";
import adobe from "./assets/adobexd.png";
import git from "./assets/github.png";
import figma from "./assets/figma.png";
import inteliji from "./assets/intellij.png";
import claude from "./assets/claude.png";
import code from "./assets/code.png";
import firebase from "./assets/firebase.png";
//Proyectos
import gestion from "./assets/fundacion.png";
//importamos una nueva pagina
import Projects from "./projects.jsx";

//import { FaLinkedin } from "react-icons/fa";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillsCategories = [
    {
      category: "Backend",
      skills: [
        { name: "Java", img: java },
        { name: "Spring Boot", img: spring },
        { name: "SQL Server", img: servidor },
        { name: "Python", img: python },
        { name: "firebase", img: firebase },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", img: js },
        { name: "React", img: spring },
        { name: "Figma", img: figma },
        { name: "Adobe XD", img: adobe },
      ],
    },
    {
      category: "tolls & AI",
      skills: [
        { name: "Git", img: git },
        { name: "GitHub", img: githubPng },
        { name: "IntelliJ IDEA", img: inteliji },
        { name: "Claude", img: claude },
        { name: "Code", img: code },
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-slate-950/70 border-b border-white/5 backdrop-blur-md shadow-md transition-all duration-300">
        <header className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-tight shrink-0 cursor-pointer group">
            <span className="text-white group-hover:text-orange-400 transition-colors">
              PORTAFOLIO-
            </span>
            <span className="text-orange-400 group-hover:text-white transition-colors">
              ATEC
            </span>
          </h1>

          <nav className="w-full">
            <ul className="flex gap-5 md:gap-7 justify-start md:justify-end whitespace-nowrap px-4">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Education
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-12" id="home">
        {/* Hero Section */}
        <section className="flex items-center justify-between min-h-[80vh]">
          <div className="flex flex-col gap-4">
            <p className="text-white hover:text-orange-400 transition-colors font-medium text-7xl">
              JESUS AXEL
            </p>
            <p className="text-white hover:text-orange-400 transition-colors font-medium text-7xl">
              AVILA GARCIA
            </p>
            <p className="text-white hover:text-orange-400 transition-colors font-medium text-6xl">
              SOFTWARE ENGINEER
            </p>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Egresado de Ingeniería de Software con experiencia en desarrollo
              de sistemas médicos y sistemas embebidos. Participó en estadías
              profesionales de alto impacto en el sector salud y defensa.
              Actualmente enfocado en el desarrollo con Java.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-6 items-center mt-6">
              <a
                href="/curriculum_avila.pdf"
                download="Curriculum_Jesus_Axel_Avila.pdf"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#EA4335]/10 border border-[#EA4335]/30 shadow-[0_0_20px_rgba(234,67,53,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(234,67,53,0.7)] cursor-pointer"
                title="Descargar Currículum"
              >
                <img
                  src={curriculum}
                  alt="Descargar Currículum"
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jesus-axel-avila-garcia-desarrollador/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0A66C2]/10 border border-[#0A66C2]/30 shadow-[0_0_20px_rgba(10,102,194,0.4)] transition-all duration-300 hover:scale-110"
              >
                <img
                  src={linkedinPng}
                  alt="LinkedIn"
                  className="w-5 h-5 object-contain"
                />
              </a>

              <a
                href="https://github.com/Axeljesus9"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-110"
              >
                <img
                  src={githubPng}
                  alt="GitHub"
                  className="w-5 h-5 object-contain brightness-0 invert"
                />
              </a>
            </div>
          </div>

          <div className="w-80 h-[28rem] rounded-full overflow-hidden shrink-0 ml-auto shadow-[0_0_30px_rgba(251,146,60,0.2)]">
            <img
              src={fotoPerfil}
              alt="Jesus Axel Avila Garcia"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Sección de Proyectos */}
        <div
          className="flex flex-col gap-8 max-w-4xl mx-auto mt-12"
          id="projects"
        >
          <Link to="/projects" className="block">
            <h3 className="text-3xl font-bold border-b border-white/10 pb-4 mb-10 text-orange-400 hover:text-white transition-colors cursor-pointer">
              PROYECTOS
            </h3>
          </Link>

          {/* Tarjeta 1 */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-md md:max-w-3xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-55"
                  src={gestion}
                  alt="fundacion AI-KOI"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                  Fundacion AI-KOI
                </div>
                <a
                  href="#"
                  className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
                >
                  Desarrollo de Gestión Médico
                </a>
                <p className="mt-2 text-gray-500">
                  En este proyecto estuve realizando un sistema de gestión de
                  pacientes, con el fin de optimizar los beneficiarios de la
                  fundación y tengan una mejor experiencia y respuesta con el
                  médico correspondiente.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjetas de Proyectos Personales */}
          {[
            "Cajero Automatico en Java",
            "Baraja de Cartas en Java",
            "Sistema de Ventas en Java",
          ].map((title, idx) => (
            <div
              key={idx}
              className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl"
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src="/img/building.jpg"
                    alt="Project presentation"
                  />
                </div>
                <div className="p-8">
                  <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                    Proyecto personal
                  </div>
                  <a
                    href="#"
                    className="mt-1 block text-lg leading-tight font-medium text-black hover:underline"
                  >
                    {title}
                  </a>
                  <p className="mt-2 text-gray-500">
                    {idx === 2
                      ? "En este proyecto se realizó un sistema de ventas enfocado en el progreso de mis habilidades en Java, integrando conexión a bases de datos y próximamente Spring Boot."
                      : "Proyecto enfocado en poner a prueba conocimientos avanzados en Java y optimización de lógica algorítmica autolimitando el uso de librerías nativas."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="py-16 max-w-4xl mx-auto" id="skills">
          <h3 className="text-3xl font-bold text-orange-400 mb-6 tracking-tight">
            Habilidades
          </h3>
          <div className="w-full max-w-3xl mx-auto font-mono text-sm shadow-2xl rounded-lg overflow-hidden border border-gray-700">
            {/* Barra Superior de la Terminal */}
            <div className="bg-gray-800 bg-opacity-90 px-4 py-3 flex items-center justify-between border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-xs select-none">
                guest@axel-portfolio: ~
              </div>
              <div className="w-10"></div>
            </div>

            <div className="bg-gray-900 text-green-400 p-6 space-y-6 min-h-[350px] overflow-x-auto">
              <div>
                <p className="text-gray-400">
                  <span className="text-purple-400">guest@axel-portfolio</span>:
                  <span className="text-blue-400">~</span>$
                  <span className="text-white ml-2 animate-pulse">
                    cat skills.md
                  </span>
                </p>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-yellow-400 font-bold">
                  # Mi Stack Tecnológico
                </p>

                {skillsCategories.map((group, index) => (
                  <div
                    key={index}
                    className="pl-4 border-l-2 border-gray-700 hover:border-green-500 transition-colors duration-300"
                  >
                    <h4 className="text-green-400 font-semibold mb-1">
                      [{group.category}]
                    </h4>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {group.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="inline-flex items-center gap-2 bg-gray-800/60 text-gray-200 px-3 py-1.5 rounded-lg text-xs border border-gray-700 hover:border-orange-500 transition-colors duration-300"
                        >
                          {skill.img && (
                            <img
                              src={skill.img}
                              alt={skill.name}
                              className="w-4 h-4 object-contain"
                            />
                          )}
                          <span>{skill.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center">
                <span className="text-purple-400">guest@axel-portfolio</span>:
                <span className="text-blue-400">~</span>$
                <span className="ml-2 w-2 h-4 bg-green-400 inline-block animate-ping"></span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-16 max-w-4xl mx-auto px-4 border-b border-white/10"
          id="experience"
        >
          <h3 className="text-3xl font-bold text-orange-400 mb-6 tracking-tight">
            Experiencia Profesional
          </h3>
          <div className="flex flex-col gap-8">
            <div className="bg-slate-900/20 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">DAVID'S</h4>
                  <p className="text-sm font-medium text-orange-400/80">
                    CIDTFA (CENTRO DE INVESTIGACION Y DESARROLLO DE TECNOLOGIAS
                    PARA LA DEFENSA NACIONAL)
                  </p>
                  <p className="text-sm font-medium text-orange-400/80">
                    ESTANCIA PROFESIONAL
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full border border-orange-400/20 w-max">
                  Reconocimiento y Recomendación
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                Colaboración de alto impacto en el diseño e investigación de
                soluciones lógicas y sistemas tecnológicos para el sector de la
                defensa nacional. Especializado en la optimización de algoritmos
                y programación de sistemas embebidos.
              </p>
            </div>

            <div className="bg-slate-900/20 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Sistema de Gestión de Pacientes
                  </h4>
                  <p className="text-sm font-medium text-orange-400/80">
                    Fundación AI-KOI | ESTADÍA PROFESIONAL
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full border border-orange-400/20 w-max">
                  Carta de recomendación avalada
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                Participación activa en el desarrollo de sistemas médicos
                avanzados orientados al sector salud. Enfoque en la
                implementación de arquitecturas lógicas robustas y optimización
                de software biomédico.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 max-w-4xl mx-auto px-4 pb-24" id="education">
          <h3 className="text-3xl font-bold text-orange-400 mb-6 tracking-tight">
            Educación
          </h3>
          <div className="flex flex-col gap-8">
            <div className="bg-slate-900/20 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Ingeniería en Software
                  </h4>
                  <p className="text-sm font-medium text-orange-400/80">
                    Universidad Politécnica de Tecámac
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-orange-400/10 text-orange-400 rounded-full border border-orange-400/20 w-max">
                  Finalizado
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                Durante mi paso por la Ingeniería de Software, compaginé los
                estudios con el trabajo, lo que me obligó a desarrollar una
                disciplina estricta para dominar desde el desarrollo frontend
                con React y Tailwind, hasta el backend con Java, Spring Boot y
                MySQL. Mi experiencia real se consolidó en las ferias académicas
                y en el diseño de proyectos prácticos, donde me encargué de
                estructurar bases de datos relacionales, conectar APIs y
                construir dashboards dinámicos que unificaban datos de distintas
                fuentes. Estas experiencias me enseñaron a trabajar en equipo
                bajo presión, optimizar código para resolver problemas reales y
                defender técnicamente mis soluciones ante audiencias exigentes.
                Al final, la carrera fue un laboratorio donde aprendí a traducir
                requerimientos lógicos en herramientas funcionales, dejándome
                listo para integrarme a entornos de desarrollo y analítica
                profesional.
              </p>
            </div>

          
          </div>
        </section>
      </main>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
export default App;
