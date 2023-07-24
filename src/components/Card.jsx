
const Card = ({title , imageUrl, toggleTitle, showText, color, bgColor,fontSize}) => {
     
    return(
        <div style={{color , fontSize:'30px', backgroundColor : bgColor, }}
        >
            <span style={{visibility : showText ? 'visible': 'hidden'}}>{title}</span>
            {title}
            {imageUrl}
            {color}
            <button onClick={toggleTitle}>
                {showText ? 'hide' : 'show'}
                title
            </button>
        </div>
    )
}
export default Card


// <div className={color === 'blue' ? 'text-primary' : 'text-dark' }
//         >
//             {title}
//             {imageUrl}
//             {color}
//         </div>