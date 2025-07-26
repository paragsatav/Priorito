import React from "react"
import "./tag.css"

const Tag = ({tagName, selectTags, selected}) => {
    const tagstyle = {
        HTML : {backgroundColor : "yellow"},
        CSS : {backgroundColor : "pink"},
        JavaScript : {backgroundColor : "#6ddec4ff"},
        React : {backgroundColor : "#89c062ff"},
        default : {backgroundColor : "beige"}
    }
    return (
          <button type="button"
           className="tag" 
           style= {selected ? tagstyle[tagName] : tagstyle.default}
           onClick = {() => selectTags(tagName)}>{tagName}</button>
    );
}

export default Tag;