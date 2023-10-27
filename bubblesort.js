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