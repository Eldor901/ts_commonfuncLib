
// arg1 - array , arg2- splitter. exp: arg1 = [1,2,3,4], arg2 = 2; result = [[1,2], [3,4]]
export const chunk = <T>(array: T[], size: number): T[][] => {
    size = size && size > 0 ? Math.floor(size) : 1;
    let result: Array<Array<T>> = [];
    let arr: Array<T> = [];
    let iter = 0;
        
    for (let i = 0; i < array.length; i++)
    {
        arr.push(array[i])
        iter++;

        if (iter === size)
        {
            result.push(arr);
            iter = 0;
            arr = [];
        }else if ((i + 1) === array.length)
        {
            result.push(arr);
        }       
    }
        
    return result;
}
