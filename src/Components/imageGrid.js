import useFireStore from '../Hooks/useFireStore';
import { motion } from 'framer-motion';

const ImageGrid = ({setselected}) => {
    
    const { docs } = useFireStore('images');
    console.log(docs);
    
    
    return (
        <div className="image-grid">
            {docs && docs.map(doc =>( 
                <div>
                    <motion.div className="img-wrap" key={doc.id}
                        layout
                whileHover={{opacity:1}}
                        onClick={() => setselected(doc.url)}> <motion.img src={doc.url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            
                        />
                    </motion.div>
                    </div>
            ))}
            </div>
    );
}

export default ImageGrid;