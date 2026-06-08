import { Link } from "react-router-dom";
import { useState } from "react";

const misProyectos = [
  { id: 1, titulo: "Gestión Médica AI-KOI", categoria: "uiux", desc: "Optimización de flujos..." },
  { id: 2, titulo: "Cajero Automático", categoria: "backend", desc: "Lógica POO en Java..." },
  { id: 3, titulo: "Baraja de Cartas", categoria: "backend", desc: "Manejo de colecciones..." },
  { id: 4, titulo: "Sistema de Ventas", categoria: "backend", desc: "Conexión a BD y Spring Boot..." },
  { id: 5, titulo: "Dashboard Publicitario", categoria: "data", desc: "Unificación de Facebook, Google y TikTok..." },
];

export default function Projects() {
  const [filtro, setFiltro] = useState('all');

 
  const proyectosFiltrados = filtro === 'all' 
    ? misProyectos 
    : misProyectos.filter(p => p.categoria === filtro);
  return (
    <div className="min-h-screen">
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
                <Link
                  to="/"
                  className="text-white hover:text-orange-400 font-medium"
                >
                  Home
                </Link>
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
        
      <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* ================= BARRA DE TEXTO INTERACTIVA (FILTROS) ================= */}
      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm font-bold tracking-widest uppercase mb-16 text-slate-500 select-none">
        
        <button
          onClick={() => setFiltro('all')}
          className={`transition-all duration-300 cursor-pointer ${
            filtro === 'all' ? 'text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)] scale-105' : 'hover:text-slate-200'
          }`}
        >
          TODOS
        </button>

        <span className="text-slate-800 font-normal">|</span>

        <button
          onClick={() => setFiltro('uiux')}
          className={`transition-all duration-300 cursor-pointer ${
            filtro === 'uiux' ? 'text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)] scale-105' : 'hover:text-slate-200'
          }`}
        >
          UI/UX
        </button>

        <span className="text-slate-800 font-normal">|</span>

        <button
          onClick={() => setFiltro('backend')}
          className={`transition-all duration-300 cursor-pointer ${
            filtro === 'backend' ? 'text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)] scale-105' : 'hover:text-slate-200'
          }`}
        >
          BACK-END
        </button>

        <span className="text-slate-800 font-normal">|</span>

        <button
          onClick={() => setFiltro('data')}
          className={`transition-all duration-300 cursor-pointer ${
            filtro === 'data' ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] scale-105' : 'hover:text-slate-200'
          }`}
        >
          DATA ENGINEER
        </button>
      </div>

      {/* ================= REJILLA DINÁMICA DE PROYECTOS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosFiltrados.map((proyecto) => (
          <div 
            key={proyecto.id} 
            className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl hover:border-orange-500/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-white mb-2">{proyecto.titulo}</h3>
            <p className="text-slate-400 text-sm">{proyecto.desc}</p>
            {/* Aquí metes la maquetación pro que platicamos de UI/UX y Backend */}
          </div>
        ))}
      </div>

    </div>
  

      
    </div>
  );
}
