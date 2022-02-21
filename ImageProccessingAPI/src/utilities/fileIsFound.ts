import fs from "fs";

const fileIsFound = (Path: string): boolean => {
  if (fs.existsSync(Path)) {
    //file exists
    return true;
  } else return false;
};
export default fileIsFound;
