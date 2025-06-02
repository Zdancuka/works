// Izveidot programmu valodā C++, izmantojot objektorientētās programmēšanas līdzekļus 
//un strukturējot programmu vismaz trīs failos.
//Klases hederi obligāti novietot atsevišķā hedera failā (program.h). 
//Visas metodes realizēt ārpus hedera faila – speciālā C++ failā (program.cpp). 
//Funkcija main ievietojama vēl citā C++ failā (main.cpp). 
//Klases dati pēc noklusēšanas ir slēpti (private), bet metodes atklātas (public). 
//Šīs programmas ietvaros NAV obligāti jānodrošina tāda lietotāja saskarne, 
//kāda tika prasīta iepriekšējos trīs uzdevumos (main funkciju drīkst “cieti” iekodēt). 
//Citas prasības sk. Laboratorijas darbu noteikumos.

//D. "Izveidot klasi ""Trīsstūris"" - Triangle, kurā tiek glabāti trīs skaitļi - trīsstūra malu garumi. Klasei izveidot šādas metodes: (1)
// konstruktors, ar kuru tiek padotas sākotnējās vērtības, (2) destruktors, kurš paziņo par objekta likvidēšanu, (3) metode ""Mainīt""
//  - change ar trīs parametriem, kas izmaina malu garumu vērtības par attiecīgo daudzumu (nevis nomaina), (4) metode ""Drukāt""
//  - print, kas izdrukā uz ekrāna malu garumus, (5) metode ""Aprēķināt"" - calculate,
// kas izdrukā trīsstūra mediānu garumus un noskaidro trīsstūra tipu: šaurleņķa, taisnleņķa vai platleņķa."

//Anna Zdancuka az124095



#include <iostream>
#include <cmath>
#include "program.h"

using namespace std;


Triangle::Triangle(double a, double b, double c){
    side1 = a;
    side2 = b;
    side3 = c;
}

Triangle::~Triangle(){
    cout << "Triangle object destroyed." << endl;
}

void Triangle::change(double change_size)
{
    side1 += change_size;
    side2 += change_size;
    side3 += change_size;
}

void Triangle::print()
{
    cout << "Side 1:"<< side1 << endl;
    cout << "Side 2:"<< side2 << endl;
    cout << "Side 3:"<< side3 << endl;
}

void Triangle::calculate() 
{
    double a2 = side1 * side1;
    double b2 = side2 * side2;
    double c2 = side3 * side3;

    double median1 = 0.5 * sqrt(2 * b2 + 2 * c2 - a2);
    double median2 = 0.5 * sqrt(2 * a2 + 2 * c2 - b2);
    double median3 = 0.5 * sqrt(2 * a2 + 2 * b2 - c2);
    cout << "Medians: " << median1 << ", " << median2 << ", " << median3 << endl;
    

    cout<< "Trisstura tips:";
    if (a2 + b2 == c2 || a2 + c2 == b2 || b2 + c2 == a2) {
        cout << " taisnlenka" << endl;
    }
    else if (a2 + b2 > c2 && a2 + c2 > b2 && b2 + c2 > a2) {
        cout << " platlenka" << endl;
    }
    else {
        cout << " šaurlenka," << endl;
    }
}
