#include <iostream>
#include <list>

using namespace std;

//=== G4 =======================================
//Anna Zdancuka az24095
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


// Funkcija, kas pārbauda, vai visas vērtības sarakstā ir vismaz divas reizes
bool allValuesAtLeastTwice(const list<int>& lst) {
    for (auto it1 = lst.begin(); it1 != lst.end(); ++it1) {
        int count = 0;
        for (auto it2 = lst.begin(); it2 != lst.end(); ++it2) {
            if (*it1 == *it2) count++;
        }
        if (count < 2) return false; // Ja kāda vērtība parādās mazāk nekā 2 reizes, atgriežam false
    }
    return true;
}

// Funkcija saraksta izdrukai
void printList(const list<int>& lst) {
    for (int val : lst) {
        cout << val << " ";
    }
    cout << endl;
}

int main() {
    list<int> lst;
    int n, value;

    // Lietotāja ievade
    cout << "Enter number of elements: ";
    cin >> n;
    cout << "Enter elements:\n";
    for (int i = 0; i < n; i++) {
        cin >> value;
        lst.push_back(value);
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
    printList(lst);
    
    // Pārbauda, vai visas vērtības ir vismaz divas reizes un izvada rezultātu
    if (allValuesAtLeastTwice(lst))
        cout << "All values appear at least twice.\n";
    else
        cout << "Some values appear less than twice.\n";

    return 0;
}
