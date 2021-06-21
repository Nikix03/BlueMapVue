export default {
    pageTitle: "BlueMap - {map}",
    menu: {
        title: "Menu",
        tooltip: "Menu"
    },
    maps: {
        title: "Mapas",
        button: "Mapa",
        tooltip: "Lista-Mapa"
    },
    markers: {
        title: "Marcadores",
        button: "Marcadores",
        tooltip: "Lista-Marcadores",
        marker: "Marcador | Marcadores",
        markerSet: "Marcador-set | Marcador-sets"
    },
    settings: {
        title: "Opciones",
        button: "        title: "Opciones",
"
    },
    goFullscreen: {
        button: "Abrir en Pantalla Completa"
    },
    resetCamera: {
        button: "Reinicia la Camera",
        tooltip: "Reinicia la Camera de Posicion"
    },
    updateMap: {
        button: "Actualiza el mapa",
        tooltip: "Limpia el Cache"
    },
    lighting: {
        title: "Lighting",
        dayNightSwitch: {
            tooltip: "Dia/Noche"
        },
        sunlight: "Luz Del Sol",
        ambientLight: "Luces de Ambiente"
    },
    resolucion: {
        title: "Resolucion",
        high: "Alta (SSAA, x2)",
        normal: "Normal (Nativo, x1)",
        low: "Baja (Mejora, x0.5)"
    },
    freeFlightControls: {
        title: "Controles de Vuelo",
        mouseSensitivity: "Sensibilidad del Mouse",
        invertMouseY: "invierte el Mouse Y"
    },
    renderDistance: {
        title: "Rendericacion de Distancias",
        hiresLayer: "Capa superior",
        lowersLayer: "Capas inferiores"
    },
    theme: {
        title: "Tema",
        default: "Normal (System/Browser)",
        dark: "Oscuro",
        light: "Claro"
    },
    debug: {
        button: "Debug"
    },
    resetAllSettings: {
        button: "Reinicia todas las configuraciones"
    },
    players: {
        title: "Jugadores",
        tooltip: "Lista-jugadores"
    },
    compass: {
        tooltip: "Brujula / Mirando al norte"
    },
    controls: {
        title: "mirar / controles",
        perspective: {
            button: "Perspectiva",
            tooltip: "Vista-Perspectiva"
        },
        flatView: {
            button: "Plano",
            tooltip: "Primerplano / Vista-Plana",
        },
        freeFlight: {
            button: "Modo-Vuelo",
            tooltip: "Modo-vuelo / Modo Espectator"
        }
    },
    language: {
        title: "Idioma",
    },
    blockTooltip: {
        block: "Bloques",
        position: "Posicion",
        chunk: "Territorio",
        region: {
            region: "Region",
            file: "Archivo"
        },
        light: {
            light: "Luz",
            sun: "SOL",
            block: "Bloque",
        }
    },
    info: {
        title: "Informacion",
        button: "Informacion",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Mouse-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>left-click</kbd> + drag</td></tr>
		<tr><th>zoom</th><td><kbd>mousewheel</kbd> (scroll)</td></tr>
		<tr><th>rotate / tilt</th><td><kbd>right-click</kbd> + drag</td></tr>
	</table>
</p>
<p>
	<h2>Keyboard-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>wasd</kbd> / <kbd>arrow-keys</kbd></td></tr>
		<tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>rotate / tilt</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Touch-Controls:</h2>
	<table>
		<tr><th>move</th><td>touch + drag</td></tr>
		<tr><th>zoom</th><td>touch with two fingers + pinch</td></tr>
		<tr><th>rotate / tilt</th><td>touch with two fingers + rotate / move up/down</td></tr>
	</table>
</p>
<br><hr>
<p>
	This map has been generated with &#9829; using <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
}
