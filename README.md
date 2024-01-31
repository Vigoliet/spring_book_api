# Spring MySQL Book API

## Before you get started

### Application.properties
Make sure you create the `application.properties` file under the path `src/main/resources/application.properties` and add the following:
```properties
#spring.datasource.url=jdbc:mysql://localhost:3306/spring_book_api
spring.datasource.url=jdbc:mysql://db:3306/mydatabase
spring.datasource.username=myuser
spring.datasource.password=mypassword
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

```
>Depending on how you want to run the program choose which datasource to use and comment out the other one.

### Docker-compose.yml
Make sure you create the `docker-compose.yml` in the root source of the project and add the following:
```yml
version: '3,8' 

services:
  app:
    build: .
    ports:
      - 8080:8080
    depends_on:
      - db
    networks:
      - mynetwork
  db:
    image: mysql:8
    environment:
      MYSQL_DATABASE: mydatabase
      MYSQL_USER: myuser
      MYSQL_PASSWORD: mypassword
      MYSQL_ROOT_PASSWORD: rootpassword
    ports:
      - "3306:3306"
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - mynetwork

volumes:
  db-data:

networks:
  mynetwork:
    driver: bridge

```

### Dockerfile
Make sure you create the `Dockerfile` file the root source of the project and add the following:
```Dockerfile
FROM openjdk:17-alpine

WORKDIR /app

COPY mvnw .

COPY .mvn .mvn

COPY pom.xml .

COPY src src

RUN ./mvnw package -DskipTests

CMD ["java", "-jar", "target/spring_book_api-0.0.1-SNAPSHOT.jar"]
    
```

Now make sure to run the two following commands:
```terminal
docker-compose build
docker-compose up
```

This is if you want to run the program with docker. If you want to run it without docker then you can just run the program as you normally would.
And choose the other datasource in the `application.properties` file.

### Swagger

If you want to access the endpoint without using Postman you can use the following link:
http://localhost:8080/swagger-ui/index.html#/


### Front-end
If you want to add a book with front-end you can use the following link:
http://localhost:8080/

This code is not using the API, but instead it's using the database with JS.
You can find this code in the static folder. Path: 
1. `src/main/resources/static/index.html` 
2. `src/main/resources/static/script.js` 
3. `src/main/resources/static/styles.css`

