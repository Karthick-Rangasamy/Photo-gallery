import react,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const types=['image/png','image/jpeg']

    const changeHandler=(e)=>{
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            // console.log(selected.name);
            setFile(selected);
            setError(null);
        } else { 
            setFile(null);
            setError("Please select the valid Image file (png or jpeg)");
       }
    }

    return (
        <form>
            <label>
            <input type="file" onChange={changeHandler} />
                Choose a Photo
            </label>
            <div className="output">
                {error && <div className="error"> {error}</div>}
                {file && <div> {file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
            </div>
        </form>
    );
}

export default UploadFile;