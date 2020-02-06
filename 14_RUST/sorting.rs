

fn main() {

    let mut arr:[i32; 6] = [11, 2, 4, 3, 8, 5];
    
    ssort(&mut arr);

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
