# Volver en el tiempo en nuestro repositorio utilizando reset y checkout

El comando git checkout + ID del commit nos permite viajar en el tiempo. Podemos volver a cualquier versión anterior de un archivo específico o incluso del proyecto entero. Esta también es la forma de crear ramas y movernos entre ellas.

También hay una forma de hacerlo un poco más “ruda”: usando el comando git reset. En este caso, no solo “volvemos en el tiempo”, sino que borramos los cambios que hicimos después de este commit.

Hay dos formas de usar git reset: con el argumento --hard, borrando toda la información que tengamos en el área de staging (y perdiendo todo para siempre). O, un poco más seguro, con el argumento --soft, que mantiene allí los archivos del área de staging para que podamos aplicar nuestros últimos cambios pero desde un commit anterior.


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



