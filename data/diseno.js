window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        El diseño traduce los requisitos en una arquitectura concreta. Debes justificar las zonas de
        red, los servicios, las reglas de firewall y la estrategia de copias. No basta con dibujar un
        esquema: cada elemento debe responder a un riesgo y a un requisito.
    </p>
</div>

<h3>5.1. Arquitectura lógica de red</h3>

<p>
    La propuesta parte de una red plana y la transforma en una arquitectura segmentada. La idea es
    que un incidente en la nave o en la Wi-Fi de visitantes no pueda alcanzar el ERP, los servidores
    de facturación o la administración del sistema. El laboratorio debe reproducir esta separación
    con VLANs y un firewall central.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">VLAN</th>
            <th class="border border-slate-200 p-3 text-left">Nombre</th>
            <th class="border border-slate-200 p-3 text-left">Uso previsto</th>
            <th class="border border-slate-200 p-3 text-left">Acceso permitido</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">10</td>
            <td class="border border-slate-200 p-3">Gestión</td>
            <td class="border border-slate-200 p-3">Administración de switches, firewall, hipervisores y almacenamiento.</td>
            <td class="border border-slate-200 p-3">Solo desde un equipo de administración autorizado.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">20</td>
            <td class="border border-slate-200 p-3">Servidores</td>
            <td class="border border-slate-200 p-3">ERP, base de datos, servidor de archivos y copias.</td>
            <td class="border border-slate-200 p-3">Oficinas y administración, solo puertos necesarios.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">30</td>
            <td class="border border-slate-200 p-3">Oficinas</td>
            <td class="border border-slate-200 p-3">22 puestos de administración, dirección, calidad y logística.</td>
            <td class="border border-slate-200 p-3">ERP, archivos, Internet y correo.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">40</td>
            <td class="border border-slate-200 p-3">Nave y OT</td>
            <td class="border border-slate-200 p-3">Lectores de códigos, básculas, impresoras de etiquetas y sensores de frío.</td>
            <td class="border border-slate-200 p-3">Solo los servicios concretos que necesita cada dispositivo.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">50</td>
            <td class="border border-slate-200 p-3">Invitados</td>
            <td class="border border-slate-200 p-3">Wi-Fi para visitantes, transportistas y proveedores.</td>
            <td class="border border-slate-200 p-3">Solo Internet; sin acceso a la red interna.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">60</td>
            <td class="border border-slate-200 p-3">Administración TI</td>
            <td class="border border-slate-200 p-3">Equipo de soporte y herramientas de monitorización.</td>
            <td class="border border-slate-200 p-3">Acceso a VLAN 10 y 20 mediante reglas específicas y MFA.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">99</td>
            <td class="border border-slate-200 p-3">Cuarentena</td>
            <td class="border border-slate-200 p-3">Dispositivos nuevos o sospechosos hasta su revisión.</td>
            <td class="border border-slate-200 p-3">Sin acceso interno; solo actualizaciones controladas.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🗺️</span>
        <span>Qué debe incluir el diagrama</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Router del proveedor, firewall, switch principal y switches de nave.</li>
        <li>Servidores, almacenamiento, puestos de oficina y dispositivos de la nave.</li>
        <li>Puntos de acceso Wi-Fi separados para personal e invitados.</li>
        <li>Enlaces troncales, etiquetado de VLANs y direccionamiento de cada zona.</li>
        <li>Flujos permitidos y flujos denegados con una leyenda clara.</li>
    </ul>
</div>

