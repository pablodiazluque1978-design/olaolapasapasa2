import { useState, useEffect, useRef } from 'react';

// ============ ICONS (SVG Components) ============
const PhoenixIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8C32 8 24 16 24 28C24 32 26 36 28 38L20 52C20 52 28 48 32 44C36 48 44 52 44 52L36 38C38 36 40 32 40 28C40 16 32 8 32 8Z" fill="currentColor" opacity="0.8"/>
    <path d="M32 4L34 12L32 10L30 12L32 4Z" fill="#E2BE70"/>
    <path d="M28 18C28 18 30 14 32 14C34 14 36 18 36 18" stroke="#E2BE70" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const BoltIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
  </svg>
);

// ============ NAVBAR ============
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#accesorios', label: 'Accesorios' },
    { href: '#como-funciona', label: '¿Cómo funciona?' },
    { href: '#proyecto', label: 'Nuestro proyecto' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-ink-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="relative">
              <BoltIcon className="w-7 h-7 text-ink-gold transition-transform group-hover:scale-110" />
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              INKA<span className="text-ink-gold">FENIX</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ink-cream/80 hover:text-ink-gold transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-ink-cream hover:text-ink-gold transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-ink-dark/98 backdrop-blur-lg border-t border-ink-gold/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 text-ink-cream/80 hover:text-ink-gold hover:bg-white/5 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// ============ HERO SECTION ============
const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://image.qwenlm.ai/generated-images/63d7b061-8ee5-4cfa-897c-a07730c2a9a8/_result.png" 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-ink-dark/60"></div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-ink-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ink-medium/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ink-gold/5 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(226,190,112,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(226,190,112,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
        {/* Logo / Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-ink-gold/20 border border-ink-gold/30 mb-6 animate-pulse-glow">
            <BoltIcon className="w-10 h-10 text-ink-gold" />
          </div>
        </div>

        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight animate-slide-up">
          INKA<span className="text-ink-gold">FENIX</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-ink-gold font-heading font-medium mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          "Tu conexión, cuando la necesitas."
        </p>

        <p className="text-base sm:text-lg text-ink-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          ¿Necesitas un cargador, adaptador o extensión eléctrica durante tu jornada escolar? 
          INKAFENIX busca ofrecerte una solución práctica mediante un sistema organizado de préstamo de accesorios tecnológicos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#como-funciona"
            className="px-8 py-4 bg-ink-gold text-ink-dark font-semibold rounded-xl hover:bg-ink-gold/90 transition-all hover:scale-105 shadow-lg shadow-ink-gold/20 text-base"
          >
            Conoce cómo funciona
          </a>
          <a
            href="#accesorios"
            className="px-8 py-4 border-2 border-ink-cream/30 text-ink-cream font-semibold rounded-xl hover:border-ink-gold hover:text-ink-gold transition-all hover:scale-105 text-base"
          >
            Explora los accesorios
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-ink-gold">3+</div>
            <div className="text-xs sm:text-sm text-ink-cream/60">Tipos de accesorios</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-ink-gold">4</div>
            <div className="text-xs sm:text-sm text-ink-cream/60">Pasos simples</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-ink-gold">100%</div>
            <div className="text-xs sm:text-sm text-ink-cream/60">Organizado</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ink-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// ============ ACCESORIOS SECTION ============
const AccesoriosSection = () => {
  const accesorios = [
    {
      icon: '🔌',
      nombre: 'Cargadores',
      descripcion: 'Cargadores para dispositivos móviles y laptops. Disponibles en diferentes tipos de conector.',
      tipo: 'Cargador',
      compatibilidad: 'USB-C, Micro USB, Lightning',
      condicion: 'Buen estado',
    },
    {
      icon: '🔋',
      nombre: 'Adaptadores',
      descripcion: 'Adaptadores de corriente compatibles con diversos dispositivos electrónicos.',
      tipo: 'Adaptador',
      compatibilidad: 'Universal',
      condicion: 'Buen estado',
    },
    {
      icon: '⚡',
      nombre: 'Extensiones eléctricas',
      descripcion: 'Extensiones y regletas para conectar múltiples dispositivos cuando se necesitan puntos de energía adicionales.',
      tipo: 'Extensión',
      compatibilidad: 'Estándar',
      condicion: 'Buen estado',
    },
  ];

  return (
    <section id="accesorios" className="py-20 md:py-28 bg-ink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-gold/10 text-ink-gold text-sm font-semibold rounded-full mb-4">
            Catálogo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            Accesorios disponibles
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto text-lg">
            Conoce los accesorios que forman parte de nuestro servicio de préstamo temporal.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {accesorios.map((acc, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-ink-dark/5 hover:border-ink-gold/30 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{acc.icon}</div>
              <h3 className="font-heading text-xl font-bold text-ink-dark mb-2">{acc.nombre}</h3>
              <p className="text-ink-dark/60 text-sm mb-4 leading-relaxed">{acc.descripcion}</p>
              
              <div className="space-y-2 pt-4 border-t border-ink-dark/5">
                <div className="flex justify-between text-sm">
                  <span className="text-ink-dark/50">Tipo:</span>
                  <span className="text-ink-dark font-medium">{acc.tipo}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-dark/50">Compatibilidad:</span>
                  <span className="text-ink-dark font-medium">{acc.compatibilidad}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-dark/50">Condición:</span>
                  <span className="text-ink-medium font-medium">{acc.condicion}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-ink-dark/5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-gold bg-ink-gold/10 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 bg-ink-gold rounded-full"></span>
                  Catálogo referencial
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-ink-dark/50 italic">
            * La disponibilidad real dependerá del inventario confirmado del proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============ COMO FUNCIONA SECTION ============
const ComoFuncionaSection = () => {
  const pasos = [
    {
      numero: '01',
      titulo: 'Consulta',
      descripcion: 'El estudiante revisa qué accesorios se encuentran disponibles en el catálogo.',
      icon: '🔍',
    },
    {
      numero: '02',
      titulo: 'Solicitud',
      descripcion: 'El estudiante solicita el accesorio que necesita, siguiendo el procedimiento establecido por el equipo.',
      icon: '📋',
    },
    {
      numero: '03',
      titulo: 'Préstamo',
      descripcion: 'El accesorio se entrega temporalmente al estudiante, de acuerdo con las condiciones del servicio.',
      icon: '🤝',
    },
    {
      numero: '04',
      titulo: 'Devolución',
      descripcion: 'El estudiante devuelve el accesorio en el tiempo acordado y el equipo verifica su estado.',
      icon: '✅',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-medium/10 text-ink-medium text-sm font-semibold rounded-full mb-4">
            Proceso
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto text-lg">
            Un proceso sencillo en cuatro pasos para acceder a los accesorios que necesitas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-ink-gold/40 to-ink-gold/10"></div>
              )}
              
              <div className="relative bg-ink-light rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-ink-dark/5 hover:border-ink-gold/20">
                {/* Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-ink-gold text-ink-dark font-bold rounded-full flex items-center justify-center text-sm shadow-lg">
                  {paso.numero}
                </div>
                
                <div className="text-3xl mb-4">{paso.icon}</div>
                <h3 className="font-heading text-lg font-bold text-ink-dark mb-2">{paso.titulo}</h3>
                <p className="text-ink-dark/60 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 bg-ink-cream/50 rounded-xl p-6 border border-ink-gold/20 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <span className="text-ink-gold text-xl mt-0.5">ℹ️</span>
            <div>
              <p className="text-ink-dark/80 text-sm leading-relaxed">
                Los procedimientos específicos como horario, lugar de entrega y duración del préstamo 
                serán comunicados por el equipo de INKAFENIX una vez definidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ PROPUESTA DE VALOR ============
const PropuestaSection = () => {
  const beneficios = [
    { icon: '💡', texto: 'Solución práctica para necesidades tecnológicas ocasionales' },
    { icon: '📦', texto: 'Acceso organizado a accesorios' },
    { icon: '🤝', texto: 'Promoción del préstamo responsable' },
    { icon: '💰', texto: 'Reducción de la necesidad de comprar accesorios para usos puntuales' },
    { icon: '📚', texto: 'Apoyo a las actividades académicas' },
    { icon: '🌱', texto: 'Fomento de la colaboración entre estudiantes' },
  ];

  const pilares = [
    { titulo: 'Accesibilidad', desc: 'Facilitar el acceso temporal a accesorios tecnológicos.', icon: '🌐' },
    { titulo: 'Organización', desc: 'Establecer un proceso claro para solicitar, utilizar y devolver los accesorios.', icon: '📋' },
    { titulo: 'Responsabilidad', desc: 'Promover el cuidado de los materiales y el cumplimiento de las condiciones.', icon: '🛡️' },
  ];

  return (
    <section className="py-20 md:py-28 bg-ink-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-ink-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-ink-medium/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-gold/20 text-ink-gold text-sm font-semibold rounded-full mb-4">
            Propuesta de valor
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Por qué <span className="text-ink-gold">INKAFENIX</span>?
          </h2>
          <p className="text-ink-cream/70 max-w-3xl mx-auto text-lg leading-relaxed">
            Ofrecemos a los estudiantes una forma organizada, práctica y responsable de acceder temporalmente 
            a cargadores, adaptadores y extensiones eléctricas cuando los necesitan, promoviendo el uso 
            compartido de recursos tecnológicos.
          </p>
        </div>

        {/* Pilares */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pilares.map((pilar, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-ink-gold/30 transition-all">
              <div className="text-3xl mb-3">{pilar.icon}</div>
              <h3 className="font-heading text-lg font-bold text-ink-gold mb-2">{pilar.titulo}</h3>
              <p className="text-ink-cream/60 text-sm leading-relaxed">{pilar.desc}</p>
            </div>
          ))}
        </div>

        {/* Beneficios */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="font-heading text-xl font-bold text-white mb-6 text-center">Beneficios esperados</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((b, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                <span className="text-xl">{b.icon}</span>
                <span className="text-ink-cream/80 text-sm leading-relaxed">{b.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ NUESTRO PROYECTO ============
const ProyectoSection = () => {
  const objetivos = [
    'Identificar una necesidad de la comunidad educativa',
    'Diseñar una solución práctica',
    'Desarrollar un prototipo del servicio',
    'Evaluar la aceptación de la propuesta',
    'Organizar un sistema de préstamo',
    'Promover el uso responsable de accesorios tecnológicos',
  ];

  const etapas = [
    { num: 1, titulo: 'Preparación', desc: 'Organización del equipo y distribución de responsabilidades.' },
    { num: 2, titulo: 'Empatizar', desc: 'Comprender las necesidades de los estudiantes mediante entrevistas.' },
    { num: 3, titulo: 'Definir', desc: 'Identificar el problema principal y formular el punto de vista.' },
    { num: 4, titulo: 'Idear', desc: 'Proponer ideas creativas para solucionar el problema.' },
    { num: 5, titulo: 'Prototipar', desc: 'Desarrollar una primera versión del servicio.' },
    { num: 6, titulo: 'Evaluar', desc: 'Probar la propuesta y recoger opiniones para mejorar.' },
  ];

  return (
    <section id="proyecto" className="py-20 md:py-28 bg-ink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-dark/5 text-ink-dark text-sm font-semibold rounded-full mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            Nuestro proyecto
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ink-dark/5">
            <p className="text-ink-dark/70 leading-relaxed mb-4">
              INKAFENIX es un proyecto TEMP desarrollado por estudiantes con el propósito de solucionar 
              una necesidad presente en nuestra comunidad educativa.
            </p>
            <p className="text-ink-dark/70 leading-relaxed mb-4">
              La iniciativa surge a partir de la falta de cargadores, adaptadores y extensiones eléctricas 
              que algunos estudiantes necesitan durante sus actividades escolares.
            </p>
            <p className="text-ink-dark/70 leading-relaxed mb-4">
              Frente a esta situación, proponemos un sistema organizado de préstamo temporal de accesorios tecnológicos.
            </p>
            <p className="text-ink-dark/70 leading-relaxed">
              A través de INKAFENIX, queremos demostrar que una necesidad cotidiana puede convertirse en una 
              oportunidad para desarrollar una solución útil para nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Objetivos */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-bold text-ink-dark text-center mb-8">Objetivos del proyecto</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {objetivos.map((obj, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-ink-dark/5">
                <span className="flex-shrink-0 w-6 h-6 bg-ink-gold/20 text-ink-gold rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-ink-dark/70 text-sm">{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Design Thinking Process */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-ink-dark text-center mb-8">Metodología Design Thinking</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {etapas.map((etapa) => (
              <div key={etapa.num} className="bg-white rounded-xl p-5 border border-ink-dark/5 hover:border-ink-medium/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-ink-medium/10 text-ink-medium rounded-lg flex items-center justify-center text-sm font-bold">
                    {etapa.num}
                  </span>
                  <h4 className="font-heading font-bold text-ink-dark">{etapa.titulo}</h4>
                </div>
                <p className="text-ink-dark/60 text-sm pl-11">{etapa.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovación */}
        <div className="mt-16 bg-gradient-to-r from-ink-dark to-ink-medium rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-ink-gold mb-3">💡 Innovación</h3>
          <p className="text-ink-cream/80 max-w-2xl mx-auto text-sm leading-relaxed">
            La innovación de INKAFENIX se encuentra en la organización de un servicio de préstamo de accesorios 
            tecnológicos dentro de la institución educativa. No buscamos inventar un nuevo cargador, sino desarrollar 
            una forma práctica de compartir recursos que pueden ser útiles para varios estudiantes.
          </p>
        </div>
      </div>
    </section>
  );
};

// ============ NECESIDADES SECTION ============
const NecesidadesSection = () => {
  const necesidades = [
    { icon: '🔋', texto: 'Necesidad de energía para dispositivos electrónicos' },
    { icon: '🔌', texto: 'Necesidad de conectores compatibles' },
    { icon: '⏱️', texto: 'Necesidad de acceso temporal a accesorios' },
    { icon: '📋', texto: 'Necesidad de un sistema organizado de préstamo' },
    { icon: 'ℹ️', texto: 'Necesidad de información clara sobre disponibilidad y devolución' },
  ];

  const alternativas = [
    'Pedir prestado un cargador a un compañero',
    'Llevar un cargador propio',
    'Comprar un nuevo accesorio',
    'Buscar un adaptador disponible en la institución',
    'Utilizar una extensión personal',
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Necesidades */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-ink-dark mb-6">
              ¿Qué necesidades atendemos?
            </h3>
            <div className="space-y-3">
              {necesidades.map((n, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-ink-light border border-ink-dark/5">
                  <span className="text-xl">{n.icon}</span>
                  <span className="text-ink-dark/70 text-sm">{n.texto}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternativas actuales */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-ink-dark mb-6">
              Alternativas actuales
            </h3>
            <div className="space-y-3 mb-6">
              {alternativas.map((alt, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-ink-cream/30 border border-ink-dark/5">
                  <span className="w-2 h-2 bg-ink-dark/20 rounded-full flex-shrink-0"></span>
                  <span className="text-ink-dark/70 text-sm">{alt}</span>
                </div>
              ))}
            </div>
            <div className="bg-ink-gold/10 rounded-xl p-4 border border-ink-gold/20">
              <p className="text-ink-dark/80 text-sm leading-relaxed">
                <strong className="text-ink-dark">INKAFENIX</strong> busca ofrecer una alternativa organizada frente 
                a la necesidad ocasional de cargadores, adaptadores y extensiones eléctricas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ IMPACTO SECTION ============
const ImpactoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-ink-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-ink-medium/10 text-ink-medium text-sm font-semibold rounded-full mb-4">
            Impacto
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-dark mb-4">
            Impacto esperado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Social */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ink-dark/5">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="font-heading text-xl font-bold text-ink-dark mb-4">Impacto social</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Facilitar el acceso a accesorios tecnológicos
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Promover la colaboración entre estudiantes
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Fomentar la responsabilidad
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Apoyar las actividades escolares
              </li>
            </ul>
          </div>

          {/* Ambiental */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ink-dark/5">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="font-heading text-xl font-bold text-ink-dark mb-4">Impacto ambiental</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Reducir compras innecesarias para necesidades ocasionales
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Fomentar el cuidado y aprovechamiento de materiales
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Promover el uso compartido de recursos
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-dark/70">
                <span className="text-ink-medium mt-0.5">✓</span>
                Contribuir a la sostenibilidad
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-ink-dark/40 mt-8 italic">
          * Estos impactos se presentan como objetivos y beneficios potenciales del proyecto.
        </p>
      </div>
    </section>
  );
};

// ============ EQUIPO SECTION ============
const EquipoSection = () => {
  const integrantes = [
    { nombre: 'Davis Cacsire', rol: 'Miembro del equipo', initials: 'DC' },
    { nombre: 'Paolo', rol: 'Miembro del equipo', initials: 'P' },
    { nombre: 'Dayron', rol: 'Miembro del equipo', initials: 'D' },
    { nombre: 'Pablito', rol: 'Miembro del equipo', initials: 'PL' },
  ];

  return (
    <section id="equipo" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-gold/10 text-ink-gold text-sm font-semibold rounded-full mb-4">
            Equipo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            Nuestro equipo
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto text-lg">
            Los estudiantes detrás de INKAFENIX, trabajando juntos para solucionar una necesidad real.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {integrantes.map((persona, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-ink-dark to-ink-medium flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-2xl font-bold text-ink-gold font-heading">{persona.initials}</span>
              </div>
              <h3 className="font-heading font-bold text-ink-dark text-lg">{persona.nombre}</h3>
              <p className="text-ink-dark/50 text-sm">{persona.rol}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-ink-cream/50 rounded-full px-6 py-3 border border-ink-gold/20">
            <span className="text-sm text-ink-dark/60">📌 Los cargos y funciones específicas serán confirmados por el equipo.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ EVOLUCION SECTION ============
const EvolucionSection = () => {
  const etapas = [
    { titulo: 'Presentación de la idea', desc: 'Identificación del problema y organización del equipo.' },
    { titulo: 'Diseño del sistema', desc: 'Diseño del sistema de préstamo y elaboración del prototipo.' },
    { titulo: 'Pruebas', desc: 'Pruebas con estudiantes y recopilación de opiniones.' },
    { titulo: 'Mejoras', desc: 'Mejoras del servicio a partir de la evaluación.' },
    { titulo: 'Implementación', desc: 'Implementación del servicio si es aprobado y cuenta con recursos.' },
    { titulo: 'Evaluación final', desc: 'Evaluación de resultados y posibles mejoras futuras.' },
  ];

  return (
    <section className="py-20 md:py-28 bg-ink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-dark/5 text-ink-dark text-sm font-semibold rounded-full mb-4">
            Ruta de desarrollo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-dark mb-4">
            Evolución del proyecto
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto">
            INKAFENIX se desarrollará progresivamente a través de las siguientes etapas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-ink-gold/30"></div>
            
            {etapas.map((etapa, index) => (
              <div key={index} className="relative flex items-start gap-6 pb-8 last:pb-0">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-ink-gold flex items-center justify-center shadow-sm">
                  <span className="text-ink-gold font-bold text-sm">{index + 1}</span>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm border border-ink-dark/5 flex-1">
                  <h4 className="font-heading font-bold text-ink-dark mb-1">{etapa.titulo}</h4>
                  <p className="text-ink-dark/60 text-sm">{etapa.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ FAQ SECTION ============
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pregunta: '¿Qué es INKAFENIX?',
      respuesta: 'INKAFENIX es un proyecto TEMP que propone un sistema organizado de préstamo temporal de cargadores, adaptadores y extensiones eléctricas para estudiantes.',
    },
    {
      pregunta: '¿Qué accesorios se consideran dentro del proyecto?',
      respuesta: 'Se consideran cargadores, adaptadores y extensiones eléctricas, de acuerdo con el inventario que se encuentre disponible.',
    },
    {
      pregunta: '¿Quién puede utilizar el servicio?',
      respuesta: 'El servicio está dirigido principalmente a los estudiantes de la institución educativa, sujeto a las condiciones que establezca el equipo.',
    },
    {
      pregunta: '¿Cómo puedo solicitar un accesorio?',
      respuesta: 'El estudiante deberá seguir el procedimiento de solicitud definido por el equipo de INKAFENIX.',
    },
    {
      pregunta: '¿Cuánto tiempo puedo utilizar el accesorio?',
      respuesta: 'El tiempo de préstamo será determinado por el equipo y deberá comunicarse claramente en la página web.',
    },
    {
      pregunta: '¿Qué debo hacer al terminar de utilizar el accesorio?',
      respuesta: 'El accesorio deberá devolverse siguiendo las condiciones de préstamo establecidas.',
    },
    {
      pregunta: '¿Todos los accesorios estarán disponibles?',
      respuesta: 'La disponibilidad dependerá del inventario real del proyecto.',
    },
    {
      pregunta: '¿INKAFENIX es un servicio gratuito?',
      respuesta: 'Esta condición será confirmada por el equipo antes de publicar la respuesta definitiva.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-medium/10 text-ink-medium text-sm font-semibold rounded-full mb-4">
            Dudas
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto text-lg">
            Resolvemos las dudas más comunes sobre INKAFENIX.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-ink-dark/10 rounded-xl overflow-hidden transition-all hover:border-ink-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-ink-cream/20 transition-colors"
              >
                <span className="font-medium text-ink-dark pr-4">{faq.pregunta}</span>
                <svg
                  className={`w-5 h-5 text-ink-gold flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="text-ink-dark/60 text-sm leading-relaxed">{faq.respuesta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACTO SECTION ============
const ContactoSection = () => {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-ink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-ink-gold/10 text-ink-gold text-sm font-semibold rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink-dark mb-4">
            Contáctanos
          </h2>
          <p className="text-ink-dark/70 max-w-2xl mx-auto text-lg">
            ¿Tienes preguntas sobre INKAFENIX? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-ink-dark/5">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-ink-gold/10 mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-dark">Información de contacto</h3>
                <p className="text-ink-dark/50 text-sm mt-1">El medio de contacto será publicado cuando esté confirmado.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-ink-cream/30 rounded-xl p-4 text-center border border-ink-dark/5">
                  <span className="text-xl mb-2 block">🏫</span>
                  <p className="text-xs text-ink-dark/50">Institución</p>
                  <p className="text-sm font-medium text-ink-dark">Por confirmar</p>
                </div>
                <div className="bg-ink-cream/30 rounded-xl p-4 text-center border border-ink-dark/5">
                  <span className="text-xl mb-2 block">🕐</span>
                  <p className="text-xs text-ink-dark/50">Horario de atención</p>
                  <p className="text-sm font-medium text-ink-dark">Por definir</p>
                </div>
                <div className="bg-ink-cream/30 rounded-xl p-4 text-center border border-ink-dark/5">
                  <span className="text-xl mb-2 block">📍</span>
                  <p className="text-xs text-ink-dark/50">Lugar de entrega</p>
                  <p className="text-sm font-medium text-ink-dark">Por definir</p>
                </div>
                <div className="bg-ink-cream/30 rounded-xl p-4 text-center border border-ink-dark/5">
                  <span className="text-xl mb-2 block">📧</span>
                  <p className="text-xs text-ink-dark/50">Medio de contacto</p>
                  <p className="text-sm font-medium text-ink-dark">Por confirmar</p>
                </div>
              </div>

              <div className="bg-ink-gold/10 rounded-xl p-4 border border-ink-gold/20 text-center">
                <p className="text-sm text-ink-dark/70">
                  La información de contacto definitiva será publicada una vez confirmada por el equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => {
  return (
    <footer className="bg-ink-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <BoltIcon className="w-6 h-6 text-ink-gold" />
            <span className="font-heading font-bold text-lg text-white">
              INKA<span className="text-ink-gold">FENIX</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-ink-cream/50 text-sm text-center">
            "Tu conexión, cuando la necesitas."
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a href="#inicio" className="text-ink-cream/50 hover:text-ink-gold text-sm transition-colors">Inicio</a>
            <a href="#accesorios" className="text-ink-cream/50 hover:text-ink-gold text-sm transition-colors">Accesorios</a>
            <a href="#proyecto" className="text-ink-cream/50 hover:text-ink-gold text-sm transition-colors">Proyecto</a>
          </div>
        </div>

        <div className="section-divider my-8"></div>

        <div className="text-center">
          <p className="text-ink-cream/30 text-xs">
            © 2025 INKAFENIX — Proyecto TEMP estudiantil. Todos los derechos reservados.
          </p>
          <p className="text-ink-cream/20 text-xs mt-2">
            Comparte, conecta y utiliza responsablemente.
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============ MAIN APP ============
export default function App() {
  return (
    <div className="min-h-screen bg-ink-light">
      <Navbar />
      <HeroSection />
      <AccesoriosSection />
      <ComoFuncionaSection />
      <PropuestaSection />
      <ProyectoSection />
      <NecesidadesSection />
      <ImpactoSection />
      <EquipoSection />
      <EvolucionSection />
      <FAQSection />
      <ContactoSection />
      <Footer />
    </div>
  );
}
