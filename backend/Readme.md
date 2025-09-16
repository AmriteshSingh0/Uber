# User Registration API Documentation

## Endpoint

`POST /users/register`

## Description

Registers a new user in the system. On successful registration, returns a JWT token and the created user object.

## Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

### Field Requirements

- `fullname.firstname` (string, required, min 3 chars)
- `fullname.lastname` (string, optional, min 3 chars if provided)
- `email` (string, required, valid email)
- `password` (string, required, min 6 chars)

## Responses

### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

### Example Request

```sh
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }'



# Get Fare API Documentation

## Endpoint

`GET /rides/get-fare`

## Description

Calculates and returns the estimated fare for a ride based on the pickup and destination addresses. The fare is calculated for different vehicle types: auto, car, and moto.

## Request Query Parameters

Send a GET request with the following query parameters:

- `pickup` (string, required, min 3 chars): The pickup address.
- `destination` (string, required, min 3 chars): The destination address.

### Example

```
GET /rides/get-fare?pickup=MG%20Road,%20Bangalore&destination=Koramangala,%20Bangalore
```

## Responses

### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "auto": 45,
    "car": 70,
    "moto": 32
  }
  ```

### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid pickup address",
        "param": "pickup",
        "location": "query"
      }
    ]
  }
  ```

### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "message": "Internal server error"
  }
  ```

## Example Request

```sh
curl -X GET "http://localhost:4000/rides/get-fare?pickup=MG%20Road,%20Bangalore&destination=Koramangala,%20Bangalore" \
  -H "Authorization: Bearer <your_token>"
```