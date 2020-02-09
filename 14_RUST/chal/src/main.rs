mod reader;

fn main() {
    let mut v = vec![3, 2, 1, 5]; 
    v = reader::msort(v, 0, 3);
    println!("{:?}", v);


}
