//=== G =======================================
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
//G. Uzrakstīt funkciju, kas  noskaidro, vai visas sarakstā sastopamās vērtības ir vismaz 2 eksemplāros.
//=== GG =========================================
//
//GG – STL list un saistītais saraksts ar izņēmumsituāciju apstrādi un vienībtestēšanu**.
//
//* atrisināt uzdevumu G divos veidos:
//  a) izmantojot dinamiskas datu struktūras (saistīto sarakstu vtml.),
//  b) izmantojot STL::list konteineru.
//
//** tas pats uzdevums, kas G, bet tā risinājums (a) jāpapildina ar divām lietām:
//  1) vismaz viena no datu pārbaudēm jārealizē, izmantojot izņēmumsituāciju apstrādes (exception handling) mehānismu,
// 2) vismaz viena funkcija (vēlams, galvenā) ir jānotestē, izmantojot vienībtestēšanu, kur attiecīgā funkcija būtu jāpārbauda uz vismaz trīs dažādiem nosacījumiem;
//    šim nolūkam, kā minimums, ir nepieciešams:
//    (1) šo funkciju iznest ārā citā failā (nekā funkcija main),
//    (2) izveidot otru projektu speciāli šīs funkcijās testēšanai (tātad, kopā būs divi projekti, parastais, kas izmantos funkciju, otrais, kas testēs).
