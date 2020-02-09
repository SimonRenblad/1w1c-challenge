
pub fn msort(mut arr: Vec<i32>, left: usize, right: usize) -> Vec<i32> {
    
    if left < right {

        let middle = (left + right) / 2;
        arr = msort(arr, left, middle);
        arr = msort(arr, middle + 1, right);
        arr = merge(arr, left, middle, right);

    }
    return arr;

}

fn merge(mut arr: Vec<i32>, left: usize, middle: usize, right: usize) -> Vec<i32> {

    let n1 = middle - left + 1;
    let n2 = right - middle;

    // initialize vectors
    let mut left_arr: Vec<i32> = Vec::new();
    let mut right_arr: Vec<i32> = Vec::new();

    //fill left_arr
    let mut i: usize = 0;
    while i < n1 {
    
        left_arr.push(*arr.get(left + i).expect("Index out of bounds!"));
        i += 1;

    }
    
    //fill right_arr
    let mut j: usize = 0;
    while j < n2 {
    
        right_arr.push(*arr.get(middle + 1 + j).expect("Index out of bounds!"));
        j += 1;

    }

    i = 0;
    j = 0;
    let mut k = left;

    //do the merging of the two halves
    while i < n1 && j < n2 {
    
        if *left_arr.get(i).expect("Index out of bounds!") <= *right_arr.get(j).expect("Index out of bounds!") {
        
            arr[k] = *left_arr.get(i).expect("Index out of bounds!");
            i += 1;

        } else {
        
            arr[k] = *right_arr.get(j).expect("Index out of bounds!");
            j += 1;

        }

        k += 1;

    }

    //finished one side, do the other side, only one loop entered here.

    while i < n1 {
    
        arr[k] = *left_arr.get(i).expect("Index out of bounds!");
        i += 1;
        k += 1;

    }

    while j < n2 {
    
        arr[k] = *right_arr.get(j).expect("Index out of bounds!");
        j += 1;
        k += 1;

    }

    return arr;
}













