# Que es el staging y los repositorios ciclo basico.

* git init >>  se crea area en stagging >> area en memoria ram donde al principio se van agregando los cambios; Area de preparacion 
antes de enviar los cambios al repositorio y se crea el repositorio(./git).

* git add ARCHIVO >> el archivo pasa a stagging esperando que lo pasemos al repositorio.a menos que lo removamos con git rm.

* con git commit -m "mensaje" el archivo pasa al repositorio, llamadopor defecto master donde estan todos los cambios.

## Estados del archivo:
* ontracked aun no se a dado add, esta sin rastrear.
* Tracked has dado add, es decir lo estamos rastreando.Aqui ya hace parte de staging.
* Despues de aplicar _git commit -m "mensaje"_, pasa de estar trackeado en stagging a trackeado en el repositorio.
* Cuando el archivo llega al repositorio se les agrega un numero largo que son los codigos del commit,
  Ejm: e79d59f295b6ee1f7454f940fdbca7b7a2de57f3.

* Cuando quieres traerte un cambio en el repositorio a mi carpeta, vamos a una rama y colcamos git checkout y traemos un cambio de la carpeta o archivo.

* RAMA: romper en pedazos, en diferentes lineas de tiempo el codigo y luego volverla unir al final.







