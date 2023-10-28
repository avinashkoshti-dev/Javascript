/*
    Selection sort is a simple comparison-based sorting algorithm. It works by dividing the input into a sorted and 
    an unsorted region. The sorted region is initially empty, while the unsorted region contains all the elements. 
    The algorithm repeatedly selects the smallest (or largest, depending on the ordering) element from the unsorted 
    region and moves it into the sorted region. This process continues until the unsorted region is empty and the sorted 
    region contains all the elements. 

    - Start with the Second Element: 
    - Compare and Insert: 
    - Move to the Next Element: 
    - Compare and Insert Again: 
    - Repeat Until the List is Sorted: 
    - List is Fully Sorted: 
*/

function selectionSort(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        let min=i;
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<arr[min])
            {
                min=j
            }
        }
        if(i!==min)
        {
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr
}

let UnSortedArray=[5,7,2,4,3]

console.log(selectionSort(UnSortedArray))