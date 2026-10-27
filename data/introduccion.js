window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Contexto del proyecto</span>
    </div>
    <p>
        Esta sección presenta la cooperativa, el problema que debes resolver y los objetivos del
        proyecto. Léela con atención: las decisiones técnicas de las secciones siguientes deben estar
        conectadas con este contexto y con las necesidades reales de una empresa agroalimentaria.
    </p>
</div>

<h3>1.1. Descripción de la cooperativa</h3>

<p>
    <strong>Cooperativa Agroecológica La Vega</strong> es una cooperativa de segundo grado fundada en
    2008 en Torrent (Valencia). Se dedica a la producción, manipulación, envasado y distribución de
    hortalizas ecológicas de proximidad. Trabajan en ella <strong>38 personas</strong>: 14 en campo y
    almacén, 8 en la nave de envasado, 6 en logística y reparto, 7 en administración y facturación,
    2 en dirección y 1 persona responsable de calidad y trazabilidad.
</p>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
        <div class="text-3xl font-bold text-blue-600 mb-2">38</div>
        <div class="text-sm text-slate-600">Personas trabajadoras</div>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
        <div class="text-3xl font-bold text-emerald-600 mb-2">2.400</div>
        <div class="text-sm text-slate-600">Pedidos semanales</div>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-center">
        <div class="text-3xl font-bold text-amber-600 mb-2">6</div>
        <div class="text-sm text-slate-600">Vehículos de reparto conectados</div>
    </div>
</div>

<h4>Infraestructura tecnológica actual</h4>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Elemento</th>
            <th class="border border-slate-200 p-3 text-left">Situación actual</th>
            <th class="border border-slate-200 p-3 text-left">Riesgo principal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Red local</td>
            <td class="border border-slate-200 p-3">Router del proveedor de Internet, dos switches sin gestionar y una única red plana 192.168.1.0/24 para oficinas, nave y sensores.</td>
            <td class="border border-slate-200 p-3">Cualquier dispositivo puede alcanzar el ERP, los servidores y los equipos de control de frío.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Wi-Fi</td>
            <td class="border border-slate-200 p-3">Una red para todo: visitantes, carretillas, lectores de códigos y portátiles de dirección comparten la misma clave.</td>
            <td class="border border-slate-200 p-3">Acceso no autorizado y propagación de malware desde dispositivos personales.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Servidor ERP</td>
            <td class="border border-slate-200 p-3">Windows Server 2016 sin actualizar desde hace dieciocho meses. Base de datos de pedidos y facturación con contraseña compartida.</td>
            <td class="border border-slate-200 p-3">Ransomware, pérdida de datos y parada de la facturación.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Puestos de oficina</td>
            <td class="border border-slate-200 p-3">22 equipos Windows 10/11. Ocho personas usan cuenta de administrador a diario. Antivirus gratuito sin consola central.</td>
            <td class="border border-slate-200 p-3">Malware, robo de credenciales y falta de visibilidad.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Nave y cámaras</td>
            <td class="border border-slate-200 p-3">Sensores de temperatura y humedad conectados por Wi-Fi, sin inventario ni actualizaciones. Básculas y lectores con firmware antiguo.</td>
            <td class="border border-slate-200 p-3">Pérdida de trazabilidad y de la cadena de frío.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">Un disco externo conectado al servidor. Copia completa semanal sin cifrar. Nunca se ha probado una restauración.</td>
            <td class="border border-slate-200 p-3">Pérdida total si el ransomware cifra también el disco de copias.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Correo y pagos</td>
            <td class="border border-slate-200 p-3">Cuentas gratuitas con contraseñas repetidas. Sin MFA. La persona de administración gestiona transferencias desde el mismo equipo que abre correos.</td>
            <td class="border border-slate-200 p-3">Fraude del CEO, phishing y suplantación de proveedores.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Soporte técnico</td>
            <td class="border border-slate-200 p-3">Un técnico externo acude cuando hay una avería. No existe documentación, inventario ni contrato de mantenimiento.</td>
            <td class="border border-slate-200 p-3">Dependencia de una sola persona y pérdida de conocimiento.</td>
        </tr>
    </tbody>
</table>

<h3>1.2. Problemática crítica</h3>

<p>
    El detonante fue un correo que suplantaba a un proveedor de envases. Incluía una factura con el
    logotipo real y solicitaba un cambio de cuenta bancaria. La persona de administración estuvo a
    punto de autorizar una transferencia de <strong>18.400 €</strong>. La operación se detuvo porque
    el banco aplicó una verificación adicional. Dos semanas después, un equipo de la nave mostró un
    mensaje de rescate y dejó de funcionar durante seis horas. La cooperativa comprobó entonces que:
</p>

