window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Implantar una solución no es el final: hay que mantenerla, actualizarla y saber qué hacer
        cuando algo falla. Esta sección define cómo se administrará el sistema en el día a día de la
        cooperativa y cómo se responderá ante un incidente.
    </p>
</div>

<h3>7.1. Plan de mantenimiento</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Frecuencia</th>
            <th class="border border-slate-200 p-3 text-left">Tarea</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Diaria</td>
            <td class="border border-slate-200 p-3">Revisar alertas de copias, disponibilidad del ERP y errores críticos.</td>
            <td class="border border-slate-200 p-3">Persona de guardia o técnico externo.</td>
            <td class="border border-slate-200 p-3">Panel de monitorización y registro de incidencias.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Semanal</td>
            <td class="border border-slate-200 p-3">Comprobar espacio, actualizaciones pendientes y estado de los dispositivos de nave.</td>
            <td class="border border-slate-200 p-3">Soporte TI.</td>
            <td class="border border-slate-200 p-3">Lista de comprobación semanal.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Mensual</td>
            <td class="border border-slate-200 p-3">Probar una restauración y revisar cuentas y permisos.</td>
            <td class="border border-slate-200 p-3">Soporte TI y responsable de calidad.</td>
            <td class="border border-slate-200 p-3">Informe de restauración y matriz de accesos actualizada.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Trimestral</td>
            <td class="border border-slate-200 p-3">Revisar reglas de firewall, inventario y formación del personal.</td>
            <td class="border border-slate-200 p-3">Soporte TI y dirección.</td>
            <td class="border border-slate-200 p-3">Acta de revisión y plan de mejoras.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Anual</td>
            <td class="border border-slate-200 p-3">Simulacro de incidente, revisión del plan de continuidad y presupuesto.</td>
            <td class="border border-slate-200 p-3">Dirección, calidad y soporte TI.</td>
            <td class="border border-slate-200 p-3">Informe del simulacro y presupuesto aprobado.</td>
        </tr>
    </tbody>
</table>

<h3>7.2. Gestión de identidades y accesos</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">👤 Altas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Solicitud firmada por la persona responsable del área.</li>
            <li>Cuenta individual con nombre y apellidos.</li>
            <li>Grupo de permisos según el puesto.</li>
            <li>MFA en correo y ERP cuando corresponda.</li>
            <li>Registro en el inventario de cuentas.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">🔁 Cambios</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Revisión de permisos al cambiar de puesto.</li>
            <li>Retirada de accesos que ya no se necesitan.</li>
            <li>Registro de la fecha y la persona que autoriza.</li>
            <li>Comunicación al equipo de soporte.</li>
        </ul>
    </div>
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">🚪 Bajas</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Desactivar la cuenta el mismo día de la baja.</li>
            <li>Recuperar equipos, llaves y tarjetas.</li>
            <li>Cambiar contraseñas compartidas a las que tuviera acceso.</li>
            <li>Conservar los datos según la política de retención.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">🔍 Revisión</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Revisión trimestral de cuentas y permisos.</li>
            <li>Detección de cuentas inactivas o genéricas.</li>
            <li>Comprobación de MFA en servicios críticos.</li>
            <li>Registro de la revisión y de las correcciones.</li>
        </ul>
    </div>
</div>

<h3>7.3. Actualizaciones y gestión de cambios</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Mantener un inventario actualizado de sistemas y versiones.</li>
    <li>Clasificar las actualizaciones por criticidad y planificar una ventana de aplicación.</li>
    <li>Probar primero en el laboratorio o en un equipo piloto.</li>
    <li>Documentar el cambio, la persona responsable y la fecha.</li>
    <li>Tener preparado un plan de reversión para los servicios críticos.</li>
    <li>Comprobar después del cambio que el ERP, la nave y las copias siguen funcionando.</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>El riesgo de no actualizar</span>
    </div>
    <p>
        Un servidor sin actualizar es una de las vías más habituales de entrada para el ransomware.
        Pero actualizar sin probar también puede romper la facturación. La clave está en planificar,
        probar y documentar, no en improvisar.
    </p>
</div>

<h3>7.4. Monitorización y registro</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Qué monitorizar</th>
            <th class="border border-slate-200 p-3 text-left">Por qué</th>
            <th class="border border-slate-200 p-3 text-left">Alerta sugerida</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Disponibilidad del ERP</td>
            <td class="border border-slate-200 p-3">Sin ERP no hay pedidos ni facturación.</td>
            <td class="border border-slate-200 p-3">Servicio caído más de 2 minutos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">Una copia fallida debe detectarse antes de necesitarla.</td>
            <td class="border border-slate-200 p-3">Copia no completada o error de integridad.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Temperatura y humedad</td>
            <td class="border border-slate-200 p-3">La cadena de frío afecta a la calidad y a la trazabilidad.</td>
            <td class="border border-slate-200 p-3">Fuera de rango durante más de 10 minutos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Espacio en disco</td>
            <td class="border border-slate-200 p-3">Un disco lleno puede detener la base de datos.</td>
            <td class="border border-slate-200 p-3">Menos del 15% libre.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Intentos de acceso fallidos</td>
            <td class="border border-slate-200 p-3">Puede indicar fuerza bruta o credenciales filtradas.</td>
            <td class="border border-slate-200 p-3">Más de 5 intentos en 10 minutos para una cuenta.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Cambios en el firewall</td>
            <td class="border border-slate-200 p-3">Un cambio no autorizado puede abrir la red.</td>
            <td class="border border-slate-200 p-3">Modificación de reglas fuera de la ventana aprobada.</td>
        </tr>
    </tbody>
