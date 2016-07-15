# react-bills-app

Todo application using React, Redux, RethinkDB, Express and Socket.IO

#How to Run
First, run `npm install`, and install RethinkDB.

Once RethinkDB is installed (this app uses version 2.3.4), open a BASH terminal and run
```
$ rethinkdb
```

Navigate to `http://localhost:8080` in your favorite web browser, and use the RethinkDB interface to create a Database called `3RES_Todo`, with a single table named `Todo`.

This app builds with Webpack, and can be build with:
```
$ webpack --progress --colors --watch
```

Finally, run
```
$ node index
```

Navigate to http://localhost:9000!
# react-bills-app
