const app = require("./src/app")

app.sync({force: true}).then(()=>{
    app.listen(3001, ()=>{
        console.log("listening at 3001")
    })
})