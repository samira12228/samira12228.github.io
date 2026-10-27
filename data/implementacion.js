window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        En esta fase debes convertir el diseño en un laboratorio funcional. No se trata de instalar
        herramientas sin orden, sino de seguir un plan, registrar evidencias y comprobar que cada
        medida cumple su requisito. Todo el trabajo se realizará en una red aislada y autorizada.
    </p>
</div>

<h3>6.1. Plan de implementación por fases</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
            <th class="border border-slate-200 p-3 text-left">Evidencias mínimas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">1. Preparación</td>
            <td class="border border-slate-200 p-3">Crear el laboratorio aislado y el repositorio documental.</td>
            <td class="border border-slate-200 p-3">Esquema de máquinas virtuales, credenciales de laboratorio y tablero de tareas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">2. Red</td>
            <td class="border border-slate-200 p-3">Configurar VLANs, direccionamiento, DHCP, DNS y firewall.</td>
            <td class="border border-slate-200 p-3">Capturas de configuración y pruebas de conectividad.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">3. Sistemas</td>
            <td class="border border-slate-200 p-3">Instalar y endurecer Windows Server, Ubuntu y puestos cliente.</td>
            <td class="border border-slate-200 p-3">Checklist de hardening y resultados del escaneo.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">4. Identidades</td>
            <td class="border border-slate-200 p-3">Crear usuarios, grupos, permisos y MFA en los servicios de prueba.</td>
            <td class="border border-slate-200 p-3">Matriz de permisos y pruebas de acceso permitido y denegado.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">5. Copias</td>
            <td class="border border-slate-200 p-3">Configurar la estrategia 3-2-1 y ejecutar una restauración real.</td>
            <td class="border border-slate-200 p-3">Registro de copias, tiempos y capturas de la restauración.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">6. Detección</td>
            <td class="border border-slate-200 p-3">Configurar monitorización y registro de eventos.</td>
            <td class="border border-slate-200 p-3">Panel de alertas y ejemplo de aviso recibido.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">7. Respuesta</td>
            <td class="border border-slate-200 p-3">Simular un incidente de phishing o ransomware y aplicar el protocolo.</td>
            <td class="border border-slate-200 p-3">Ficha de incidente, cronología y lecciones aprendidas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">8. Cierre</td>
            <td class="border border-slate-200 p-3">Consolidar documentación, presupuesto y presentación final.</td>
            <td class="border border-slate-200 p-3">Memoria, manual de operación y defensa oral.</td>
        </tr>
    </tbody>
</table>

<h3>6.2. Preparación del laboratorio</h3>

<p>
    El laboratorio debe reproducir de forma simplificada la separación de zonas de la cooperativa.
    Una configuración habitual incluye un hipervisor con varias máquinas virtuales, un firewall con
    al menos tres interfaces y una red de pruebas aislada de Internet.
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🖥️ Máquinas mínimas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>pfSense u OPNsense con tres interfaces.</li>
            <li>Windows Server con roles de archivos y usuarios.</li>
            <li>Ubuntu Server para DNS, monitorización o copias.</li>
            <li>Dos clientes Windows 10/11 y un cliente Ubuntu.</li>
            <li>Servidor de copias y almacenamiento de pruebas.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🔒 Reglas del laboratorio</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Red aislada y sin acceso a sistemas reales.</li>
            <li>Datos ficticios o sintéticos.</li>
            <li>Herramientas ofensivas solo con autorización.</li>
            <li>Registro de cambios y copias de la configuración.</li>
            <li>Nada de contraseñas reales en la documentación.</li>
        </ul>
    </div>
</div>

<h3>6.3. Hardening de sistemas</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Sistema</th>
            <th class="border border-slate-200 p-3 text-left">Medidas mínimas</th>
            <th class="border border-slate-200 p-3 text-left">Cómo comprobarlo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Windows Server</td>
            <td class="border border-slate-200 p-3">Actualizaciones, contraseñas robustas, auditoría, SMB firmado, cuentas de servicio controladas y permisos mínimos.</td>
            <td class="border border-slate-200 p-3">Revisión de directivas, eventos de auditoría y prueba de acceso con una cuenta sin privilegios.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Windows 10/11</td>
            <td class="border border-slate-200 p-3">BitLocker, Defender activo, firewall local, cuenta estándar, bloqueo de pantalla y actualizaciones automáticas.</td>
            <td class="border border-slate-200 p-3">Captura de configuración y prueba de intento de instalación con cuenta estándar.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Ubuntu Server</td>
            <td class="border border-slate-200 p-3">SSH con clave, root sin acceso remoto, firewall UFW, actualizaciones de seguridad y servicios mínimos.</td>
            <td class="border border-slate-200 p-3">Prueba de acceso SSH y revisión de puertos abiertos con ss o nmap.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Dispositivos de nave</td>
            <td class="border border-slate-200 p-3">Cambio de credenciales por defecto, firmware actualizado, VLAN aislada y puertos mínimos.</td>
            <td class="border border-slate-200 p-3">Inventario, captura de versión y prueba de aislamiento desde la VLAN de oficinas.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>No rompas la producción</span>
    </div>
    <p>
        En una empresa real, algunas medidas deben probarse fuera del horario de actividad y con un
        plan de reversión. En el laboratorio, documenta igualmente el orden de aplicación y qué harías
        si una configuración dejara sin servicio a la nave.
    </p>
