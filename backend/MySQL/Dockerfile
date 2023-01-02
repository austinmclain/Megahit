FROM mysql

COPY ./InitMegahit.sql /tmp

CMD [ "mysqld", "--init-file=/tmp/InitMegahit.sql" ]

# Useful commands:
# docker build -t megahitdb .