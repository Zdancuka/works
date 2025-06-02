#include "stl_utils.h"
#include <iostream>
using namespace std;

bool allValuesAtLeastTwice(const list<int> &lst)
{
    for (auto it1 = lst.begin(); it1 != lst.end(); ++it1)
    {
        int count = 0;
        for (auto it2 = lst.begin(); it2 != lst.end(); ++it2)
        {
            if (*it1 == *it2)
                count++;
        }
        if (count < 2)
            return false;
    }
    return true;
}

// Print each element on a new line
void printListDown(const list<int> &lst)
{
    for (int val : lst)
    {
        cout << val << endl;
    }
}

// Append a value to the list
void addValue(list<int> &lst, int value)
{
    lst.push_back(value);
}
