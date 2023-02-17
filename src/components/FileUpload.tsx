import React from 'react';
import Button from './common/Button';
import { LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

import FileUploadService from '../service/FileUploadService';

// styling for progress bar
const StyledLinearProgress = styled(LinearProgress)({
  width: '100%',
  height: 10,
  borderRadius: 5,
  marginTop: 10,
});

const FileUpload: React.FC = () => {
  // to hold files
  const [currentFile, setCurrentFile] = React.useState<File>();
  // to hold the progress bar
  const [progress, setProgress] = React.useState(0);
  // to hold the success / fail message
  const [message, setMessage] = React.useState<string>('');

  // Function to handle file select
  const handleSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setCurrentFile(event.target.files[0]);
      setProgress(0);
    }
  };

  const handleUploadFile = () => {
    console.log('entering this button');
    setProgress(0);
    if (!currentFile) return;

    FileUploadService.upload(currentFile, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage('Could not upload the File!');
        }

        setCurrentFile(undefined);
      });
  };

  return (
    <>
      {/* input to select file */}
      <label htmlFor='Select File'>
        <input type='file' onChange={handleSelectFile} />
      </label>

      {/* Button to upload file */}
      <Button
        disabled={!currentFile}
        onClick={handleUploadFile}
        variant='contained'
        bgcolor='primary'
      >
        Upload
      </Button>

      {/* Progress Bar */}
      {currentFile && (
        <div>
          <StyledLinearProgress variant='determinate' value={progress} />
          {progress} %
        </div>
      )}

      {/* Message to show that file uplaod is successful or not */}
      {message && (
        <div className='alert alert-secondary mt-3' role='alert'>
          {message}
        </div>
      )}
    </>
  );
};

export default FileUpload;
