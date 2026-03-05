
# se demarrer sur un server nginx
FROM nginx:alpine

# supprime les fichiers html par defaud dans le server nginx qu'on vient de créer
RUN rm -rf /usr/share/nginx/html/*

# copie mon projet dans le dossier cible
COPY . /usr/share/nginx/html

# nginx ecoute sur le port 80
EXPOSE 80

