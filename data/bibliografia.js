window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.bibliografia = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span>
        <span>Bibliografía y referencias</span>
    </div>
    <p>
        Esta selección inicial debe ampliarse con las fuentes que consultes realmente. Incluye la
        fecha de consulta cuando la normativa o la documentación pueda cambiar.
    </p>
</div>

<h3>10.1. Documentación técnica oficial</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Netgate.</strong> <em>pfSense Documentation</em>. Disponible en:
        <a href="https://docs.netgate.com/pfsense/en/latest/" class="text-blue-600 underline" target="_blank">docs.netgate.com/pfsense/en/latest/</a>
        <p class="text-sm text-slate-600 mt-1">Guía oficial de instalación, VLANs, firewall, DHCP, VPN y diagnóstico.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>OPNsense.</strong> <em>OPNsense Documentation</em>. Disponible en:
        <a href="https://docs.opnsense.org/" class="text-blue-600 underline" target="_blank">docs.opnsense.org</a>
        <p class="text-sm text-slate-600 mt-1">Alternativa libre a pfSense, con documentación detallada de configuración y seguridad.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Microsoft.</strong> <em>Windows Server documentation</em>. Disponible en:
        <a href="https://learn.microsoft.com/es-es/windows-server/" class="text-blue-600 underline" target="_blank">learn.microsoft.com/es-es/windows-server/</a>
        <p class="text-sm text-slate-600 mt-1">Usuarios, grupos, permisos, auditoría, directivas y endurecimiento del sistema.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Canonical.</strong> <em>Ubuntu Server documentation</em>. Disponible en:
        <a href="https://ubuntu.com/server/docs" class="text-blue-600 underline" target="_blank">ubuntu.com/server/docs</a>
        <p class="text-sm text-slate-600 mt-1">Administración de Ubuntu Server, SSH, firewall, actualizaciones y servicios.</p>
    </li>
    <li class="pl-4 border-l-4 border-blue-500">
        <strong>Greenbone.</strong> <em>Greenbone Community Documentation</em>. Disponible en:
        <a href="https://greenbone.github.io/docs/latest/" class="text-blue-600 underline" target="_blank">greenbone.github.io/docs/latest/</a>
        <p class="text-sm text-slate-600 mt-1">Instalación y uso de OpenVAS/Greenbone para análisis de vulnerabilidades.</p>
    </li>
</ul>

<h3>10.2. Estándares, normativa y marcos de referencia</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-red-500">
        <strong>Unión Europea.</strong> (2016). <em>Reglamento (UE) 2016/679, Reglamento General de Protección de Datos (RGPD)</em>.
        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj" class="text-blue-600 underline ml-2" target="_blank">Texto consolidado</a>
        <p class="text-sm text-slate-600 mt-1">Marco principal para el tratamiento de datos personales.</p>
    </li>
    <li class="pl-4 border-l-4 border-red-500">
        <strong>Gobierno de España.</strong> (2018). <em>Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales</em>.
        <a href="https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673" class="text-blue-600 underline ml-2" target="_blank">BOE</a>
        <p class="text-sm text-slate-600 mt-1">Adaptación española del RGPD y derechos digitales.</p>
    </li>
    <li class="pl-4 border-l-4 border-red-500">
        <strong>CCN-CERT.</strong> <em>Esquema Nacional de Seguridad (ENS)</em>. Disponible en:
        <a href="https://www.ccn-cert.cni.es/" class="text-blue-600 underline" target="_blank">ccn-cert.cni.es</a>
        <p class="text-sm text-slate-600 mt-1">Guías y categorías de seguridad aplicables como referencia para pymes.</p>
    </li>
    <li class="pl-4 border-l-4 border-red-500">
        <strong>ISO/IEC.</strong> (2022). <em>ISO/IEC 27001:2022. Information security, cybersecurity and privacy protection</em>.
        <p class="text-sm text-slate-600 mt-1">Sistema de gestión de la seguridad de la información y controles asociados.</p>
    </li>
    <li class="pl-4 border-l-4 border-red-500">
        <strong>Center for Internet Security.</strong> <em>CIS Benchmarks</em>. Disponible en:
        <a href="https://www.cisecurity.org/cis-benchmarks" class="text-blue-600 underline" target="_blank">cisecurity.org/cis-benchmarks</a>
        <p class="text-sm text-slate-600 mt-1">Guías de configuración segura para Windows, Linux, navegadores y aplicaciones.</p>
    </li>
    <li class="pl-4 border-l-4 border-red-500">
        <strong>NIST.</strong> <em>Cybersecurity Framework 2.0</em>. Disponible en:
        <a href="https://www.nist.gov/cyberframework" class="text-blue-600 underline" target="_blank">nist.gov/cyberframework</a>
        <p class="text-sm text-slate-600 mt-1">Marco de funciones: identificar, proteger, detectar, responder y recuperar.</p>
    </li>
