window.sectionsContent = window.sectionsContent || {};
window.sectionsContent['estado-arte'] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Antes de diseñar una solución conviene conocer qué herramientas, marcos y buenas prácticas
        existen. No se trata de copiar un producto comercial, sino de comparar alternativas y
        justificar cuáles encajan mejor en una cooperativa agroalimentaria de 38 personas.
    </p>
</div>

<h3>2.1. Soluciones de seguridad para pymes agroalimentarias</h3>

<p>
    La cooperativa no necesita la infraestructura de una gran corporación, pero sí debe cubrir los
    principios básicos: identificar, proteger, detectar, responder y recuperar. Estas son algunas
    familias de soluciones que puedes investigar y comparar:
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Familia</th>
            <th class="border border-slate-200 p-3 text-left">Ejemplos</th>
            <th class="border border-slate-200 p-3 text-left">Qué aporta</th>
            <th class="border border-slate-200 p-3 text-left">Coste orientativo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Firewall perimetral</td>
            <td class="border border-slate-200 p-3">pfSense, OPNsense, FortiGate, Sophos Firewall</td>
            <td class="border border-slate-200 p-3">Filtrado de tráfico, reglas por zona, VPN y registro de conexiones.</td>
            <td class="border border-slate-200 p-3">Desde 0 € (software libre) hasta varios cientos de euros al año.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Protección de endpoints</td>
            <td class="border border-slate-200 p-3">Microsoft Defender, ESET, Bitdefender, CrowdStrike Falcon Go</td>
            <td class="border border-slate-200 p-3">Detección de malware, ransomware y comportamiento sospechoso.</td>
            <td class="border border-slate-200 p-3">Defender incluido en Windows; soluciones comerciales desde 30 € por equipo y año.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Gestión de contraseñas</td>
            <td class="border border-slate-200 p-3">Bitwarden, KeePassXC, 1Password</td>
            <td class="border border-slate-200 p-3">Contraseñas únicas, cifradas y compartidas de forma controlada.</td>
            <td class="border border-slate-200 p-3">KeePassXC y Bitwarden tienen opciones gratuitas; planes de pago desde 3 € por persona/mes.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">Veeam Backup, UrBackup, Duplicati, restic, Proxmox Backup Server</td>
            <td class="border border-slate-200 p-3">Copias automáticas, versionado, cifrado, inmutabilidad y restauración.</td>
            <td class="border border-slate-200 p-3">Software libre disponible; el coste principal suele ser el almacenamiento externo.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Doble factor</td>
            <td class="border border-slate-200 p-3">Microsoft Authenticator, Google Authenticator, YubiKey</td>
            <td class="border border-slate-200 p-3">Protege las cuentas aunque la contraseña se filtre.</td>
            <td class="border border-slate-200 p-3">Aplicaciones gratuitas; llaves físicas desde 25 €.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Análisis de vulnerabilidades</td>
            <td class="border border-slate-200 p-3">OpenVAS/Greenbone, Nessus Essentials, Nmap</td>
            <td class="border border-slate-200 p-3">Detección de servicios expuestos, versiones antiguas y configuraciones débiles.</td>
            <td class="border border-slate-200 p-3">OpenVAS y Nmap son gratuitos; Nessus tiene una versión limitada gratuita.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Monitorización y alertas</td>
            <td class="border border-slate-200 p-3">Zabbix, Uptime Kuma, Wazuh, Nagios</td>
            <td class="border border-slate-200 p-3">Disponibilidad de servicios, cambios, logs y alertas tempranas.</td>
            <td class="border border-slate-200 p-3">Software libre; requiere tiempo de configuración y mantenimiento.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Seguridad de IoT y OT</td>
            <td class="border border-slate-200 p-3">VLAN aislada, firewall industrial, actualización de firmware, inventario de dispositivos</td>
            <td class="border border-slate-200 p-3">Evita que sensores y básculas sean una puerta de entrada a la red corporativa.</td>
            <td class="border border-slate-200 p-3">Principalmente coste de configuración y tiempo de inventario.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🔎</span>
        <span>Actividad de investigación</span>
    </div>
    <p>
        Elige dos herramientas de la tabla y compara: licencia, facilidad de uso, requisitos,
        soporte, coste y adecuación a una cooperativa con oficinas y nave. Añade una tercera
        herramienta que hayas encontrado por tu cuenta y justifica si la recomendarías o no.
    </p>
</div>

<h3>2.2. Marcos de referencia y normativa</h3>

