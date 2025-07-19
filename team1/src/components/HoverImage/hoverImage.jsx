import React, {useEffect, useState} from "react";
function HoverImage({pic, pic2, picName, picLink}) {
    const [isHovered, setHovered] = useState(false);
    const [thePic, setThePic] = useState(`${pic}`);
    useEffect(() => {
        if (picLink) {
            setThePic(picLink);
        } else {
            setThePic(pic);
        }
    }, [picLink, pic]);
    return (
        <>
            <img src={isHovered ? pic2 : thePic}
                 alt={picName}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            />
        </>
    )
}
export default HoverImage;