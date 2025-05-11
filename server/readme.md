# Base sql-backend code written by me

**API ENDPOINTS**

1. /api/v1/user/signUp (any nickName and any password) post
2. /api/v1/user/signIn (any nickName and any password)  post
3. /api/v1/user/signOut
4. /api/v1/user/currentUser

1. /api/v1/property
2. /api/v1/property/filter?city=london&?minPrice=100&maxPrice=150&bedrooms=1&bathroom=1
3. /api/v1/property/createReservation (add property id, start dat and end date)
4. /api/v1/property/myReservations (user should be logged in)
5. /api/v1/property/:id

This code has authorization and authentication with jwt and very simple user model, if you would like to have the authentication code in advance you can use this.

The project needs to have some dependencies installed in order to work, like Resend for sending emails or some other librarys, which have to be installed. This list is of course availble in package.json, so you should be careful with it.
