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
  CheckCircle2,
  Clock3,
} from "lucide-react";


const personalPhoneNumber = "573103267918";
const businessPhoneNumber = "17868210626";

const connectMessage =
  "Hola Mario, soy contacto de tu número de Estados Unidos y quiero seguir en contacto contigo.";

const advertisingMessage =
  "Hola, vi un anuncio de ROBOMARK TECH en Facebook o Instagram y me gustaría recibir información sobre sus servicios y conocer cómo pueden ayudar a mi empresa.";

const connectWhatsappUrl = `https://wa.me/${personalPhoneNumber}?text=${encodeURIComponent(
  connectMessage
)}`;

const advertisingWhatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${encodeURIComponent(
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

const trainingLevels = [
  {
    id: "principiante",
    name: "Nivel principiante",
    duration: "8 horas",
    colombiaRegularPrice: "$299.000 COP",
    colombiaPrice: "$249.000 COP",
    internationalRegularPrice: "US$219",
    internationalPrice: "US$179",
    paypalUrl: "https://www.paypal.com/ncp/payment/62RYR5F8KX5BN",
    description:
      "Comprende qué es la inteligencia artificial y aprende a utilizarla de forma clara, segura y responsable.",
    topics: [
      "Alfabetización en inteligencia artificial",
      "Prompts claros y efectivos",
      "Introducción a la IA generativa",
      "Riesgos, sesgos, privacidad y ética",
    ],
  },
  {
    id: "intermedio",
    name: "Nivel intermedio",
    duration: "13 horas",
    colombiaRegularPrice: "$469.000 COP",
    colombiaPrice: "$399.000 COP",
    internationalRegularPrice: "US$349",
    internationalPrice: "US$289",
    paypalUrl: "https://www.paypal.com/ncp/payment/NQB6A58WTKMLJ",
    description:
      "Avanza desde los fundamentos hasta el diseño, evaluación y aplicación práctica de soluciones con IA.",
    topics: [
      "Machine learning, datos y redes neuronales",
      "Preparación, entrenamiento y evaluación de modelos",
      "IA generativa para software e IBM Granite",
      "Texto a voz con IBM Watson",
    ],
  },
  {
    id: "avanzado",
    name: "Nivel avanzado",
    duration: "4 horas",
    colombiaRegularPrice: "$219.000 COP",
    colombiaPrice: "$179.000 COP",
    internationalRegularPrice: "US$189",
    internationalPrice: "US$159",
    paypalUrl: "https://www.paypal.com/ncp/payment/ZHJ52F2LHDH6A",
    description:
      "Profundiza en conceptos modernos de entrenamiento y adaptación de modelos sin exigir matemáticas avanzadas.",
    topics: [
      "Transformers",
      "Descenso de gradiente",
      "Cómo mejora un modelo durante el entrenamiento",
      "Prompting y prompt tuning",
    ],
  },
];

function TrainingShell({ children }) {
  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <a
          href="/"
          className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a ROBOMARKTECH
        </a>
        {children}
      </div>
    </main>
  );
}

function TrainingRegionPage({ region }) {
  const isColombia = region === "colombia";
  const packagePrice = isColombia ? "$649.000 COP" : "US$499";
  const packageRegularPrice = isColombia ? "$769.000 COP" : "US$599";
  const packagePaypalUrl = "https://www.paypal.com/ncp/payment/QAUTHGHLLGWCW";
  const paymentProvider = isColombia ? "Wompi" : "PayPal";

  const whatsappText = encodeURIComponent(
    `Hola, quiero información sobre la capacitación en IA para ${
      isColombia ? "Colombia" : "Estados Unidos/internacional"
    }.`
  );

  return (
    <TrainingShell>
      <header className="py-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          {isColombia ? "Tarifas para Colombia" : "Programa para Estados Unidos"}
        </p>
        <h1 className="mb-5 text-4xl font-black md:text-6xl">
          Capacitación en Inteligencia Artificial
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
          Elige un nivel o completa el programa de 25 horas. Cada nivel incluye
          ejercicios, evaluación y aplicación práctica.
        </p>
        <p className="mx-auto mt-5 max-w-3xl text-sm font-semibold text-cyan-300">
          Precio de lanzamiento válido hasta el 30 de septiembre de 2026 o hasta
          agotar los cupos disponibles, lo que ocurra primero.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        {trainingLevels.map((level) => {
          const price = isColombia
            ? level.colombiaPrice
            : level.internationalPrice;
          const regularPrice = isColombia
            ? level.colombiaRegularPrice
            : level.internationalRegularPrice;

          return (
            <article
              key={level.id}
              className="flex rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0d1b2a] to-[#10263c] p-7"
            >
              <div className="flex w-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-cyan-300">
                    {level.name}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-gray-300">
                    <Clock3 className="h-4 w-4" /> {level.duration}
                  </span>
                </div>

                <p className="mb-5 leading-7 text-gray-300">{level.description}</p>

                <ul className="mb-7 space-y-3">
                  {level.topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      {topic}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto border-t border-cyan-900 pt-5">
                  <p className="text-sm text-gray-400">
                    Precio regular: <span className="line-through">{regularPrice}</span>
                  </p>
                  <p className="text-3xl font-black">{price}</p>
                  <p className="text-xs font-semibold text-cyan-300">
                    Precio de lanzamiento
                  </p>
                  <p className="mb-5 text-xs text-gray-400">
                    Pago mediante {paymentProvider}
                  </p>
                  {isColombia ? (
                    <span className="block cursor-not-allowed rounded-full bg-gray-700 px-5 py-3 text-center font-bold text-gray-300">
                      Inscripciones próximamente
                    </span>
                  ) : (
                    <a
                      href={level.paypalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-bold text-white hover:from-cyan-400 hover:to-blue-500"
                    >
                      Inscribirme y pagar
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-8 rounded-3xl border border-cyan-400/50 bg-gradient-to-r from-cyan-950/70 to-blue-950/70 p-8 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Mejor valor
          </p>
          <h2 className="mb-3 text-3xl font-black">Programa completo</h2>
          <p className="max-w-2xl text-gray-300">
            Acceso a los tres niveles, 25 horas de formación y proyecto
            integrador.
          </p>
        </div>
        <div className="mt-6 shrink-0 md:mt-0 md:text-right">
          <p className="text-sm text-gray-400">
            Precio regular: <span className="line-through">{packageRegularPrice}</span>
          </p>
          <p className="text-4xl font-black">{packagePrice}</p>
          <p className="text-xs font-semibold text-cyan-300">
            Precio de lanzamiento
          </p>
          <p className="mb-4 text-xs text-gray-400">Pago mediante {paymentProvider}</p>
          {isColombia ? (
            <span className="inline-block cursor-not-allowed rounded-full bg-gray-700 px-6 py-3 font-bold text-gray-300">
              Inscripciones próximamente
            </span>
          ) : (
            <a
              href={packagePaypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold text-white hover:from-cyan-400 hover:to-blue-500"
            >
              Inscribirme al programa completo
            </a>
          )}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-cyan-900 bg-[#0d1b2a] p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold">¿Tienes preguntas?</h2>
        <p className="mb-6 text-gray-300">
          Escríbenos para recibir información sobre modalidad, fechas y cupos.
        </p>
        <a
          href={`https://wa.me/${businessPhoneNumber}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold hover:bg-emerald-400"
        >
          <MessageCircle className="h-5 w-5" /> Consultar por WhatsApp
        </a>
      </section>

    </TrainingShell>
  );
}

function TrainingConfirmationPage() {
  const confirmationMessage = encodeURIComponent(
    "Hola, realicé el pago de una capacitación en inteligencia artificial. Quiero confirmar mi inscripción y enviar los datos del participante."
  );

  return (
    <TrainingShell>
      <section className="mx-auto max-w-3xl py-16 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
          Solicitud recibida
        </p>
        <h1 className="mb-5 text-4xl font-black md:text-6xl">
          Gracias por tu inscripción
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-300">
          Tu proveedor de pagos procesará la transacción. ROBOMARKTECH verificará
          su estado antes de confirmar definitivamente tu cupo.
        </p>
      </section>

      <section className="mx-auto max-w-3xl rounded-3xl border border-cyan-500/30 bg-[#0d1b2a] p-8">
        <h2 className="mb-6 text-2xl font-bold">Próximos pasos</h2>
        <ol className="space-y-5 text-gray-300">
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 font-bold text-cyan-300">1</span>
            Conserva el comprobante o correo emitido por PayPal o Wompi.
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 font-bold text-cyan-300">2</span>
            Escríbenos por WhatsApp con tu nombre completo, correo y nivel adquirido.
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 font-bold text-cyan-300">3</span>
            Después de verificar el pago recibirás la confirmación del cupo y las instrucciones de acceso.
          </li>
        </ol>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${businessPhoneNumber}?text=${confirmationMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-bold hover:bg-emerald-400"
          >
            <MessageCircle className="h-5 w-5" /> Confirmar por WhatsApp
          </a>
          <a
            href="/capacitacion-ia"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-cyan-500/50 px-6 py-3 font-bold text-cyan-200 hover:bg-cyan-500/10"
          >
            Volver a capacitación
          </a>
        </div>
      </section>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-gray-500">
        Esta página no constituye por sí sola un comprobante de pago ni garantiza
        la aprobación de la transacción.
      </p>
    </TrainingShell>
  );
}

const digitalBusinessWeeks = [
  {
    week: "Semana 1",
    title: "Tu negocio y cliente ideal",
    topics: [
      "Diagnóstico de tu presencia digital",
      "Cliente ideal y propuesta de valor",
      "Mensaje comercial creado con apoyo de IA",
    ],
  },
  {
    week: "Semana 2",
    title: "Identidad de marca",
    topics: [
      "Personalidad, colores y tipografías",
      "Logotipo e identidad visual básica",
      "Biografía, eslogan y presentación profesional",
    ],
  },
  {
    week: "Semana 3",
    title: "Redes y WhatsApp Business",
    topics: [
      "Optimización de Instagram y Facebook",
      "Perfil comercial y canales de contacto",
      "Catálogo, respuestas rápidas y atención inicial",
    ],
  },
  {
    week: "Semana 4",
    title: "Contenido con inteligencia artificial",
    topics: [
      "Prompts para ideas y textos comerciales",
      "Diseño de imágenes y publicaciones",
      "Guiones y videos cortos para redes sociales",
    ],
  },
  {
    week: "Semana 5",
    title: "Presencia web",
    topics: [
      "Estructura de una landing page efectiva",
      "Servicios, confianza y llamadas a la acción",
      "Prototipo adaptable a teléfonos celulares",
    ],
  },
  {
    week: "Semana 6",
    title: "Lanzamiento de tu negocio",
    topics: [
      "Calendario de contenido para 30 días",
      "Estrategia inicial para atraer clientes",
      "Presentación y evaluación del proyecto final",
    ],
  },
];

const digitalBusinessOutcomes = [
  "Mensaje y propuesta de valor definidos",
  "Identidad visual básica para tu negocio",
  "Redes sociales organizadas profesionalmente",
  "WhatsApp Business listo para atender clientes",
  "Publicaciones y videos creados con IA",
  "Prototipo de landing page para tu negocio",
  "Calendario de contenido para 30 días",
  "Estrategia inicial de lanzamiento digital",
];

function DigitalBusinessCoursePage() {
  const courseWhatsappMessage = encodeURIComponent(
    "Hola, quiero reservar uno de los primeros 10 cupos del programa Lanza tu negocio digital con IA por USD 249."
  );
  const courseWhatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${courseWhatsappMessage}`;
  const personalizedWhatsappMessage = encodeURIComponent(
    "Hola, quiero recibir información sobre la capacitación personalizada de ROBOMARKTECH."
  );
  const personalizedWhatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${personalizedWhatsappMessage}`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Lanza tu negocio digital con IA | ROBOMARKTECH";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="fixed inset-0 -z-10 bg-[#07111f]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="/" className="text-lg font-black tracking-wide md:text-xl">
            ROBOMARK<span className="text-cyan-400">TECH</span>
          </a>
          <a
            href={courseWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-400 md:px-6"
          >
            <MessageCircle className="h-4 w-4" />
            Reservar mi cupo
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[110px]" />
          <div className="absolute right-[-6rem] top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.09),transparent_35%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300 sm:text-sm">
              <Sparkles className="h-4 w-4" /> Programa práctico para principiantes
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              Lanza tu negocio digital con
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                inteligencia artificial
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Crea tu marca, organiza tus redes sociales, produce contenido y
              desarrolla la presencia web de tu negocio, aunque empieces desde cero.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
              {["6 semanas", "12 clases en vivo", "24 horas prácticas", "Máximo 12 participantes"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={courseWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-4 text-base font-black text-[#04101c] shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_45px_rgba(34,211,238,0.4)]"
              >
                Quiero reservar mi cupo <span aria-hidden="true">→</span>
              </a>
              <p className="text-center text-sm text-slate-400 sm:text-left">
                No necesitas experiencia previa.
              </p>
            </div>
          </div>

          <aside className="relative rounded-[2rem] border border-cyan-400/30 bg-gradient-to-br from-[#0d1b2a] to-[#10263c] p-6 shadow-2xl shadow-cyan-950/40 md:p-8">
            <div className="absolute -right-3 -top-3 rounded-full bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950 shadow-lg">
              Solo primeros 10
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Precio fundador
            </p>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-black md:text-6xl">USD 249</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Precio regular posterior: <span className="line-through">USD 399</span>
            </p>

            <div className="my-7 h-px bg-white/10" />

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="font-bold text-white">También puedes pagar en 2 cuotas</p>
              <p className="mt-2 text-3xl font-black text-cyan-300">2 × USD 135</p>
              <p className="mt-1 text-xs text-slate-400">Total financiado: USD 270</p>
            </div>

            <ul className="mt-7 space-y-3 text-sm text-slate-200">
              {[
                "Clases virtuales y en vivo",
                "Ejercicios aplicados a tu propio negocio",
                "Acompañamiento en un grupo reducido",
                "Proyecto digital listo para lanzar",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={courseWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 font-black transition hover:bg-emerald-400"
            >
              <MessageCircle className="h-5 w-5" /> Reservar por WhatsApp
            </a>
            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Promoción válida para los primeros 10 inscritos.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Hecho para ti</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Tu negocio puede ser excelente. Ahora necesitan encontrarlo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Este programa está dirigido a emprendedores y pequeños negocios
              hispanos en Estados Unidos que desean crecer digitalmente sin depender
              de conocimientos técnicos avanzados.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Tienes una idea", "Quieres convertirla en una marca clara, profesional y lista para presentarse."],
              ["Ya tienes un negocio", "Necesitas mejorar tus redes, contenido y canales para recibir clientes."],
              ["La tecnología te abruma", "Quieres aprender paso a paso y aplicar la IA con acompañamiento."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-[#0d1b2a] p-7">
                <Zap className="h-7 w-7 text-cyan-400" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-[#0b1928] to-[#07111f] py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-center gap-10 rounded-[2rem] border border-cyan-400/25 bg-white/[0.035] p-7 md:grid-cols-[1.15fr_.85fr] md:p-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Opción individual
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Capacitación personalizada para tu negocio
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Si necesitas avanzar a tu propio ritmo, diseñamos un proceso de
                formación adaptado a tu negocio, experiencia, objetivos y
                disponibilidad.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                La duración, el contenido y el precio se definen después de una
                evaluación inicial. Esta modalidad no hace parte de la promoción
                grupal ni del premio al mejor proyecto.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
              <ul className="space-y-4 text-sm text-slate-200">
                {[
                  "Sesiones individuales en vivo",
                  "Horario flexible",
                  "Contenido adaptado a tu negocio",
                  "Acompañamiento directo",
                  "Aplicación práctica sobre tu marca y procesos",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={personalizedWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 px-6 py-4 font-black text-cyan-200 transition hover:bg-cyan-400/20"
              >
                <MessageCircle className="h-5 w-5" /> Solicitar capacitación personalizada
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Resultados concretos</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">No solo aprenderás: construirás.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Cada ejercicio se aplicará directamente a tu negocio o idea para que
              termines con una base digital que puedas utilizar.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {digitalBusinessOutcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-2xl border border-cyan-900/70 bg-[#0b1928] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                <p className="font-semibold leading-6 text-slate-200">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1725] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Programa de 6 semanas</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">De la idea al lanzamiento digital</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Dos sesiones en vivo por semana, con explicaciones claras, demostraciones y práctica guiada.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {digitalBusinessWeeks.map((item, index) => (
              <article key={item.week} className="rounded-3xl border border-white/10 bg-[#07111f] p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-lg font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">{item.week}</p>
                    <h3 className="mt-1 text-xl font-black md:text-2xl">{item.title}</h3>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {item.topics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="rounded-[2rem] border border-amber-300/40 bg-gradient-to-br from-amber-300/10 via-[#10263c] to-[#07111f] p-7 md:p-12">
            <div className="grid items-center gap-8 md:grid-cols-[.7fr_1.3fr]">
              <div className="flex justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 shadow-[0_0_70px_rgba(252,211,77,0.14)]">
                  <span className="text-7xl" aria-hidden="true">🏆</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Premio al mejor proyecto</p>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">Tu negocio podría salir publicado.</h2>
                <p className="mt-5 leading-8 text-slate-300">
                  Al finalizar, ROBOMARKTECH premiará el mejor proyecto con dominio
                  .com y hosting durante un año, más una landing page profesional
                  diseñada con inteligencia artificial.
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  La selección se realizará según el avance, la aplicación práctica,
                  la claridad del negocio y la presentación final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Preguntas frecuentes</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Antes de reservar</h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              ["¿Necesito experiencia en tecnología o inteligencia artificial?", "No. El programa comienza desde cero y está diseñado para personas sin experiencia previa."],
              ["¿Debo tener un negocio funcionando?", "No. Puedes trabajar sobre un negocio existente o desarrollar una idea que quieras lanzar."],
              ["¿Las clases son grabadas?", "Las 12 sesiones son virtuales y en vivo. Las condiciones de acceso a grabaciones se informarán antes del inicio."],
              ["¿Cómo funciona el pago en cuotas?", "Puedes reservar con la primera cuota de USD 135. La segunda cuota de USD 135 deberá pagarse antes de la tercera semana del programa."],
              ["¿El precio de USD 249 es para todos?", "No. Es un precio fundador exclusivo para los primeros 10 participantes inscritos. Después aplicará el precio regular de USD 399."],
              ["¿Cómo reservo mi cupo?", "Escríbenos por WhatsApp. Confirmaremos disponibilidad, forma de pago y los datos necesarios para completar tu inscripción."],
            ].map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-[#0d1b2a] p-5 open:border-cyan-500/30">
                <summary className="cursor-pointer list-none pr-6 font-bold text-white marker:hidden">
                  {question}
                </summary>
                <p className="mt-4 border-t border-white/10 pt-4 leading-7 text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)]" />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <TrendingUp className="mx-auto h-10 w-10 text-cyan-400" />
          <h2 className="mt-6 text-4xl font-black md:text-6xl">Tu negocio merece ser encontrado.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Da el primer paso y construye una presencia digital profesional con acompañamiento y herramientas de inteligencia artificial.
          </p>
          <a
            href={courseWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-lg font-black transition hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            <MessageCircle className="h-6 w-6" /> Reservar mi cupo fundador
          </a>
          <p className="mt-5 text-sm text-slate-400">WhatsApp: +1 786-821-0626</p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        <p>© 2026 ROBOMARKTECH · Inteligencia artificial, estrategia y tecnología.</p>
        <div className="mt-3 flex justify-center gap-5">
          <a href="/politica-de-privacidad" className="hover:text-cyan-300">Política de privacidad</a>
          <a href="/" className="hover:text-cyan-300">Página principal</a>
        </div>
      </footer>

      <a
        href={courseWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar cupo por WhatsApp"
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 font-black text-white shadow-2xl md:hidden"
      >
        <MessageCircle className="h-5 w-5" /> Reservar mi cupo
      </a>
    </main>
  );
}

const privacyContactEmail = "contacto@robomarktech.com";

function LegalPage({ title, description, children }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ROBOMARKTECH`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <main className="min-h-screen bg-[#07111f] px-5 py-10 text-white md:px-8 md:py-16">
      <article className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-8 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Volver a ROBOMARKTECH
        </a>

        <header className="mb-10 border-b border-cyan-900 pb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            ROBOMARKTECH
          </p>
          <h1 className="mb-4 text-4xl font-black md:text-5xl">{title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">{description}</p>
          <p className="mt-4 text-sm text-gray-400">
            Última actualización: 8 de septiembre de 2026
          </p>
        </header>

        <div className="space-y-8 leading-7 text-gray-300">{children}</div>

        <footer className="mt-12 border-t border-cyan-900 pt-7 text-sm text-gray-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/" className="text-cyan-400 hover:text-cyan-300">
              Inicio
            </a>
            <a
              href="/politica-de-privacidad"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Política de privacidad
            </a>
            <a
              href="/eliminacion-de-datos"
              className="text-cyan-400 hover:text-cyan-300"
            >
              Eliminación de datos
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}

function LegalSection({ title, children }) {
  return (
    <section className="rounded-2xl border border-cyan-900 bg-[#0d1b2a] p-6 md:p-8">
      <h2 className="mb-4 text-2xl font-bold text-white">{title}</h2>
      {children}
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      description="Esta política explica cómo ROBOMARKTECH recopila, utiliza, conserva y protege la información relacionada con sus visitantes, prospectos y clientes."
    >
      <LegalSection title="1. Responsable del tratamiento">
        <p>
          ROBOMARKTECH es responsable del tratamiento de la información descrita
          en esta política. Para consultas sobre privacidad, puedes escribir a{" "}
          <a
            href={`mailto:${privacyContactEmail}`}
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            {privacyContactEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="2. Información que podemos recopilar">
        <ul className="list-disc space-y-2 pl-6">
          <li>Nombre, teléfono, correo electrónico, país y ciudad.</li>
          <li>Información sobre tu empresa, proyecto, necesidades e intereses.</li>
          <li>Mensajes y archivos que decidas compartir por WhatsApp, formularios o correo.</li>
          <li>Datos de inscripción, atención, seguimiento y estado de pago.</li>
          <li>
            Datos técnicos básicos del sitio, como dirección IP, navegador,
            dispositivo, páginas visitadas y registros de seguridad.
          </li>
        </ul>
        <p className="mt-4">
          ROBOMARKTECH no solicita ni almacena directamente números completos de
          tarjetas, claves bancarias ni códigos de seguridad. Los pagos son
          procesados por las plataformas de pago seleccionadas por el usuario.
        </p>
      </LegalSection>

      <LegalSection title="3. Cómo obtenemos la información">
        <p>
          Podemos recibirla cuando visitas nuestro sitio, completas un formulario,
          te inscribes en una capacitación, realizas una compra o te comunicas con
          nosotros por WhatsApp, correo electrónico u otro canal autorizado.
        </p>
      </LegalSection>

      <LegalSection title="4. Para qué utilizamos los datos">
        <ul className="list-disc space-y-2 pl-6">
          <li>Responder consultas y brindar atención comercial o técnica.</li>
          <li>Identificar necesidades y recomendar servicios o capacitaciones.</li>
          <li>Gestionar registros, cupos, pagos, soporte y seguimiento.</li>
          <li>Enviar información solicitada y comunicaciones relacionadas con el servicio.</li>
          <li>Automatizar y mejorar la atención mediante herramientas tecnológicas.</li>
          <li>Prevenir fraude, abuso y problemas de seguridad.</li>
          <li>Cumplir obligaciones legales y atender solicitudes de autoridades competentes.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Automatización e inteligencia artificial">
        <p>
          Algunos mensajes pueden ser procesados mediante flujos automatizados y
          herramientas de inteligencia artificial para clasificar solicitudes,
          mantener el contexto de la conversación y preparar respuestas. Si una
          consulta requiere revisión humana, puede ser transferida a un integrante
          autorizado de ROBOMARKTECH. No debes enviar información sensible que no
          sea necesaria para atender tu solicitud.
        </p>
      </LegalSection>

      <LegalSection title="6. Proveedores y transferencias de información">
        <p>
          Podemos utilizar proveedores necesarios para operar el servicio, entre
          ellos Meta y WhatsApp para mensajería, OpenAI para funciones de
          inteligencia artificial, Amazon Web Services y n8n para infraestructura
          y automatización, proveedores de alojamiento web y plataformas de pago.
          Estos servicios pueden procesar información en otros países y se rigen
          también por sus propias políticas y condiciones.
        </p>
        <p className="mt-4">
          No vendemos datos personales. Solo compartimos la información necesaria
          para prestar el servicio, cumplir una obligación legal, proteger derechos
          o cuando exista autorización del titular.
        </p>
      </LegalSection>

      <LegalSection title="7. Conservación y seguridad">
        <p>
          Conservamos la información durante el tiempo razonablemente necesario
          para atender la finalidad para la cual fue recopilada y cumplir
          obligaciones legales, contables, contractuales o de seguridad. Aplicamos
          medidas técnicas y organizativas razonables, aunque ningún sistema puede
          garantizar seguridad absoluta.
        </p>
      </LegalSection>

      <LegalSection title="8. Tus derechos y eliminación de datos">
        <p>
          Puedes solicitar acceso, corrección, actualización, oposición o
          eliminación de tus datos, según corresponda bajo la legislación
          aplicable. Consulta las instrucciones en{" "}
          <a
            href="/eliminacion-de-datos"
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            nuestra página de eliminación de datos
          </a>
          . También puedes retirar tu autorización para comunicaciones no
          esenciales.
        </p>
      </LegalSection>

      <LegalSection title="9. Menores de edad">
        <p>
          Nuestros servicios comerciales están dirigidos principalmente a personas
          adultas y organizaciones. No recopilamos deliberadamente información de
          menores sin la autorización correspondiente. Si consideras que recibimos
          esos datos indebidamente, escríbenos para revisarlos y eliminarlos.
        </p>
      </LegalSection>

      <LegalSection title="10. Cambios a esta política">
        <p>
          Podemos actualizar esta política cuando cambien nuestros servicios o las
          obligaciones aplicables. La versión vigente se publicará en esta página
          con su fecha de actualización.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

function DataDeletionPage() {
  return (
    <LegalPage
      title="Eliminación de datos de usuario"
      description="Puedes solicitar la eliminación de los datos personales que ROBOMARKTECH controla siguiendo estas instrucciones."
    >
      <LegalSection title="1. Envía tu solicitud">
        <p>
          Escribe a{" "}
          <a
            href={`mailto:${privacyContactEmail}?subject=Eliminación%20de%20datos%20-%20WhatsApp`}
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            {privacyContactEmail}
          </a>{" "}
          con el asunto <strong className="text-white">“Eliminación de datos – WhatsApp”</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Información necesaria">
        <p>Incluye únicamente los datos necesarios para localizar tu registro:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Nombre completo.</li>
          <li>Número de WhatsApp con código de país o correo utilizado.</li>
          <li>Descripción breve de la información que deseas eliminar.</li>
        </ul>
        <p className="mt-4">
          Podemos solicitar una verificación razonable de identidad para evitar que
          otra persona elimine tus datos sin autorización. No envíes contraseñas,
          códigos de acceso ni información bancaria.
        </p>
      </LegalSection>

      <LegalSection title="3. Revisión y eliminación">
        <p>
          Confirmaremos la recepción y atenderemos la solicitud dentro del plazo
          exigido por la legislación aplicable. Cuando corresponda, eliminaremos o
          anonimizaremos los datos bajo nuestro control y enviaremos una confirmación
          al canal verificado del solicitante.
        </p>
      </LegalSection>

      <LegalSection title="4. Excepciones de conservación">
        <p>
          Algunos registros podrán conservarse cuando sean necesarios para cumplir
          obligaciones legales, contables o fiscales, resolver disputas, prevenir
          fraude, proteger derechos o demostrar transacciones. En esos casos se
          limitará su uso y se eliminarán cuando finalice la obligación aplicable.
        </p>
      </LegalSection>

      <LegalSection title="5. Servicios de terceros">
        <p>
          Esta solicitud cubre los datos controlados por ROBOMARKTECH. Meta,
          WhatsApp, proveedores de pago y otros servicios pueden conservar datos
          independientes conforme a sus propias políticas. Para eliminar esos datos
          también puede ser necesario utilizar las herramientas o canales de cada
          proveedor.
        </p>
      </LegalSection>

      <LegalSection title="6. Contacto">
        <p>
          Si tienes dudas sobre el proceso, escribe a{" "}
          <a
            href={`mailto:${privacyContactEmail}`}
            className="font-semibold text-cyan-400 hover:text-cyan-300"
          >
            {privacyContactEmail}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
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
        <Route
          path="/capacitacion-ia"
          element={<TrainingRegionPage region="internacional" />}
        />
        <Route
          path="/capacitacion-ia/colombia"
          element={<TrainingRegionPage region="colombia" />}
        />
        <Route
          path="/capacitacion-ia/internacional"
          element={<TrainingRegionPage region="internacional" />}
        />
        <Route
          path="/capacitacion-ia/confirmacion"
          element={<TrainingConfirmationPage />}
        />
        <Route
          path="/curso-negocio-digital"
          element={<DigitalBusinessCoursePage />}
        />
        <Route
          path="/politica-de-privacidad"
          element={<PrivacyPolicyPage />}
        />
        <Route
          path="/eliminacion-de-datos"
          element={<DataDeletionPage />}
        />

        <Route path="*" element={<MainWebsite />} />

      </Routes>
    </Router>
  );
}
export default App;
