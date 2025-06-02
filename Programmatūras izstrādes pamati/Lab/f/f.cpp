#include <iostream>
#include <fstream>
#include <string>
#include <cstring>

// Anna Zdančuka
//
//=== F =======================================
//
// Izveidot programmu valodā C++, kas apstrādā teksta failu secīgā režīmā.
// Dati no faila jānolasa pa vienai rindiņai. Nedrīkst dublēt visa faila saturu operatīvajā atmiņā.
// Sīkākas prasības sk. Laboratorijas darbu noteikumos.
//
// F. Doti divi faili f1 un f2. Failā f1 ir patvaļīgs teksts,
// failā f2 ir ne vairāk kā 40 vārdu pārīšu, kas atdalīti ar komatiem.
// Izdrukāt failā tekstu no ieejas faila f1, kurā visi vārdi, kas ir sastopami
// failā f2 kā pirmā komponente no pārīša, tiek aizstāti ar tam atbilstošo failā
// f2 norādīto vārdu. Drīkst uzskatīt, ka vārda garums failā nepārsniedz 40 simbolus.
// Par vārdu uzskatīt patvaļīgu simbolu virkni, kas atdalīta ar tukšumiem vai pieturas zīmēm
//(punkts, komats, apaļās iekavas, izsaukuma zīme, jautājuma zīme).

using namespace std;

bool isDelimiter(char c)
{
    return c == '.' || c == ',' || c == '(' || c == ')' || c == '!' || c == '?' || c == ' ' || c == '\n';
}

int main()
{
    ifstream f1("f1.txt"); 
    ofstream o("out.txt");

    if (!f1 || !o)
    {
        cout << "Error opening file!" << endl;
        return 1;
    }

    string line;
    char wordf1[41], wordf2[41]; // Buffers to store words

    // Read words from f1
    while (getline(f1, line))
    {
        int len_str = line.length();
        int i = 0;  // Index for iterating over the line
        while (i < len_str)
        {
             // Print and write delimiters as they are
            while (i < len_str && isDelimiter(line[i]))
            {
                o.put(line[i]);
                cout << line[i];
                i++;
            }

            if (i >= len_str)
                break;

            int wordf1_sign_index = 0;

            // Extract a word from the line
            while (i < len_str && !isDelimiter(line[i]) && wordf1_sign_index < 40)
            {
                wordf1[wordf1_sign_index] = line[i];
                i++;
                wordf1_sign_index++;
            }

            wordf1[wordf1_sign_index] = '\0';

            bool replaced = false;
            ifstream f2("f2.txt");

            while (f2.getline(wordf2, 40, ','))
            { // Read the first word of the pair from f2
                char replacement[41];
                f2.getline(replacement, 40); // Read the replacement word

                if (strcmp(wordf1, wordf2) == 0)
                { // If the words match, replace
                    o << replacement;
                    cout << replacement;
                    replaced = true;
                    break;
                }
            }

            f2.close();

            if (!replaced)
            {
                // If the word was not replaced, write the original
                o << wordf1;
                cout << wordf1;
            }
        }
        o.put('\n');
        cout << endl;
    }

    o.close();
    f1.close();
    return 0;
}