<p>
    La seguridad no se inventa desde cero. Existen marcos y normas que ayudan a organizar las
    medidas y a demostrar que se ha actuado con diligencia. Para este proyecto son especialmente
    relevantes:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">📘 RGPD y LOPDGDD</h4>
        <p class="text-sm text-slate-600">
            La cooperativa trata datos de clientes, proveedores, personal y trazabilidad. Debe aplicar
            medidas técnicas y organizativas adecuadas, limitar el acceso, registrar actividades de
            tratamiento y notificar brechas cuando corresponda.
        </p>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🧩 Esquema Nacional de Seguridad (ENS)</h4>
        <p class="text-sm text-slate-600">
            Aunque la cooperativa sea privada, el ENS ofrece una estructura útil de categorías, medidas
            y controles que puede servir como referencia para priorizar.
        </p>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">🛡️ ISO/IEC 27001</h4>
        <p class="text-sm text-slate-600">
            Norma internacional para sistemas de gestión de la seguridad de la información. No hace
            falta certificarse, pero sus controles ayudan a ordenar la auditoría y la mejora continua.
        </p>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">🔐 CIS Benchmarks y NIST CSF</h4>
        <p class="text-sm text-slate-600">
            Los CIS Benchmarks ofrecen guías de configuración segura para sistemas operativos. El NIST
            Cybersecurity Framework 2.0 organiza las funciones de identificar, proteger, detectar,
            responder y recuperar.
        </p>
    </div>
</div>

<h3>2.3. Tendencias actuales en ciberseguridad para pymes</h3>

<ul class="list-disc pl-6 space-y-3 my-4">
    <li>
        <strong>Contraseñas fuera, passkeys y MFA dentro:</strong> cada vez más servicios permiten
        autenticación sin contraseña o con doble factor. En una pyme, empezar por el correo y el ERP
        es lo más rentable.
    </li>
    <li>
        <strong>Confianza cero (Zero Trust):</strong> no se confía automáticamente en nada dentro de
        la red. Cada acceso debe verificarse según identidad, dispositivo y contexto.
    </li>
    <li>
        <strong>Copias inmutables:</strong> ante el ransomware, las copias que no se pueden modificar
        durante un periodo de tiempo son una de las mejores defensas.
    </li>
    <li>
        <strong>Segmentación de IoT y OT:</strong> sensores, básculas y cámaras suelen tener firmware
        antiguo. Aislarlos de la red de oficinas reduce el riesgo sin sustituirlos.
    </li>
    <li>
        <strong>Seguridad como servicio para pymes:</strong> muchas pequeñas empresas externalizan la
        monitorización y la respuesta porque no pueden mantener un equipo propio 24/7.
    </li>
    <li>
        <strong>Concienciación continua:</strong> las campañas de phishing simulado y las píldoras
        formativas periódicas reducen de forma notable la probabilidad de caer en un engaño.
    </li>
    <li>
        <strong>Inteligencia artificial aplicada:</strong> detección de correos sospechosos,
        clasificación de incidentes y asistencia en la redacción de informes. Conviene usarla con
        supervisión humana y sin enviar datos personales a servicios no autorizados.
    </li>
</ul>

<h3>2.4. Comparativa de enfoques: ¿todo externalizado o todo interno?</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Gestión interna</th>
            <th class="border border-slate-200 p-3 text-left">Servicio externalizado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Control</td>
            <td class="border border-slate-200 p-3">Alto: la cooperativa decide y conoce su infraestructura.</td>
            <td class="border border-slate-200 p-3">Menor: depende del contrato y del proveedor.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Coste inicial</td>
            <td class="border border-slate-200 p-3">Puede ser bajo si se usa software libre y personal propio.</td>
            <td class="border border-slate-200 p-3">Suele requerir cuota mensual o anual.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Conocimiento</td>
            <td class="border border-slate-200 p-3">Exige formación y tiempo; riesgo de depender de una sola persona.</td>
            <td class="border border-slate-200 p-3">Aporta especialización y disponibilidad.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Respuesta</td>
            <td class="border border-slate-200 p-3">Puede ser rápida si hay protocolo y personas disponibles.</td>
            <td class="border border-slate-200 p-3">Depende de los tiempos de respuesta acordados (SLA).</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Adecuación a la nave</td>
            <td class="border border-slate-200 p-3">Alta si se implica al personal de envasado y logística.</td>
            <td class="border border-slate-200 p-3">Alta si el proveedor entiende entornos industriales y agroalimentarios.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Consejo para la defensa</span>
    </div>
    <p>
        No basta con decir "usaremos pfSense" o "instalaremos un antivirus". El tribunal valorará
        que expliques <strong>por qué</strong> esa solución es proporcionada al riesgo, al
        presupuesto y a la capacidad real de la cooperativa.
    </p>
</div>

<h3>2.5. Lo que debe completar tu equipo</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Añadir al menos tres soluciones actuales que no aparezcan en la tabla, con su fuente.</li>
    <li>Elaborar una comparativa propia con criterios ponderados (coste, facilidad, soporte, seguridad).</li>
    <li>Justificar qué marcos de referencia vais a utilizar y cuáles descartáis.</li>
    <li>Incluir una conclusión sobre el enfoque recomendado para La Vega.</li>
</ul>
`;
