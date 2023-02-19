import http from '../api/APIUtils';

// upload file to Backend
const upload = (file: File, onUploadProgress: any): Promise<any> => {
    let formData = new FormData();
  
    formData.append("file", file);
  
    return http.post("/csv/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  };

  const FileUploadService = {
    upload,
  };
  
  export default FileUploadService;