#ifndef LINKEDLIST_H
#define LINKEDLIST_H

struct Node
{
    int value;
    Node *next;
    Node(int val) : value(val), next(nullptr) {}
};

class LinkedList
{
private:
    Node *head;

public:
    LinkedList();
    ~LinkedList();

    void append(int val);
    void print() const;
    bool allValuesAtLeastTwice() const;
};

#endif