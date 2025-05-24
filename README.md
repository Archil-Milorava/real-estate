
**API ENDPOINTS**

1. /api/v1/user/signUp (any nickName and any password) post
2. /api/v1/user/signIn (any nickName and any password) post
3. /api/v1/user/signOut
4. /api/v1/user/currentUser

5. /api/v1/property
6. /api/v1/property/filter?city=london&?minPrice=100&maxPrice=150&bedrooms=1&bathroom=1
7. /api/v1/property/createReservation (add property id, start dat and end date)
8. /api/v1/property/myReservations (user should be logged in)
9. /api/v1/property/:id

This is a small accommodation booking page, it is fullstack with user authentication with JWT. User can make fake resrvations which will be saved in DB. User can not register accommodations on the web site.

This website fetches the data programatically using params. The params are send to the API endpoint which fetches the data dynamically.

The data is fake and is made up by me. The images of the accommdoations are real but have been found on different platforms.

The data is only 16 items long, which is enough to test the application.

The front is build only with Tailwind and no other ui libraries are on top.

The back is built with Express and Prisma, the DB is Postgresql.
