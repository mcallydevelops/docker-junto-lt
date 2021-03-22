FROM postgres:alpine

EXPOSE 5432:5432

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB workshop

COPY grocery-db-init.sh /docker-entrypoint-initdb.d/