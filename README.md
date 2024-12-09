# Getting Started

In the project directory, you can run:
## Backend
### 1. Setup Instructions
1. Install Node.js and MongoDB on your system.
2. Clone the repository and navigate to the project directory.
3. Install dependencies by running:
```npm install```
4. Start the MongoDB server.
5. Run the application:
```node server.js```
> The server will run on http://localhost:5000.

### 2. Environment Configuration
MongoDB URI
The MongoDB connection is defined as:
```const mongoURI = 'mongodb://localhost:27017/PasswordGenerator';```

You can replace 'mongodb://localhost:27017/PasswordGenerator' with your MongoDB URI if running a remote database.
