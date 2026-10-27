window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Una solución técnicamente correcta puede ser inviable si cuesta demasiado, si nadie sabe
        mantenerla o si incumple la normativa. En esta sección debes demostrar que tu propuesta es
        realista para una cooperativa agroalimentaria.
    </p>
</div>

<h3>3.1. Viabilidad técnica</h3>

<p>
    La cooperativa no dispone de un departamento de informática. Por eso, la solución debe poder ser
    mantenida por una persona con perfil de SMR, con apoyo puntual de un proveedor externo. Antes de
    elegir una herramienta, comprueba estos factores:
</p>

<ul class="list-disc pl-6 space-y-3 my-4">
    <li><strong>Compatibilidad:</strong> ¿funciona con el hardware y los sistemas operativos existentes?</li>
    <li><strong>Complejidad:</strong> ¿se puede instalar, configurar y documentar con los conocimientos del ciclo?</li>
    <li><strong>Mantenimiento:</strong> ¿requiere actualizaciones frecuentes? ¿hay soporte y comunidad?</li>
    <li><strong>Escalabilidad:</strong> ¿permitirá crecer si la cooperativa abre otra nave o incorpora más personas?</li>
    <li><strong>Dependencia:</strong> ¿se puede migrar a otra solución sin perder datos ni configuración?</li>
    <li><strong>Impacto en la nave:</strong> ¿la medida impide trabajar al personal de envasado o logística?</li>
</ul>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Requisito técnico</th>
            <th class="border border-slate-200 p-3 text-left">¿Cumple?</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia o justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Funciona en el laboratorio del aula</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Captura, versión probada, incidencias]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Se integra con Windows Server y Windows 10/11</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Prueba realizada]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Permite segmentar sensores y dispositivos de nave</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Diseño de VLAN y pruebas]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Puede administrarse desde interfaz gráfica</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Valoración del equipo]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Dispone de documentación oficial actualizada</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Enlace consultado]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">No requiere hardware adicional costoso</td>
            <td class="border border-slate-200 p-3">[SÍ / NO / PARCIAL]</td>
            <td class="border border-slate-200 p-3">[Análisis de requisitos]</td>
        </tr>
    </tbody>
</table>

<h3>3.2. Viabilidad económica</h3>

<p>
    El presupuesto debe distinguir entre <strong>coste de implantación</strong> y
    <strong>coste recurrente</strong>. También debe incluir el coste de no actuar: una parada de dos
    días en plena campaña puede ser más cara que muchas medidas preventivas.
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Concepto</th>
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">Coste estimado</th>
            <th class="border border-slate-200 p-3 text-left">Observaciones</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Firewall pfSense en equipo reutilizado</td>
            <td class="border border-slate-200 p-3">Implantación</td>
            <td class="border border-slate-200 p-3">0 € de licencia</td>
            <td class="border border-slate-200 p-3">Se usa un equipo del aula o un mini-PC existente.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Discos externos para copias</td>
            <td class="border border-slate-200 p-3">Implantación</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Dos discos de 2 TB para alternar y uno fuera de la cooperativa.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Gestor de contraseñas</td>
            <td class="border border-slate-200 p-3">Recurrente</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Opción gratuita o plan de pago por persona.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Antivirus y protección de correo</td>
            <td class="border border-slate-200 p-3">Recurrente</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Comparar Defender con una solución comercial.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Formación del personal</td>
            <td class="border border-slate-200 p-3">Implantación</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Puede realizarse internamente o con una empresa local.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Horas de implantación</td>
            <td class="border border-slate-200 p-3">Implantación</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Valorar las horas del equipo con un precio de mercado.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Mantenimiento anual</td>
            <td class="border border-slate-200 p-3">Recurrente</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Revisiones, actualizaciones y pruebas de restauración.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>💶</span>
        <span>Comparación con el coste de un incidente</span>
    </div>
    <p>
        Estima el coste de una parada de dos días en campaña: pedidos no servidos, facturación
        retrasada, pérdida de producto perecedero, horas de recuperación, posibles sanciones y pérdida
        de confianza. Compara esa cifra con el coste de las medidas preventivas. La conclusión debe
        aparecer de forma explícita en tu informe.
    </p>
</div>

<h3>3.3. Viabilidad legal y de protección de datos</h3>

<p>
    La cooperativa trata datos personales de clientes, proveedores y personal, además de información
    de trazabilidad alimentaria. En el proyecto no vas a sustituir a una persona especialista en
    derecho, pero sí debes identificar los puntos básicos:
</p>

