**git remote add origin <https-url>:**  Establecer un origen remoto.

**git remote -v :** verifica la existencia del origen remoto.

**git config -l:** Permite ver los parametros de configuracion.

**git push origin master :** fusiona una copia del master local con el remoto.

**git pull origin master :** fusiona una copia del master remmoto con el local.

**git config --global user.email "email" :** Permite configurar el valor de la variable user.email en la configuracion.

**git remote set-url origin <ssh-url> :** Configura a git para conectar el repositorio remoto atraves de ssh(En lugar de https).  

 ## SSH GENERACION DE CLAVES PUBLICA Y PRIVADA

**ssh-keygen -t rsa -b 4096 -C "email" :** Generacion de cifrados de clave publica y privada.

**eval(ssh-agent -s) :** Comprueba si el sevicio de cifrado esta activo.

**ssh-add rutaid_rsa :**:Informacion al sistema de la ubicacion del archivo que contiene la llave privada.

**Nota:** Nunca pasar la llave privada solo la publica.


