window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Las conclusiones no son un resumen del trabajo. Deben demostrar que sabes valorar los
        resultados, reconocer las limitaciones y proponer mejoras con criterio profesional.
    </p>
</div>

<h3>9.1. Valoración de los objetivos</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
            <th class="border border-slate-200 p-3 text-left">Grado de cumplimiento</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
            <th class="border border-slate-200 p-3 text-left">Observaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Auditoría e inventario</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Enlace al inventario y al mapa de red]</td>
            <td class="border border-slate-200 p-3">[Qué falta o qué se ha dejado fuera]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Segmentación y firewall</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Pruebas de conectividad y reglas]</td>
            <td class="border border-slate-200 p-3">[Incidencias y ajustes]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Hardening de equipos</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Checklist y capturas]</td>
            <td class="border border-slate-200 p-3">[Sistemas que no se han podido probar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Identidades y accesos</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Matriz de permisos y pruebas MFA]</td>
            <td class="border border-slate-200 p-3">[Cuentas pendientes de revisión]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Copias y restauración</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Informe de restauración con tiempos]</td>
            <td class="border border-slate-200 p-3">[Datos recuperados y dificultades]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Respuesta a incidentes</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Ficha y simulación]</td>
            <td class="border border-slate-200 p-3">[Lecciones aprendidas]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Formación del personal</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[Material y encuesta]</td>
            <td class="border border-slate-200 p-3">[Participación y resultados]</td>
        </tr>
    </tbody>
</table>

<h3>9.2. Resultados esperados e impacto</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">📉 Reducción del riesgo</h4>
        <p class="text-sm text-slate-600">
            La segmentación, el hardening y la gestión de identidades reducen la probabilidad de un
            incidente grave y limitan su alcance si ocurre.
        </p>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">⏱️ Mejora de la recuperación</h4>
        <p class="text-sm text-slate-600">
            La estrategia de copias y el protocolo de actuación permiten reducir el tiempo de parada
            y evitar decisiones improvisadas.
        </p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">⚖️ Mejora del cumplimiento</h4>
        <p class="text-sm text-slate-600">
            La cooperativa puede demostrar que aplica medidas técnicas y organizativas razonables para
            proteger datos personales y registros de trazabilidad.
        </p>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">🧠 Cultura de seguridad</h4>
        <p class="text-sm text-slate-600">
            El personal deja de ser un punto débil aislado y participa activamente en la detección y
            comunicación de incidentes.
        </p>
    </div>
</div>

<h3>9.3. Dificultades y lecciones aprendidas</h3>

<h4>Dificultades técnicas</h4>
<ul class="list-disc pl-6 space-y-3 my-4">
    <li><strong>Reproducir la nave real:</strong> el laboratorio no siempre tiene el mismo hardware ni las mismas limitaciones.</li>
    <li><strong>Configurar VLANs y firewall:</strong> un error en el etiquetado o en el orden de las reglas puede dejar sin servicio a toda una zona.</li>
    <li><strong>Probar la denegación:</strong> es más difícil demostrar que algo está bloqueado que comprobar que algo funciona.</li>
    <li><strong>Restaurar copias:</strong> los tiempos reales suelen ser mayores de lo previsto y aparecen dependencias ocultas.</li>
    <li><strong>Aislar dispositivos IoT:</strong> algunos sensores y lectores no admiten configuraciones modernas de seguridad.</li>
    <li><strong>Documentar mientras se trabaja:</strong> dejar la documentación para el final suele provocar pérdida de evidencias.</li>
</ul>

<h4>Dificultades de organización</h4>
<ul class="list-disc pl-6 space-y-3 my-4">
    <li>Coordinar tareas de red, sistemas, nave y documentación en el mismo equipo.</li>
    <li>Gestionar el tiempo cuando varias pruebas dependen unas de otras.</li>
    <li>Mantener un lenguaje comprensible para la dirección de la cooperativa.</li>
    <li>Evitar que una sola persona concentre todo el conocimiento técnico.</li>
    <li>Compaginar la seguridad con la operativa diaria de la nave.</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Lecciones clave</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>La seguridad es un proceso continuo, no un producto que se instala una vez.</li>
        <li>Lo más barato suele ser formar a las personas y ordenar los accesos.</li>
        <li>Una copia que no se restaura es una promesa, no una garantía.</li>
        <li>La documentación es parte de la solución, no un trámite final.</li>
        <li>La mejor medida es la que la cooperativa puede mantener en el tiempo.</li>
        <li>La nave y las oficinas tienen ritmos distintos: la seguridad debe adaptarse a ambos.</li>
    </ul>
</div>

<h3>9.4. Líneas futuras de mejora</h3>

<h4>Corto plazo</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Completar la formación de todo el personal y repetir la encuesta de concienciación.</li>
    <li>Automatizar la revisión de copias y las alertas de fallo.</li>
    <li>Revisar y simplificar las reglas del firewall con evidencias de uso.</li>
    <li>Actualizar el inventario de dispositivos de nave y firmware.</li>
</ul>