<div class="callout callout-error">
    <div class="callout-title">
        <span>🚨</span>
        <span>Hallazgos que justifican la urgencia</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>No existe un inventario fiable de equipos, cuentas ni servicios.</li>
        <li>La red plana permite pasar de un portátil de visitante al servidor del ERP.</li>
        <li>Hay cuentas compartidas y contraseñas escritas en papeles junto a los puestos.</li>
        <li>El servidor acumula vulnerabilidades críticas y no tiene un plan de actualización.</li>
        <li>La copia de seguridad está conectada al mismo servidor y no está cifrada.</li>
        <li>Nadie sabe cuánto tiempo se tardaría en recuperar la facturación y la trazabilidad.</li>
        <li>El personal no ha recibido formación sobre phishing ni protección de datos.</li>
        <li>Un distribuidor exige un cuestionario de seguridad antes de renovar el contrato anual.</li>
    </ul>
</div>

<p>
    La cooperativa no puede permitirse una consultoría de gran tamaño, pero sí necesita un plan
    proporcionado, documentado y mantenible. El reto consiste en proteger lo crítico sin paralizar la
    actividad diaria ni convertir la seguridad en un obstáculo para el trabajo de la nave.
</p>

<h3>1.3. Propuesta técnica</h3>

<p>
    El equipo de SMR actuará como servicio externo de soporte. Diseñará e implantará en el laboratorio
    un <strong>sistema de protección por capas</strong> adaptado a La Vega. La propuesta se apoya en
    cinco pilares:
</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🌐 Red segmentada</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Separar oficinas, nave, sensores, invitados y administración mediante VLANs.</li>
            <li>Instalar pfSense u OPNsense con política de denegación por defecto.</li>
            <li>Publicar solo los servicios estrictamente necesarios.</li>
            <li>Documentar direccionamiento, reglas y pruebas de aislamiento.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">💻 Equipos protegidos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Actualizar Windows Server, Windows 10/11 y Ubuntu.</li>
            <li>Retirar privilegios de administrador a las cuentas de uso diario.</li>
            <li>Activar firewall local, antivirus y bloqueo de pantalla.</li>
            <li>Inventariar y actualizar los dispositivos de la nave.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">🔐 Identidades y datos</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Contraseñas únicas y gestor de contraseñas para el equipo.</li>
            <li>Doble factor en correo, ERP y administración.</li>
            <li>Permisos por grupos y revisión periódica de accesos.</li>
            <li>Copias 3-2-1, cifradas y con restauración probada.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">🧠 Personas preparadas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Píldoras formativas para oficina y nave.</li>
            <li>Protocolo claro ante phishing, ransomware o pérdida de equipos.</li>
            <li>Carteles y guías rápidas en puestos y vestuarios.</li>
            <li>Simulacro ético y revisión de lecciones aprendidas.</li>
        </ul>
    </div>
</div>

<h3>1.4. Objetivos SMART</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 1: inventario</div>
        <p class="text-sm text-slate-600">
            Elaborar en las dos primeras semanas un inventario con al menos el 95% de los equipos,
            cuentas, servicios y datos críticos, asignando una persona responsable a cada activo.
        </p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 2: segmentación</div>
        <p class="text-sm text-slate-600">
            Diseñar y probar una red con al menos cinco VLANs, demostrando que un dispositivo invitado
            no puede alcanzar el ERP ni los sensores de la cámara frigorífica.
        </p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 3: hardening</div>
        <p class="text-sm text-slate-600">
            Aplicar una guía de configuración segura a los equipos del laboratorio, reduciendo a cero
            las vulnerabilidades críticas detectadas en el escaneo inicial.
        </p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 4: recuperación</div>
        <p class="text-sm text-slate-600">
            Implantar copias automatizadas con política 3-2-1 y demostrar una restauración completa del
            ERP en menos de dos horas, con evidencias y tiempos registrados.
        </p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 5: respuesta</div>
        <p class="text-sm text-slate-600">
            Redactar y simular un protocolo de respuesta ante phishing y ransomware, con roles,
            contactos, plazos y preservación de evidencias.
        </p>
    </div>
    <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div class="callout-title"><span>🎯</span> Objetivo 6: concienciación</div>
        <p class="text-sm text-slate-600">
            Formar al 100% del personal simulado con una píldora de 30 minutos y una campaña visual
            adaptada a oficina, nave y reparto.
        </p>
    </div>
</div>

<h3>1.5. Alcance y límites del proyecto</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-200">
        <h4 class="font-bold text-emerald-800 mb-3">✅ Incluido en el proyecto</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Auditoría de la red, equipos, cuentas y servicios del laboratorio.</li>
            <li>Diseño de VLANs, firewall y Wi-Fi segmentada.</li>
            <li>Hardening básico de Windows Server, Windows 10/11 y Ubuntu Server.</li>
            <li>Gestión de identidades, contraseñas y permisos.</li>
            <li>Copias de seguridad y prueba de restauración.</li>
            <li>Protocolo de incidentes y formación del personal.</li>
            <li>Presupuesto y propuesta de mantenimiento para la cooperativa.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-200">
        <h4 class="font-bold text-rose-800 mb-3">🚫 Fuera del alcance</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Atacar sistemas reales o de terceros.</li>
            <li>Utilizar datos reales de clientes, proveedores o personal.</li>
            <li>Comprar equipos o licencias no disponibles en el aula.</li>
            <li>Realizar auditorías legales o peritajes oficiales.</li>
            <li>Sustituir el asesoramiento jurídico especializado.</li>
            <li>Modificar instalaciones eléctricas o equipos de frío reales.</li>
        </ul>
    </div>
