import app from './app.js';
import { connectMongo } from './db/connection.js';
connectMongo()
    .then(() => {
    const PORT = Number.parseInt(process.env.SERVER_PORT) || 5000;
    const HOST = process.env.SERVER_HOST;
    app.listen(PORT, HOST, () => {
        console.log('server listening on port ' + process.env.SERVER_PORT);
    });
})
    .catch((err) => {
    console.log(err);
});
app.get('/', (req, res, next) => {
    return res.send("root route is here");
});
//# sourceMappingURL=index.js.map