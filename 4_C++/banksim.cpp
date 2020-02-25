#include <iostream>
#include <cmath>
#include <vector>
#include <map>
#include <fstream>
#include <sstream>
using namespace std;

struct Account {
    int ac_num;
    double balance;
};

struct Message {
    vector<Account> accounts;
    int msg;
};

int get_ac_num() {
    int ac_num;
    cout << "Enter account number: ";
    cin >> ac_num;
    cout << endl;
    return ac_num;
}

double get_amount() {
    double amount;
    cout << "Enter amount: ";
    cin >> amount;
    cout << endl;
    return amount;
}

double round(double var) 
{ 
    double value = (int)(var * 100 + .5); 
    return (double)value / 100; 
} 

bool account_exists(int account_number, Message msg) {
    if(!(account_number > 1000 && account_number <= 1100)) return false;
    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        if(account.ac_num == account_number) {
            return true;
        }
    }
    return false;
    
}

Message account_open(int account_number, double amount, Message msg) {
    Message return_msg;
    if(!(account_number > 1000 && account_number <= 1100) || account_exists(account_number, msg)) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 1; // 1 - "Error: Invalid account number"
        return return_msg;
    }
    if(amount < 0){
        return_msg.accounts = msg.accounts;
        return_msg.msg = 4; // 4 - "Error: Invalid Deposit / Withdrawal Amount"
        return return_msg;
    }
    Account new_account;
    new_account.ac_num = account_number;
    new_account.balance = round(amount);
    return_msg.accounts = msg.accounts;
    return_msg.accounts.push_back(new_account);
    return_msg.msg = 0;

    return return_msg;
}
Message account_balance_inquiry(int account_number, Message msg) {
    Message return_msg;
    if(!(account_exists(account_number, msg))) {
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
    Message return_msg;
    if(!(account_exists(account_number, msg))) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 1; // 1 - "Error: Invalid account number"
        return return_msg;
    }
    if(amount < 0){
        return_msg.accounts = msg.accounts;
        return_msg.msg = 4; // 4 - "Error: Invalid Deposit / Withdrawal Amount"
        return return_msg;
    }
    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        if(account.ac_num == account_number) {
            account.balance += round(amount);
            break;
        }
    }
    return_msg.accounts = ac;
    return_msg.msg = 0;
    return_msg = account_balance_inquiry(account_number, return_msg);
    
    return return_msg;
}

Message account_withdrawal(int account_number, double amount, Message msg) {
    Message return_msg;
    if(!(account_exists(account_number, msg))) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 1; // 1 - "Error: Invalid account number"
        return return_msg;
    }
    if(amount < 0){
        return_msg.accounts = msg.accounts;
        return_msg.msg = 4; // 4 - "Error: Invalid Deposit / Withdrawal Amount"
        return return_msg;
    }
    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        if(account.ac_num == account_number) {
            if(account.balance < round(amount)) {
                return_msg.accounts = msg.accounts;
                return_msg.msg = 2; // 2 - "Error: insufficient funds in account"
                return return_msg;
            }
            account.balance -= round(amount);
            break;
        }
    }
    return_msg.accounts = ac;
    return_msg.msg = 0;
    return_msg = account_balance_inquiry(account_number, return_msg);
    
    return return_msg;
}

Message account_close(int account_number, Message msg) {
    Message return_msg;
    if(!(account_exists(account_number, msg))) {
        return_msg.accounts = msg.accounts;
        return_msg.msg = 3; // 3 - "Error: Account does not exist"
        return return_msg;
    }
    vector<Account> ac = msg.accounts; 
    for(auto iter = ac.begin(); iter != ac.end(); iter++) {
        if((*iter).ac_num == account_number) {
            ac.erase(iter);
            break;
        }
    }
    cout << "Account close successful" << endl;
    return_msg.accounts = ac;
    return_msg.msg = 0;
    return return_msg;
}

Message apply_interest_all(double interest_rate, Message msg) {
    Message return_msg;

    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        account.balance += round(account.balance * interest_rate);
    }
    return_msg.accounts = ac;
    return_msg.msg = 0;
    return return_msg;
}

Message print_all(Message msg) {
    Message return_msg;

    vector<Account> ac = msg.accounts; 
    for(auto &account : ac) {
        cout << "#" << account.ac_num << ": " << account.balance << " units" << endl;
    }
    return_msg.accounts = msg.accounts;
    return_msg.msg = 0;
    return return_msg;
}

