# Använd en officiell Java runtime som föräldraimage
FROM openjdk:17-alpine

# Sätt arbetsmappen i containern
WORKDIR /app

# Kopiera maven-executable till containern
COPY mvnw .

COPY .mvn .mvn

# Kopiera pom.xml och källkoden
COPY pom.xml .

COPY src src

# Bygg applikationen
RUN ./mvnw package -DskipTests

# Kör applikationen
CMD ["java", "-jar", "target/spring_book_api-0.0.1-SNAPSHOT.jar"]
