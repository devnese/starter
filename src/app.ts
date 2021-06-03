import { App, Swagger } from 'devnese';
import { TestRoute } from './route/test.route';

const port = (process.env.PORT || 3000) as number
const app = new App();

app.contain([
    TestRoute
])

Swagger.init(app);
app.listen(port);