Message close_all_and_exit(Message msg) {
    Message return_msg;
    return_msg.accounts = msg.accounts;
    return_msg.msg = 99;
    return return_msg;
}

Message load_accounts() {
    ifstream fin ("accounts.csv");
    cout << "opened file" << endl; 
    vector<string> row;
    vector<Account> accounts;
    string line, temp, word;

    while(fin.good()) {
        row.clear();
        getline(fin, line);
        cout << line << "line" << endl;
        stringstream s(line);

        while(getline(s, word, ',')) {
            cout << word << endl;
            row.push_back(word);
        }
        Account new_account;
        new_account.ac_num = stod(row[0]);
        new_account.balance = stod(row[1]);
        accounts.push_back(new_account);
    }
    fin.close();
    accounts.pop_back();
    Message new_msg;
    new_msg.accounts = accounts;
    new_msg.msg = 0;
    cout << "loaded successfully" << endl;
    return new_msg;
}

Message save_and_quit(Message msg) {
    fstream fout;
    remove("accounts.csv");
    fout.open("accounts.csv", ios::out | ios::app);

    vector<Account> ac = msg.accounts;
    for(auto &account : ac) {
        fout << account.ac_num << "," << account.balance << ",\n";
    }
    fout.close();
    Message new_msg = close_all_and_exit(msg); 
    return new_msg;
}
        

Message interaction_menu(Message msg) {
    char transaction_type;
    cout << "MAIN MENU" << endl;
    cout << "Enter transaction type: ";
    cin >> transaction_type;
    cout << endl;
    Message return_msg;
    switch(transaction_type) {
        
        case 'O': 
            cout << "OPEN NEW ACCOUNT" << endl;
            return_msg = account_open(get_ac_num(), get_amount(), msg);
            break;
        case 'B': 
            cout << "ACCOUNT BALANCE INQUIRY" << endl;
            return_msg = account_balance_inquiry(get_ac_num(), msg);
            break;
        case 'D': 
            cout << "DEPOSIT INTO ACCOUNT" << endl;
            return_msg = account_deposit(get_ac_num(), get_amount(), msg);
            break;
        case 'W': 
            cout << "WITHDRAW FROM ACCOUNT" << endl;
            return_msg = account_withdrawal(get_ac_num(), get_amount(), msg);
            break;
        case 'C': 
            cout << "CLOSE ACCOUNT" << endl;
            return_msg = account_close(get_ac_num(), msg);
            break;
        case 'I': 
            cout << "APPLY INTEREST" << endl;
            return_msg = apply_interest_all(get_amount(), msg);
            break;
        case 'P': 
            cout << "PRINT ALL" << endl;
            return_msg = print_all(msg);
            break;
        case 'E': 
            cout << "CLOSING ACCOUNTS AND TERMINATING" << endl;
            return_msg = close_all_and_exit(msg);
            break;

        case 'L':
            cout << "LOADING ACCOUNTS FROM FILE: accounts.csv" << endl;
            return_msg = load_accounts();
            break;

        case 'Q':
            cout << "SAVE AND QUIT, SAVING TO FILE: accounts.csv" << endl;
            return_msg = save_and_quit(msg);
            break;

        default:
            return_msg.accounts = msg.accounts;
            return_msg.msg = 5; // 5 - "Invalid Menu Option"
            break;

    }
    return return_msg;
}

int main() {
    map<int, string> errors;
    errors.insert(pair<int, string>(1, "Error: Invalid Account Number"));
    errors.insert(pair<int, string>(2, "Error: Insufficient Funds in Account"));
    errors.insert(pair<int, string>(3, "Error: Account does not Exist"));
    errors.insert(pair<int, string>(4, "Error: Invalid Deposit / Withdrawal Amount"));
    errors.insert(pair<int, string>(5, "Error: Not a Menu Option"));

    Message main_msg;
    main_msg.msg = 0;
    main_msg.accounts.reserve(100); //make room for at least 10 accounts.
    while (true) {
        main_msg = interaction_menu(main_msg);
        int error = main_msg.msg;
        auto err = errors.find(error);
        if(err != errors.end())
            cout << err->second << endl;
        if(main_msg.msg == 99) break;
    }
    return 1;
}
