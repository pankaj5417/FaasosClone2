var searchMatrix = function(matrix, target) {
    
  let m = matrix.length;
    let n = matrix[0].length;
    
    let avail_row = null;
   
    
    for(let i=0;i<m;i++){
       
        if( matrix[i][0]<=target && target<=matrix[i][n-1]) {
            avail_row = i;
        break;
        }
        
        
    }
 
 
    if (avail_row === null) {
   
         
        return false;
    }
    
    for(let i =0;i<n;i++){
        if(matrix[avail_row][i] === target){
            return true;
        }
    }
    
    return false;
    
};
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))