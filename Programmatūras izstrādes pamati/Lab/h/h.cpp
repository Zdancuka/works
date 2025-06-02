//=== H =======================================
//
//Izveidot programmu valodā C++.  Ja programma darbojas ar failu, nedrīkst dublēt visa faila saturu operatīvajā atmiņā.
//Ar faila komponenti tiek saprasts fiksēta garuma ieraksts. Sīkākās prasības sk. Laboratorijas darbu noteikumos.
//
//H. Uzrakstīt programmu, kas ļauj izveidot un labot bināru failu, kura glabājas datumi,
// un kura ieraksta struktūra ir sekojoša: gads (int), mēnesis (int), diena (int), ieraksta statuss (0 vai 1).
//  Programmai katrs jauns ieraksts jāieliek faila beigās. Ja failā tāds datums jau eksistē, tas nav jāpieliek.
//   Jāparedz iespēja (1) izmest faila komponenti (loģiski atzīmējot kā izmestu), (2) izdrukāt failā esošos datumus uz ekrāna,
// (3) izmest loģiski izmestas komponentes fiziski.
//
//Anna Zdancuka

#include <iostream>
#include <fstream>
#include <iomanip>

using namespace std;

struct Date
{
    int year;
    int month;
    int day;
    int status; // 1 - aktīvs, 0 - dzēsts
};

// Funkcija, kas pārbauda, vai fails satur konkrēto datumu
bool dateExists(const char *filename, const Date &d)
{
    ifstream file(filename, ios::binary);
    if (!file)
        return false;

    Date temp;
    while (file.read(reinterpret_cast<char *>(&temp), sizeof(Date)))
    {
        if (temp.status == 1 &&
            temp.year == d.year &&
            temp.month == d.month &&
            temp.day == d.day)
        {
            return true;
        }
    }
    return false;
}

bool isValidDate(int year, int month, int day)
{
    if (year < 1 || month < 1 || month > 12 || day < 1)
        return false;

    int daysInMonth[] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    bool leap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    if (leap && month == 2)
        return day <= 29;

    return day <= daysInMonth[month - 1];
}

bool readInt(const string &prompt, int &value)
{
    cout << prompt;
    cin >> value;
    if (cin.fail())
    {
        cin.clear();// Сброс флага ошибки
        cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Очистка мусора из ввода
        cout << "Kluda: jaievada vesels skaitlis!\n";
        return false;
    }
    return true;
}

// Funkcija, kas pievieno datumu
void addDate(const char *filename)
{
    Date d;
    if (!readInt("Gads: ", d.year))
        return;
    if (!readInt("Menesis: ", d.month))
        return;
    if (!readInt("Diena: ", d.day))
        return;

    if (!isValidDate(d.year, d.month, d.day))
    {
        cout << "Kluda: ievaditais datums nav derigs.\n";
        return;
    }

    d.status = 1;

    if (dateExists(filename, d))
    {
        cout << "Datums jau eksiste faila.\n";
        return;
    }

    ofstream file(filename, ios::binary | ios::app);
    file.write(reinterpret_cast<char *>(&d), sizeof(Date));
    cout << "Datums pievienots.\n";
}

// Funkcija, kas loģiski izdzēš datumu
void deleteDate(const char *filename)
{
    fstream file(filename, ios::binary | ios::in | ios::out);
    if (!file)
    {
        cout << "Neizdevas atvert failu.\n";
        return;
    }

    Date d;
    if (!readInt("Gads: ", d.year))
        return;
    if (!readInt("Menesis: ", d.month))
        return;
    if (!readInt("Diena: ", d.day))
        return;


    if (!isValidDate(d.year, d.month, d.day))
    {
        cout << "Kluda: ievaditais datums nav derigs.\n";
        return;
    }

    d.status = 1;

    Date temp;
    while (file.read(reinterpret_cast<char *>(&temp), sizeof(Date)))
    {
        if (temp.status == 1 &&
            temp.year == d.year &&
            temp.month == d.month &&
            temp.day == d.day)
        {

            file.seekp(-static_cast<int>(sizeof(Date)), ios::cur);
            temp.status = 0;
            file.write(reinterpret_cast<char *>(&temp), sizeof(Date));
            cout << "Datums logiski izdzests.\n";
            return;
        }
    }
    cout << "Datums nav atrasts.\n";
}

// Funkcija, kas izdrukā aktīvos datumus
void printDates(const char *filename)
{
    ifstream file(filename, ios::binary);
    if (!file)
    {
        cout << "Neizdevas atvert failu.\n";
        return;
    }

    Date temp;
    cout << "Datumi faila:\n";
    while (file.read(reinterpret_cast<char *>(&temp), sizeof(Date)))
    {
        if (temp.status == 1)
        {
            cout << setw(4) << temp.year << "-"
                 << setw(2) << setfill('0') << temp.month << "-"
                 << setw(2) << setfill('0') << temp.day << "\n";
        }
    }
}

// Funkcija, kas fiziski dzēš loģiski dzēstos ierakstus
void cleanFile(const char *filename)
{
    ifstream infile(filename, ios::binary);
    ofstream outfile("temp.dat", ios::binary);

    Date temp;
    while (infile.read(reinterpret_cast<char *>(&temp), sizeof(Date)))
    {
        if (temp.status == 1)
        {
            outfile.write(reinterpret_cast<char *>(&temp), sizeof(Date));
        }
    }

    infile.close();
    outfile.close();
    remove(filename);
    rename("temp.dat", filename);

    cout << "Logiski dzestie ieraksti ir fiziski iznemti no faila.\n";
}

int readChoice()
{
    int choice;
    while (true)
    {
        cout << "Izvelies darbibu: ";
        cin >> choice;
        if (cin.fail()) // Ja ievade ir nederīga
        {
            cin.clear();// Atiestatām kļūdu
            cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Ignorējam nederīgo ievadi
            cout << "Nederiga izvele, ievadi skaitli no 0 lidz 4.\n";
        }
        else if (choice >= 0 && choice <= 4) // Ja ievade ir derīga
        {
            return choice;
        }
        else
        {
            cout << "Izvele jabut starp 0 un 4.\n";
        }
    }
}

int main()
{
    const char *filename = "datumi.dat";
    int choice;

    do
    {
        cout << "\n--- DATUMU MENEDZMENTS ---\n";
        cout << "1. Pievienot jaunu datumu\n";
        cout << "2. Dzest datumu (logiski)\n";
        cout << "3. Izdrukat datumu sarakstu\n";
        cout << "4. Tirit failu (fiziski dzest logiski dzestos)\n";
        cout << "0. Iziet\n";

        choice = readChoice(); // Izmanto šo funkciju, lai iegūtu derīgu ievadi

        switch (choice)
        {
        case 1:
            addDate(filename);
            break;
        case 2:
            deleteDate(filename);
            break;
        case 3:
            printDates(filename);
            break;
        case 4:
            cleanFile(filename);
            break;
        case 0:
            cout << "Programma tiek izbeigta.\n";
            break;
        default:
            cout << "Nederiga izvele.\n";
            break;
        }
    } while (choice != 0);

    return 0;
}