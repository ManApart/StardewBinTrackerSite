const sampleData = `Grandpa,Hope,2016040393225
0,0,0,Hazelnut,5,6,6,79,Corn,10,42,5,64,Artichoke,7,32,9,220,Hazelnut,9,28,18,19,Eggplant,5,44,16,35,Cranberries Jelly,2,7,16,190,Cranberries,8,50,18,163,Corn,6,20,16,33,Duck Mayonnaise,4,38,6,178,Eggplant,7,38,5,6
0,0,1,Cranberries Jelly,2,21,5,56,Corn,4,42,5,175
0,1,0,Mayonnaise,9,9,16,26,Goat Cheese,3,48,18,168,Yam,12,36,18,119,Eggplant,4,5,6,103
1,0,4,Mayonnaise,2,33,18,48,Eggplant,4,31,18,209,Corn,8,23,5,3,Cranberries,11,28,18,208,Yam,6,35,6,195,Corn,3,11,16,140,Cheese,1,34,16,155,Duck Mayonnaise,6,42,18,107,Eggplant,11,21,16,92,Cheese,3,33,5,220
1,0,5,Pumpkin,12,50,16,37,Cranberries,13,33,18,2,Pumpkin,5,2,16,124,Sunflower,8,39,16,162
1,0,6,Eggplant,7,18,16,119,Corn,15,28,9,90,Artichoke,5,24,18,185,Eggplant,3,6,6,35,Goat Cheese,9,18,6,8,Cranberries,4,38,5,139,Pumpkin,11,39,6,73
1,0,7,Pumpkin,1,40,5,136,Yam,10,41,16,154,Corn,2,38,6,90,Hazelnut,9,32,6,129
1,0,8,Pumpkin,16,42,6,19,Mayonnaise,15,34,5,108,Yam,2,46,9,102,Goat Cheese,13,40,9,184,Sunflower,7,30,6,173,Hazelnut,13,34,5,26
1,0,9,Eggplant,6,45,16,92,Cranberries Jelly,17,41,16,65,Pumpkin,18,38,6,121,Mayonnaise,1,38,18,142,Eggplant,2,30,18,69,Cheese,12,26,16,207,Sunflower,1,18,16,133,Sunflower,9,46,5,68,Corn,13,17,18,0
1,0,10,Corn,5,3,16,200,Pumpkin,4,49,18,158,Hazelnut,19,20,16,13,Cheese,3,7,5,130
1,0,11,Eggplant,16,6,9,193,Eggplant,10,38,16,34,Cranberries,7,45,16,55
1,0,12,Pumpkin,8,7,9,164
1,0,13,Eggplant,16,26,6,154,Goat Cheese,1,48,9,92,Pumpkin,7,21,9,182,Artichoke,1,38,6,23,Hazelnut,4,6,9,176
1,0,14,Pumpkin,13,29,18,104,Goat Cheese,5,19,6,129
1,0,15,Mayonnaise,12,21,6,203,Duck Mayonnaise,9,30,18,98
1,0,16,Pumpkin,1,7,16,32,Hazelnut,17,46,18,78,Corn,14,4,6,22,Hazelnut,18,2,9,32,Pumpkin,9,5,6,191,Mayonnaise,9,44,16,198,Mayonnaise,17,5,16,140,Yam,4,34,5,100
1,0,17,Eggplant,6,47,9,30,Corn,3,4,6,32,Cranberries Jelly,4,29,18,22,Cheese,8,19,16,143,Sunflower,8,20,9,135,Cheese,21,20,5,23,Cranberries,20,33,9,95
1,0,18,Eggplant,17,3,16,81,Cranberries,24,29,9,145,Mayonnaise,8,42,16,100,Sunflower,19,3,16,79,Corn,26,39,6,127,Eggplant,20,38,6,163
1,0,19,Cranberries,25,31,9,53,Cranberries Jelly,9,43,5,187,Goat Cheese,8,34,16,137,Yam,2,41,16,15,Eggplant,27,27,5,72,Corn,13,15,6,68
1,0,20,Goat Cheese,2,27,18,74,Hazelnut,28,11,16,130,Cranberries Jelly,18,38,5,220,Artichoke,29,15,5,46,Pumpkin,6,6,9,185,Hazelnut,17,49,6,49,Eggplant,25,16,9,188,Hazelnut,14,47,5,103,Sunflower,21,9,9,212,Cranberries,26,50,5,36
1,0,21,Cranberries,30,9,9,32
1,0,22,Goat Cheese,25,37,6,65,Cranberries,22,26,9,176,Cheese,31,11,16,185,Cranberries,15,43,9,72,Mayonnaise,13,44,18,19,Cranberries,9,48,9,6,Mayonnaise,16,17,5,201,Sunflower,18,3,16,108,Cranberries Jelly,21,11,16,32,Yam,20,6,18,79
1,0,23,Artichoke,23,7,16,21,Sunflower,6,37,9,218,Cranberries Jelly,10,18,18,5,Cheese,1,50,5,186,Artichoke,31,10,16,59,Mayonnaise,3,17,5,13,Corn,17,44,5,181,Pumpkin,20,27,5,27,Sunflower,5,48,6,163
1,0,24,Cheese,7,2,18,162,Hazelnut,20,32,16,40,Artichoke,22,46,5,102,Cheese,22,18,6,70,Cranberries,1,9,9,119,Cranberries Jelly,1,11,5,120,Pumpkin,1,34,9,179,Artichoke,19,43,9,85,Artichoke,24,30,9,176,Artichoke,11,15,6,74
1,0,25,Artichoke,34,15,6,91,Pumpkin,17,24,18,197
1,0,26,Cheese,25,15,16,161,Eggplant,17,9,16,111,Pumpkin,22,41,6,164,Sunflower,6,7,16,143
1,0,27,Sunflower,8,49,6,57
1,0,28,Corn,18,20,5,201,Pumpkin,36,8,5,52,Cranberries,3,27,9,105,Goat Cheese,28,41,9,158,Cranberries,29,7,16,157,Cheese,8,41,16,104,Corn,34,12,9,15
1,1,1,Hazelnut,10,20,6,206,Cheese,30,25,9,124,Duck Mayonnaise,34,19,9,56,Mayonnaise,29,34,16,67,Sunflower,3,40,16,54
1,1,2,Eggplant,28,49,5,83,Goat Cheese,12,42,16,192,Eggplant,38,46,5,125,Mayonnaise,7,28,16,218,Yam,17,44,5,29,Cranberries,25,35,16,169
1,1,3,Mayonnaise,35,39,18,184,Pumpkin,15,31,18,185,Mayonnaise,40,4,18,119,Yam,23,31,5,78,Eggplant,34,46,18,157
1,1,4,Yam,22,8,5,164,Cranberries,27,22,6,124
1,1,5,Corn,25,28,9,187,Cheese,20,18,9,8,Mayonnaise,25,2,16,60,Sunflower,4,40,16,98,Yam,29,4,5,98,Yam,23,33,5,151,Goat Cheese,33,47,9,15
1,1,6,Sunflower,5,49,16,46,Sunflower,4,19,5,73,Pumpkin,34,31,9,53,Corn,7,16,18,133,Hazelnut,6,19,9,83,Pumpkin,36,10,5,97,Mayonnaise,24,5,6,23,Pumpkin,38,18,6,96,Hazelnut,26,39,5,139
1,1,7,Corn,44,10,6,62,Corn,8,8,9,135,Duck Mayonnaise,32,24,6,13,Cranberries Jelly,26,22,9,13,Duck Mayonnaise,25,25,5,149,Cheese,5,45,9,207,Cranberries Jelly,8,36,9,11,Sunflower,29,36,16,117
1,1,8,Cranberries Jelly,43,49,18,78,Duck Mayonnaise,37,30,16,48,Duck Mayonnaise,42,45,18,51,Hazelnut,24,34,5,15
1,1,9,Eggplant,6,44,5,194,Corn,31,28,16,6,Corn,37,44,6,137,Pumpkin,43,4,18,185
1,1,10,Cranberries Jelly,7,38,6,69,Sunflower,16,13,18,26,Cranberries,31,6,5,19,Sunflower,36,14,6,167
1,1,11,Pumpkin,35,9,9,13,Corn,4,7,18,39,Hazelnut,23,5,5,28
1,1,12,Goat Cheese,46,23,16,135,Yam,12,8,6,54,Cheese,15,50,9,181,Pumpkin,39,40,18,148
1,1,13,Artichoke,23,22,5,160,Pumpkin,48,25,16,176,Corn,42,12,16,117,Corn,12,23,6,94,Mayonnaise,39,14,16,91
1,1,14,Sunflower,41,27,5,135,Corn,38,13,6,204,Corn,11,27,5,10,Pumpkin,47,29,18,88,Eggplant,29,35,9,17,Corn,48,11,5,23,Artichoke,3,2,6,85
1,1,15,Eggplant,46,17,16,23,Mayonnaise,29,33,9,49,Sunflower,39,13,9,118,Eggplant,21,10,5,24,Corn,6,45,9,124,Pumpkin,17,24,9,76,Artichoke,42,10,18,185,Sunflower,38,10,5,4,Artichoke,49,43,16,117,Hazelnut,48,9,6,43
1,1,16,Cranberries,50,2,18,36,Artichoke,24,41,18,110,Duck Mayonnaise,18,23,16,187
1,1,17,Corn,43,45,9,17,Cranberries,15,37,9,75,Cheese,49,40,6,125,Cheese,32,9,16,110
1,1,18,Sunflower,55,39,16,48,Hazelnut,5,20,18,26,Artichoke,49,21,9,126
1,1,19,Hazelnut,32,47,9,18,Cranberries,51,34,9,113,Cranberries,22,44,18,212,Artichoke,9,43,5,41,Pumpkin,35,2,9,7,Corn,37,29,9,193
1,1,20,Cranberries Jelly,11,17,16,39,Cranberries Jelly,31,28,18,125
1,1,21,Duck Mayonnaise,44,15,6,33,Artichoke,49,37,6,178,Goat Cheese,13,43,16,73,Cranberries Jelly,23,43,9,126,Eggplant,21,2,18,25,Goat Cheese,37,20,6,15
1,1,22,Cheese,7,15,6,149,Duck Mayonnaise,51,13,18,151,Sunflower,38,30,6,161,Corn,57,23,5,104,Corn,20,21,9,207,Duck Mayonnaise,49,14,6,94,Duck Mayonnaise,4,24,5,27
1,1,23,Hazelnut,35,49,16,103,Cranberries Jelly,25,25,9,114,Cheese,41,4,9,50,Goat Cheese,49,4,9,169,Pumpkin,47,42,16,29,Cheese,3,36,5,96,Corn,57,28,9,166,Goat Cheese,5,29,18,145
1,1,24,Yam,30,7,18,145,Hazelnut,5,21,18,186,Corn,21,8,5,135,Cheese,57,47,5,112,Goat Cheese,47,48,16,189,Goat Cheese,51,24,6,8
1,1,25,Mayonnaise,7,28,16,142
1,1,26,Cheese,21,21,6,195,Yam,14,41,18,99,Corn,46,33,9,158,Cranberries Jelly,37,19,5,66,Goat Cheese,18,44,16,6,Cranberries Jelly,20,17,6,155,Pumpkin,11,49,18,79,Pumpkin,61,44,5,199,Sunflower,12,21,6,157,Artichoke,36,10,18,57
1,1,27,Pumpkin,12,42,18,13,Sunflower,32,39,16,104,Cranberries,33,37,18,45
1,1,28,Hazelnut,24,19,16,82,Mayonnaise,20,48,9,195,Artichoke,30,39,16,83,Cheese,44,32,16,129
1,2,1,Mayonnaise,10,41,9,33,Cranberries,65,4,18,147,Pumpkin,35,15,5,4
1,2,2,Yam,51,15,18,45,Cranberries Jelly,31,23,18,197,Goat Cheese,7,21,16,213,Cranberries Jelly,12,47,16,26,Cranberries Jelly,19,20,6,23,Corn,3,17,6,13,Yam,26,9,18,218
1,2,3,Sunflower,3,13,9,199,Sunflower,13,9,18,202,Mayonnaise,29,9,5,60
1,2,4,Goat Cheese,68,31,16,145,Mayonnaise,26,49,16,139,Sunflower,31,23,18,27,Yam,22,41,16,151,Yam,61,10,16,199,Goat Cheese,58,34,18,87,Cheese,49,24,5,176
1,2,5,Pumpkin,54,10,16,119
1,2,6,Mayonnaise,62,11,18,95,Duck Mayonnaise,5,21,6,3,Corn,23,29,16,105,Pumpkin,50,34,5,122,Sunflower,25,38,5,194,Hazelnut,34,33,5,184,Cranberries,16,7,18,55,Goat Cheese,47,43,6,67,Mayonnaise,4,23,5,8
1,2,7,Eggplant,57,25,6,32,Pumpkin,69,19,18,169,Artichoke,48,32,6,129
1,2,8,Duck Mayonnaise,64,35,16,104,Goat Cheese,70,39,5,124,Pumpkin,4,27,9,132,Cranberries Jelly,24,14,18,66,Sunflower,71,26,5,209,Cranberries,5,37,16,51,Eggplant,54,25,18,52
1,2,9,Hazelnut,69,37,9,38,Sunflower,17,50,5,9,Artichoke,65,5,5,63,Duck Mayonnaise,1,49,16,84,Goat Cheese,46,7,9,60,Cranberries Jelly,26,42,16,211,Cranberries,66,12,18,194,Hazelnut,14,32,5,53,Yam,10,21,16,97,Hazelnut,33,20,16,93
1,2,10,Cheese,18,10,9,206,Corn,75,13,9,193,Corn,23,21,5,0,Cheese,9,13,16,156
1,2,11,Sunflower,13,30,6,73,Pumpkin,67,38,5,28
1,2,12,Duck Mayonnaise,71,18,5,81,Cheese,65,19,18,82,Goat Cheese,27,5,18,57
1,2,13,Cheese,76,27,9,12,Cranberries Jelly,17,40,16,4,Artichoke,47,6,9,193,Eggplant,26,50,9,49,Cranberries,49,36,18,194,Cranberries,72,19,5,85
1,2,14,Hazelnut,54,27,9,108,Pumpkin,13,4,18,142,Yam,35,27,18,65
1,2,15,Cranberries Jelly,11,30,18,98,Cranberries,37,38,5,77,Hazelnut,54,26,6,24,Eggplant,64,19,18,57
1,2,16,Cranberries Jelly,36,12,18,155,Hazelnut,74,38,18,98,Yam,13,35,5,184,Mayonnaise,59,2,6,92,Corn,3,31,6,64,Cheese,46,35,16,5,Hazelnut,19,43,16,114,Corn,54,43,9,88,Yam,22,25,16,179
1,2,17,Corn,42,30,16,210,Goat Cheese,36,30,5,124,Goat Cheese,76,36,9,25,Pumpkin,23,28,18,30,Sunflower,29,10,9,161,Eggplant,55,13,9,144,Hazelnut,16,48,16,88,Duck Mayonnaise,27,46,5,1,Sunflower,50,37,9,4
1,2,18,Sunflower,10,12,6,196,Corn,18,30,6,21,Pumpkin,72,14,9,140,Corn,6,15,18,204,Goat Cheese,57,19,18,93,Yam,10,47,5,11,Eggplant,12,4,9,83,Sunflower,11,22,5,136,Pumpkin,2,44,6,90,Mayonnaise,67,10,9,185
1,2,19,Pumpkin,61,17,16,2,Cheese,2,22,18,159,Hazelnut,26,32,6,78,Pumpkin,36,49,9,50,Artichoke,13,24,5,7,Yam,59,37,16,176
1,2,20,Artichoke,3,4,18,138,Cranberries Jelly,48,39,9,22,Duck Mayonnaise,57,13,16,149,Hazelnut,70,35,18,25,Corn,17,4,18,44,Cheese,34,7,9,134,Cranberries,55,43,18,171,Hazelnut,75,46,18,30,Eggplant,44,37,18,178,Eggplant,50,16,16,171
1,2,21,Hazelnut,86,27,5,66,Hazelnut,45,4,16,0,Corn,28,14,16,22,Hazelnut,23,6,5,23,Pumpkin,50,47,6,90,Cheese,64,20,5,82
1,2,22,Pumpkin,72,34,5,16,Corn,76,33,5,131,Eggplant,33,36,18,63,Goat Cheese,69,35,9,63,Duck Mayonnaise,47,40,18,180
1,2,23,Cranberries,32,34,18,40
1,2,24,Goat Cheese,64,2,18,208,Duck Mayonnaise,1,44,18,199,Artichoke,89,2,6,4,Artichoke,16,31,5,16,Duck Mayonnaise,12,6,18,15
1,2,25,Yam,8,36,9,184,Cheese,51,34,9,114,Cheese,61,44,5,162,Artichoke,21,50,5,147,Artichoke,57,43,5,80,Duck Mayonnaise,48,17,5,77,Duck Mayonnaise,6,3,5,63,Eggplant,86,31,9,122,Cheese,27,13,6,171,Artichoke,31,39,5,181
1,2,26,Sunflower,41,42,16,19,Cranberries,21,22,9,36,Cheese,13,34,18,147
1,2,27,Corn,85,21,9,42,Eggplant,77,48,5,38,Goat Cheese,50,44,5,165,Artichoke,69,18,16,174,Goat Cheese,19,19,6,120,Duck Mayonnaise,35,18,5,128,Eggplant,24,33,16,83,Mayonnaise,81,12,9,150
1,2,28,Yam,43,5,18,124,Pumpkin,48,46,6,145,Cranberries Jelly,41,14,9,191,Hazelnut,80,16,9,75,Pumpkin,50,27,5,132,Pumpkin,68,5,6,6,Artichoke,12,17,6,208
1,3,1,Cheese,88,3,9,98,Cranberries,76,2,6,34,Artichoke,28,37,18,212,Hazelnut,26,31,6,146
1,3,2,Mayonnaise,5,30,6,85
1,3,3,Duck Mayonnaise,49,38,6,201,Eggplant,76,27,6,99,Mayonnaise,9,48,5,21,Hazelnut,22,21,9,34,Yam,60,33,16,112,Cheese,96,35,6,192,Cranberries Jelly,45,16,16,87,Duck Mayonnaise,75,6,16,211,Cranberries Jelly,7,29,16,83,Corn,43,15,5,141
1,3,4,Mayonnaise,44,27,18,100,Cranberries,83,25,16,188,Corn,30,2,18,207,Yam,62,3,16,132,Duck Mayonnaise,2,23,18,66,Artichoke,34,33,6,29,Pumpkin,77,14,5,213,Duck Mayonnaise,82,26,5,0,Hazelnut,31,38,5,59
1,3,5,Hazelnut,30,43,16,197,Goat Cheese,16,14,9,187
1,3,6,Corn,93,31,6,20,Duck Mayonnaise,49,31,16,159,Duck Mayonnaise,87,34,6,161,Artichoke,31,10,9,153,Eggplant,38,19,9,149,Sunflower,50,19,9,81,Yam,23,35,16,208,Goat Cheese,32,32,6,218,Cranberries Jelly,90,17,5,96
1,3,7,Cheese,66,36,9,198
1,3,8,Eggplant,42,38,6,5,Cranberries Jelly,31,45,16,33,Cranberries,87,49,9,213,Mayonnaise,81,43,9,207,Cheese,85,47,18,97,Sunflower,9,39,18,104,Yam,23,22,16,104,Cranberries,85,32,9,107,Hazelnut,23,29,5,66
1,3,9,Sunflower,61,3,6,76
1,3,10,Corn,22,34,5,17,Eggplant,87,38,18,20,Duck Mayonnaise,91,26,18,36,Goat Cheese,7,7,9,201,Artichoke,56,37,6,103,Cheese,55,28,18,83
1,3,11,Cranberries Jelly,94,19,5,84,Artichoke,34,50,5,68,Mayonnaise,88,8,9,170,Cranberries,67,41,6,180,Mayonnaise,1,4,6,80,Cranberries,6,37,5,63,Cheese,58,29,16,70,Corn,23,38,9,190
1,3,12,Duck Mayonnaise,31,15,6,116,Mayonnaise,47,31,16,131
1,3,13,Mayonnaise,98,3,5,152,Cranberries,99,31,16,97,Artichoke,41,16,6,83,Pumpkin,53,9,16,135,Duck Mayonnaise,36,4,9,103,Mayonnaise,3,16,5,209,Goat Cheese,84,6,18,81,Cranberries,70,8,16,78,Eggplant,78,6,9,63
1,3,14,Cheese,3,36,18,51,Hazelnut,65,48,9,192
1,3,15,Cranberries,64,4,9,22
1,3,16,Eggplant,13,5,16,57,Cranberries,74,45,5,136,Pumpkin,65,32,5,12,Corn,2,35,16,192,Goat Cheese,85,38,5,174,Duck Mayonnaise,59,2,18,17
1,3,17,Hazelnut,56,5,9,168,Pumpkin,78,33,5,37,Artichoke,76,2,9,96,Duck Mayonnaise,82,10,5,150,Artichoke,67,18,6,102,Mayonnaise,89,13,16,75,Goat Cheese,92,29,6,25,Duck Mayonnaise,34,44,5,217,Eggplant,61,26,18,44,Sunflower,9,19,5,143
1,3,18,Mayonnaise,109,3,18,80,Pumpkin,32,27,18,54,Pumpkin,20,50,5,151,Artichoke,75,39,6,76,Cranberries,5,27,18,58,Mayonnaise,83,6,18,25,Goat Cheese,25,21,18,129,Duck Mayonnaise,18,19,5,181,Artichoke,75,31,16,59,Sunflower,92,28,5,170
1,3,19,Cranberries Jelly,76,38,18,51
1,3,20,Cheese,74,15,9,138,Yam,33,24,16,102
1,3,21,Goat Cheese,21,32,18,163,Yam,44,38,6,52,Mayonnaise,25,33,16,198
1,3,22,Cranberries Jelly,30,19,6,101,Sunflower,65,2,9,101,Mayonnaise,25,48,9,24,Cheese,26,29,5,130
1,3,23,Hazelnut,106,34,6,12,Sunflower,98,33,16,118
1,3,24,Corn,65,46,9,145,Artichoke,117,26,5,158,Corn,51,14,6,5,Hazelnut,19,3,18,124,Artichoke,75,7,6,176,Cheese,26,21,9,65
1,3,25,Artichoke,68,9,5,1,Sunflower,69,18,16,148,Goat Cheese,51,6,5,87,Mayonnaise,28,40,16,46,Corn,55,46,18,136,Mayonnaise,67,19,18,201,Pumpkin,28,16,5,85,Goat Cheese,105,33,18,180
1,3,26,Yam,38,47,18,184
1,3,27,Pumpkin,36,20,16,92,Mayonnaise,13,38,5,23,Yam,25,44,16,71,Eggplant,10,44,16,44,Yam,12,15,16,187,Sunflower,2,13,5,57
1,3,28,Mayonnaise,33,41,9,199,Sunflower,91,37,5,99,Hazelnut,33,8,6,75,Artichoke,109,21,18,180,Cheese,58,37,9,179,Mayonnaise,20,5,5,123,Artichoke,21,38,6,141
2,0,1,Pumpkin,74,23,6,104
2,0,2,Hazelnut,110,17,16,211
2,0,3,Artichoke,86,50,6,31,Eggplant,85,49,9,34
2,0,4,Cranberries,18,14,5,192,Cheese,5,41,18,144,Duck Mayonnaise,5,44,5,86,Artichoke,85,29,5,205
2,0,5,Cranberries Jelly,46,15,9,17,Yam,84,34,18,170,Sunflower,76,18,6,2,Duck Mayonnaise,123,27,6,76
2,0,6,Duck Mayonnaise,5,49,16,146,Eggplant,111,48,16,29,Goat Cheese,117,31,5,196,Cranberries,14,49,5,41,Pumpkin,98,16,9,141
2,0,7,Goat Cheese,77,37,9,58
2,0,8,Artichoke,77,36,5,8,Eggplant,104,29,16,220
2,0,9,Mayonnaise,81,8,6,138,Duck Mayonnaise,92,36,16,29,Corn,66,25,5,178,Eggplant,123,12,9,13,Duck Mayonnaise,48,47,16,92,Cranberries Jelly,118,18,5,112,Cranberries Jelly,115,4,6,215,Cranberries,111,6,16,63,Duck Mayonnaise,108,43,9,115,Yam,8,15,16,107
2,0,10,Sunflower,12,44,6,168
2,0,11,Mayonnaise,17,23,18,19,Cranberries,102,36,5,75,Artichoke,69,22,9,7,Eggplant,72,16,16,98,Yam,90,36,5,71,Yam,78,15,16,159,Cranberries,43,19,9,103,Cheese,117,13,6,132
2,0,12,Eggplant,114,29,9,22,Corn,41,20,9,197,Corn,19,29,16,187,Pumpkin,57,36,5,183,Mayonnaise,57,22,9,100,Cranberries Jelly,85,49,6,213,Hazelnut,123,5,9,41,Cheese,116,8,5,39
2,0,13,Hazelnut,51,19,16,153,Artichoke,6,6,5,203,Cheese,23,31,16,110,Cheese,109,45,18,199,Sunflower,7,21,9,46,Yam,31,47,18,42,Cheese,48,4,18,25
2,0,14,Sunflower,24,38,16,31
2,0,15,Pumpkin,62,34,6,85,Cranberries Jelly,31,29,5,30,Mayonnaise,56,27,16,98,Hazelnut,69,11,9,96
2,0,16,Cranberries Jelly,56,43,6,23,Corn,11,23,18,29,Artichoke,2,26,9,44,Mayonnaise,137,16,18,51,Duck Mayonnaise,81,10,16,30,Artichoke,99,50,6,152,Cranberries,6,27,5,133,Pumpkin,43,43,9,82,Yam,118,23,9,27
2,0,17,Eggplant,127,35,5,192,Eggplant,92,24,6,36
2,0,18,Goat Cheese,20,20,18,139,Mayonnaise,59,28,6,40,Pumpkin,99,43,6,157,Cranberries,44,33,18,68,Cranberries Jelly,134,32,16,169,Cranberries,10,26,5,24
2,0,19,Pumpkin,30,26,6,169,Duck Mayonnaise,137,40,16,67,Pumpkin,127,46,18,3,Cheese,70,39,6,187,Cranberries,35,4,6,103,Cheese,111,9,5,177,Cranberries Jelly,31,35,18,7,Cranberries Jelly,12,49,16,183,Cheese,81,28,5,114
2,0,20,Cranberries,106,9,9,30,Artichoke,39,49,9,7,Hazelnut,98,13,9,103,Cranberries,99,45,5,106,Goat Cheese,67,30,16,121,Cheese,138,46,6,94,Cheese,132,6,18,50,Cranberries,27,11,9,108,Mayonnaise,122,38,16,167
2,0,21,Cranberries Jelly,123,38,16,34,Sunflower,78,24,5,141,Artichoke,12,30,5,195,Duck Mayonnaise,52,46,6,169,Goat Cheese,35,3,6,164
2,0,22,Cheese,73,7,18,90,Mayonnaise,66,25,6,41
2,0,23,Goat Cheese,97,48,9,69,Duck Mayonnaise,80,50,18,56,Goat Cheese,104,39,18,51,Mayonnaise,73,19,16,127,Corn,37,23,16,121
2,0,24,Duck Mayonnaise,132,31,9,173,Mayonnaise,22,28,16,6,Cranberries,99,23,16,14,Cheese,41,25,9,93,Goat Cheese,7,6,9,181,Mayonnaise,102,40,9,218,Cheese,76,36,16,107,Mayonnaise,128,43,6,176,Cranberries Jelly,115,39,16,122,Corn,75,10,18,119
2,0,25,Mayonnaise,59,38,9,161,Sunflower,71,44,18,73
2,0,26,Yam,129,46,18,153,Yam,6,49,5,112,Cheese,109,43,9,67,Cranberries Jelly,85,30,5,180,Yam,33,13,5,175,Yam,65,41,6,121,Duck Mayonnaise,94,16,5,209,Sunflower,128,24,6,184,Yam,34,42,6,48
2,0,27,Duck Mayonnaise,69,6,16,172,Cranberries,103,7,6,47,Pumpkin,126,47,6,64,Cheese,110,16,5,92,Artichoke,144,42,6,132,Cranberries Jelly,1,29,6,153,Corn,18,30,9,205,Mayonnaise,52,8,16,217,Cranberries,119,12,6,110
2,0,28,Artichoke,99,48,16,85,Corn,31,7,9,17,Sunflower,68,15,18,180,Cranberries Jelly,104,16,5,131,Pumpkin,49,41,5,165,Cheese,25,17,18,27,Hazelnut,96,20,16,75,Duck Mayonnaise,99,6,18,141
2,1,1,Cranberries,139,24,6,164,Hazelnut,147,18,16,210,Mayonnaise,94,7,6,112,Eggplant,114,23,9,137,Duck Mayonnaise,105,6,9,214,Duck Mayonnaise,114,37,6,106,Yam,44,8,5,203,Sunflower,138,11,18,101,Cranberries Jelly,82,24,16,89,Goat Cheese,13,3,18,200
2,1,2,Cheese,121,49,16,158,Cranberries,75,40,5,41,Artichoke,150,18,18,113
2,1,3,Sunflower,76,11,6,152,Mayonnaise,43,16,18,183
2,1,4,Pumpkin,21,30,5,131
2,1,5,Eggplant,117,15,6,215,Corn,20,48,5,160,Pumpkin,140,16,16,216,Mayonnaise,42,12,9,149,Pumpkin,26,39,9,128,Cheese,138,44,16,120,Sunflower,61,3,9,74,Artichoke,53,33,5,188,Cheese,124,44,18,113,Corn,39,18,5,157
2,1,6,Artichoke,40,39,16,105,Hazelnut,145,23,9,70,Hazelnut,88,32,18,78,Goat Cheese,9,31,18,197,Goat Cheese,83,11,5,11,Hazelnut,75,5,16,207,Sunflower,38,47,18,178,Duck Mayonnaise,7,4,16,121,Hazelnut,151,35,6,92,Cranberries Jelly,30,47,16,46
2,1,7,Mayonnaise,96,18,6,158,Corn,155,31,16,129,Yam,34,33,5,181,Yam,116,7,16,64,Pumpkin,90,9,18,183,Pumpkin,59,47,6,182,Eggplant,132,24,16,109
2,1,8,Cranberries,135,34,18,199,Corn,108,11,9,8
2,1,9,Pumpkin,36,2,18,48,Duck Mayonnaise,31,5,18,87,Corn,99,44,5,214,Eggplant,126,27,6,122,Hazelnut,64,48,9,5,Sunflower,27,31,9,95,Corn,104,16,18,212,Cranberries Jelly,30,40,18,215,Pumpkin,58,34,6,56,Eggplant,105,45,9,89
2,1,10,Sunflower,87,44,6,215,Hazelnut,69,39,5,13,Cranberries Jelly,84,40,6,129,Mayonnaise,19,42,16,66,Corn,12,22,18,132,Duck Mayonnaise,11,11,5,115,Cranberries Jelly,149,25,6,0
2,1,11,Hazelnut,75,19,18,206,Cheese,68,16,16,101,Duck Mayonnaise,92,27,9,93,Cheese,3,44,16,145,Corn,103,45,6,89,Hazelnut,113,19,9,172
2,1,12,Pumpkin,144,36,5,61
2,1,13,Hazelnut,7,10,18,103,Cranberries,119,26,16,81,Goat Cheese,99,15,18,96,Hazelnut,66,31,5,139,Corn,120,11,18,5,Pumpkin,64,2,6,139,Pumpkin,20,28,16,16
2,1,14,Mayonnaise,116,38,18,174,Duck Mayonnaise,14,27,5,65,Mayonnaise,162,37,9,30,Pumpkin,149,14,6,150
2,1,15,Corn,146,17,16,216,Mayonnaise,70,21,16,119,Yam,1,22,18,74
2,1,16,Artichoke,86,18,9,195,Pumpkin,16,47,5,171,Mayonnaise,158,25,5,48,Cheese,147,37,5,59,Corn,34,48,18,215,Sunflower,57,44,9,43
2,1,17,Cranberries Jelly,3,31,6,106
2,1,18,Duck Mayonnaise,73,19,16,210,Yam,9,17,6,53,Duck Mayonnaise,54,28,16,207,Duck Mayonnaise,89,45,18,79,Yam,95,19,9,94,Cranberries,104,28,6,18,Hazelnut,18,2,16,215,Cranberries Jelly,163,49,6,94
2,1,19,Eggplant,146,50,6,97,Hazelnut,27,50,5,46,Goat Cheese,109,32,16,39,Corn,114,26,6,45,Duck Mayonnaise,4,43,9,103,Goat Cheese,6,9,16,136,Cranberries,106,41,6,94,Eggplant,156,15,5,6,Hazelnut,136,38,18,181
2,1,20,Pumpkin,48,27,9,131,Cranberries Jelly,75,25,18,82,Hazelnut,17,18,18,186,Cranberries Jelly,8,20,18,116,Yam,63,39,16,218,Yam,73,18,16,172,Pumpkin,54,17,16,88
2,1,21,Pumpkin,10,8,5,183
2,1,22,Artichoke,128,17,16,60,Pumpkin,145,47,16,141,Yam,91,11,16,109,Pumpkin,157,39,5,182,Cheese,129,43,16,64
2,1,23,Hazelnut,57,16,6,110,Sunflower,69,39,18,9,Cranberries,170,34,5,154,Goat Cheese,77,32,5,200,Duck Mayonnaise,129,16,16,214,Cranberries,28,49,9,43,Corn,132,12,9,197
2,1,24,Pumpkin,59,10,6,45,Mayonnaise,173,47,5,74,Pumpkin,98,16,16,79,Cranberries Jelly,163,36,18,40,Pumpkin,5,41,9,8,Duck Mayonnaise,74,33,5,201,Cranberries,13,34,16,38
2,1,25,Pumpkin,102,32,16,160,Pumpkin,118,33,5,66
2,1,26,Cranberries,97,41,16,211,Goat Cheese,71,44,18,97,Pumpkin,93,21,16,149,Goat Cheese,63,24,9,20,Duck Mayonnaise,25,21,18,137,Sunflower,45,18,9,123,Yam,75,19,5,44
2,1,27,Eggplant,161,30,5,128,Goat Cheese,144,29,9,126,Hazelnut,109,29,16,101,Cranberries Jelly,37,40,18,70,Pumpkin,39,17,5,154
2,1,28,Eggplant,43,46,6,197,Sunflower,52,40,6,42,Pumpkin,46,16,6,190,Sunflower,34,50,6,40,Cheese,27,13,18,171,Eggplant,33,19,9,59,Eggplant,122,15,16,67,Cheese,15,32,18,136,Yam,158,6,16,103
2,2,1,Hazelnut,101,34,6,172,Mayonnaise,29,44,6,212,Duck Mayonnaise,43,42,16,27,Sunflower,21,49,18,158
2,2,2,Duck Mayonnaise,60,49,18,90,Eggplant,73,26,9,4,Hazelnut,163,42,16,45,Pumpkin,129,9,9,170,Cheese,136,32,6,194,Yam,47,5,5,34,Cheese,160,31,9,34,Mayonnaise,45,3,16,68,Corn,174,33,6,139,Hazelnut,43,36,5,140
2,2,3,Cranberries,111,29,9,82,Corn,101,29,9,202,Hazelnut,98,17,18,112,Cranberries,45,26,6,135,Duck Mayonnaise,39,22,18,30,Duck Mayonnaise,24,10,16,191,Cranberries,175,27,18,180
2,2,4,Sunflower,21,7,9,219,Cranberries Jelly,138,37,9,105,Yam,110,47,9,66,Sunflower,152,26,6,8
2,2,5,Mayonnaise,2,2,6,148,Duck Mayonnaise,181,41,18,89,Yam,133,41,6,184,Corn,103,9,6,68,Duck Mayonnaise,178,45,18,0,Goat Cheese,107,39,16,136,Yam,7,32,9,159,Cranberries,124,38,9,57,Corn,164,6,9,16
2,2,6,Mayonnaise,67,40,6,128,Cheese,38,24,18,219
2,2,7,Eggplant,2,11,16,73,Corn,45,23,6,202,Cheese,24,47,6,53,Eggplant,68,22,18,84,Mayonnaise,128,33,5,29,Mayonnaise,180,20,5,42,Cranberries,21,9,6,120
2,2,8,Yam,36,34,18,29,Duck Mayonnaise,156,43,5,101,Mayonnaise,181,9,18,1,Pumpkin,132,25,9,140
2,2,9,Mayonnaise,20,35,16,161,Eggplant,170,38,18,106
2,2,10,Pumpkin,64,29,5,200
2,2,11,Cranberries Jelly,27,30,16,108,Sunflower,70,18,16,32,Corn,183,38,6,44,Mayonnaise,165,49,9,126,Duck Mayonnaise,162,9,6,144
2,2,12,Cheese,159,34,9,107,Cranberries,89,16,5,195,Pumpkin,32,46,5,50,Cranberries Jelly,27,32,5,217,Hazelnut,4,30,18,196,Artichoke,112,40,9,201,Cheese,18,45,9,148
2,2,13,Corn,109,46,9,38,Duck Mayonnaise,31,17,9,189,Goat Cheese,158,9,5,138,Mayonnaise,154,9,18,48,Goat Cheese,35,4,18,105,Pumpkin,48,40,16,93,Goat Cheese,172,5,18,118,Mayonnaise,186,22,9,207,Cranberries Jelly,164,2,5,147,Corn,70,36,9,91
2,2,14,Mayonnaise,135,44,5,18,Corn,173,15,6,91,Duck Mayonnaise,130,7,9,77,Eggplant,39,8,6,28
2,2,15,Artichoke,48,37,9,80,Hazelnut,145,10,16,10,Cranberries,79,44,5,121,Cranberries,26,30,9,135,Mayonnaise,85,40,18,16,Yam,44,4,6,138,Cranberries Jelly,154,23,18,27,Artichoke,93,29,16,168,Yam,39,37,18,50,Hazelnut,85,47,18,162
2,2,16,Goat Cheese,1,33,18,151,Corn,133,38,9,179,Eggplant,113,39,16,217,Cranberries,119,47,18,159,Pumpkin,81,8,16,191,Cranberries Jelly,148,11,18,155,Cranberries,124,32,9,182
2,2,17,Hazelnut,116,49,9,21,Pumpkin,12,16,18,146,Cranberries,133,47,18,209,Cranberries Jelly,92,45,18,162,Sunflower,129,36,6,129,Corn,27,50,5,175
2,2,18,Cheese,136,24,5,143
2,2,19,Duck Mayonnaise,97,46,18,31,Artichoke,6,29,18,81,Eggplant,171,23,18,114,Cranberries,100,39,5,14
2,2,20,Corn,32,14,5,172,Duck Mayonnaise,66,19,16,47,Cranberries,10,19,9,53,Cheese,133,7,18,62,Corn,145,39,18,194
2,2,21,Yam,165,40,16,156,Sunflower,24,42,6,93,Goat Cheese,138,7,9,173,Duck Mayonnaise,173,10,6,54,Sunflower,97,26,16,13
2,2,22,Cranberries,24,39,6,78
2,2,23,Cranberries,159,2,18,142,Cheese,70,25,16,163,Cranberries,167,6,9,190,Pumpkin,67,30,18,132,Eggplant,41,26,5,103
2,2,24,Yam,23,22,9,120,Duck Mayonnaise,71,5,18,41,Mayonnaise,153,16,9,86,Cranberries Jelly,166,30,6,103,Cranberries Jelly,95,30,6,23,Duck Mayonnaise,125,25,18,177,Artichoke,106,32,18,17,Hazelnut,115,32,5,212,Cheese,157,29,18,60
2,2,25,Hazelnut,87,18,9,197,Goat Cheese,49,41,18,149,Cranberries,162,49,16,94,Cranberries Jelly,9,21,18,86,Sunflower,10,44,18,83
2,2,26,Sunflower,34,47,16,55,Pumpkin,195,32,9,177,Artichoke,174,19,6,67,Duck Mayonnaise,34,5,18,177,Duck Mayonnaise,136,22,5,28,Cranberries,164,11,6,32
2,2,27,Artichoke,86,45,9,20,Sunflower,53,25,6,164,Cheese,33,7,16,188
2,2,28,Cheese,94,21,5,33,Cranberries,158,9,5,84,Eggplant,78,41,9,92
2,3,1,Eggplant,66,2,5,69,Cranberries Jelly,113,35,5,75,Cranberries,50,7,9,165
2,3,2,Yam,170,48,6,197,Cheese,193,28,16,216,Mayonnaise,180,13,5,138,Mayonnaise,187,34,9,125,Artichoke,190,25,5,64,Cranberries,75,49,9,142,Cranberries,57,19,5,94,Cranberries,197,30,16,216,Corn,113,29,9,44,Artichoke,88,49,6,164
2,3,3,Hazelnut,87,34,16,184,Corn,109,20,18,51,Cranberries,22,30,16,89,Mayonnaise,94,34,16,213,SomeFish,208,45,20,166,Mayonnaise,165,15,11,160,Corn,2,24,9,213,Hazelnut,130,30,5,72,Hazelnut,120,12,18,192
2,3,4,Cranberries,72,40,18,210
`