/*
Introduction to Bubble Sort :

    Bubble Sort is a straightforward sorting technique that operates by continuously examining each neighboring pair 
    in a sequence and exchanging their positions if they are not in the correct sequence. 
    The algorithm's name, "Bubble Sort," comes from the way elements gradually ascend to their correct positions 
    in the sequence, akin to bubbles rising to the surface. This method is performed repeatedly until the sequence 
    is entirely sorted. 

    Working of Bubble Sort
- Compare the First Two Elements: 
- Move to the Next Pair: 
- Continue Until the End of the List: 
- Repeat the Process: 
- Continue Until the List is Sorted: 
   
*/


function bubbleSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr.length-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                let temp=arr[j]
                arr[j]=arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr;
}

let UnSortedArray=[5,7,2,4,3]

console.log(bubbleSort(UnSortedArray))