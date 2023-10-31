# Book Manager app
Sample CRUD application

# API Documentation
Welcome to the documentation for the nodejs-express API!

## Table of Contents
- [How to start in local](#How-to-start-in-local)
- [API Endpoints](#api-endpoints)
- [Deployment details](#Deployment-details)

## How to start in local
node version 18.0.0
1. git clone https://github.com/ajaythekkiniyil/book-manager-server.git
2. npm install
3. npm start

## API Endpoints

### `/create-book`

- **Description**: Endpoint to create new book.
- **HTTP Method**: POST
- **Request Parameters**:
  - `title` (string): [title of book]
  - `author` (string): [author name]
  - `summary` (string): [description of book]
  example: 
  {
    "title": "ahifsdfsd",
    "author": "ahidsfsdf",
    "summary": ""
  }
- **Response sample**:
    {
        "status": true,
        "message": "new book added"
    }

### `/get-all-books`

- **Description**: Endpoint to get all books.
- **HTTP Method**: GET
- **Response sample**:
    [
        {
            "_id": "65407f1bcced669ae558be2b",
            "title": "new book 1",
            "author": "author 1",
            "__v": 0,
            "summary": "summary 1"
        },
        {
            "_id": "65407f21cced669ae558be2e",
            "title": "new book 2",
            "author": "author 2",
            "summary": "summary 2",
            "__v": 0
        },
    }

### `/get-book-details/bookId`

- **Description**: Endpoint to get single books.
- **HTTP Method**: GET
- **Url params**: 
    - `bookId`: [unique id of book]
- **Response sample**:
    {
    "status": true,
        "book": {
            "_id": "65407f1bcced669ae558be2b",
            "title": "new book 1",
            "author": "author 1",
            "__v": 0,
            "summary": "summary 1"
        }
    }

### `/update-book/bookId`

- **Description**: Endpoint to update single books.
- **HTTP Method**: PUT
- **Url params**: 
    - `bookId`: [unique id of book]
- **Request Parameters**:
  - `title` (string): [updated title of book]
  - `author` (string): [updated author name]
  - `summary` (string): [updated description of book]
- **Response sample**:
    {
        "status": true,
        "message": "book updated"
    }

### `/delete-book/bookId`

- **Description**: Endpoint to delete single books.
- **HTTP Method**: DELETE
- **Url params**: 
    - `bookId`: [unique id of book]
- **Response sample**:
    {
        "status": true,
        "message": "book deleted"
    }

## Deployment details
  **express api**
    - created a EC2 ubuntu instance
    - using nvm node installed
    - mongodb installed
    - git clone https://github.com/ajaythekkiniyil/book-manager-server.git 
    - cd git clone book-manager-server/ 
    - npm install
    - npm start
    - Installing PM2 (a process manager for Node.js applications) -> sudo npm install pm2@latest -g
    - pm2 start index.js - (express server started on port 3000)
    - Setting Up Nginx as a Reverse Proxy Server
    
    - url restApi -> http://13.51.235.247/

  **frontend app**
    - 