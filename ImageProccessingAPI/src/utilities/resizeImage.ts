import sharp from "sharp";

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<void> => {
  const pathToImage = `images/full/${fileName}.jpg`;
  const outPathToImage = `images/resizedImages/${fileName}${width}X${height}.jpg`;
  try {
    await sharp(pathToImage)
      .rotate()
      .resize(width, height)
      .toFile(outPathToImage);
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default resizeImage;
