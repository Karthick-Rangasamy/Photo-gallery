import { useState, useEffect } from 'react';
import { projectfirestore, projectStorage,timestamp } from '../Firebase/config';

const useStorage = (file) => {
    
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const collectionref = projectfirestore.collection('images');
    

    useEffect(() => {
        
        const storageref = projectStorage.ref(file.name);
        storageref.put(file)
            .on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, (err) => {
                    setError(err);
            }, async() => {
                    const url = await storageref.getDownloadURL();
                    const createdAt = timestamp();
                    collectionref.add({url:url,createdAt:createdAt})
                    setUrl(url);
        })
    },[file])

    return { progress, url, error };
}
export default useStorage;