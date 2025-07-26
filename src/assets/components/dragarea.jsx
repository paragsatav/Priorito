import React, { useState } from "react";
import "./dragarea.css"
const DragArea = ({onDrop}) => {
    const [Dragcard, setDragCard] = useState(false)
    return <section 
    className={Dragcard ? "dragSection" : "hidedragSection"}
    onDragEnter={() => setDragCard(true)}
    onDrop={() => {
        onDrop();
        setDragCard(false);
    }}
    onDragOver={(e) => e.preventDefault()}
    onDragLeave={() => setDragCard(false)}>Drop here</section>;
}

export default DragArea;