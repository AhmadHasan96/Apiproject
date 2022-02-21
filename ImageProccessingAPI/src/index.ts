import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;


app.use('/api', routes);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main route');
});

app.get('*', (req: express.Request, res: express.Response) => {
  res.send(
    'Wrong route, please enter a valid route. https://r1093377c1100199xjupyterlnsdygces-3000.udacity-student-workspaces.com/api/imageFactory?filename=fjord&width=800&height=400 or http://localhost:3000/api/images?filename=fjord&width=200&height=200'
  );
});

app.listen(port, () => {
    console.log("server started");
  });


export default app;
