int arrayPairSum(int* nums, int numsSize)
{
    quickSort(nums, 0, numsSize - 1);
    int sum = 0;
    for(int i = 0; i < numsSize; i += 2)
    {
        sum += nums[i];
    }
    return sum;
}


void quickSort(int arr[], int i, int j)
{
    if(i >= j) return;
    int pos = split(arr, i, j);
    quickSort(arr, i, pos - 1);
    quickSort(arr, pos + 1, j);
}

int split(int arr[], int i, int j)
{
    int tmp = arr[i];
    while(i < j)
    {
        while(i < j && arr[j] >= tmp)
        {
            j--;
        }
        arr[i] = arr[j];
        while(i < j && arr[i] <= tmp)
        {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = tmp;
    return i;
}