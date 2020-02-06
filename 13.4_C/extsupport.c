#include <stdio.h>
// shamelessly stolen from tutorialspoint for reference only

extern int count;

void write_extern(void) {
    printf("count is %d\n", count);
}
