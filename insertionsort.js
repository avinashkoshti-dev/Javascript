/*
    Insertion sort is another simple comparison-based sorting algorithm. It works by dividing the input into 
    a sorted and an unsorted region. The sorted region is initially just the first element, while the unsorted 
    region contains all the other elements. The algorithm repeatedly takes the first element from the unsorted 
    region and inserts it into the correct position in the sorted region. This process continues until the unsorted 
    region is empty and the sorted region contains all the elements. 
*/

function InsertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}

let UnSortedArray=[5,7,2,4,3]

console.log(InsertionSort(UnSortedArray))