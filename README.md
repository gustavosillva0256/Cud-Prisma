# Project Overview

This project is a TypeScript-based API that manages users and posts. It employs several modern technologies to create a robust and maintainable codebase. This document provides an overview of the technologies used, the project structure, and the architectural principles followed.

## Technologies

- **TypeScript**: A statically typed superset of JavaScript that enhances development with type safety and modern JavaScript features.
- **Express**: A web application framework for Node.js that simplifies building web and mobile applications.
- **Prisma**: An ORM (Object-Relational Mapping) tool for Node.js and TypeScript that streamlines database interactions.
- **Zod**: A TypeScript-first schema declaration and validation library that ensures type-safe validation of data structures.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing in Express applications.
- **Helmet**: A middleware that helps secure Express applications by setting various HTTP headers.
- **tsx**: A runtime for executing TypeScript directly.
- **Watch**: A utility for watching file changes and automatically running scripts.

## Project Structure

The project is organized into the following directories and files:



### Directory Breakdown

- **`controllers/`**: Contains controllers that handle incoming HTTP requests and responses. Controllers interact with services to process business logic.
  - `userController.ts`
  - `postController.ts`

- **`models/`**: Defines data models and database interactions using Prisma. Encapsulates CRUD operations for users and posts.
  - `userModel.ts`
  - `postModel.ts`

- **`services/`**: Implements business logic and interacts with models. Used by controllers to perform operations.
  - `userService.ts`
  - `postService.ts`

- **`validations/`**: Utilizes Zod for schema validation to ensure data integrity before processing.
  - `userValidation.ts`
  - `postValidation.ts`

- **`routes/`**: Defines API routes and maps them to controller functions. Sets up endpoints for users and posts.
  - `userRoutes.ts`
  - `postRoutes.ts`

- **`interfaces/`**: Contains TypeScript interfaces that define the shapes of data used in the application.
  - `IUser.ts`
  - `IPost.ts`

- **`middlewares/`**: Includes middleware functions for various purposes, such as error handling and security.
  - `errorMiddleware.ts`

- **`prisma/`**: Configures and initializes the Prisma client for database operations.
  - `client.ts`

- **`server/`**: The entry point of the application. Sets up the Express server, routes, and middleware.


- estructure:
- src/
├── controllers/
│   ├── userController.ts
│   └── postController.ts
├── models/
│   ├── userModel.ts
│   └── postModel.ts
├── services/
│   ├── userService.ts
│   └── postService.ts
├── validations/
│   ├── userValidation.ts
│   └── postValidation.ts
├── routes/
│   ├── userRoutes.ts
│   └── postRoutes.ts
├── interfaces/
│   ├── IUser.ts
│   └── IPost.ts
├── middlewares/
│   └── errorMiddleware.ts
├──server/
|  └── server.ts
├── prisma/
│   └── client.ts


## Dependencies

The project relies on the following development dependencies:

- **`@types/cors`**: TypeScript types for the `cors` package.
- **`@types/express`**: TypeScript types for the `express` package.
- **`@types/node`**: TypeScript types for Node.js.
- **`cors`**: Middleware for enabling CORS in Express applications.
- **`express`**: Web application framework for Node.js.
- **`tsx`**: Runtime for executing TypeScript directly.
- **`typescript`**: TypeScript compiler.
- **`watch`**: Utility for watching file changes.
- **`zod`**: Schema validation library for TypeScript.
- **`helmet`**: Middleware for securing Express applications with various HTTP headers.

## Architecture

The architecture of this project follows the principles of separation of concerns and modularity. Here are some key aspects:

1. **Separation of Concerns**: The project is divided into clear layers (controllers, services, models) that handle distinct responsibilities. This separation makes the codebase easier to manage and test.

2. **Validation**: Data validation is handled using Zod, ensuring that the data conforms to expected formats before it is processed or stored.

3. **Error Handling**: A dedicated middleware handles errors centrally, providing a consistent response format for any errors that occur.

4. **Type Safety**: TypeScript is used throughout the project to enforce type safety and catch potential issues at compile time rather than runtime.

5. **Security**: Helmet is used to set various HTTP headers for security, helping to protect the application from common web vulnerabilities.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install all necessary packages.
2. **Configure Database**: Set up your Prisma database configuration in `prisma/client.ts` and run the required migrations.
3. **Run the Server**: Start the application using `npm start`.

## Running Tests

Add and run tests using `npm test` to ensure that the application behaves as expected.

## Contribution

Contributions are welcome! You can submit issues, feature requests, or pull requests to improve the project.

---

For any questions or support, please contact [your contact information].

