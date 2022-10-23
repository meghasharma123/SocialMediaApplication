import React from "react";
import useStyle from './styles';

const Post = () =>{
    const classes = useStyle();
    return(
        <div>
            <h1 className={classes.card}>Post</h1>
        </div>
    );
}

export default Post;