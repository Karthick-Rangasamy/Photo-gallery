const Modal = ({ selected, setselected }) => {
    
    const handleclick = (e) => {
        if(e.target.classList.contains('backdrop'))
        setselected(null);
    }
    return (
        <div className="backdrop" onClick={handleclick}>
             <img src={selected} alt="Enlarged Image" />
        </div>
    );
}

export default Modal;