#include <iostream>

using namespace std;

//=== G4 =======================================
//Anna Zdancuka
//Izveidot divas programmas valodā C++, kas strādā ar vērtību virkni divos dažādos veidos:
//  1) to realizējot kā vienvirziena saistīto sarakstu, izmantojot dinamiskas datu struktūras,
//  2) izmantojot STL::list konteineru.
//Abās realizācijās ir jāizveido prasītā specifiskā vērtību virknes apstrādes funkcija un jānodemonstrē tā darbībā,
//cita starpā parādot gan sākotnējās, gan rezultējošās vērtības.
//Abās programmās: 
//  a) jābūt iespējai ievadīt saraksta elementus (izveidot patvaļīgu sarakstu),
//  b) jāpielieto uzrakstītā funkcija sarakstam,
//  c) jāizdrukā saraksts pēc funkcijas darbības.
//  d) beigās jāiznīcina saraksts - korekti jāatbrīvo izdalītā atmiņa(lietojot delete vai clear).
//Sīkākas prasības sk. Laboratorijas darbu noteikumos.
//
//G4. Uzrakstīt funkciju, kas  noskaidro, vai visas sarakstā sastopamās vērtības ir vismaz 2 eksemplāros.


// Struktūra, kas attēlo vienu mezglu saistītajā sarakstā
struct Node {
    int value;   // Mezgla vērtība
    Node* next;  // Rādītājs uz nākamo mezglu
    
    Node(int val) : value(val), next(nullptr) {}  // Konstruktors
};

// Klase vienvirziena saistītajam sarakstam
class LinkedList {
private:
    Node* head;  // Saraksta sākums
    
public:
    LinkedList() : head(nullptr) {}  // Konstruktors

    // Funkcija elementa pievienošanai saraksta beigās
    void append(int val) {
        if (!head) {
            head = new Node(val);
            return;
        }
        Node* temp = head;
        while (temp->next) temp = temp->next;
        temp->next = new Node(val);
    }

    // Funkcija saraksta izdrukai
    void print() const {
        Node* temp = head;
        while (temp) {
            cout << temp->value << " ";
            temp = temp->next;
        }
        cout << endl;
    }

    // Funkcija, kas pārbauda, vai visas vērtības ir vismaz divas reizes
    bool allValuesAtLeastTwice() {
        for (Node* i = head; i != nullptr; i = i->next) {
            int count = 0;
            for (Node* j = head; j != nullptr; j = j->next) {
                if (i->value == j->value) count++;
            }
            if (count < 2) return false; // Ja kāda vērtība parādās mazāk nekā 2 reizes, atgriežam false
        }
        return true;
    }

    // Destruktors, kas atbrīvo atmiņu
    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    LinkedList list;
    int n, value;

    // Lietotāja ievade
    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter elements:\n";
    for (int i = 0; i < n; i++) {
        cin >> value;
        list.append(value);
    }

    if (n < 0) {
        cout << "Error: Number of elements cannot be negative.\n";
        return 0; // Terminate the program if the input is invalid
    }

    if (n == 0) {
        cout << "List is empty. All values appear at least twice: false.\n";
        return 0;
    }

    // Izdrukā sākotnējo sarakstu
    cout << "Original list: ";
    list.print();
    
    // Pārbauda, vai visas vērtības ir vismaz divas reizes un izvada rezultātu
    if (list.allValuesAtLeastTwice())
        cout << "All values appear at least twice.\n";
    else
        cout << "Some values appear less than twice.\n";

    return 0;
}
