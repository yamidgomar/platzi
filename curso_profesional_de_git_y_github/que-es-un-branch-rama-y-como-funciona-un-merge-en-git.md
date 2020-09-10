# Que es un branch rama y como funciona un merge en git:

Git es una base de datos muy precisa con todos los cambios y crecimiento que ha tenido nuestro proyecto. Los commits son la única forma de tener un registro de los cambios. Pero las ramas amplifican mucho más el potencial de Git.

Todos los commits se aplican sobre una rama. Por defecto, siempre empezamos en la rama master (pero puedes cambiarle el nombre si no te gusta) y creamos nuevas ramas, a partir de esta, para crear flujos de trabajo independientes.

Crear una nueva rama se trata de copiar un commit (de cualquier rama), pasarlo a otro lado (a otra rama) y continuar el trabajo de una parte específica de nuestro proyecto sin afectar el flujo de trabajo principal (que continúa en la rama master o la rama principal).

Los equipos de desarrollo tienen un estándar: Todo lo que esté en la rama master va a producción, las nuevas features, características y experimentos van en una rama “development” (para unirse a master cuando estén definitivamente listas) y los issues o errores se solucionan en una rama “hotfix” para unirse a master tan pronto como sea posible.

Crear una nueva rama lo conocemos como Checkout. Unir dos ramas lo conocemos como Merge.

Podemos crear todas las ramas y commits que queramos. De hecho, podemos aprovechar el registro de cambios de Git para crear ramas, traer versiones viejas del código, arreglarlas y combinarlas de nuevo para mejorar el proyecto.

Solo ten en cuenta que combinar estas ramas (sí, hacer “merge”) puede generar conflictos. Algunos archivos pueden ser diferentes en ambas ramas. Git es muy inteligente y puede intentar unir estos cambios automáticamente, pero no siempre funciona. En algunos casos, somos nosotros los que debemos resolver estos conflictos “a mano”.


Una rama representa una línea independiente de desarrollo, es como crear un nuevo área de trabajo con su área de ensayo y su historial. Los nuevos commits se registrarán de forma independiente en el historial la rama, lo que se conoce como forks en el historial del proyecto (término muy empleado en github).

Listar, crear y manejar ramas, git branch
git branch
Este comando lista las ramas locales que existen. La rama en la que estás trabajando actualmente se señala con un asterisco *. La rama master es la rama con la que se comienza en cualquier proyecto, y es la que se utiliza como rama principal donde se encuentra el proyecto en su estado final.

git branch [rama]
Este comando crea una rama con el nombre que elijas.

git checkout experimento
Si hemos nombrado a la rama “experimento”, este comando nos sitúa en esa rama.

Si estábamos en la rama master, teníamos archivos modificados sin añadir o añadidos en el área de ensayo, y nos situamos en la rama experimento con git checkout, éstos cambios se verán en la rama experimento. Hasta que no se haga un commit, los cambios no pertenecerán a ninguna rama.

git branch -v
Este comando muestra el último commit en cada rama.

* git checkout -b [rama]
Este código crea una rama y hace checkout directamente en la misma. Es el código que se suele usar ya que cuando se crea una rama normalmente se suele hacer checkout en ella.

Es bastante frecuente crear una rama, hacer los cambios que sean necesarios, unirla a una rama principal y después eliminar la rama que se había creado. De esta forma si has estado haciendo cambios que realmente no han resultado ser buenos puedes deshacerte de la rama con facilidad.

* git branch -d [rama]
Este código elimina una rama.

Unir una rama a la rama actual, git merge
Un a vez que has trabajado en una rama, lo normal es querer incorporar los cambios a la rama principal. Para unir una rama a la actual se utiliza el siguiente comando:


* git merge
Cuando sólo se han añadido o eliminado archivos en una rama, es fácil unirla a la principal. El resultado simplemente será la suma o resta de esos archivos en la principal. Cuando se hacen modificaciones en archivos, incluyendo cambios en los nombres de los archivos, git detecta esos cambios y los adapta automáticamente, pero a veces surgen conflictos.