<h3>5.2. Pila tecnológica propuesta</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Función</th>
            <th class="border border-slate-200 p-3 text-left">Opción propuesta</th>
            <th class="border border-slate-200 p-3 text-left">Alternativa</th>
            <th class="border border-slate-200 p-3 text-left">Criterio de elección</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Firewall</td>
            <td class="border border-slate-200 p-3">pfSense CE</td>
            <td class="border border-slate-200 p-3">OPNsense</td>
            <td class="border border-slate-200 p-3">Software libre, documentación abundante y bajo coste.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Virtualización</td>
            <td class="border border-slate-200 p-3">Proxmox VE</td>
            <td class="border border-slate-200 p-3">VMware ESXi, Hyper-V</td>
            <td class="border border-slate-200 p-3">Gestión web, copias integradas y licencia libre.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Servidor ERP</td>
            <td class="border border-slate-200 p-3">Windows Server 2022</td>
            <td class="border border-slate-200 p-3">Windows Server 2019</td>
            <td class="border border-slate-200 p-3">Compatibilidad con la aplicación de gestión y soporte extendido.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Servicios auxiliares</td>
            <td class="border border-slate-200 p-3">Ubuntu Server 24.04 LTS</td>
            <td class="border border-slate-200 p-3">Debian 12</td>
            <td class="border border-slate-200 p-3">DNS, DHCP, monitorización y copias con soporte a largo plazo.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copias</td>
            <td class="border border-slate-200 p-3">Proxmox Backup Server o Veeam Community</td>
            <td class="border border-slate-200 p-3">UrBackup, restic</td>
            <td class="border border-slate-200 p-3">Versionado, cifrado y restauración verificable.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Monitorización</td>
            <td class="border border-slate-200 p-3">Zabbix o Uptime Kuma</td>
            <td class="border border-slate-200 p-3">Wazuh, Nagios</td>
            <td class="border border-slate-200 p-3">Alertas de disponibilidad, disco, temperatura y servicios.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Gestión de contraseñas</td>
            <td class="border border-slate-200 p-3">KeePassXC o Bitwarden</td>
            <td class="border border-slate-200 p-3">1Password</td>
            <td class="border border-slate-200 p-3">Bóveda cifrada, grupos y registro de accesos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Análisis de vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone</td>
            <td class="border border-slate-200 p-3">Nessus Essentials</td>
            <td class="border border-slate-200 p-3">Escaneo en laboratorio y priorización de hallazgos.</td>
        </tr>
    </tbody>
</table>

<h3>5.3. Arquitectura de seguridad por capas</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🧱 Perímetro</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Firewall con política de denegación por defecto.</li>
            <li>VPN para el técnico externo y teletrabajo autorizado.</li>
            <li>Publicación mínima de servicios y registro de conexiones.</li>
            <li>Wi-Fi de invitados aislada y con contraseña rotatoria.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🖥️ Servidores y puestos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Actualizaciones automatizadas y control de versiones.</li>
            <li>Antivirus centralizado y firewall local activo.</li>
            <li>Cuentas de usuario sin privilegios de administrador.</li>
            <li>Bloqueo de pantalla y cifrado de portátiles.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">🔐 Identidades</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Contraseñas únicas y gestor corporativo.</li>
            <li>MFA en correo, ERP y administración.</li>
            <li>Permisos por grupos y revisión trimestral.</li>
            <li>Procedimiento de altas, bajas y cambios.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">📦 Datos y continuidad</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Copias 3-2-1 con una copia inmutable fuera de línea.</li>
            <li>Restauración probada cada mes.</li>
            <li>Clasificación básica de datos y retención.</li>
            <li>Plan de continuidad para pedidos y trazabilidad.</li>
        </ul>
    </div>
</div>

<h3>5.4. Direccionamiento y reglas de firewall</h3>

