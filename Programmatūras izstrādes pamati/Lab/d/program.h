// Izveidot programmu valodā C++, izmantojot objektorientētās programmēšanas līdzekļus 
//un strukturējot programmu vismaz trīs failos.
//Klases hederi obligāti novietot atsevišķā hedera failā (program.h). 
//Visas metodes realizēt ārpus hedera faila – speciālā C++ failā (program.cpp). 
//Funkcija main ievietojama vēl citā C++ failā (main.cpp). 
//Klases dati pēc noklusēšanas ir slēpti (private), bet metodes atklātas (public). 
//Šīs programmas ietvaros NAV obligāti jānodrošina tāda lietotāja saskarne, 
//kāda tika prasīta iepriekšējos trīs uzdevumos (main funkciju drīkst “cieti” iekodēt). 
//Citas prasības sk. Laboratorijas darbu noteikumos.

//D8. "Izveidot klasi ""Trīsstūris"" - Triangle, kurā tiek glabāti trīs skaitļi - trīsstūra malu garumi. Klasei izveidot šādas metodes: (1)
// konstruktors, ar kuru tiek padotas sākotnējās vērtības, (2) destruktors, kurš paziņo par objekta likvidēšanu, (3) metode ""Mainīt""
//  - change ar trīs parametriem, kas izmaina malu garumu vērtības par attiecīgo daudzumu (nevis nomaina), (4) metode ""Drukāt""
//  - print, kas izdrukā uz ekrāna malu garumus, (5) metode ""Aprēķināt"" - calculate,
// kas izdrukā trīsstūra mediānu garumus un noskaidro trīsstūra tipu: šaurleņķa, taisnleņķa vai platleņķa."

//Anna Zdancuka az124095

#ifndef PROGRAM_H
#define PROGRAM_H

class Triangle {
private:
    double side1, side2, side3;

public:
    // Constructor
    Triangle(double a, double b, double c);

    // Destructor
    ~Triangle();

    // Method to change side lengths
    void change(double change_size);

    // Method to print side lengths
    void print();

    // Method to calculate medians and triangle type
    void calculate();
};

#endif // PROGRAM_H
