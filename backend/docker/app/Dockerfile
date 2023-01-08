FROM maven:latest

WORKDIR ../../.
COPY . .
RUN mvn clean package -DskipTests -q

CMD mvn spring-boot:run