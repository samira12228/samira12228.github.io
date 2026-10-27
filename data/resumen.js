window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen ejecutivo del proyecto</span>
    </div>
    <p>
        <strong>Cooperativa Agroecológica La Vega</strong> es una cooperativa de Torrent (Valencia)
        dedicada a la producción, envasado y distribución de hortalizas ecológicas. Da trabajo a
        <strong>38 personas</strong> y distribuye cada semana a mercados locales, tiendas especializadas
        y dos cadenas de supermercados. Su actividad depende de una red que conecta oficinas, naves,
        cámaras frigoríficas, básculas, lectores de códigos y el ERP de facturación.
    </p>
    <p>
        Un correo fraudulento que suplantaba a un proveedor estuvo a punto de provocar una
        transferencia de 18.400 €. Días después, un equipo de la nave mostró un mensaje de rescate y
        la cooperativa descubrió que las copias de seguridad nunca se habían restaurado. La dirección
        ha encargado al alumnado de <strong>segundo curso de SMR</strong> un plan de ciberseguridad
        realista, documentado y adaptado a una empresa agroalimentaria.
    </p>
</div>

<h3>🎯 Ficha rápida del proyecto</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🏢 Contexto</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Cooperativa agroecológica con 38 personas trabajadoras.</li>
            <li>Oficinas, nave de envasado, cámara frigorífica y muelle de carga.</li>
            <li>ERP, 22 puestos de oficina, 10 lectores portátiles y sensores de temperatura.</li>
            <li>Datos de clientes, proveedores, nóminas, pedidos y trazabilidad alimentaria.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🧩 Datos académicos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li><strong>Ciclo:</strong> Sistemas Microinformáticos y Redes (SMR).</li>
            <li><strong>Nivel:</strong> Grado Medio.</li>
            <li><strong>Curso:</strong> Segundo.</li>
            <li><strong>Duración orientativa:</strong> 96 horas de trabajo intermodular.</li>
            <li><strong>Metodología:</strong> aprendizaje basado en proyectos, trabajo cooperativo y evaluación formativa.</li>
        </ul>
    </div>
</div>

<h3>🔥 El problema que debes resolver</h3>

<p>
    La cooperativa ha crecido sin un plan tecnológico. La red es plana: la Wi-Fi de visitantes, las
    oficinas, la nave y los sensores de frío comparten el mismo rango de direcciones. Las contraseñas
    se comparten por mensajería, el servidor ejecuta una versión antigua de Windows Server y las
    copias se guardan en un disco conectado al mismo servidor. Además, una auditoría comercial exige
    demostrar medidas de seguridad antes de firmar un contrato de distribución.
</p>

<div class="callout callout-error">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Consecuencias de no actuar</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Parada de la facturación y de la trazabilidad durante varios días.</li>
        <li>Pérdida de pedidos, albaranes y datos de clientes.</li>
        <li>Pérdida de la cadena de frío si los sensores quedan fuera de control.</li>
        <li>Multas y reclamaciones por incumplimiento del RGPD.</li>
        <li>Pérdida de contratos con distribuidores que exigen garantías de seguridad.</li>
    </ul>
</div>

<h3>🛡️ La propuesta de solución</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">1. Auditoría e inventario</h4>
        <p class="text-sm text-slate-600">Identificar activos, cuentas, servicios, datos y dependencias de la cooperativa.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">2. Análisis de riesgos</h4>
        <p class="text-sm text-slate-600">Priorizar amenazas según probabilidad, impacto y coste de mitigación.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">3. Red segmentada</h4>
        <p class="text-sm text-slate-600">Separar oficinas, nave, sensores, invitados y administración con VLANs y firewall.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">4. Equipos endurecidos</h4>
        <p class="text-sm text-slate-600">Actualizar, reducir privilegios y aplicar configuraciones seguras en servidores y puestos.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">5. Identidades y accesos</h4>
        <p class="text-sm text-slate-600">Contraseñas robustas, MFA, permisos por grupos y revisión de altas y bajas.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">6. Copias y continuidad</h4>
        <p class="text-sm text-slate-600">Estrategia 3-2-1, copias inmutables y restauración probada con tiempos medidos.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">7. Detección y respuesta</h4>
        <p class="text-sm text-slate-600">Protocolo para phishing, ransomware, pérdida de equipos y fallo de sensores.</p>
    </div>
    <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-2">8. Personas y cultura</h4>
        <p class="text-sm text-slate-600">Formación breve, carteles y simulacro ético adaptado a la nave y a las oficinas.</p>
    </div>
