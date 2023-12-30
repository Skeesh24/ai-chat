# MERN Stack AI Chatbot

## Overview
This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI

It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.

It will be completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.

## Setup

### Requirements

1. node.js
2. typescript

### Installation

Clone the repository:

```bash
git clone https://github.com/skeesh24/workstation.git
```

## Environment

Create an .env file to set the application configuration. You need to add the following fields to it:

3. "MONGO_USER" secret data for accessing the mongodb instance (profile name)
4. "MONGO_HOST" secret data for accessing the mongodb instance (uri to locate db)
5. "MONGO_DATABASE" secret data to access the mongodb instance (database name)
6. "MONGO_COLLECTION" secret data to access the mongodb instance (collection name)
7. "MONGO_PASSWORD" secret data for accessing the mongodb instance (password to access db)
## Running the Software

1. Navigate to the root directory. Execute the software:
```bash
npm run dev
```
