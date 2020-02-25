#include <iostream>
#include <cmath>
#include <vector>
using namespace std;

struct Account {
    int ac_num;
    double balance;
};

struct Message {
    vector<Account> accounts;
    int msg;
};

double get_amount() {
    double amount;
    cout << "Enter amount: ";
    cin >> amount;
    cout << endl;
    return amount;
}

int get_ac_num() {
    int ac_num;
    cout << "Enter account number: ";
    cin >> ac_num;
    cout << endl;
    return ac_num;
}

double round(double var) 
{ 
    double value = (int)(var * 100 + .5); 
    return (double)value / 100; 
} 

Message account_open(int account_number, double amount, Message msg) {
    Message return_msg;
    if(!(account_number > 1000 && account_number <= 1100)) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 1; // 1 - "Error: Invalid account number"
        return return_msg;
    }
    Account new_account;
    new_account.ac_num = account_number;
    new_account.balance = round(amount);
    return_msg.accounts.push_back(new_account);
    return_msg.msg = 0;

    return return_msg;
}
Message account_balance_inquiry(int account_number, Message msg) {
    Message return_msg;

    if(!(account_number >= 1000 && account_number <= 1100)) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 1; // 1 - "Error: Invalid account number"
        return return_msg;
    }
    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        if(account.ac_num == account_number) {
            cout << "Account Balance for " << account_number << ": " << account.balance << " units." << endl;
            break;
        }
    }
    return_msg.accounts = msg.accounts;
    return_msg.msg = 0;

    return return_msg;
}

Message account_deposit(int account_number, double amount, Message msg) {
    return msg;
}

Message account_withdrawal(int account_number, double amount, Message msg) {
    return msg;
}

Message account_close(int account_number, Message msg) {
    return msg;
}

Message apply_interest_all(int interest_rate, Message msg) {
    return msg;
}

Message print_all(Message msg) {
    return msg;
}

Message close_all_and_exit(Message msg) {
    Message return_msg;
    return_msg.accounts = msg.accounts;
    return_msg.msg = 99;
    return return_msg;
}

Message interaction_menu(Message msg) {
    char transaction_type;
    cout << "Enter transaction type: ";
    cin >> transaction_type;
    cout << endl;
    Message return_msg;
    switch(transaction_type) {
        
        case 'O': 
            return_msg = account_open(get_ac_num(), get_amount(), msg);
            break;
        case 'B': 
            return_msg = account_balance_inquiry(get_ac_num(), msg);
            break;
        case 'D': 
            return_msg = account_deposit(get_ac_num(), get_amount(), msg);
            break;
        case 'W': 
            return_msg = account_withdrawal(get_ac_num(), get_amount(), msg);
            break;
        case 'C': 
            return_msg = account_close(get_ac_num(), msg);
            break;
        case 'I': 
            return_msg = apply_interest_all(get_amount(), msg);
            break;
        case 'P': 
            return_msg = print_all(msg);
            break;
        case 'E': 
            return_msg = close_all_and_exit(msg);
            break;

    }
    return return_msg;
}

int main() {
    Message main_msg;
    main_msg.msg = 0;
    main_msg.accounts.reserve(100); //make room for at least 10 accounts.
    while (true) {
        main_msg = interaction_menu(main_msg);
        if(main_msg.msg == 99) break;
    }
    return 1;
}
