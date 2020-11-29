import react,{useEffect} from 'react';
import useStorage from '../Hooks/useStorage';

const ProgressBar = ({ file ,setFile}) => {
     const { url, progress } = useStorage(file);
     console.log(progress + " " + url);
    
    useEffect(() => {
            if (url) {
                setFile(null);
            }

    }, [url]);
    
    return (
        <div className="prograss-bar" style={{width:progress+'%'}}>
        </div>
    );
}

export default ProgressBar;