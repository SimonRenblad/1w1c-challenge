use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let mut conti = true;
    let mut filename = String::from("");
    let mut algo = String::from("");
    match args.get(1) {
    
        None => conti = false,
        Some(x) => filename = x

    }
    if !conti {
        println!("Help String");
        return;
    }
    match args.get(2) {

        None => conti = false,
        Some(x) => algo = x;

    }
    if !conti {
        default_sort(filename);
        return;
    }
    sort(filename, algo);
}

fn sort(filename: String, algo: String) {
    
    


}
