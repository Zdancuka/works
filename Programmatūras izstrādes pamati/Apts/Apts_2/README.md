Apraksts

Atmiņa: 5 MB
Laiks: 0.5 second
Ievadfails: team.in
Izvadfails: team.out


Lai piesaistītu lielāku TV skatītāju auditoriju, LTV1 nolēma radīt jaunu realitātes šovu "Komanda". Šovā piedalās vairākas komandas, kurām jāveic visdažādākie uzdevumi no visdažādākajām jomām. Tas nozīmē, ka vēlama komanda, kurā ir daudz dalībnieku ar visdažādākajām zināšanām un prasmēm.

Jauninājums, kas pietuvina notiekošo reālai dzīvei, šovā ir sekojošs. Kā jau dzīvē tas gadās, tad komandas drīkst pārvilināt citu komandu dalībniekus savā pusē (pierunājot, piespiežot, uzpērkot, utt.). Tas savukārt nozīmē, ka jāveic rūpīga komandas izveide un komandas biedri šova laikā „jāuzmana”.

Jūs esat nolēmi piedalīties šovā ar savu komandu. Jūsu komanda tiek veidota kopīgi. Katrs komandas dalībnieks drīkst aicināt komandā vienu sievieti un vienu vīrieti, kuri vēl nav komandā un kuriem aicinātājs ļoti uzticas. Ja kāds komandas dalībnieks nevar atrast jaunu uzticamu komandas dalībnieku, tad viņš neveic uzaicināšanu.

Jums ir būtiski pārvaldīt un uzmanīt savu komandu. Visvairāk Jūs uzticaties savām aicinātajām personām. Nākošās uzticamākās personas ir šo personu aicinātās personas. Jo lielāks "attālums līdz personai", jo mazāk tai uzticaties un tā ir jākontrolē.

Nepieciešama programma, kas ātri uzrāda personas pēc to "uzticamības līmeņiem", sākot ar mazāk uzticamākām personām. Vienkāršības pēc katra persona tiek identificēta ar veselu pozitīvu skaitli.

Ieejas dati ir korekti saskaņā ar ieejas datu formātu un dotajiem ierobežojumiem.

Ieeja:
Ieejas fails satur katra komandas dalībnieka aicinātās personas. Katram komandas dalībniekam atbilst viena rinda ieejas datu failā formā:

Participant Woman Man

Participant nosaka komandas dalībnieku, kuram seko viņa aicinātās personas – sieviete Woman un vīrietis Man.
Visas trīs personas tiek identificētas ar unikālu skaitli no intervāla [1..4’000’000’000]. Lai apzīmētu uzticama vīrieša un/vai sievietes neuzaicināšanu, tiek izmantota nulle (0).
Dalībnieki tiek doti patvaļīgā secībā. Faila pēdējā rinda satur „0 0 0”, kas nozīmē, ka ieejas dati ir beigušies.
Failā nav vairāk kā 10’000 rindu, t.i. komandas maksimālais lielums ir 9999.

Izeja:
Atbilstoši ieejas datu failam izejā ir komandu dalībnieki sagrupēti pa "uzticamības līmeņiem" formā:

Level: Participant_1 Participant_2 ... Participant_n

Level nosaka "uzticamības līmeni".
Participant_i ir dalībnieka identifikators, kas ir atbilstošajā uzticamības līmenī.
Vispirms tiek drukāts zemākas uzticamības līmenis (lielāks skaitlis) un tad augstākas uzticamības līmenis (mazāks skaitlis). Jums pašam ir vislielākais uzticamības līmenis, kas apzīmējas ar skaitli 0. Jūsu aicinātajām personām uzticamības līmenis ir 1. Šo personu aicinātajām personām līmenis ir 2, utt.

Lai atbilde vienmēr būtu viennozīmīga, tad komanda var tikt attēlota bināra koka veidā, kur kreisie bērni ir sievietes, bet labie bērni ir vīrieši. Katrā uzticamības līmenī personas tiek uzskaitītas no kreisās puses uz labo.
Lai saprastu rezultāta iegūšanu, skatīt dotos publiskos testpiemērus.