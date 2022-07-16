set_fen_arr = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

text_val_num = 0;

text_val_split = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

arr = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2
rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3
rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3
rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4
rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4
rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 5
rnbqkbnr/1p1p1ppp/p3p3/8/3NP3/3B4/PPP2PPP/RNBQK2R b KQkq - 1 5
r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/3B4/PPP2PPP/RNBQK2R w KQkq - 2 6
r1bqkbnr/1p1p1ppp/p1N1p3/8/4P3/3B4/PPP2PPP/RNBQK2R b KQkq - 0 6
r1bqkbnr/3p1ppp/p1p1p3/8/4P3/3B4/PPP2PPP/RNBQK2R w KQkq - 0 7
r1bqkbnr/3p1ppp/p1p1p3/8/4P3/3B4/PPP2PPP/RNBQ1RK1 b kq - 1 7
r1bqkbnr/5ppp/p1p1p3/3p4/4P3/3B4/PPP2PPP/RNBQ1RK1 w kq d6 0 8
r1bqkbnr/5ppp/p1p1p3/3p4/4P3/3B4/PPPN1PPP/R1BQ1RK1 b kq - 1 8
r1bqkb1r/5ppp/p1p1pn2/3p4/4P3/3B4/PPPN1PPP/R1BQ1RK1 w kq - 2 9
r1bqkb1r/5ppp/p1p1pn2/3p4/4P3/1P1B4/P1PN1PPP/R1BQ1RK1 b kq - 0 9
r1bqk2r/5ppp/p1p1pn2/3p4/1b2P3/1P1B4/P1PN1PPP/R1BQ1RK1 w kq - 1 10
r1bqk2r/5ppp/p1p1pn2/3p4/1b2P3/1P1B4/PBPN1PPP/R2Q1RK1 b kq - 2 10
r1bqk2r/5ppp/2p1pn2/p2p4/1b2P3/1P1B4/PBPN1PPP/R2Q1RK1 w kq - 0 11
`;

logical_chess_1 = `
[Event "Logical Chess, Move by Move #01"]
[Site "Berlin GER"]
[Date "1907.??.??"]
[Round "1"]
[White "Scheve"]
[Black "Teichmann"]
[Result "0-1"]
[ECO "C53"]
[PlyCount "34"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Qe7 5. O-O d6 6. d4 Bb6 7. a4 a6 8. a5 Ba7
9. h3 Nf6 10. dxe5 Nxe5 11. Nxe5 Qxe5 12. Nd2 Bxh3 13. gxh3 Qg3+ 14. Kh1 Qxh3+
15. Kg1 Ng4 16. Nf3 Qg3+ 17. Kh1 Bxf2 0-1

 `;

logical_chess_2 = `[Event "Logical Chess, Move by Move #02"]
[Site "Liege BEL"]
[Date "1928.??.??"]
[Round "2"]
[White "Liubarski"]
[Black "Soultanbeieff"]
[Result "0-1"]
[ECO "C53"]
[PlyCount "32"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Bb6 5. d4 Qe7 6. O-O Nf6 7. d5 Nb8 8. Bd3
d6 9. h3 h6 10. Qe2 g5 11. Nh2 g4 12. hxg4 Rg8 13. Bxh6 Nxg4 14. Be3 Nxh2 15.
Kxh2 Qh4+ 16. Kg1 Qh3 0-1

`;

logical_chess_3 = `
[Event "Logical Chess, Move by Move #03"]
[Site "Ghent BEL"]
[Date "1929.??.??"]
[Round "3"]
[White "Colle"]
[Black "Delvaux"]
[Result "1-0"]
[ECO "D05"]
[PlyCount "43"]

1. d4 d5 2. Nf3 Nf6 3. e3 e6 4. Bd3 c5 5. c3 Nc6 6. Nbd2 Be7 7. O-O c4 8. Bc2
b5 9. e4 dxe4 10. Nxe4 O-O 11. Qe2 Bb7 12. Nfg5 h6 13. Nxf6+ Bxf6 14. Qe4 g6
15. Nxe6 fxe6 16. Qxg6+ Bg7 17. Qh7+ Kf7 18. Bg6+ Kf6 19. Bh5 Ne7 20. Bxh6 Rg8
21. h4 Bxh6 22. Qf7# 1-0


`;

logical_chess_4 = `
[Event "Logical Chess, Move by Move #04"]
[Site "London ENG"]
[Date "1891.??.??"]
[Round "4"]
[White "Blackburne"]
[Black "Blanchard"]
[Result "1-0"]
[ECO "C30"]
[PlyCount "35"]

1. e4 e5 2. f4 Bc5 3. Nc3 Nc6 4. Nf3 exf4 5. d4 Bb4 6. Bxf4 d5 7. e5 Bxc3+ 8.
bxc3 Be6 9. Bd3 h6 10. O-O Nge7 11. Rb1 b6 12. Qd2 O-O 13. Bxh6 gxh6 14. Qxh6
Ng6 15. Ng5 Re8 16. Rxf7 Bxf7 17. Qh7+ Kf8 18. Qxf7# 1-0


`;

logical_chess_5 = `
[Event "Logical Chess, Move by Move #05"]
[Site "Dresden GER"]
[Date "1915.??.??"]
[Round "5"]
[White "Ruger"]
[Black "Gebhard"]
[Result "1-0"]
[ECO "C54"]
[PlyCount "33"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. d4 exd4 6. cxd4 Bb4+ 7. Nc3 O-O 8.
d5 Ne7 9. e5 Ne4 10. Qc2 Nxc3 11. bxc3 Bc5 12. Ng5 Ng6 13. h4 h6 14. d6 hxg5
15. hxg5 Re8 16. Qxg6 Rxe5+ 17. Kf1 1-0
`;

logical_chess_6 = `
[Event "Logical Chess, Move by Move #06"]
[Site "Vienna AUT"]
[Date "1899.??.??"]
[Round "6"]
[White "Zeissl"]
[Black "Walthoffen"]
[Result "0-1"]
[ECO "C63"]
[PlyCount "34"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 f5 4. d4 fxe4 5. Nxe5 Nxe5 6. dxe5 c6 7. Bc4 Qa5+ 8.
Nc3 Qxe5 9. O-O d5 10. Bb3 Nf6 11. Be3 Bd6 12. g3 Bg4 13. Qd2 Bf3 14. Bf4 Qf5
15. Nd1 Qh3 16. Ne3 Ng4 17. Rfe1 Qxh2+ 0-1

`;

logical_chess_7 = `
[Event "Logical Chess, Move by Move #07"]
[Site "Vienna AUT"]
[Date "1926.??.??"]
[Round "7"]
[White "Spielmann"]
[Black "Wahle"]
[Result "1-0"]
[ECO "C01"]
[PlyCount "33"]

1. e4 e6 2. d4 d5 3. Nc3 Nf6 4. exd5 exd5 5. Bg5 Be7 6. Bd3 Nc6 7. Nge2 Nb4 8.
Ng3 Nxd3+ 9. Qxd3 g6 10. O-O c6 11. Rae1 O-O 12. Rxe7 Qxe7 13. Qf3 Kg7 14. Nce4
dxe4 15. Nxe4 Qe6 16. Bxf6+ Kg8 17. Qf4 1-0


`;

logical_chess_8 = `
[Event "Logical Chess, Move by Move #08"]
[Site "Budapest HUN"]
[Date "1929.??.??"]
[Round "8"]
[White "Przepiorka"]
[Black "Prokes"]
[Result "1-0"]
[ECO "D05"]
[PlyCount "47"]

1. d4 Nf6 2. Nf3 e6 3. e3 d5 4. Bd3 c5 5. c3 Nbd7 6. Nbd2 Bd6 7. O-O O-O 8. Re1
Qc7 9. e4 cxd4 10. cxd4 dxe4 11. Nxe4 b6 12. Bg5 Nxe4 13. Rxe4 Bb7 14. Rc1 Qb8
15. Rh4 g6 16. Bb5 Qe8 17. Ne5 Bc8 18. Rxc8 Qxc8 19. Bxd7 Qc7 20. Ng4 h5 21.
Nf6+ Kg7 22. Nxh5+ gxh5 23. Qxh5 Rh8 24. Bh6+ 1-0

`;

logical_chess_9 = `
[Event "Logigal Chess, Move by Move #09"]
[Site "Weston-Super-Mare ENG"]
[Date "1924.??.??"]
[Round "9"]
[White "Znosko-Borovsky"]
[Black "Mackenzie"]
[Result "1-0"]
[ECO "C90"]
[PlyCount "59"]
[EventDate "1924.??.??"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 4. Ba4 Nf6 5. O-O Be7 6. Re1 b5 7. Bb3 d6 8. c3
Na5 9. Bc2 c5 10. d4 Qc7 11. h3 Nc6 12. Be3 O-O 13. Nbd2 Bd7 14. Rc1 Ne8 15.
Nf1 g6 16. Bh6 Ng7 17. Ne3 Rae8 18. Nd5 Qb7 19. Nxe7+ Rxe7 20. dxc5 dxc5 21.
Qd6 c4 22. Qf6 Nh5 23. Qh4 Ng7 24. Be3 Ne6 25. Qf6 Qc7 26. Bh6 Rc8 27. Rcd1
Ree8 28. Nh2 Qd8 29. Ng4 Qe7 30. Qxe7 1-0

`;

logical_chess_10 = `
[Event "Logical Chess, Move by Move #10"]
[Site "Nuremburg GER"]
[Date "1889.??.??"]
[Round "10"]
[White "Tarrasch"]
[Black "Eckhart"]
[Result "1-0"]
[ECO "C05"]
[PlyCount "33"]

1. e4 e6 2. d4 d5 3. Nd2 Nf6 4. e5 Nfd7 5. Bd3 c5 6. c3 Nc6 7. Ne2 Qb6 8. Nf3
Be7 9. O-O O-O 10. Nf4 Nd8 11. Qc2 f5 12. exf6 Nxf6 13. Ng5 g6 14. Bxg6 hxg6
15. Qxg6+ Kh8 16. Qh6+ Kg8 17. Ng6 1-0

`;

logical_chess_11 = `[Event "Logical Chess, Move by Move #11"]
[Site "Bilin"]
[Date "1930.??.??"]
[Round "11"]
[White "Flohr"]
[Black "Pitschak"]
[Result "0-1"]
[ECO "A46"]
[PlyCount "34"]

1. d4 Nf6 2. Nf3 e6 3. Nbd2 c5 4. e3 b6 5. Bd3 Bb7 6. O-O Be7 7. c4 O-O 8. b3
d5 9. Qc2 Nc6 10. a3 cxd4 11. cxd5 Qxd5 12. exd4 Nxd4 13. Qb1 Rfd8 14. Ne1 Qh5
15. Bb2 Bd6 16. g3 Ng4 17. h4 Qxh4 0-1


`;

logical_chess_12 = `
[Event "Logical Chess, Move by Move #12"]
[Site "Liebwerda"]
[Date "1934.??.??"]
[Round "12"]
[White "Pitschak"]
[Black "Flohr"]
[Result "0-1"]
[ECO "A22"]
[PlyCount "38"]

1. c4 e5 2. Nc3 Nf6 3. g3 d5 4. cxd5 Nxd5 5. Bg2 Nb6 6. Nf3 Nc6 7. O-O Be7 8.
d3 O-O 9. Be3 Bg4 10. h3 Bh5 11. Rc1 Qd7 12. Na4 Bxf3 13. Bxf3 Qxh3 14. Bxc6
bxc6 15. Rxc6 Nd5 16. Qe1 f5 17. Bc5 f4 18. Bxe7 fxg3 19. fxg3 Ne3 0-1

`;

logical_chess_13 = `[Event "Logical Chess, Move By Move #13"]
[Site "Prague"]
[Date "1952.??.??"]
[Round "13"]
[White "Dobias"]
[Black "Podgorny"]
[Result "1-0"]
[ECO "C10"]
[PlyCount "39"]

1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Be7 6. Bd3 Ngf6 7. Qe2 O-O 8.
O-O Nxe4 9. Qxe4 Nf6 10. Qh4 b6 11. Bg5 g6 12. c4 Bb7 13. d5 exd5 14. Rfe1 h6
15. Qxh6 Ng4 16. Qh4 Bxg5 17. Nxg5 Nf6 18. Qh6 d4 19. Re6 Re8 20. Bxg6 1-0


`;

logical_chess_14 = `
[Event "Logical Chess, Move By Move #14"]
[Site "GER"]
[Date "1916.??.??"]
[Round "14"]
[White "Tarrasch"]
[Black "Mieses"]
[Result "1-0"]
[ECO "C10"]
[PlyCount "39"]

1. e4 e6 2. d4 d5 3. Nc3 dxe4 4. Nxe4 Nd7 5. Nf3 Ngf6 6. Bd3 Be7 7. O-O Nxe4 8.
Bxe4 Nf6 9. Bd3 b6 10. Ne5 O-O 11. Nc6 Qd6 12. Qf3 Bd7 13. Nxe7+ Qxe7 14. Bg5
Rac8 15. Rfe1 Rfe8 16. Qh3 Qd6 17. Bxf6 gxf6 18. Qh6 f5 19. Re3 Qxd4 20. c3 1-0


`;

logical_chess_15 = `
[Event "Logical Chess, Move By Move #15"]
[Site "Vienna (Simul) AUT"]
[Date "1936.??.??"]
[Round "15"]
[White "Alekhine"]
[Black "Poindle"]
[Result "1-0"]
[ECO "C67"]
[PlyCount "59"]

1. e4 e5 2. Nf3 Nc6 3. Bb5 Nf6 4. O-O Nxe4 5. d4 Nd6 6. dxe5 Nxb5 7. a4 Nd6 8.
exd6 Bxd6 9. Ng5 Be7 10. Qh5 g6 11. Qh6 Bf8 12. Re1+ Ne7 13. Ne4 f5 14. Nf6+
Kf7 15. Qh4 Bg7 16. Bg5 h6 17. Qc4+ Kf8 18. Rxe7 Qxe7 19. Nh7+ Rxh7 20. Bxe7+
Kxe7 21. Qxc7 Bxb2 22. Ra2 Bf6 23. c4 Kf7 24. Re2 Rh8 25. Qd6 a5 26. Nc3 Ra6
27. Qd5+ Kg7 28. Nb5 Re6 29. Nd6 Rd8 30. Kf1 1-0


`;

logical_chess_16 = `
[Event "Logical Chess, Move By Move #16"]
[Site "Nuremberg GER"]
[Date "1889.??.??"]
[Round "16"]
[White "Tarrasch"]
[Black "Kurschner"]
[Result "1-0"]
[ECO "D20"]
[PlyCount "43"]

1. d4 d5 2. c4 dxc4 3. e3 Bf5 4. Bxc4 e6 5. Qb3 Be4 6. f3 Bc6 7. Ne2 Nf6 8. e4
Be7 9. Nbc3 Qc8 10. d5 exd5 11. exd5 Bd7 12. d6 Bxd6 13. Bxf7+ Kd8 14. Bg5 Nc6
15. Ne4 Be7 16. Bxf6 gxf6 17. O-O-O Ne5 18. Nf4 Qb8 19. Qe6 Rf8 20. Nxf6 Bd6
21. Nxd7 Nxd7 22. Rhe1 1-0


`;

logical_chess_17 = `[Event "Logical Chess, Move by Move #17"]
[Site "Hastings ENG"]
[Date "1895.??.??"]
[Round "17"]
[White "Pillsbury"]
[Black "Mason"]
[Result "1-0"]
[ECO "D53"]
[PlyCount "71"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. Nf3 b6 6. e3 Bb7 7. Rc1 dxc4 8. Bxc4
Nbd7 9. O-O O-O 10. Qe2 Nd5 11. Bxe7 Qxe7 12. Nxd5 exd5 13. Bb5 Qd6 14. Rc2 c6
15. Bd3 Nf6 16. Rfc1 Rac8 17. Ba6 Bxa6 18. Qxa6 Rc7 19. Ne5 c5 20. Rxc5 Rxc5
21. Rxc5 Nd7 22. Rc6 Nb8 23. Rxd6 Nxa6 24. Nc6 g6 25. Nxa7 Ra8 26. Nc6 Kg7 27.
a3 Rc8 28. g4 Nc7 29. Ne7 Rb8 30. Rd7 Ne6 31. Nxd5 Rc8 32. Nxb6 Rc2 33. b4 Ng5
34. a4 Ne4 35. a5 Nxf2 36. a6 1-0


`;

logical_chess_18 = `[Event "Logical Chess, Move by Move #18"]
[Site "Holland"]
[Date "1931.??.??"]
[Round "18"]
[White "Noteboom"]
[Black "Doesburgh"]
[Result "1-0"]
[ECO "D51"]
[PlyCount "57"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. a3 Be7 7. Qc2 O-O 8. Nf3
a6 9. Rd1 Re8 10. Bd3 dxc4 11. Bxc4 b5 12. Bd3 h6 13. Bxf6 Nxf6 14. O-O Bb7 15.
Ne4 Nxe4 16. Bxe4 f5 17. Bd3 Qb6 18. Rc1 Rac8 19. b4 Qd8 20. Ne5 a5 21. Qb3 Bd6
22. Bxf5 Qf6 23. Bb1 Bxe5 24. dxe5 Qxe5 25. Rc5 a4 26. Qa2 Qd6 27. Qc2 Rcd8 28.
Qh7+ Kf8 29. Bg6 1-0



`;

logical_chess_19 = `[Event "Logical Chess, Move by Move #19"]
[Site "Vienna AUT"]
[Date "1915.??.??"]
[Round "19"]
[White "Grunfeld"]
[Black "Schenkein"]
[Result "1-0"]
[ECO "D11"]
[PlyCount "45"]

1. d4 d5 2. c4 c6 3. Nf3 e6 4. e3 Nf6 5. Bd3 Nbd7 6. Nbd2 Be7 7. O-O Qc7 8. e4
dxe4 9. Nxe4 Nxe4 10. Bxe4 Nf6 11. Bc2 b6 12. Qe2 Bb7 13. Ne5 Rd8 14. Rd1 O-O
15. Bf4 Bd6 16. c5 bxc5 17. dxc5 Bxe5 18. Bxe5 Qa5 19. Bxf6 gxf6 20. Qg4+ Kh8
21. Qh4 f5 22. Qe7 Bc8 23. b4 1-0


`;

logical_chess_20 = `[Event "Logical Chess, Move by Move #20"]
[Site "Lodz POL"]
[Date "1908.??.??"]
[Round "20"]
[White "Rubinstein"]
[Black "Salwe"]
[Result "1-0"]
[ECO "D33"]
[PlyCount "75"]

1. d4 d5 2. c4 e6 3. Nc3 c5 4. cxd5 exd5 5. Nf3 Nf6 6. g3 Nc6 7. Bg2 cxd4 8.
Nxd4 Qb6 9. Nxc6 bxc6 10. O-O Be7 11. Na4 Qb5 12. Be3 O-O 13. Rc1 Bg4 14. f3
Be6 15. Bc5 Rfe8 16. Rf2 Nd7 17. Bxe7 Rxe7 18. Qd4 Ree8 19. Bf1 Rec8 20. e3 Qb7
21. Nc5 Nxc5 22. Rxc5 Rc7 23. Rfc2 Qb6 24. b4 a6 25. Ra5 Rb8 26. a3 Ra7 27.
Rxc6 Qxc6 28. Qxa7 Ra8 29. Qc5 Qb7 30. Kf2 h5 31. Be2 g6 32. Qd6 Qc8 33. Rc5
Qb7 34. h4 a5 35. Rc7 Qb8 36. b5 a4 37. b6 Ra5 38. b7 1-0


`;

logical_chess_21 = `[Event "Logical Chess, Move by Move #21"]
[Site "New York USA"]
[Date "1942.??.??"]
[Round "21"]
[White "Chernev"]
[Black "Hahlbohm"]
[Result "1-0"]
[ECO "D05"]
[PlyCount "47"]

1. d4 d5 2. Nf3 e6 3. e3 c5 4. c3 Nf6 5. Bd3 Nc6 6. Nbd2 Be7 7. O-O O-O 8. Qe2
Re8 9. dxc5 Bxc5 10. e4 e5 11. exd5 Nxd5 12. Nb3 Qb6 13. Bxh7+ Kxh7 14. Qe4+
Kg8 15. Qxd5 Bf8 16. Ng5 Be6 17. Qe4 g6 18. Qh4 Bg7 19. Be3 Qa6 20. Nc5 Qc4 21.
Qh7+ Kf8 22. Ncxe6+ fxe6 23. Qxg6 Nd8 24. Nh7+ 1-0


`;

logical_chess_22 = `[Event "Logical Chess, Move by Move #22"]
[Site "Paris FRA"]
[Date "1900.??.??"]
[Round "22"]
[White "Pillsbury"]
[Black "Marco"]
[Result "1-0"]
[ECO "D55"]
[PlyCount "55"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nf3 b6 7. Bd3 Bb7 8. cxd5
exd5 9. Ne5 Nbd7 10. f4 c5 11. O-O c4 12. Bc2 a6 13. Qf3 b5 14. Qh3 g6 15. f5
b4 16. fxg6 hxg6 17. Qh4 bxc3 18. Nxd7 Qxd7 19. Rxf6 a5 20. Raf1 Ra6 21. Bxg6
21... fxg6 {White now demonstrated mate in 7} 22. Rxf8+ Bxf8 23. Rxf8+ Kxf8 24.
Qh8+ Kf7 25. Qh7+ Kf8 26. Qxd7 26... cxb2 {Or any} 27. Bh6+ Kg8 28. Qg7# 1-0
`;

logical_chess_23 = `[Event "Logical Chess, Move by Move #23"]
[Site "Ostend, BEL"]
[Date "1907.??.??"]
[Round "23"]
[White "Vliet"]
[Black "Znosko-Borovsky"]
[Result "0-1"]
[ECO "D00"]
[PlyCount "72"]
[EventDate "1907.??.??"]

1. d4 d5 2. e3 c5 3. c3 e6 4. Bd3 Nc6 5. f4 Nf6 6. Nd2 Qc7 7. Ngf3 cxd4 8. cxd4
Nb4 9. Bb1 Bd7 10. a3 Rc8 11. O-O Bb5 12. Re1 Nc2 13. Bxc2 Qxc2 14. Qxc2 Rxc2
15. h3 Bd6 16. Nb1 Ne4 17. Nfd2 Bd3 18. Nxe4 Bxe4 19. Nd2 Kd7 20. Nxe4 dxe4 21.
Rb1 Rhc8 22. b4 R8c3 23. Kf1 Kc6 24. Bb2 Rb3 25. Re2 Rxe2 26. Kxe2 Kb5 27. Kd2
Ka4 28. Ke2 a5 29. Kf2 axb4 30. axb4 Kxb4 31. Ke2 Kb5 32. Kd2 Ba3 33. Kc2 Rxb2+
34. Rxb2+ Bxb2 35. Kxb2 Kc4 36. Kc2 b5 0-1



`;

logical_chess_24 = `[Event "Logical Chess, Move by Move #24"]
[Site "Carlsbad CZE"]
[Date "1929.??.??"]
[Round "24"]
[White "Capablanca"]
[Black "Mattison"]
[Result "1-0"]
[ECO "E38"]
[PlyCount "39"]

1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 c5 5. dxc5 Nc6 6. Nf3 Bxc5 7. Bf4 d5 8. e3
Qa5 9. Be2 Bb4 10. O-O Bxc3 11. bxc3 O-O 12. Rab1 Qa3 13. Rfd1 b6 14. cxd5 Nxd5
15. Ng5 f5 16. Bf3 Qc5 17. c4 Ndb4 18. Qb3 e5 19. a3 Na6 20. Bxc6 1-0



`;

logical_chess_25 = `[Event "Logical Chess, Move by Move #25"]
[Site "Barmen"]
[Date "1905.??.??"]
[Round "25"]
[White "Janowsky"]
[Black "Alapin"]
[Result "1-0"]
[ECO "D31"]
[PlyCount "93"]

1. d4 d5 2. c4 e6 3. Nc3 Be7 4. Nf3 Nf6 5. Bg5 h6 6. Bh4 dxc4 7. e3 a6 8. Bxc4
b5 9. Bb3 Nbd7 10. Qe2 c6 11. O-O O-O 12. Rac1 Bb7 13. Rfd1 Rc8 14. Ne5 Nxe5
15. dxe5 Nd5 16. Bxe7 Nxc3 17. Rxc3 Qxe7 18. Rcd3 Rfd8 19. Rd6 Rxd6 20. exd6
Qd7 21. e4 c5 22. e5 c4 23. Bc2 Qc6 24. f3 Qc5+ 25. Kh1 Rd8 26. Qe1 Rd7 27. h3
Bc6 28. f4 Ra7 29. f5 Bd7 30. f6 g6 31. Qg3 Kh7 32. h4 Qc8 33. h5 Qg8 34. Rd4
Be8 35. Rh4 Qf8 36. Rg4 Qg8 37. Qe3 Rd7 38. Rh4 Qf8 39. g4 Kh8 40. hxg6 fxg6
41. Rxh6+ Rh7 42. Rxh7+ Kxh7 43. Qg5 Qf7 44. Qh5+ Kg8 45. Bxg6 Qxg6 46. Qxg6+
Bxg6 47. d7 1-0


`;

logical_chess_26 = `[Event "Logical Chess, Move by Move #26"]
[Site "Coburg GER"]
[Date "1904.??.??"]
[Round "26"]
[White "Bernstein"]
[Black "Mieses"]
[Result "1-0"]
[ECO "B45"]
[PlyCount "97"]

1. e4 c5 2. Nc3 e6 3. Nf3 Nc6 4. d4 cxd4 5. Nxd4 Nf6 6. Nxc6 bxc6 7. e5 Nd5 8.
Ne4 f5 9. exf6 Nxf6 10. Nd6+ Bxd6 11. Qxd6 Ne4 12. Qd4 Nf6 13. Qd6 Ne4 14. Qb4
d5 15. Bd3 Qd6 16. Qxd6 Nxd6 17. f4 a5 18. Be3 Ba6 19. Kd2 Nc4+ 20. Bxc4 Bxc4
21. a4 Kd7 22. b3 Ba6 23. Bb6 Bc8 24. Ke3 Ra6 25. Bc5 Kc7 26. Kd4 Bd7 27. Rhe1
h5 28. Re5 g6 29. Rg5 Rg8 30. Ke5 Be8 31. Re1 Ra8 32. Kf6 Bd7 33. g3 Rae8 34.
Ree5 Rh8 35. Rxg6 Rh7 36. Rg7 Reh8 37. Rxh7 Rxh7 38. Kg6 Rh8 39. Kg7 Rd8 40.
Rxh5 Be8 41. Rh7 Rd7+ 42. Kh6 Rxh7+ 43. Kxh7 Bh5 44. h4 Bd1 45. c3 Bxb3 46. g4
Kd7 47. g5 e5 48. f5 Bxa4 49. f6 1-0


`;

logical_chess_27 = `[Event "Logical Chess, Move by Move #27"]
[Site "Moscow RUS"]
[Date "1945.??.??"]
[Round "27"]
[White "Chekhover"]
[Black "Rudakowsky"]
[Result "1-0"]
[ECO "D61"]
[PlyCount "77"]

1. d4 d5 2. c4 e6 3. Nf3 Nf6 4. Bg5 Be7 5. e3 O-O 6. Nc3 Nbd7 7. Qc2 c6 8. Bd3
dxc4 9. Bxc4 Nd5 10. Bxe7 Qxe7 11. O-O b5 12. Be2 a6 13. Ne4 Bb7 14. Ne5 Rac8
15. Nxd7 Qxd7 16. Nc5 Qc7 17. Rfd1 Rcd8 18. Rac1 Bc8 19. Qe4 Nf6 20. Qh4 Qa5
21. a3 b4 22. a4 Nd7 23. b3 Nxc5 24. Rxc5 Qb6 25. Rdc1 Bb7 26. a5 Qa7 27. Bd3
g6 28. Qf6 Rd6 29. Qe7 Rfd8 30. h4 R8d7 31. Qf6 Qa8 32. Be4 Qe8 33. h5 Rd8 34.
Bxc6 Bxc6 35. h6 Kf8 36. Rxc6 Rxc6 37. Rxc6 Rd7 38. Rc8 Qxc8 39. Qh8+ 1-0



`;

logical_chess_28 = `[Event "Logical Chess, Move by Move #28"]
[Site "Gothenberg SWE"]
[Date "1920.??.??"]
[Round "28"]
[White "Tarrasch"]
[Black "Mieses"]
[Result "1-0"]
[ECO "B01"]
[PlyCount "81"]

1. e4 d5 2. exd5 Qxd5 3. Nc3 Qa5 4. d4 e5 5. Nf3 Bb4 6. Bd2 Bg4 7. Be2 exd4 8.
Nxd4 Qe5 9. Ncb5 Bxe2 10. Qxe2 Bxd2+ 11. Kxd2 Qxe2+ 12. Kxe2 Na6 13. Rhe1 O-O-O
14. Nxa7+ Kb8 15. Ndc6+ bxc6 16. Nxc6+ Kc8 17. Nxd8 Kxd8 18. Rad1+ Ke8 19. Kd3+
Ne7 20. Kc4 h5 21. Rd3 Nb8 22. Rde3 Nbc6 23. b4 f6 24. f4 Kf7 25. a4 Rb8 26. c3
Rd8 27. Rd3 Rxd3 28. Kxd3 Ke8 29. a5 Kd7 30. a6 Nd5 31. Ra1 Na7 32. g3 c6 33.
Ra4 Nb6 34. Ra5 g6 35. c4 Nbc8 36. Ra1 Nd6 37. Kd4 Ndc8 38. Kc5 Kc7 39. Re1 Nb6
40. Re7+ Nd7+ 41. Rxd7+ 1-0


`;

logical_chess_29 = `[Event "Logical Chess, Move by Move #29"]
[Site "Nuremberg GER"]
[Date "1905.??.??"]
[Round "29"]
[White "Marshall"]
[Black "Tarrasch"]
[Result "0-1"]
[ECO "D51"]
[PlyCount "88"]

1. d4 d5 2. c4 e6 3. Nc3 Nf6 4. Bg5 Nbd7 5. e3 c6 6. Qc2 Qa5 7. cxd5 Nxd5 8.
Nf3 Bb4 9. Kd2 c5 10. a3 Bxc3+ 11. bxc3 cxd4 12. exd4 N7b6 13. Bd3 Bd7 14. Rhc1
Rc8 15. Qb3 O-O 16. Ke2 Rxc3 17. Rxc3 Qxc3 18. Qb1 h6 19. Bd2 Qc7 20. Kf1 Nc4
21. Bc1 Ba4 22. Qa2 Rc8 23. Qe2 Nc3 24. Qe1 Na5 25. Bxh6 Nb3 26. Bd2 Nxa1 27.
Qxa1 Bb5 28. Bxb5 Nxb5 29. g3 Qc6 30. Kg2 Rd8 31. Be3 Qe4 32. Qb2 Rd5 33. a4
Nd6 34. Bf4 Nf5 35. Be3 Nxe3+ 36. fxe3 Qxe3 37. g4 f5 38. g5 Qe4 39. Qc3 f4 40.
Qc8+ Kh7 41. Qc3 e5 42. h4 Rxd4 43. g6+ Kh6 44. Kh2 Qe2+ 0-1


`;

logical_chess_30 = `[Event "Logical Chess, Move by Move #30"]
[Site "Buenos Aires ARG"]
[Date "1914.??.??"]
[Round "30"]
[White "Capablanca"]
[Black "Villegas"]
[Result "1-0"]
[ECO "D04"]
[PlyCount "67"]

1. d4 d5 2. Nf3 Nf6 3. e3 c6 4. Bd3 Bg4 5. c4 e6 6. Nbd2 Nbd7 7. O-O Be7 8. Qc2
Bh5 9. b3 Bg6 10. Bb2 Bxd3 11. Qxd3 O-O 12. Rae1 Qc7 13. e4 dxe4 14. Nxe4 Nxe4
15. Rxe4 Bf6 16. Qe3 c5 17. Ne5 cxd4 18. Nxd7 Qxd7 19. Bxd4 Bxd4 20. Rxd4 Qc7
21. Rfd1 Rfd8 22. b4 Rxd4 23. Qxd4 b6 24. g3 Rc8 25. Rc1 Rd8 26. Qe3 Kf8 27. c5
bxc5 28. Qe4 Rd5 29. bxc5 g6 30. c6 Kg7 31. a4 Rd6 32. Qe5+ f6 33. Qxd6 Qxd6
34. c7 1-0



`;

logical_chess_31 = `[Event "Logical Chess, Move by Move #31"]
[Site "Budapest HUN"]
[Date "1929.??.??"]
[Round "31"]
[White "Havasi"]
[Black "Capablanca"]
[Result "0-1"]
[ECO "E32"]
[PlyCount "68"]

1. d4 Nf6 2. c4 e6 3. Nc3 Bb4 4. Qc2 d5 5. Nf3 c5 6. cxd5 Qxd5 7. a3 Bxc3+ 8.
bxc3 Nc6 9. e3 O-O 10. Be2 cxd4 11. cxd4 b6 12. Nd2 Bb7 13. Bf3 Qd7 14. O-O
Rac8 15. Qb1 Na5 16. Bxb7 Qxb7 17. Bb2 Qa6 18. Re1 Nd5 19. Ra2 Rc6 20. e4 Nc3
21. Bxc3 Rxc3 22. Nf3 Rfc8 23. h3 Nc4 24. a4 Na3 25. Qb2 Qxa4 26. Re2 b5 27. d5
exd5 28. exd5 b4 29. Qd2 b3 30. Rb2 Rc2 31. Qe3 Rxb2 32. Rxb2 Nc4 33. Qc1 Qa3
34. Rb1 Qxc1+ 0-1



`;

logical_chess_32 = `[Event "Logical Chess, Move by Move #32"]
[Site "Budapest HUN."]
[Date "1929.??.??"]
[Round "32"]
[White "Canal"]
[Black "Capablanca"]
[Result "0-1"]
[ECO "E15"]
[PlyCount "114"]

1. d4 Nf6 2. c4 e6 3. Nf3 b6 4. g3 Bb7 5. Bg2 Bb4+ 6. Bd2 Bxd2+ 7. Nbxd2 O-O 8.
O-O c5 9. dxc5 bxc5 10. Qc2 Nc6 11. Rfd1 Qb6 12. a3 Rab8 13. Rab1 Rfc8 14. e4
e5 15. Qd3 d6 16. Nf1 Nd4 17. Nxd4 exd4 18. b4 Qc6 19. bxc5 dxc5 20. Rxb7 Qxb7
21. e5 Qb3 22. exf6 Qxd3 23. Rxd3 Rb1 24. Bd5 Rcb8 25. Kg2 R8b3 26. Rxb3 Rxb3
27. Nd2 Rxa3 28. Ne4 a5 29. Nxc5 gxf6 30. Kf1 a4 31. Ke2 Ra1 32. Nd3 a3 33. c5
a2 34. Kf3 Rd1 35. Bxa2 Rxd3+ 36. Ke4 Rd2 37. Bc4 Kf8 38. f3 Rxh2 39. Kxd4 Ke7
40. Bd3 h5 41. Ke3 Rg2 42. Kf4 Rg1 43. Be4 Rc1 44. c6 Rc3 45. c7 Rxc7 46. Bd5
Rc5 47. Ba2 Rb5 48. Ke3 Ra5 49. Bc4 Rc5 50. Ba6 Ke6 51. Kf4 Rc3 52. Bf1 f5 53.
Ba6 Kf6 54. Bb7 Rc4+ 55. Ke3 Kg5 56. Kf2 f4 57. Kg2 f5 0-1


`;

logical_chess_33 = `[Event "Logical Chess, Move by Move #33"]
[Site "Gothenberg SWE"]
[Date "1920.??.??"]
[Round "33"]
[White "Rubinstein"]
[Black "Maroczy"]
[Result "1-0"]
[ECO "D63"]
[PlyCount "69"]

1. d4 Nf6 2. Nf3 d5 3. c4 e6 4. Bg5 Be7 5. e3 Nbd7 6. Nc3 O-O 7. Rc1 Re8 8. Qc2
dxc4 9. Bxc4 c5 10. O-O cxd4 11. Nxd4 a6 12. Rfd1 Qa5 13. Bh4 Ne5 14. Be2 Ng6
15. Bg3 e5 16. Nb3 Qc7 17. Qb1 Qb8 18. Bf3 Qa7 19. Na5 Bb4 20. Nc4 Bd7 21. Nd5
Nxd5 22. Bxd5 Be6 23. Qe4 Bxd5 24. Rxd5 Rac8 25. Rcd1 Bf8 26. b3 b5 27. Nd6
Bxd6 28. Rxd6 Rc7 29. h4 f6 30. Qd5+ Kh8 31. h5 Nf8 32. h6 Ng6 33. Qe6 Rf8 34.
Rd7 gxh6 35. Bh4 1-0
`;

logical_chess_list = [
  logical_chess_1,
  logical_chess_2,
  logical_chess_3,
  logical_chess_4,
  logical_chess_5,
  logical_chess_6,
  logical_chess_7,
  logical_chess_8,
  logical_chess_9,
  logical_chess_10,
  logical_chess_11,
  logical_chess_12,
  logical_chess_13,
  logical_chess_14,
  logical_chess_15,
  logical_chess_16,
  logical_chess_17,
  logical_chess_18,
  logical_chess_19,
  logical_chess_20,
  logical_chess_21,
  logical_chess_22,
  logical_chess_23,
  logical_chess_24,
  logical_chess_25,
  logical_chess_26,
  logical_chess_27,
  logical_chess_28,
  logical_chess_29,
  logical_chess_30,
  logical_chess_31,
  logical_chess_32,
  logical_chess_33
];

opening_1 = `
Philidor_1 : bad bishop move 
Petrov_1 : 
Kings_pawn_1 
Caro_kahn?

https://www.chess.com/game/live/43965967129

see: shivangbaveja from 4-17-22.


`;

opening_list = [opening_1];

//determine_selection

function determine_selection() {
  if (selection_var == 0) {
    val_choice = parseInt($("#Choice").val()) - 1;
    console.log("val_choice" + val_choice);
    console.log("selection_var_0");
  } else {
    val_choice = 0;
    console.log("val_choice" + val_choice);
    console.log("selection_var_1");
  }
  val = $("#Selection").val();

  if (val === "Alan") {
    num_list = alan_list.length;
    if (number_val > num_list) {
      arr = alan_list[val_choice];
      arr_info = alan_info_list[val_choice];
    } else {
      arr = alan_list[val_choice][number_val_comp];
      arr_info = alan_info_list[val_choice];
    }
  }

  if (val === "Queens_pawn") {
    arr_info = queens_pawn_info_list[val_choice];
    arr = queens_pawn_list[val_choice];
  }
    if (val === "Caro_Kahn") {
    arr_info = caro_kahn_info_list[val_choice];
    arr = caro_kahn_list[val_choice];
    console.log('val_choice:'+val_choice)
  }
   if (val === "Scandinavian") {
    console.log(number_val);
    arr_info = scandinavian_info_list[val_choice];
    arr = scandinavian_list[val_choice];
  }
   if (val === "Italian") {
    arr_info = italian_info_list[val_choice];
    arr = italian_list[val_choice];
  }
  if (val === "Agadmator") {
    console.log("alekhine");
    num_list = agadmator_list.length;
    if (number_val > num_list) {
      arr = agadmator_list[val_choice];
      arr_info = agadmator_info_list[val_choice];
    } else {
      arr = agadmator_list[val_choice][number_val_comp];
      arr_info = agadmator_info_list[val_choice];
    }
  }
  if (val === "Philidor") {
    console.log("alekhine");
    num_list = philidor_list.length;
    if (number_val > num_list) {
      arr = philidor_list[val_choice];
      arr_info = philidor_info_list[val_choice];
    } else {
      arr = philidor_list[val_choice][number_val_comp];
      arr_info = philidor_info_list[val_choice];
    }
  }
  if (val === "English") {
    console.log("alekhine");
    num_list = english_list.length;
    if (number_val > num_list) {
      arr = english_list[val_choice];
      arr_info = englishr_info_list[val_choice];
    } else {
      arr = english_list[val_choice][number_val_comp];
      arr_info = english_info_list[val_choice];
    }
  }
  
  if (val === "Kings_knight") {
    num_list = kings_knight_list.length;
    if (number_val > num_list) {
      arr = kings_knight_list[val_choice];
      arr_info = kings_knight_info_list[val_choice];
    } else {
      arr = kings_knight_list[val_choice][number_val_comp];
      arr_info = kings_knight_info_list[val_choice];
    }
  }
  if (val === "Kings_fianchetto") {
    num_list = kings_fianchetto_list.length;
    if (number_val > num_list) {
      arr = kings_fianchetto_list[val_choice];
      arr_info = kings_fianchetto_info_list[val_choice];
    } else {
      arr = kings_fianchetto_list[val_choice][number_val_comp];
      arr_info = kings_fianchetto_info_list[val_choice];
    }
  }
  if (val === "Kings_pawn") {
    num_list = kings_pawn_list.length;
    if (number_val > num_list) {
      arr = kings_pawn_list[val_choice];
      arr_info = kings_pawn_info_list[val_choice];
    } else {
      arr = kings_pawn_list[val_choice][number_val_comp];
      arr_info = kings_pawn_info_list[val_choice];
    }
  }
  if (val === "Birds_opening") {
    num_list = birds_opening_list.length;
    if (number_val > num_list) {
      arr = birds_opening_list[val_choice];
      arr_info = birds_opening_info_list[val_choice];
    } else {
      arr = birds_opening_list[val_choice][number_val_comp];
      arr_info = birds_opening_info_list[val_choice];
    }
  }
  if (val === "Fianchetto") {
    num_list = fianchetto_list.length;
    if (number_val > num_list) {
      arr = fianchetto_list[0];
    } else {
      arr = fianchetto_list[number_val_comp];
    }
  }

  if (val === "Sicilian") {
    num_list = sicilian_list.length;
    if (number_val > num_list) {
      arr = sicilian_list[val_choice];
      arr_info = sicilian_info_list[val_choice];
    } else {
      arr = sicilian_list[val_choice][number_val_comp];
      arr_info = sicilian_info_list[val_choice];
    }
  }

  if (val === "Nimzo_defense") {
    num_list = nimzo_defense_list.length;
    if (number_val > num_list) {
      arr = nimzo_defense_list[val_choice];
      arr_info = nimzo_defense_info_list[val_choice];
    } else {
      arr = nimzo_defense_list[val_choice][number_val_comp];
      arr_info = nimzo_defense_info_list[val_choice];
    }
  }
  if (val === "MateInThree") {
    num_list = mateinthree_list.length;
    if (number_val > num_list) {
      arr = mateinthree_list[0];
    } else {
      arr = mateinthree_list[number_val_comp];
    }
  }
  if (val === "Lightsquares") {
    num_list = lightsquares_list.length;
    if (number_val > num_list) {
      arr = lightsquares_list[0];
    } else {
      arr = lightsquares_list[number_val_comp];
    }
  } else {
    console.log("it is there anyways");
  }
}
arr_info = `hello world`;


fen_list = ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', '2r2rk1/2qn1pb1/4p1pp/pp1pP3/1P1P4/P1Q2N2/1B3PPP/R1R3K1']

$("#text_chess").keypress(function (e) {
  if (e.which == 13) {
        text_val = $("#text_chess").val();
        if (text_val.includes("/")) {
          console.log('should be a FEN')
          text_val_is_1 = text_val.split(" ")
          var config = {
      //Spanish Opening
            position: text_val_is_1[0],
            pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
            draggable: true,
            dropOffBoard: "snapback",
            onDrop: onDrop
        };
            board = Chessboard("myBoard", config);
        } else {
          text_val_is_1 = text_val.split("");
          first_char_0_1 = parseInt(text_val_is_1[0]);
          if (Number.isInteger(first_char_0_1)) {
            number_of_text_c = parseInt(text_val) -1           
            var config = {
      //Spanish Opening
                position: fen_list[number_of_text_c],
                pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
                draggable: true,
                dropOffBoard: "snapback",
                onDrop: onDrop
        };
            board = Chessboard("myBoard", config);
        }
        }
        document.getElementById("text_chess").value = ""
        

  }
});

italian_1 = `e2-e4, e7-e5, g1-f3, b8-c6, f1-c4, d7-d6, c2-c3, f7-f5, d2-d3, f5-e4, d3-e4, c8-g4, b1-d2, d8-e7, h2-h3, g4-e6, c4-e6, e7-e6, b2-b4, e8-c8, a8-d8, a2-a4, a7-a5, b4-a5, c6-a5, f3-g5, e6-f6, h3-h4, g8-h6, d1-f3, f6-f3, g5-f3, d6-d5, e1-g1, h1-f1, d5-e4, d2-e4, c7-c6, f3-e5, d8-e8, f2-f4, h6-f5, g2-g3, h7-h6, c1-a3, f8-a3, a1-a3, a5-c4, e5-c4, e8-e4, c4-b6, c8-b8, a4-a5, f5-g3, f1-f3, g3-f5, a3-a4, e4-e1, g1-f2, e1-c1, c3-c4, f5-h4, f3-g3, g7-g5, f4-g5, h6-g5, g3-g5, h8-f8, f2-g3, h4-f5, g3-g4, f5-e3, g4-g3, f8-d8, g5-e5, c1-c3, c4-c5, b8-a7, g3-f4, e3-g2, f4-e4, d8-d3, a4-d4, d3-e3, e4-f5, e3-f3, f5-e4, f3-f4, 


`;

italian_2 = `e2-e4, e7-e5, g1-f3, g8-f6, b1-c3, f8-c5, f3-e5, d8-e7, e5-f3, e8-g8, h8-f8, d2-d3, f6-g4, d3-d4, c5-b6, h2-h3, g4-f2, e1-f2, f7-f5, e4-e5, d7-d6, c1-f4, d6-e5, f4-e5, b8-c6, f1-d3, g7-g5, h1-e1, g5-g4, e5-g3, e7-b4, f3-h2, c6-d4, d1-d2, d4-c2, f2-f1, c2-a1, e1-a1, g4-h3, g2-h3, c7-c6, a2-a3, b4-c5, c3-a4, c5-g1, f1-e2, g1-a1, d3-c4, g8-g7, g3-e5, g7-g6, e2-d3, c8-d7, d2-g2, g6-h5, g2-f3, h5-g5, f3-f4, g5-g6, f4-g3, g6-h5, g3-f3, h5-g6, f3-g3, g6-h6, g3-f4, h6-g6, f4-g3, 


`;

italian_3 = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3
r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3
r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4
r1bqk1nr/ppp2ppp/2np4/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 0 5
r1bqk1nr/ppp2ppp/2np4/2b1p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R b KQkq b3 0 5
r1bqk1nr/ppp2ppp/1bnp4/4p3/1PB1P3/2P2N2/P2P1PPP/RNBQK2R w KQkq - 1 6
r1bqk1nr/ppp2ppp/1bnp4/4p3/PPB1P3/2P2N2/3P1PPP/RNBQK2R b KQkq a3 0 6
r1bqk1nr/1pp2ppp/1bnp4/p3p3/PPB1P3/2P2N2/3P1PPP/RNBQK2R w KQkq a6 0 7
r1bqk1nr/1pp2ppp/1bnp4/pP2p3/P1B1P3/2P2N2/3P1PPP/RNBQK2R b KQkq - 0 7
r1bqk1nr/1pp1nppp/1b1p4/pP2p3/P1B1P3/2P2N2/3P1PPP/RNBQK2R w KQkq - 1 8
r1bqk1nr/1pp1nppp/1b1p4/pP2p3/P1BPP3/2P2N2/5PPP/RNBQK2R b KQkq d3 0 8
r1bqk1nr/1pp1nppp/1b6/pP1pp3/P1BPP3/2P2N2/5PPP/RNBQK2R w KQkq - 0 9
r1bqk1nr/1pp1nppp/1b6/pP1Pp3/P1BP4/2P2N2/5PPP/RNBQK2R b KQkq - 0 9
r1bqk1nr/1pp2ppp/1b6/pP1np3/P1BP4/2P2N2/5PPP/RNBQK2R w KQkq - 0 10
r1bqk1nr/1pp2ppp/1b6/pP1nN3/P1BP4/2P5/5PPP/RNBQK2R b KQkq - 0 10
r1bqk1nr/1pp2ppp/1b6/pP2N3/P1BP4/2n5/5PPP/RNBQK2R w KQkq - 0 11
r1bqk1nr/1pp2ppp/1b6/pP2N3/P1BP4/2N5/5PPP/R1BQK2R b KQkq - 0 11
r1bqk1nr/1pp2ppp/8/pP2N3/P1Bb4/2N5/5PPP/R1BQK2R w KQkq - 0 12
r1bqk1nr/1pp2Bpp/8/pP2N3/P2b4/2N5/5PPP/R1BQK2R b KQkq - 0 12
r1bq1knr/1pp2Bpp/8/pP2N3/P2b4/2N5/5PPP/R1BQK2R w KQ - 1 13
r1bq1knr/1pp2Bpp/8/pP2N3/P2b4/B1N5/5PPP/R2QK2R b KQ - 2 13
r1bq1k1r/1pp1nBpp/8/pP2N3/P2b4/B1N5/5PPP/R2QK2R w KQ - 3 14
r1bq1k1r/1pp1nBpp/8/pP1NN3/P2b4/B7/5PPP/R2QK2R b KQ - 4 14
r1bq1k1r/1pp1nBpp/8/pP1NN3/P7/B7/5PPP/b2QK2R w K - 0 15
r1bq1k1r/1pp1BBpp/8/pP1NN3/P7/8/5PPP/b2QK2R b K - 0 15
r1b2k1r/1pp1qBpp/8/pP1NN3/P7/8/5PPP/b2QK2R w K - 0 16
r1b2k1r/1pp1NBpp/8/pP2N3/P7/8/5PPP/b2QK2R b K - 0 16
r1b2k1r/1pp1NBpp/8/pP2b3/P7/8/5PPP/3QK2R w K - 0 17
r1b2k1r/1pp1NBpp/8/pP2b2Q/P7/8/5PPP/4K2R b K - 1 17
r1b2k1r/1pp1NBpp/8/pP5Q/P7/2b5/5PPP/4K2R w K - 2 18
r1b2k1r/1pp1NBpp/8/pP5Q/P7/2b5/4KPPP/7R b - - 3 18
r1b4r/1pp1kBpp/8/pP5Q/P7/2b5/4KPPP/7R w - - 0 19
r1b4r/1pp1kBpp/8/pP5Q/P7/2b5/4KPPP/4R3 b - - 1 19
r1b4r/1pp1kBpp/8/pP5Q/P7/8/4KPPP/4b3 w - - 0 20
r1b4r/1pp1kBpp/8/pP5Q/P7/8/5PPP/4K3 b - - 0 20
r1b4r/1pp1kB1p/6p1/pP5Q/P7/8/5PPP/4K3 w - - 0 21
r1b4r/1pp1kB1p/6p1/pP1Q4/P7/8/5PPP/4K3 b - - 1 21
r1b2r2/1pp1kB1p/6p1/pP1Q4/P7/8/5PPP/4K3 w - - 2 22
r1b2r2/1pp1kB1p/6p1/pP6/P3Q3/8/5PPP/4K3 b - - 3 22
r1b2r2/1pp2k1p/6p1/pP6/P3Q3/8/5PPP/4K3 w - - 0 23
r1b2r2/1pp2k1p/6p1/pP1Q4/P7/8/5PPP/4K3 b - - 1 23
r1b2r2/1pp3kp/6p1/pP1Q4/P7/8/5PPP/4K3 w - - 2 24
r1b2r2/1pp3kp/6p1/pP2Q3/P7/8/5PPP/4K3 b - - 3 24
r1b2r2/1pp2k1p/6p1/pP2Q3/P7/8/5PPP/4K3 w - - 4 25
r1b2r2/1pp2k1p/6p1/pP1Q4/P7/8/5PPP/4K3 b - - 5 25
r1b2r2/1pp3kp/6p1/pP1Q4/P7/8/5PPP/4K3 w - - 6 26
r1b2r2/1pp3kp/6p1/pP2Q3/P7/8/5PPP/4K3 b - - 7 26
r1b2r2/1pp4p/6pk/pP2Q3/P7/8/5PPP/4K3 w - - 8 27
r1b2r2/1pp4p/6pk/pP6/P7/4Q3/5PPP/4K3 b - - 9 27
r1b2r2/1pp3kp/6p1/pP6/P7/4Q3/5PPP/4K3 w - - 10 28
r1b2r2/1pp3kp/6p1/pP2Q3/P7/8/5PPP/4K3 b - - 11 28
`;

italian_4 = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3
r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3
r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4
r1bqkbnr/pppp1pp1/2n4p/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4
r1bqkb1r/pppp1pp1/2n2n1p/4p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5
r1bqkb1r/pppp1pp1/2n2n1p/4p3/2B1P3/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 5
r1bqkb1r/ppp2pp1/2n2n1p/3pp3/2B1P3/2PP1N2/PP3PPP/RNBQK2R w KQkq d6 0 6
r1bqkb1r/ppp2pp1/2n2n1p/3Pp3/2B5/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 6
r1bqkb1r/ppp2pp1/2n4p/3np3/2B5/2PP1N2/PP3PPP/RNBQK2R w KQkq - 0 7
r1bqkb1r/ppp2pp1/2n4p/3Bp3/8/2PP1N2/PP3PPP/RNBQK2R b KQkq - 0 7
r1b1kb1r/ppp2pp1/2n4p/3qp3/8/2PP1N2/PP3PPP/RNBQK2R w KQkq - 0 8
r1b1kb1r/ppp2pp1/2n4p/3qp3/8/2PP1N2/PP3PPP/RNBQ1RK1 b kq - 1 8
r3kb1r/ppp2pp1/2n4p/3qp3/6b1/2PP1N2/PP3PPP/RNBQ1RK1 w kq - 2 9
r3kb1r/ppp2pp1/2n4p/3qp3/6b1/2PP1N2/PP1N1PPP/R1BQ1RK1 b kq - 3 9
r3kb1r/ppp2pp1/2n4p/4p3/6b1/2Pq1N2/PP1N1PPP/R1BQ1RK1 w kq - 0 10
r3kb1r/ppp2pp1/2n4p/4p3/6b1/2Pq1N1P/PP1N1PP1/R1BQ1RK1 b kq - 0 10
r3kb1r/ppp2pp1/2n4p/4p2b/8/2Pq1N1P/PP1N1PP1/R1BQ1RK1 w kq - 1 11
r3kb1r/ppp2pp1/2n4p/4p2b/6P1/2Pq1N1P/PP1N1P2/R1BQ1RK1 b kq g3 0 11
r3kb1r/ppp2pp1/2n3bp/4p3/6P1/2Pq1N1P/PP1N1P2/R1BQ1RK1 w kq - 1 12
r3kb1r/ppp2pp1/2n3bp/4p3/6P1/1NPq1N1P/PP3P2/R1BQ1RK1 b kq - 2 12
r3kb1r/ppp2pp1/2n3bp/4p3/6P1/1NP2N1P/PP3P2/R1Bq1RK1 w kq - 0 13
r3kb1r/ppp2pp1/2n3bp/4p3/6P1/1NP2N1P/PP3P2/R1BR2K1 b kq - 0 13
r3k2r/ppp2pp1/2n3bp/2b1p3/6P1/1NP2N1P/PP3P2/R1BR2K1 w kq - 1 14
r3k2r/ppp2pp1/2n3bp/2N1p3/6P1/2P2N1P/PP3P2/R1BR2K1 b kq - 0 14
r3k2r/p1p2pp1/1pn3bp/2N1p3/6P1/2P2N1P/PP3P2/R1BR2K1 w kq - 0 15
r3k2r/p1p2pp1/1pn3bp/4p3/6P1/2PN1N1P/PP3P2/R1BR2K1 b kq - 1 15
3rk2r/p1p2pp1/1pn3bp/4p3/6P1/2PN1N1P/PP3P2/R1BR2K1 w k - 2 16
3rk2r/p1p2pp1/1pn3bp/4p3/6P1/2PN3P/PP3P2/R1BRN1K1 b k - 3 16
3rk2r/p1p2pp1/1pn3bp/8/4p1P1/2PN3P/PP3P2/R1BRN1K1 w k - 0 17
3rk2r/p1p2pp1/1pn3bp/8/4pBP1/2PN3P/PP3P2/R2RN1K1 b k - 1 17
3rk2r/p1p2pp1/1pn3bp/8/5BP1/2Pp3P/PP3P2/R2RN1K1 w k - 0 18
3rk2r/p1B2pp1/1pn3bp/8/6P1/2Pp3P/PP3P2/R2RN1K1 b k - 0 18
4k2r/p1Br1pp1/1pn3bp/8/6P1/2Pp3P/PP3P2/R2RN1K1 w k - 1 19
4k2r/p2r1pp1/1pn3bp/8/5BP1/2Pp3P/PP3P2/R2RN1K1 b k - 2 19
5rk1/p2r1pp1/1pn3bp/8/5BP1/2Pp3P/PP3P2/R2RN1K1 w - - 3 20
5rk1/p2r1pp1/1pn3bp/8/5BP1/2Pp1N1P/PP3P2/R2R2K1 b - - 4 20
4r1k1/p2r1pp1/1pn3bp/8/5BP1/2Pp1N1P/PP3P2/R2R2K1 w - - 5 21
4r1k1/p2r1pp1/1pn3bp/8/1P3BP1/2Pp1N1P/P4P2/R2R2K1 b - b3 0 21
4r1k1/3r1pp1/1pn3bp/p7/1P3BP1/2Pp1N1P/P4P2/R2R2K1 w - a6 0 22
4r1k1/3r1pp1/1pn3bp/pP6/5BP1/2Pp1N1P/P4P2/R2R2K1 b - - 0 22
3nr1k1/3r1pp1/1p4bp/pP6/5BP1/2Pp1N1P/P4P2/R2R2K1 w - - 1 23
3nr1k1/3r1pp1/1p4bp/pP2N3/5BP1/2Pp3P/P4P2/R2R2K1 b - - 2 23
3nr1k1/5pp1/1p4bp/pP1rN3/5BP1/2Pp3P/P4P2/R2R2K1 w - - 3 24
3nr1k1/5pp1/1p4bp/pP1r4/5BP1/2PN3P/P4P2/R2R2K1 b - - 0 24
4r1k1/5pp1/1p2n1bp/pP1r4/5BP1/2PN3P/P4P2/R2R2K1 w - - 1 25
4r1k1/5pp1/1p2n1bp/pP1r4/6P1/2PN3P/P4P1B/R2R2K1 b - - 2 25
4r1k1/5pp1/1p2n2p/pP1r4/6P1/2Pb3P/P4P1B/R2R2K1 w - - 0 26
4r1k1/5pp1/1p2n2p/pP1r4/P5P1/2Pb3P/5P1B/R2R2K1 b - a3 0 26
3r2k1/5pp1/1p2n2p/pP1r4/P5P1/2Pb3P/5P1B/R2R2K1 w - - 1 27
3r2k1/5pp1/1p2n2p/pP1r4/P5P1/2Pb3P/5P1B/R1R3K1 b - - 2 27
3r2k1/5pp1/1p5p/pPnr4/P5P1/2Pb3P/5P1B/R1R3K1 w - - 3 28
3r2k1/5pp1/1p5p/pPnr4/P1P3P1/3b3P/5P1B/R1R3K1 b - - 0 28
3r2k1/5pp1/1p5p/pPnr4/P1b3P1/7P/5P1B/R1R3K1 w - - 0 29
3r2k1/5pp1/1p5p/pPnr4/P1b3P1/7P/5PKB/R1R5 b - - 1 29
3r2k1/5pp1/1p5p/pP1r4/P1b3P1/1n5P/5PKB/R1R5 w - - 2 30
3r2k1/5pp1/1p5p/pP1r4/P1R3P1/1n5P/5PKB/R7 b - - 0 30
3r2k1/5pp1/1p5p/pP1r4/P1R3P1/7P/5PKB/n7 w - - 0 31
3r2k1/2B2pp1/1p5p/pP1r4/P1R3P1/7P/5PK1/n7 b - - 1 31
6k1/2Br1pp1/1p5p/pP1r4/P1R3P1/7P/5PK1/n7 w - - 2 32
6k1/3r1pp1/1B5p/pP1r4/P1R3P1/7P/5PK1/n7 b - - 0 32
6k1/3r1pp1/1B5p/pP1r4/P1R3P1/1n5P/5PK1/8 w - - 1 33
6k1/3r1pp1/1B5p/pP1r4/P5P1/1nR4P/5PK1/8 b - - 2 33
6k1/3r1pp1/1B5p/pP6/P5P1/1nRr3P/5PK1/8 w - - 3 34
2R3k1/3r1pp1/1B5p/pP6/P5P1/1n1r3P/5PK1/8 b - - 4 34
2R5/3r1ppk/1B5p/pP6/P5P1/1n1r3P/5PK1/8 w - - 5 35
2R5/3r1ppk/1B5p/pP6/P5PP/1n1r4/5PK1/8 b - - 0 35
2R5/5ppk/1B1r3p/pP6/P5PP/1n1r4/5PK1/8 w - - 1 36
2R5/B4ppk/3r3p/pP6/P5PP/1n1r4/5PK1/8 b - - 2 36
2R5/B4ppk/3r3p/pP6/P5PP/3r4/3n1PK1/8 w - - 3 37
2R5/B4ppk/3r3p/pP4P1/P6P/3r4/3n1PK1/8 b - - 0 37
2R5/B4ppk/3r4/pP4p1/P6P/3r4/3n1PK1/8 w - - 0 38
2R5/B4ppk/3r4/pP4P1/P7/3r4/3n1PK1/8 b - - 0 38
2R5/B4pp1/3r2k1/pP4P1/P7/3r4/3n1PK1/8 w - - 1 39
2R5/B4pp1/1P1r2k1/p5P1/P7/3r4/3n1PK1/8 b - - 0 39
2R5/B4pp1/1P1r4/p5k1/P7/3r4/3n1PK1/8 w - - 0 40
2R5/BP3pp1/3r4/p5k1/P7/3r4/3n1PK1/8 b - - 0 40
2R5/BP3pp1/3r4/p5k1/P7/1r6/3n1PK1/8 w - - 1 41
1QR5/B4pp1/3r4/p5k1/P7/1r6/3n1PK1/8 b - - 0 41
1rR5/B4pp1/3r4/p5k1/P7/8/3n1PK1/8 w - - 0 42
1BR5/5pp1/3r4/p5k1/P7/8/3n1PK1/8 b - - 0 42
1BR5/5pp1/6r1/p5k1/P7/8/3n1PK1/8 w - - 1 43
1BR5/5pp1/6r1/p5k1/P7/7K/3n1P2/8 b - - 2 43
1BR5/5pp1/6r1/p5k1/P3n3/7K/5P2/8 w - - 3 44
1BR5/5pp1/6r1/p5k1/P3nP2/7K/8/8 b - f3 0 44
1BR5/5pp1/6r1/p4k2/P3nP2/7K/8/8 w - - 1 45
1B6/2R2pp1/6r1/p4k2/P3nP2/7K/8/8 b - - 2 45
1B6/2R3p1/5pr1/p4k2/P3nP2/7K/8/8 w - - 0 46
1B6/1R4p1/5pr1/p4k2/P3nP2/7K/8/8 b - - 1 46
1B6/1R4p1/5p1r/p4k2/P3nP2/7K/8/8 w - - 2 47
1B6/1R4p1/5p1r/p4k2/P3nP2/8/6K1/8 b - - 3 47
1B6/1R6/5p1r/p4kp1/P3nP2/8/6K1/8 w - g6 0 48
1B6/1R6/5p1r/p4kP1/P3n3/8/6K1/8 b - - 0 48
1B6/1R6/7r/p4kp1/P3n3/8/6K1/8 w - - 0 49
1B6/8/7r/pR3kp1/P3n3/8/6K1/8 b - - 1 49
1B6/8/7r/pR4p1/P3n1k1/8/6K1/8 w - - 2 50
1B6/8/7r/R5p1/P3n1k1/8/6K1/8 b - - 0 50
1B6/8/7r/R5p1/P5k1/2n5/6K1/8 w - - 1 51
1B6/R7/7r/6p1/P5k1/2n5/6K1/8 b - - 2 51
1B5r/R7/8/6p1/P5k1/2n5/6K1/8 w - - 3 52
7r/R7/8/4B1p1/P5k1/2n5/6K1/8 b - - 4 52
4r3/R7/8/4B1p1/P5k1/2n5/6K1/8 w - - 5 53
4r3/R7/8/6p1/P5k1/2B5/6K1/8 b - - 0 53
8/R7/8/6p1/P5k1/2B1r3/6K1/8 w - - 1 54


`;

italian_5 = `

rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3
r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3
r1bqkbnr/pppp1ppp/8/4p3/2BnP3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
r1bqkbnr/pppp1ppp/8/4p3/2BnP3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4
r1bqkbnr/pppp1ppp/8/4p3/2B1P3/3P1n2/PPP2PPP/RNBQK2R w KQkq - 0 5
r1bqkbnr/pppp1ppp/8/4p3/2B1P3/3P1Q2/PPP2PPP/RNB1K2R b KQkq - 0 5
r1bqkb1r/pppp1ppp/5n2/4p3/2B1P3/3P1Q2/PPP2PPP/RNB1K2R w KQkq - 1 6
r1bqkb1r/pppp1ppp/5n2/4p3/2B1P3/3P1Q2/PPPN1PPP/R1B1K2R b KQkq - 2 6
r1bqk2r/pppp1ppp/5n2/4p3/1bB1P3/3P1Q2/PPPN1PPP/R1B1K2R w KQkq - 3 7
r1bqk2r/pppp1ppp/5n2/4p3/1bB1P3/3P4/PPPNQPPP/R1B1K2R b KQkq - 4 7
r1bqk2r/pppp1ppp/5n2/4p3/2B1P3/3P4/PPPbQPPP/R1B1K2R w KQkq - 0 8
r1bqk2r/pppp1ppp/5n2/4p3/2B1P3/3P4/PPPBQPPP/R3K2R b KQkq - 0 8
r1bq1rk1/pppp1ppp/5n2/4p3/2B1P3/3P4/PPPBQPPP/R3K2R w KQ - 1 9
r1bq1rk1/pppp1ppp/5n2/4p3/2B1P3/2BP4/PPP1QPPP/R3K2R b KQ - 2 9
r1bq1rk1/ppp2ppp/5n2/3pp3/2B1P3/2BP4/PPP1QPPP/R3K2R w KQ d6 0 10
r1bq1rk1/ppp2ppp/5n2/3Pp3/2B5/2BP4/PPP1QPPP/R3K2R b KQ - 0 10
r1bq1rk1/ppp2ppp/8/3Pp3/2B3n1/2BP4/PPP1QPPP/R3K2R w KQ - 1 11
r1bq1rk1/ppp2ppp/8/3Pp3/2B3n1/2BP3P/PPP1QPP1/R3K2R b KQ - 0 11
r1bq1rk1/ppp2ppp/7n/3Pp3/2B5/2BP3P/PPP1QPP1/R3K2R w KQ - 1 12
r1bq1rk1/ppp2ppp/7n/3PB3/2B5/3P3P/PPP1QPP1/R3K2R b KQ - 0 12
r1bq1rk1/pp3ppp/2p4n/3PB3/2B5/3P3P/PPP1QPP1/R3K2R w KQ - 0 13
r1bq1rk1/pp3ppp/2P4n/4B3/2B5/3P3P/PPP1QPP1/R3K2R b KQ - 0 13
r1bq1rk1/p4ppp/2p4n/4B3/2B5/3P3P/PPP1QPP1/R3K2R w KQ - 0 14
r1bq1rk1/p4ppp/2p4n/4B3/2B5/3P3P/PPP1QPP1/2KR3R b - - 1 14
r1b2rk1/p4ppp/2p4n/4B1q1/2B5/3P3P/PPP1QPP1/2KR3R w - - 2 15
r1b2rk1/p4ppp/2p4n/4B1q1/2B5/3P3P/PPP1QPP1/1K1R3R b - - 3 15
r1b2rk1/p4ppp/2p4n/4B3/2B5/3P3P/PPP1QPq1/1K1R3R w - - 0 16
r1b2rk1/p4pBp/2p4n/8/2B5/3P3P/PPP1QPq1/1K1R3R b - - 0 16
r1b2r2/p4pkp/2p4n/8/2B5/3P3P/PPP1QPq1/1K1R3R w - - 0 17
r1b2r2/p4pkp/2p4n/8/2B5/3P3P/PPP1QPq1/1K1R2R1 b - - 1 17
r1b2r2/p4pkp/2p4n/8/2B5/3P3P/PPP1QP2/1K1R2q1 w - - 0 18
r1b2r2/p4pkp/2p4n/8/2B5/3P3P/PPP1QP2/1K4R1 b - - 0 18
r1b2r1k/p4p1p/2p4n/8/2B5/3P3P/PPP1QP2/1K4R1 w - - 1 19
r1b2r1k/p4p1p/2p4n/4Q3/2B5/3P3P/PPP2P2/1K4R1 b - - 2 19
r1b2r1k/p6p/2p2p1n/4Q3/2B5/3P3P/PPP2P2/1K4R1 w - - 0 20
r1b2r1k/p3Q2p/2p2p1n/8/2B5/3P3P/PPP2P2/1K4R1 b - - 1 20
r4r1k/p3Q2p/2p2p1n/8/2B5/3P3b/PPP2P2/1K4R1 w - - 0 21
r4r1k/p5Qp/2p2p1n/8/2B5/3P3b/PPP2P2/1K4R1 b - - 1 21
`;


italian_list = [italian_1, italian_2, italian_3, italian_4, italian_5]


kings_knight_1 = `

rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
rnbqk1nr/pppp1ppp/8/2b1p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3
rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3
rnb1k1nr/pppp1ppp/5q2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4
rnb1k1nr/pppp1ppp/5q2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4
rnb1k1nr/pppp1pp1/5q1p/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5
rnb1k1nr/pppp1pp1/5q1p/2b1p3/2B1P3/3P1N2/PPPB1PPP/RN1QK2R b KQkq - 1 5
rnb1k1nr/ppp2pp1/3p1q1p/2b1p3/2B1P3/3P1N2/PPPB1PPP/RN1QK2R w KQkq - 0 6
rnb1k1nr/ppp2pp1/3p1q1p/2b1p3/1PB1P3/3P1N2/P1PB1PPP/RN1QK2R b KQkq b3 0 6
rnb1k1nr/ppp2pp1/1b1p1q1p/4p3/1PB1P3/3P1N2/P1PB1PPP/RN1QK2R w KQkq - 1 7
rnb1k1nr/ppp2pp1/1b1p1q1p/4p3/PPB1P3/3P1N2/2PB1PPP/RN1QK2R b KQkq a3 0 7
rnb1k1nr/pp3pp1/1bpp1q1p/4p3/PPB1P3/3P1N2/2PB1PPP/RN1QK2R w KQkq - 0 8
rnb1k1nr/pp3pp1/1bpp1q1p/P3p3/1PB1P3/3P1N2/2PB1PPP/RN1QK2R b KQkq - 0 8
rnbbk1nr/pp3pp1/2pp1q1p/P3p3/1PB1P3/3P1N2/2PB1PPP/RN1QK2R w KQkq - 1 9
rnbbk1nr/pp3pp1/2pp1q1p/P3p3/1PB1P3/2PP1N2/3B1PPP/RN1QK2R b KQkq - 0 9
rnbbk2r/pp2npp1/2pp1q1p/P3p3/1PB1P3/2PP1N2/3B1PPP/RN1QK2R w KQkq - 1 10
rnbbk2r/pp2npp1/2pp1q1p/P3p3/1PB1P3/1QPP1N2/3B1PPP/RN2K2R b KQkq - 2 10
rnbb1rk1/pp2npp1/2pp1q1p/P3p3/1PB1P3/1QPP1N2/3B1PPP/RN2K2R w KQ - 3 11
rnbb1rk1/pp2npp1/2pp1q1p/PP2p3/2B1P3/1QPP1N2/3B1PPP/RN2K2R b KQ - 0 11
rnbb1rk1/1p2npp1/p1pp1q1p/PP2p3/2B1P3/1QPP1N2/3B1PPP/RN2K2R w KQ - 0 12
rnbb1rk1/1p2npp1/p1pp1q1p/PP2p3/2B1P3/1QPP1N2/3B1PPP/RN3RK1 b - - 1 12
rnbb1rk1/1p2npp1/p1p2q1p/PP1pp3/2B1P3/1QPP1N2/3B1PPP/RN3RK1 w - - 0 13
rnbb1rk1/1p2npp1/p1p2q1p/PP1Pp3/2B5/1QPP1N2/3B1PPP/RN3RK1 b - - 0 13
rnbb1rk1/1p2npp1/p4q1p/PP1pp3/2B5/1QPP1N2/3B1PPP/RN3RK1 w - - 0 14
rnbb1rk1/1p2npp1/p4q1p/PP1Bp3/8/1QPP1N2/3B1PPP/RN3RK1 b - - 0 14
rnbb1rk1/1p2npp1/5q1p/Pp1Bp3/8/1QPP1N2/3B1PPP/RN3RK1 w - - 0 15
rnbb1rk1/1p2npp1/5q1p/PQ1Bp3/8/2PP1N2/3B1PPP/RN3RK1 b - - 0 15
rnbb1rk1/1p2npp1/6qp/PQ1Bp3/8/2PP1N2/3B1PPP/RN3RK1 w - - 1 16
rnbb1rk1/1p2npp1/6qp/PQ1BN3/8/2PP4/3B1PPP/RN3RK1 b - - 0 16
rnbb1rk1/1p2npp1/7p/PQ1BNq2/8/2PP4/3B1PPP/RN3RK1 w - - 1 17
rnbb1rk1/1p2npp1/7p/PQ1BNq2/3P4/2P5/3B1PPP/RN3RK1 b - - 0 17
1nbb1rk1/1p2npp1/r6p/PQ1BNq2/3P4/2P5/3B1PPP/RN3RK1 w - - 1 18
1nbb1rk1/1B2npp1/r6p/PQ2Nq2/3P4/2P5/3B1PPP/RN3RK1 b - - 0 18
1nbb1rk1/1B2npp1/r3q2p/PQ2N3/3P4/2P5/3B1PPP/RN3RK1 w - - 1 19
1nbb1rk1/4npp1/B3q2p/PQ2N3/3P4/2P5/3B1PPP/RN3RK1 b - - 0 19
1n1b1rk1/4npp1/b3q2p/PQ2N3/3P4/2P5/3B1PPP/RN3RK1 w - - 0 20
1Q1b1rk1/4npp1/b3q2p/P3N3/3P4/2P5/3B1PPP/RN3RK1 b - - 0 20
1Q1b1rk1/4npp1/4q2p/P3N3/3P4/2P5/3B1PPP/RN3bK1 w - - 0 21
1Q1b1rk1/4npp1/4q2p/P3N3/3P4/2P5/3B1PPP/RN3K2 b - - 0 21
1Q3rk1/4npp1/4q2p/b3N3/3P4/2P5/3B1PPP/RN3K2 w - - 0 22
5rk1/4npp1/4q2p/bQ2N3/3P4/2P5/3B1PPP/RN3K2 b - - 1 22
3b1rk1/4npp1/4q2p/1Q2N3/3P4/2P5/3B1PPP/RN3K2 w - - 2 23
3b1rk1/4npp1/4q2p/1Q1PN3/8/2P5/3B1PPP/RN3K2 b - - 0 23
3b1rk1/4npp1/7p/1Q1PNq2/8/2P5/3B1PPP/RN3K2 w - - 1 24
3b1rk1/4npp1/3P3p/1Q2Nq2/8/2P5/3B1PPP/RN3K2 b - - 0 24
3b1rk1/5pp1/3P2np/1Q2Nq2/8/2P5/3B1PPP/RN3K2 w - - 1 25
3b1rk1/5pp1/3P2nB/1Q2Nq2/8/2P5/5PPP/RN3K2 b - - 0 25
3b1rk1/5p2/3P2np/1Q2Nq2/8/2P5/5PPP/RN3K2 w - - 0 26
3b1rk1/5p2/3P2np/1Q2Nq2/2P5/8/5PPP/RN3K2 b - - 0 26
3b1rk1/5p2/3P3p/1Q2nq2/2P5/8/5PPP/RN3K2 w - - 0 27
3b1rk1/5p2/3P3p/1QP1nq2/8/8/5PPP/RN3K2 b - - 0 27
5rk1/5p2/3P1b1p/1QP1nq2/8/8/5PPP/RN3K2 w - - 1 28
5rk1/1Q3p2/3P1b1p/2P1nq2/8/8/5PPP/RN3K2 b - - 2 28
5rk1/1Q3p2/3P1b1p/2P2q2/8/3n4/5PPP/RN3K2 w - - 3 29
5rk1/1Q3p2/2PP1b1p/5q2/8/3n4/5PPP/RN3K2 b - - 0 29
5rk1/1Q3p2/2PP1b1p/8/8/3n4/5qPP/RN3K2 w - - 0 30

`;

kings_knight_info_1 = `
22b:
e5-d7,f8-e8,d7-f6,e6-f6,b5-e8,

there is a nasty combination with the knight

and move your knight to the rim to develop...

1. e4 e5 2. Nf3 Bc5 3. Bc4 Qf6 4. d3 h6 5. Bd2 d6 6. b4 Bb6 7. a4 c6 8. a5 Bd8
9. c3 Ne7 10. Qb3 O-O 11. b5 a6 12. O-O d5 13. exd5 cxd5 14. Bxd5 axb5 15. Qxb5
Qg6 16. Nxe5 Qf5 17. d4 Ra6 18. Bxb7 Qe6 19. Bxa6 Bxa6 20. Qxb8 Bxf1 21. Kxf1
Bxa5 22. Qb5 Bd8 23. d5 Qf5 24. d6 Ng6 25. Bxh6 gxh6 26. c4 Nxe5 27. c5 Bf6 28.
Qb7 Nd3 29. c6 Qxf2# 0-1

https://www.chess.com/openings/Kings-Pawn-Opening-Kings-Knight-Busch-Gass-Gambit

`;

kings_knight_list = [kings_knight_1];

kings_knight_info_list = [kings_knight_info_1];

nimzo_defense_1 = `rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1
rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 1 2
rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2
rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3
rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR b KQkq - 1 3
rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 4
rnbqk2r/pppp1ppp/4pn2/8/1bPP4/P1N5/1P2PPPP/R1BQKBNR b KQkq - 0 4
rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1b5/1P2PPPP/R1BQKBNR w KQkq - 0 5
rnbqk2r/pppp1ppp/4pn2/8/2PP4/P1P5/4PPPP/R1BQKBNR b KQkq - 0 5
rnbqk2r/pp1p1ppp/4pn2/2p5/2PP4/P1P5/4PPPP/R1BQKBNR w KQkq c6 0 6
rnbqk2r/pp1p1ppp/4pn2/2p5/2PPP3/P1P5/5PPP/R1BQKBNR b KQkq e3 0 6
rnb1k2r/pp1p1ppp/4pn2/q1p5/2PPP3/P1P5/5PPP/R1BQKBNR w KQkq - 1 7
rnb1k2r/pp1p1ppp/4pn2/q1p1P3/2PP4/P1P5/5PPP/R1BQKBNR b KQkq - 0 7
rnb1k2r/pp1p1ppp/4p3/q1p1P3/2PPn3/P1P5/5PPP/R1BQKBNR w KQkq - 1 8
rnb1k2r/pp1p1ppp/4p3/q1p1P3/2PPn3/P1P5/3B1PPP/R2QKBNR b KQkq - 2 8
r1b1k2r/pp1p1ppp/2n1p3/q1p1P3/2PPn3/P1P5/3B1PPP/R2QKBNR w KQkq - 3 9
r1b1k2r/pp1p1ppp/2n1p3/q1p1P3/2PPn3/P1P2N2/3B1PPP/R2QKB1R b KQkq - 4 9
r1b1k2r/pp1p1ppp/2n1p3/q1p1P3/2PP4/P1n2N2/3B1PPP/R2QKB1R w KQkq - 0 10
r1b1k2r/pp1p1ppp/2n1p3/q1p1P3/2PP4/P1n2N2/2QB1PPP/R3KB1R b KQkq - 1 10
r1b1k2r/pp1p1ppp/2n1p3/q3P3/2Pp4/P1n2N2/2QB1PPP/R3KB1R w KQkq - 0 11
r1b1k2r/pp1p1ppp/2n1p3/q3P3/P1Pp4/2n2N2/2QB1PPP/R3KB1R b KQkq - 0 11
r1b1k2r/p2p1ppp/1pn1p3/q3P3/P1Pp4/2n2N2/2QB1PPP/R3KB1R w KQkq - 0 12
r1b1k2r/p2p1ppp/1pn1p3/q3P3/P1Pp4/2n2N2/2QBBPPP/R3K2R b KQkq - 1 12
r3k2r/p2p1ppp/bpn1p3/q3P3/P1Pp4/2n2N2/2QBBPPP/R3K2R w KQkq - 2 13
r3k2r/p2p1ppp/bpn1p3/q3P3/P1Pp4/2n2N2/2QBBPPP/R4K1R b kq - 3 13
2r1k2r/p2p1ppp/bpn1p3/q3P3/P1Pp4/2n2N2/2QBBPPP/R4K1R w k - 4 14
2r1k2r/p2p1ppp/bpn1p3/q3P3/P1Pp4/2n2NP1/2QBBP1P/R4K1R b k - 0 14
2r1k2r/p2p1ppp/bp2p3/q3n3/P1Pp4/2n2NP1/2QBBP1P/R4K1R w k - 0 15
2r1k2r/p2p1ppp/bp2p3/q3n3/P1PN4/2n3P1/2QBBP1P/R4K1R b k - 0 15
2r1k2r/p2p1ppp/bp2p3/q3n3/P1PN4/6P1/2QBnP1P/R4K1R w k - 0 16
2r1k2r/p2p1ppp/bp2p3/B3n3/P1PN4/6P1/2Q1nP1P/R4K1R b k - 0 16
2r1k2r/p2p1ppp/bp2p3/B3n3/P1Pn4/6P1/2Q2P1P/R4K1R w k - 0 17
2r1k2r/p2p1ppp/bp2p3/B3n3/P1Pn4/6P1/1Q3P1P/R4K1R b k - 1 17
4k2r/p2p1ppp/bp2p3/B3n3/P1rn4/6P1/1Q3P1P/R4K1R w k - 0 18
4k2r/p2p1ppp/bp2p3/B3n3/P1rn4/6P1/1Q3PKP/R6R b k - 1 18
4k2r/pb1p1ppp/1p2p3/B3n3/P1rn4/6P1/1Q3PKP/R6R w k - 2 19
4k2r/pb1p1ppp/1p2p3/B3n3/P1rn4/6PK/1Q3P1P/R6R b k - 3 19
4k2r/pb1p1ppp/1p2p3/B7/P1rn4/3n2PK/1Q3P1P/R6R w k - 4 20
4k2r/pb1p1ppp/1p2p3/B7/P1rn4/3n2PK/3Q1P1P/R6R b k - 5 20
4k2r/pb1p1ppp/1p2p3/B7/P1r5/3n1nPK/3Q1P1P/R6R w k - 6 21
4k2r/pb1p1ppp/1p2p3/B7/P1r5/3nQnPK/5P1P/R6R b k - 7 21
4k2r/pb1p1ppp/1p2p3/B5n1/P1r5/3nQ1PK/5P1P/R6R w k - 8 22


`;

nimzo_defense_list = [nimzo_defense_1];

nimzo_defense_info_1 = `
move 5a:

you want to be able to : push the pawns e2 to e3 or d2 to d3  and queen to c2


at move 6a: queen has a double attack if the pawn is captured


double attacker on the c3 pawn at 7b

white needs to get the knight out the way when attacked by a pawn

10b knight is cemented

10b:
f3-d4,a5-e5,d4-e2,c3-e2,f1-e2,e5-a1 with check and you have all sorts of problems


purpose of 11b is to bring the bishop to attack the c4 pawn

13a: cannot castle because then e2 bishop is hanging 


14b: for white to capture the knight at e5 do not gain anything...

15b: black offers queen

now in this variation bishop cannot move or the knight hangs with the bishop lining up against the king

d4-e2,a5-d5,c4-d5,c8-c2,


c4 square under triple attack 

18b:
g2-g1,c4-c2,b2-d4,e5-f3,g1-f1,f3-d4


20b:
d2-d2,d2-d3,f3-g5,


21b: e3-g5,d3-f2, checkmate

`;

nimzo_defense_info_list = [nimzo_defense_info_1];

birds_opening_1 = `
rnbqkbnr/pppppppp/8/8/5P2/8/PPPPP1PP/RNBQKBNR b KQkq f3 0 1
rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq d6 0 2
rnbqkbnr/ppp1pppp/8/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R b KQkq - 1 2
rnbqkbnr/pp2pppp/2p5/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq - 0 3
rnbqkbnr/pp2pppp/2p5/3p4/3P1P2/5N2/PPP1P1PP/RNBQKB1R b KQkq d3 0 3
rn1qkbnr/pp2pppp/2p5/3p1b2/3P1P2/5N2/PPP1P1PP/RNBQKB1R w KQkq - 1 4
rn1qkbnr/pp2pppp/2p5/3p1b2/3P1P2/4PN2/PPP3PP/RNBQKB1R b KQkq - 0 4
rn1qkbnr/pp2ppp1/2p4p/3p1b2/3P1P2/4PN2/PPP3PP/RNBQKB1R w KQkq - 0 5
rn1qkbnr/pp2ppp1/2p4p/3p1b2/3P1P2/2N1PN2/PPP3PP/R1BQKB1R b KQkq - 1 5
rn1qkbnr/pp2p1p1/2p2p1p/3p1b2/3P1P2/2N1PN2/PPP3PP/R1BQKB1R w KQkq - 0 6
rn1qkbnr/pp2p1p1/2p2p1p/3p1b2/3P1P2/2NBPN2/PPP3PP/R1BQK2R b KQkq - 1 6
rn1qkbnr/pp2p1p1/2p2p1p/3p4/3P1P2/2NbPN2/PPP3PP/R1BQK2R w KQkq - 0 7
rn1qkbnr/pp2p1p1/2p2p1p/3p4/3P1P2/2NQPN2/PPP3PP/R1B1K2R b KQkq - 0 7
r2qkbnr/pp1np1p1/2p2p1p/3p4/3P1P2/2NQPN2/PPP3PP/R1B1K2R w KQkq - 1 8
r2qkbnr/pp1np1p1/2p2p1p/3p4/3P1P2/3QPN2/PPP1N1PP/R1B1K2R b KQkq - 2 8
r2qkbnr/pp1n2p1/2p1pp1p/3p4/3P1P2/3QPN2/PPP1N1PP/R1B1K2R w KQkq - 0 9
r2qkbnr/pp1n2p1/2p1pp1p/3p4/3P1P1N/3QP3/PPP1N1PP/R1B1K2R b KQkq - 1 9
r3kbnr/pp1n2p1/2p1pp1p/q2p4/3P1P1N/3QP3/PPP1N1PP/R1B1K2R w KQkq - 2 10
r3kbnr/pp1n2p1/2p1pp1p/q2p4/3P1P1N/2PQP3/PP2N1PP/R1B1K2R b KQkq - 0 10
r3kb1r/pp1nn1p1/2p1pp1p/q2p4/3P1P1N/2PQP3/PP2N1PP/R1B1K2R w KQkq - 1 11
r3kb1r/pp1nn1p1/2p1pp1p/q2p4/1P1P1P1N/2PQP3/P3N1PP/R1B1K2R b KQkq b3 0 11
r3kb1r/ppqnn1p1/2p1pp1p/3p4/1P1P1P1N/2PQP3/P3N1PP/R1B1K2R w KQkq - 1 12
r3kb1r/ppqnn1p1/2p1pp1p/3p4/1P1P1P1N/2PQP3/P3N1PP/R1B2RK1 b kq - 2 12
r3kb1r/p1qnn1p1/1pp1pp1p/3p4/1P1P1P1N/2PQP3/P3N1PP/R1B2RK1 w kq - 0 13
r3kb1r/p1qnn1p1/1pp1pp1p/3p1P2/1P1P3N/2PQP3/P3N1PP/R1B2RK1 b kq - 0 13
r3kb1r/p1qnn1p1/1pp2p1p/3p1p2/1P1P3N/2PQP3/P3N1PP/R1B2RK1 w kq - 0 14
r3kb1r/p1qnn1p1/1pp2p1p/3p1N2/1P1P4/2PQP3/P3N1PP/R1B2RK1 b kq - 0 14
r3kb1r/p1qn2p1/1pp2p1p/3p1n2/1P1P4/2PQP3/P3N1PP/R1B2RK1 w kq - 0 15
r3kb1r/p1qn2p1/1pp2p1p/3p1Q2/1P1P4/2P1P3/P3N1PP/R1B2RK1 b kq - 0 15
r3kbr1/p1qn2p1/1pp2p1p/3p1Q2/1P1P4/2P1P3/P3N1PP/R1B2RK1 w q - 1 16
r3kbr1/p1qn2pQ/1pp2p1p/3p4/1P1P4/2P1P3/P3N1PP/R1B2RK1 b q - 2 16
2kr1br1/p1qn2pQ/1pp2p1p/3p4/1P1P4/2P1P3/P3N1PP/R1B2RK1 w - - 3 17
2kr1bQ1/p1qn2p1/1pp2p1p/3p4/1P1P4/2P1P3/P3N1PP/R1B2RK1 b - - 0 17
2kr2Q1/p1qn2p1/1ppb1p1p/3p4/1P1P4/2P1P3/P3N1PP/R1B2RK1 w - - 1 18
2kr4/p1qn2Q1/1ppb1p1p/3p4/1P1P4/2P1P3/P3N1PP/R1B2RK1 b - - 0 18
2kr4/p1qn2Q1/1pp2p1p/3p4/1P1P4/2P1P3/P3N1Pb/R1B2RK1 w - - 0 19
2kr4/p1qn2Q1/1pp2p1p/3p4/1P1P4/2P1P3/P3N1Pb/R1B2R1K b - - 1 19
2kr4/p1qn2Q1/1p3p1p/2pp4/1P1P4/2P1P3/P3N1Pb/R1B2R1K w - - 0 20
2kr4/p1qn4/1p3p1Q/2pp4/1P1P4/2P1P3/P3N1Pb/R1B2R1K b - - 0 20
2kr4/p1qn4/1p1b1p1Q/2pp4/1P1P4/2P1P3/P3N1P1/R1B2R1K w - - 1 21
2kr4/p1qn4/1p1b1p1Q/2pp4/1P1P4/2P1P1P1/P3N3/R1B2R1K b - - 0 21
2k3r1/p1qn4/1p1b1p1Q/2pp4/1P1P4/2P1P1P1/P3N3/R1B2R1K w - - 1 22
2k3r1/p1qn2Q1/1p1b1p2/2pp4/1P1P4/2P1P1P1/P3N3/R1B2R1K b - - 2 22
2k5/p1qn2r1/1p1b1p2/2pp4/1P1P4/2P1P1P1/P3N3/R1B2R1K w - - 0 23
2k5/p1qn2r1/1p1b1p2/2pp4/1P1P4/2P1P1P1/P7/R1B2RNK b - - 1 23
2k5/p1qn2r1/1p3p2/2pp4/1P1P4/2P1P1b1/P7/R1B2RNK w - - 0 24
2k5/p1qn2r1/1p3p2/2pp4/1P1P4/2P1PRb1/P7/R1B3NK b - - 1 24
2kq4/p2n2r1/1p3p2/2pp4/1P1P4/2P1PRb1/P7/R1B3NK w - - 2 25
2kq4/p2n2r1/1p3p2/2pp4/1P1P4/2P1PRb1/P3N3/R1B4K b - - 3 25
2k4q/p2n2r1/1p3p2/2pp4/1P1P4/2P1PRb1/P3N3/R1B4K w - - 4 26
2k4q/p2n2r1/1p3p2/2pp4/1P1P4/2P1PRb1/P3N1K1/R1B5 b - - 5 26
2k4q/p2n2r1/1p1b1p2/2pp4/1P1P4/2P1PR2/P3N1K1/R1B5 w - - 6 27
2k4q/p2n2r1/1p1b1p2/2pp4/1P1P4/2P1PR2/P3NK2/R1B5 b - - 7 27
2k5/p2n2r1/1p1b1p2/2pp4/1P1P4/2P1PR2/P3NK1q/R1B5 w - - 8 28
2k5/p2n2r1/1p1b1p2/2pp4/1P1P4/2P1PR2/P3N2q/R1B1K3 b - - 9 28
2k5/p2n4/1p1b1p2/2pp4/1P1P4/2P1PR2/P3N1rq/R1B1K3 w - - 10 29
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1PR2/P5rq/R1B1K3 b - - 11 29
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1PR2/P5r1/R1B1K2q w - - 12 30
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P5r1/R1B1KR1q b - - 13 30
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P7/R1B1KRrq w - - 14 31
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P7/R1B1K1Rq b - - 0 31
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P7/R1B1K1q1 w - - 0 32
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P2K4/R1B3q1 b - - 1 32
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2P1P3/P2K1q2/R1B5 w - - 2 33
2k5/p2n4/1p1b1p2/2pp4/1P1P1N2/2PKP3/P4q2/R1B5 b - - 3 33
2k5/p2n4/1p1b1p2/3p4/1PpP1N2/2PKP3/P4q2/R1B5 w - - 0 34


`;

birds_opening_list = [birds_opening_1];

birds_opening_info_1 = `
https://www.chessable.com/blog/how-to-play-birds-opening/


9a,g8-e7,


1. f4 d5 2. Nf3 c6 3. d4 Bf5 4. e3 h6 5. Nc3 f6 6. Bd3 Bxd3 7. Qxd3 Nd7 8. Ne2
e6 9. Nh4 Qa5+ 10. c3 Ne7 11. b4 Qc7 12. O-O b6 13. f5 exf5 14. Nxf5 Nxf5 15.
Qxf5 Rg8 16. Qh7 O-O-O 17. Qxg8 Bd6 18. Qxg7 Bxh2+ 19. Kh1 c5 20. Qxh6 Bd6 21.
g3 Rg8 22. Qg7 Rxg7 23. Ng1 Bxg3 24. Rf3 Qd8 25. Ne2 Qh8+ 26. Kg2 Bd6+ 27. Kf2
Qh2+ 28. Ke1 Rg2 29. Nf4 Qh1+ 30. Rf1 Rg1 31. Rxg1 Qxg1+ 32. Kd2 Qf2+ 33. Kd3
c4# 0-1

https://www.chess.com/game/live/51122348471

it says it is good to fianchetto the kingside, why did I move the pawn the wrong way?

`;

birds_opening_info_list = [birds_opening_info_1];

kings_pawn_1 = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2
rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
rnbqkbnr/pppp1p1p/6p1/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3
rnbqkbnr/pppp1p1p/6p1/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 3
r1bqkbnr/pppp1p1p/2n3p1/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4
r1bqkbnr/pppp1p1p/2n3p1/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 3 4
r1b1kbnr/pppp1p1p/2n3p1/4p1q1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5
r1b1kbnr/pppp1p1p/2n3p1/4p1q1/2B1P3/3P4/PPP2PPP/RNBQK2R b KQkq - 0 5
r1b1kbnr/pppp1p1p/2n3p1/4p3/2B1P3/3P4/PPP2PqP/RNBQK2R w KQkq - 0 6
r1b1kbnr/pppp1p1p/2n3p1/4p3/2B1P3/3P4/PPP2PqP/RNBQKR2 b Qkq - 1 6
r1b1k1nr/pppp1pbp/2n3p1/4p3/2B1P3/3P4/PPP2PqP/RNBQKR2 w Qkq - 2 7
r1b1k1nr/pppp1pbp/2n3p1/4p3/2B1P3/2NP4/PPP2PqP/R1BQKR2 b Qkq - 3 7
r1b1k1nr/ppp2pbp/2np2p1/4p3/2B1P3/2NP4/PPP2PqP/R1BQKR2 w Qkq - 0 8
r1b1k1nr/ppp2pbp/2np2p1/3Np3/2B1P3/3P4/PPP2PqP/R1BQKR2 b Qkq - 1 8
1rb1k1nr/ppp2pbp/2np2p1/3Np3/2B1P3/3P4/PPP2PqP/R1BQKR2 w Qk - 2 9
1rb1k1nr/ppN2pbp/2np2p1/4p3/2B1P3/3P4/PPP2PqP/R1BQKR2 b Qk - 0 9
1rb3nr/ppNk1pbp/2np2p1/4p3/2B1P3/3P4/PPP2PqP/R1BQKR2 w Q - 1 10
1rb3nr/pp1k1pbp/2np2p1/3Np3/2B1P3/3P4/PPP2PqP/R1BQKR2 b Q - 2 10
1rb3nr/pp1k1pbp/2np2p1/3Np3/2B1P3/3P4/PPP2P1q/R1BQKR2 w Q - 0 11
1rb3nr/pp1k1pbp/2np2p1/3Np3/2B1P1Q1/3P4/PPP2P1q/R1B1KR2 b Q - 1 11
1rbk2nr/pp3pbp/2np2p1/3Np3/2B1P1Q1/3P4/PPP2P1q/R1B1KR2 w Q - 2 12
1rbk2nr/pp3pbp/2np2p1/3Np1B1/2B1P1Q1/3P4/PPP2P1q/R3KR2 b Q - 3 12
1rbk2nr/pp4bp/2np1pp1/3Np1B1/2B1P1Q1/3P4/PPP2P1q/R3KR2 w Q - 0 13
1rbk2nr/pp4bp/2np1pp1/3Np1B1/2B1P3/3P4/PPP2P1q/R3KRQ1 b Q - 1 13
1rbk2nr/1p4bp/p1np1pp1/3Np1B1/2B1P3/3P4/PPP2P1q/R3KRQ1 w Q - 0 14
1rbk2nr/1p4bp/p1np1pp1/3Np1B1/2B1P3/3P4/PPP2P1Q/R3KR2 b Q - 0 14

`;

kings_pawn_list = [kings_pawn_1];

kings_pawn_info_1 = `
hello world

lost my knight.. then..  

should not have gone bishop after put my queen there because get attacked by pawn
`;

kings_pawn_info_list = [kings_pawn_info_1];

kings_fianchetto_1 = `rnbqkbnr/pppppppp/8/8/8/6P1/PPPPPP1P/RNBQKBNR b KQkq - 0 1
rnbqkbnr/ppp1pppp/8/3p4/8/6P1/PPPPPP1P/RNBQKBNR w KQkq d6 0 2
rnbqkbnr/ppp1pppp/8/3p4/8/6P1/PPPPPPBP/RNBQK1NR b KQkq - 1 2
rnbqkbnr/ppp2ppp/8/3pp3/8/6P1/PPPPPPBP/RNBQK1NR w KQkq e6 0 3
rnbqkbnr/ppp2ppp/8/3pp3/8/3P2P1/PPP1PPBP/RNBQK1NR b KQkq - 0 3
rnbqk1nr/ppp2ppp/8/2bpp3/8/3P2P1/PPP1PPBP/RNBQK1NR w KQkq - 1 4
rnbqk1nr/ppp2ppp/8/2bpp3/8/3PP1P1/PPP2PBP/RNBQK1NR b KQkq - 0 4
rnbqk1nr/ppp2ppp/8/2b1p3/3p4/3PP1P1/PPP2PBP/RNBQK1NR w KQkq - 0 5
rnbqk1nr/ppp2ppp/8/2b1p3/3pP3/3P2P1/PPP2PBP/RNBQK1NR b KQkq - 0 5
rnbqk1nr/ppp3pp/8/2b1pp2/3pP3/3P2P1/PPP2PBP/RNBQK1NR w KQkq f6 0 6
rnbqk1nr/ppp3pp/8/2b1pp2/3pP3/3P1NP1/PPP2PBP/RNBQK2R b KQkq - 1 6
r1bqk1nr/pppn2pp/8/2b1pp2/3pP3/3P1NP1/PPP2PBP/RNBQK2R w KQkq - 2 7
r1bqk1nr/pppn2pp/8/2b1ppB1/3pP3/3P1NP1/PPP2PBP/RN1QK2R b KQkq - 3 7
r1bqk2r/pppn2pp/5n2/2b1ppB1/3pP3/3P1NP1/PPP2PBP/RN1QK2R w KQkq - 4 8
r1bqk2r/pppn2pp/5n2/2b1pPB1/3p4/3P1NP1/PPP2PBP/RN1QK2R b KQkq - 0 8
r1bqk2r/pppn2p1/5n1p/2b1pPB1/3p4/3P1NP1/PPP2PBP/RN1QK2R w KQkq - 0 9
r1bqk2r/pppn2p1/5B1p/2b1pP2/3p4/3P1NP1/PPP2PBP/RN1QK2R b KQkq - 0 9
r1bqk2r/ppp3p1/5n1p/2b1pP2/3p4/3P1NP1/PPP2PBP/RN1QK2R w KQkq - 0 10
r1bqk2r/ppp3p1/5n1p/2b1NP2/3p4/3P2P1/PPP2PBP/RN1QK2R b KQkq - 0 10
r2qk2r/ppp3p1/5n1p/2b1Nb2/3p4/3P2P1/PPP2PBP/RN1QK2R w KQkq - 0 11
r2qk2r/pBp3p1/5n1p/2b1Nb2/3p4/3P2P1/PPP2P1P/RN1QK2R b KQkq - 0 11
1r1qk2r/pBp3p1/5n1p/2b1Nb2/3p4/3P2P1/PPP2P1P/RN1QK2R w KQk - 1 12
1r1qk2r/p1p3p1/2B2n1p/2b1Nb2/3p4/3P2P1/PPP2P1P/RN1QK2R b KQk - 2 12
1r1q1k1r/p1p3p1/2B2n1p/2b1Nb2/3p4/3P2P1/PPP2P1P/RN1QK2R w KQ - 3 13
1r1q1k1r/p1p3p1/2B2n1p/2b1Nb2/3p4/3P2P1/PPPN1P1P/R2QK2R b KQ - 4 13
3q1k1r/p1p3p1/2B2n1p/2b1Nb2/3p4/3P2P1/PrPN1P1P/R2QK2R w KQ - 0 14
3q1k1r/p1p3p1/2B2n1p/2b1Nb2/2Np4/3P2P1/PrP2P1P/R2QK2R b KQ - 1 14
1r1q1k1r/p1p3p1/2B2n1p/2b1Nb2/2Np4/3P2P1/P1P2P1P/R2QK2R w KQ - 2 15
1r1q1k1r/p1p3p1/2B2n1p/N1b1Nb2/3p4/3P2P1/P1P2P1P/R2QK2R b KQ - 3 15
1r1q2kr/p1p3p1/2B2n1p/N1b1Nb2/3p4/3P2P1/P1P2P1P/R2QK2R w KQ - 4 16
1r1q2kr/p1p3p1/2B2n1p/N1b1Nb2/3p4/3P1QP1/P1P2P1P/R3K2R b KQ - 5 16
1r1q2kr/p1pb2p1/2B2n1p/N1b1N3/3p4/3P1QP1/P1P2P1P/R3K2R w KQ - 6 17
1r1q2kr/p1pb2p1/5n1p/N1bBN3/3p4/3P1QP1/P1P2P1P/R3K2R b KQ - 7 17
1r1q3r/p1pb2pk/5n1p/N1bBN3/3p4/3P1QP1/P1P2P1P/R3K2R w KQ - 8 18
1r1q3r/p1pb1Npk/5n1p/N1bB4/3p4/3P1QP1/P1P2P1P/R3K2R b KQ - 9 18
1r1q3r/p1p2Npk/5n1p/N1bB4/3p2b1/3P1QP1/P1P2P1P/R3K2R w KQ - 10 19
1r1q3r/p1p2Npk/5n1p/N1b5/3pB1b1/3P1QP1/P1P2P1P/R3K2R b KQ - 11 19
1r1q3r/p1p2N1k/5npp/N1b5/3pB1b1/3P1QP1/P1P2P1P/R3K2R w KQ - 0 20
1r1q3r/p1p2N1k/5npp/N1b5/3pBQb1/3P2P1/P1P2P1P/R3K2R b KQ - 1 20
1r5r/p1p1qN1k/5npp/N1b5/3pBQb1/3P2P1/P1P2P1P/R3K2R w KQ - 2 21
1r5r/p1p1qN1k/5npQ/N1b5/3pB1b1/3P2P1/P1P2P1P/R3K2R b KQ - 0 21
1r4kr/p1p1qN2/5npQ/N1b5/3pB1b1/3P2P1/P1P2P1P/R3K2R w KQ - 1 22
1r4kQ/p1p1qN2/5np1/N1b5/3pB1b1/3P2P1/P1P2P1P/R3K2R b KQ - 0 22
1r5Q/p1p1qk2/5np1/N1b5/3pB1b1/3P2P1/P1P2P1P/R3K2R w KQ - 0 23
1Q6/p1p1qk2/5np1/N1b5/3pB1b1/3P2P1/P1P2P1P/R3K2R b KQ - 0 23
1Q6/p1p1qk2/6p1/N1b5/3pn1b1/3P2P1/P1P2P1P/R3K2R w KQ - 0 24
1Q6/p1p1qk2/6p1/N1b5/3pn1b1/3P2P1/P1P2P1P/R4RK1 b - - 1 24
1Q6/p1p1qk2/6p1/N1b5/3pn3/3P1bP1/P1P2P1P/R4RK1 w - - 2 25
8/p1p1qk2/6p1/N1b5/3pn3/1Q1P1bP1/P1P2P1P/R4RK1 b - - 3 25
8/p1p1q1k1/6p1/N1b5/3pn3/1Q1P1bP1/P1P2P1P/R4RK1 w - - 4 26
8/p1p1q1k1/2N3p1/2b5/3pn3/1Q1P1bP1/P1P2P1P/R4RK1 b - - 5 26
8/p1p3k1/2N3p1/2b3q1/3pn3/1Q1P1bP1/P1P2P1P/R4RK1 w - - 6 27
8/p1p3k1/2N1Q1p1/2b3q1/3pn3/3P1bP1/P1P2P1P/R4RK1 b - - 7 27
8/p1p3k1/2N1Q1p1/2b4q/3pn3/3P1bP1/P1P2P1P/R4RK1 w - - 8 28
8/p1p3k1/2N1Q1p1/2b4q/3pP3/5bP1/P1P2P1P/R4RK1 b - - 0 28
8/2p3k1/p1N1Q1p1/2b4q/3pP3/5bP1/P1P2P1P/R4RK1 w - - 0 29
8/2pQ2k1/p1N3p1/2b4q/3pP3/5bP1/P1P2P1P/R4RK1 b - - 1 29
8/2pQ4/p1N3pk/2b4q/3pP3/5bP1/P1P2P1P/R4RK1 w - - 2 30
8/2pQN3/p5pk/2b4q/3pP3/5bP1/P1P2P1P/R4RK1 b - - 3 30
8/2pQN3/p5pk/2b4q/3pP1b1/6P1/P1P2P1P/R4RK1 w - - 4 31
6N1/2pQ4/p5pk/2b4q/3pP1b1/6P1/P1P2P1P/R4RK1 b - - 5 31
6N1/2pQ4/p5p1/2b3kq/3pP1b1/6P1/P1P2P1P/R4RK1 w - - 6 32
6N1/2p5/p5p1/2bQ2kq/3pP1b1/6P1/P1P2P1P/R4RK1 b - - 7 32
6N1/2p5/p5p1/2bQ1bkq/3pP3/6P1/P1P2P1P/R4RK1 w - - 8 33
6N1/2p5/p5p1/2bQ1Pkq/3p4/6P1/P1P2P1P/R4RK1 b - - 0 33
6N1/2p5/p7/2bQ1pkq/3p4/6P1/P1P2P1P/R4RK1 w - - 0 34
6N1/2p5/p7/2Q2pkq/3p4/6P1/P1P2P1P/R4RK1 b - - 0 34
6N1/2p5/p7/2Q2p1q/3p2k1/6P1/P1P2P1P/R4RK1 w - - 1 35
6N1/2p5/p7/5p1q/3Q2k1/6P1/P1P2P1P/R4RK1 b - - 0 35
6N1/2p5/p7/7q/3Q1pk1/6P1/P1P2P1P/R4RK1 w - - 0 36
6N1/2p5/p7/7q/5Qk1/6P1/P1P2P1P/R4RK1 b - - 0 36
6N1/2p5/p7/7q/5Q2/6Pk/P1P2P1P/R4RK1 w - - 1 37
8/2p5/p4N2/7q/5Q2/6Pk/P1P2P1P/R4RK1 b - - 2 37
8/2p5/p4N2/8/5Q2/6Pk/P1P1qP1P/R4RK1 w - - 3 38
8/2p5/p4N2/8/6Q1/6Pk/P1P1qP1P/R4RK1 b - - 4 38
8/2p5/p4N2/8/6q1/6Pk/P1P2P1P/R4RK1 w - - 0 39
8/2p5/p7/8/6N1/6Pk/P1P2P1P/R4RK1 b - - 0 39
8/2p5/p7/8/6k1/6P1/P1P2P1P/R4RK1 w - - 0 40
8/2p5/p7/8/6k1/6P1/P1P2P1P/R2R2K1 b - - 1 40
8/2p5/p7/8/8/5kP1/P1P2P1P/R2R2K1 w - - 2 41
8/2pR4/p7/8/8/5kP1/P1P2P1P/R5K1 b - - 3 41
8/2pR4/p7/8/8/6P1/P1P1kP1P/R5K1 w - - 4 42
8/2R5/p7/8/8/6P1/P1P1kP1P/R5K1 b - - 0 42
8/2R5/p7/8/8/6P1/P1Pk1P1P/R5K1 w - - 1 43
8/2R5/p7/8/P7/6P1/2Pk1P1P/R5K1 b - a3 0 43
8/2R5/p7/8/P7/6P1/2P1kP1P/R5K1 w - - 1 44
8/2R5/p7/8/P7/6P1/2P1kP1P/1R4K1 b - - 2 44
8/2R5/p7/8/P7/6P1/2Pk1P1P/1R4K1 w - - 3 45
8/2R5/pR6/8/P7/6P1/2Pk1P1P/6K1 b - - 4 45
8/2R5/pR6/8/P7/6P1/2P1kP1P/6K1 w - - 5 46


`;

kings_fianchetto_list = [kings_fianchetto_1];

kings_fianchetto_info_1 = `https://www.chess.com/analysis/game/live/51067192167

I was too tired to attack an exposed king..


15a night jump is a mistake
c5-b4,e1-f1,b4-a5,

18a -- something similiar here
d8-e8,d5-e4,f6-e4,f3-e4,e8-e4,d3-e4,c5-b4,e1-e2,b4-a5,h8-e8,h1-b1,

-- your next move with white is a mistake



1. g3 d5 2. Bg2 e5 3. d3 Bc5 4. e3 d4 5. e4 f5 6. Nf3 Nd7 7. Bg5 Ngf6 8. exf5 h6
9. Bxf6 Nxf6 10. Nxe5 Bxf5 11. Bxb7 Rb8 12. Bc6+ Kf8 13. Nd2 Rxb2 14. Ndc4 Rb8
15. Na5 (15. Na5 Bb4+ 16. Kf1 Bxa5) 15... Kg8 16. Qf3 Bd7 17. Bd5+ Kh7 18. Nf7
(18. Nf7 Qe7+ 19. Be4+ Nxe4 20. Qxe4+ Qxe4+ 21. dxe4 Bb4+ 22. Ke2 Rhe8 23. Rhb1
Bxa5) 18... Bg4 19. Be4+ g6 20. Qf4 Qe7 21. Qxh6+ Kg8 22. Qxh8+ Kxf7 23. Qxb8
Nxe4 24. O-O Bf3 25. Qb3+ Kg7 26. Nc6 Qg5 27. Qe6 Qh5 28. dxe4 a6 29. Qd7+ Kh6
30. Ne7 Bg4 31. Ng8+ Kg5 32. Qd5+ Bf5 33. exf5 gxf5 34. Qxc5 Kg4 35. Qxd4+ f4
36. Qxf4+ Kh3 37. Nf6 Qe2 38. Qg4+ Qxg4 39. Nxg4 Kxg4 40. Rfd1 Kf3 41. Rd7 Ke2
42. Rxc7 Kd2 43. a4 Ke2 44. Rb1 Kd2 45. Rb6 Ke2 1-0

`;

kings_fianchetto_info_list = [kings_fianchetto_info_1];

scandinavian_1 = `e2-e4, d7-d5, e4-d5, d8-d5, b1-c3, d5-d6, d2-d4, c7-c5, g1-f3, c8-g4, c1-e3, g4-f3, g2-f3, b8-c6, d4-d5, c6-b4, a2-a3, b4-a6, h2-h4, e7-e6, d1-d2, e8-c8, a8-d8, e1-c1, a1-d1, g8-f6, f1-a6, d6-a6, d2-e2, a6-e2, c3-e2, e6-d5, e2-f4, d5-d4, e3-d2, f8-d6, f4-d3, c5-c4, d3-b4, d6-b4, d2-b4, d4-d3, c2-c3, b7-b6, h1-g1, g7-g6, b4-e7, d8-e8, e7-f6, h8-g8, c1-b1, e8-e2, g1-g2, d3-d2, f6-g5, e2-e1, b1-c2, e1-d1, c2-d1, g8-d8, g5-d2, c8-c7, g2-g4, b6-b5, g4-e4, c7-c6, e4-e7, d8-d7, e7-d7, c6-d7, d1-e2, d7-c6, e2-d1, c6-b6, d2-g5, b6-a5, f3-f4, f7-f5, g5-h6, a5-a4, f2-f3, a4-b3, d1-c1, a7-a5, h6-g7, b5-b4, c3-b4, a5-b4, a3-b4, b3-b4, c1-c2, b4-c5, c2-c3, c5-d5, g7-h8, d5-c5, h8-g7, c5-d5, g7-f8, h7-h6, f8-h6, d5-c5, 
`;

scandinavian_2 = `e2-e4, d7-d5, e4-d5, d8-d5, b1-c3, d5-e5, g1-e2, b8-c6, d2-d4, c6-d4, f2-f4, e5-e6, d1-d3, d4-e2, f1-e2, g8-f6, h2-h3, c8-d7, f4-f5, e6-e5, g2-g4, h7-h5, h1-g1, h5-g4, h3-g4, h8-h2, b2-b3, f6-g4, c1-b2, g4-f2, d3-d2, d7-f5, c3-b5, e5-b2, b5-c7, `

scandinavian_list = [scandinavian_1, scandinavian_2];

alekhine_1 = `
[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]

1. e4 d5 2. exd5 Nf6 3. Nc3 Nxd5 4. d4 Nxc3 5. bxc3 e6 6. Nf3 c6 7. Bc4 Qa5 8.
Bb2 Ba3 9. Qb1 Bxb2 10. Qxb2 b5 11. Bb3 O-O 12. O-O Ba6 13. a4 b4 14. cxb4 Qb6
15. Rfe1 Qxb4 16. Ne5 c5 17. dxc5 Qxc5 18. Rad1 Bc8 19. Rd3 Na6 20. Rg3 f6 21.
Rc3 Qe7 22. Nc6 Qd6 23. Qc1 Nc5 24. Qe3 Nxb3 25. cxb3 Bd7 26. Nxa7 e5 *
{alkehkine use rooks and queen on the same diagonals} `;

alekhine_list = [alekhine_1];

first_date_1 = `[Result "*"]

1.e4 d5 2.Nf3 dxe4 3.Ng1 Bg4 4.f3 exf3 5.gxf3 Bd7 6.f4 Bc6 7.Nf3 Bxf3 8.Qxf3 e6 9.Qxb7 Nd7 10.Bb5 Nf6 11.Qf3 Bb4 12.a3 Bc5 13.b4 Bd4 14.Nc3 Bxc3 15.Qxc3 O-O 16.Qd3 Qe8 17.Bxd7 { r3qrk1/p1pn1ppp/4pn2/1B6/1P3P2/P2Q4/2PP3P/R1B1K2R } ( 17.Bb2 a6 18.Ba4 e5 19.Rg1 exf4+ 20.Kf1 ) 17...Nxd7 18.Rg1 e5 19.Qe4 f5 20.Qd5+ Rf7 21.fxe5 Nxe5 22.d4 Nf3+ 23.Kf1 Nxg1 24.Kxg1 Qe1+ 25.Kg2 Re8 26.Bf4 Qxa1 27.Bxc7 Qc3 *
`;

first_date_2 = `{guioco piano}

1. e4 e5 2. Nf3 Nc6 3. Bc4 Nf6 4. d3 Bc5 5. c3 d6 6. b4 Bb6 7. a4 a5 8. b5 Ne7
9. O-O h6 10. Re1 O-O 11. Be3 Qe8 12. Bxb6 cxb6 13. Nbd2 Bg4 14. h3 Bxf3 15.
Nxf3 h5 16. Qd2 Kh8 17. Ng5 Neg8 18. Qe3 Qd7 19. Qxb6 g6 20. Qe3 Qc7 21. f4 Kg7
22. fxe5 dxe5 23. Bxf7 Rxf7 24. Ne6+ Kh8 *

`;

first_date_3 = `

[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[TimeControl "-"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 Nf6 5. b4 Bb6 6. d3 d6 7. a4 a5 8. b5 Ne7
9. Bg5 O-O 10. O-O Be6 11. Bxf6 gxf6 12. Bxe6 fxe6 13. Qb3 Kf7 14. Nbd2 Rg8 15.
d4 Qc8 16. dxe5 dxe5 17. Kh1 Rb8 18. Rad1 c6 19. Nc4 Bc5 20. Ncxe5+ fxe5 21.
Nxe5+ Kg7 22. Nd7 Kf7 {I wanted to take the rook here} 23. Nxc5 Rg6 24. Nd7 Qh8 25. f4 Rd8 26. f5 Rh6 27. fxe6+
Kg8 28. Nf6+ Kg7 29. Ng4 Rxd1 30. Qxd1 Rxe6 31. Qd4+ Kg8 32. Nh6+ Rxh6 33. Qd8+
Kg7 34. Qxe7+ Kg6 35. Qe6+ Qf6 36. Rxf6+ Kg7 37. Qe7+ Kh8 *`;

first_date_4 = `[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "0-1"]
[TimeControl "-"]

1. e4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bc5 5. Nxc6 Qf6 6. Na5 Qxf2# 0-1 {lost should have let go with the knight because was +3 and use the queen}

`;

first_date_5 = `[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[TimeControl "-"]

1. e4 c5 2. Nf3 Nc6 3. Bc4 e6 4. d4 Nxd4 5. Nxd4 cxd4 6. Qxd4 h5 7. h4 Qc7 8.
Nc3 Ne7 9. Nb5 Nc6 * {required to attack with the knight the next row}

`;

first_date_6 = `
[Event "?"]
[Site "?"]
[Date "????.??.??"]
[Round "?"]
[White "?"]
[Black "?"]
[Result "*"]
[TimeControl "-"]

1. e4 c5 2. Nf3 d6 3. Bc4 Nf6 4. Ng5 d5 5. exd5 Nxd5 6. Qf3 Be6 7. Bb5+ Nc6 8.
Nc3 Qd7 9. d3 Nxc3 *

{analyze this because a lot of moves I am +5.6 not knowing how to move}
`;

first_date_list = [
  first_date_1,
  first_date_2,
  first_date_3,
  first_date_4,
  first_date_5,
  first_date_6
];

alekhine_list = [alekhine_1];


fen_list_puzzles_before_split = `8/8/1R6/p1r1p3/P1P1Pp2/3K2k1/8/8 w - - 1 44 {hello world};
r2qkbnr/pp3ppp/2p1p3/2P1P3/Q2p2b1/7P/PP1P2P1/RNB1KBNR b KQkq - 0 8 {second};
rnb1kbnr/pp4pp/2p1pp2/4N3/1q1Pp3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 8;
2kr4/pq1p1p1Q/1p2p3/2b1Pn2/8/2N5/PPPB2PP/R3R2K w - - 1 25;
4r1k1/1Q3ppp/8/2p5/2Pp4/3P4/P1q1rPPP/R2R2K1 w - - 1 26;
r1bqr1k1/4np2/1p3npB/1P1pN3/3P4/p2B4/P3QPPP/R4RK1 w - - 0 21;8/8/1R6/p1r1p3/P1P1Pp2/3K2k1/8/8 w - - 1 44

`;

fen_list_puzzles = fen_list_puzzles_before_split.split(";");

fen_list_games_before_split = `8/8/1R6/p1r1p3/P1P1Pp2/3K2k1/8/8 w - - 1 44 {hello games};
r2qkbnr/pp3ppp/2p1p3/2P1P3/Q2p2b1/7P/PP1P2P1/RNB1KBNR b KQkq - 0 8 {second};
rnb1kbnr/pp4pp/2p1pp2/4N3/1q1Pp3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 8;
2kr4/pq1p1p1Q/1p2p3/2b1Pn2/8/2N5/PPPB2PP/R3R2K w - - 1 25;
4r1k1/1Q3ppp/8/2p5/2Pp4/3P4/P1q1rPPP/R2R2K1 w - - 1 26;
r1bqr1k1/4np2/1p3npB/1P1pN3/3P4/p2B4/P3QPPP/R4RK1 w - - 0 21;8/8/1R6/p1r1p3/P1P1Pp2/3K2k1/8/8 w - - 1 44

`;

fen_list_games = fen_list_games_before_split.split(";");

modern_defense_1 = `1. d4 g6 2. Bd2 Bg7 3. Bc3 Nf6 4. Nd2 d5 5. f3? (5.a4) 5.. Nc6?! 6. e4?!  (6. e3) 6.. dxe4 7. fxe4 Nxd4 {https://www.chess.com/analysis/game/live/42484742481?tab=review} 
`;

modern_defense_2 = `1. d4 g6 2. c4 Bg7 3. Be3 Nf6 4. Nc3 0-0 5. Qc2 c6 6. 0-0-0? (6. 0-0-0 b5 7. Nf3 d5 8. cxb5 cxb5) 6.. d5 7. cxd5 cxd5 8. Qb3?! Bf5?! {here already a big loss because the pawn will open up the file}  9. Qxb7?! Nbd7 10. Nxd5? Nxd5 11. Qxd5 Rc8+ 12. Kd2 Nb6? 13. Qxd8 Rfxd8 14. Ke1 Nc4?! 15. Bf4? (15. Nf3 Nxb2 16. Rc1 Rxc1+ 17. Bxc1 Na4 18. Rg1 Rc8 19. Ba3 Rc2 20. Bxe7 Rc1+ 21. Kd2 Rc2+ 22. Ke1 Rxa2 23. g4 Bc2 24. e3) 15.. Nxb2 16. Rb1 Bxb1 {https://www.chess.com/analysis/game/live/42232760503}


`;

modern_defense_list = [modern_defense_1, modern_defense_2];

philidor_1 = `
[Result "*"]

1.e4 e5 2.Nf3 d6 3.Nc3 Bg4 * 
{rn1qkbnr/ppp2ppp/3p4/4p3/4P1b1/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 2 4 that is a bad move bishop to attack the knight}

`;

philidor_list = [philidor_1];

mateinthree_1 = `
r5k1/pp1q1p1p/3p1bp1/2p3P1/3n1B1n/3P4/PP3P1P/3QRK2 b - - 0 26
black to move, white pushed pawn to g5, there is check with queen h3.

`;

mateinthree_list = [mateinthree_1];

lightsquares_1 = `
[Result "*"]

1.e4 e5 2.Nf3 d6 3.Nc3 Bg4 4.Bc4 c6 5.h3 Bxf3 6.Qxf3 Nf6 7.d3 b5 8.Bb3 Be7 9.O-O O-O 10.Be3 a5 11.a4 b4 12.Ne2 c5 13.c3 bxc3 14.bxc3 Qb6 15.Rab1 Qa6 16.Bc4 Qc6 17.Bd5 Qxa4 18.Bxa8 * {see how the bishop takes advantage of the light squares and attacks my rook}
`;

lightsquares_list = [lightsquares_1];

caro_kahn_1 = `
d2-d4, d7-d5, f2-f3, c7-c6, e2-e4, e7-e6, b1-c3, b8-d7, f3-f4, c6-c5, g1-f3, h7-h6, c1-e3, g7-g6, b2-b3, f8-g7, f1-d3, d8-a5, d1-d2, a5-b4, d4-c5, g7-c3, `;

caro_kahn_2 = `e2-e4, c7-c6, g1-f3, d7-d5, e4-e5, c8-f5, f3-d4, f5-g6, f1-d3, e7-e6, e1-g1, h1-f1, g6-d3, c2-d3, g7-g6, d4-f3, b8-d7, d3-d4, c6-c5, d1-a4, a7-a6, d2-d3, b7-b5, a4-d1, c5-d4, f3-d4, d7-e5, d4-c6, e5-c6, d3-d4, f8-d6, d1-c2, d8-c7, g2-g3, g8-f6, c1-f4, e8-g8, h8-f8, f4-d6, c7-d6, b1-c3, c6-d4, c2-d3, e6-e5, c3-e2, e5-e4, d3-d4, f6-g4, e2-f4, g4-e5, f4-d5, e5-f3, g1-g2, f3-d4, d5-e3, f7-f5, a1-d1, d6-e5, f2-f4, e4-f3, g2-f2, e5-e4, f1-e1, e4-b7, d1-d4, a8-d8, d4-b4, d8-d2, f2-f1, f3-f2, e1-d1, b7-h1, 
`;

caro_kahn_3 = `e2-e4, c7-c6, d2-d4, d7-d5, e4-d5, c6-d5, b1-c3, e7-e6, g1-f3, g7-g6, f3-e5, f8-g7, d1-e2, g8-e7, c1-g5, f7-f6, g5-f6, g7-f6, g2-g3, e8-g8, h8-f8, e5-f3, e7-f5, f1-g2, b8-c6, g3-g4, f5-d4, f3-d4, c6-d4, e2-d1, f6-e5, c3-e2, d4-c6, c2-c3, d8-f6, h1-f1, e5-h2, d1-d3, c6-e5, d3-h3, h2-f4, f1-h1, f8-f7, f2-f3, b7-b6, e2-f4, f6-f4, e1-f2, e5-d3, f2-g1, d3-b2, a1-f1, f4-e3, g1-h2, e3-c3, h3-g3, d5-d4, f3-f4, d4-d3, f1-c1, c3-d4, g2-a8, d3-d2, g3-c3, d4-f2, h2-h3, d2-c1, c3-c1, f7-f4, h1-h2, f4-f3, a8-f3, f2-f3, h3-h4, f3-f6, h4-h3, f6-f3, h3-h4, b2-d3, c1-c8, g8-g7, c8-c7, g7-h6, c7-g3, f3-f6, h4-h3, d3-f2, h3-g2, h6-g5, g3-h4, g5-f4, h4-g3, f4-e4,
`;

caro_kahn_4 = `e2-e4, c7-c6, g1-f3, d7-d5, e4-e5, h7-h6, d2-d4, c8-f5, f1-d3, f5-d3, d1-d3, e7-e6, e1-g1, h1-f1, g7-g6, a2-a4, a7-a5, b1-c3, b8-d7, c3-e2, d8-c7, c2-c4, d5-c4, d3-c4, g8-e7, e2-f4, g6-g5, f4-h5, e7-d5, h5-f6, d7-f6, e5-f6, d5-f6, f3-e5, f8-g7, e5-d3, e8-g8, h8-f8, c1-e3, f6-g4, e3-c1, c7-h2, 

`;

caro_kahn_5 = `e2-e4, c7-c6, g1-f3, d7-d5, e4-e5, h7-h6, d2-d4, c8-f5, f1-d3, f5-d3, d1-d3, e7-e6, e1-g1, h1-f1, g7-g6, a2-a4, a7-a5, b1-c3, b8-d7, c3-e2, d8-c7, c2-c4, d5-c4, d3-c4, g8-e7, e2-f4, g6-g5, f4-h5, e7-d5, h5-f6, d7-f6, e5-f6, d5-f6, f3-e5, f8-g7, e5-d3, e8-g8, h8-f8, c1-e3, f6-g4, e3-c1, c7-h2, 

`;

caro_kahn_6 = `e2-e4, c7-c6, d2-d4, d7-d5, e4-e5, c8-f5, c2-c3, e7-e6, d1-b3, d8-c7, b1-d2, b8-d7, d2-f3, h7-h6, c1-f4, g7-g5, f4-e3, f8-g7, e1-c1, a1-d1, g8-e7, h2-h4, g5-g4, f3-h2, h6-h5, f2-f3, c6-c5, d4-c5, d7-c5, e3-c5, c7-c5, b3-b7, e8-g8, h8-f8, f3-g4, h5-g4, h2-g4, f5-g4, b2-b4, c5-e3, d1-d2, g7-h6, c1-c2, e3-d2, c2-b3, e7-f5, f1-a6, d5-d4, b3-a4, d4-c3, g1-f3, g4-f3, g2-f3, c3-c2, b7-c6, f5-d4, c6-c4, c2-c1, h1-c1, d2-c1, c4-d4, f8-d8, d4-g4, g8-h7, g4-e4, h7-g8, a6-d3, g8-f8, e4-h7, c1-c6, d3-b5, c6-b6, h7-h6, f8-e7, h6-g5, e7-f8, g5-h6, f8-e7, h6-f6, e7-f8, h4-h5, a7-a6, b5-d7, a8-b8, a4-b3, b6-b4, b3-c2, d8-d7, f6-h8, f8-e7, h8-f6, e7-f8, a2-a3, 



`;

caro_kahn_7 = `e2-e4, c7-c6, g1-f3, d7-d5, e4-e5, h7-h6, d2-d4, c8-f5, f1-d3, f5-d3, d1-d3, e7-e6, e1-g1, h1-f1, g7-g6, a2-a4, a7-a5, b1-c3, b8-d7, c3-e2, d8-c7, c2-c4, d5-c4, d3-c4, g8-e7, e2-f4, g6-g5, f4-h5, e7-d5, h5-f6, d7-f6, e5-f6, d5-f6, f3-e5, f8-g7, e5-d3, e8-g8, h8-f8, c1-e3, f6-g4, e3-c1, c7-h2, 
`;


caro_kahn_8 = `e2-e4, c7-c6, d2-d4, d7-d5, b1-c3, d5-e4, c3-e4, c8-f5, e4-g3, f5-g6, f1-d3, g6-d3, d1-d3, g7-g6, g1-f3, f8-g7, c1-e3, g8-f6, h2-h3, d8-c7, f3-e5, e8-g8, h8-f8, e3-f4, c7-b6, a1-b1, f6-d5, f4-d2, b6-c7, d2-f4, c7-b6, e5-c4, b6-d8, e1-g1, h1-f1, b8-d7, f4-d2, c6-c5, d2-e3, e7-e5, d4-c5, d5-b4, d3-b3, a7-a5, c4-a5, a8-a5, b3-b4, a5-a2, b4-b7, d8-a8, b7-d7, f8-d8, d7-g4, f7-f5, g4-c4, g8-h8, c5-c6, f5-f4, c6-c7, d8-c8, f1-d1, h7-h6, d1-d8, h8-h7, d8-c8, a8-c8, c4-a2, c8-c7, e3-f4, e5-f4, g3-e2, g7-e5, e2-c3, h6-h5, b1-a1, h7-h6, c3-d5, c7-d7, c2-c4, d7-f5, d5-e7, f5-g5, c4-c5, g5-e7, a1-e1, e7-g5, a2-d5, f4-f3, d5-e5, g5-g2, 
`

caro_kahn_9 = `e2-e4, c7-c6, d2-d4, d7-d5, e4-e5, c8-f5, g1-f3, h7-h6, b1-c3, b8-d7, f3-h4, f5-h7, f1-d3, h7-d3, d1-d3, e7-e6, h4-f3, g7-g6, e1-g1, h1-f1, f8-g7, c3-e2, g8-e7, e2-f4, d8-c7, c2-c4, d5-c4, d3-c4, d7-b6, c4-c5, b6-d7, c5-c4, b7-b5, c4-c3, a8-c8, b2-b4, a7-a5, a2-a3, e8-g8, h8-f8, c1-b2, e7-d5, f4-d5, c6-d5, f1-c1, c7-a7, c3-e3, d7-b6, c1-c8, f8-c8, f3-d2, c8-c2, b2-c3, a5-b4, c3-b4, b6-c4, d2-c4, b5-c4, g2-g3, a7-a8, h2-h4, g7-f8, a1-c1, c2-b2, e3-c3, b2-b3, c3-d2, a8-d8, c1-c3, b3-b1, g1-g2, g8-h7, g3-g4, f8-b4, a3-b4, b1-b4, g4-g5, h6-h5, d2-f4, d8-d7, c3-a3, d7-b7, f4-f6, b7-c7, a3-a8, b4-b8, a8-b8, c7-b8, f6-f7, h7-h8, f7-f6, h8-h7, f6-f7, h7-h8, f7-f6, h8-h7, f6-f7, 

`

caro_kahn_10 = `e2-e4, c7-c6, g1-f3, d7-d5, e4-d5, c6-d5, d2-d4, e7-e6, f1-d3, g7-g6, e1-g1, f8-g7, f1-e1, g8-f6, c1-g5, h7-h6, g5-h4, g6-g5, h4-g3, e8-g8, b1-d2, b8-c6, c2-c4, c6-b4, d3-e2, b7-b6, a2-a3, b4-c6, f3-e5, c6-d4, d2-b3, d4-e2, d1-e2, f6-e4, a1-d1, e4-g3, f2-g3, f7-f6, e5-g6, f8-e8, c4-d5, e6-e5, b3-d2, d8-d5, d2-e4, d5-c6, g1-h1, c8-b7, d1-d6, c6-c7, h2-h4, c7-f7, h4-h5, f6-f5, e1-f1, e8-e6, d6-e6, f7-e6, e4-d2, a7-a5, d2-c4, b7-a6, 
`

caro_kahn_3b = `
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2
rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2
rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3
rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3
rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4
rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 5
rnbqkbnr/pp3p1p/4p1p1/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6
rnbqkbnr/pp3p1p/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 6
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R w KQkq - 2 7
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R b KQkq - 3 7
rnbqk2r/pp2npbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R w KQkq - 4 8
rnbqk2r/pp2npbp/4p1p1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 5 8
rnbqk2r/pp2n1bp/4ppp1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 9
rnbqk2r/pp2n1bp/4pBp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 0 9
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 10
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R b KQkq - 0 10
rnbq1rk1/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R w KQ - 1 11
rnbq1rk1/pp2n2p/4pbp1/3p4/3P4/2N2NP1/PPP1QP1P/R3KB1R b KQ - 2 11
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QP1P/R3KB1R w KQ - 3 12
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R b KQ - 4 12
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R w KQ - 5 13
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P2P1/2N2N2/PPP1QPBP/R3K2R b KQ - 0 13
r1bq1rk1/pp5p/2n1pbp1/3p4/3n2P1/2N2N2/PPP1QPBP/R3K2R w KQ - 0 14
r1bq1rk1/pp5p/2n1pbp1/3p4/3N2P1/2N5/PPP1QPBP/R3K2R b KQ - 0 14
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP1QPBP/R3K2R w KQ - 0 15
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP2PBP/R2QK2R b KQ - 1 15
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/2N5/PPP2PBP/R2QK2R w KQ - 2 16
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/8/PPP1NPBP/R2QK2R b KQ - 3 16
r1bq1rk1/pp5p/4p1p1/3pb3/6P1/8/PPP1nPBP/R2QK2R w KQ - 0 17
r1bq1rk1/pp5p/4p1p1/3pb3/6P1/8/PPP1QPBP/R3K2R b KQ - 0 17
r1b2rk1/pp5p/3qp1p1/3pb3/6P1/8/PPP1QPBP/R3K2R w KQ - 1 18


`;

caro_kahn_3c = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2
rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2
rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3
rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3
rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4
rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 5
rnbqkbnr/pp3p1p/4p1p1/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6
rnbqkbnr/pp3p1p/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 6
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R w KQkq - 2 7
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R b KQkq - 3 7
rnbqk2r/pp2npbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R w KQkq - 4 8
rnbqk2r/pp2npbp/4p1p1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 5 8
rnbqk2r/pp2n1bp/4ppp1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 9
rnbqk2r/pp2n1bp/4pBp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 0 9
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 10
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R b KQkq - 0 10
rnbq1rk1/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R w KQ - 1 11
rnbq1rk1/pp2n2p/4pbp1/3p4/3P4/2N2NP1/PPP1QP1P/R3KB1R b KQ - 2 11
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QP1P/R3KB1R w KQ - 3 12
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R b KQ - 4 12
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R w KQ - 5 13
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P2P1/2N2N2/PPP1QPBP/R3K2R b KQ - 0 13
r1bq1rk1/pp5p/2n1pbp1/3p4/3n2P1/2N2N2/PPP1QPBP/R3K2R w KQ - 0 14
r1bq1rk1/pp5p/2n1pbp1/3p4/3N2P1/2N5/PPP1QPBP/R3K2R b KQ - 0 14
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP1QPBP/R3K2R w KQ - 0 15
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP2PBP/R2QK2R b KQ - 1 15
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/2N5/PPP2PBP/R2QK2R w KQ - 2 16
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/8/PPP1NPBP/R2QK2R b KQ - 3 16
r1bq1rk1/pp5p/2n1p1p1/3pb3/6P1/8/PPP1NPBP/R2QK2R w KQ - 4 17
r1bq1rk1/pp5p/2n1p1p1/3pb3/6P1/2P5/PP2NPBP/R2QK2R b KQ - 0 17
r1b2rk1/pp5p/2n1pqp1/3pb3/6P1/2P5/PP2NPBP/R2QK2R w KQ - 1 18
r1b2rk1/pp5p/2n1pqp1/3pb3/6P1/2P5/PP2NPBP/R2QKR2 b Q - 2 18
r1b2rk1/pp5p/2n1pqp1/3p4/6P1/2P5/PP2NPBb/R2QKR2 w Q - 0 19
r1b2rk1/pp5p/2n1pqp1/3p4/6P1/2PQ4/PP2NPBb/R3KR2 b Q - 1 19
r1b2rk1/pp5p/4pqp1/3pn3/6P1/2PQ4/PP2NPBb/R3KR2 w Q - 2 20
r1b2rk1/pp5p/4pqp1/3pn3/6P1/2P4Q/PP2NPBb/R3KR2 b Q - 3 20
r1b2rk1/pp5p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3KR2 w Q - 4 21
r1b2rk1/pp5p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3K2R b Q - 5 21
r1b3k1/pp3r1p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3K2R w Q - 6 22
r1b3k1/pp3r1p/4pqp1/3pn3/5bP1/2P2P1Q/PP2N1B1/R3K2R b Q - 0 22
r1b3k1/p4r1p/1p2pqp1/3pn3/5bP1/2P2P1Q/PP2N1B1/R3K2R w Q - 0 23
r1b3k1/p4r1p/1p2pqp1/3pn3/5NP1/2P2P1Q/PP4B1/R3K2R b Q - 0 23
r1b3k1/p4r1p/1p2p1p1/3pn3/5qP1/2P2P1Q/PP4B1/R3K2R w Q - 0 24
r1b3k1/p4r1p/1p2p1p1/3pn3/5qP1/2P2P1Q/PP3KB1/R6R b - - 1 24
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2Pn1P1Q/PP3KB1/R6R w - - 2 25
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2Pn1P1Q/PP4B1/R5KR b - - 3 25
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2P2P1Q/Pn4B1/R5KR w - - 0 26
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2P2P1Q/Pn4B1/5RKR b - - 1 26
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2P1qP1Q/Pn4B1/5RKR w - - 2 27
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2P1qP1Q/Pn4BK/5R1R b - - 3 27
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2q2P1Q/Pn4BK/5R1R w - - 0 28
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2q2PQ1/Pn4BK/5R1R b - - 1 28
r1b3k1/p4r1p/1p2p1p1/8/3p2P1/2q2PQ1/Pn4BK/5R1R w - - 0 29
r1b3k1/p4r1p/1p2p1p1/8/3p1PP1/2q3Q1/Pn4BK/5R1R b - - 0 29
r1b3k1/p4r1p/1p2p1p1/8/3p1PP1/6q1/Pn4BK/5R1R w - - 0 30
r1b3k1/p4r1p/1p2p1p1/8/3p1PP1/6K1/Pn4B1/5R1R b - - 0 30
1rb3k1/p4r1p/1p2p1p1/8/3p1PP1/6K1/Pn4B1/5R1R w - - 1 31
1rb3k1/p4r1p/1p2p1p1/8/3p1PP1/6K1/Pn4B1/4R2R b - - 2 31
1rb3k1/p4r1p/1p2p1p1/8/3p1PP1/3n2K1/P5B1/4R2R w - - 3 32
1rb3k1/p4r1p/1p2R1p1/8/3p1PP1/3n2K1/P5B1/7R b - - 0 32


`;

caro_kahn_3d = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2
rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2
rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3
rnbqkbnr/pp2pppp/2p5/3P4/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3
rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4
rnbqkbnr/pp2pppp/8/3p4/3P4/2N5/PPP2PPP/R1BQKBNR b KQkq - 1 4
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 5
rnbqkbnr/pp3ppp/4p3/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 5
rnbqkbnr/pp3p1p/4p1p1/3p4/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6
rnbqkbnr/pp3p1p/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R b KQkq - 1 6
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP2PPP/R1BQKB1R w KQkq - 2 7
rnbqk1nr/pp3pbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R b KQkq - 3 7
rnbqk2r/pp2npbp/4p1p1/3pN3/3P4/2N5/PPP1QPPP/R1B1KB1R w KQkq - 4 8
rnbqk2r/pp2npbp/4p1p1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 5 8
rnbqk2r/pp2n1bp/4ppp1/3pN1B1/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 9
rnbqk2r/pp2n1bp/4pBp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R b KQkq - 0 9
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N5/PPP1QPPP/R3KB1R w KQkq - 0 10
rnbqk2r/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R b KQkq - 0 10
rnbq1rk1/pp2n2p/4pbp1/3pN3/3P4/2N3P1/PPP1QP1P/R3KB1R w KQ - 1 11
rnbq1rk1/pp2n2p/4pbp1/3p4/3P4/2N2NP1/PPP1QP1P/R3KB1R b KQ - 2 11
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QP1P/R3KB1R w KQ - 3 12
rnbq1rk1/pp5p/4pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R b KQ - 4 12
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P4/2N2NP1/PPP1QPBP/R3K2R w KQ - 5 13
r1bq1rk1/pp5p/2n1pbp1/3p1n2/3P2P1/2N2N2/PPP1QPBP/R3K2R b KQ - 0 13
r1bq1rk1/pp5p/2n1pbp1/3p4/3n2P1/2N2N2/PPP1QPBP/R3K2R w KQ - 0 14
r1bq1rk1/pp5p/2n1pbp1/3p4/3N2P1/2N5/PPP1QPBP/R3K2R b KQ - 0 14
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP1QPBP/R3K2R w KQ - 0 15
r1bq1rk1/pp5p/4pbp1/3p4/3n2P1/2N5/PPP2PBP/R2QK2R b KQ - 1 15
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/2N5/PPP2PBP/R2QK2R w KQ - 2 16
r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/8/PPP1NPBP/R2QK2R b KQ - 3 16
r1bq1rk1/pp5p/2n1p1p1/3pb3/6P1/8/PPP1NPBP/R2QK2R w KQ - 4 17
r1bq1rk1/pp5p/2n1p1p1/3pb3/6P1/2P5/PP2NPBP/R2QK2R b KQ - 0 17
r1b2rk1/pp5p/2n1pqp1/3pb3/6P1/2P5/PP2NPBP/R2QK2R w KQ - 1 18
r1b2rk1/pp5p/2n1pqp1/3pb3/6P1/2P5/PP2NPBP/R2QKR2 b Q - 2 18
r1b2rk1/pp5p/2n1pqp1/3p4/6P1/2P5/PP2NPBb/R2QKR2 w Q - 0 19
r1b2rk1/pp5p/2n1pqp1/3p4/6P1/2PQ4/PP2NPBb/R3KR2 b Q - 1 19
r1b2rk1/pp5p/4pqp1/3pn3/6P1/2PQ4/PP2NPBb/R3KR2 w Q - 2 20
r1b2rk1/pp5p/4pqp1/3pn3/6P1/2P4Q/PP2NPBb/R3KR2 b Q - 3 20
r1b2rk1/pp5p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3KR2 w Q - 4 21
r1b2rk1/pp5p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3K2R b Q - 5 21
r1b3k1/pp3r1p/4pqp1/3pn3/5bP1/2P4Q/PP2NPB1/R3K2R w Q - 6 22
r1b3k1/pp3r1p/4pqp1/3pn3/5bP1/2P2P1Q/PP2N1B1/R3K2R b Q - 0 22
r1b3k1/p4r1p/1p2pqp1/3pn3/5bP1/2P2P1Q/PP2N1B1/R3K2R w Q - 0 23
r1b3k1/p4r1p/1p2pqp1/3pn3/5NP1/2P2P1Q/PP4B1/R3K2R b Q - 0 23
r1b3k1/p4r1p/1p2p1p1/3pn3/5qP1/2P2P1Q/PP4B1/R3K2R w Q - 0 24
r1b3k1/p4r1p/1p2p1p1/3pn3/5qP1/2P2P1Q/PP3KB1/R6R b - - 1 24
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2Pn1P1Q/PP3KB1/R6R w - - 2 25
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2Pn1P1Q/PP4B1/R5KR b - - 3 25
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2P2P1Q/Pn4B1/R5KR w - - 0 26
r1b3k1/p4r1p/1p2p1p1/3p4/5qP1/2P2P1Q/Pn4B1/5RKR b - - 1 26
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2P1qP1Q/Pn4B1/5RKR w - - 2 27
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2P1qP1Q/Pn4BK/5R1R b - - 3 27
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2q2P1Q/Pn4BK/5R1R w - - 0 28
r1b3k1/p4r1p/1p2p1p1/3p4/6P1/2q2PQ1/Pn4BK/5R1R b - - 1 28
r1b3k1/p4r1p/1p2p1p1/8/3p2P1/2q2PQ1/Pn4BK/5R1R w - - 0 29
r1b3k1/p4r1p/1p2p1p1/8/3p1PP1/2q3Q1/Pn4BK/5R1R b - - 0 29
r1b3k1/p4r1p/1p2p1p1/8/5PP1/2qp2Q1/Pn4BK/5R1R w - - 0 30
r1b3k1/p4r1p/1p2p1p1/8/5PP1/2qp2Q1/Pn4BK/2R4R b - - 1 30
r1b3k1/p4r1p/1p2p1p1/8/5PP1/3p2Q1/Pn1q2BK/2R4R w - - 2 31
r1b3k1/p4r1p/1p2p1p1/8/5PP1/3p2Q1/Pn1q2BK/5R1R b - - 3 31
r5k1/pb3r1p/1p2p1p1/8/5PP1/3p2Q1/Pn1q2BK/5R1R w - - 4 32
r5k1/pb3r1p/1p2p1p1/8/5PP1/3p2Q1/Pn1q1RBK/7R b - - 5 32
r5k1/pb3r1p/1p2p1p1/8/1q3PP1/3p2Q1/Pn3RBK/7R w - - 6 33
r5k1/pB3r1p/1p2p1p1/8/1q3PP1/3p2Q1/Pn3R1K/7R b - - 0 33
3r2k1/pB3r1p/1p2p1p1/8/1q3PP1/3p2Q1/Pn3R1K/7R w - - 1 34
3r2k1/p4r1p/1p2p1p1/8/1q3PP1/3p1BQ1/Pn3R1K/7R b - - 2 34
3r2k1/p4r1p/1p2p1p1/8/1q3PP1/5BQ1/Pn1p1R1K/7R w - - 0 35


`;

caro_kahn_4 = `e2-e4, c7-c6, d2-d4, d7-d5, e4-e5, c8-f5, c1-f4, e7-e6, g1-f3, h7-h6, h2-h3, f8-e7, f1-d3, f5-h7, d3-h7, h8-h7, d1-d3, e7-g5, d3-h7, e8-d7, h7-g7, g5-f4, g2-g3, f4-g5, f3-g5, h6-g5, h3-h4, b8-a6, g7-g5, f7-f6, g5-g7, d8-e7, g7-e7, d7-e7, h4-h5, g8-h6, b1-c3, a8-f8, e1-c1, a1-d1, f6-e5, d4-e5, f8-f2, h1-f1, f2-g2, f1-g1, g2-f2, g3-g4, f2-f4, g4-g5, h6-g4, d1-d2, d5-d4, c3-e2, f4-e4, d2-d4, e4-d4, e2-d4, g4-e5, g5-g6, e7-f8, g6-g7, f8-g8, h5-h6, a6-c7, h6-h7, 
`;

caro_kahn_5 = `e2-e4, c7-c6, d2-d4, d7-d5, b1-c3, e7-e6, f2-f3, f8-b4, a2-a3, b4-c3, b2-c3, g8-e7, e4-e5, e8-g8, h8-f8, f1-d3, e7-g6, g1-h3, f7-f6, e5-f6, d8-f6, c1-g5, f6-f7, e1-g1, h1-f1, e6-e5, d3-g6, f7-g6, d4-e5, c8-h3, g2-h3, g6-g5, g1-h1, g5-e5, f1-g1, b8-d7, d1-d3, d7-f6, a1-e1, e5-f4, d3-e3, f4-h4, e3-e6, g8-h8, e6-e7, h4-h6, g1-g2, a8-e8, e7-g7, h6-g7, g2-g7, h8-g7, e1-g1, g7-h8, h3-h4, f8-g8, g1-f1, e8-e2, f1-c1, g8-g2, a3-a4, g2-h2, h1-g1, h2-h4, g1-f1, e2-h2, c1-e1, h2-c2, f1-g1, c2-c3, e1-f1, h4-a4, f3-f4, b7-b5, f4-f5, b5-b4, f1-f2, b4-b3, f2-e2, a4-c4, e2-e6, c3-c1, g1-f2, b3-b2, e6-f6, b2-b1, f6-f8, h8-g7, f5-f6, g7-f8, f6-f7, b1-a2, f2-e3, a2-a3, e3-d2, c1-c2, d2-d1, a3-a1, `;

alan_1 = `rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1
rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2
rnbqkbnr/ppp1pppp/8/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R b KQkq - 1 2
rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3
rnbqkb1r/ppp1pppp/5n2/3p4/3P4/4PN2/PPP2PPP/RNBQKB1R b KQkq - 0 3
rn1qkb1r/ppp1pppp/5n2/3p4/3P2b1/4PN2/PPP2PPP/RNBQKB1R w KQkq - 1 4
rn1qkb1r/ppp1pppp/5n2/3p4/3P2b1/4PN2/PPP1BPPP/RNBQK2R b KQkq - 2 4
rn1qkb1r/ppp2ppp/4pn2/3p4/3P2b1/4PN2/PPP1BPPP/RNBQK2R w KQkq - 0 5
rn1qkb1r/ppp2ppp/4pn2/3pN3/3P2b1/4P3/PPP1BPPP/RNBQK2R b KQkq - 1 5
rn1qkb1r/ppp2ppp/4pn2/3pN3/3P4/4P3/PPP1bPPP/RNBQK2R w KQkq - 0 6
rn1qkb1r/ppp2ppp/4pn2/3pN3/3P4/4P3/PPP1QPPP/RNB1K2R b KQkq - 0 6
rn1qkb1r/pp3ppp/4pn2/2ppN3/3P4/4P3/PPP1QPPP/RNB1K2R w KQkq c6 0 7
rn1qkb1r/pp3ppp/4pn2/2PpN3/8/4P3/PPP1QPPP/RNB1K2R b KQkq - 0 7
rn1qk2r/pp3ppp/4pn2/2bpN3/8/4P3/PPP1QPPP/RNB1K2R w KQkq - 0 8
rn1qk2r/pp3ppp/4pn2/1QbpN3/8/4P3/PPP2PPP/RNB1K2R b KQkq - 1 8
r2qk2r/pp1n1ppp/4pn2/1QbpN3/8/4P3/PPP2PPP/RNB1K2R w KQkq - 2 9
r2qk2r/pp1N1ppp/4pn2/1Qbp4/8/4P3/PPP2PPP/RNB1K2R b KQkq - 0 9
r2qk2r/pp1n1ppp/4p3/1Qbp4/8/4P3/PPP2PPP/RNB1K2R w KQkq - 0 10
r2qk2r/pp1n1ppp/4p3/1Qbp4/8/4P3/PPP2PPP/RNB2RK1 b kq - 1 10
r2qk2r/pp1n1ppp/1b2p3/1Q1p4/8/4P3/PPP2PPP/RNB2RK1 w kq - 2 11
r2qk2r/pp1n1ppp/1b2p3/1Q1p4/8/2N1P3/PPP2PPP/R1B2RK1 b kq - 3 11
r2q1rk1/pp1n1ppp/1b2p3/1Q1p4/8/2N1P3/PPP2PPP/R1B2RK1 w - - 4 12
r2q1rk1/pp1n1ppp/1b2p3/1Q1p4/8/1PN1P3/P1P2PPP/R1B2RK1 b - - 0 12
2rq1rk1/pp1n1ppp/1b2p3/1Q1p4/8/1PN1P3/P1P2PPP/R1B2RK1 w - - 1 13
2rq1rk1/pp1n1ppp/1b2p3/1Q1p4/8/1P2P3/P1P1NPPP/R1B2RK1 b - - 2 13
2rq1rk1/pp3ppp/1b2p3/1Q1pn3/8/1P2P3/P1P1NPPP/R1B2RK1 w - - 3 14
2rq1rk1/pp3ppp/1b2p3/1Q1pn3/8/1P2P3/PBP1NPPP/R4RK1 b - - 4 14
2rq1rk1/pp3ppp/1b2p1n1/1Q1p4/8/1P2P3/PBP1NPPP/R4RK1 w - - 5 15
2rq1rk1/pp3ppp/1b2p1n1/3p4/1Q6/1P2P3/PBP1NPPP/R4RK1 b - - 6 15
2r2rk1/pp3ppp/1b2p1n1/3p2q1/1Q6/1P2P3/PBP1NPPP/R4RK1 w - - 7 16
2r2rk1/pp3ppp/1b2p1n1/3p2q1/1Q1B4/1P2P3/P1P1NPPP/R4RK1 b - - 8 16
2r2rk1/pp3ppp/4p1n1/3p2q1/1Q1b4/1P2P3/P1P1NPPP/R4RK1 w - - 0 17
2r2rk1/pp3ppp/4p1n1/3p2q1/1Q1N4/1P2P3/P1P2PPP/R4RK1 b - - 0 17
2r2rk1/p4ppp/1p2p1n1/3p2q1/1Q1N4/1P2P3/P1P2PPP/R4RK1 w - - 0 18
2r2rk1/p4ppp/1p2p1n1/3p2q1/1Q1N4/1P2P1P1/P1P2P1P/R4RK1 b - - 0 18
2r2rk1/p4ppp/1p2p3/3p2q1/1Q1N3n/1P2P1P1/P1P2P1P/R4RK1 w - - 1 19
2r2rk1/p4ppp/1p2p3/3p2q1/1Q1N1P1n/1P2P1P1/P1P4P/R4RK1 b - f3 0 19
2r2rk1/p4ppp/1p2p1q1/3p4/1Q1N1P1n/1P2P1P1/P1P4P/R4RK1 w - - 1 20
2r2rk1/p4ppp/1p2p1q1/3p4/1Q1N1P1n/1PP1P1P1/P6P/R4RK1 b - - 0 20
2r2rk1/p4ppp/1p2p1q1/3p1n2/1Q1N1P2/1PP1P1P1/P6P/R4RK1 w - - 1 21
2r2rk1/p4ppp/1p2p1q1/3p1N2/1Q3P2/1PP1P1P1/P6P/R4RK1 b - - 0 21
2r2rk1/p4ppp/1p2p3/3p1q2/1Q3P2/1PP1P1P1/P6P/R4RK1 w - - 0 22
2r2rk1/p4ppp/1p2p3/3p1q2/3Q1P2/1PP1P1P1/P6P/R4RK1 b - - 1 22
5rk1/p4ppp/1p2p3/2rp1q2/3Q1P2/1PP1P1P1/P6P/R4RK1 w - - 2 23
5rk1/p4ppp/1p2p3/2rp1q2/3Q1P2/1PP1P1P1/P6P/3R1RK1 b - - 3 23
2r3k1/p4ppp/1p2p3/2rp1q2/3Q1P2/1PP1P1P1/P6P/3R1RK1 w - - 4 24
2r3k1/p4ppp/1p2p3/2rp1q2/3Q1P2/1PP1P1P1/P2R3P/5RK1 b - - 5 24
2r3k1/p4ppp/1p2p3/3p1q2/3Q1P2/1Pr1P1P1/P2R3P/5RK1 w - - 0 25
2r3k1/p4ppp/1p2p3/3p1q2/3Q1P2/1Pr1P1P1/P5RP/5RK1 b - - 1 25
2r3k1/p4pp1/1p2p2p/3p1q2/3Q1P2/1Pr1P1P1/P5RP/5RK1 w - - 0 26
2r3k1/p4pp1/1p2p2p/3p1q2/3Q1PP1/1Pr1P3/P5RP/5RK1 b - - 0 26
2r3k1/p4pp1/1p2p1qp/3p4/3Q1PP1/1Pr1P3/P5RP/5RK1 w - - 1 27
2r3k1/p4pp1/1p2p1qp/3p1P2/3Q2P1/1Pr1P3/P5RP/5RK1 b - - 0 27
2r3k1/p4pp1/1p2p2p/3p1Pq1/3Q2P1/1Pr1P3/P5RP/5RK1 w - - 1 28
2r3k1/p4pp1/1p2P2p/3p2q1/3Q2P1/1Pr1P3/P5RP/5RK1 b - - 0 28
2r3k1/p5p1/1p2p2p/3p2q1/3Q2P1/1Pr1P3/P5RP/5RK1 w - - 0 29
2r3k1/p5p1/1p2p2p/3p2q1/3QP1P1/1Pr5/P5RP/5RK1 b - - 0 29
2r3k1/p5p1/1p2p2p/3p2q1/3QP1P1/1P6/P1r3RP/5RK1 w - - 1 30
2r3k1/p5p1/1p2p2p/3P2q1/3Q2P1/1P6/P1r3RP/5RK1 b - - 0 30
2r3k1/p5p1/1p5p/3p2q1/3Q2P1/1P6/P1r3RP/5RK1 w - - 0 31
2r3k1/p5p1/1p5p/3p2q1/3Q2P1/1P4R1/P1r4P/5RK1 b - - 1 31
2r4k/p5p1/1p5p/3p2q1/3Q2P1/1P4R1/P1r4P/5RK1 w - - 2 32
2r4k/p5p1/1p5p/3p2q1/3Q2P1/1P4RP/P1r5/5RK1 b - - 0 32
2r4k/p5p1/1p5p/3p2q1/3Q2P1/1P4RP/r7/5RK1 w - - 0 33
2r4k/p5p1/1p5p/3p2q1/6P1/1P1Q2RP/r7/5RK1 b - - 1 33
7k/p5p1/1p5p/3p2q1/6P1/1P1Q2RP/r1r5/5RK1 w - - 2 34
5R1k/p5p1/1p5p/3p2q1/6P1/1P1Q2RP/r1r5/6K1 b - - 3 34



`;

alan_list = [alan_1];

alan_info_1 = `https://www.chess.com/analysis/game/live/50554198608

move 23a should push the pawn up to get the open file for a backrank

[Result "1-0"]

1.d4 d5 2.Nf3 Nf6 3.e3 Bg4 4.Be2 e6 5.Ne5 Bxe2 6.Qxe2 c5 7.dxc5 Bxc5 8.Qb5+ Nbd7 9.Nxd7 Nxd7 10.O-O Bb6 11.Nc3 O-O 12.b3 Rc8 13.Ne2 Ne5 14.Bb2 Ng6 15.Qb4 Qg5 16.Bd4 Bxd4 17.Nxd4 b6 18.g3 Nh4 19.f4 Qg6 20.c3 Nf5 21.Nxf5 Qxf5 22.Qd4 Rc5 23.Rad1 Rfc8 24.Rd2 Rxc3 25.Rg2 h6 26.g4 Qg6 27.f5 Qg5 28.fxe6 fxe6 29.e4 Rc2 30.exd5 exd5 31.Rg3 Kh8 32.h3 Rxa2 33.Qd3 Rcc2 34.Rf8# 1-0

`;

alan_info_list = [alan_info_1];

caro_kahn_list = [caro_kahn_1, caro_kahn_2, caro_kahn_3, caro_kahn_4, caro_kahn_5, caro_kahn_6, caro_kahn_7, caro_kahn_8, caro_kahn_9, caro_kahn_10];

caro_kahn_info_1 = `hello world 1

`;

caro_kahn_info_2 = `https://www.chess.com/game/live/49781332129
`;

caro_kahn_info_3 = `https://www.chess.com/game/live/49856946873

r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/8/PPP1NPBP/R2QK2R b KQ - 3 16

go 
d8-f6,

r1b3k1/p4r1p/1p2p1p1/8/3p1PP1/2q3Q1/Pn4BK/5R1R b - - 0 29

move 
a8-b8,


B1b3k1/p4r1p/1p2p1p1/8/5PP1/7K/Pn3q2/2Q4R b - - 0 34

black to move:

b2-d3,c1-c8,f7-f8,c8-c6,d3-f4, (checkmate by black)




B1b3k1/p6p/1p2p1p1/8/5rP1/7K/Pn3q1R/2Q5 b - - 1 35
move: 
go f2-d4


`;

caro_kahn_info_4 = `
https://www.chess.com/game/live/50772678387


at move 8a:

h8-h7,d1-d3,h7-h8, b1-d2,g7-g5 

still losing



move 25 black night should go back
g4-e5



`;

caro_kahn_info_5 = `7a and white is up...
instead of castling, but I thought castling was better for me.. 


e7-f5,g1-h3,c6-c5,g2-g4,f5-e7

6b:
e7-f5,e1-f2,d8-h4,g2-g3,f5-g3,h2-g3,h4-h1,
if the computer does something 

11b
f3-f4,b7-b6,d1-e2,h7-h6,e1-g1,c6-c5,a1-e1,h1-f1,b8-c6,e2-e3,c8-d7,d4-c5,b6-c5,f4-f5,e6-f5,e3-c5,c6-e5,g5-d2,e5-c4,d2-c1,a7-a5,h3-f4,g6-f4,c1-f4


13b

g2-g4,h7-h5,d4-e5,h5-g4,f3-g4,f8-f1,g1-f1,b8-b8,b8-d7,d1-d4,b7-b6,g5-d2,c8-a6,f1-g1,c8-a6,f1-g1,a8-e8,h3-g5,e8-e5,d4-f4,g6-f6,h2-h3,f6-e7,g5-f3,e5-e4,f4-g3,e7-c5,g1-h1,d7-f6,g4-g5,f6-h5,g3-b8,c5-f8,b8-f8,g8-g8,g8-f8,a1-e1,e4-e1,f3-e1,f8-e7


31a 

checkmate pattern

h2-g2,g1-h1,f6-h5,c3-c4,h5-g3,


1. e4 c6 2. d4 d5 3. Nc3 e6 4. f3 Bb4 5. a3 Bxc3+ 6. bxc3 Ne7 7. e5 O-O 8. Bd3
Ng6 9. Nh3 f6 10. exf6 Qxf6 11. Bg5 Qf7 12. O-O e5 13. Bxg6 Qxg6 14. dxe5 Bxh3
15. gxh3 Qxg5+ 16. Kh1 Qxe5 17. Rg1 Nd7 18. Qd3 Nf6 19. Rae1 Qf4 20. Qe3 Qh4 21.
Qe6+ Kh8 22. Qe7 Qh6 23. Rg2 Rae8 24. Qxg7+ Qxg7 25. Rxg7 Kxg7 26. Rg1+ Kh8 27.
h4 Rg8 28. Rf1 Re2 29. Rc1 Rgg2 30. a4 Rxh2+ 31. Kg1 Rxh4 32. Kf1 Reh2 33. Re1
Rxc2 34. Kg1 Rxc3 35. Rf1 Rxa4 36. f4 b5 37. f5 b4 38. Rf2 b3 39. Re2 Rac4 40.
Re6 Rc1+ 41. Kf2 b2 42. Rxf6 b1=Q 43. Rf8+ Kg7 44. f6+ Kxf8 45. f7 Qa2+ 46. Ke3
Qa3+ 47. Kd2 R1c2+ 48. Kd1 Qa1# 0-1

NEED TO REDO
`;

caro_kahn_info_6 = `
13a:
g4-g3,g1-e2,g3-h2,h1-h2

16a:
c5-e3,d1-d2,e3-e1,d2-d1,g7-h6,

checkmate


`;

caro_kahn_info_7 = `
like a bomb..

1. e4 c6 2. Nf3 d5 3. e5 h6 4. d4 Bf5 5. Bd3 Bxd3 6. Qxd3 e6 7. O-O g6 8. a4 a5
9. Nc3 Nd7 10. Ne2 Qc7 11. c4 dxc4 12. Qxc4 Ne7 13. Nf4 g5 14. Nh5 Nd5 15. Nf6+
N7xf6 16. exf6 Nxf6 17. Ne5 Bg7 18. Nd3 O-O 19. Be3 Ng4 20. Bc1 Qxh2# 0-1

`;

caro_kahn_info_8 = `
https://www.chess.com/game/live/51484283317

r1bq1rk1/pp5p/4p1p1/3pb3/3n2P1/8/PPP1NPBP/R2QK2R b KQ - 3 16

take the pawn 
after 5. ng3 bg6 6. bd3 (instead of take bxd3) 
take the pawn at d4


11. ne5 0-0 12. bf4 instead of Qb6 for black.. so black to move

f6-d5,e5-f7,d5-f4,


the bishop is hanging so don't be afraid of it.. 

13. rb1 nd5 14. bd2 (black to move)
c6-c5,d4-c5,b6-c5,


the bishop is 

at #30 element: bishop is hanging  or after 15. 


13. rb1 nd5 14. bd2 qc7 15. bf4 qb6 16. nc4 

black to move

should go ...d5-f4,c4-b6,f4-d3,e1-e2,a7-a7,d3-f4,e2-f3,a7-b6,


`

caro_kahn_info_9 = `
https://www.chess.com/game/live/51514167021

@2

c7-c3,c1-c3,c8-c3,b2-c3,a5-a4,h2-h4,d7-b6,c3-d2,b6-c4,d2-f4,g8-h7,f4-e3,f7-f6,e5-f6,g7-f6,g2-g3,c4-e3,f2-e3,f8-c8,a1-a2,

progression starts when the black queen takes back instead of moving away

and instead of black knight moving away to the next rank, pawn push is fine too in front of the black roook

`


caro_kahn_info_10 = `info

1. e4 c6 2. Nf3 d5 3. exd5 cxd5 4. d4 e6 5. Bd3 g6 6. O-O Bg7 7. Re1 Nf6 8. Bg5
h6 9. Bh4 g5 10. Bg3 O-O 11. Nbd2 Nc6 12. c4 Nb4 13. Be2 b6 14. a3 Nc6 15. Ne5
Nxd4 16. Nb3 Nxe2+ 17. Qxe2 Ne4 18. Rad1 Nxg3 19. fxg3 f6 20. Ng6 Re8 21. cxd5
e5 22. Nd2 Qxd5 23. Ne4 Qc6 24. Kh1 Bb7 25. Rd6 Qc7 26. h4 Qf7 27. h5 f5 28. Rf1
Re6 29. Rxe6 Qxe6 30. Nd2 a5 31. Nc4 Ba6 0-1

https://www.chess.com/analysis/game/live/51679154053



`


caro_kahn_info_list = [
  caro_kahn_info_1,
  caro_kahn_info_2,
  caro_kahn_info_3,
  caro_kahn_info_4,
  caro_kahn_info_5,
  caro_kahn_info_6,
  caro_kahn_info_7, 
  caro_kahn_info_8, 
  caro_kahn_info_9, 
  caro_kahn_info_10
];

scandinavian_info_1 = `
so many moves.

12a,e3-f4, attack the queen instead of taking the knight here

12b, e3-f4,e6-e5,c3-b5,d6-d6,d6-b8,f4-g3,b7-b6,d5-d6,b8-b7,g3-e5,

1. e4 d5 2. exd5 Qxd5 3. Nc3 Qd6 4. d4 c5 5. Nf3 Bg4 6. Be3 Bxf3 7. gxf3 Nc6 8.
d5 Nb4 9. a3 Na6 10. h4 e6 11. Qd2 O-O-O 12. O-O-O Nf6 13. Bxa6 Qxa6 14. Qe2
Qxe2 15. Nxe2 exd5 16. Nf4 d4 17. Bd2 Bd6 18. Nd3 c4 19. Nb4 Bxb4 20. Bxb4 d3
21. c3 b6 22. Rhg1 g6 23. Be7 Rde8 24. Bxf6 Rhg8 25. Kb1 Re2 26. Rg2 d2 27. Bg5
Re1 28. Kc2 Rxd1 29. Kxd1 Rd8 30. Bxd2 Kc7 31. Rg4 b5 32. Re4 Kc6 33. Re7 Rd7
34. Rxd7 Kxd7 35. Ke2 Kc6 36. Kd1 Kb6 37. Bg5 Ka5 38. f4 f5 39. Bh6 Ka4 40. f3
Kb3 41. Kc1 a5 42. Bg7 b4 43. cxb4 axb4 44. axb4 Kxb4 45. Kc2 Kc5 46. Kc3 Kd5
47. Bh8 Kc5 48. Bg7 Kd5 49. Bf8 h6 50. Bxh6 Kc5 51. b3 cxb3 52. Kxb3 Kd5 53. Kc3
Ke6 54. Kd3 Kf6 55. Ke3 Ke6 56. Kf2 Kf6 57. Kg3 Kf7 58. Bg5 Kg7 59. Kh3 Kh7 60.
h5 gxh5 61. Kh4 Kg6 62. Be7 Kh6 63. Bg5+ Kg6 64. Bd8 Kh6 65. Kg3 Kg6 66. Kf2 Kh6
67. Ke3 Kg6 68. Kd4 Kf7 69. Ke5 Ke8 70. Bh4 Kf7 71. Kxf5 Kg7 72. Kg5 Kh7 73.
Kxh5 Kg7 74. Kg5 Kh7 75. f5 Kg7 76. f6+ Kf7 77. Kf5 Kf8 78. Bg5 Kf7 79. Bh6 Kg8
80. Bg5 Kf7 81. f4 Kg8 82. Ke5 Kf7 83. Kd6 Kg6 84. Ke7 Kf5 85. f7 Kg6 86. f8=Q
Kh5 87. Qh6+ Kg4 88. Qh4+ Kf5 89. Kf7 Ke4 90. Kg7 Kf5 91. Kh6 Ke4 92. Qg4 Ke3
93. f5+ Kd3 94. f6 Kc3 95. f7 1-0

`;

scandinavian_info_2 = ` checkmate at the end...

1. e4 d5 2. exd5 Qxd5 3. Nc3 Qe5+ 4. Nge2 Nc6 5. d4 Nxd4 6. f4 Qe6 7. Qd3 Nxe2
8. Bxe2 Nf6 9. h3 Bd7 10. f5 Qe5 11. g4 h5 12. Rg1 hxg4 13. hxg4 Rh2 14. b3 Nxg4
15. Bb2 Nf2 16. Qd2 Bxf5 17. Nb5 Qxb2 18. Nxc7# 1-0



`

scandinavian_info_list = [scandinavian_info_1, scandinavian_info_2];

queens_pawn_info_1 = `lost the rook to the bishop for no good reason
I tried to go on the right side to attack the pawn on the right side...
I was black

at 14b, when your black bishop is attacked move like this:

d7-e5, d4-e5, c7-e5, h1-f1, f1-f5, e5-f5, d2-e4, a8-d8, d1-e2

1. d4 d5 2. c3 c6 3. b4 Bf5 4. Nd2 Nd7 5. f3 b5 6. e4 dxe4 7. fxe4 Bg6 8. g4 h5
9. h4 e5 10. Ngf3 f6 11. g5 f5 12. exf5 Bxf5 13. Bg2 e4 14. Ne5 Qc7 15. Rf1 Bh7
16. g6 Nxe5 17. gxh7 Rxh7 18. Bxe4 Nf6 19. Bxh7 Nd3+ 20. Ke2 Qg3 21. Bxd3 O-O-O
22. Qe1 Re8+ 23. Ne4 Qg4+ 24. Ke3 Qh3+ 25. Rf3 Ng4+ 26. Kf4 Qxh4 27. Qxh4 1-0


`;

queens_pawn_info_2 = `
10a:
d6-g6,e3-e4,f5-e4,c3-e4,g6-e4,d1-e2,g8-f6,

15a:
h5-g5,g4-g5,f8-h6,e3-d5,c7-h2,g1-h1,h2-h1,g5-g3,d5-c7,e8-d8,c7-a6,a8-c8,g8-f6,f6-h5,

17a: black should attack the knight with the free pawn

1. d4 d5  2. Nf3 c6 3. e3 Bf5  4. c4 h6  5. cxd5  Qxd5 6. Nfd2  Qd6  7. f4 g5 8. fxg5 hxg5 9. Nc3 Nd7 10. Nc4 Qc7 (10...Qg6 11. e4 Bxe4 12. Nxe4 Qxe4+ 13. Qe2 Ngf6) 11. e4 Bg6 12. Bxg5 Rxh2 13. Rg1 b5 14. Ne3 Rh5 15. Qg4 Ndf6 (15...Rxg5 16. Qxg5 Bh6 17. Ned5 Qh2 18. Rh1 Qxh1 19. Nc7+) 16. Bxf6 Nxf6 17. Qf3 e5 (17... b4) 18. dxe5 Qxe5 19. 0-0-0 Bxe4 20. Nxe4 Nxe4 21. Ng4 Rf5 22. Qd3 Qe7 23. Be2 Rd5 24. Qh3 Rc5+ 25. Kb1 Rd8


`;

queens_pawn_info_3 = `
https://www.chess.com/game/live/51171569971

10a: move your queen down one

11a: pin your bishop to the knight in front of the king instead of trying to trade

13a: mistake to move the knight there because?


best move:  queen behind a pawn protected by en passant 

13a,d6-e5,13a,f2-f4,13a,e4-f3,13a,f4-e3,

13a: 

d6-e5,d2-d4,e5-d4,e3-d4,c8-e6,e1-d2,g8-e7,f2-f3,f7-f5,a2-a4,a7-a5,a1-b1,e8-c8,a8-d8,h1-e1,c8-c7,b2-b4,a5-b4,b1-b4,e7-c8,a4-a5,c8-d6,c3-a4,d8-a8,a5-a6,e6-c8,c2-c4,f5-f4,f3-e4,d6-e4,d2-c2,

and crazy moves

14a-14b is a mistake : should bring the bishop to f5

17a-17b move the queen to e7

your bishop is going to lose a tempo

21a:


d6-e5,d2-d4,f7-f6,g5-g6,e6-g4,d1-d2,b7-b6,c3-d5,e5-d5,d4-d5,


I do not know what is going on here...

21b,c3-e4,e4-f6,d2-c3,

that is a killer move by white

because lining up the queen behind the knight...

 `


queens_pawn_info_4 = `Levy's Game
https://www.365chess.com/tournaments/New_York_Summer_IMC_2022_2022/45133#

https://www.youtube.com/watch?v=fUP7vkeDuOg

1. d4 d5 2. Nf3 c5 3. c3 Nf6 4. dxc5 e6 5. b4 a5 6. e3 axb4 7. cxb4 b6 8. Bb5+ Bd7
9. Bxd7+ Nbxd7 10. a4 bxc5 11. b5 Bd6 12. Bb2 g5 13. e4 g4 14. Nfd2 Qc7 15. Qe2
Rg8 16. g3 Be5 17. Bxe5 Nxe5 18. exd5 Nf3+ 19. Nxf3 gxf3 20. d6 Qxd6 21. Qxf3 Qe5+
22. Kf1 Ne4 23. Kg2 Qxa1 24. Qxe4 Qxa4 25. Qc6+ Ke7 26. Qxc5+ Kf6 27. Nc3 Qg4 28. Re1
Qf5 29. Qd4+ Kg6 30. Re5 Rad8 31. Qc5 Qc2 32. Rg5+ Kh6 33. h4 f6 34. Rxg8 Rxg8 35. b6
Qb3 36. Qc7 Rg4 37. Qc5 e5 38. Qf8+ Kg6 39. Qc8 h5 40. b7 Rb4 41. Qe8+ Kg7 42. Qe7+
Kg6 *



`


queens_pawn_info_list = [
  queens_pawn_info_1,
  queens_pawn_info_2,
  queens_pawn_info_3, queens_pawn_info_4
];

italian_info_1 = `@1,2

https://www.chess.com/game/live/51661226354

-------------------------------

r3kbnr/ppp1q1pp/2np4/4p3/2B1P1b1/2P2N2/PP1N1PPP/R1BQK2R
white to move

c4-g8,h8-g8,d1-b3,

triple attack...



---------

2kr1bnr/1pp3pp/3pq3/n3p1N1/P3P3/2P4P/3N1PP1/R1BQK2R

here go attack the knight with your knight ...

unblock your bishop

e6-f6,d2-b3,a5-c6,a4-a5,h7-h6,g5-f3,g7-g5,a5-a6,b7-b6,c1-e3,c8-b8,b3-d2,f6-e6,d1-a4,d6-d5,e4-d5,d8-d5,a4-b3,


------------

2k1rb1r/1p4p1/2p4p/n3Nn2/P3NP1P/2P3P1/8/R1B2RK1 w - - 0 22

go e1 here...


`;

italian_info_2 = `

https://www.chess.com/game/live/51665436578

--------------------------------------------

1. e4 e5 2. Nf3 Nc6 3. Bc4 d6 4. c3 f5 5. d3 fxe4 6. dxe4 Bg4 7. Nbd2 Qe7 8. h3
Be6 9. Bxe6 Qxe6 10. b4 O-O-O 11. a4 a5 12. bxa5 Nxa5 13. Ng5 Qf6 14. h4 Nh6 15.
Qf3 Qxf3 16. Ngxf3 d5 17. O-O dxe4 18. Nxe4 c6 19. Nxe5 Re8 20. f4 Nf5 21. g3 h6
22. Ba3 Bxa3 23. Rxa3 Nc4 24. Nxc4 Rxe4 25. Nb6+ Kb8 26. a5 Nxg3 27. Rf3 Nf5 28.
Ra4 Re1+ 29. Kf2 Rc1 30. c4 Nxh4 31. Rg3 g5 32. fxg5 hxg5 33. Rxg5 Rf8+ 34. Kg3
Nf5+ 35. Kg4 Ne3+ 36. Kg3 Rd8 37. Re5 Rc3 38. c5 Ka7 39. Kf4 Ng2+ 40. Ke4 Rdd3
41. Rd4 Re3+ 42. Kf5 Rf3+ 43. Ke4 Rf4# 0-1

--------------------------------------------

rnb2rk1/ppppq1pp/1b6/5p2/3PP3/2N2N1P/PPP2KP1/R1BQ1B1R w - - 0 10
c3-d5,e7-e8,f1-c4,g8-h8,e4-f5,d7-d6,g2-g4,
move # 10 for white


---------------------------------------------
r1b2rk1/ppp1q1pp/1bn5/4Bp2/3P4/2N2N1P/PPP2KP1/R2Q1B1R w - - 1 13
right here I advantage but then if I don't make the right move, lose tons of advantage


because your pawn is unpinned...
c3-d5,e7-f7,d5-b6,a7-b6,f1-d3,

--> then unpin it. 


-------------------------------------------


r1b2rk1/ppp4p/1b6/5p2/1q1n2p1/2NB2BP/PPP2KPN/R2QR3 w - - 0 17


f2-f1,c8-e6,a2-a3,b4-c5,c3-a4,c5-c6,e1-e6,d4-e6,a4-b6,a7-b6,f2-f1,c8-e6,a2-a3,b4-b4,b4-b4,b4-b4,b4-c5,c3-a4,c5-c6,e1-e1,e1-e6,d4-e6,a4-b6,g4-h3,a7-b6,d1-f3,b6-b5,f3-c6,b7-c6,h2-f3,g3-g3,g3-c7,e6-c5,f8-c8,c7-e5,c5-d3,c2-d3,c6-c5,f1-f2,g8-f7,g2-h3,a1-g1,










`;

italian_info_3 = `

https://www.chess.com/game/live/50527774465

--------------------------------------------

https://www.chess.com/analysis/game/live/50624337407?tab=review

at move 7a instead go here:
d2-d3, a7-a6, a4-c3, b7-b5, c4-d5

--------------------------------------------

https://www.chess.com/analysis/game/live/50702385279?tab=review

move 13b: your move where to go?
a3-e7, d8-e7, d1-d4 

14b - the best move is to take the bishop 
d1-a1

19a- you should go to c1



`;

italian_info_4 = `  https://www.chess.com/analysis/game/live/50946048249?tab=review

dont take the knight with your bishop..


best move 6a,d1-b3,

form the battery against the knight

dont retreat your knight but take the pawn and go after the bishop at move 14b

and at move 24.. take out the bishop (this is when Alan took over..) instead of the pawn
`;

italian_info_5 = `a perfect game..
1. e4 e5 2. Nf3 Nc6 3. Bc4 Nd4 4. d3 Nxf3+ 5. Qxf3 Nf6 6. Nd2 Bb4 7. Qe2 Bxd2+
8. Bxd2 O-O 9. Bc3 d5 10. exd5 Ng4 11. h3 Nh6 12. Bxe5 c6 13. dxc6 bxc6 14.
O-O-O Qg5+ 15. Kb1 Qxg2 16. Bxg7 Kxg7 17. Rhg1 Qxg1 18. Rxg1+ Kh8 19. Qe5+ f6
20. Qe7 Bxh3 21. Qg7# 1-0
`;

italian_info_list = [
  italian_info_1,
  italian_info_2,
  italian_info_3,
  italian_info_4,
  italian_info_5
];

agadmator_1 = `d2-d4, g8-f6, c2-c4, e7-e6, b1-c3, f8-b4, a2-a3, b4-c3, b2-c3, c7-c5, e2-e4, d8-a5, e4-e5, f6-e4, c1-d2, b8-c6, g1-f3, e4-c3, d1-c2, c5-d4, a3-a4, b7-b6, f1-e2, c8-a6, e1-f1, a8-c8, g2-g3, c6-e5, f3-d4, c3-e2, d2-a5, e2-d4, c2-b2, c8-c4, f1-g2, a6-b7, g2-h3, e5-d3, b2-d2, d4-f3, d2-e3, f3-g5, `;

agadmator_list = [agadmator_1];

philidor_1 = `e2-e4, e7-e5, g1-f3, g8-f6, b1-c3, d7-d6, d2-d4, c8-g4, f1-e2, e5-d4, f3-d4, g4-e2, d1-e2, d8-e7, f2-f3, d6-d5, e4-e5, f6-d7, f3-f4, b8-c6, c3-d5, c6-d4, e2-c4, e7-c5, c4-c5, f8-c5, e1-d1, e8-g8, h8-f8, c2-c3, d4-e6, b2-b4, c5-b6, d5-b6, d7-b6, c1-e3, b6-c4, e3-f2, a8-d8, d1-c2, e6-f4, g2-g3, d8-d2, c2-b3, d2-f2, 

`;

philidor_list = [philidor_1];

philidor_info_1 = `hello world 
15b should be 15a everything got pushed down one...
(because of castling concerns)

9b: 

c3-d5,

here with this move you will attack the queen if the knight takes the pawn

11a: your knight is hanging in the middle

13b
d5-c7,13b,e8-e8,13b,e8-e7,13b,c7-d5,13b,e7-e7,13b,e7-e6,13b,d5-c7,13b,e6-f5,13b,c7-a8,13b,d4-c2,

already losing a lot here!



`;

philidor_info_list = [philidor_info_1];

english_1 = `c2-c4, e7-e5, g1-f3, b8-c6, d2-d4, e5-d4, f3-d4, f8-b4, b1-c3, g8-f6, g2-g3, f6-e4, d1-d3, e4-c3, b2-c3, b4-c5, c1-e3, c5-b6, c4-c5, b6-a5, d4-b3, b7-b6, f1-g2, d8-f6, a1-c1, a8-b8, e1-g1, h1-f1, e8-g8, h8-f8, e3-f4, c6-e5, d3-d4, f8-e8, b3-a5, b6-a5, c1-b1, b8-b1, f1-b1, d7-d6, b1-b8, g7-g5, c5-d6, g5-f4, g3-f4, e5-d7, d6-c7, f6-d4, c3-d4, g8-f8, e2-e4, f8-e7, e4-e5, d7-b6, d4-d5, e7-d7, d5-d6, f7-f6, g2-h3, d7-c6, b8-c8, e8-c8, h3-c8, b6-c8, g1-g2, c6-d7, g2-g3, c8-b6, g3-g4, 

`;

english_list = [english_1];

english_info_1 = `Levy's last game

https://www.youtube.com/watch?v=WQqvUfjKBaU

mental health recap ..

1. c4 e5 2. Nf3 Nc6 3. d4 exd4 4. Nxd4 Bb4+ 5. Nc3 Nf6 6. g3 Ne4 7. Qd3 Nxc3 8. bxc3
Bc5 9. Be3 Bb6 10. c5 Ba5 11. Nb3 b6 12. Bg2 Qf6 13. Rc1 Rb8 14. O-O O-O 15. Bf4
Ne5 16. Qd4 Re8 17. Nxa5 bxa5 18. Rb1 Rxb1 19. Rxb1 d6 20. Rb8 g5 21. cxd6 gxf4
22. gxf4 Nd7 23. dxc7 Qxd4 24. cxd4 Kf8 25. e4 Ke7 26. e5 Nb6 27. d5 Kd7 28. d6
f6 29. Bh3+ Kc6 30. Rxc8 Rxc8 31. Bxc8 Nxc8 32. Kg2 Kd7 33. Kg3 Nb6 34. Kg4 *

attack the bishop with pawn push in front of the king go backwards... otherwise is a mistake

`;

english_info_list = [english_info_1];

agadmator_info_1 = `Nimzo Defense
move 5a:

you want to be able to : push the pawns e2 to e3 or d2 to d3  and queen to c2


at move 6a: queen has a double attack if the pawn is captured


double attacker on the c3 pawn at 7b

white needs to get the knight out the way when attacked by a pawn

10b knight is cemented

10b:
f3-d4,a5-e5,d4-e2,c3-e2,f1-e2,e5-a1 with check and you have all sorts of problems


purpose of 11b is to bring the bishop to attack the c4 pawn

13a: cannot castle because then e2 bishop is hanging 


14b: for white to capture the knight at e5 do not gain anything...

15b: black offers queen

now in this variation bishop cannot move or the knight hangs with the bishop lining up against the king

d4-e2,a5-d5,c4-d5,c8-c2,


c4 square under triple attack 

18b:
g2-g1,c4-c2,b2-d4,e5-f3,g1-f1,f3-d4


20b:
d2-d2,d2-d3,f3-g5,


21b: e3-g5,d3-f2, checkmate
`;

agadmator_info_list = [agadmator_info_1];

queens_pawn_1 = `d2-d4, d7-d5, c2-c3, c7-c6, b2-b4, c8-f5, b1-d2, b8-d7, f2-f3, b7-b5, e2-e4, d5-e4, f3-e4, f5-g6, g2-g4, h7-h5, h2-h4, e7-e5, g1-f3, f7-f6, g4-g5, f6-f5, e4-f5, g6-f5, f1-g2, e5-e4, f3-e5, d8-c7, h1-f1, f5-h7, g5-g6, d7-e5, g6-h7, h8-h7, g2-e4, g8-f6, e4-h7, e5-d3, e1-e2, c7-g3, h7-d3, e8-c8, a8-d8, d1-e1, d8-e8, d2-e4, g3-g4, e2-e3, g4-h3, f1-f3, f6-g4, e3-f4, h3-h4, e1-h4,
`;

queens_pawn_2 = `d2-d4, d7-d5, g1-f3, c7-c6, e2-e3, c8-f5, c2-c4, h7-h6, c4-d5, d8-d5, f3-d2, d5-d6, f2-f4, g7-g5, f4-g5, h6-g5, b1-c3, b8-d7, d2-c4, d6-c7, e3-e4, f5-g6, c1-g5, h8-h2, h1-g1, b7-b5, c4-e3, h2-h5, d1-g4, d7-f6, g5-f6, g8-f6, g4-f3, e7-e5, d4-e5, c7-e5, e1-c1, g6-e4, c3-e4, f6-e4, e3-g4, h5-f5, f3-d3, e5-e7, f1-e2, f5-d5, d3-h3, d5-c5, c1-b1, a8-d8, 

`;

queens_pawn_3 = `d2-d4, d7-d5, h2-h3, c7-c6, c1-g5, h7-h6, g5-h4, d8-c7, g1-f3, b8-d7, b1-c3, e7-e5, e2-e3, e5-e4, f3-e5, d7-e5, d4-e5, c7-e5, h4-g3, e5-f6, f1-e2, f8-d6, g3-d6, f6-d6, d1-d2, g8-e7, a2-a3, e7-f5, e2-g4, e8-g8, h8-f8, e1-c1, a1-d1, c8-e6, g4-f5, e6-f5, g2-g4, f5-e6, g4-g5, h6-h5, h3-h4, g7-g6, d1-e1, f7-f6, f2-f4, b7-b5, d2-d4, g8-g7, h1-g1, c6-c5, c3-b5, d6-b6, d4-a4, a7-a6, b5-c3, f8-d8, a4-b3, b6-c6, b3-a4, c6-c7, g5-f6, g7-f6, g1-g5, e6-d7, a4-b3, c5-c4, b3-a2, d7-f5, e1-d1, c7-c5, d1-d4, a6-a5, c3-a4, c5-c6, a4-c3, c6-c5, a3-a4, f6-e6, c3-b5, e6-f6, c2-c3, f6-e6, b5-a3, c5-c6, a3-c2, c6-d7, c2-e1, d7-c6, e1-g2, a8-b8, g2-e1, b8-b7, a2-a3, d8-b8, g5-g2, b7-b3, a3-a1, c6-c5, g2-c2, e6-f6, e1-g2, b8-g8, c1-d1, g6-g5, h4-g5, f6-g6, g2-h4, g6-g7, h4-f5, g7-f7, f5-h6, f7-g7, h6-g8, g7-g8, d1-e2,  `;

queens_pawn_4 = `d2-d4, d7-d5, g1-f3, c7-c5, c2-c3, g8-f6, d4-c5, e7-e6, b2-b4, a7-a5, e2-e3, a5-b4, c3-b4, b7-b6, f1-b5, c8-d7, b5-d7, b8-d7, a2-a4, b6-c5, b4-b5, f8-d6, c1-b2, g7-g5, e3-e4, g5-g4, f3-d2, d8-c7, d1-e2, h8-g8, g2-g3, d6-e5, b2-e5, d7-e5, e4-d5, e5-f3, d2-f3, g4-f3, d5-d6, c7-d6, e2-f3, d6-e5, e1-f1, f6-e4, f1-g2, e5-a1, f3-e4, a1-a4, e4-c6, e8-e7, c6-c5, e7-f6, b1-c3, a4-g4, h1-e1, g4-f5, c5-d4, f6-g6, e1-e5, a8-d8, d4-c5, f5-c2, e5-g5, g6-h6, h2-h4, f7-f6, g5-g8, d8-g8, b5-b6, c2-b3, c5-c7, g8-g4, c7-c5, e6-e5, c5-f8, h6-g6, f8-c8, h7-h5, b6-b7, g4-b4, c8-e8, g6-g7, e8-e7, g7-g6, 

`
  
  

queens_pawn_list = [queens_pawn_1, queens_pawn_2, queens_pawn_3, queens_pawn_4];

sicilian_1 = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2
rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3
rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3
rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4
rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4
rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5
rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5
rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6
rnbqkb1r/1p2pppp/p2p1n2/8/3NP3/2N4P/PPP2PP1/R1BQKB1R b KQkq - 0 6
rnbqkb1r/4pppp/p2p1n2/1p6/3NP3/2N4P/PPP2PP1/R1BQKB1R w KQkq b6 0 7
rnbqkb1r/4pppp/p2p1n2/1p6/3NP1P1/2N4P/PPP2P2/R1BQKB1R b KQkq g3 0 7
rn1qkb1r/1b2pppp/p2p1n2/1p6/3NP1P1/2N4P/PPP2P2/R1BQKB1R w KQkq - 1 8
rn1qkb1r/1b2pppp/p2p1n2/1p6/3NP1P1/2N4P/PPP2PB1/R1BQK2R b KQkq - 2 8
rn1qkb1r/1b3ppp/p2ppn2/1p6/3NP1P1/2N4P/PPP2PB1/R1BQK2R w KQkq - 0 9
rn1qkb1r/1b3ppp/p2ppn2/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQK2R b KQkq - 0 9
rn1qkb1r/1b1n1ppp/p2pp3/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQK2R w KQkq - 1 10
rn1qkb1r/1b1n1ppp/p2pp3/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQ1RK1 b kq - 2 10
rn1qkb1r/1b3ppp/pn1pp3/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQ1RK1 w kq - 3 11
rn1qkb1r/1b3ppp/pn1pp3/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQ1R1K b kq - 4 11
r2qkb1r/1b1n1ppp/pn1pp3/1p6/3NP1P1/P1N4P/1PP2PB1/R1BQ1R1K w kq - 5 12
r2qkb1r/1b1n1ppp/pn1pp3/1p6/3NPPP1/P1N4P/1PP3B1/R1BQ1R1K b kq f3 0 12
2rqkb1r/1b1n1ppp/pn1pp3/1p6/3NPPP1/P1N4P/1PP3B1/R1BQ1R1K w k - 1 13
2rqkb1r/1b1n1ppp/pn1pp3/1p6/3NPPP1/P1N4P/1PP1Q1B1/R1B2R1K b k - 2 13
2rqk2r/1b1nbppp/pn1pp3/1p6/3NPPP1/P1N4P/1PP1Q1B1/R1B2R1K w k - 3 14
2rqk2r/1b1nbppp/pn1pp3/1p3P2/3NP1P1/P1N4P/1PP1Q1B1/R1B2R1K b k - 0 14
2rqk2r/1b1nbppp/pn1p4/1p2pP2/3NP1P1/P1N4P/1PP1Q1B1/R1B2R1K w k - 0 15
2rqk2r/1b1nbppp/pn1p4/1p2pP2/4P1P1/P1N2N1P/1PP1Q1B1/R1B2R1K b k - 1 15
3qk2r/1b1nbppp/pn1p4/1p2pP2/4P1P1/P1r2N1P/1PP1Q1B1/R1B2R1K w k - 0 16
3qk2r/1b1nbppp/pn1p4/1p2pP2/4P1P1/P1P2N1P/2P1Q1B1/R1B2R1K b k - 0 16
q3k2r/1b1nbppp/pn1p4/1p2pP2/4P1P1/P1P2N1P/2P1Q1B1/R1B2R1K w k - 1 17
q3k2r/1b1nbppp/pn1p4/1p2pP2/4P1P1/P1P4P/2P1Q1B1/R1B1NR1K b k - 2 17
q3k2r/1b1nbppp/p2p4/1p2pP2/n3P1P1/P1P4P/2P1Q1B1/R1B1NR1K w k - 3 18
q3k2r/1b1nbppp/p2p4/1p2pP2/n3P1P1/P1P4P/2PBQ1B1/R3NR1K b k - 4 18
q3k2r/1b2bppp/p2p4/1pn1pP2/n3P1P1/P1P4P/2PBQ1B1/R3NR1K w k - 5 19
q3k2r/1b2bppp/p2p4/1pn1pP2/n1P1P1P1/P6P/2PBQ1B1/R3NR1K b k - 0 19
q3k2r/1b2bppp/p2p4/1p2pP2/n1P1n1P1/P6P/2PBQ1B1/R3NR1K w k - 0 20
q3k2r/1b2bppp/p2p4/1p2pP2/n1P1n1P1/P4R1P/2PBQ1B1/R3N2K b k - 1 20
q3k2r/1b2bppp/p2p4/4pP2/n1p1n1P1/P4R1P/2PBQ1B1/R3N2K w k - 0 21
q3k2r/1b2bppp/p2p4/4pP2/nBp1n1P1/P4R1P/2P1Q1B1/R3N2K b k - 1 21
q3k2r/1b2bppp/3p4/p3pP2/nBp1n1P1/P4R1P/2P1Q1B1/R3N2K w k - 0 22
q3k2r/1b2bppp/3p4/p3pP2/nBQ1n1P1/P4R1P/2P3B1/R3N2K b k - 0 22
q3k2r/1b2bppp/3p4/4pP2/npQ1n1P1/P4R1P/2P3B1/R3N2K w k - 0 23
q3k2r/1b2bppp/3p4/4pP2/nPQ1n1P1/5R1P/2P3B1/R3N2K b k - 0 23
q4rk1/1b2bppp/3p4/4pP2/nPQ1n1P1/5R1P/2P3B1/R3N2K w - - 1 24
q4rk1/1b2bppp/3p4/1P2pP2/n1Q1n1P1/5R1P/2P3B1/R3N2K b - - 0 24
q4rk1/1b2bppp/1n1p4/1P2pP2/2Q1n1P1/5R1P/2P3B1/R3N2K w - - 1 25
R4rk1/1b2bppp/1n1p4/1P2pP2/2Q1n1P1/5R1P/2P3B1/4N2K b - - 0 25
R4rk1/1b2bppp/3p4/1P2pP2/2n1n1P1/5R1P/2P3B1/4N2K w - - 0 26
5rk1/Rb2bppp/3p4/1P2pP2/2n1n1P1/5R1P/2P3B1/4N2K b - - 1 26
5rk1/Rb2bppp/3p4/1Pn1pP2/2n3P1/5R1P/2P3B1/4N2K w - - 2 27
5rk1/Rb2bppp/3p4/1Pn1pP2/2n3P1/2R4P/2P3B1/4N2K b - - 3 27
5rk1/Rb2bppp/8/1PnppP2/2n3P1/2R4P/2P3B1/4N2K w - - 0 28
5rk1/Rb2bppp/8/1PnppP2/2n3P1/2RN3P/2P3B1/7K b - - 1 28
1r4k1/Rb2bppp/8/1PnppP2/2n3P1/2RN3P/2P3B1/7K w - - 2 29
1r4k1/Rb2bppp/8/1PNppP2/2n3P1/2R4P/2P3B1/7K b - - 0 29
1r4k1/Rb3ppp/8/1PbppP2/2n3P1/2R4P/2P3B1/7K w - - 0 30
1r4k1/1R3ppp/8/1PbppP2/2n3P1/2R4P/2P3B1/7K b - - 0 30
6k1/1r3ppp/8/1PbppP2/2n3P1/2R4P/2P3B1/7K w - - 0 31
6k1/1r3ppp/8/1PbppP2/2R3P1/7P/2P3B1/7K b - - 0 31
6k1/5ppp/8/1rbppP2/2R3P1/7P/2P3B1/7K w - - 0 32
6k1/5ppp/8/1rbBpP2/2R3P1/7P/2P5/7K b - - 0 32
5k2/5ppp/8/1rbBpP2/2R3P1/7P/2P5/7K w - - 1 33
5k2/5ppp/8/1rb1pP2/2R1B1P1/7P/2P5/7K b - - 2 33
8/4kppp/8/1rb1pP2/2R1B1P1/7P/2P5/7K w - - 3 34
8/4kppp/8/1rb1pP2/2R3P1/3B3P/2P5/7K b - - 4 34
8/4kppp/8/r1b1pP2/2R3P1/3B3P/2P5/7K w - - 5 35
8/4kppp/8/r1b1pP2/2R3P1/3B3P/2P3K1/8 b - - 6 35
8/5ppp/5k2/r1b1pP2/2R3P1/3B3P/2P3K1/8 w - - 7 36
8/5ppp/5k2/r1b1pP2/2R3P1/3B1K1P/2P5/8 b - - 8 36
8/5pp1/5k2/r1b1pP1p/2R3P1/3B1K1P/2P5/8 w - h6 0 37
8/5pp1/5k2/r1b1pP1p/6P1/2RB1K1P/2P5/8 b - - 1 37
8/5pp1/5k2/r1b1pP2/6p1/2RB1K1P/2P5/8 w - - 0 38
8/5pp1/5k2/r1b1pP2/6P1/2RB1K2/2P5/8 b - - 0 38
8/5pp1/8/r1b1pPk1/6P1/2RB1K2/2P5/8 w - - 1 39
8/5pp1/8/r1b1pPk1/2R3P1/3B1K2/2P5/8 b - - 2 39
8/5pp1/1b6/r3pPk1/2R3P1/3B1K2/2P5/8 w - - 3 40
8/5pp1/1b6/r3pPk1/1R4P1/3B1K2/2P5/8 b - - 4 40
8/5pp1/8/r3pPk1/1R1b2P1/3B1K2/2P5/8 w - - 5 41
8/5pp1/8/r3pPk1/2Rb2P1/3B1K2/2P5/8 b - - 6 41
8/5pp1/8/4pPk1/2Rb2P1/3B1K2/2P5/r7 w - - 7 42
8/5pp1/8/4pPk1/2Rb2P1/2PB1K2/8/r7 b - - 0 42
8/5pp1/8/4pPk1/2Rb2P1/r1PB1K2/8/8 w - - 1 43
8/5pp1/8/4pPk1/2RbK1P1/r1PB4/8/8 b - - 2 43
8/5pp1/8/4pPk1/2R1K1P1/r1bB4/8/8 w - - 0 44
8/5pp1/8/4pPk1/2R1K1P1/r1b5/4B3/8 b - - 1 44
8/5pp1/8/4pPk1/2RbK1P1/r7/4B3/8 w - - 2 45

`;

sicilian_info_1 = `
choice #1 game = Hikaru's game at the Madrid Park
https://www.youtube.com/watch?v=aeYj4458UaM


1. e4 c5 2. Nf3 d6 3. d4 cxd4 4. Nxd4 Nf6 5. Nc3 a6 6. 
h3 b5 7. g4 Bb7 8. Bg2 e6 9. a3 Nfd7 10. O-O Nb6 11. Kh1 N8d7 12. f4 Rc8 13. Qe2 
Be7 14. f5 e5 15. Nf3 Rxc3 16. bxc3 Qa8 17. Ne1 Na4 18. Bd2 Ndc5 19. c4 Nxe4 20. 
Rf3 bxc4 21. Bb4 a5 22. Qxc4 axb4 23. axb4 O-O 24. b5 Nb6 25. Rxa8 Nxc4 26. Ra7 
Nc5 27. Rc3 d5 28. Nd3 Rb8 29. Nxc5 Bxc5 30. Rxb7 Rxb7 31. Rxc4 Rxb5 32. Bxd5 
Kf8 33. Be4 Ke7 34. Bd3 Ra5 35. Kg2 Kf6 36. Kf3 h5 37. Rc3 hxg4+ 38. hxg4 Kg5 
39. Rc4 Bb6 40. Rb4 Bd4 41. Rc4 Ra1 42. c3 Ra3 43. Ke4 Bxc3 44. Be2 Bd4



[Result "*"]
-- see these games:

1.e4 c5 2.d4 d6 3.dxc5 Qa5+ 4.Nd2 Qxc5 5.Nb3 Qc7 6.Nf3 Nf6 7.Bd3 Nc6 8.O-O g6 9.Bg5 Bg7 10.c3 O-O 11.Nbd4 Bg4 12.h3 Bxf3 13.Nxf3 Nh5 14.g4 h6 15.gxh5 hxg5 16.hxg6 fxg6 17.Nxg5 Bf6 18.Ne6 Qd7 19.Qg4 Ne5 20.Nxf8 Qxg4+ 21.hxg4 Kxf8 22.Be2 *

{https://www.chess.com/analysis/game/live/43289987691?tab=review trading queens at the end you still have an advantage}


`;

sicilian_info_2 = `Magnus vs. Judit at the park

https://www.youtube.com/watch?v=DEmlgy1gRKs

1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nc6 5.Nc3 a6 6.Be3 Qc7 7.Qd2 Nf6 8.f3 Be7 9.O-O-O b5 10.g4 Nxd4 11.Bxd4 Bb7 12.e5 Nxg4 13.Rg1 Nh6 14.Bd3 Bf8 15.Be4 Rc8 16.Bb6 Bxe4 17.Bxc7 Bc6 18.Bd6 Nf5 19.Ne4 *


`;

sicilian_2 = `rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2
rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
rnbqkbnr/pp1p1ppp/4p3/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3
rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3
rnbqkbnr/pp1p1ppp/4p3/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4
rnbqkbnr/pp1p1ppp/4p3/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4
r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5
r1bqkbnr/pp1p1ppp/2n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 2 5
r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 6
r1bqkbnr/1p1p1ppp/p1n1p3/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 1 6
r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPP2PPP/R2QKB1R w KQkq - 2 7
r1b1kbnr/1pqp1ppp/p1n1p3/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R b KQkq - 3 7
r1b1kb1r/1pqp1ppp/p1n1pn2/8/3NP3/2N1B3/PPPQ1PPP/R3KB1R w KQkq - 4 8
r1b1kb1r/1pqp1ppp/p1n1pn2/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R b KQkq - 0 8
r1b1k2r/1pqpbppp/p1n1pn2/8/3NP3/2N1BP2/PPPQ2PP/R3KB1R w KQkq - 1 9
r1b1k2r/1pqpbppp/p1n1pn2/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R b kq - 2 9
r1b1k2r/2qpbppp/p1n1pn2/1p6/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w kq b6 0 10
r1b1k2r/2qpbppp/p1n1pn2/1p6/3NP1P1/2N1BP2/PPPQ3P/2KR1B1R b kq g3 0 10
r1b1k2r/2qpbppp/p3pn2/1p6/3nP1P1/2N1BP2/PPPQ3P/2KR1B1R w kq - 0 11
r1b1k2r/2qpbppp/p3pn2/1p6/3BP1P1/2N2P2/PPPQ3P/2KR1B1R b kq - 0 11
r3k2r/1bqpbppp/p3pn2/1p6/3BP1P1/2N2P2/PPPQ3P/2KR1B1R w kq - 1 12
r3k2r/1bqpbppp/p3pn2/1p2P3/3B2P1/2N2P2/PPPQ3P/2KR1B1R b kq - 0 12
r3k2r/1bqpbppp/p3p3/1p2P3/3B2n1/2N2P2/PPPQ3P/2KR1B1R w kq - 0 13
r3k2r/1bqpbppp/p3p3/1p2P3/3B2n1/2N2P2/PPPQ3P/2KR1BR1 b kq - 1 13
r3k2r/1bqpbppp/p3p2n/1p2P3/3B4/2N2P2/PPPQ3P/2KR1BR1 w kq - 2 14
r3k2r/1bqpbppp/p3p2n/1p2P3/3B4/2NB1P2/PPPQ3P/2KR2R1 b kq - 3 14
r3kb1r/1bqp1ppp/p3p2n/1p2P3/3B4/2NB1P2/PPPQ3P/2KR2R1 w kq - 4 15
r3kb1r/1bqp1ppp/p3p2n/1p2P3/3BB3/2N2P2/PPPQ3P/2KR2R1 b kq - 5 15
2r1kb1r/1bqp1ppp/p3p2n/1p2P3/3BB3/2N2P2/PPPQ3P/2KR2R1 w k - 6 16
2r1kb1r/1bqp1ppp/pB2p2n/1p2P3/4B3/2N2P2/PPPQ3P/2KR2R1 b k - 7 16
2r1kb1r/2qp1ppp/pB2p2n/1p2P3/4b3/2N2P2/PPPQ3P/2KR2R1 w k - 0 17
2r1kb1r/2Bp1ppp/p3p2n/1p2P3/4b3/2N2P2/PPPQ3P/2KR2R1 b k - 0 17
2r1kb1r/2Bp1ppp/p1b1p2n/1p2P3/8/2N2P2/PPPQ3P/2KR2R1 w k - 1 18
2r1kb1r/3p1ppp/p1bBp2n/1p2P3/8/2N2P2/PPPQ3P/2KR2R1 b k - 2 18
2r1kb1r/3p1ppp/p1bBp3/1p2Pn2/8/2N2P2/PPPQ3P/2KR2R1 w k - 3 19
2r1kb1r/3p1ppp/p1bBp3/1p2Pn2/4N3/5P2/PPPQ3P/2KR2R1 b k - 4 19

`;

sicilian_list = [sicilian_1, sicilian_2];

sicilian_info_list = [sicilian_info_1, sicilian_info_2];

const htmlEl = document.getElementsByTagName("html")[0];

const toggleTheme = (theme) => {
  htmlEl.dataset.theme = theme;
};

function applyTheme(theme) {
  document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
  document.body.classList.add(`theme-${theme}`);
  console.log(theme);
  console.log(`theme-${theme}`);
}

// document.addEventListener("DOMContentLoaded", () => {
//   const savedTheme = localStorage.getItem("theme") || "auto";

//   applyTheme(savedTheme);

//   for (const optionElement of document.querySelectorAll("#selTheme option")) {
//     optionElement.selected = savedTheme === optionElement.value;
//   }

//   document.querySelector("#selTheme").addEventListener("change", function () {
//     localStorage.setItem("theme", this.value);
//     applyTheme(this.value);
//   });
// });

var today = new Date();
var hour_now = today.getHours();

var theme = document.getElementById("selTheme");

document.body.style.backgroundColor = "#ffffff";

const pieces = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟"
};

// Call addRow() with the table's ID
//addRow('my-table');
counter_ = 0;

var counter_ = 0;

var regExp = /[a-zA-Z]/g;

// $('#myTextArea').on('change',function(){
//  counter_ = 0
//  arr = $.trim($("#myTextArea").val())
//   arrsplit = arr.split('\n')
//   arrsplitArray = new Array();
//  console.log(arrsplit)
//  console.log(arrsplit[1])

//  myCards = new Array()
//   var cubes = [['string1', 'string2']]

//   for(var i = 0; i < cubes.length; i++) {
//       for(var j = 0; j < cubes[i].length; j++) {
//               console.log(cubes[i][j]);
//       }
//   }
//   var arrsplit_2 = new Array()
//   for( var i = 0; i < arrsplit.length; i++){

//       if ( arrsplit[i].length > 0) {

//          arrsplit_2.push(arrsplit[i])
//       }

//   }

//   for (let i = 0; i < arrsplit_2.length; i++) {
//     if(arrsplit_2[i].includes("\t")){

//     arrsplit_2[i] = arrsplit_2[i].split('\t')[1]
//     }
//   }

//   arrsplit2D = new Array();
//   while(arrsplit_2.length) arrsplit2D.push(arrsplit_2.splice(0,2))
//   console.log('arrsplit2D')
//   console.log(arrsplit2D)

//   addRow_from_textarea('my-table')
//   $("#myTextArea").val('')
// });

textareaSplit = new Array();

// $('#myTextArea_2').on('change',function(){
//  var textarea_val = $("#myTextArea_2").val()
//     var textarea_val = textarea_val.replace(/(\r\n|\n|\r)/gm, "")
//     console.log(textarea_val)
//     textareaSplit = textarea_val.split(' ')
// })

// $(document).on("keypress", function (e) {
//      if (e.keyCode == 110) {
//       //zed
//       speech_count--

//       let speech = new SpeechSynthesisUtterance();
//      speech.lang = "en-GB";
//      //speech.lang = "en-US";
//       speech.text = textareaSplit[speech_count]
//      speech.rate = 0.8
//      window.speechSynthesis.speak(speech);
//  }});

// $('#myTextArea_4').on('change',function(){
//        counter_ = 0
//    arr = $.trim($("#myTextArea_4").val())
//    console.log(arr)
//    arrsplit = arr.split('\n')
//    arrsplitArray = new Array();
//      console.log(arrsplit)
//      console.log(arrsplit[1])

//      myCards = new Array()

//     var board = new Array()
//     for( var i = 0; i < arrsplit.length; i++){
//         board.push(arrsplit[i].split(/(?!$)/u))

//     }

//     var dup_array = board.slice();
//     console.log(dup_array)
//     var empty = [undefined, null, ''];
//     var updated3 = dup_array.filter(function (a) {
//       return a.some(function (val) {
//       return !empty.includes(val);
//     });
//     });
//     var subArrayCount_1 = updated3.length / 8;

//     dup_array_splice = updated3.slice(8)
//     console.log(dup_array_splice)
//     //grab the first 8
//     console.log(updated3)
//     //everything remains
//     // updated3 = updated3.splice(8)
//     // console.log(updated3)
//     // get the end after the first part is removed
//     board = board.slice(0,8)
//     board = board.reverse(); // 8 7 5 3
//     var res_1 = [];
//     console.log('subArrayCount_1')
//     console.log(subArrayCount_1)
//     for (i = 0; i < subArrayCount_1; i++) {
//         var from = 8 * i;
//         var to = (8 * (1 + i));
//         console.log(to)
//         var sliced = updated3.slice(from, to);
//         sliced = sliced.reverse()
//         var new_ = new Array()
//         for( var j = 0; j < sliced.length; j++){
//           console.log(sliced[j])
//           new_[j] = sliced[j].reverse()

//         }
//         res_1.push(new_);
//     }

//         for (i = 0; i < res_1.length; i++) {
//             let result = "";
//             for(let y = 0; y < 8; y++)
//             {
//               let empty = 0;
//               for(let x = 0; x < res_1[i][y].length; x++)
//               {
//                 console.log(res_1[i][y][x])
//                 let c = res_1[i][y][x][0];  // Fixed
//                 if(c.match(/[a-zA-Z]+/g)) {
//                 if(empty > 0)
//                 {
//                     result += empty.toString();
//                     empty = 0;
//                 }
//                 if(c.match(/[a-zA-Z]+/g))
//                   {
//                   result += res_1[i][y][x][0]
//                   }
//                   } else {
//                     empty += 1;
//                   }
//                   }
//                   if(empty > 0)   // Fixed
//                 {
//                     result += empty.toString();
//                   }
//         if(y < res_1[i].length - 1)  // Added to eliminate last '/'
//         {
//           result += '/';
//         }
//     }
//     result += ' w KQkq - 0 1';
//     $( ".inner" ).append( "<p></p>" );
//     $( ".inner" ).append( result );
//     $( ".inner" ).append( "<p></p>" );
//     }
//     //board = board.splice(8)
//     //  .log('board')
//     //console.log(board)
//     // var board1 = new Array()
//     // for( var i = 0; i < board.length; i++){
//     //     board1[i] = board[i].reverse()
//     // }
//     // console.log(board)

// })

// $('#text_5').keypress(function (e) {
//   if (e.which == 13) {
//     text_val = $( "#text_5" ).val();
//     second_var = $( "#text_5" ).val();
//     document.getElementById("text_5").value = ''
//     console.log(second_var)
//     function fentohtml_2() {
//       html = second_var
//         .trim()
//         .replace(/\s+.*/,"")
//         .replace(/\d+/g, n => " ".repeat(n))
//         .replace(/./g, char => "<td>" + (pieces[char] || char))
//         .replace(/^|<td>\//g,"\n  <tr>");
//       html = "<table class=\"chess\">" + html + "\n</table>";
//       document.getElementsByTagName('table')[1].innerHTML = html
//       document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
//     }
//     fentohtml_2();
//     }
//       });

//Choice

document.getElementById("Choice").addEventListener("change", function () {
  console.log("hello_world");
  another_counter = 0 
  selection_var = 0;
  document.getElementById("text_chess").focus();
  determine_selection();
  console.log('arr:'+arr)
  //arr_again = arr.replace(/\n/g, " ");
  text_val_split = arr.split(" ").join("");
  text_val_split = text_val_split.slice(0, -1);
  text_val_split = text_val_split.split(",");
  array_of_moves = text_val_split;
  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";

  //  for(var j = 0; j < arrsplit.length; j++) {
  //  var tr = tableRef.insertRow()
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode(arrsplit[j]))
  // td.style.border = '1px solid black';

  //  }
  var table_ = document.getElementById("my-table");
  $("#myTextAreaSummary").val(arr_info);
  var totalRowCount = table_.rows.length; // 5
  document.getElementById("replace_number").innerHTML = "hi_world";

  var config = {
    //Spanish Opening
    position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "none";

  empty_fen = [];
  for (var j = 0; j < array_of_moves.length; j++) {
    board.move(array_of_moves[j]);
    empty_fen.push(board.fen());
  }
  empty_fen.unshift("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");


  for (var j = 0; j < empty_fen.length; j++) {
    var tr = tableRef.insertRow();
    var td1 = tr.insertCell()
    td1.appendChild(document.createTextNode(j))
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(empty_fen[j]));
    td.style.border = "1px solid black";
  }

  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "block";

});


var selection_catch = document.getElementById("Selection");
selection_catch.addEventListener("change", function () {
  console.log("hello_world");
  another_counter = 0
  document.getElementById("text_chess").focus();
  selection_var = 0;
  determine_selection();
  arr_again = arr.replace(/\n/g, " ");
  text_val_split = arr_again.split(" ").join("");
  text_val_split = text_val_split.slice(0, -1);
  text_val_split = text_val_split.split(",");
  array_of_moves = text_val_split;
  console.log(array_of_moves);
  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";

  //  for(var j = 0; j < arrsplit.length; j++) {
  //  var tr = tableRef.insertRow()
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode(arrsplit[j]))
  // td.style.border = '1px solid black';

  //  }
  var table_ = document.getElementById("my-table");
  $("#myTextAreaSummary").val(arr_info);

  arr_info.split('\n')[0]

    split_results_4 = arr_info.split('\n')[0]


  if(split_results_4.includes('@')) {
    console.log('includes')
    split_results_5 = split_results_4.replace('@', '')
    split_results_6 = split_results_5.split(',')
    console.log('in the @:' + split_results_5)

    console.log('split_results_6 is'+split_results_6)
    console.log(split_results_6)
    if(Number.isInteger(parseInt(split_results_5[0]))) {
        console.log('is a number')
         number_of_at = parseInt(split_results_5) - 1
         console.log(number_of_at)
    }
    } else{
       console.log('does not')
    }

  var totalRowCount = table_.rows.length; // 5
  document.getElementById("replace_number").innerHTML = "hi_world";

  var config = {
    //Spanish Opening
    position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "none";

  empty_fen = [];
  for (var j = 0; j < array_of_moves.length; j++) {
    board.move(array_of_moves[j]);
    empty_fen.push(board.fen());
    console.log(board.fen());
  }
  empty_fen.unshift("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";
  for (var j = 0; j < empty_fen.length; j++) {
    var tr = tableRef.insertRow();
    var td1 = tr.insertCell()
    td1.appendChild(document.createTextNode(j))
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(empty_fen[j]));

    td.style.border = "1px solid black";
  }

  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "block";

  console.log(empty_fen);
});

var element = document.getElementById("flip_board_2"); //grab the element
element.onclick = function () {
  //asign a function
  console.log("flip board");
  board.flip();
};

function gotoSpecificLink() {
  var selectedText = "";

  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
  } else return;
  //To write the selected text into the textarea
  window.open(selectedText.toString());
  selectedText.toString();
  console.log(selectedText.toString());
}

function onDrop(source, target, piece, newPos, oldPos, orientation) {
  console.log("Source: " + source);
  console.log("Target: " + target);
  console.log("Piece: " + piece);
  console.log("New position: " + Chessboard.objToFen(newPos));
  console.log("Old position: " + Chessboard.objToFen(oldPos));
  console.log("Orientation: " + orientation);
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  textarea_val = $("#myTextArea").val();
  add_ =
    textarea_val +
    document.getElementById("spacecounter").innerHTML +
    "," +
    source +
    "-" +
    target +
    ",";
  $("#myTextArea").val(add_);
  document.getElementById("fenposition_1").innerHTML = Chessboard.objToFen(
    newPos
  );
}

var config = {
  //Spanish Opening
  position: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R",
  pieceTheme:
    "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
  draggable: true,
  dropOffBoard: "snapback",
  onDrop: onDrop
};

var board = Chessboard("myBoard", config);

var regex = /^[0-9]+$/;

function getSelectedText_2_shift_right() {
  var selectedText = "";

  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
  } else return;
  //To write the selected text into the textarea
  //function fentohtml_3() {
  //html = selectedText.toString()
  //.trim()
  //.replace(/\s+.*/,"")
  //.replace(/\d+/g, n => " ".repeat(n))
  //.replace(/./g, char => "<td>" + (pieces[char] || char))
  //.replace(/^|<td>\//g,"\n  <tr>");
  //html = "<table class=\"chess\">" + html + "\n</table>";
  //document.getElementsByTagName('table')[1].innerHTML = html
  //document.getElementById("outhtml").innerHTML = html.replace(/</g,"&lt;").replace(/>/g,"&gt;");
  //}
  //fentohtml_3();
  // var config = {
  // //Spanish Opening
  // position: selectedText.toString(),
  // pieceTheme: "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
  // draggable: true,
  // dropOffBoard: 'snapback',
  // };
  // board = Chessboard("myBoard", config);
  console.log(selectedText.toString());
  board.move(selectedText.toString());
  //navigator.clipboard.writeText(config['position'])
}

document.addEventListener("keydown", function (event) {
  //event.preventDefault();
  // if(event.shiftKey){
  //     if(event.keyCode == 38){
  //     console.log('hello');
  //     getSelectedText_2_shift_right()
  //   // will only return the value of dollar sign ($) not a number 4
  //     }
  // }
  //if (event.keyCode == 37 ) {
  //  console.log('hello')
  //}
  // if (event.keyCode == 9 && !(document.activeElement == document.getElementById("newTerm")) {
  //     document.getElementById("newTerm");
  //     }
});

spacecounterlist = [
  "0",
  "1a",
  "1b",
  "2a",
  "2b",
  "3a",
  "3b",
  "4a",
  "4b",
  "5a",
  "5b",
  "6a",
  "6b",
  "7a",
  "7b",
  "8a",
  "8b",
  "9a",
  "9b",
  "10a",
  "10b",
  "11a",
  "11b",
  "12a",
  "12b",
  "13a",
  "13b",
  "14a",
  "14b",
  "15a",
  "15b",
  "16a",
  "16b",
  "17a",
  "17b",
  "18a",
  "18b",
  "19a",
  "19b",
  "20a",
  "20b",
  "21a",
  "21b",
  "22a",
  "22b",
  "23a",
  "23b",
  "24a",
  "24b",
  "25a",
  "25b",
  "26a",
  "26b",
  "27a",
  "27b",
  "28a",
  "28b",
  "29a",
  "29b",
  "30a",
  "30b",
  "31a",
  "31b",
  "32a",
  "32b",
  "33a",
  "33b",
  "34a",
  "34b",
  "35a",
  "35b",
  "36a",
  "36b",
  "37a",
  "37b",
  "38a",
  "38b",
  "39a",
  "39b",
  "40a",
  "40b",
  "41a",
  "41b",
  "42a",
  "42b",
  "43a",
  "43b",
  "44a",
  "44b",
  "45a",
  "45b",
  "46a",
  "46b",
  "47a",
  "47b",
  "48a",
  "48b",
  "49a",
  "49b",
  "50a",
  "50b",
  "51a",
  "51b",
  "52a",
  "52b",
  "53a",
  "53b",
  "54a",
  "54b",
  "55a",
  "55b",
  "56a",
  "56b",
  "57a",
  "57b",
  "58a",
  "58b",
  "59a",
  "59b",
  "60a",
  "60b",
  "61a",
  "61b",
  "62a",
  "62b",
  "63a",
  "63b",
  "64a",
  "64b",
  "65a",
  "65b",
  "66a",
  "66b"
];

spaceintegercounterlist = [
  0,
  1,
  100,
  2,
  100,
  3,
  100,
  4,
  100,
  5,
  100,
  6,
  100,
  7,
  100,
  8,
  100,
  9,
  100,
  10,
  100,
  11,
  100,
  12,
  100,
  13,
  100,
  14,
  100,
  15,
  100,
  16,
  100,
  17,
  100,
  18,
  100,
  19,
  100,
  20,
  100,
  21,
  100,
  22,
  100,
  23,
  100,
  24,
  100,
  25,
  100,
  26,
  100,
  27,
  100,
  28,
  100,
  29,
  100,
  30,
  100,
  31,
  100,
  32,
  100,
  32,
  100,
  33,
  100,
  34,
  100,
  35,
  100,
  36,
  100,
  37,
  100,
  38,
  100,
  39,
  100,
  40,
  100,
  41,
  100,
  42,
  100,
  43,
  100,
  44,
  100,
  45,
  100,
  46,
  100,
  47,
  100,
  48,
  100,
  49,
  100,
  50,
  100,
  51,
  100,
  52,
  100,
  53,
  100,
  54,
  100,
  55,
  100,
  56,
  100,
  57,
  100,
  58,
  100,
  59,
  100,
  60,
  100,
  61,
  100,
  62,
  100,
  63,
  100,
  64,
  100,
  65,
  100,
  66,
  100
];


$("#move_board_2").keypress(function (e) {
  if (e.which == 13) {
    text_val = $("#move_board_2").val();
    console.log(text_val);
    text_val_split = text_val.split("")[0];
    console.log(text_val_split);
    document.getElementById("move_board_2").value = "";
    document.getElementById("move_board_2").focus();
    if (text_val_split.includes('@')) {
      text_val_2 = text_val.replace('@', '')
      text_val_3 = parseInt(text_val_2) - 1
      var config = {
      //Spanish Opening
        position: fen_list[text_val_3],
        pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
      };
      board = Chessboard("myBoard", config);
    } else {
      space_counter_index = spaceintegercounterlist.indexOf(parseInt(text_val));

      var config = {
        //Spanish Opening
        position: empty_fen[space_counter_index],
        pieceTheme:
          "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
      };
      board = Chessboard("myBoard", config);
      another_counter = empty_fen.indexOf(board.fen()) - 1
    }

  }
});
/*
$('#move_board').keypress(function (e) {
  if (e.which == 13) {
    text_val = $( "#move_board" ).val();
    console.log(text_val)
    if (text_val.includes("/")) {
        var config = {
  //Spanish Opening
        position: text_val,
        pieceTheme: "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: 'snapback', 
        };
        board = Chessboard("myBoard", config);
    arr_first = $('#myTextArea').val()
    arr_first = arr_first + ' , ' + text_val
    $('#myTextArea').val(arr_first)  
    } else {
        if (text_val.includes("r")) {
            board.start()
        } else {
        split_text_val = text_val.split(',')
        if(text_val.match(regex)){
            if(text_val > 0) {
              console.log('number')
              text_val_num = parseInt(text_val)
              text_val_num = text_val_num - 1
              console.log(text_val_num)
              text_val_num_length = split_selectedText.length 
              console.log(text_val_num_length)
              if (text_val_num >= text_val_num_length) { 
                console.log('greater')
              }
              else {
                board.move(split_selectedText[text_val_num].trim())
                console.log(split_selectedText[text_val_num].trim())
                document.getElementById('moveboard_number').innerHTML = text_val
                document.getElementById('moveboard_recent').innerHTML = split_selectedText[text_val_num].trim()
              }
            } else {
              console.log('0')
              console.log(set_fen_arr)
              var config = {
                    //Spanish Opening
                position: set_fen_arr,
                pieceTheme: "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
                draggable: true,
                dropOffBoard: 'snapback', 
               };
                        board = Chessboard("myBoard", config);
             }
            
          } else {
            board.move(text_val.trim())
            console.log(text_val)
            arr_first = $('#myTextArea').val()
            arr_first = arr_first + ' , ' + text_val
            $('#myTextArea').val(arr_first)
          }     
        }
    }
        document.getElementById("move_board").value = ''
    }
});

*/

var array_of_moves = ["a1-a2", "b1-b2"];

document.getElementById("board_array").innerHTML = array_of_moves;

// if you want escape .. you need to do something else
// if you want escape .. you need to do something else
function getSelectedText() {
  var selectedText = "";

  // window.getSelection
  if (window.getSelection) {
    selectedText = window.getSelection();
  }
  // document.getSelection
  else if (document.getSelection) {
    selectedText = document.getSelection();
  }
  // document.selection
  else if (document.selection) {
    selectedText = document.selection.createRange().text;
  } else return;
  //To write the selected text into the textarea

  selectedText.toString();
  console.log(selectedText.toString());
  if (selectedText.toString().includes("@")) {
    console.log('contains @')
    split_results_3 = selectedText.toString().replace('@', '')
    if(Number.isInteger(parseInt(split_results_3[0]))) {
        number_of_at = parseInt(split_results_3) - 1
        var config = {
      //Spanish Opening
          position: fen_list[number_of_at],
          pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
          draggable: true,
          dropOffBoard: "snapback",
          onDrop: onDrop
        };
        board = Chessboard("myBoard", config);
        entered_fen = fen_list[number_of_at]
        console.log(number_of_at)
     }
  } else if (selectedText.toString().includes("/")) {
    console.log('contains /')
    text_val_5 = selectedText.toString().trim().split(" ")[0]
    var config = {
      //Spanish Opening
            position: text_val_5,
            pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
            draggable: true,
            dropOffBoard: "snapback",
            onDrop: onDrop
        };
    board = Chessboard("myBoard", config);
    entered_fen = text_val_5
    another_counter = empty_fen.indexOf(entered_fen)
    console.log(fen_list_retrieve[entered_fen])
    text_val_split = 'd1-d2'
    try{ 
        text_val_split = fen_list_retrieve[entered_fen].split(' ').join('')
        console.log(text_val_split)
        text_val_split = text_val_split.split(",");
        short_array_of_moves = text_val_split;
        short_array_of_moves = short_array_of_moves.filter(Boolean);
        console.log(short_array_of_moves);
        document.getElementById("board_array").innerHTML = short_array_of_moves;
        move_board_counter_ = -1;
    }catch(e){
        console.log(e)
    }
    

  }
  else {
    text_val_split = selectedText.toString().split(" ").join("");
    console.log(text_val_split)
    text_val_split = text_val_split.split(",");
    short_array_of_moves = text_val_split;
    short_array_of_moves = short_array_of_moves.filter(Boolean);
    console.log(short_array_of_moves);
    document.getElementById("board_array").innerHTML = short_array_of_moves;
    move_board_counter_ = -1;
  }
  
}
$("body").keydown(function (e) {
  if (e.keyCode == 27) {
    // escape
    console.log("hello world");
    getSelectedText();
    document.getElementById("text_chess1").focus();
  }
  //else if(e.keyCode == 39) { // right
  // console.log('hello world 2')
  //getSelectedText()
  //}
});

current_move_counter = 0;
new_array = [0, 0];

current_fen = "rr";

another_counter = 0

$("body").keydown(function (e) {
  if (e.keyCode == 39) {
    // right
    console.log("hello world");

    counter_2 = counter_;
    prev_fen = board.fen();
    board.move(array_of_moves[another_counter]);
    console.log('moved at:' + another_counter)
    another_counter = another_counter + 1
    console.log(empty_fen.indexOf(board.fen()));
    current_fen_position = empty_fen.indexOf(board.fen());

    next_fen = board.fen()
    console.log("counter is" + counter_);
    move_board_counter_ = -1;
    document.getElementById("fenposition_1").innerHTML = board.fen();
    document.getElementById("spacecounter").innerHTML =
      spacecounterlist[empty_fen.indexOf(board.fen())];
    document.getElementById("spacecounter_2").innerHTML = empty_fen.indexOf(board.fen())
  }
    document.getElementById("fen_array_index").innerHTML = empty_fen.indexOf(board.fen())
  if (e.keyCode == 40) {
    // down
    move_board_counter_ = move_board_counter_ + 1;
    movenumber_id = move_board_counter_ + 1;
    document.getElementById("movenumber").innerHTML = movenumber_id;
    console.log(move_board_counter_);
    board.move(short_array_of_moves[move_board_counter_]);
  }
  if (e.keyCode == 38) {
    // up
    another_counter = empty_fen.indexOf(entered_fen)
    var config = {
      //Spanish Opening
        position: entered_fen,
        pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
        };
    board = Chessboard("myBoard", config);
    move_board_counter_ = -1
  }
  if (e.keyCode == 37) {
    // left
    another_counter = empty_fen.indexOf(board.fen()) - 1
    console.log("hello world");
    if (empty_fen.indexOf(board.fen()) > 0) {
      current_empty_fen_pos_ind = empty_fen.indexOf(board.fen()) - 1;
      if (current_empty_fen_pos_ind >= 0) {
        var config = {
          //Spanish Opening
          position: empty_fen[current_empty_fen_pos_ind],
          pieceTheme:
            "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
          draggable: true,
          dropOffBoard: "snapback",
          onDrop: onDrop
        };
        board = Chessboard("myBoard", config);
      }
      document.getElementById("fenposition_1").innerHTML = board.fen();
      current_fen_position = empty_fen.indexOf(board.fen());
      document.getElementById("spacecounter").innerHTML =
        spacecounterlist[current_fen_position];
    } else {
      spacecounterlist_ind = spacecounterlist.indexOf(
        document.getElementById("spacecounter").innerText
      );
      console.log("space_counter_list" + spacecounterlist_ind);

      var config = {
        //Spanish Opening
        position: empty_fen[spacecounterlist_ind],
        pieceTheme:
          "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
        draggable: true,
        dropOffBoard: "snapback",
        onDrop: onDrop
      };
      board = Chessboard("myBoard", config);
    }
    val1 = $("#WhiteOrBlack").val();
    if (val1 === "white") {
      board.orientation("white");
    }
    if (val1 === "black") {
      board.orientation("black");
    }
  }
});

function restart_fen_0() {
  counter_ = 0;
  var table2 = document.getElementsByTagName("table")[3];
  var second_var = table2.rows[counter_].cells[0].textContent;
  text_val = second_var;
  text_val_split = text_val.split(" ")[0];
  var config = {
    //Spanish Opening
    position: text_val_split,
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);
  val1 = $("#WhiteOrBlack").val();
  if (val1 === "white") {
    board.orientation("white");
  }
  if (val1 === "black") {
    board.orientation("black");
  }
  document.getElementById("spacecounter").innerHTML =
    spacecounterlist[counter_];
}

selection_progression = [
  "Caro_Kahn",
  "Queens_pawn",
  "Caro_Kahn",
  "Kings_knight",
  "Kings_fianchetto",
  "Caro_Kahn","Italian"
];
choice_progression = [3, 1, 3, 4, 1, 3, 1, ];

progression_counter = selection_progression.length - 1;


var element = document.getElementById("back"); //grab the element
element.onclick = function () {
  //asign a function

  $("#Selection").val(selection_progression[progression_counter]);
  $("#Choice").val(choice_progression[progression_counter]);
  console.log(
    "selection_progression[progression_counter]" +
      selection_progression[progression_counter]
  );
  console.log(
    "choice_progression[progression_counter]" +
      choice_progression[progression_counter]
  );
  another_counter = 0 
  selection_var = 0;
  determine_selection();
  arr_again = arr.replace(/\n/g, " ");
  text_val_split = arr_again.split(" ").join("");
  text_val_split = text_val_split.slice(0, -1);
  text_val_split = text_val_split.split(",");
  array_of_moves = text_val_split;
  console.log(array_of_moves);
  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";

  //  for(var j = 0; j < arrsplit.length; j++) {
  //  var tr = tableRef.insertRow()
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode(arrsplit[j]))
  // td.style.border = '1px solid black';

  //  }
  var table_ = document.getElementById("my-table");
  $("#myTextAreaSummary").val(arr_info);
  var totalRowCount = table_.rows.length; // 5
  document.getElementById("replace_number").innerHTML = "hi_world";

  var config = {
    //Spanish Opening
    position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "none";

  empty_fen = [];
  for (var j = 0; j < array_of_moves.length; j++) {
    board.move(array_of_moves[j]);
    empty_fen.push(board.fen());
    console.log(board.fen());
  }
  empty_fen.unshift("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";
  for (var j = 0; j < empty_fen.length; j++) {
    var tr = tableRef.insertRow();
    var td1 = tr.insertCell()
    td1.appendChild(document.createTextNode(j))
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(empty_fen[j]));
    td.style.border = "1px solid black";
  }

  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "block";

  console.log(empty_fen);




  $("#ProgressionChoice").val(progression_counter + 1);
  progression_counter =
    (progression_counter + 1) % selection_progression.length;
};

selection_var = 0;

move_board_counter_ = 0;

$("#move_board").keypress(function (e) {
  if (e.which == 13) {
    text_val = $("#move_board").val();
    text_val_is_ = text_val.split("");
    first_char_0 = parseInt(text_val_is_[0]);
    console.log(first_char_0);
    if (Number.isInteger(first_char_0)) {
      if (text_val.length < 4) {
        console.log("#");
        document.getElementById("movenumber").innerHTML = parseInt(text_val);
        console.log(short_array_of_moves);
        board.move(short_array_of_moves[parseInt(text_val) - 1]);
        move_board_counter_ = parseInt(text_val) - 1;
      } else {
        var config = {
          //Spanish Opening
          position: text_val,
          pieceTheme:
            "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
          draggable: true,
          dropOffBoard: "snapback",
          onDrop: onDrop
        };
        board = Chessboard("myBoard", config);
      }
    } else {
      if (text_val.length > 1) {
        if (text_val.includes(",")) {
          text_val_split = text_val.split(" ").join("");
          text_val_split = text_val_split.split(",");
          short_array_of_moves = text_val_split;
          short_array_of_moves = short_array_of_moves.filter(Boolean);
          console.log(short_array_of_moves);
          document.getElementById(
            "board_array"
          ).innerHTML = short_array_of_moves;
          move_board_counter_ = -1;
        } else {
          console.log("it is a fen position");
          var config = {
            //Spanish Opening
            position: text_val,
            pieceTheme:
              "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
            draggable: true,
            dropOffBoard: "snapback",
            onDrop: onDrop
          };
          board = Chessboard("myBoard", config);
        }
      } else {
        move_board_counter_ = move_board_counter_ + 1;
        movenumber_id = move_board_counter_ + 1;
        document.getElementById("movenumber").innerHTML = movenumber_id;
        console.log(move_board_counter_);
        board.move(short_array_of_moves[move_board_counter_]);
      }
    }
    document.getElementById("move_board").value = "";
  }
});

text_val = 1;
number_val = parseInt(text_val);
number_val_comp = number_val - 1;
arr = logical_chess_list[0];


$("#text_chess1").keypress(function (e) {
  if (e.which == 13) {
        text_val = $("#text_chess1").val();
        if (text_val.includes("/")) {
          console.log('should be a FEN')
          text_val_is_1 = text_val.split(" ")
          var config = {
      //Spanish Opening
            position: text_val_is_1[0],
            pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
            draggable: true,
            dropOffBoard: "snapback",
            onDrop: onDrop
        };
            board = Chessboard("myBoard", config);
            entered_fen = text_val_is_1
        } else {
          text_val_is_1 = text_val.split("");
          first_char_0_1 = parseInt(text_val_is_1[0]);
          if (Number.isInteger(first_char_0_1)) {
            number_of_text_c = parseInt(text_val) -1           
            var config = {
      //Spanish Opening
                position: fen_list[number_of_text_c],
                pieceTheme:
        "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
                draggable: true,
                dropOffBoard: "snapback",
                onDrop: onDrop
        };
            board = Chessboard("myBoard", config);
            entered_fen = fen_list[number_of_text_c]
        }
        }
        document.getElementById("text_chess_1").value = ""
        

  }
});

entered_fen  = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'



 $("#Selection").val(selection_progression[progression_counter]);
  $("#Choice").val(choice_progression[progression_counter]);
  console.log(
    "selection_progression[progression_counter]" +
      selection_progression[progression_counter]
  );
  console.log(
    "choice_progression[progression_counter]" +
      choice_progression[progression_counter]
  );
  another_counter = 0 
  selection_var = 0;
  determine_selection();
  arr_again = arr.replace(/\n/g, " ");
  text_val_split = arr_again.split(" ").join("");
  text_val_split = text_val_split.slice(0, -1);
  text_val_split = text_val_split.split(",");
  array_of_moves = text_val_split;
  console.log(array_of_moves);
  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";

  //  for(var j = 0; j < arrsplit.length; j++) {
  //  var tr = tableRef.insertRow()
  // var td = tr.insertCell();
  // td.appendChild(document.createTextNode(arrsplit[j]))
  // td.style.border = '1px solid black';

  //  }
  var table_ = document.getElementById("my-table");
  $("#myTextAreaSummary").val(arr_info);
  var totalRowCount = table_.rows.length; // 5
  document.getElementById("replace_number").innerHTML = "hi_world";

  var config = {
    //Spanish Opening
    position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
    pieceTheme:
      "https://nothingtoseeheredude.netlify.app/img/chesspieces/wikipedia/{piece}.png",
    draggable: true,
    dropOffBoard: "snapback",
    onDrop: onDrop
  };
  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "none";

  empty_fen = [];
  for (var j = 0; j < array_of_moves.length; j++) {
    board.move(array_of_moves[j]);
    empty_fen.push(board.fen());
    console.log(board.fen());
  }
  empty_fen.unshift("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");

  var tableRef = document.getElementsByTagName("table")[3];
  tableRef.innerHTML = "";
  for (var j = 0; j < empty_fen.length; j++) {
    var tr = tableRef.insertRow();
    var td1 = tr.insertCell()
    td1.appendChild(document.createTextNode(j))
    var td = tr.insertCell();
    td.appendChild(document.createTextNode(empty_fen[j]));
    td.style.border = "1px solid black";
  }

  board = Chessboard("myBoard", config);
  document.getElementById("myBoard").style.display = "block";

  console.log(empty_fen);




fen_list_retrieve = {
  'r3kbnr/ppp1q1pp/2np4/4p3/2B1P1b1/2P2N2/PP1N1PPP/R1BQK2R' : 'c4-g8,h8-g8,d1-b3,',
  '2kr1bnr/1pp3pp/3pq3/n3p1N1/P3P3/2P4P/3N1PP1/R1BQK2R' : 'e6-f6,d2-b3,a5-c6,a4-a5,h7-h6,g5-f3,g7-g5,a5-a6,b7-b6,c1-e3,c8-b8,b3-d2,f6-e6,d1-a4,d6-d5,e4-d5,d8-d5,a4-b3,',
}


