import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import {
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
  TrendingUp,
  FolderOpen,
  ExternalLink,
  FileText,
} from "lucide-react";


const phoneNumber = "573103267918";

const connectMessage =
  "Hola Mario, soy contacto de tu número de Estados Unidos y quiero seguir en contacto contigo.";

const advertisingMessage =
  "Hola, vi un anuncio de ROBOMARK TECH en Facebook o Instagram y me gustaría recibir información sobre sus servicios y conocer cómo pueden ayudar a mi empresa.";

const connectWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  connectMessage
)}`;

const advertisingWhatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  advertisingMessage
)}`;

// Pega aquí la URL de implementación del Apps Script del aula.
const LAB_AULA_API_URL =
  "https://script.google.com/macros/s/AKfycbzGO00g_uvP0NnXMzOfUnDpazFxJQOQRtDnQ3k7wW5PvMW_DPjWOvPqcdAX37qzBjnbQA/exec";

function RedirectPage({
  redirectUrl,
  title,
  introduction,
  description,
  label,
  displayValue,
  buttonText,
  note,
  features = [],
  redirectSeconds = 3,
}) {
  const [seconds, setSeconds] = useState(redirectSeconds);

  useEffect(() => {
    const countdown = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(countdown);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    const redirect = window.setTimeout(() => {
      window.location.replace(redirectUrl);
    }, redirectSeconds * 1000);

    return () => {
      window.clearInterval(countdown);
      window.clearTimeout(redirect);
    };
  }, [redirectUrl, redirectSeconds]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1E1E24] text-white">
      {/* Fondo tecnológico */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E24]/95 via-[#1E1E24]/90 to-[#071321]/95" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <section className="w-full max-w-2xl text-center">
          {/* Marca */}
          <div className="fade-item fade-delay-1 mb-7">
            <p className="text-3xl font-bold tracking-wide md:text-4xl">
              ROBOMARK{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TECH
              </span>
            </p>
          </div>

          {/* Título */}
          <h1 className="fade-item fade-delay-2 mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>

          {/* Mensaje */}
          <p className="fade-item fade-delay-3 mb-4 text-lg font-medium text-white/90 md:text-xl">
            {introduction}
          </p>

          <p className="fade-item fade-delay-4 mx-auto mb-7 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            {description}
          </p>

          {/* Beneficios para visitantes de publicidad */}
          {features.length > 0 && (
            <div className="fade-item fade-delay-5 mx-auto mb-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/75 backdrop-blur-sm"
                  >
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {feature.text}
                  </div>
                );
              })}
            </div>
          )}

          {/* Dato principal */}
          <div className="fade-item fade-delay-6 mb-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/45">
              {label}
            </p>

            <p className="text-2xl font-bold tracking-wide md:text-4xl">
              {displayValue}
            </p>
          </div>

          {/* Contador */}
          <p
            className="fade-item fade-delay-7 mb-4 font-medium text-cyan-300"
            aria-live="polite"
          >
            {seconds > 0
              ? `Conectando con WhatsApp en ${seconds} ${seconds === 1 ? "segundo" : "segundos"
              }...`
              : "Abriendo WhatsApp..."}
          </p>

          {/* Barra de progreso */}
          <div className="fade-item fade-delay-7 mx-auto mb-9 h-2 w-full max-w-xl overflow-hidden rounded-full bg-white/10">
            <div
              className="progress-bar h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-[#25D366]"
              style={{
                animationDuration: `${redirectSeconds}s`,
              }}
            />
          </div>

          {/* Botón */}
          <a
            href={redirectUrl}
            className="fade-item fade-delay-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#20BD5A]"
          >
            <MessageCircle className="h-5 w-5" />
            {buttonText}
          </a>

          {/* Confianza */}
          <div className="fade-item fade-delay-9 mt-7 flex items-center justify-center gap-2 text-sm text-white/55">
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            Canal oficial de ROBOMARK TECH
          </div>

          <p className="fade-item fade-delay-9 mt-5 text-sm text-white/45">
            {note}
          </p>

          <p className="fade-item fade-delay-9 mt-5 text-xs tracking-wide text-white/30 sm:text-sm">
            Inteligencia Artificial · Automatización · Transformación Digital ·
            Expansión Internacional
          </p>
        </section>
      </div>

      <style>{`
        .progress-bar {
          width: 0%;
          animation-name: progressBar;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        .fade-item {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .fade-delay-1 { animation-delay: 0.05s; }
        .fade-delay-2 { animation-delay: 0.15s; }
        .fade-delay-3 { animation-delay: 0.25s; }
        .fade-delay-4 { animation-delay: 0.35s; }
        .fade-delay-5 { animation-delay: 0.45s; }
        .fade-delay-6 { animation-delay: 0.55s; }
        .fade-delay-7 { animation-delay: 0.65s; }
        .fade-delay-8 { animation-delay: 0.75s; }
        .fade-delay-9 { animation-delay: 0.85s; }

        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-bar {
            width: 100%;
            animation: none;
          }

          .fade-item {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

function ConnectRedirect() {
  return (
    <RedirectPage
      redirectUrl={connectWhatsappUrl}
      title="Sigamos en contacto"
      introduction="Gracias por seguir en contacto con Mario A. Pérez, CEO de ROBOMARK TECH."
      description="Estamos migrando nuestro canal oficial de WhatsApp para ofrecerte una atención más rápida, personalizada y segura. Serás redirigido automáticamente en unos segundos."
      label="Nuevo número oficial"
      displayValue="+57 310 326 7918"
      buttonText="Continuar en WhatsApp"
      note="Guarda este número para futuras comunicaciones."
      redirectSeconds={3}
    />
  );
}

function ContactRedirect() {
  const features = [
    {
      icon: Sparkles,
      text: "Inteligencia Artificial",
    },
    {
      icon: Zap,
      text: "Automatización",
    },
    {
      icon: TrendingUp,
      text: "Crecimiento digital",
    },
  ];
  

  return (
    <RedirectPage
      redirectUrl={advertisingWhatsappUrl}
      title="¡Gracias por tu interés!"
      introduction="Estás a un paso de transformar tu negocio con tecnología."
      description="En ROBOMARK TECH diseñamos soluciones de Inteligencia Artificial, automatización y transformación digital para aumentar la productividad, fortalecer tu presencia y generar nuevas oportunidades de crecimiento."
      label="Asesoría personalizada"
      displayValue="Hablemos de tu proyecto"
      buttonText="Hablar con un especialista"
      note="Cuéntanos qué necesita tu empresa y te orientaremos sobre la mejor solución."
      features={features}
      redirectSeconds={4}
      
    />
  );
}
    
function ClientPortal({
  clientName,
  description,
  driveUrl,
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1E1E24] text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-20 mix-blend-luminosity"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E24]/95 via-[#1E1E24]/90 to-[#071321]/95" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-12">
        <section className="w-full max-w-2xl text-center">
          <p className="mb-6 text-3xl font-bold tracking-wide md:text-4xl">
            ROBOMARK{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TECH
            </span>
          </p>

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <FolderOpen className="h-8 w-8 text-cyan-300" />
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            Portal del cliente
          </p>

          <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
            {clientName}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-white/70">
            {description}
          </p>

          <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white/70">
            <div className="flex items-center justify-center gap-3">
              <FileText className="h-5 w-5 text-cyan-300" />
              Documentación actualizada en Google Drive
            </div>
          </div>

          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:-translate-y-0.5"
          >
            <FolderOpen className="h-5 w-5" />
            Abrir documentos
            <ExternalLink className="h-4 w-4" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/45">
            <ShieldCheck className="h-4 w-4 text-cyan-300" />
            Documentación compartida por ROBOMARK TECH
          </div>
        </section>
      </div>
    </main>
  );
}
function MainWebsite() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <div className="flex-grow">
        <HomePage />
      </div>

      <Footer />
    </div>
  );
}
function LaboratorioPage() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="https://horizons-cdn.hostinger.com/fc731e3f-f0fe-445b-854f-9b35ce18b227/1e31c5593bf471f9032fd10266735395.png"
              alt="ROBOMARK TECH Logo"
              className="h-24 md:h-28 w-auto object-contain"
            />

            <p className="text-sm text-cyan-400 mt-2 tracking-wide">
              Iniciativa impulsada por ROBOMARKTECH
            </p>
          </div>
          <p className="text-cyan-400 font-semibold mb-3">
            INICIATIVA AUTÓNOMA ENTRE COMPAÑEROS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Laboratorio de{" "}
            <span className="text-cyan-400">
              IA, Datos y Emprendimiento
            </span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
  El laboratorio se realizará de forma virtual por Zoom, con una duración aproximada de 2 horas semanales. El horario definitivo será seleccionado entre las opciones propuestas, teniendo en cuenta la disponibilidad de la mayoría de los participantes.
</p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0d1b2a] p-6 rounded-2xl border border-cyan-900">
            <h2 className="text-xl font-bold mb-3">🎯 Objetivo</h2>
            <p className="text-gray-300">
              Fortalecer conocimientos en Inteligencia Artificial y Datos,
              realizar ejercicios prácticos y avanzar en certificaciones.
            </p>
          </div>

          <div className="bg-[#0d1b2a] p-6 rounded-2xl border border-cyan-900">
            <h2 className="text-xl font-bold mb-3">🎓 IBM SkillsBuild</h2>
            <p className="text-gray-300">
              Los participantes deberán registrarse en IBM SkillsBuild.
              Comenzaremos desde cursos básicos y avanzaremos progresivamente.
            </p>
          </div>

          <div className="bg-[#0d1b2a] p-6 rounded-2xl border border-cyan-900">
            <h2 className="text-xl font-bold mb-3">🚀 Emprendimiento</h2>
            <p className="text-gray-300">
              También compartiremos conocimientos de marketing digital,
              identidad de marca, redes sociales y herramientas para impulsar negocios.
            </p>
          </div>
        </div>

        <div className="bg-[#0d1b2a] border border-cyan-900 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-cyan-400 mb-2">
            Aclaración importante
          </h2>

          <p className="text-gray-300">
            Esta es una iniciativa autónoma y voluntaria entre compañeros.
            No es una actividad organizada, avalada ni dirigida por el SENA.
            El laboratorio se realizará cuando exista un mínimo de 5 participantes.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-cyan-700/60 bg-[#0d1b2a] p-8 text-center md:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Primera cohorte
          </p>
          <h2 className="mb-4 text-3xl font-bold">Inscripciones cerradas</h2>
          <p className="text-lg leading-8 text-gray-300">
            El grupo del Laboratorio de IA, Datos y Emprendimiento ya fue
            conformado. Gracias a todas las personas que registraron su interés.
          </p>
        </div>
      </div>
    </div>
  );
}

function AulaLaboratorioPage() {
  const [sesiones, setSesiones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!LAB_AULA_API_URL) {
      setCargando(false);
      setError("El aula está lista, pero todavía falta conectar Google Sheets.");
      return;
    }

    const cargarSesiones = async () => {
      try {
        const response = await fetch(`${LAB_AULA_API_URL}?action=sesiones`);
        if (!response.ok) throw new Error("Error al consultar las sesiones");

        const data = await response.json();
        setSesiones(Array.isArray(data.sesiones) ? data.sesiones : []);
      } catch (fetchError) {
        setError("No fue posible cargar la información. Intenta nuevamente más tarde.");
      } finally {
        setCargando(false);
      }
    };

    cargarSesiones();
  }, []);

  const proximaSesion =
    sesiones.find((sesion) => sesion.estado === "En curso") ||
    sesiones.find((sesion) => sesion.estado === "Próxima") ||
    sesiones[sesiones.length - 1];
  const sesionesAnteriores = sesiones.filter(
    (sesion) => sesion !== proximaSesion
  );

  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-14 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <a
            href="/lab-ia"
            className="mb-6 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            ← Volver al Laboratorio
          </a>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            ROBOMARKTECH
          </p>
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Aula del Laboratorio
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Consulta la próxima sesión, el enlace de acceso, los temas y los
            materiales del Laboratorio de IA, Datos y Emprendimiento.
          </p>
        </header>

        {cargando && (
          <div className="rounded-2xl border border-cyan-900 bg-[#0d1b2a] p-8 text-center text-gray-300">
            Cargando información del aula...
          </div>
        )}

        {!cargando && error && (
          <div className="rounded-2xl border border-amber-700/60 bg-amber-950/30 p-6 text-center text-amber-100">
            {error}
          </div>
        )}

        {!cargando && !error && sesiones.length === 0 && (
          <div className="rounded-2xl border border-cyan-900 bg-[#0d1b2a] p-8 text-center text-gray-300">
            Aún no hay sesiones publicadas.
          </div>
        )}

        {!cargando && !error && proximaSesion && (
          <section className="mb-10 rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-[#0d1b2a] to-[#10263c] p-7 md:p-10">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${
                  proximaSesion.estado === "En curso"
                    ? "bg-emerald-400/15 text-emerald-300"
                    : proximaSesion.estado === "Finalizada"
                      ? "bg-gray-400/15 text-gray-300"
                      : "bg-cyan-400/15 text-cyan-300"
                }`}
              >
                {proximaSesion.estado.toUpperCase()}
              </span>
              <span className="text-gray-300">
                {proximaSesion.fecha} · {proximaSesion.inicio}
                {proximaSesion.fin ? ` – ${proximaSesion.fin}` : ""}
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold">{proximaSesion.tema}</h2>
            <p className="mb-7 leading-7 text-gray-300">
              {proximaSesion.descripcion || "Los detalles se publicarán próximamente."}
            </p>

            <div className="flex flex-wrap gap-4">
            {proximaSesion.calendarUrl && (
  <a
    href={proximaSesion.calendarUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 px-6 py-3 font-semibold text-cyan-200 hover:bg-cyan-500/10"
  >
    Agregar al calendario
    <ExternalLink className="h-4 w-4" />
  </a>
)}
              {proximaSesion.meetUrl && (
                <a
                  href={proximaSesion.meetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold hover:opacity-90"
                >
                  Entrar a Google Meet
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              {proximaSesion.materialUrl && (
                
                <a
                
                  href={proximaSesion.materialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-500/50 px-6 py-3 font-semibold text-cyan-200 hover:bg-cyan-500/10"
                >
                  <FileText className="h-4 w-4" />
                  Ver materiales
                </a>
              )}
            </div>
          </section>
        )}

        {!cargando && !error && sesionesAnteriores.length > 0 && (
          <section>
            <h2 className="mb-5 text-2xl font-bold">Calendario de sesiones</h2>
            <div className="grid gap-5 md:grid-cols-2">
            
              {sesionesAnteriores.map((sesion) => (
                <article
                  key={sesion.id}
                  className="rounded-2xl border border-cyan-900 bg-[#0d1b2a] p-6"
                >
                  <p className="mb-2 text-sm text-cyan-400">
                    {sesion.fecha} · {sesion.inicio}
                    {sesion.fin ? ` – ${sesion.fin}` : ""}
                  </p>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    {sesion.estado}
                  </p>

                  <h3 className="mb-3 text-xl font-bold">{sesion.tema}</h3>

                  <p className="mb-4 text-sm leading-6 text-gray-300">
                    {sesion.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {sesion.calendarUrl && (
                      <a
                        href={sesion.calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                      >
                        Agregar al calendario
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}

                    {sesion.materialUrl && (
                      <a
                        href={sesion.materialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                      >
                        <FileText className="h-4 w-4" />
                        Consultar material
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/portal/fundatenn"
          element={
            <ClientPortal
              clientName="FUNDATENN"
              description="Bienvenido al portal de documentos compartidos del proyecto FUNDATENN."
              driveUrl="https://drive.google.com/drive/folders/1fGCZz1lzs3wpRLyPoUZL5OulYB5lx3SY?usp=sharing"
            />
          }
        />

        <Route
          path="/portal/invitro"
          element={
            <ClientPortal
              clientName="INVITRO HUMAN CELL"
              description="Bienvenido al portal de documentos compartidos de INVITRO HUMAN CELL."
              driveUrl="https://drive.google.com/drive/folders/1weSWmUff5hU-jBMbJ_t20oHDiMp0ANgG?usp=sharing"
            />
          }
        />

        <Route path="/connect" element={<ConnectRedirect />} />
        <Route path="/contact" element={<ContactRedirect />} />
        <Route path="/lab-ia" element={<LaboratorioPage />} />
        <Route path="/lab-ia/aula" element={<AulaLaboratorioPage />} />

        <Route path="*" element={<MainWebsite />} />

      </Routes>
    </Router>
  );
}
export default App;
