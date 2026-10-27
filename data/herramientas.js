window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Las herramientas son medios, no fines. En esta sección debes justificar qué utilidades usarás
        para inventariar, analizar, proteger, monitorizar y documentar la solución. El tribunal
        valorará la proporcionalidad y el coste total, no la popularidad de cada producto.
    </p>
</div>

<h3>8.1. Mapa de herramientas por función</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Función</th>
            <th class="border border-slate-200 p-3 text-left">Herramienta propuesta</th>
            <th class="border border-slate-200 p-3 text-left">Uso en el proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Coste</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Inventario</td>
            <td class="border border-slate-200 p-3">Excel, LibreOffice Calc o una hoja compartida</td>
            <td class="border border-slate-200 p-3">Registrar equipos, cuentas, servicios, responsables y criticidad.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Diagramas</td>
            <td class="border border-slate-200 p-3">draw.io, Diagrams.net o LibreOffice Draw</td>
            <td class="border border-slate-200 p-3">Mapa de red, flujos y arquitectura por capas.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Análisis de red</td>
            <td class="border border-slate-200 p-3">Nmap, Wireshark, ping, traceroute</td>
            <td class="border border-slate-200 p-3">Descubrir hosts, puertos y comprobar conectividad.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone o Nessus Essentials</td>
            <td class="border border-slate-200 p-3">Escaneo del laboratorio y priorización de hallazgos.</td>
            <td class="border border-slate-200 p-3">0 € en versión comunitaria</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Firewall</td>
            <td class="border border-slate-200 p-3">pfSense CE u OPNsense</td>
            <td class="border border-slate-200 p-3">VLANs, reglas, VPN y registro de tráfico.</td>
            <td class="border border-slate-200 p-3">0 € de licencia</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Monitorización</td>
            <td class="border border-slate-200 p-3">Zabbix o Uptime Kuma</td>
            <td class="border border-slate-200 p-3">Disponibilidad, disco, servicios y alertas.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copias</td>
            <td class="border border-slate-200 p-3">Proxmox Backup Server, Veeam Community o restic</td>
            <td class="border border-slate-200 p-3">Copias programadas, cifrado y restauración.</td>
            <td class="border border-slate-200 p-3">0 € en las opciones elegidas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Contraseñas</td>
            <td class="border border-slate-200 p-3">KeePassXC o Bitwarden</td>
            <td class="border border-slate-200 p-3">Bóveda cifrada, grupos y contraseñas únicas.</td>
            <td class="border border-slate-200 p-3">0 € en versión básica</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Documentación</td>
            <td class="border border-slate-200 p-3">Markdown, PDF, repositorio Git o carpeta compartida</td>
            <td class="border border-slate-200 p-3">Memoria, manuales, cambios y evidencias.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Gestión de tareas</td>
            <td class="border border-slate-200 p-3">Trello, GitHub Projects o tablero en papel</td>
            <td class="border border-slate-200 p-3">Planificación, responsables y seguimiento.</td>
            <td class="border border-slate-200 p-3">0 €</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Criterios para elegir herramientas</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Pregunta clave</th>
            <th class="border border-slate-200 p-3 text-left">Peso orientativo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Adecuación</td>
            <td class="border border-slate-200 p-3">¿Resuelve el problema real de la cooperativa?</td>
            <td class="border border-slate-200 p-3">30%</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Facilidad de uso</td>
            <td class="border border-slate-200 p-3">¿Puede mantenerla una persona con perfil SMR?</td>
            <td class="border border-slate-200 p-3">20%</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Coste total</td>
            <td class="border border-slate-200 p-3">¿Incluye licencias, hardware, formación y mantenimiento?</td>
            <td class="border border-slate-200 p-3">20%</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Soporte y comunidad</td>
            <td class="border border-slate-200 p-3">¿Hay documentación, foros y actualizaciones?</td>
            <td class="border border-slate-200 p-3">15%</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Seguridad</td>
            <td class="border border-slate-200 p-3">¿Tiene historial de vulnerabilidades y buenas prácticas?</td>
            <td class="border border-slate-200 p-3">15%</td>
        </tr>
    </tbody>
</table>

<h3>8.3. Comparativa de alternativas</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Ámbito</th>
            <th class="border border-slate-200 p-3 text-left">Opción A</th>
            <th class="border border-slate-200 p-3 text-left">Opción B</th>
            <th class="border border-slate-200 p-3 text-left">Decisión del equipo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Firewall</td>
            <td class="border border-slate-200 p-3">pfSense CE</td>
            <td class="border border-slate-200 p-3">OPNsense</td>
            <td class="border border-slate-200 p-3">[COMPLETAR: elegida y motivo]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Copias</td>
            <td class="border border-slate-200 p-3">Proxmox Backup Server</td>
            <td class="border border-slate-200 p-3">Veeam Community</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Monitorización</td>
            <td class="border border-slate-200 p-3">Zabbix</td>
            <td class="border border-slate-200 p-3">Uptime Kuma</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Contraseñas</td>
            <td class="border border-slate-200 p-3">KeePassXC</td>
            <td class="border border-slate-200 p-3">Bitwarden</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone</td>
            <td class="border border-slate-200 p-3">Nessus Essentials</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>8.4. Uso responsable de la inteligencia artificial</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🤖</span>
        <span>La IA puede ayudar, pero no decide por ti</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Puedes usar IA para redactar borradores, resumir documentación o generar ideas de pruebas.</li>
        <li>No introduzcas datos personales, credenciales, configuraciones reales ni información confidencial.</li>
        <li>Verifica siempre las respuestas con documentación oficial.</li>
        <li>Deja constancia de las herramientas de IA utilizadas y de su finalidad.</li>
        <li>La responsabilidad de las decisiones técnicas y de la entrega es del equipo.</li>
    </ul>
</div>

<h3>8.5. Actividad: justifica tu pila tecnológica</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Elegid una herramienta para cada una de las seis funciones principales del proyecto.</li>
    <li>Rellenad la tabla de criterios con una puntuación del 1 al 5.</li>
    <li>Calculad la puntuación ponderada y comparad al menos dos alternativas por función.</li>
    <li>Incluid una conclusión con la herramienta seleccionada y el motivo.</li>
    <li>Indicad qué herramienta descartáis y por qué, aunque sea técnicamente buena.</li>
    <li>Añadid una estimación del coste de implantación y del mantenimiento anual.</li>
</ol>
`;
