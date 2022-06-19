# Backend Docs for Lightfeather Assessment

# Lightfeather Backend API Endpoints

**BACKEND API URL:**
[http://localhost:3300](http://localhost:3300)

**All endpoints based off of the root URL provided above.**

# Open Routes

**Getting all users:**
GET request to:
[http://localhost:3300/api/users](http://localhost:3300/api/users)

**Registering a User**
POST request to:
[http://localhost:3300/api/users](http://localhost:3300/api/users)

_The object should follow this shape:_
{
firstName: string
lastName: string
email: string
phoneNumber: string
supervisor: string
}
