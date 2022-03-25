/**
 * @param {character[][]} board
 * @return {boolean}
 * 思路：要判断三个情况，先把这三个情况所需的数组构造出来，再一个一个数组去判断
 * 第一个情况：每一行的数字只能出现一次，直接遍历每个二维数组是否符合规则
 * 第二种情况：先把二维数组翻转，再执行一次上面那个情况
 * 第三种情况，把二维数组分割成9个一维数组，再判断是否有重复项
 */
 var isValidSudoku = function(board) {
    let row={}
    let col={}
    let box={}
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let num=board[i][j]
            if(num!=='.'){
                let boxindex = Math.floor(i/3)*3+Math.floor(j/3);
                if(row[i+''+num] || col[j+''+num] || box[boxindex+''+num] ){
                    return false
                }
                row[i+''+num]=true
                col[j+''+num]=true
                box[boxindex+''+num]=true
            }
        }
    }
    return true;
};
