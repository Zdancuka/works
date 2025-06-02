#include <iostream>
#include <cassert>
#include <list>
#include "stl_utils.h"

using namespace std;

void runTests() {

    int passed = 0;
    int total = 7;

    // Test 1: All values twice
    list<int> a1 = {1, 1, 2, 3, 3};
    bool r1 = allValuesAtLeastTwice(a1);
    cout << "Test 1 (all values appear twice): " << (r1 ? "PASSED" : "FAILED") << endl;
    if (r1)
    {
        passed++;
    }

    // Test 2: one value appears only once
    list<int> b = {1, 1, 1};
    bool r2 = allValuesAtLeastTwice(b);
    cout << "Test 2 (1 appears once): " << (!r2 ? "PASSED" : "FAILED") << endl;
    if (!r2)
    {
        passed++;
    }

    // Test 3: empty list
    list<int> c;
    bool r3 = allValuesAtLeastTwice(c);
    cout << "Test 3 (empty list): " << (r3 ? "PASSED" : "FAILED") << endl;
    if (r3)
    {
        passed++;
    }
}

int main() {
    runTests();
    return 0;
}
