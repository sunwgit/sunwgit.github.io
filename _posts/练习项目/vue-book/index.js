let http = require("http"),
    fs = require("fs"),
    url = require("url");
let sliders = require("./src/mock/sliders");
http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
        );
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader(
            "Access-Control-Allow-Methods",
            "PUT,POST,GET,DELETE,OPTIONS"
        );
        res.setHeader("X-Powered-By", " 3.2.1");
        let { pathname, query } = url.parse(req.url, true);
        console.log(pathname);

        if (pathname === "/sliders") {
            res.end(JSON.stringify(sliders));
        }
        if (pathname === "/hotBooks") {
            fs.readFile("./src/mock/book.json", "utf8", (err, val) => {
                if (err) throw err;
                else {
                    res.setHeader(
                        "Content-Type",
                        "application/json;charset=utf8"
                    );
                    // console.log(val);
                    res.end(
                        JSON.stringify(
                            JSON.parse(val)
                                .reverse()
                                .slice(0, 6)
                        )
                    );
                }
            });
        }
        if (pathname === "/books") {
            let jsonPath =
                query.dest === "collect"
                    ? "./src/mock/collect.json"
                    : "./src/mock/book.json";
            fs.readFile(jsonPath, "utf8", (err, val) => {
                if (err) throw err;
                else {
                    res.setHeader(
                        "Content-Type",
                        "application/json;charset=utf8"
                    );
                    // console.log(val);
                    res.end(JSON.stringify(JSON.parse(val).reverse()));
                }
            });
        }
        if (pathname === "/delete") {
            let jsonPath =
                query.dest === "collect"
                    ? "./src/mock/collect.json"
                    : "./src/mock/book.json";
            fs.readFile(jsonPath, "utf8", (err, val) => {
                if (err) throw err;
                else {
                    let books = JSON.parse(val);
                    books = books.filter(item => item.bookId != query.id);
                    fs.writeFile(jsonPath, JSON.stringify(books), err => {
                        if (err) throw err;
                        res.end(JSON.stringify(books));
                    });
                }
            });
        }
        if (pathname === "/getInfo") {
            fs.readFile("./src/mock/book.json", "utf8", (err, val) => {
                if (err) throw err;
                else {
                    val = JSON.parse(val);
                    res.end(
                        JSON.stringify(
                            val.filter(item => item.bookId == query.id)[0]
                        )
                    );
                }
            });
        }
        if (pathname === "/updateBook") {
            let str = "";
            req.on("data", chunk => (str += chunk));
            req.on("end", () => {
                str = JSON.parse(str);
                fs.readFile("./src/mock/book.json", "utf8", (err, val) => {
                    if (err) throw err;
                    else {
                        val = JSON.parse(val);
                        let newData = val.map(item => {
                            if (item.bookId == str.bookId) return str;
                            return item;
                        });
                        fs.writeFile(
                            "./src/mock/book.json",
                            JSON.stringify(newData),
                            err => {
                                if (err) throw err;
                                res.end();
                            }
                        );
                    }
                });
            });
        }

        if (pathname === "/addBook") {
            let str = "";
            req.on("data", chunk => (str += chunk));
            req.on("end", () => {
                str = JSON.parse(str);
                fs.readFile("./src/mock/book.json", "utf8", (err, val) => {
                    if (err) throw err;
                    else {
                        val = JSON.parse(val);
                        str.bookId =
                            val.length > 0
                                ? parseFloat(val[val.length - 1].bookId) + 1
                                : 1;
                        val.push(str);
                        fs.writeFile(
                            "./src/mock/book.json",
                            JSON.stringify(val),
                            err => {
                                if (err) throw err;
                                res.end();
                            }
                        );
                    }
                });
            });
        }
        if (pathname === "/collect") {
            let str = "";
            req.on("data", chunk => (str += chunk));
            req.on("end", () => {
                str = JSON.parse(str);
                fs.readFile("./src/mock/collect.json", "utf8", (err, val) => {
                    if (err) throw err;
                    else {
                        val = JSON.parse(val);
                        val.push(str);
                        fs.writeFile(
                            "./collect.json",
                            JSON.stringify(val),
                            err => {
                                if (err) throw err;
                                res.end();
                            }
                        );
                    }
                });
            });
        }
    })
    .listen(process.env.PORT || 5000);
