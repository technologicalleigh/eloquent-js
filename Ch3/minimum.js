/* The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/

var min = (n,m) => {
    if(n>m){
        console.log(m);
        return m;
    } else if(n<m){
        return n;
    } else {
        return null;
    }

}

console.log(min(0, -10));