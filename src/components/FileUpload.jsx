import { useState } from 'react';
import './FileUpload.css';

const CLOUDINARY_ROOT_URL = 'https://api.cloudinary.com/v1_1/';
const CLOUDINARY_CLOUD_NAME = 'your-cloud-name';
const CLOUDINARY_UPLOAD_PRESET = 'nuclio2';

const getImageInLowRes = (url) => {
    return url.replace('upload', 'upload/w_300,h_300,c_fill');
}

export const FileUpload = () => {

    const [uploadedFiles, setUploadedFiles] = useState([]);

    console.log('uploadedFiles----', uploadedFiles);

    const onFileChange = (e) => {
        const files = e.target.files;
        console.log('files', files);
        [...files].forEach(file => {
            onUpload(file);
        });
    }

    const onUpload = async (file) => {
        console.log('Uploading...');

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);



        const response = await fetch(`${CLOUDINARY_ROOT_URL}${CLOUDINARY_CLOUD_NAME}/upload`, {
            method: 'POST',
            body: formData
        })

        const data = await response.json();

        setUploadedFiles(prev => prev.concat(data.url));

    }

    return (
        <div className="file-upload">
            <label className="file-label" htmlFor="file">Upload File</label>
            <input className="file-input" type="file" id="file" onChange={onFileChange} multiple />
            {uploadedFiles.map((file) => (
                <div key={file}>
                    <p>Uploaded File URL: {file}</p>
                    <img src={getImageInLowRes(file)} alt="Uploaded" />
                </div>
            ))}
            <label>Name</label>
            <input type="text" />
        </div>
    )
}
