import React, { useState } from 'react';
import { Button, LinearProgress, Typography } from '@mui/material';




const FileUploader: React.FC = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setUploading(true);
      setMessage('');

      const response = await fetch('http://localhost:3000/api/upload/file', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      setMessage(`Upload of ${result.filename} successful!`);
    } catch (error) {
      setMessage('Upload failed.');
      console.log(error)
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }

    console.log(uploadProgress)
  };

  

  return (
  <div style={{ padding: '1rem', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        File Upload
      </Typography>
      <input type="file" onChange={handleFileChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        style={{ marginTop: '1rem' }}
      >
        Upload
      </Button>
      {uploading && <LinearProgress variant="indeterminate" style={{ marginTop: '1rem' }} />}
      {message && (
        <Typography variant="body1" color="textSecondary" style={{ marginTop: '1rem' }}>
          {message}
        </Typography>
      )}
    </div>
  );
};

export default FileUploader;