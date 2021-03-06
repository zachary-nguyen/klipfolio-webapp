import App from "./app";
import GalleryController from "./controllers/gallery";

const port = parseInt(process.env.PORT as string, 10) || 8080;

/**
 * Initialize App with controllers and port
 */
export const app = new App([new GalleryController()],
    port
);

app.listen();

export default app;