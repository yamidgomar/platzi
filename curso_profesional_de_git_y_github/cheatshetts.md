## Comandos basicos:

* **git init:** iniciamos el repositorio, creamos el repositorio (./git).

* **git status:** lo usamos para saber si tenemos un archivo añadido o borrado en nuestro proyecto, para saber en la rama en la que estamos y si tenemos commits.

* **git add:** es para añadir un archivo a nuestra rama seguidamente ponemos entre comillas el nombre de nuestro archivo o poner un punto para añadir todos los archios de nuestra carpeta.

* **git rm:** lo usamos para borrar un archivo que hayamos añadido, para eliminarlo por completo de nuestra rama usamosgit rm --cached.

* **git commit:** se usa para añadir un commit a nuestra rama, también podemos ponerle un -m seguidamente ponemos entre comillas nuestro ensaje.

* **git config:** muestra configuraciones de git también podemos usar –list para mostrar la configuración por defecto de nuestro git y si añadimos --show-origin inhales nos muestra las configuraciones guardadas y su ubicación.

* **git config --global user.name:** cambia de manera global el nombre del usuario, seguidamente ponemos entre comillas nuestro nombre.

* **git config --global user.email:** cambia de manera global el email del usuario, seguidamente ponemos entre comillas nuestro nombre.

* **git log:** se usa para ver la historia de nuestros archivos, los commits, el usuario que lo cambió, cuando se realizaron los cambios, etc. seguidamente ponemos el nombre de nuestro archivo.

## Listar, crear, eliminar ramas:

* **git branch:** Lista las ramas locales que existen la rama master es la rama principal donde se encuentra el estado final del proyecto.

* **git branch [rama]:** Este comando crea una rama con el nombre que elijas.

* **git branch -d [rama]:**  elimina una rama.

* **git branch -v:** Muestra el último commit en cada rama.


## Moverse entre ramas:

* **git checkout experimento:** Si hemos nombrado a la rama “experimento”, este comando nos coloca en esa rama.

* **git checkout -b [rama]:** Crea una rama y hace checkout directamente en la misma.


## Unir dos ramas:

* **git merge [rama]:** Unir una rama a la rama actual.

* **git status:**

* **git mv:** recomendable para renombrar archivos o cambiarles la ubicacion. 

* **git diff**: Se supone muestra las diferencias entre los cambios que estan en staging y los que aun no se han añadido.

* **git diff #commit1 #commit2 :** Nos muestra la diferencia entre las dos versiones de los commits.

* **git log --stat:** Muestra los cambios especificos en cuales archivos apartir del commit. Ejm:
    commit 78ccefd95aaf0ccede94b7f245612644eb1528a3
    Author: Yamid Gonzalez <yamidgm@gmail.com>
    Date:   Mon Sep 14 22:32:20 2020 -0500    

        agregado el script 
        index.html | 1 + 
        1 file changed, 1 insertion(+)

    commit 9b911f6366bbb248c68084485bd850bd96fe0e43
    Author: Yamid Gonzalez <yamidgm@gmail.com>
    Date:   Mon Sep 14 22:19:39 2020 -0500    

        mas cambios 
    script.js | 3 +++
    1 file changed, 3 insertions(+)



