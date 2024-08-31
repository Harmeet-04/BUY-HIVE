// const express = require("express");
// const app = express();
// const fs = require("fs/promises");
// app.use(express.json());

// app.post("/Register", async (req, res) => {
//     let readdata = await fs.readFile("info.json", "utf-8");
//     readdata = JSON.parse(readdata);
//     console.log(req.body);
//     const newUser = req.body;
//     readdata = [...readdata, newUser];
//     await fs.writeFile("info.json", JSON.stringify(readdata));
//     res.send(readdata);
// });

// app.listen(8000);