</div>

<h3>🧭 Metodología de trabajo</h3>

<p>
    El proyecto se desarrolla con <strong>aprendizaje basado en proyectos</strong> y equipos de tres
    o cuatro personas. Los roles serán rotativos: coordinación, análisis de red, sistemas y
    dispositivos, seguridad y datos, documentación y comunicación. El aula se organizará como un
    pequeño centro de soporte: reunión breve al inicio de cada sesión, tablero de tareas visible,
    entregas parciales y revisión por pares.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Producto principal</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia de aprendizaje</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">1. Comprender</td>
            <td class="border border-slate-200 p-3">Informe de auditoría inicial.</td>
            <td class="border border-slate-200 p-3">Inventario, mapa de red y entrevista al cliente simulado.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">2. Decidir</td>
            <td class="border border-slate-200 p-3">Matriz de riesgos y plan priorizado.</td>
            <td class="border border-slate-200 p-3">Justificación técnica, económica y legal.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">3. Construir</td>
            <td class="border border-slate-200 p-3">Laboratorio con VLANs, firewall, servidores y copias.</td>
            <td class="border border-slate-200 p-3">Configuraciones, capturas y pruebas reproducibles.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">4. Proteger</td>
            <td class="border border-slate-200 p-3">Plan de respuesta, formación y manual de operación.</td>
            <td class="border border-slate-200 p-3">Simulación de incidente y sesión de concienciación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">5. Comunicar</td>
            <td class="border border-slate-200 p-3">Memoria final, panel de indicadores y defensa oral.</td>
            <td class="border border-slate-200 p-3">Presentación de 10 minutos y preguntas del tribunal.</td>
        </tr>
    </tbody>
</table>

<h3>📦 Entregables previstos</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>D1. Informe de auditoría:</strong> inventario, mapa de red y análisis de dependencias.</li>
    <li><strong>D2. Matriz de riesgos:</strong> amenazas, impacto, prioridad y medidas propuestas.</li>
    <li><strong>D3. Diseño de red segura:</strong> VLANs, direccionamiento, Wi-Fi y reglas de firewall.</li>
    <li><strong>D4. Guía de hardening:</strong> Windows Server, Windows 10/11, Ubuntu y dispositivos de nave.</li>
    <li><strong>D5. Plan de identidades:</strong> política de contraseñas, MFA, altas, bajas y revisión trimestral.</li>
    <li><strong>D6. Plan de copias y continuidad:</strong> estrategia 3-2-1, calendario y restauración medida.</li>
    <li><strong>D7. Protocolo de incidentes:</strong> roles, comunicación, evidencias y plazos.</li>
    <li><strong>D8. Campaña de concienciación:</strong> píldora formativa, cartel y simulacro de phishing ético.</li>
    <li><strong>D9. Memoria y defensa:</strong> decisiones, resultados, límites y líneas de mejora.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Importante: el proyecto se completa en el aula</span>
    </div>
    <p>
        Este documento es una guía de trabajo. No contiene todas las respuestas: tu equipo debe
        investigar, probar, justificar y documentar sus decisiones. Trabaja siempre en un laboratorio
        autorizado, con datos ficticios o anonimizados y sin atacar sistemas reales.
    </p>
</div>
`;
