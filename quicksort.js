/*
Quick Sort is a commonly used sorting algorithm that uses a divide-and-conquer approach to sort an array of elements. 
It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, 
according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. 
This can be done in-place, requiring small additional amounts of memory to perform the sorting. 

Working of Quick Sort
- Choose a Pivot
- Partitioning
- Recursive Sort 
- Combine the Sorted Sublists
*/

function quickSort(arr)
{
    if(arr.length<=1)
     return arr;
     
    const pivot=arr[arr.length-1]
    const left=[];
    const right=[]
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
            left.push(arr[i])
        else
            right.push(arr[i])
    }
    
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [5, 3, 6, 2, 10];
console.log(quickSort(arr));