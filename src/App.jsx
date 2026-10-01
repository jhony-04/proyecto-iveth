import { useState } from 'react'
import './App.css'

function App() {
  const [pagina, setPagina] = useState(1)

  return (
    <main className="blueprint">
      <div className="plano">

        <header className="encabezado">
          <span>PROYECTO ESPECIAL</span>
          <span>01 · 10 · 2026</span>
        </header>

        <div className="numero-plano">
          PLANO A-0{pagina}
        </div>

        {/* =========================
            A-01 · PORTADA
        ========================== */}

        {pagina === 1 && (
          <section className="portada">

            <div className="casa">
              <div className="techo"></div>

              <div className="estructura">
                <div className="puerta"></div>
                <div className="ventana"></div>
              </div>

              <span className="cota cota-horizontal">
                ← IVETH →
              </span>
            </div>

            <p className="pretitle">
              PARA UNA ARQUITECTA MUY ESPECIAL
            </p>

            <h1>
              Feliz Día de la
              <span>Arquitecta</span>
            </h1>

            <p className="frase">
              Hay personas que diseñan espacios...
              <br />
              y otras que hacen más bonito cualquier lugar donde están.
            </p>

            <button onClick={() => setPagina(2)}>
              VER PROYECTO
              <span>→</span>
            </button>

            <small>
              Haz clic para consultar los detalles del proyecto
            </small>

          </section>
        )}

        {/* =========================
            A-02 · MEMORIA
        ========================== */}

        {pagina === 2 && (
          <section className="proyecto">

            <p className="pretitle">
              MEMORIA DESCRIPTIVA
            </p>

            <h2>PROYECTO: IVETH 🤍</h2>

            <div className="ficha">

              <div>
                <span>ARQUITECTA</span>
                <strong>Iveth</strong>
              </div>

              <div>
                <span>FECHA</span>
                <strong>01 / 10 / 2026</strong>
              </div>

              <div>
                <span>ESTADO</span>
                <strong>En constante construcción 🚧</strong>
              </div>

            </div>

            <div className="evaluacion">

              <p className="titulo-evaluacion">
                EVALUACIÓN DEL PROYECTO
              </p>

              <div className="criterio">
                <div className="criterio-info">
                  <span>CREATIVIDAD</span>
                  <strong>100%</strong>
                </div>

                <div className="barra">
                  <div className="progreso completo"></div>
                </div>
              </div>

              <div className="criterio">
                <div className="criterio-info">
                  <span>CARÁCTER</span>
                  <strong>100%</strong>
                </div>

                <div className="barra">
                  <div className="progreso completo"></div>
                </div>
              </div>

              <div className="criterio">
                <div className="criterio-info">
                  <span>PACIENCIA CON EL INGENIERO</span>
                  <strong>EN REVISIÓN 😂</strong>
                </div>

                <div className="barra">
                  <div className="progreso paciencia"></div>
                </div>
              </div>

              <div className="criterio">
                <div className="criterio-info">
                  <span>BONITA</span>
                  <strong>ERROR: FUERA DE ESCALA</strong>
                </div>

                <div className="barra fuera-escala">
                  <div className="progreso bonita"></div>
                </div>
              </div>

            </div>

            <div className="observacion">
              <span>OBSERVACIÓN DEL INGENIERO</span>

              <p>
                No sé mucho de arquitectura...
                <br />
                pero sí sé reconocer cuando algo está muy bien diseñado. 🤍
              </p>
            </div>

            <div className="acciones">
              <button
                className="volver"
                onClick={() => setPagina(1)}
              >
                ← VOLVER
              </button>

              <button onClick={() => setPagina(3)}>
                UNA ÚLTIMA OBSERVACIÓN
                <span>→</span>
              </button>
            </div>

          </section>
        )}

        {/* =========================
            A-03 · DICTAMEN
        ========================== */}

        {pagina === 3 && (
          <section className="dictamen">

            <p className="pretitle">
              DICTAMEN FINAL · A-03
            </p>

            <div className="sello">
              <span>✓</span>
              APROBADO
            </div>

            <h2>PROYECTO APROBADO</h2>

            <p className="dictamen-texto">
              Después de realizar la inspección correspondiente,
              revisar cada detalle y verificar el proyecto...
            </p>

            <div className="resultado-final">
              <span>OBSERVACIONES</span>

              <strong>
                No requiere modificaciones.
              </strong>

              <p>
                Así está perfecta. 🤍
              </p>
            </div>

            <div className="firma">
              <span>RESPONSABLE DE LA REVISIÓN</span>

              <div className="linea-firma"></div>

              <strong>Ing. Jhony Trejo H.</strong>

              <small>
              </small>
            </div>

            <button
              className="volver"
              onClick={() => setPagina(1)}
            >
              ← REVISAR PLANO
            </button>

          </section>
        )}

        <footer>
          <span>ESCALA: 1:IVETH</span>
          <span>Ing. Jhony Trejo H.</span>
        </footer>

      </div>
    </main>
  )
}

export default App