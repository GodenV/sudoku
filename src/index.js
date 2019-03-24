module.exports = function solveSudoku(matrix) {
  function findline(row,column){
  
    var m=row;
    var flag=0;
    
    for(n=0;n<9;n++){
      if(matrix[m][n]==matrix[row][column]){flag++;}
    }
    
    if(flag>1){return false}
    
    for(m=0;m<9;m++){
      if(matrix[m][column]==matrix[row][column]){flag++;}
    }
    
    if(flag>2){return false}
  
    return true;
  } 
  
  
  function findzone(row,column){
  
  m = (row-row%3)
  n = m+3;
  f = (column - column%3);
  s = f+3;

  var flag=0;
  
  for(i=m;i<n;i++){
  for(j=f;j<s;j++){
  if (matrix[i][j]==matrix[row][column]){
    flag++;
    if (flag>1)return false;
  }
  }
  }

  return true;
  }
  
  

  function recursion(row,column){
  
  while(matrix[row][column]!=0){
  column++;
  
  if(column==9){
  if(++row==9) return true;
  column=0;
  }
  }
  
  for(var p=1;p<=9;p++){
  
  matrix[row][column]=p;
  
  if( findline(row,column)==true && findzone(row,column)==true && recursion(row,column)==true){
  return true;
  }
  }
  
  matrix[row][column]=0;
  return false;
  }
  

  
  recursion(0,0);

  return matrix;
  
  }
