import multer from "multer";
//Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It makes it easy to handle file uploads in Node.js applications by parsing the incoming form data and storing the files on the server.
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage});
export default upload;
//The code above is a middleware that uses multer to handle file uploads. It creates a disk storage engine that saves the uploaded files to the server's disk. The middleware is exported so that it can be used in other parts of the application.