</div>

<h3>6.4. Configuración de red y firewall</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Crear las VLANs y asignar puertos troncales y de acceso en los switches.</li>
    <li>Configurar el direccionamiento, las puertas de enlace y el DHCP por zona.</li>
    <li>Definir las reglas del firewall en el orden acordado y con descripción.</li>
    <li>Configurar la Wi-Fi de invitados en una VLAN aislada.</li>
    <li>Comprobar la conectividad permitida y la denegada desde cada zona.</li>
    <li>Exportar la configuración y guardarla en el repositorio del equipo.</li>
</ol>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🧪</span>
        <span>Pruebas mínimas de red</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Un equipo de invitados no alcanza el ERP ni la administración del firewall.</li>
        <li>Un puesto de oficina accede al ERP y a Internet, pero no a la VLAN de gestión.</li>
        <li>Un lector de la nave solo alcanza el puerto necesario del ERP.</li>
        <li>El equipo de administración accede a la VLAN de gestión con MFA.</li>
        <li>Todo el tráfico no definido se deniega y queda registrado.</li>
    </ul>
</div>

<h3>6.5. Copias de seguridad y restauración</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Paso</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">1</td>
            <td class="border border-slate-200 p-3">Definir qué se copia: ERP, archivos, configuraciones y datos de trazabilidad.</td>
            <td class="border border-slate-200 p-3">Listado de conjuntos y frecuencia.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">2</td>
            <td class="border border-slate-200 p-3">Configurar copias automáticas y alertas de fallo.</td>
            <td class="border border-slate-200 p-3">Captura de la programación y del panel de estado.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">3</td>
            <td class="border border-slate-200 p-3">Cifrar las copias y separar las credenciales.</td>
            <td class="border border-slate-200 p-3">Configuración de cifrado y gestor de secretos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">4</td>
            <td class="border border-slate-200 p-3">Restaurar en un equipo limpio y medir el tiempo.</td>
            <td class="border border-slate-200 p-3">Informe con hora de inicio, fin y comprobaciones.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">5</td>
            <td class="border border-slate-200 p-3">Documentar incidencias y ajustar el plan.</td>
            <td class="border border-slate-200 p-3">Lecciones aprendidas y nueva versión del procedimiento.</td>
        </tr>
    </tbody>
</table>

<h3>6.6. Plan de pruebas</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Prueba</th>
            <th class="border border-slate-200 p-3 text-left">Resultado esperado</th>
            <th class="border border-slate-200 p-3 text-left">Resultado obtenido</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">P-01</td>
            <td class="border border-slate-200 p-3">Aislamiento de invitados.</td>
            <td class="border border-slate-200 p-3">Sin acceso a VLAN internas.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-02</td>
            <td class="border border-slate-200 p-3">Acceso autorizado al ERP desde oficinas.</td>
            <td class="border border-slate-200 p-3">Acceso correcto y registro de auditoría.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">P-03</td>
            <td class="border border-slate-200 p-3">Acceso denegado a la VLAN de gestión desde oficinas.</td>
            <td class="border border-slate-200 p-3">Conexión bloqueada y registrada.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-04</td>
            <td class="border border-slate-200 p-3">Restauración del ERP.</td>
            <td class="border border-slate-200 p-3">Datos íntegros y tiempo inferior al RTO.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">P-05</td>
            <td class="border border-slate-200 p-3">Phishing simulado.</td>
            <td class="border border-slate-200 p-3">Nadie introduce credenciales y se notifica.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-06</td>
            <td class="border border-slate-200 p-3">Dispositivo de nave comprometido.</td>
            <td class="border border-slate-200 p-3">Se aísla en cuarentena sin afectar al ERP.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>6.7. Documentación y evidencias</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Guarda capturas fechadas de cada configuración relevante.</li>
    <li>Incluye el comando o la ruta de la interfaz utilizada, sin contraseñas reales.</li>
    <li>Versiona los archivos de configuración y las tablas de direccionamiento.</li>
    <li>Registra las incidencias y cómo se resolvieron.</li>
    <li>Mantén una lista de comprobación actualizada con el estado de cada requisito.</li>
    <li>Prepara un manual breve para que otra persona pueda repetir la instalación.</li>
</ul>

<h3>6.8. Tareas para completar esta sección</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Construid el laboratorio y documentad la configuración de cada máquina.</li>
    <li>Implementad al menos tres VLANs y el firewall con política de denegación por defecto.</li>
    <li>Aplicad el hardening a un servidor Windows, un servidor Ubuntu y un cliente.</li>
    <li>Configurad usuarios, grupos y permisos; probad un acceso permitido y otro denegado.</li>
    <li>Ejecutad una copia y una restauración completa con tiempos registrados.</li>
    <li>Simulad un incidente y completad la ficha de respuesta.</li>
    <li>Reunid las evidencias en la carpeta de entrega y revisadlas con otro equipo.</li>
</ol>
`;
