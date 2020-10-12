# configurar llaves ssh en github.

## 1º Paso: Generar llave ssh.

ssh-keygen -t rsa -b 4096 -C "tu@email.com"

## 2º  Encender el "servidor" de llaves SSH de tu computadora:

eval $(ssh-agent -s)

## Añadir tu llave SSH a este "servidor":

ssh-add ruta-donde-guardaste-tu-llave-privada