<ul class="list-disc pl-6 space-y-3 my-4">
    <li><strong>Registro de actividades de tratamiento:</strong> qué datos se recogen, para qué, dónde se almacenan y quién accede.</li>
    <li><strong>Minimización:</strong> no recoger ni conservar datos que no sean necesarios.</li>
    <li><strong>Control de acceso:</strong> cada persona debe tener solo los permisos que necesita.</li>
    <li><strong>Cifrado:</strong> especialmente en copias de seguridad, portátiles y dispositivos extraíbles.</li>
    <li><strong>Brechas de seguridad:</strong> protocolo para detectar, documentar y notificar si procede.</li>
    <li><strong>Encargados de tratamiento:</strong> contratos y garantías con proveedores que accedan a datos.</li>
    <li><strong>Derechos de las personas:</strong> acceso, rectificación, supresión y limitación.</li>
    <li><strong>Trazabilidad alimentaria:</strong> garantizar la integridad de los registros de lotes, temperaturas y proveedores.</li>
</ul>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Límite importante</span>
    </div>
    <p>
        No realices pruebas con datos reales de clientes, proveedores o personal. Para el proyecto
        utiliza datos ficticios, anonimizados o sintéticos. Cualquier prueba de seguridad debe hacerse
        en el laboratorio del aula y con autorización expresa del profesorado.
    </p>
</div>

<h3>3.4. Análisis de retorno de la inversión (ROI)</h3>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🧮</span>
        <span>Fórmula de trabajo</span>
    </div>
    <p>
        <strong>ROI = (beneficio esperado − coste de la medida) / coste de la medida × 100</strong>
    </p>
    <p class="text-sm mt-2">
        Ejemplo orientativo: si una medida cuesta 600 € al año y evita una parada valorada en
        6.000 € con una probabilidad estimada del 30%, el beneficio esperado es 1.800 €. El ROI sería
        (1.800 − 600) / 600 × 100 = 200%.
    </p>
</div>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Medida</th>
            <th class="border border-slate-200 p-3 text-left">Coste anual</th>
            <th class="border border-slate-200 p-3 text-left">Riesgo que reduce</th>
            <th class="border border-slate-200 p-3 text-left">Beneficio esperado</th>
            <th class="border border-slate-200 p-3 text-left">ROI estimado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Copias 3-2-1 con prueba mensual</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Pérdida de datos por ransomware o fallo de disco.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">MFA en correo y ERP</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Robo de credenciales y fraude del proveedor.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Segmentación de sensores y nave</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Propagación de malware y accesos laterales.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Formación y phishing ético</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">Caída del personal en engaños y fraudes.</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
            <td class="border border-slate-200 p-3">[COMPLETAR]</td>
        </tr>
    </tbody>
</table>

<h3>3.5. Análisis de riesgos del propio proyecto</h3>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Impacto</th>
            <th class="border border-slate-200 p-3 text-left">Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Falta de tiempo para implantar todo</td>
            <td class="border border-slate-200 p-3">Alta</td>
            <td class="border border-slate-200 p-3">Medio</td>
            <td class="border border-slate-200 p-3">Priorizar medidas de alto impacto y bajo coste; dejar el resto como líneas futuras.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">El laboratorio no reproduce la nave real</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Alto</td>
            <td class="border border-slate-200 p-3">Documentar las diferencias y justificar las adaptaciones.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Pérdida de configuración o de evidencias</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Medio</td>
            <td class="border border-slate-200 p-3">Exportar configuraciones, usar control de versiones y copias del laboratorio.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Falta de coordinación del equipo</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Medio</td>
            <td class="border border-slate-200 p-3">Tablero de tareas, reuniones breves y responsables por entrega.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Uso indebido de herramientas ofensivas</td>
            <td class="border border-slate-200 p-3">Baja</td>
            <td class="border border-slate-200 p-3">Muy alto</td>
            <td class="border border-slate-200 p-3">Trabajar solo en red aislada, con autorización y supervisión del profesorado.</td>
        </tr>
    </tbody>
</table>

<h3>3.6. Lo que debe completar tu equipo</h3>

<ul class="list-disc pl-6 space-y-2 my-4">
    <li>Completar el presupuesto con precios reales consultados en proveedores locales o en línea.</li>
    <li>Calcular el coste total de propiedad (TCO) a tres años.</li>
    <li>Justificar al menos tres medidas con su ROI estimado y sus supuestos.</li>
    <li>Identificar los riesgos legales y las medidas técnicas que los reducen.</li>
    <li>Incluir una conclusión clara: ¿es viable el proyecto? ¿Con qué condiciones?</li>
</ul>
`;
