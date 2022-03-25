/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let arr1=[],arr2=[];
    if(l1.length<=l2.length){
        arr1=l1;
        arr2=l2;
    }else{
        arr1=l2;
        arr2=l1;
    }
    for(let j =0;j<arr1.length;j++){
        arr2[j]=arr2[j] + arr1[j];
    }
    console.log(arr1,arr2)
    for(let i =0;i<arr2.length;i++){
        if(arr2[i]>=10){
            arr2[i]-=10;
            if(arr2.length!=i+1){
                arr2[i+1]+=1;
            }else{
                arr2[i+1]=1;
            }
        }
    }
    return arr2
};