<p>
    Define un direccionamiento coherente y documenta cada regla con un identificador, un origen, un
    destino, un puerto, una acción y una justificación. Evita reglas "any-any" y revisa el orden de
    evaluación. La tabla siguiente es una plantilla de trabajo:
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Origen</th>
            <th class="border border-slate-200 p-3 text-left">Destino</th>
            <th class="border border-slate-200 p-3 text-left">Puerto / servicio</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
            <th class="border border-slate-200 p-3 text-left">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">F-01</td>
            <td class="border border-slate-200 p-3">VLAN 30 Oficinas</td>
            <td class="border border-slate-200 p-3">VLAN 20 ERP</td>
            <td class="border border-slate-200 p-3">443/TCP</td>
            <td class="border border-slate-200 p-3">Permitir</td>
            <td class="border border-slate-200 p-3">Acceso web al ERP.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">F-02</td>
            <td class="border border-slate-200 p-3">VLAN 40 Nave</td>
            <td class="border border-slate-200 p-3">VLAN 20 ERP</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Permitir</td>
            <td class="border border-slate-200 p-3">Solo el servicio necesario para lectores y básculas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">F-03</td>
            <td class="border border-slate-200 p-3">VLAN 50 Invitados</td>
            <td class="border border-slate-200 p-3">Cualquier red interna</td>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3">Denegar</td>
            <td class="border border-slate-200 p-3">Aislamiento total de visitantes.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">F-04</td>
            <td class="border border-slate-200 p-3">VLAN 60 Administración</td>
            <td class="border border-slate-200 p-3">VLAN 10 Gestión</td>
            <td class="border border-slate-200 p-3">443/TCP, 22/TCP</td>
            <td class="border border-slate-200 p-3">Permitir</td>
            <td class="border border-slate-200 p-3">Administración desde equipo autorizado con MFA.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">F-05</td>
            <td class="border border-slate-200 p-3">Cualquier VLAN</td>
            <td class="border border-slate-200 p-3">Internet</td>
            <td class="border border-slate-200 p-3">80/TCP, 443/TCP</td>
            <td class="border border-slate-200 p-3">Permitir</td>
            <td class="border border-slate-200 p-3">Navegación web con filtrado y registro.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">F-06</td>
            <td class="border border-slate-200 p-3">Red local</td>
            <td class="border border-slate-200 p-3">Cualquier destino no definido</td>
            <td class="border border-slate-200 p-3">Cualquiera</td>
            <td class="border border-slate-200 p-3">Denegar y registrar</td>
            <td class="border border-slate-200 p-3">Política final de denegación por defecto.</td>
        </tr>
    </tbody>
</table>

<h3>5.5. Diseño de copias y continuidad</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Copia</th>
            <th class="border border-slate-200 p-3 text-left">Ubicación</th>
            <th class="border border-slate-200 p-3 text-left">Frecuencia</th>
            <th class="border border-slate-200 p-3 text-left">Retención</th>
            <th class="border border-slate-200 p-3 text-left">Observaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copia 1</td>
            <td class="border border-slate-200 p-3">Almacenamiento local en el servidor de copias.</td>
            <td class="border border-slate-200 p-3">Diaria incremental y semanal completa.</td>
            <td class="border border-slate-200 p-3">30 días.</td>
            <td class="border border-slate-200 p-3">Rápida de restaurar, pero no protege frente a un incendio.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Copia 2</td>
            <td class="border border-slate-200 p-3">NAS en otra sala de la cooperativa.</td>
            <td class="border border-slate-200 p-3">Diaria.</td>
            <td class="border border-slate-200 p-3">60 días.</td>
            <td class="border border-slate-200 p-3">Cifrada y con credenciales distintas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Copia 3</td>
            <td class="border border-slate-200 p-3">Disco externo cifrado fuera de la cooperativa.</td>
            <td class="border border-slate-200 p-3">Semanal.</td>
            <td class="border border-slate-200 p-3">12 semanas.</td>
            <td class="border border-slate-200 p-3">Rotación entre dos discos; uno permanece desconectado.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Regla de oro</span>
    </div>
    <p>
        La copia conectada al mismo servidor no cuenta como copia independiente. Si el ransomware
        cifra el servidor, también puede cifrar el disco de copias. La solución debe incluir una copia
        fuera de línea o inmutable y una prueba de restauración documentada.
    </p>
</div>

<h3>5.6. Tareas para completar esta sección</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Dibujad el diagrama de red con las siete VLANs y las leyendas de flujos permitidos y denegados.</li>
    <li>Definid el direccionamiento completo y comprobad que no hay solapamientos.</li>
    <li>Completad la tabla de reglas de firewall con al menos diez reglas justificadas.</li>
    <li>Describid el flujo de un pedido desde la nave hasta la facturación y qué zonas atraviesa.</li>
    <li>Diseñad la estrategia de copias y explicad cómo se prueba la restauración.</li>
    <li>Identificad los puntos únicos de fallo y proponed una medida para cada uno.</li>
</ol>
`;
