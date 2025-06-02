#include <iostream>
#include <fstream>

using namespace std;

const unsigned long int MAX_Participant_len = 4000000000;
const int MAX_Comand_len = 10000;
const int Min_Participant_len = 0;
const int Max_level = 15; // Maksimālais līmenis ir 15, jo komandas izmērs nevar pārsniegt 9999.
                          // Katrā nākamajā līmenī dalībnieku skaits dubultojas (1, 2, 4, 8, ...).
                          // 2^13 = 8192 un 2^14 = 16384, kas jau pārsniedz limitu.
                          // Tāpēc maksimālais līmenis, kurā var iekļauties, ir ne vairāk kā 14 (t.i., 15 ieskaitot 0. līmeni).
                          //
                          //Ja velas var izmantot šo programu tam:
                          //const unsigned int max_participants = 9999; // Максимально допустимое количество участников
                          //unsigned int level = 0;
                          //unsigned int total = 0;
                          //unsigned int current_level_size = 1;
                          //    while (total + current_level_size <= max_participants) {
                          //total += current_level_size;
                          //cout << "Level " << level << ": " << current_level_size << " participants, total = " << total << endl;
                          //current_level_size *= 2;
                          //level++;}
                          //

struct Comand {
    unsigned long int id;
    unsigned long int women;
    unsigned long int men;
};

struct ReliabilityLevel {
    unsigned long int level;
    unsigned long int member[9999];
    int size = 0;
};

int main() {
    ifstream fin("team.in");
    ofstream fout("team.out");

    Comand comand[MAX_Comand_len];
    

    int count = 0;
    // Nolasām rakstus
    while (count < MAX_Comand_len && fin >> comand[count].id >> comand[count].women >> comand[count].men) {
        if (comand[count].women > MAX_Participant_len || comand[count].men > MAX_Participant_len) {
            cerr << "Error: the number of participants exceeds the maximum allowed value!" << endl;
            return 2;
        }
        if (comand[count].women == Min_Participant_len && comand[count].men == Min_Participant_len && comand[count].id == Min_Participant_len ) {
            break;
        }
        count++;
    }

    fin.close();

    bool flag = 0;
    ReliabilityLevel levels[Max_level];
    int level_curr = 0;

    // Найдём корень — кто ни у кого не встречается как потомок
    bool isChild[MAX_Comand_len] = {false};
    for (int i = 0; i < count; i++) {
        for (int j = 0; j < count; j++) {
            if (comand[j].women == comand[i].id || comand[j].men == comand[i].id) {
                isChild[i] = true;
                break;
            }
        }
    }

    for (int i = 0; i < count; i++) {
        if (!isChild[i]) {
            levels[level_curr].member[levels[0].size] = comand[i].id;
            levels[level_curr].size++;
        }
    }
    
    while (levels[level_curr].size > 0) {
        for (int i = 0; i < levels[level_curr].size; i++) {
            unsigned long int parentId = levels[level_curr].member[i];
            for (int j = 0; j < count; j++) {
                if (comand[j].id == parentId) {
                    if (comand[j].women != 0)
                        levels[level_curr + 1].member[levels[level_curr + 1].size++] = comand[j].women;
                    if (comand[j].men != 0)
                        levels[level_curr + 1].member[levels[level_curr + 1].size++] = comand[j].men;
                }
            }
        }
        level_curr++;
    }

    // Печатаем уровни
    for (int i = level_curr - 1; i >= 0; i--) {
        fout << i << ": ";
        for (int j = 0; j < levels[i].size; j++) {
            fout << levels[i].member[j] << " ";
        }
        fout << endl;
    }

    fout.close();
    return 0;
}