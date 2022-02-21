import express from 'express';
import resizeImage from '../../utilities/resizeImage';
import fileIsFound from '../../utilities/fileIsFound';

const imageFactory = express.Router();

imageFactory.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    const fileName = req.query.filename as string;
    const afterSizepath = `images/resizedImages/${req.query.filename}${req.query.width}X${req.query.height}.jpg`;

    const width = parseInt(req.query.width as unknown as string);
    const height = parseInt(req.query.height as unknown as string);
    const beforeSizepath = `images/full/${fileName}.jpg`;
    try {
     // const exist = await fileExist(imagePath);
      //const outPutFileExist = await fileExist(outputFile);
       //res.send('http://localhost:3000/api/images?filename=fjord&width=200&height=200   or    https://r1093377c1100199xjupyterlnsdygces-3000.udacity-student-workspaces.com/api/images?filename=fjord&width=200&height=200');
      if (!fileIsFound(beforeSizepath)) {
        res.send(
          'No such image is found. Please use a valid file name'
        );
      } else if (!width || width <= 0 || height <= 0 || !height) {
        res.send(
          'Please enter valid numbers for width > 0 and height > 0'
        );
      } else if (!fileIsFound(afterSizepath)) {
        await resizeImage(fileName, width, height);
        res.sendfile(afterSizepath);
      } else {
        res.sendfile(afterSizepath);
      }
    } catch (e) {
      console.error('error in getting images path', e);
    }
  }
);

export default imageFactory;
