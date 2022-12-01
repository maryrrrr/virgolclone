const LastPostCard =(props) => {
    return(
        <div style= {{border:"1px solid solid", padding:"8px", borderRadius:"4px"}}>
            <h5 style= {{fontSize:"1em", color:"#789c90"}}>نوشته شده توسط: {props.postData.authorName}</h5>
            <img 
            style={{width:"50%" , display:"block" , marginTop:"1em", marginLeft:"auto" , marginRight:"auto"}}
            src={props.postData.image} alt={props.postData.title}/>
            <div style= {{fontSize:"2em", fontWeight:"bold"}}>{props.postData.title}</div>
            <div style= {{marginTop:"1em", backgroundColor:"#68f5cc"}}>{props.postData.description}</div>
        </div>
      )
};

export default LastPostCard;