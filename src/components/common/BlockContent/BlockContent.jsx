import "./BlockContent.css";

const BlockContent = ({ children }) => {
    return (
        <article className="block__content">
            {children}
        </article>
    );
}

export default BlockContent;