# Backend Docs for Lightfeather Assessment

# Lightfeather Backend API Endpoints

**BACKEND API URL:**
[https://hr-bw3.herokuapp.com/](https://hr-bw3.herokuapp.com/)

**All endpoints based off of the root URL provided above.**

# Open Routes

**Getting all users:**
GET request to:
[https://hr-bw3.herokuapp.com/api/users](https://hr-bw3.herokuapp.com/api/users)

**Registering a User**
POST request to:
[https://hr-bw3.herokuapp.com/api/auth/register](https://hr-bw3.herokuapp.com/api/auth/register)

_The object should follow this shape:_

      {
            "username": "test1",
            "password": "somepassword"
      }

_Note:_
Usernames are **unique**.

# PROTECTED ROUTES

> Authentication required <------------------
>
> Protected routes require an authorization token which is generated for you when you log in. If you're using Postman or Insomnia to test endpoints, you will need to add that authorization key that is returned to you when you hit the login route with a successful login.

# **USER LOGIN:**

**Required credentials:**
_Username
Password_

**POST request to: /api/auth/login**
[https://hr-bw3.herokuapp.com/api/auth/login](https://hr-bw3.herokuapp.com/api/auth/login)

# JOURNALS

**GET request to: /api/journals/**
This route will get user entries for **ALL** of the journal entries, either weekly or daily, regardless of the user. Would be for something like an administrator role. (This route is not best practice in a real world scenario, or in a dream scenario.)

[https://hr-bw3.herokuapp.com/api/journals/all](https://hr-bw3.herokuapp.com/api/journals/:type/:id)

**GET request to: /api/journals/:id**
This route will get user entries for **A SINGLE** journal entry of any type for any user. (Same caveat.)
[https://hr-bw3.herokuapp.com/api/journals/:id](https://hr-bw3.herokuapp.com/api/journals/:id)
where `id` is the selected entry you want to view or edit.

## CREATING A JOURNAL

_This route will automatically grab the USER ID for the currently logged in user._

**POST request to: /api/journals**
This route will allow you to create and post journal entries or either type.
[https://hr-bw3.herokuapp.com/api/journals](https://hr-bw3.herokuapp.com/api/journals/)

_The object should follow this shape:_

      {
            "journal_content": "test content",
            "journal_title": "entry title",
            "journal_type": "weekly", (or daily)
            "journal_date": 1919394
      }

For journal date, determine your best format for doing that. You can use `moment.js`, or `Date.now()` with formatting.

## VIEWING LOGGED IN USERS JOURNALS

**GET request to: /api/journals/mine**
This route will let the **currently logged in user** view their journals. Useful for editing journal entries, displaying records, etc.
http://localhost:3300/api/journals/mine

## UPDATING A JOURNAL

**PUT request to: /api/journals/:id**
This route will allow you to **UPDATE** journal entries or either type.
[https://hr-bw3.herokuapp.com/api/journals/:id](https://hr-bw3.herokuapp.com/api/journals/)

where `id` is the selected post you're updating.

_The object should follow this shape:_

      {
            "journal_content": "test update content",
            "journal_title": "update entry title",
            "journal_update": 1919394
      }

journal_update will store the time it was updated, in case it's needed.

## DELETING A JOURNAL

**DELETE request to: /api/journals/:id**
This route will allow you to **DELETE** a journal entry.
[https://hr-bw3.herokuapp.com/api/journals/:id](https://hr-bw3.herokuapp.com/api/journals/:id)
where `id` is the post you want to delete.

# **USERS:**

**GET request to: /api/users**
This route will allow you to GET all users.
https://hr-bw3.herokuapp.com/api/users

**GET request to: /api/users/:id**
This route will allow you to GET a specific user.
https://hr-bw3.herokuapp.com/api/users/:id

# ACTIVITIES

## RETRIEVING ACTIVITIES

**GET request to /api/activities/mine**
This route will allow you to grab logged in user's activities.
https://hr-bw3.herokuapp.com/api/activities

**GET request to /api/activities/all**
This route will allow you to grab ALL activities.
https://hr-bw3.herokuapp.com/api/activities

**GET request to /api/activities/:id**
This route will allow you to grab specific activities & return their average ratings.
https://hr-bw3.herokuapp.com/api/activities

## CREATING AN ACTIVITY

**POST request to /api/activities**
This route will allow you to **POST** an activity. **This is tied to the currently logged in user.**
https://hr-bw3.herokuapp.com/api/activities

_The object should follow this shape:_

      {
            "activity_name": "Camping",
            "activity_energy": 5,
            "activity_enjoyment": 5,
            "activity_engagement": 5,
            "activity_date": 0393993
      }

## DELETING AN ACTIVITY

**DELETE request to /api/activities/:id**
This route will allow you to **DELETE** an activity.
https://hr-bw3.herokuapp.com/api/activities/:id

## UPDATING AN ACTIVITY

**PUT request to /api/activities/:id**
This route will allow you to **UPDATE** an activity.
https://hr-bw3.herokuapp.com/api/activities/:id

where `id` is the selected post you're updating.

_The object should follow this shape:_

      {
            "activity_name": "Camping",
            "activity_energy": 5,
            "activity_enjoyment": 5,
            "activity_engagement": 5,
      }
