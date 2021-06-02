import './SetsWrapper.css';

const SetsWrapper = props =>{
    let classes = "setContainer " + props.className;

    return(
        <div className={classes}> 
            {props.children}
        </div>
    )
}

export default SetsWrapper