
import app from "./app";

/** Server */
const PORT: any = process.env.PORT ?? 6060;
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));