</table>

<h3>7.5. Protocolo de respuesta a incidentes</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Acciones</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">1. Detección</td>
            <td class="border border-slate-200 p-3">Registrar qué ha ocurrido, cuándo y quién lo detecta. No apagar ni borrar evidencias sin indicación.</td>
            <td class="border border-slate-200 p-3">Cualquier persona que detecte el incidente.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">2. Clasificación</td>
            <td class="border border-slate-200 p-3">Valorar gravedad, datos afectados y servicios comprometidos.</td>
            <td class="border border-slate-200 p-3">Soporte TI y dirección.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">3. Contención</td>
            <td class="border border-slate-200 p-3">Aislar el equipo o la VLAN afectada, bloquear cuentas y preservar registros.</td>
            <td class="border border-slate-200 p-3">Soporte TI.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">4. Erradicación</td>
            <td class="border border-slate-200 p-3">Eliminar la causa, actualizar, cambiar credenciales y corregir configuraciones.</td>
            <td class="border border-slate-200 p-3">Soporte TI y proveedor especializado si es necesario.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">5. Recuperación</td>
            <td class="border border-slate-200 p-3">Restaurar servicios desde copias verificadas y comprobar la integridad.</td>
            <td class="border border-slate-200 p-3">Soporte TI y responsable de calidad.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">6. Comunicación</td>
            <td class="border border-slate-200 p-3">Informar a dirección, personal afectado y, si procede, a la autoridad competente.</td>
            <td class="border border-slate-200 p-3">Dirección y persona responsable de protección de datos.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">7. Lecciones</td>
            <td class="border border-slate-200 p-3">Documentar causas, tiempos, medidas correctoras y responsables.</td>
            <td class="border border-slate-200 p-3">Todo el equipo.</td>
        </tr>
    </tbody>
</table>

<h3>7.6. Plan de continuidad para la cooperativa</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <h4 class="font-bold text-amber-800 mb-3">📦 Si falla el ERP</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Usar albaranes manuales numerados y registrar pedidos en papel.</li>
            <li>Designar una persona responsable de la consolidación posterior.</li>
            <li>Priorizar pedidos perecederos y clientes con ventanas de entrega.</li>
            <li>No reanudar la facturación hasta comprobar la integridad de los datos.</li>
        </ul>
    </div>
    <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h4 class="font-bold text-blue-800 mb-3">🌡️ Si falla la red de sensores</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Activar la lectura manual de temperatura cada hora.</li>
            <li>Registrar las lecturas en la hoja de trazabilidad.</li>
            <li>Avisar a la persona responsable de calidad.</li>
            <li>Revisar el aislamiento de la VLAN y el estado de los dispositivos.</li>
        </ul>
    </div>
    <div class="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
        <h4 class="font-bold text-emerald-800 mb-3">📞 Si hay suplantación</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>No realizar pagos ni cambios de cuenta sin verificación telefónica.</li>
            <li>Contactar con el proveedor por un número conocido, no por el del correo.</li>
            <li>Bloquear la cuenta afectada y revisar reglas de correo.</li>
            <li>Informar a dirección y conservar el mensaje original.</li>
        </ul>
    </div>
    <div class="p-6 bg-rose-50 rounded-2xl border border-rose-100">
        <h4 class="font-bold text-rose-800 mb-3">💾 Si hay ransomware</h4>
        <ul class="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li>Aislar el equipo de la red sin apagarlo si es posible.</li>
            <li>No pagar el rescate; avisar a dirección y soporte.</li>
            <li>Identificar la copia más reciente no afectada.</li>
            <li>Restaurar en un entorno limpio y verificar antes de reconectar.</li>
        </ul>
    </div>
</div>

<h3>7.7. Gestión de proveedores y soporte externo</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Definir un contrato de mantenimiento con alcance, horario y tiempos de respuesta.</li>
    <li>Exigir acceso remoto mediante VPN y MFA, nunca con contraseñas compartidas.</li>
    <li>Registrar las intervenciones del proveedor y los cambios realizados.</li>
    <li>Revisar los contratos de tratamiento de datos de los servicios en la nube.</li>
    <li>Mantener un plan de salida para recuperar datos y configuraciones si se cambia de proveedor.</li>
</ul>

<h3>7.8. Tareas para completar esta sección</h3>

<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Elaborad el calendario de mantenimiento con responsables y evidencias.</li>
    <li>Diseñad el procedimiento de altas, cambios y bajas de personal.</li>
    <li>Definid al menos seis alertas de monitorización y su umbral.</li>
    <li>Redactad el protocolo de incidentes y asignad roles.</li>
    <li>Preparad el plan de continuidad para ERP, sensores y pagos.</li>
    <li>Incluid las cláusulas mínimas que pediríais a un proveedor de soporte.</li>
</ol>
`;
