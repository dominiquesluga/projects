
# Backend

A Java-based backend built with Spring Boot, utilizing Gradle for build automation. It provides RESTful APIs with Spring WebMVC, handles data persistence with Spring Data JPA, and includes security features with Spring Security and OAuth2. The application is designed to run on port 8080 and uses SQLite as the database.

## Versions

- **Java:** 25
- **Spring Boot:** 4.1.1
- **Gradle:** 9.7.1 (wrapper)
- **Dependency management plugin:** 1.1.7
- **Main dependencies:** Spring WebMVC, Spring Data JPA, Spring Security, OAuth2 Resource Server
- **Other dependencies:** SQLite JDBC 3.53.2.1, Lombok 1.18.46, Spring Boot DevTools
- **Default port:** 8080

Run from the `backend` directory with `./gradlew bootRun` (or run `BackendApplication` from IntelliJ).

**Database setup is still pending:** SQLite’s JDBC driver is included, but there’s no datasource URL in `application.properties` yet. Because JPA is enabled, the application currently fails to start until a datasource is configured.

