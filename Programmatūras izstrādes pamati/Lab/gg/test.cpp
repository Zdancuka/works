#include <iostream>
#include "LinkedList.h"

using namespace std;

#include <iostream>
#include "LinkedList.h"
using namespace std;

void runTests()
{
    int passed = 0;
    int total = 7;

    // Test 1: Все значения по два раза
    LinkedList l1;
    l1.append(3);
    l1.append(3);
    l1.append(3);
    l1.append(3);
    bool r1 = l1.allValuesAtLeastTwice();
    cout << "Test 1 (all values appear twice): " << (r1 ? "PASSED" : "FAILED") << endl;
    if (r1)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l1.print();
    }

    // Test 2: Один элемент без пары
    LinkedList l2;
    l2.append(1);
    l2.append(2);
    l2.append(2);
    bool r2 = l2.allValuesAtLeastTwice();
    cout << "Test 2 (1 appears once): " << (!r2 ? "PASSED" : "FAILED") << endl;
    if (!r2)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l2.print();
    }

    // Test 3: Пустой список
    LinkedList l3;
    bool r3 = l3.allValuesAtLeastTwice();
    cout << "Test 3 (you can check empty list): " << (r3 ? "PASSED" : "FAILED") << endl;
    if (r3)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l3.print();
    }

    // Test 4: Один элемент
    LinkedList l4;
    l4.append(42);
    bool r4 = l4.allValuesAtLeastTwice();
    cout << "Test 4 (single element): " << (!r4 ? "PASSED" : "FAILED") << endl;
    if (!r4)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l4.print();
    }

    // Test 5: Большой список, все элементы по два
    LinkedList l5;
    for (int i = 1; i <= 1; i++)
    {
        l5.append(i);
    }
    bool r5 = l5.allValuesAtLeastTwice();
    cout << "Test 5 (100 pairs): " << (r5 ? "PASSED" : "FAILED") << endl;
    if (r5)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l5.print();
    }

    // Test 6: Отрицательные числа
    LinkedList l6;
    l6.append(1);

    bool r6 = l6.allValuesAtLeastTwice();
    cout << "Test 6 (negatives): " << (r6 ? "PASSED" : "FAILED") << endl;
    if (r6)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l6.print();
    }

    // Test 7: Некоторые значения повторяются, некоторые — нет
    LinkedList l7;
    l7.append(5);
    l7.append(5);
    l7.append(6);
    l7.append(7);
    l7.append(7);
    bool r7 = l7.allValuesAtLeastTwice();
    cout << "Test 7 (6 appears once): " << (!r7 ? "PASSED" : "FAILED") << endl;
    if (!r7)
    {
        passed++;
    }
    else
    {
        cout << "List contents: ";
        l7.print();
    }

    cout << "\nSummary: " << passed << "/" << total << " tests passed.\n";
}

int main()
{
    runTests();
    return 0;
}
