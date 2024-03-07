import DOMPurify from "dompurify";

const purifyIcons = (svgs) => {
    return svgs.map((svg) => DOMPurify.sanitize(svg));
}

export default purifyIcons;