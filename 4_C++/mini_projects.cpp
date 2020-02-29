#include <iostream>
#include <vector>
#include <cmath>

// 1 - fibonacci sequence, works for numbers less than or equal to 45... after that it goes above int limit

std::vector<int> fibonacci_to_nth(int number) {

    std::vector<int> return_vector;
    return_vector.push_back(1);
    if(number == 1)
        return return_vector;
    return_vector.push_back(2);
    int counter = 2;
    while(counter < number) {
        int next_value = return_vector.rbegin()[0] + return_vector.rbegin()[1];
        return_vector.push_back(next_value);
        counter++;
    }
    return return_vector;

}

// 2 - prime factorization

bool is_prime(int number) {
    if(number < 2) return false;
    if(number == 2) return true;
    int index = 2;
    int upper_limit = (int) std::round(std::sqrt(number));
    if(upper_limit < 2)
        upper_limit = 2;
    while(index < upper_limit) {
        if(number % index == 0)
            return false;
        index++;
    }
    return true;
}

int next_prime(int number) {
    int index = number;
    while(!is_prime(index))
        index++;
    return index;
}
        

std::vector<int> prime_factorize(int number) {
        // 24
    if(is_prime(number))
        return {};
    std::vector<int> return_vector;
    int index = 1;
    while(!is_prime(number) && number != 1) {
        index = next_prime(index);
        while(number % index == 0 && number != 1) {
            return_vector.push_back(index);
            number /= index;
        }
    }
    if(number != 1)
        return_vector.push_back(number);

    return return_vector;

}

int main() {

    std::cout << "Enter number to factorize" << std::endl;
    int num;
    std::cin >> num;
    auto vect = prime_factorize(num);
    for(auto i: vect) {
        std::cout << i << ", ";
    }
    std::cout << std::endl;
    return 0;

}
