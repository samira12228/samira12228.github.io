window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos y plantillas de trabajo</span>
    </div>
    <p>
        Estas plantillas son un punto de partida. Adáptalas al formato que utilice tu equipo y añade
        las evidencias reales de tu laboratorio. No las entregues vacías: cada tabla debe estar
        completada o justificada.
    </p>
</div>

<h3>Anexo A: Plantilla de inventario de activos</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Activo</th>
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">Ubicación</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Criticidad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">A-01</td>
            <td class="border border-slate-200 p-3">[Nombre del equipo o servicio]</td>
            <td class="border border-slate-200 p-3">Servidor / PC / Red / Sensor / Aplicación</td>
            <td class="border border-slate-200 p-3">[Oficina, nave, rack, cámara]</td>
            <td class="border border-slate-200 p-3">[Persona o rol]</td>
            <td class="border border-slate-200 p-3">Alta / Media / Baja</td>
        </tr>
    </tbody>
</table>

<h3>Anexo B: Matriz de riesgos</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad (1-5)</th>
            <th class="border border-slate-200 p-3 text-left">Impacto (1-5)</th>
            <th class="border border-slate-200 p-3 text-left">Nivel</th>
            <th class="border border-slate-200 p-3 text-left">Medida propuesta</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Phishing con robo de credenciales</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[MFA, formación, filtro de correo]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Ransomware en el servidor del ERP</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[Copias, segmentación, hardening]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Acceso de invitados a la red interna</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[VLAN de invitados, reglas de firewall]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Manipulación de sensores de frío</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[VLAN de OT, inventario, firmware]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Pérdida de un portátil</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[Cifrado de disco, bloqueo, MFA]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Fallo de disco del servidor</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[RAID, copias, restauración probada]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Baja sin retirada de accesos</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[ ]</td>
            <td class="border border-slate-200 p-3">[Procedimiento de bajas y revisión trimestral]</td>
        </tr>
    </tbody>
</table>

<h3>Anexo C: Ficha de incidente</h3>

<div class="bg-slate-50 rounded-lg p-6 my-6 border border-slate-200">
    <h4 class="font-bold text-slate-800 mb-4">Datos generales</h4>
    <table class="w-full border-collapse">
        <tbody>
            <tr>
                <td class="border border-slate-300 p-3 font-bold w-1/3">ID del incidente</td>
                <td class="border border-slate-300 p-3">[INC-AAAA-XX]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Fecha y hora de detección</td>
                <td class="border border-slate-300 p-3">[DD/MM/AAAA HH:MM]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Persona que detecta</td>
                <td class="border border-slate-300 p-3">[Nombre y rol]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Equipo o servicio afectado</td>
                <td class="border border-slate-300 p-3">[Identificador]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Descripción</td>
                <td class="border border-slate-300 p-3">[Qué ha ocurrido, síntomas y evidencias iniciales]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Clasificación</td>
                <td class="border border-slate-300 p-3">[Leve / Moderado / Grave / Crítico]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Datos personales afectados</td>
                <td class="border border-slate-300 p-3">[Sí / No / Pendiente de confirmar]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Acciones de contención</td>
                <td class="border border-slate-300 p-3">[Aislar, desconectar, preservar logs, no borrar]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Personas avisadas</td>
                <td class="border border-slate-300 p-3">[Dirección, proveedor, DPD, etc.]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Recuperación</td>
                <td class="border border-slate-300 p-3">[Copias usadas, hora de restauración, comprobaciones]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Causa raíz</td>
                <td class="border border-slate-300 p-3">[Análisis técnico y organizativo]</td>
            </tr>
            <tr class="bg-slate-100">
                <td class="border border-slate-300 p-3 font-bold">Medidas correctoras</td>
                <td class="border border-slate-300 p-3">[Acción, responsable y plazo]</td>
            </tr>
            <tr>
                <td class="border border-slate-300 p-3 font-bold">Estado</td>
                <td class="border border-slate-300 p-3">[Abierto / En contención / Recuperado / Cerrado]</td>
            </tr>
        </tbody>
    </table>
</div>

