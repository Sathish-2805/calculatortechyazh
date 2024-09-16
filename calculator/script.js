const dis=document.getElementById("dis")

function joindis(input){
    dis.value+=input;

}
/*emty fun method */
function clrdis(){
    dis.value=""
}


/* fun result method */
function calresult(){
    dis.value=eval(dis.value)                                         /*use to method ..eval=string values*/
}

/* clear the last element code */
function clrelement(){
    dis.value=dis.value.slice(0,-1)
}