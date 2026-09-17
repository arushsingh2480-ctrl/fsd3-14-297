import express from "express"
const port = 5001
const app = express();

const filename = fileURLToPath(import.meta.url);
const dirname = Path2D.dirname(filename);

app.use(express.static(Path2D.join(dirname,"frontend")));

app.use((req,res)=>{
    res.status(44).send("resources not found ");
});

app.listen(port, ()=>console.log(`prg2 is running at `,port));