Apraksts

Atmiņa: 20 MB
Laiks: 0.2 second
Ievadfails: articles.in
Izvadfails: articles.out


Jaunais tīmekļa ziņu portāls „Mini Comments” savām ziņām ir ieviesis inovatīvu rakstu komentēšanas principu. Lasītājiem atļauts par ziņu komentāros atstāt tikai vienu vārdu, kas izsaka viņu attieksmi pret rakstu.

Sistēmas administrators no sistēmas var saņemt pārskatu par rakstiem un tiem izteiktajiem komentāriem. Diemžēl izstrādātāji paspējuši realizēt tikai ļoti primitīvu pārskatu, kas satur visu rakstu identifikatorus un visus komentārus to reģistrēšanas secībā. Administrators vēlas redzēt komentārus sagrupētus pie katra raksta, kur sākumā ir svaigākie komentāri, t.i., pretēji to reģistrēšanas secībai.

Jūsu uzdevums ir uzrakstīt programmu, kas administratoram pieejamo pārskatu pārveido viņam vēlamajā formātā.

Ieejā ir fails, kas satur rakstu skaitu, rakstu identifikatorus ar to nosaukumiem pēdiņās un visus komentārus (raksta identifikators un komentārs par šo rakstu).

Ieejas dati ir korekti saskaņā ar ieejas datu formātu un dotajiem ierobežojumiem.

Ieeja:
Ievaddatu fails pirmajā rindā satur skaitli N no intervāla [1..100], kas nosaka rakstu daudzumu.
Seko N rindas ar rakstu nosaukumiem. Katra rinda sākas ar unikālu raksta identifikatoru (vesels skaitlis no intervāla [1..999]). Pēc identifikatora seko raksta nosaukums pēdiņās. Raksta nosaukums nav garāks par 200 simboliem. Raksta nosaukumā izmantoti tikai mazie un lielie latīņu alfabēta burti, vārdi nosaukumā atdalīti ar vienu tukšumu.
Pēc nosaukumiem seko komentāri. Katrs komentārs ir savā rindā. Sākumā ir raksta identifikators un tam seko komentārs. Komentāru veido viens vārds, kurā izmantoti tikai mazie un lielie latīņu alfabēta burti. Komentāra garums nepārsniedz 30 simbolus. Komentāri var atkārtoties gan dažādu rakstu, gan viena un tā paša raksta ietvaros.
Ja rakstam nav komentāru, tad to vietā izvada simbolu '-' (mīnusa zīmi).
Faila maksimālais garums ir 1MB.

Faila formāts:

N
ID_1 "Title_1"
...
ID_N "Title_N"
ID_1 Comment_1
...
ID_K Comment_M

Izeja:
Izvaddatu fails satur 2N rindas. Katram rakstam ir 2 rindas. Raksti sarindoti pieaugošā kārtībā pēc to identifikatoriem. Katra raksta divrindu bloks pirmajā rindā satur raksta nosaukumu bez pēdiņām un otrajā rindā satur visus raksta komentārus pretējā secībā (jaunākie komentāri sākumā).

Faila formāts:

Title_1
Comment_1_K ... Comment_1_1>
...
Title_N
Comment_N_L ... Comment_N_1