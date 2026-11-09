# AMAC · Plataforma de empleo (Entrega 2: HTML y CSS)

Proyecto OT2026-WEB. Maquetación estática del prototipo de Figma, con HTML semántico, CSS escrito a mano (sin Bootstrap ni Tailwind) y enfoque mobile-first.

## Integrantes y aportaciones
| Integrante | Qué hizo |
|---|---|
| _Nombre 1_ | _variables.css, base.css, header y footer_ |
| _Nombre 2_ | _index.html, vacante.html_ |
| _Nombre 3_ | _login.html, registro-candidato.html_ |
| _Nombre 4_ | _mis-solicitudes.html, empresa-vacantes.html_ |

## Páginas
`index.html` · `vacante.html` · `preferencia-contacto.html` · `solicitud-enviada.html` · `login.html` · `registro-candidato.html` · `registro-candidato-experiencia.html` · `registro-candidato-contrasena.html` · `cuenta-creada.html` · `mis-solicitudes.html` · `empresa-vacantes.html` · `nueva-vacante.html` · `empresa-vacantes-publicada.html` · `solicitudes-recibidas.html` · `cambiar-estatus.html` · `solicitudes-recibidas-actualizada.html`

Flujo de demo: **index → vacante → Postularme → preferencia-contacto → solicitud-enviada → mis-solicitudes**.

## Paleta y tipografía (css/variables.css)
| Variable | Valor | Uso |
|---|---|---|
| `--color-primario` | `#ff7f5c` | Botones principales |
| `--color-primario-oscuro` | `#f2653e` | Hover de botones |
| `--color-marino` / `--color-texto` | `#1f2a44` | Texto, hero y pie |
| `--color-fondo-pagina` | `#f1f6fa` | Fondo de página |
| `--color-acento` | `#1d4ed8` | Aro de foco |
| `--color-texto-suave` | `#4b5563` | Texto secundario |

Tipografías: **Libre Baskerville** (títulos) y **Work Sans** (texto), ambas de Google Fonts. Texto base de 1.125rem (18 px).

## Componentes reutilizables identificados
- `boton` (`--primario`, `--secundario`, `--ayuda`, `--redondo`, `--completo`)
- `tarjeta` y `tarjeta-vacante`
- `etiqueta-estatus` (enviada, revision, aceptada, rechazada, activa, deshabilitada)
- `campo-formulario` (+ `grupo-campos` con fieldset/legend)
- `selector-rol`
- `buscador` y `filtros`
- `fila-registro` (solicitud y vacante de empresa)
- `dato-vacante`, `lista-check`, `aviso-llamar`
- `fila-solicitud`, `fila-vacante`, `tarjeta-candidato`, `avatar`, `modal`, `aviso-exito`
- `encabezado` / `nav-principal`, `pie`, `boton-ayuda`

## Capturas
- [ ] index.html en celular
- [ ] index.html en escritorio
- [ ] Lighthouse – Accessibility (≥ 90)

## Publicación
Sitio en Vercel: _pega aquí la URL_
