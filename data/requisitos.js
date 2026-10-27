window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Los requisitos son el contrato entre el equipo técnico y la cooperativa. Deben ser claros,
        verificables y estar conectados con los riesgos detectados. Evita frases genéricas como
        "la red debe ser segura": explica qué significa y cómo se comprueba.
    </p>
</div>

<h3>4.1. Requisitos funcionales</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Prioridad</th>
            <th class="border border-slate-200 p-3 text-left">Criterio de aceptación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-01</td>
            <td class="border border-slate-200 p-3">El sistema debe permitir inventariar todos los equipos, sistemas operativos, servicios, cuentas y dispositivos de nave.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Existe un inventario con al menos el 95% de los activos identificados y una persona responsable de cada uno.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-02</td>
            <td class="border border-slate-200 p-3">La red debe estar segmentada en VLANs para separar administración, servidores, oficinas, nave, sensores e invitados.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Cada VLAN tiene un rango propio y las pruebas demuestran que no hay acceso directo no autorizado entre ellas.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-03</td>
            <td class="border border-slate-200 p-3">La Wi-Fi de visitantes debe estar aislada de la red interna y contar con contraseña propia.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Un dispositivo conectado a la Wi-Fi de invitados no puede alcanzar el ERP ni los sensores de frío.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-04</td>
            <td class="border border-slate-200 p-3">El firewall debe aplicar una política de denegación por defecto y permitir solo los servicios necesarios.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Las reglas están documentadas, ordenadas y existe una prueba para cada servicio permitido.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-05</td>
            <td class="border border-slate-200 p-3">Las cuentas deben ser individuales, con permisos por grupos y sin contraseñas compartidas.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Cada persona tiene su cuenta; las cuentas genéricas están justificadas y controladas.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-06</td>
            <td class="border border-slate-200 p-3">El correo, el ERP y las cuentas de administración deben disponer de doble factor de autenticación.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Se ha probado el acceso con MFA y existe un procedimiento de recuperación.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-07</td>
            <td class="border border-slate-200 p-3">Debe existir un sistema de copias automatizado con al menos tres copias, una fuera de la cooperativa y una protegida contra modificación.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Se han generado copias según el calendario y se ha restaurado un conjunto de datos de prueba.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-08</td>
            <td class="border border-slate-200 p-3">El equipo debe disponer de un protocolo de respuesta ante phishing, ransomware, pérdida de dispositivos y fallo de sensores.</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">El protocolo incluye roles, pasos, contactos, plazos y registro de evidencias; se ha simulado al menos una vez.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-09</td>
            <td class="border border-slate-200 p-3">El personal debe recibir formación básica sobre contraseñas, phishing, protección de datos y uso seguro de dispositivos.</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Existe una sesión formativa, material de apoyo y una encuesta o prueba de comprensión.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-10</td>
            <td class="border border-slate-200 p-3">Los dispositivos de la nave deben estar inventariados, actualizados cuando sea posible y separados de la red de oficinas.</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Existe un listado con modelo, firmware, ubicación y responsable, y una VLAN específica para ellos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">RF-11</td>
            <td class="border border-slate-200 p-3">La documentación debe permitir que otra persona mantenga la instalación sin depender del equipo que la creó.</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Existen manuales, diagramas, inventario, credenciales protegidas y registro de cambios.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">RF-12</td>
            <td class="border border-slate-200 p-3">Debe existir un plan de continuidad básico para seguir sirviendo pedidos si falla la red o el ERP.</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">El plan describe procedimientos manuales, responsables y criterios para volver a la normalidad.</td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos no funcionales</h3>

<h4>🔒 Seguridad</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>RNF-01:</strong> Las contraseñas deben tener al menos 12 caracteres, no reutilizarse y almacenarse en un gestor seguro.</li>
    <li><strong>RNF-02:</strong> Los servicios de administración no deben estar expuestos a Internet.</li>
    <li><strong>RNF-03:</strong> Las copias de seguridad deben estar cifradas y protegidas con credenciales distintas de las de producción.</li>
    <li><strong>RNF-04:</strong> Los registros de auditoría deben conservarse el tiempo suficiente para investigar un incidente.</li>
    <li><strong>RNF-05:</strong> El acceso físico al rack o armario de comunicaciones debe estar controlado.</li>
    <li><strong>RNF-06:</strong> Los dispositivos de la nave no deben poder iniciar conexiones hacia la red de oficinas salvo excepciones justificadas.</li>
</ul>

<h4>⚡ Rendimiento</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>RNF-07:</strong> La navegación por la red interna no debe superar los 5 ms de latencia adicional en condiciones normales.</li>
    <li><strong>RNF-08:</strong> El ERP debe abrirse en menos de 5 segundos en los puestos de administración.</li>
    <li><strong>RNF-09:</strong> Una copia incremental diaria no debe afectar al horario de envasado ni de facturación.</li>
    <li><strong>RNF-10:</strong> El firewall debe soportar el tráfico habitual de la cooperativa sin pérdida de paquetes.</li>
