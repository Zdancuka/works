#include <iostream>
#include <fstream>

using namespace std;

const int MAX_ARTICLES = 100;
const int MAX_TITLE_LEN = 201;
const int MAX_COMMENT_LEN = 31;
const int MAX_COMMENTS = 10000;

struct Article {
    int id;
    char title[MAX_TITLE_LEN];
};

struct Comment {
    int articleId;
    char comment[MAX_COMMENT_LEN];
};

void sortArticles(Article articles[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-1-i; j++) {
            if (articles[j].id > articles[j+1].id) {
                Article temp = articles[j];
                articles[j] = articles[j+1];
                articles[j+1] = temp;
            }
        }
    }
}

int extractId(const char *line) {
    int i = 0;
    int result = 0;
    while (line[i] >= '0' && line[i] <= '9') {
        result = result * 10 + (line[i] - '0');
        i++;
    }
    return result;
}

void extractTitle(const char *line, char *dest) {
    int i = 0;
    // Atrodam pirmo pēdiņu
    while (line[i] != '"' && line[i] != '\0') i++;
    if (line[i] == '\0') {
        dest[0] = '\0';
        return;
    }
    i++; // aiz pēdiņas

    int j = 0;
    while (line[i] != '"' && line[i] != '\0' && j < MAX_TITLE_LEN - 1) {
        dest[j++] = line[i++];
    }
    dest[j] = '\0';
}

void extractComment(const char *line, char *dest) {
    int i = 0;
    // Izlaist ID ciparus
    while (line[i] >= '0' && line[i] <= '9') i++;
    // Izlaist atstarpes
    while (line[i] == ' ') i++;
    // Kopēt komentāru
    int j = 0;
    while (line[i] != '\0' && j < MAX_COMMENT_LEN - 1) {
        dest[j++] = line[i++];
    }
    dest[j] = '\0';
}

int main() {
    ifstream fin("articles.in");
    ofstream fout("articles.out");

    int n;
    fin >> n;
    fin.ignore();

    Article articles[MAX_ARTICLES];
    Comment comments[MAX_COMMENTS];
    int commentCount = 0;

    // Nolasām rakstus
    for (int i = 0; i < n; i++) {
        char line[MAX_TITLE_LEN + 20] = {};
        fin.getline(line, sizeof(line));
        articles[i].id = extractId(line);
        extractTitle(line, articles[i].title);
    }

    // Nolasām komentārus līdz faila beigām
    while (fin) {
        char line[100];
        fin.getline(line, sizeof(line));
        if (line[0] == '\0') continue; // tukša rinda
        if (line[0] < '0' || line[0] > '9') break; // Ja nav ID, beigt

        int id = extractId(line);
        char comment[MAX_COMMENT_LEN];
        extractComment(line, comment);

        comments[commentCount].articleId = id;
        for (int i = 0; i < MAX_COMMENT_LEN; i++) {
            comments[commentCount].comment[i] = comment[i];
            if (comment[i] == '\0') break;
        }
        commentCount++;
        if (commentCount >= MAX_COMMENTS) break;
    }

    // Kārtojam rakstus pēc ID
    sortArticles(articles, n);

    // Izvadām rakstus un komentārus (komentāri jaunākie pirmie)
    for (int i = 0; i < n; i++) {
        fout << articles[i].title << "\n";

        bool hasComments = false;
        bool first = true;
        for (int j = commentCount - 1; j >= 0; j--) {
            if (comments[j].articleId == articles[i].id) {
                if (!first) fout << ' ';
                fout << comments[j].comment;
                first = false;
                hasComments = true;
            }
        }
        if (!hasComments) fout << "-";
        fout << "\n";
    }

    fin.close();
    fout.close();

    return 0;
}
