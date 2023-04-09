# My Webapp

My Webapp is a full-stack web application built with Next.js for the client-side and Java Spring Boot and Spring Security for the server-side. The application is designed to provide users with an easy and secure way to manage their data.

## Installation

To install and run the application, follow these steps:

1. Clone the repository to your local machine
2. Navigate to the client directory and create a .env file with the following variables:

```
BACKEND_API=
JWT_SECRET=
```

3. In the server directory, configure your database in the `applications.properties` file. We used Postgres in this example.
4. Make sure that the JWT Token, in your `env`, matches the one on the Spring Server.
5. Run the Java application by running `./mvnw` in the server directory
6. Navigate to the client directory and run `npm install` to install the required packages
7. Run the client-side by running `npm run dev`

## Technologies Used

- Next.js
- Java Spring Boot
- Spring Security
- Postgres
- Tailwind CSS

## Features

- Secure authentication using Spring Security
- Easy database configuration
- Responsive and modern UI design with Tailwind CSS
  -- Fast and efficient client-side rendering with Next.js
- Easy configuration with environment variables
- Robust error handling and logging

## Contributing

Contributions to the project are welcome and appreciated. If you find a bug or have a feature request, please open an issue. If you would like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