</div>

<h3>1.6. Módulos implicados</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Aportación al proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Redes locales</td>
            <td class="border border-slate-200 p-3">Diseño de VLANs, direccionamiento, cableado, Wi-Fi y pruebas de conectividad.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Sistemas operativos en red</td>
            <td class="border border-slate-200 p-3">Usuarios, grupos, permisos, recursos compartidos y políticas de seguridad.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Seguridad informática</td>
            <td class="border border-slate-200 p-3">Análisis de riesgos, hardening, firewall, malware, copias y respuesta a incidentes.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Servicios de red</td>
            <td class="border border-slate-200 p-3">DNS, DHCP, servidor de archivos y publicación segura de servicios.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Aplicaciones web</td>
            <td class="border border-slate-200 p-3">Revisión básica del ERP y de su exposición en red.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Formación y orientación laboral</td>
            <td class="border border-slate-200 p-3">Prevención de riesgos, protección de datos, ética profesional y trabajo en equipo.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Empresa e iniciativa emprendedora</td>
            <td class="border border-slate-200 p-3">Presupuesto, valoración de costes y presentación de la propuesta al cliente.</td>
        </tr>
    </tbody>
</table>

<h3>1.7. Tareas iniciales propuestas</h3>

<p>
    Estas son las primeras tareas del equipo. El profesorado puede adaptarlas, ampliarlas o
    secuenciarlas según el calendario del aula.
</p>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li><strong>Constituir el equipo y repartir roles.</strong> Coordinación, red, sistemas, seguridad, documentación y comunicación.</li>
    <li><strong>Leer el caso y preparar una entrevista.</strong> Elaborad diez preguntas para la persona responsable de calidad y la persona de administración.</li>
    <li><strong>Crear el inventario inicial.</strong> Equipos, sistemas operativos, servicios, cuentas y datos críticos.</li>
    <li><strong>Dibujar el mapa de red actual.</strong> Router, switches, servidores, puestos, Wi-Fi, sensores y lectores.</li>
    <li><strong>Identificar activos y riesgos.</strong> Valorad confidencialidad, integridad y disponibilidad de cada activo.</li>
    <li><strong>Priorizar tres medidas urgentes.</strong> Justificad por qué son las primeras y qué riesgo reducen.</li>
    <li><strong>Preparar el laboratorio.</strong> Máquinas virtuales, red aislada, pfSense, Windows Server, Ubuntu y cliente de pruebas.</li>
    <li><strong>Acordar el tablero de tareas.</strong> Columnas: pendiente, en curso, revisión y terminado.</li>
</ol>

<h3>1.8. Orientaciones para el profesorado</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🧑‍🏫</span>
        <span>Cómo acompañar el proyecto</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Presentar el caso como un encargo profesional, no como un ejercicio con una única respuesta.</li>
        <li>Organizar equipos heterogéneos y rotar los roles para evitar especializaciones prematuras.</li>
        <li>Proporcionar un laboratorio aislado y autorizado; recordar los límites legales y éticos.</li>
        <li>Establecer hitos semanales con entregas cortas y retroalimentación formativa.</li>
        <li>Evaluar el proceso, la documentación, la justificación técnica y la comunicación, no solo el resultado.</li>
        <li>Invitar a una persona del sector agroalimentario o a una empresa local para simular la entrevista y la defensa.</li>
        <li>Utilizar rúbricas conocidas desde el primer día y favorecer la coevaluación entre equipos.</li>
    </ul>
</div>

<h3>1.9. Sugerencias para completar el proyecto</h3>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejos para el alumnado</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>No empieces por la herramienta: empieza por el problema y por los datos que necesitas obtener.</li>
        <li>Documenta cada decisión con una captura, un comando o una prueba reproducible.</li>
        <li>Justifica siempre el coste y el beneficio de cada medida; no todo vale para cualquier empresa.</li>
        <li>Piensa como atacante para detectar puntos débiles, pero actúa siempre como defensor.</li>
        <li>Una copia de seguridad que no se ha restaurado no es una copia de seguridad fiable.</li>
        <li>Prepara una explicación breve para personas no técnicas: la dirección debe entenderla.</li>
        <li>Ten en cuenta la nave: una medida que impide trabajar al personal de envasado no se usará.</li>
    </ul>
</div>
`;