</ul>

<h4>📦 Disponibilidad y recuperación</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>RNF-11:</strong> El ERP debe tener una disponibilidad objetivo del 99% en horario de actividad.</li>
    <li><strong>RNF-12:</strong> El RPO (pérdida máxima de datos aceptable) debe ser inferior a 4 horas.</li>
    <li><strong>RNF-13:</strong> El RTO (tiempo máximo de recuperación) debe ser inferior a 2 horas para el ERP y la trazabilidad.</li>
    <li><strong>RNF-14:</strong> Debe existir un plan de continuidad básico para seguir atendiendo pedidos si falla la red.</li>
</ul>

<h4>📋 Cumplimiento y usabilidad</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>RNF-15:</strong> El tratamiento de datos debe respetar el RGPD y la LOPDGDD.</li>
    <li><strong>RNF-16:</strong> La documentación debe estar en castellano y ser comprensible para personal no técnico.</li>
    <li><strong>RNF-17:</strong> Las medidas de seguridad no deben impedir el trabajo diario de la nave ni de las oficinas.</li>
    <li><strong>RNF-18:</strong> Debe existir un procedimiento de altas, bajas y cambios de personal.</li>
</ul>

<h3>4.3. Matriz de trazabilidad riesgo-requisito</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo identificado</th>
            <th class="border border-slate-200 p-3 text-left">Requisito asociado</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia esperada</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Acceso de invitados a la red interna</td>
            <td class="border border-slate-200 p-3">RF-02, RF-03</td>
            <td class="border border-slate-200 p-3">Prueba de aislamiento de VLAN y captura de denegación.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Robo de credenciales por phishing</td>
            <td class="border border-slate-200 p-3">RF-05, RF-06, RF-09</td>
            <td class="border border-slate-200 p-3">Configuración MFA, política de contraseñas y material formativo.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Ransomware en el servidor del ERP</td>
            <td class="border border-slate-200 p-3">RF-04, RF-07, RF-08</td>
            <td class="border border-slate-200 p-3">Reglas de firewall, copia restaurada y simulación de incidente.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Manipulación de sensores de temperatura</td>
            <td class="border border-slate-200 p-3">RF-02, RF-10, RNF-06</td>
            <td class="border border-slate-200 p-3">VLAN de sensores, inventario y pruebas de aislamiento.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Pérdida de datos por fallo de disco</td>
            <td class="border border-slate-200 p-3">RF-07</td>
            <td class="border border-slate-200 p-3">Informe de restauración con tiempos y resultados.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Fraude por suplantación de proveedor</td>
            <td class="border border-slate-200 p-3">RF-06, RF-08, RF-09</td>
            <td class="border border-slate-200 p-3">Protocolo de verificación de pagos y simulación de phishing.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Dependencia de una sola persona técnica</td>
            <td class="border border-slate-200 p-3">RF-11</td>
            <td class="border border-slate-200 p-3">Manual de operación e inventario actualizado.</td>
        </tr>
    </tbody>
</table>

<h3>4.4. Criterios de aceptación del proyecto</h3>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>El proyecto se considerará aceptado si...</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>La red segmentada funciona y las pruebas de aislamiento están documentadas.</li>
        <li>El ERP y los sensores solo son accesibles desde las VLAN autorizadas.</li>
        <li>Las cuentas cumplen la política de contraseñas y MFA en los servicios acordados.</li>
        <li>Existe al menos una copia fuera del sistema principal y una restauración verificada.</li>
        <li>El protocolo de incidentes se ha simulado y se han registrado las lecciones aprendidas.</li>
        <li>El personal simulado ha recibido la formación y ha completado una prueba de comprensión.</li>
        <li>La memoria final permite a otra persona reproducir y mantener la solución.</li>
    </ul>
</div>

<h3>4.5. Tareas para completar esta sección</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Revisad los requisitos y añadid los que falten según vuestro análisis de riesgos.</li>
    <li>Asignad una prioridad (alta, media, baja) y justificadla.</li>
    <li>Definid cómo se comprobará cada requisito (prueba, captura, revisión documental o entrevista).</li>
    <li>Eliminad requisitos ambiguos y convertidlos en afirmaciones verificables.</li>
    <li>Relacionad cada requisito con al menos un módulo del ciclo.</li>
    <li>Presentad la matriz de trazabilidad al profesorado antes de empezar la implementación.</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🧑‍🏫</span>
        <span>Orientación para el profesorado</span>
    </div>
    <p>
        Revisad los requisitos en una sesión de revisión por pares. Cada equipo puede evaluar la
        matriz de otro equipo con una lista de comprobación: ¿son claros?, ¿son verificables?,
        ¿están priorizados?, ¿se relacionan con los riesgos? La retroalimentación debe ser concreta
        y utilizarse para mejorar antes de la implementación.
    </p>
</div>
`;
