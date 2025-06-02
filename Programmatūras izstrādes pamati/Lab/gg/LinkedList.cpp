#include "LinkedList.h"
#include <iostream>
using namespace std;

LinkedList::LinkedList() : head(nullptr) {}

LinkedList::~LinkedList()
{
    while (head)
    {
        Node *temp = head;
        head = head->next;
        delete temp;
    }
}

void LinkedList::append(int val)
{
    if (!head)
    {
        head = new Node(val);
        return;
    }
    Node *temp = head;
    while (temp->next)
        temp = temp->next;
    temp->next = new Node(val);
}

void LinkedList::print() const
{
    Node *temp = head;
    while (temp)
    {
        cout << temp->value << " ";
        temp = temp->next;
    }
    cout << endl;
}

bool LinkedList::allValuesAtLeastTwice() const
{
    for (Node *i = head; i != nullptr; i = i->next)
    {
        int count = 0;
        for (Node *j = head; j != nullptr; j = j->next)
        {
            if (i->value == j->value)
                count++;
        }
        if (count < 2)
            return false;
    }
    return true;
}
