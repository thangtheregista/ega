import React, {useState} from "react";
function HoverImage({pic, pic2, picName}) {
    const [isHovered, setHovered] = useState(false);
    return (
        <>
            <img src={isHovered ? pic2 : pic}
                 alt={picName}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            />
        </>
    )
}
export default HoverImage;