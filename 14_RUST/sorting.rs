// do not under any circumstances attempt to do sorting in rust...

fn main() {

    let mut arr:[i32; 6] = [11, 2, 4, 3, 8, 5];
    
    qsort(arr, 0, 6);

    println!("{:?}", arr);

}


fn ssort(arr:&mut [i32]) {
    
    let n = arr.len();
    let mut i = 0;

    while i < n - 1 {

        let mut min_index = i;

        let mut j = i + 1;

        while j < n {

            if arr[j] < arr[min_index] {
                min_index = j;
            }

            j += 1;

        }
        
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;

        i += 1;

    }

}

fn isort(arr:&mut [i32]) {
    
    let n = arr.len();
    let mut i = 1;
    let mut j;

    while i < n {

        j = i;

        while j > 0 && arr[j - 1] > arr[j] {

            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;

            j -= 1;

        }

        i += 1;

    }

}

fn qsort(mut arr: [i32], low: usize, high: usize) -> [i32] {

    if low < high {
        
        let pivot = arr[high];
        let mut i = low - 1;
        let mut j = low;

        while j < high {
        
            if arr[j] < pivot {

                i += 1;

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

            j += 1;

        }

        let temp2 = arr[high];
        arr[high] = arr[i+1];
        arr[i+1] = temp2;

        let p = i + 1;
        arr = qsort(arr, low, p - 1);
        arr = qsort(arr, p + 1, high);

    }

    return arr;

}

