<h3>Anexo D: Plan de pruebas</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Prueba</th>
            <th class="border border-slate-200 p-3 text-left">Procedimiento</th>
            <th class="border border-slate-200 p-3 text-left">Resultado esperado</th>
            <th class="border border-slate-200 p-3 text-left">Resultado obtenido</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">P-01</td>
            <td class="border border-slate-200 p-3">Aislamiento de invitados</td>
            <td class="border border-slate-200 p-3">Desde un equipo en VLAN 50, intentar acceder al ERP de VLAN 20.</td>
            <td class="border border-slate-200 p-3">Conexión denegada.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-02</td>
            <td class="border border-slate-200 p-3">Acceso de oficinas permitido</td>
            <td class="border border-slate-200 p-3">Desde un puesto de VLAN 30, abrir la aplicación del ERP.</td>
            <td class="border border-slate-200 p-3">Acceso correcto y registro de auditoría.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">P-03</td>
            <td class="border border-slate-200 p-3">Administración restringida</td>
            <td class="border border-slate-200 p-3">Desde VLAN 30, intentar abrir la administración del firewall.</td>
            <td class="border border-slate-200 p-3">Acceso denegado.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-04</td>
            <td class="border border-slate-200 p-3">Aislamiento de sensores</td>
            <td class="border border-slate-200 p-3">Desde VLAN 40, intentar acceder a un puesto de oficina.</td>
            <td class="border border-slate-200 p-3">Conexión denegada.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">P-05</td>
            <td class="border border-slate-200 p-3">Restauración de copia</td>
            <td class="border border-slate-200 p-3">Restaurar la base de datos de prueba en un equipo limpio.</td>
            <td class="border border-slate-200 p-3">Datos íntegros y tiempo inferior al RTO.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">P-06</td>
            <td class="border border-slate-200 p-3">Phishing simulado</td>
            <td class="border border-slate-200 p-3">Enviar un correo ficticio al personal simulado y registrar la respuesta.</td>
            <td class="border border-slate-200 p-3">Nadie introduce credenciales; se notifica al responsable.</td>
            <td class="border border-slate-200 p-3">[Completar]</td>
        </tr>
    </tbody>
</table>

<h3>Anexo E: Checklist de entrega final</h3>

<div class="bg-green-50 rounded-lg p-6 my-6 border border-green-200">
    <h4 class="font-bold text-green-800 mb-4">Documentación</h4>
    <ul class="space-y-2">
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Memoria final completa y paginada.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Inventario, mapa de red y matriz de riesgos.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Diseño de VLANs y reglas de firewall.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Guía de hardening y política de contraseñas.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Plan de copias y prueba de restauración.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Protocolo de incidentes y ficha cumplimentada.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Material de formación y encuesta.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-green-800">Bibliografía con fuentes consultadas.</span></li>
    </ul>
</div>

<div class="bg-blue-50 rounded-lg p-6 my-6 border border-blue-200">
    <h4 class="font-bold text-blue-800 mb-4">Evidencias técnicas</h4>
    <ul class="space-y-2">
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Capturas de las VLANs y reglas del firewall.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Pruebas de conectividad permitida y denegada.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Configuración exportada y versionada.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Informe de análisis de vulnerabilidades.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Registro de restauración con tiempos.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Inventario de dispositivos de nave y firmware.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-blue-800">Simulación de incidente y lecciones aprendidas.</span></li>
    </ul>
</div>

<div class="bg-amber-50 rounded-lg p-6 my-6 border border-amber-200">
    <h4 class="font-bold text-amber-800 mb-4">Presentación y defensa</h4>
    <ul class="space-y-2">
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-amber-800">Presentación de 10 minutos con estructura clara.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-amber-800">Demostración del laboratorio o vídeo de respaldo.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-amber-800">Explicación adaptada a público no técnico.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-amber-800">Respuestas preparadas sobre costes, riesgos y límites.</span></li>
        <li class="flex items-start gap-3"><input type="checkbox" class="mt-1 w-4 h-4"><span class="text-amber-800">Reparto equilibrado del turno de palabra.</span></li>
    </ul>
</div>

<h3>Anexo F: Guion para la defensa oral</h3>

<ol class="list-decimal pl-6 space-y-2 my-4">
    <li><strong>Contexto y problema (1 minuto):</strong> quién es La Vega y qué riesgo tenía.</li>
    <li><strong>Auditoría y hallazgos (2 minutos):</strong> qué encontrasteis y cómo lo priorizasteis.</li>
    <li><strong>Diseño de la solución (2 minutos):</strong> zonas, VLANs, firewall y decisiones clave.</li>
    <li><strong>Implementación y pruebas (2 minutos):</strong> qué funciona, qué evidencia lo demuestra.</li>
    <li><strong>Operación y respuesta (1 minuto):</strong> cómo se mantiene y qué haríais ante un incidente.</li>
    <li><strong>Conclusiones y mejoras (1 minuto):</strong> límites y siguientes pasos.</li>
    <li><strong>Preguntas (1 minuto):</strong> respuestas breves y argumentadas.</li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📁</span>
        <span>Entrega de archivos</span>
    </div>
    <p>
        Organiza la entrega en una carpeta comprimida con el nombre del equipo y del proyecto.
        Incluye la memoria en PDF, los anexos, las evidencias y, si el tamaño lo permite, una copia
        de las configuraciones. No incluyas contraseñas reales ni datos personales.
    </p>
</div>
`;
