## Week 5 Deliverable

This week, you will be making a backend for Spec Sources!

The backend will have three endpoints:
- `GET /api/sources` will send back all of the sources
- `POST /api/add_source` will allow a user to add a source through the body of the application
- `POST /api/delete_source/:id` will allow a user to delete a source by id

You will test through [Postman](https://www.postman.com/downloads/).

To get started, initialize a git repository and then run these commands inside it:

``` shell
npm init
npm install express body-parser cors path
touch server.js
touch data.js
mkdir controllers && cd controllers && touch controller.js && cd ..
mkdir routes && cd routes && touch routes.js && cd ..
echo "<html><head><title>404</title></head><body>404 Not Found</body></html>" >> 404.html
echo "<html><head><title>Hello World</title></head><body>Hello World!</body></html>" >> index.html
```

Then, copy and paste the contents of `server.js` from the sample code into your `server.js`-- nothing should have to change.

In routes and controllers, implement your three functions! Put all of your data into `data.js`
