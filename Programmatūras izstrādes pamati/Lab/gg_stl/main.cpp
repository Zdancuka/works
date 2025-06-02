#include <iostream>
#include <list>
#include <stdexcept>
#include "stl_utils.h"

using namespace std;

int main()
{
    list<int> lst;
    int n, value;

    try
    {
        cout << "Enter number of elements: ";
        cin >> n;
        if (n < 0)
            throw invalid_argument("Number of elements cannot be negative.");

        cout << "Enter elements:\n";
        for (int i = 0; i < n; i++)
        {
            cin >> value;
            addValue(lst, value); // use helper
        }

        cout << "Original list (inline): ";
        for (int v : lst)
            cout << v << " ";
        cout << endl;

        if (allValuesAtLeastTwice(lst))
            cout << "All values appear at least twice.\n";
        else
            cout << "Some values appear less than twice.\n";
    }
    catch (const exception &e)
    {
        cerr << "Exception caught: " << e.what() << endl;
    }

    return 0;
}