</ul>

<h3>10.3. Libros y publicaciones recomendadas</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-emerald-500">
        <strong>Stallings, W.</strong> (2022). <em>Computer Security: Principles and Practice</em> (5th ed.). Pearson.
        <p class="text-sm text-slate-600 mt-1">Fundamentos de seguridad, control de accesos, criptografía y gestión de riesgos.</p>
    </li>
    <li class="pl-4 border-l-4 border-emerald-500">
        <strong>Kim, D. y Solomon, M. G.</strong> (2021). <em>Fundamentals of Information Systems Security</em>. Jones &amp; Bartlett Learning.
        <p class="text-sm text-slate-600 mt-1">Introducción práctica a la seguridad de sistemas de información.</p>
    </li>
    <li class="pl-4 border-l-4 border-emerald-500">
        <strong>NIST.</strong> (2012). <em>SP 800-123: Guide to General Server Security</em>.
        <a href="https://csrc.nist.gov/pubs/sp/800/123/final" class="text-blue-600 underline ml-2" target="_blank">NIST CSRC</a>
        <p class="text-sm text-slate-600 mt-1">Buenas prácticas de seguridad para servidores.</p>
    </li>
    <li class="pl-4 border-l-4 border-emerald-500">
        <strong>NIST.</strong> (2012). <em>SP 800-83 Rev. 1: Guide to Malware Incident Prevention and Handling for Desktops and Laptops</em>.
        <a href="https://csrc.nist.gov/pubs/sp/800/83/r1/final" class="text-blue-600 underline ml-2" target="_blank">NIST CSRC</a>
        <p class="text-sm text-slate-600 mt-1">Prevención y respuesta ante malware en equipos de usuario.</p>
    </li>
</ul>

<h3>10.4. Recursos y comunidades</h3>

<ul class="space-y-3 my-4">
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>INCIBE.</strong> <em>Protege tu empresa</em>. Disponible en:
        <a href="https://www.incibe.es/empresas" class="text-blue-600 underline" target="_blank">incibe.es/empresas</a>
        <p class="text-sm text-slate-600 mt-1">Guías, herramientas y avisos de seguridad para pymes y autónomos.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>AEPD.</strong> <em>Guías y resoluciones</em>. Disponible en:
        <a href="https://www.aepd.es/" class="text-blue-600 underline" target="_blank">aepd.es</a>
        <p class="text-sm text-slate-600 mt-1">Criterios sobre protección de datos, brechas de seguridad y derechos de las personas.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>OWASP.</strong> <em>OWASP Top 10</em>. Disponible en:
        <a href="https://owasp.org/www-project-top-ten/" class="text-blue-600 underline" target="_blank">owasp.org/www-project-top-ten/</a>
        <p class="text-sm text-slate-600 mt-1">Riesgos más comunes en aplicaciones web, útil para revisar el ERP.</p>
    </li>
    <li class="pl-4 border-l-4 border-slate-500">
        <strong>pfSense Community.</strong> Foro y documentación comunitaria. Disponible en:
        <a href="https://forum.netgate.com/" class="text-blue-600 underline" target="_blank">forum.netgate.com</a>
        <p class="text-sm text-slate-600 mt-1">Consultas sobre configuración, errores y buenas prácticas.</p>
    </li>
</ul>

<h3>10.5. Formato de cita</h3>

<p>
    Utiliza un formato coherente en toda la memoria. Se recomienda APA 7.ª edición para las
    referencias bibliográficas y un estilo uniforme para las capturas y tablas. Incluye siempre la
    fecha de consulta en los recursos web que puedan cambiar.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el alumnado</span>
    </div>
    <p>
        Añade al menos cinco fuentes adicionales que hayas utilizado realmente para tomar decisiones
        técnicas. Para cada una, indica qué información has extraído y cómo ha influido en el
        proyecto. No incluyas enlaces que no hayas consultado.
    </p>
</div>
`;
