FROM mysql:latest

COPY docker/db/InitMegahit.sql /tmp

CMD [ "mysqld", "--init-file=/tmp/InitMegahit.sql" ]

# Useful commands:
# docker build -t megahitdb .