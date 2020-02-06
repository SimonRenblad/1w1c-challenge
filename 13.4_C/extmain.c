#include <stdio.h>
//shamelessly stolen from tutorialspoint for reference only.
//note DOES NOT WORK....
int count;
extern void write_extern;

int main(){
    count = 5;
    write_extern();
    return 0;
}
