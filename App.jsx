import './App.css'
// import Navbar from './components/Navbar' // Comentado para evitar la pantalla en blanco

export default function App() {
  return (
    <div>
      {/* 1. Menú de navegación superior */}
      {/* <Navbar /> */}

      {/* 2. Sección de Bienvenida (Hero con fondo completo unificado en Azul Tecnológico) */}
      <section id="inicio" style={{ 
        position: 'relative',
        width: '100%', 
        boxSizing: 'border-box',
        paddingTop: '100px', 
        paddingBottom: '80px', 
        minHeight: 'auto',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        {/* Capa oscura superpuesta en tonos tecnológicos */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(11, 19, 32, 0.85)',
          zIndex: 1
        }}></div>

        {/* Contenido real de la sección */}
        <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Avatar de Iniciales con Estilo Tech en lugar de imagen */}
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(0, 242, 254, 0.1)', 
            border: '3px solid #00f2fe', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#00f2fe', 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            letterSpacing: '1px', 
            marginBottom: '25px',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)' 
          }}>
            KB
          </div>

          {/* Título principal */}
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: 'bold', 
            color: '#fff', 
            margin: '0 0 15px 0',
            textTransform: 'uppercase',
            border: 'none' 
          }}>
            SOY KIKE BAQUERIZO
          </h1>

          {/* Línea divisoria elegante */}
          <div style={{
            width: '150px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00f2fe, transparent)',
            marginBottom: '25px'
          }}></div>

          {/* Subtítulo */}
          <p style={{ 
            fontSize: '1.2rem', 
            fontWeight: '500', 
            color: '#cddef5', 
            margin: '0 0 30px 0',
            letterSpacing: '0.5px'
          }}>
            Desarrollador de software en proceso de formación tecnológica y profesional
          </p>

          {/* Botón de ir a proyectos */}
          <a href="#proyectos" style={{
            color: '#fff',
            textDecoration: 'none', 
            fontSize: '1.2rem',
            fontWeight: '500',
            paddingBottom: '6px', 
            borderBottom: '3px solid #00f2fe', 
            transition: 'all 0.3s ease',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00f2fe';
            e.currentTarget.style.borderBottomColor = '#fff'; 
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderBottomColor = '#00f2fe';
          }}>
            Ver Proyectos
          </a>
        </div>
      </section>


     {/* 3. Sección Sobre Mí (Estilo Premium con Fondo Azul Noche) */}
      <section id="sobre-mi" style={{
        padding: '40px 50px', 
        backgroundColor: '#0f172a', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        minHeight: 'auto' 
      }}>
        
        {/* Título de la sección */}
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '5px',
          letterSpacing: '2px'
        }}>
          SOBRE MÍ
        </h2>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#00f2fe', 
          marginBottom: '50px',
          borderRadius: '2px'
        }}></div>
        
        {/* Contenedor principal de texto */}
        <div style={{ 
          maxWidth: '800px', 
          width: '100%',
          backgroundColor: 'rgba(30, 41, 59, 0.7)', 
          padding: '40px', 
          borderRadius: '20px', 
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ 
            fontSize: '1.15rem', 
            lineHeight: '1.8', 
            color: '#fff', 
            textAlign: 'justify',
            margin: 0 
          }}>
            <strong style={{ fontSize: '1.5rem', color: '#00f2fe' }}>Hola,</strong> soy <strong>Kike Baquerizo</strong>, estudiante de la carrera de desarrollo de software de la ESFOT en la EPN. Actualmente me dedico a mis estudios y estoy aprendiendo mucho sobre la creación de páginas web utilizando herramientas eficientes tales como <strong>REACT, Vite y Tailwind CSS</strong>. Me enfoco con entusiasmo en la creación de proyectos pequeños vinculados a Bases de Datos y POO. Disfruto aprender más y más cada vez hasta alcanzar un excelente nivel profesional.
          </p>
        </div>
      </section>


      {/* 4. Sección de Proyectos (Estructura Unificada en Azul Espacial) */}
      <section id="proyectos" style={{
        padding: '40px 50px',
        backgroundColor: '#0b1320', 
        boxShadow: 'inset 0 15px 15px -15px rgba(0, 0, 0, 0.6)', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        minHeight: 'auto'
      }}>
        
        {/* Título de la sección */}
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '5px',
          letterSpacing: '2px'
        }}>
          MIS PROYECTOS
        </h2>
        <div style={{
          width: '60px',
          height: '3px',
          backgroundColor: '#00f2fe',
          marginBottom: '50px',
          borderRadius: '2px'
        }}></div>
        
        {/* Contenedor del Grid de 3 Columnas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '35px', 
          maxWidth: '1100px', 
          width: '100%' 
        }}>
          
          {/* TARJETA 1: CURSO REDES EPN */}
          <div style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '35px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌐</div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                CURSO REDES EPN
              </h3>
              <p style={{ color: '#cddef5', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>
                Plataforma con recursos y temarios interactivos sobre redes de computadoras para estudiantes.
              </p>
              <button style={{
                backgroundColor: '#00f2fe',
                color: '#0b1320',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                marginTop: 'auto'
              }}>VER DEMO</button>
            </div>
          </div>

          {/* TARJETA 2: SISTEMA BANCARIO POO */}
          <div style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '35px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏦</div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                SISTEMA BANCARIO
              </h3>
              <p style={{ color: '#cddef5', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>
                Aplicación comercial desarrollada bajo el paradigma POO para simular transacciones, depósitos y gestión de cuentas seguras.
              </p>
              <button style={{
                backgroundColor: '#00f2fe',
                color: '#0b1320',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '20px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                marginTop: 'auto'
              }}>VER DEMO</button>
            </div>
          </div>

          {/* TARJETA 3: PRÓXIMAMENTE */}
          <div style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: '20px', 
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            opacity: '0.85'
          }}>
            <div style={{ padding: '35px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚀</div>
              <h3 style={{ color: '#00f2fe', fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
                PRÓXIMAMENTE
              </h3>
              <p style={{ color: '#cddef5', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '25px' }}>
                Nuevas soluciones de software y proyectos académicos en camino. Actualmente diseñando arquitecturas modulares para resolver problemas reales.
              </p>
              <div style={{
                border: '1px dashed #00f2fe',
                color: '#00f2fe',
                padding: '8px 20px',
                borderRadius: '20px',
                fontWeight: '500',
                fontSize: '0.85rem',
                marginTop: 'auto'
              }}>
                En Construcción...
              </div>
            </div>
          </div>

        </div> 
      </section>


      {/* 5. Sección de Experiencia */}
      <section id="experiencia" style={{
        padding: '40px 50px', 
        backgroundColor: '#0f172a', 
        boxShadow: 'inset 0 15px 15px -15px rgba(0, 0, 0, 0.6)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        minHeight: 'auto' 
      }}>
        
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#fff', 
          marginBottom: '5px', 
          letterSpacing: '2px',
          textAlign: 'center'
        }}>
          MI EXPERIENCIA
        </h2>
        <div style={{ 
          width: '60px', 
          height: '3px', 
          backgroundColor: '#00f2fe', 
          marginBottom: '50px', 
          borderRadius: '2px' 
        }}></div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 450px))', 
          gap: '40px', 
          maxWidth: '1000px', 
          width: '100%',
          justifyContent: 'center'
        }}>
          
          {/* TARJETA 1 */}
          <div style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: '20px', 
            padding: '40px 30px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🖥️</div>
            <h3 style={{ color: '#00f2fe', fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
              DESARROLLO BACKEND & DB
            </h3>
            <p style={{ color: '#cddef5', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
              Diseño y arquitectura de aplicaciones robustas aplicando Programación Orientada a Objetos (POO). Especializado en la creación de lógica de negocio eficiente, estructuración de código limpio en Java y gestión avanzada de bases de datos relacionales y no relacionales para garantizar la integridad y seguridad de la información.
            </p>
          </div>

          {/* TARJETA 2 */}
          <div style={{ 
            backgroundColor: 'rgba(30, 41, 59, 0.5)', 
            borderRadius: '20px', 
            padding: '40px 30px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛠️</div>
            <h3 style={{ color: '#00f2fe', fontSize: '1.35rem', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '1px' }}>
              MANTENIMIENTO PREVENTIVO Y CORRECTIVO
            </h3>
            <p style={{ color: '#cddef5', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
              Soporte técnico integral para equipos de cómputo. Experiencia en el diagnóstico de fallas de hardware y software, repotenciación mediante actualización de componentes críticos (unidades SSD, memoria RAM), optimización de sistemas operativos y ensamblaje para asegurar el máximo rendimiento y vida útil del hardware.
            </p>
          </div>

        </div>
      </section>


      {/* 6. Sección de Contacto */}
      <section id="contacto" style={{
        padding: '80px 50px',
        backgroundColor: '#0b1320',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        color: '#fff'
      }}>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          flexWrap: 'wrap',
          gap: '40px'
        }}>
          
          {/* CONTACTO */}
          <div style={{ flex: '1', minWidth: '250px', textAlign: 'left' }}>
            <div style={{ display: 'block', width: '100%', maxWidth: '220px' }}>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px', textTransform: 'uppercase' }}>
                CONTACTO
              </h4>
              <div style={{ width: '100%', height: '2px', backgroundColor: '#00f2fe', marginBottom: '25px' }}></div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cddef5', fontSize: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>📞</span>
                <span>0994458848</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span>✉️</span>
                <a href="mailto:hanzosashi95du@gmail.com" style={{ color: '#cddef5', textDecoration: 'none' }}>
                  kike.baquerizo0209@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CUADRO DE INICIALES DE CONTACTO */}
          <div style={{ flex: '1.2', minWidth: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '20px' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(0, 242, 254, 0.08)', 
                border: '3px solid #00f2fe', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: '#00f2fe', 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.25)' 
              }}>
                KB
              </div>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#fff', margin: '0 0 8px 0', letterSpacing: '1px' }}>
              KIKE BAQUERIZO
            </h3>
            <p style={{ color: '#00f2fe', fontSize: '0.9rem', fontWeight: '600', letterSpacing: '1.5px', margin: 0, textTransform: 'uppercase' }}>
              DESARROLLADOR DE SOFTWARE
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: '255px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div style={{ display: 'block', width: '100%', textAlign: 'right' }}>
                <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '5px', textTransform: 'uppercase' }}>
                  REDES SOCIALES
                </h4>
                <div style={{ width: '100%', height: '2px', backgroundColor: '#00f2fe', marginBottom: '25px' }}></div>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                {[
                  { label: 'FB', url: '#facebook' },
                  { label: 'IG', url: '#instagram' },
                  { label: 'GH', url: '#github' },
                  { label: 'YT', url: '#youtube' },
                  { label: 'TT', url: '#tiktok' }
                ].map((red, index) => (
                  <a 
                    key={index}
                    href={red.url}
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#cddef5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00f2fe';
                      e.currentTarget.style.color = '#00f2fe';
                      e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#cddef5';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                    }}
                  >
                    {red.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer Final */}
      <footer style={{
        backgroundColor: '#0b1320', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '25px 20px',
        textAlign: 'center',
        boxSizing: 'border-box'
      }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.4)', margin: 0, fontSize: '0.85rem' }}>
          © 2026 Kike Baquerizo. Escuela Politécnica Nacional. Todos los derechos reservados.
        </p>
      </footer>

  </div>
  );
}