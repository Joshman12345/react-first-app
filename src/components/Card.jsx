const Card = ({
  title,
  imageUrl,
  toggleTitle,
  showText,
  color,
  bgColor,
  fontSize,
}) => {
  return (
    <div
      style={{
        color,
        fontSize: "30px",
        backgroundColor: bgColor,
        marginTop: "30px",
      }}
    >
      <span style={{ visibility: showText ? "visible" : "hidden" }}>
        {title}
      </span>
      {title}
      {imageUrl}
      {color}
      <button onClick={toggleTitle}>
        {showText ? "hide" : "show"}
        title
      </button>
    </div>
  );
};
export default Card;

export const SampleText = (Children) => {
  console.log(Children);
  return <h2>the lord is good </h2>;
};

// <div className={color === 'blue' ? 'text-primary' : 'text-dark' }
//         >
//             {title}
//             {imageUrl}
//             {color}
//         </div>