<h4>Medio plazo</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Centralizar los registros de servidores, firewall y dispositivos de nave en un panel único.</li>
    <li>Implantar monitorización de disponibilidad y alertas proactivas.</li>
    <li>Revisar la continuidad del negocio con un simulacro anual.</li>
    <li>Evaluar un servicio externo de respuesta ante incidentes.</li>
</ul>

<h4>Largo plazo</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Avanzar hacia un modelo de confianza cero adaptado a la cooperativa.</li>
    <li>Integrar la seguridad en el ciclo de vida de las aplicaciones y proveedores.</li>
    <li>Obtener una certificación o un sello de buenas prácticas adaptado a pymes.</li>
    <li>Compartir buenas prácticas con otras cooperativas del entorno local.</li>
</ul>

<h3>9.5. Rúbrica de evaluación del proyecto</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Insuficiente (0-4)</th>
            <th class="border border-slate-200 p-3 text-left">Suficiente (5-6)</th>
            <th class="border border-slate-200 p-3 text-left">Notable (7-8)</th>
            <th class="border border-slate-200 p-3 text-left">Excelente (9-10)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Auditoría e inventario</td>
            <td class="border border-slate-200 p-3">Incompleto o sin evidencias.</td>
            <td class="border border-slate-200 p-3">Cubre lo básico con algunas lagunas.</td>
            <td class="border border-slate-200 p-3">Completo, ordenado y con evidencias claras.</td>
            <td class="border border-slate-200 p-3">Exhaustivo, priorizado y conectado con los riesgos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Diseño técnico</td>
            <td class="border border-slate-200 p-3">No justifica decisiones o hay errores graves.</td>
            <td class="border border-slate-200 p-3">Diseño válido pero poco justificado.</td>
            <td class="border border-slate-200 p-3">Coherente, documentado y proporcionado.</td>
            <td class="border border-slate-200 p-3">Excelente equilibrio entre seguridad, coste y mantenimiento.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Implementación</td>
            <td class="border border-slate-200 p-3">No funciona o no se ha probado.</td>
            <td class="border border-slate-200 p-3">Funciona parcialmente.</td>
            <td class="border border-slate-200 p-3">Funciona y está documentada.</td>
            <td class="border border-slate-200 p-3">Funciona, está probada y es reproducible por otra persona.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Seguridad y ética</td>
            <td class="border border-slate-200 p-3">Pruebas sin autorización o datos reales.</td>
            <td class="border border-slate-200 p-3">Cumple lo básico con alguna debilidad.</td>
            <td class="border border-slate-200 p-3">Trabaja en laboratorio y protege los datos.</td>
            <td class="border border-slate-200 p-3">Aplica criterios profesionales y documenta límites y riesgos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Documentación y comunicación</td>
            <td class="border border-slate-200 p-3">Confusa, incompleta o no comprensible.</td>
            <td class="border border-slate-200 p-3">Correcta pero mejorable.</td>
            <td class="border border-slate-200 p-3">Clara, ordenada y adaptada al público.</td>
            <td class="border border-slate-200 p-3">Profesional, visual y convincente en la defensa.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Trabajo en equipo</td>
            <td class="border border-slate-200 p-3">No hay reparto ni seguimiento.</td>
            <td class="border border-slate-200 p-3">Reparto irregular.</td>
            <td class="border border-slate-200 p-3">Roles claros y entregas coordinadas.</td>
            <td class="border border-slate-200 p-3">Colaboración eficaz, coevaluación y mejora continua.</td>
        </tr>
    </tbody>
</table>

<h3>9.6. Reflexión personal del alumnado</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Completa esta reflexión al final del proyecto</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>¿Qué ha sido lo más difícil y cómo lo has resuelto?</li>
        <li>¿Qué competencia técnica has desarrollado más?</li>
        <li>¿Qué harías diferente si volvieras a empezar?</li>
        <li>¿Cómo explicarías este proyecto a una persona no técnica?</li>
        <li>¿Qué medida recomendarías primero a una cooperativa real y por qué?</li>
        <li>¿Qué te ha enseñado el proyecto sobre ética y protección de datos?</li>
        <li>¿Cómo adaptarías las medidas de seguridad al personal de la nave?</li>
    </ul>
</div>

<h3>9.7. Conclusión final</h3>

<p>
    Cooperativa Agroecológica La Vega no necesita convertirse en una gran empresa tecnológica para
    estar protegida. Necesita medidas proporcionadas, documentadas y mantenibles. Este proyecto
    demuestra que un equipo de SMR puede aportar un valor real a una pyme local: ordenar la red,
    proteger los accesos, preparar la recuperación y formar a las personas.
</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✨</span>
        <span>Cierre del proyecto</span>
    </div>
    <p>
        El éxito no se mide solo por las herramientas instaladas, sino por la capacidad de la
        cooperativa para prevenir, detectar y recuperarse de un incidente. Si tu documentación permite
        que otra persona continúe el trabajo, habrás demostrado una competencia profesional clave.
    </p>
</div>
`;
