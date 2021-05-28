<div style="text-align: justify">  

# Proyecto: Markdown Links

## Autora : Alejandra Olea 

## Status del proyecto : En desarrollo.

## Objetivo: 
* Usando [Node.js] crear una herramienta de línea de comando (CLI) así como una librería en JavaScript para ser ejecutados con Node.js que analice archivos en formato `Markdown`, verifique los links que contengan y reporte estadísticas.

## Usuarios: 
* Quienes deseen verificar links desde un documento  `Markdown`.

### La herramienta ofrece dos alternativas de uso:

### 1) **  JavaScript API **  Módulo puede importarse en otros scripts de Node.js con la siguiente interfaz:
```sh
* mdLinks(path, options).  options = true or false.
Con `validate:false` :
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
```

Con `validate:true` :
```sh
* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.
```

### 2) **CLI.** Usando la interfaz de Línea de Comando de la terminal con las siguientes opciones:
```sh
### md-links <path-to-file> [options]
### [options] =
### -- validate:  Petición HTTP para averiguar si el link funciona.  Output fail or ok.
* $ md-links ./some/example.md --validate
* ./some/example.md http://algo.com/2/3/ ok 200.
```

### --stats: Texto con estadísticas básicas sobre los links.
```sh
* $ md-links ./some/example.md --stats
* Total: 3
* Unique: 3
```

### -- validate --stats: Ambos resultados de la validación.
```sh
* $ md-links ./some/example.md --stats --validate
* Total: 3
* Unique: 3
* Broken: 1
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

### Diagrama de flujo

<img src="md-flow.png" alt="paper-image" width="500"/>


<!-- </div> -->








