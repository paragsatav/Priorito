import React from "react";
import "./card.css"
import Tag from "./tag"
import Delete from "../delete.jpeg"

const Card = ({title, tags, handledelete, index, setActiveCard}) => {
    return(
        <div className="border rounded-lg border-gray-300 flex gap-1 items-center justify-between p-2 w-full" draggable onDragStart={() => setActiveCard(index)}
        onDragEnd={() => setActiveCard(null)}>
            <span title={title} className="text-[12px] font-semibold w-full truncate">{title}</span>
            <div className="flex items-center">
                <div className="cardTag">
                    { tags.map((tag, index) => <Tag key={index} tagName={tag} selected/>)}
                </div>
                <div className="cardDelete" onClick={() => handledelete(index)}>
                    <img className="deleteIcon" src={Delete} alt="#"/>
                </div>
            </div>
        </div>
    );
}

export default Card;