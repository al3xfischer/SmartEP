FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=smarteppw

COPY setup.sql /docker-entrypoint-initdb.d/