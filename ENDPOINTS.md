# Documentación de endpoints

## Información general

La API se ejecuta por defecto en:

```text
https://api-dont-pet-me-pwa-production.up.railway.app/
```

Todas las respuestas tienen formato `JSON`.

Las imágenes se sirven desde:

```text
GET /imagenes/<ruta-de-la-imagen>
```

## GET `/api/historia`

Devuelve los capítulos de la historia.

### Respuesta `200 OK`

```json
[
  {
    "imagen": "/imagenes/historia/picnic.jpeg",
    "titulo": "El picnic",
    "descripcion": "El bosque era un refugio tranquilo y lleno de rincones para explorar. Una tarde soleada, Mochi se alejó un poco de su madriguera siguiendo..."
  },
  {
    "imagen": "/imagenes/historia/habitacion.jpeg",
    "titulo": "En la habitación",
    "descripcion": "Mochi despertó con el cuerpo adolorido y el corazón acelerado. Los barrotes seguían ahí, fríos y reales. Al otro lado se veía un cuarto enorme, lleno de luces..."
  },
  {
    "imagen": "/imagenes/historia/pasillo.jpeg",
    "titulo": "En el pasillo",
    "descripcion": "El pasillo era largo y estrecho, y a Mochi le pareció aún más grande que el cuarto. A lo lejos se veía una luz cálida que venía de la sala."
  }
]
```

### Campos

| Campo           | Tipo       | Descripción                     |
| --------------- | ---------- | -------------------------------- |
| `imagen`      | `string` | Ruta de la imagen del capítulo. |
| `titulo`      | `string` | Título del capítulo.           |
| `descripcion` | `string` | Descripción del capítulo.      |

## GET `/api/personajes`

Devuelve los personajes de la historia.

### Respuesta `200 OK`

```json
[
  {
    "imagen": "/imagenes/personajes/mochi.png",
    "titulo": "Mochi",
    "rol": "Protagonista",
    "imagenes": []
  },
  {
    "imagen": "/imagenes/personajes/trufa.png",
    "titulo": "Trufa",
    "rol": "Hermana de Mochi",
    "imagenes": []
  }
]
```

### Campos

| Campo        | Tipo         | Descripción                                  |
| ------------ | ------------ | --------------------------------------------- |
| `imagen`   | `string`   | Ruta de la imagen principal del personaje.    |
| `titulo`   | `string`   | Nombre del personaje.                         |
| `rol`      | `string`   | Rol del personaje en la historia.             |
| `imagenes` | `string[]` | Rutas de imágenes adicionales del personaje. |

## GET `/api/niveles`

Devuelve los niveles disponibles.

### Respuesta `200 OK`

```json
[
  {
    "nombre": "Habitación",
    "imagen": "/imagenes/niveles/nivel-1-habitacion.png"
  },
  {
    "nombre": "Pasillo",
    "imagen": "/imagenes/niveles/nivel-2-pasillo.png"
  }
]
```

### Campos

| Campo      | Tipo       | Descripción                 |
| ---------- | ---------- | ---------------------------- |
| `nombre` | `string` | Nombre del nivel.            |
| `imagen` | `string` | Ruta de la imagen del nivel. |

## Ejemplo de consumo

```javascript
const respuesta = await fetch('http://localhost:3000/api/niveles');
const niveles = await respuesta.json();
console.log(niveles);
```

## Endpoint inexistente

Si se solicita una ruta que no existe, la API responde con `404 Not Found`:

```json
{
  "error": "Endpoint no encontrado"
}
```
