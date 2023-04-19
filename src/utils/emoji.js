define(["jquery", "underscore"], function ($, _) {

    var raw_data = {
        "smiles_and_people": [{code:0x1f600,x:9,y:3},{code:0x1f603,x:12,y:3},{code:0x1f604,x:13,y:3},{code:0x1f601,x:10,y:3},{code:0x1f606,x:1,y:4},{code:0x1f605,x:0,y:4},{code:0x1f923,x:6,y:10},{code:0x1f602,x:11,y:3},{code:0x1f642,x:5,y:8},{code:0x1f643,x:6,y:8},{code:0x1f609,x:4,y:4},{code:0x1f60a,x:5,y:4},{code:0x1f607,x:2,y:4},{code:0x1f60d,x:8,y:4},{code:0x1f929,x:12,y:10},{code:0x1f617,x:4,y:5},{code:0x263a,x:14,y:5},{code:0x1f61a,x:7,y:5},{code:0x1f619,x:6,y:5},{code:0x1f60b,x:6,y:4},{code:0x1f61b,x:8,y:5},{code:0x1f61c,x:9,y:5},{code:0x1f92a,x:13,y:10},{code:0x1f61d,x:10,y:5},{code:0x1f911,x:10,y:9},{code:0x1f917,x:2,y:10},{code:0x1f92d,x:2,y:11},{code:0x1f92b,x:0,y:11},{code:0x1f914,x:13,y:9},{code:0x1f910,x:9,y:9},{code:0x1f928,x:11,y:10},{code:0x1f610,x:11,y:4},{code:0x1f611,x:12,y:4},{code:0x1f636,x:7,y:7},{code:0x1f60f,x:10,y:4},{code:0x1f612,x:13,y:4},{code:0x1f644,x:7,y:8},{code:0x1f62c,x:11,y:6},{code:0x1f925,x:8,y:10},{code:0x1f60c,x:7,y:4},{code:0x1f614,x:1,y:5},{code:0x1f62a,x:9,y:6},{code:0x1f924,x:7,y:10},{code:0x1f634,x:5,y:7},{code:0x1f637,x:8,y:7},{code:0x1f912,x:11,y:9},{code:0x1f915,x:0,y:10},{code:0x1f922,x:5,y:10},{code:0x1f92e,x:3,y:11},{code:0x1f927,x:10,y:10},{code:0x1f975,x:7,y:12},{code:0x1f976,x:8,y:12},{code:0x1f974,x:6,y:12},{code:0x1f635,x:6,y:7},{code:0x1f92f,x:4,y:11},{code:0x1f920,x:3,y:10},{code:0x1f973,x:5,y:12},{code:0x1f60e,x:9,y:4},{code:0x1f913,x:12,y:9},{code:0x1f9d0,x:1,y:13},{code:0x1f615,x:2,y:5},{code:0x1f61f,x:12,y:5},{code:0x1f641,x:4,y:8},{code:0x2639,x:14,y:4},{code:0x1f62e,x:13,y:6},{code:0x1f62f,x:0,y:7},{code:0x1f632,x:3,y:7},{code:0x1f633,x:4,y:7},{code:0x1f97a,x:9,y:12},{code:0x1f626,x:5,y:6},{code:0x1f627,x:6,y:6},{code:0x1f628,x:7,y:6},{code:0x1f630,x:1,y:7},{code:0x1f625,x:4,y:6},{code:0x1f622,x:1,y:6},{code:0x1f62d,x:12,y:6},{code:0x1f631,x:2,y:7},{code:0x1f616,x:3,y:5},{code:0x1f623,x:2,y:6},{code:0x1f61e,x:11,y:5},{code:0x1f613,x:0,y:5},{code:0x1f629,x:8,y:6},{code:0x1f62b,x:10,y:6},{code:0x1f624,x:3,y:6},{code:0x1f621,x:0,y:6},{code:0x1f620,x:13,y:5},{code:0x1f92c,x:1,y:11},{code:0x1f608,x:3,y:4},{code:0x1f47f,x:9,y:2},{code:0x1f480,x:10,y:2},{code:0x2620,x:14,y:3},{code:0x1f4a9,x:4,y:3},{code:0x1f921,x:4,y:10},{code:0x1f479,x:3,y:2},{code:0x1f47a,x:4,y:2},{code:0x1f47b,x:5,y:2},{code:0x1f47d,x:7,y:2},{code:0x1f47e,x:8,y:2},{code:0x1f916,x:1,y:10},{code:0x1f63a,x:11,y:7},{code:0x1f638,x:9,y:7},{code:0x1f639,x:10,y:7},{code:0x1f63b,x:12,y:7},{code:0x1f63c,x:13,y:7},{code:0x1f63d,x:0,y:8},{code:0x1f640,x:3,y:8},{code:0x1f63f,x:2,y:8},{code:0x1f63e,x:1,y:8},{code:0x1f648,x:11,y:8},{code:0x1f649,x:12,y:8},{code:0x1f64a,x:13,y:8},{code:0x1f476,x:0,y:2},{code:0x1f9d2,x:3,y:13},{code:0x1f466,x:12,y:0},{code:0x1f467,x:13,y:0},{code:0x1f471,x:9,y:1},{code:0x1f9d4,x:5,y:13},{code:0x1f9d3,x:4,y:13},{code:0x1f474,x:12,y:1},{code:0x1f475,x:13,y:1},{code:0x1f64d,x:1,y:9},{code:0x1f64e,x:2,y:9},{code:0x1f645,x:8,y:8},{code:0x1f646,x:9,y:8},{code:0x1f481,x:11,y:2},{code:0x1f64b,x:0,y:9},{code:0x1f647,x:10,y:8},{code:0x1f926,x:9,y:10},{code:0x1f937,x:10,y:11},{code:0x1f46e,x:6,y:1},{code:0x1f575,x:6,y:3},{code:0x1f482,x:12,y:2},{code:0x1f477,x:1,y:2},{code:0x1f934,x:7,y:11},{code:0x1f478,x:2,y:2},{code:0x1f473,x:11,y:1},{code:0x1f472,x:10,y:1},{code:0x1f9d5,x:6,y:13},{code:0x1f935,x:8,y:11},{code:0x1f470,x:8,y:1},{code:0x1f930,x:5,y:11},{code:0x1f931,x:6,y:11},{code:0x1f47c,x:6,y:2},{code:0x1f385,x:0,y:0},{code:0x1f936,x:9,y:11},{code:0x1f9b8,x:10,y:12},{code:0x1f9b9,x:11,y:12},{code:0x1f9d9,x:10,y:13},{code:0x1f9da,x:11,y:13},{code:0x1f9db,x:12,y:13},{code:0x1f9dc,x:13,y:13},{code:0x1f9dd,x:14,y:0},{code:0x1f9de,x:14,y:1},{code:0x1f9df,x:14,y:2},{code:0x1f486,x:0,y:3},{code:0x1f487,x:1,y:3},{code:0x1f6b6,x:6,y:9},{code:0x1f3c3,x:2,y:0},{code:0x1f483,x:13,y:2},{code:0x1f57a,x:7,y:3},{code:0x1f574,x:5,y:3},{code:0x1f46f,x:7,y:1},{code:0x1f9d6,x:7,y:13},{code:0x1f9d7,x:8,y:13},{code:0x1f93a,x:13,y:11},{code:0x1f3c7,x:4,y:0},{code:0x26f7,x:14,y:6},{code:0x1f3c2,x:1,y:0},{code:0x1f3cc,x:7,y:0},{code:0x1f3c4,x:3,y:0},{code:0x1f6a3,x:3,y:9},{code:0x1f3ca,x:5,y:0},{code:0x26f9,x:14,y:7},{code:0x1f3cb,x:6,y:0},{code:0x1f6b4,x:4,y:9},{code:0x1f6b5,x:5,y:9},{code:0x1f938,x:11,y:11},{code:0x1f93c,x:0,y:12},{code:0x1f93d,x:1,y:12},{code:0x1f93e,x:2,y:12},{code:0x1f939,x:12,y:11},{code:0x1f9d8,x:9,y:13},{code:0x1f6c0,x:7,y:9},{code:0x1f6cc,x:8,y:9},{code:0x1f46d,x:5,y:1},{code:0x1f46b,x:3,y:1},{code:0x1f46c,x:4,y:1},{code:0x1f48f,x:2,y:3},{code:0x1f491,x:3,y:3},{code:0x1f46a,x:2,y:1},{code:0x1f5e3,x:8,y:3},{code:0x1f464,x:10,y:0},{code:0x1f465,x:11,y:0},{code:0x1f463,x:9,y:0}],
        "body_and_clothes": [{code:0x1f44b,x:3,y:1},{code:0x1f91a,x:10,y:7},{code:0x1f590,x:7,y:6},{code:0x270b,x:9,y:10},{code:0x1f596,x:9,y:6},{code:0x1f44c,x:4,y:1},{code:0x270c,x:10,y:10},{code:0x1f91e,x:3,y:8},{code:0x1f91f,x:4,y:8},{code:0x1f918,x:8,y:7},{code:0x1f919,x:9,y:7},{code:0x1f448,x:0,y:1},{code:0x1f449,x:1,y:1},{code:0x1f446,x:9,y:0},{code:0x1f595,x:8,y:6},{code:0x1f447,x:10,y:0},{code:0x261d,x:6,y:10},{code:0x1f44d,x:5,y:1},{code:0x1f44e,x:6,y:1},{code:0x270a,x:8,y:10},{code:0x1f44a,x:2,y:1},{code:0x1f91b,x:0,y:8},{code:0x1f91c,x:1,y:8},{code:0x1f44f,x:7,y:1},{code:0x1f64c,x:2,y:7},{code:0x1f450,x:8,y:1},{code:0x1f932,x:5,y:8},{code:0x1f91d,x:2,y:8},{code:0x1f64f,x:3,y:7},{code:0x270d,x:11,y:0},{code:0x1f485,x:6,y:3},{code:0x1f933,x:6,y:8},{code:0x1f4aa,x:9,y:5},{code:0x1f9b5,x:2,y:9},{code:0x1f9b6,x:3,y:9},{code:0x1f442,x:5,y:0},{code:0x1f443,x:6,y:0},{code:0x1f9e0,x:6,y:9},{code:0x1f9b7,x:4,y:9},{code:0x1f9b4,x:1,y:9},{code:0x1f440,x:3,y:0},{code:0x1f445,x:8,y:0},{code:0x1f444,x:7,y:0},{code:0x1f48b,x:7,y:3},{code:0x1f48c,x:8,y:3},{code:0x1f498,x:5,y:4},{code:0x1f49d,x:10,y:4},{code:0x1f496,x:3,y:4},{code:0x1f497,x:4,y:4},{code:0x1f493,x:0,y:4},{code:0x1f49e,x:0,y:5},{code:0x1f495,x:2,y:4},{code:0x1f49f,x:1,y:5},{code:0x2763,x:11,y:1},{code:0x1f494,x:1,y:4},{code:0x2764,x:11,y:2},{code:0x1f9e1,x:7,y:9},{code:0x1f49b,x:8,y:4},{code:0x1f49a,x:7,y:4},{code:0x1f499,x:6,y:4},{code:0x1f49c,x:9,y:4},{code:0x1f5a4,x:10,y:6},{code:0x1f4af,x:3,y:6},{code:0x1f4a2,x:2,y:5},{code:0x1f4a5,x:5,y:5},{code:0x1f4ab,x:10,y:5},{code:0x1f4a6,x:6,y:5},{code:0x1f4a8,x:8,y:5},{code:0x1f573,x:5,y:6},{code:0x1f4a3,x:3,y:5},{code:0x1f4ac,x:0,y:6},{code:0x1f441,x:4,y:0},{code:0x1f5e8,x:0,y:7},{code:0x1f5ef,x:1,y:7},{code:0x1f4ad,x:1,y:6},{code:0x1f4a4,x:4,y:5},{code:0x1f453,x:0,y:2},{code:0x1f576,x:6,y:6},{code:0x1f97d,x:9,y:8},{code:0x1f97c,x:8,y:8},{code:0x1f454,x:1,y:2},{code:0x1f455,x:2,y:2},{code:0x1f456,x:3,y:2},{code:0x1f9e3,x:9,y:9},{code:0x1f9e4,x:10,y:9},{code:0x1f9e5,x:0,y:10},{code:0x1f9e6,x:1,y:10},{code:0x1f457,x:4,y:2},{code:0x1f458,x:5,y:2},{code:0x1f459,x:6,y:2},{code:0x1f45a,x:7,y:2},{code:0x1f45b,x:8,y:2},{code:0x1f45c,x:9,y:2},{code:0x1f45d,x:10,y:2},{code:0x1f6cd,x:4,y:7},{code:0x1f392,x:0,y:0},{code:0x1f45e,x:0,y:3},{code:0x1f45f,x:1,y:3},{code:0x1f97e,x:10,y:8},{code:0x1f97f,x:0,y:9},{code:0x1f460,x:2,y:3},{code:0x1f461,x:3,y:3},{code:0x1f462,x:4,y:3},{code:0x1f451,x:9,y:1},{code:0x1f452,x:10,y:1},{code:0x1f3a9,x:2,y:0},{code:0x1f393,x:1,y:0},{code:0x1f9e2,x:8,y:9},{code:0x26d1,x:7,y:10},{code:0x1f4ff,x:4,y:6},{code:0x1f484,x:5,y:3},{code:0x1f48d,x:9,y:3},{code:0x1f48e,x:10,y:3}],
        "animals_and_nature": [{code:0x1f435,x:6,y:6},{code:0x1f412,x:4,y:3},{code:0x1f98d,x:2,y:9},{code:0x1f436,x:7,y:6},{code:0x1f415,x:7,y:3},{code:0x1f429,x:6,y:5},{code:0x1f43a,x:0,y:7},{code:0x1f98a,x:10,y:8},{code:0x1f99d,x:7,y:10},{code:0x1f408,x:5,y:2},{code:0x1f981,x:1,y:8},{code:0x1f42f,x:1,y:6},{code:0x1f405,x:2,y:2},{code:0x1f406,x:3,y:2},{code:0x1f434,x:5,y:6},{code:0x1f40e,x:0,y:3},{code:0x1f984,x:4,y:8},{code:0x1f993,x:8,y:9},{code:0x1f98c,x:1,y:9},{code:0x1f42e,x:0,y:6},{code:0x1f402,x:10,y:1},{code:0x1f403,x:0,y:2},{code:0x1f404,x:1,y:2},{code:0x1f437,x:8,y:6},{code:0x1f416,x:9,y:3},{code:0x1f417,x:10,y:3},{code:0x1f43d,x:3,y:7},{code:0x1f40f,x:1,y:3},{code:0x1f411,x:3,y:3},{code:0x1f410,x:2,y:3},{code:0x1f42a,x:7,y:5},{code:0x1f42b,x:8,y:5},{code:0x1f999,x:3,y:10},{code:0x1f992,x:7,y:9},{code:0x1f418,x:0,y:4},{code:0x1f98f,x:4,y:9},{code:0x1f99b,x:5,y:10},{code:0x1f42d,x:10,y:5},{code:0x1f401,x:9,y:1},{code:0x1f400,x:8,y:1},{code:0x1f439,x:10,y:6},{code:0x1f430,x:2,y:6},{code:0x1f407,x:4,y:2},{code:0x1f43f,x:5,y:7},{code:0x1f994,x:9,y:9},{code:0x1f987,x:7,y:8},{code:0x1f43b,x:1,y:7},{code:0x1f428,x:5,y:5},{code:0x1f43c,x:2,y:7},{code:0x1f998,x:2,y:10},{code:0x1f9a1,x:11,y:0},{code:0x1f43e,x:4,y:7},{code:0x1f983,x:3,y:8},{code:0x1f414,x:6,y:3},{code:0x1f413,x:5,y:3},{code:0x1f423,x:0,y:5},{code:0x1f424,x:1,y:5},{code:0x1f425,x:2,y:5},{code:0x1f426,x:3,y:5},{code:0x1f427,x:4,y:5},{code:0x1f54a,x:7,y:7},{code:0x1f985,x:5,y:8},{code:0x1f986,x:6,y:8},{code:0x1f9a2,x:11,y:1},{code:0x1f989,x:9,y:8},{code:0x1f99a,x:4,y:10},{code:0x1f99c,x:6,y:10},{code:0x1f438,x:9,y:6},{code:0x1f40a,x:7,y:2},{code:0x1f422,x:10,y:4},{code:0x1f98e,x:3,y:9},{code:0x1f40d,x:10,y:2},{code:0x1f432,x:3,y:6},{code:0x1f409,x:6,y:2},{code:0x1f995,x:10,y:9},{code:0x1f996,x:0,y:10},{code:0x1f433,x:4,y:6},{code:0x1f40b,x:8,y:2},{code:0x1f42c,x:9,y:5},{code:0x1f41f,x:7,y:4},{code:0x1f420,x:8,y:4},{code:0x1f421,x:9,y:4},{code:0x1f988,x:8,y:8},{code:0x1f419,x:1,y:4},{code:0x1f41a,x:2,y:4},{code:0x1f40c,x:9,y:2},{code:0x1f98b,x:0,y:9},{code:0x1f41b,x:3,y:4},{code:0x1f41c,x:4,y:4},{code:0x1f41d,x:5,y:4},{code:0x1f41e,x:6,y:4},{code:0x1f997,x:1,y:10},{code:0x1f577,x:8,y:7},{code:0x1f578,x:9,y:7},{code:0x1f982,x:2,y:8},{code:0x1f99f,x:9,y:10},{code:0x1f9a0,x:10,y:10},{code:0x1f490,x:6,y:7},{code:0x1f338,x:6,y:0},{code:0x1f3f5,x:7,y:1},{code:0x1f339,x:7,y:0},{code:0x1f940,x:10,y:7},{code:0x1f33a,x:8,y:0},{code:0x1f33b,x:9,y:0},{code:0x1f33c,x:10,y:0},{code:0x1f337,x:5,y:0},{code:0x1f331,x:0,y:0},{code:0x1f344,x:6,y:1},{code:0x1f332,x:1,y:0},{code:0x1f333,x:2,y:0},{code:0x1f334,x:3,y:0},{code:0x1f335,x:4,y:0},{code:0x1f33e,x:0,y:1},{code:0x1f33f,x:1,y:1},{code:0x2618,x:11,y:8},{code:0x1f340,x:2,y:1},{code:0x1f341,x:3,y:1},{code:0x1f342,x:4,y:1},{code:0x1f343,x:5,y:1},{code:0x1f980,x:0,y:8},{code:0x1f99e,x:8,y:10},{code:0x1f990,x:5,y:9},{code:0x1f991,x:6,y:9}],
        "food_and_drinks": [{code:0x1f347,x:8,y:0},{code:0x1f348,x:9,y:0},{code:0x1f349,x:0,y:1},{code:0x1f34a,x:1,y:1},{code:0x1f34b,x:2,y:1},{code:0x1f34c,x:3,y:1},{code:0x1f34d,x:4,y:1},{code:0x1f96d,x:10,y:0},{code:0x1f34e,x:5,y:1},{code:0x1f34f,x:6,y:1},{code:0x1f350,x:7,y:1},{code:0x1f351,x:8,y:1},{code:0x1f352,x:9,y:1},{code:0x1f353,x:0,y:2},{code:0x1f95d,x:4,y:8},{code:0x1f345,x:6,y:0},{code:0x1f965,x:2,y:9},{code:0x1f951,x:2,y:7},{code:0x1f346,x:7,y:0},{code:0x1f954,x:5,y:7},{code:0x1f955,x:6,y:7},{code:0x1f33d,x:5,y:0},{code:0x1f336,x:4,y:0},{code:0x1f952,x:3,y:7},{code:0x1f96c,x:9,y:9},{code:0x1f966,x:3,y:9},{code:0x1f95c,x:3,y:8},{code:0x1f330,x:3,y:0},{code:0x1f35e,x:1,y:3},{code:0x1f950,x:1,y:7},{code:0x1f956,x:7,y:7},{code:0x1f968,x:5,y:9},{code:0x1f96f,x:10,y:2},{code:0x1f95e,x:5,y:8},{code:0x1f9c0,x:10,y:3},{code:0x1f356,x:3,y:2},{code:0x1f357,x:4,y:2},{code:0x1f969,x:6,y:9},{code:0x1f953,x:4,y:7},{code:0x1f354,x:1,y:2},{code:0x1f35f,x:2,y:3},{code:0x1f355,x:2,y:2},{code:0x1f32d,x:0,y:0},{code:0x1f96a,x:7,y:9},{code:0x1f32e,x:1,y:0},{code:0x1f32f,x:2,y:0},{code:0x1f959,x:0,y:8},{code:0x1f95a,x:1,y:8},{code:0x1f373,x:2,y:5},{code:0x1f958,x:9,y:7},{code:0x1f372,x:1,y:5},{code:0x1f963,x:0,y:9},{code:0x1f957,x:8,y:7},{code:0x1f37f,x:4,y:6},{code:0x1f9c2,x:10,y:5},{code:0x1f96b,x:8,y:9},{code:0x1f371,x:0,y:5},{code:0x1f358,x:5,y:2},{code:0x1f359,x:6,y:2},{code:0x1f35a,x:7,y:2},{code:0x1f35b,x:8,y:2},{code:0x1f35c,x:9,y:2},{code:0x1f35d,x:0,y:3},{code:0x1f360,x:3,y:3},{code:0x1f362,x:5,y:3},{code:0x1f363,x:6,y:3},{code:0x1f364,x:7,y:3},{code:0x1f365,x:8,y:3},{code:0x1f96e,x:10,y:1},{code:0x1f361,x:4,y:3},{code:0x1f95f,x:6,y:8},{code:0x1f960,x:7,y:8},{code:0x1f961,x:8,y:8},{code:0x1f366,x:9,y:3},{code:0x1f367,x:0,y:4},{code:0x1f368,x:1,y:4},{code:0x1f369,x:2,y:4},{code:0x1f36a,x:3,y:4},{code:0x1f382,x:5,y:6},{code:0x1f370,x:9,y:4},{code:0x1f9c1,x:10,y:4},{code:0x1f967,x:4,y:9},{code:0x1f36b,x:4,y:4},{code:0x1f36c,x:5,y:4},{code:0x1f36d,x:6,y:4},{code:0x1f36e,x:7,y:4},{code:0x1f36f,x:8,y:4},{code:0x1f37c,x:1,y:6},{code:0x1f95b,x:2,y:8},{code:0x2615,x:4,y:10},{code:0x1f375,x:4,y:5},{code:0x1f376,x:5,y:5},{code:0x1f37e,x:3,y:6},{code:0x1f377,x:6,y:5},{code:0x1f378,x:7,y:5},{code:0x1f379,x:8,y:5},{code:0x1f37a,x:9,y:5},{code:0x1f37b,x:0,y:6},{code:0x1f942,x:8,y:6},{code:0x1f943,x:9,y:6},{code:0x1f964,x:1,y:9},{code:0x1f962,x:9,y:8},{code:0x1f37d,x:2,y:6},{code:0x1f374,x:3,y:5},{code:0x1f944,x:0,y:7},{code:0x1f52a,x:7,y:6},{code:0x1f3fa,x:6,y:6}],
        "travel_and_places": [{code:0x1f30d,x:13,y:0},{code:0x1f30e,x:0,y:1},{code:0x1f30f,x:1,y:1},{code:0x1f310,x:2,y:1},{code:0x1f5fa,x:0,y:8},{code:0x1f5fe,x:4,y:8},{code:0x1f9ed,x:12,y:12},{code:0x1f3d4,x:9,y:3},{code:0x26f0,x:14,y:8},{code:0x1f30b,x:11,y:0},{code:0x1f5fb,x:1,y:8},{code:0x1f3d5,x:10,y:3},{code:0x1f3d6,x:11,y:3},{code:0x1f3dc,x:3,y:4},{code:0x1f3dd,x:4,y:4},{code:0x1f3de,x:5,y:4},{code:0x1f3df,x:6,y:4},{code:0x1f3db,x:2,y:4},{code:0x1f3d7,x:12,y:3},{code:0x1f9f1,x:13,y:12},{code:0x1f3d8,x:13,y:3},{code:0x1f3da,x:1,y:4},{code:0x1f3e0,x:7,y:4},{code:0x1f3e1,x:8,y:4},{code:0x1f3e2,x:9,y:4},{code:0x1f3e3,x:10,y:4},{code:0x1f3e4,x:11,y:4},{code:0x1f3e5,x:12,y:4},{code:0x1f3e6,x:13,y:4},{code:0x1f3e8,x:0,y:5},{code:0x1f3e9,x:1,y:5},{code:0x1f3ea,x:2,y:5},{code:0x1f3eb,x:3,y:5},{code:0x1f3ec,x:4,y:5},{code:0x1f3ed,x:5,y:5},{code:0x1f3ef,x:6,y:5},{code:0x1f3f0,x:7,y:5},{code:0x1f492,x:9,y:5},{code:0x1f5fc,x:2,y:8},{code:0x1f5fd,x:3,y:8},{code:0x26ea,x:14,y:7},{code:0x1f54c,x:0,y:6},{code:0x1f54d,x:1,y:6},{code:0x26e9,x:14,y:6},{code:0x1f54b,x:13,y:5},{code:0x26f2,x:14,y:10},{code:0x26fa,x:0,y:14},{code:0x1f301,x:1,y:0},{code:0x1f303,x:3,y:0},{code:0x1f3d9,x:0,y:4},{code:0x1f304,x:4,y:0},{code:0x1f305,x:5,y:0},{code:0x1f306,x:6,y:0},{code:0x1f307,x:7,y:0},{code:0x1f309,x:9,y:0},{code:0x2668,x:14,y:0},{code:0x1f3a0,x:1,y:3},{code:0x1f3a1,x:2,y:3},{code:0x1f3a2,x:3,y:3},{code:0x1f488,x:8,y:5},{code:0x1f3aa,x:5,y:3},{code:0x1f682,x:8,y:8},{code:0x1f683,x:9,y:8},{code:0x1f684,x:10,y:8},{code:0x1f685,x:11,y:8},{code:0x1f686,x:12,y:8},{code:0x1f687,x:13,y:8},{code:0x1f688,x:0,y:9},{code:0x1f689,x:1,y:9},{code:0x1f68a,x:2,y:9},{code:0x1f69d,x:7,y:10},{code:0x1f69e,x:8,y:10},{code:0x1f68b,x:3,y:9},{code:0x1f68c,x:4,y:9},{code:0x1f68d,x:5,y:9},{code:0x1f68e,x:6,y:9},{code:0x1f690,x:8,y:9},{code:0x1f691,x:9,y:9},{code:0x1f692,x:10,y:9},{code:0x1f693,x:11,y:9},{code:0x1f694,x:12,y:9},{code:0x1f695,x:13,y:9},{code:0x1f696,x:0,y:10},{code:0x1f697,x:1,y:10},{code:0x1f698,x:2,y:10},{code:0x1f699,x:3,y:10},{code:0x1f69a,x:4,y:10},{code:0x1f69b,x:5,y:10},{code:0x1f69c,x:6,y:10},{code:0x1f3ce,x:8,y:3},{code:0x1f3cd,x:7,y:3},{code:0x1f6f5,x:4,y:12},{code:0x1f6b2,x:4,y:11},{code:0x1f6f4,x:3,y:12},{code:0x1f6f9,x:7,y:12},{code:0x1f68f,x:7,y:9},{code:0x1f6e3,x:9,y:11},{code:0x1f6e4,x:10,y:11},{code:0x1f6e2,x:8,y:11},{code:0x26fd,x:1,y:14},{code:0x1f6a8,x:3,y:11},{code:0x1f6a5,x:0,y:11},{code:0x1f6a6,x:1,y:11},{code:0x1f6d1,x:6,y:11},{code:0x1f6a7,x:2,y:11},{code:0x2693,x:14,y:1},{code:0x26f5,x:14,y:13},{code:0x1f6f6,x:5,y:12},{code:0x1f3a3,x:4,y:3},{code:0x1f6a4,x:13,y:10},{code:0x1f6f3,x:2,y:12},{code:0x26f4,x:14,y:12},{code:0x1f6e5,x:11,y:11},{code:0x1f6a2,x:12,y:10},{code:0x2708,x:2,y:14},{code:0x1f6e9,x:12,y:11},{code:0x1f6eb,x:13,y:11},{code:0x1f6ec,x:0,y:12},{code:0x1f4ba,x:11,y:5},{code:0x1f681,x:7,y:8},{code:0x1f69f,x:9,y:10},{code:0x1f6a0,x:10,y:10},{code:0x1f6a1,x:11,y:10},{code:0x1f6f0,x:1,y:12},{code:0x1f680,x:6,y:8},{code:0x1f6f8,x:6,y:12},{code:0x1f6ce,x:5,y:11},{code:0x1f9f3,x:0,y:13},{code:0x231b,x:3,y:13},{code:0x23f3,x:7,y:13},{code:0x231a,x:2,y:13},{code:0x23f0,x:4,y:13},{code:0x23f1,x:5,y:13},{code:0x23f2,x:6,y:13},{code:0x1f570,x:12,y:7},{code:0x1f55b,x:13,y:6},{code:0x1f567,x:11,y:7},{code:0x1f550,x:2,y:6},{code:0x1f55c,x:0,y:7},{code:0x1f551,x:3,y:6},{code:0x1f55d,x:1,y:7},{code:0x1f552,x:4,y:6},{code:0x1f55e,x:2,y:7},{code:0x1f553,x:5,y:6},{code:0x1f55f,x:3,y:7},{code:0x1f554,x:6,y:6},{code:0x1f560,x:4,y:7},{code:0x1f555,x:7,y:6},{code:0x1f561,x:5,y:7},{code:0x1f556,x:8,y:6},{code:0x1f562,x:6,y:7},{code:0x1f557,x:9,y:6},{code:0x1f563,x:7,y:7},{code:0x1f558,x:10,y:6},{code:0x1f564,x:8,y:7},{code:0x1f559,x:11,y:6},{code:0x1f565,x:9,y:7},{code:0x1f55a,x:12,y:6},{code:0x1f566,x:10,y:7},{code:0x1f311,x:3,y:1},{code:0x1f312,x:4,y:1},{code:0x1f313,x:5,y:1},{code:0x1f314,x:6,y:1},{code:0x1f315,x:7,y:1},{code:0x1f316,x:8,y:1},{code:0x1f317,x:9,y:1},{code:0x1f318,x:10,y:1},{code:0x1f319,x:11,y:1},{code:0x1f31a,x:12,y:1},{code:0x1f31b,x:13,y:1},{code:0x1f31c,x:0,y:2},{code:0x1f321,x:5,y:2},{code:0x2600,x:8,y:13},{code:0x1f31d,x:1,y:2},{code:0x1f31e,x:2,y:2},{code:0x2b50,x:4,y:14},{code:0x1f31f,x:3,y:2},{code:0x1f320,x:4,y:2},{code:0x1f30c,x:12,y:0},{code:0x2601,x:9,y:13},{code:0x26c5,x:14,y:4},{code:0x26c8,x:14,y:5},{code:0x1f324,x:6,y:2},{code:0x1f325,x:7,y:2},{code:0x1f326,x:8,y:2},{code:0x1f327,x:9,y:2},{code:0x1f328,x:10,y:2},{code:0x1f329,x:11,y:2},{code:0x1f32a,x:12,y:2},{code:0x1f32b,x:13,y:2},{code:0x1f32c,x:0,y:3},{code:0x1f300,x:0,y:0},{code:0x1f308,x:8,y:0},{code:0x1f302,x:2,y:0},{code:0x2602,x:10,y:13},{code:0x2614,x:13,y:13},{code:0x26f1,x:14,y:9},{code:0x26a1,x:14,y:2},{code:0x2744,x:3,y:14},{code:0x2603,x:11,y:13},{code:0x26c4,x:14,y:3},{code:0x2604,x:12,y:13},{code:0x1f525,x:12,y:5},{code:0x1f4a7,x:10,y:5},{code:0x1f30a,x:10,y:0}],
        "events": [{code:0x1f383,x:4,y:0},{code:0x1f384,x:5,y:0},{code:0x1f386,x:6,y:0},{code:0x1f387,x:7,y:0},{code:0x1f9e8,x:5,y:6},{code:0x2728,x:9,y:3},{code:0x1f388,x:8,y:0},{code:0x1f389,x:0,y:1},{code:0x1f38a,x:1,y:1},{code:0x1f38b,x:2,y:1},{code:0x1f38d,x:3,y:1},{code:0x1f38e,x:4,y:1},{code:0x1f38f,x:5,y:1},{code:0x1f390,x:6,y:1},{code:0x1f391,x:7,y:1},{code:0x1f9e7,x:4,y:6},{code:0x1f380,x:2,y:0},{code:0x1f381,x:3,y:0},{code:0x1f397,x:0,y:2},{code:0x1f39f,x:1,y:2},{code:0x1f3ab,x:3,y:2},{code:0x1f396,x:8,y:1},{code:0x1f3c6,x:7,y:3},{code:0x1f3c5,x:6,y:3},{code:0x1f947,x:4,y:5},{code:0x1f948,x:5,y:5},{code:0x1f949,x:6,y:5},{code:0x26bd,x:8,y:8},{code:0x26be,x:9,y:0},{code:0x1f94e,x:2,y:6},{code:0x1f3c0,x:5,y:3},{code:0x1f3d0,x:2,y:4},{code:0x1f3c8,x:8,y:3},{code:0x1f3c9,x:0,y:4},{code:0x1f3be,x:3,y:3},{code:0x1f94f,x:3,y:6},{code:0x1f3b3,x:1,y:3},{code:0x1f3cf,x:1,y:4},{code:0x1f3d1,x:3,y:4},{code:0x1f3d2,x:4,y:4},{code:0x1f94d,x:1,y:6},{code:0x1f3d3,x:5,y:4},{code:0x1f3f8,x:6,y:4},{code:0x1f94a,x:7,y:5},{code:0x1f94b,x:8,y:5},{code:0x1f945,x:3,y:5},{code:0x26f3,x:9,y:1},{code:0x26f8,x:9,y:2},{code:0x1f3bd,x:2,y:3},{code:0x1f3bf,x:4,y:3},{code:0x1f6f7,x:2,y:5},{code:0x1f94c,x:0,y:6},{code:0x1f3af,x:6,y:2},{code:0x1f3b1,x:8,y:2},{code:0x1f52e,x:8,y:4},{code:0x1f9ff,x:1,y:7},{code:0x1f3ae,x:5,y:2},{code:0x1f579,x:0,y:5},{code:0x1f3b0,x:7,y:2},{code:0x1f3b2,x:0,y:3},{code:0x1f9e9,x:6,y:6},{code:0x1f9f8,x:0,y:7},{code:0x2660,x:4,y:8},{code:0x2665,x:6,y:8},{code:0x2666,x:7,y:8},{code:0x2663,x:5,y:8},{code:0x265f,x:3,y:8},{code:0x1f0cf,x:1,y:0},{code:0x1f004,x:0,y:0},{code:0x1f3ad,x:4,y:2},{code:0x1f5bc,x:1,y:5},{code:0x1f3a8,x:2,y:2},{code:0x1f9f5,x:7,y:6},{code:0x1f9f6,x:8,y:6}],
        "objects": [{code:0x1f507,x:1,y:7},{code:0x1f508,x:2,y:7},{code:0x1f509,x:3,y:7},{code:0x1f50a,x:4,y:7},{code:0x1f4e2,x:3,y:5},{code:0x1f4e3,x:4,y:5},{code:0x1f4ef,x:3,y:6},{code:0x1f514,x:1,y:8},{code:0x1f515,x:2,y:8},{code:0x1f3bc,x:2,y:1},{code:0x1f3b5,x:8,y:0},{code:0x1f3b6,x:9,y:0},{code:0x1f399,x:0,y:0},{code:0x1f39a,x:1,y:0},{code:0x1f39b,x:2,y:0},{code:0x1f3a4,x:4,y:0},{code:0x1f3a7,x:6,y:0},{code:0x1f4fb,x:11,y:6},{code:0x1f3b7,x:10,y:0},{code:0x1f3b8,x:11,y:0},{code:0x1f3b9,x:12,y:0},{code:0x1f3ba,x:0,y:1},{code:0x1f3bb,x:1,y:1},{code:0x1f941,x:6,y:11},{code:0x1f4f1,x:5,y:6},{code:0x1f4f2,x:6,y:6},{code:0x260e,x:13,y:3},{code:0x1f4de,x:12,y:4},{code:0x1f4df,x:0,y:5},{code:0x1f4e0,x:1,y:5},{code:0x1f50b,x:5,y:7},{code:0x1f50c,x:6,y:7},{code:0x1f4bb,x:4,y:2},{code:0x1f5a5,x:5,y:9},{code:0x1f5a8,x:6,y:9},{code:0x2328,x:13,y:2},{code:0x1f5b1,x:7,y:9},{code:0x1f5b2,x:8,y:9},{code:0x1f4bd,x:6,y:2},{code:0x1f4be,x:7,y:2},{code:0x1f4bf,x:8,y:2},{code:0x1f4c0,x:9,y:2},{code:0x1f9ee,x:2,y:12},{code:0x1f3a5,x:5,y:0},{code:0x1f39e,x:3,y:0},{code:0x1f4fd,x:0,y:7},{code:0x1f3ac,x:7,y:0},{code:0x1f4fa,x:10,y:6},{code:0x1f4f7,x:7,y:6},{code:0x1f4f8,x:8,y:6},{code:0x1f4f9,x:9,y:6},{code:0x1f4fc,x:12,y:6},{code:0x1f50d,x:7,y:7},{code:0x1f50e,x:8,y:7},{code:0x1f56f,x:12,y:8},{code:0x1f4a1,x:8,y:1},{code:0x1f526,x:5,y:8},{code:0x1f3ee,x:3,y:1},{code:0x1f4d4,x:3,y:4},{code:0x1f4d5,x:4,y:4},{code:0x1f4d6,x:5,y:4},{code:0x1f4d7,x:6,y:4},{code:0x1f4d8,x:7,y:4},{code:0x1f4d9,x:8,y:4},{code:0x1f4da,x:9,y:4},{code:0x1f4d3,x:2,y:4},{code:0x1f4d2,x:1,y:4},{code:0x1f4c3,x:12,y:2},{code:0x1f4dc,x:10,y:4},{code:0x1f4c4,x:0,y:3},{code:0x1f4f0,x:4,y:6},{code:0x1f5de,x:4,y:10},{code:0x1f4d1,x:0,y:4},{code:0x1f516,x:3,y:8},{code:0x1f3f7,x:4,y:1},{code:0x1f4b0,x:9,y:1},{code:0x1f4b4,x:11,y:1},{code:0x1f4b5,x:12,y:1},{code:0x1f4b6,x:0,y:2},{code:0x1f4b7,x:1,y:2},{code:0x1f4b8,x:2,y:2},{code:0x1f4b3,x:10,y:1},{code:0x1f9fe,x:13,y:0},{code:0x1f4b9,x:3,y:2},{code:0x2709,x:1,y:13},{code:0x1f4e7,x:8,y:5},{code:0x1f4e8,x:9,y:5},{code:0x1f4e9,x:10,y:5},{code:0x1f4e4,x:5,y:5},{code:0x1f4e5,x:6,y:5},{code:0x1f4e6,x:7,y:5},{code:0x1f4eb,x:12,y:5},{code:0x1f4ea,x:11,y:5},{code:0x1f4ec,x:0,y:6},{code:0x1f4ed,x:1,y:6},{code:0x1f4ee,x:2,y:6},{code:0x1f5f3,x:6,y:10},{code:0x270f,x:2,y:13},{code:0x2712,x:3,y:13},{code:0x1f58b,x:2,y:9},{code:0x1f58a,x:1,y:9},{code:0x1f58c,x:3,y:9},{code:0x1f58d,x:4,y:9},{code:0x1f4dd,x:11,y:4},{code:0x1f4bc,x:5,y:2},{code:0x1f4c1,x:10,y:2},{code:0x1f4c2,x:11,y:2},{code:0x1f5c2,x:9,y:9},{code:0x1f4c5,x:1,y:3},{code:0x1f4c6,x:2,y:3},{code:0x1f5d2,x:0,y:10},{code:0x1f5d3,x:1,y:10},{code:0x1f4c7,x:3,y:3},{code:0x1f4c8,x:4,y:3},{code:0x1f4c9,x:5,y:3},{code:0x1f4ca,x:6,y:3},{code:0x1f4cb,x:7,y:3},{code:0x1f4cc,x:8,y:3},{code:0x1f4cd,x:9,y:3},{code:0x1f4ce,x:10,y:3},{code:0x1f587,x:0,y:9},{code:0x1f4cf,x:11,y:3},{code:0x1f4d0,x:12,y:3},{code:0x2702,x:0,y:13},{code:0x1f5c3,x:10,y:9},{code:0x1f5c4,x:11,y:9},{code:0x1f5d1,x:12,y:9},{code:0x1f512,x:12,y:7},{code:0x1f513,x:0,y:8},{code:0x1f50f,x:9,y:7},{code:0x1f510,x:10,y:7},{code:0x1f511,x:11,y:7},{code:0x1f5dd,x:3,y:10},{code:0x1f528,x:7,y:8},{code:0x26cf,x:13,y:11},{code:0x2692,x:13,y:4},{code:0x1f6e0,x:3,y:11},{code:0x1f5e1,x:5,y:10},{code:0x2694,x:13,y:5},{code:0x1f52b,x:9,y:8},{code:0x1f3f9,x:5,y:1},{code:0x1f6e1,x:4,y:11},{code:0x1f527,x:6,y:8},{code:0x1f529,x:8,y:8},{code:0x2699,x:13,y:8},{code:0x1f5dc,x:2,y:10},{code:0x2696,x:13,y:6},{code:0x1f517,x:4,y:8},{code:0x26d3,x:13,y:12},{code:0x1f9f0,x:4,y:12},{code:0x1f9f2,x:5,y:12},{code:0x2697,x:13,y:7},{code:0x1f9ea,x:12,y:11},{code:0x1f9eb,x:0,y:12},{code:0x1f9ec,x:1,y:12},{code:0x1f52c,x:10,y:8},{code:0x1f52d,x:11,y:8},{code:0x1f4e1,x:2,y:5},{code:0x1f489,x:6,y:1},{code:0x1f48a,x:7,y:1},{code:0x1f6aa,x:8,y:10},{code:0x1f6cf,x:1,y:11},{code:0x1f6cb,x:0,y:11},{code:0x1f6bd,x:10,y:10},{code:0x1f6bf,x:11,y:10},{code:0x1f6c1,x:12,y:10},{code:0x1f9f4,x:6,y:12},{code:0x1f9f7,x:7,y:12},{code:0x1f9f9,x:8,y:12},{code:0x1f9fa,x:9,y:12},{code:0x1f9fb,x:10,y:12},{code:0x1f9fc,x:11,y:12},{code:0x1f9fd,x:12,y:12},{code:0x1f9ef,x:3,y:12},{code:0x1f6d2,x:2,y:11},{code:0x1f6ac,x:9,y:10},{code:0x26b0,x:13,y:9},{code:0x26b1,x:13,y:10},{code:0x1f5ff,x:7,y:10}],
        "signs": [{code:0x1f6ae,x:4,y:8},{code:0x1f6b0,x:6,y:8},{code:0x267f,x:3,y:13},{code:0x1f6b9,x:11,y:8},{code:0x1f6ba,x:12,y:8},{code:0x1f6bb,x:13,y:8},{code:0x1f6bc,x:14,y:8},{code:0x1f6be,x:0,y:9},{code:0x1f6c2,x:1,y:9},{code:0x1f6c3,x:2,y:9},{code:0x1f6c4,x:3,y:9},{code:0x1f6c5,x:4,y:9},{code:0x1f3e7,x:13,y:4},{code:0x26a0,x:7,y:13},{code:0x1f6b8,x:10,y:8},{code:0x26d4,x:11,y:13},{code:0x1f6ab,x:2,y:8},{code:0x1f6b3,x:8,y:8},{code:0x1f6ad,x:3,y:8},{code:0x1f6af,x:5,y:8},{code:0x1f6b1,x:7,y:8},{code:0x1f6b7,x:9,y:8},{code:0x1f4f5,x:7,y:5},{code:0x1f51e,x:7,y:6},{code:0x2622,x:10,y:11},{code:0x2623,x:11,y:11},{code:0x2b06,x:15,y:5},{code:0x2197,x:14,y:9},{code:0x27a1,x:14,y:14},{code:0x2198,x:0,y:10},{code:0x2b07,x:15,y:6},{code:0x2199,x:1,y:10},{code:0x2b05,x:15,y:4},{code:0x2196,x:13,y:9},{code:0x2195,x:12,y:9},{code:0x2194,x:11,y:9},{code:0x21a9,x:2,y:10},{code:0x21aa,x:3,y:10},{code:0x2934,x:15,y:2},{code:0x2935,x:15,y:3},{code:0x1f503,x:12,y:5},{code:0x1f504,x:13,y:5},{code:0x1f519,x:2,y:6},{code:0x1f51a,x:3,y:6},{code:0x1f51b,x:4,y:6},{code:0x1f51c,x:5,y:6},{code:0x1f51d,x:6,y:6},{code:0x1f6d0,x:5,y:9},{code:0x269b,x:5,y:13},{code:0x1f549,x:14,y:7},{code:0x2721,x:1,y:14},{code:0x2638,x:1,y:12},{code:0x262f,x:0,y:12},{code:0x271d,x:0,y:14},{code:0x2626,x:12,y:11},{code:0x262a,x:13,y:11},{code:0x262e,x:14,y:11},{code:0x1f54e,x:0,y:8},{code:0x1f52f,x:14,y:6},{code:0x2648,x:4,y:12},{code:0x2649,x:5,y:12},{code:0x264a,x:6,y:12},{code:0x264b,x:7,y:12},{code:0x264c,x:8,y:12},{code:0x264d,x:9,y:12},{code:0x264e,x:10,y:12},{code:0x264f,x:11,y:12},{code:0x2650,x:12,y:12},{code:0x2651,x:13,y:12},{code:0x2652,x:14,y:12},{code:0x2653,x:0,y:13},{code:0x26ce,x:10,y:13},{code:0x1f500,x:9,y:5},{code:0x1f501,x:10,y:5},{code:0x1f502,x:11,y:5},{code:0x25b6,x:3,y:11},{code:0x23e9,x:5,y:10},{code:0x23ed,x:9,y:10},{code:0x23ef,x:11,y:10},{code:0x25c0,x:4,y:11},{code:0x23ea,x:6,y:10},{code:0x23ee,x:10,y:10},{code:0x1f53c,x:12,y:7},{code:0x23eb,x:7,y:10},{code:0x1f53d,x:13,y:7},{code:0x23ec,x:8,y:10},{code:0x23f8,x:12,y:10},{code:0x23f9,x:13,y:10},{code:0x23fa,x:14,y:10},{code:0x23cf,x:4,y:10},{code:0x1f3a6,x:11,y:4},{code:0x1f505,x:14,y:5},{code:0x1f506,x:0,y:6},{code:0x1f4f6,x:8,y:5},{code:0x1f4f3,x:5,y:5},{code:0x1f4f4,x:6,y:5},{code:0x2640,x:2,y:12},{code:0x2642,x:3,y:12},{code:0x2716,x:14,y:13},{code:0x2795,x:11,y:14},{code:0x2796,x:12,y:14},{code:0x2797,x:13,y:14},{code:0x267e,x:2,y:13},{code:0x203c,x:6,y:9},{code:0x2049,x:7,y:9},{code:0x2753,x:7,y:14},{code:0x2754,x:8,y:14},{code:0x2755,x:9,y:14},{code:0x2757,x:10,y:14},{code:0x3030,x:15,y:10},{code:0x1f4b1,x:2,y:5},{code:0x1f4b2,x:3,y:5},{code:0x2695,x:4,y:13},{code:0x267b,x:1,y:13},{code:0x269c,x:6,y:13},{code:0x1f531,x:1,y:7},{code:0x1f4db,x:4,y:5},{code:0x1f530,x:0,y:7},{code:0x2b55,x:15,y:9},{code:0x2705,x:12,y:13},{code:0x2611,x:9,y:11},{code:0x2714,x:13,y:13},{code:0x274c,x:5,y:14},{code:0x274e,x:6,y:14},{code:0x27b0,x:15,y:0},{code:0x27bf,x:15,y:1},{code:0x303d,x:15,y:11},{code:0x2733,x:2,y:14},{code:0x2734,x:3,y:14},{code:0x2747,x:4,y:14},{code:0x00a9,x:12,y:0},{code:0x00ae,x:13,y:0},{code:0x2122,x:9,y:9},{code:0x1f520,x:9,y:6},{code:0x1f521,x:10,y:6},{code:0x1f522,x:11,y:6},{code:0x1f523,x:12,y:6},{code:0x1f524,x:13,y:6},{code:0x1f170,x:14,y:0},{code:0x1f18e,x:3,y:1},{code:0x1f171,x:0,y:1},{code:0x1f191,x:4,y:1},{code:0x1f192,x:5,y:1},{code:0x1f193,x:6,y:1},{code:0x2139,x:10,y:9},{code:0x1f194,x:7,y:1},{code:0x24c2,x:0,y:11},{code:0x1f195,x:8,y:1},{code:0x1f196,x:9,y:1},{code:0x1f17e,x:1,y:1},{code:0x1f197,x:10,y:1},{code:0x1f17f,x:2,y:1},{code:0x1f198,x:11,y:1},{code:0x1f199,x:12,y:1},{code:0x1f19a,x:13,y:1},{code:0x1f201,x:10,y:3},{code:0x1f202,x:11,y:3},{code:0x1f237,x:4,y:4},{code:0x1f236,x:3,y:4},{code:0x1f22f,x:13,y:3},{code:0x1f250,x:8,y:4},{code:0x1f239,x:6,y:4},{code:0x1f21a,x:12,y:3},{code:0x1f232,x:14,y:3},{code:0x1f251,x:9,y:4},{code:0x1f238,x:5,y:4},{code:0x1f234,x:1,y:4},{code:0x1f233,x:0,y:4},{code:0x3297,x:15,y:12},{code:0x3299,x:15,y:13},{code:0x1f23a,x:7,y:4},{code:0x1f235,x:2,y:4},{code:0x1f534,x:4,y:7},{code:0x1f535,x:5,y:7},{code:0x26ab,x:9,y:13},{code:0x26aa,x:8,y:13},{code:0x2b1c,x:15,y:8},{code:0x25fc,x:6,y:11},{code:0x25fb,x:5,y:11},{code:0x25fe,x:8,y:11},{code:0x25fd,x:7,y:11},{code:0x25aa,x:1,y:11},{code:0x25ab,x:2,y:11},{code:0x1f536,x:6,y:7},{code:0x1f537,x:7,y:7},{code:0x1f538,x:8,y:7},{code:0x1f539,x:9,y:7},{code:0x1f53a,x:10,y:7},{code:0x1f53b,x:11,y:7},{code:0x1f4a0,x:1,y:5},{code:0x1f518,x:1,y:6},{code:0x1f533,x:3,y:7},{code:0x1f532,x:2,y:7},{code:0x1f3c1,x:12,y:4},{code:0x1f6a9,x:1,y:8},{code:0x1f38c,x:10,y:4},{code:0x1f3f4,x:0,y:5},{code:0x1f3f3,x:14,y:4},{code:0x1f1e6,x:14,y:1},{code:0x1f1e7,x:0,y:2},{code:0x1f1e8,x:1,y:2},{code:0x1f1e9,x:2,y:2},{code:0x1f1ea,x:3,y:2},{code:0x1f1eb,x:4,y:2},{code:0x1f1ec,x:5,y:2},{code:0x1f1ed,x:6,y:2},{code:0x1f1ee,x:7,y:2},{code:0x1f1ef,x:8,y:2},{code:0x1f1f0,x:9,y:2},{code:0x1f1f1,x:10,y:2},{code:0x1f1f2,x:11,y:2},{code:0x1f1f3,x:12,y:2},{code:0x1f1f4,x:13,y:2},{code:0x1f1f5,x:14,y:2},{code:0x1f1f6,x:0,y:3},{code:0x1f1f7,x:1,y:3},{code:0x1f1f8,x:2,y:3},{code:0x1f1f9,x:3,y:3},{code:0x1f1fa,x:4,y:3},{code:0x1f1fb,x:5,y:3},{code:0x1f1fc,x:6,y:3},{code:0x1f1fd,x:7,y:3},{code:0x1f1fe,x:8,y:3},{code:0x1f1ff,x:9,y:3}]
    };

    var getEmoji = function (code) {
        if (code < 0x10000) {
            return String.fromCharCode(code);
        }
        var offset = code - 0x10000,
            lead = 0xd800 + (offset >> 10),
            trail = 0xdc00 + (offset & 0x3ff);
        return String.fromCharCode(lead)+String.fromCharCode(trail);
    };

    var emoji_data = {}, all = {};

    var getEmojiByIndex = function (idx) {
        var emoji;
        for (var emoji_list in raw_data) {
           if (raw_data[emoji_list][idx]) {
               emoji = raw_data[emoji_list][idx];
               break;
           }
        }
        return getEmoji(emoji.code);
    };

    for (var emoji_list in raw_data) {
        _.each(raw_data[emoji_list], function (item) {
            var emoji = getEmoji(item.code);
            emoji_data[emoji] = item;
            !all[emoji_list] && (all[emoji_list] = []);
            all[emoji_list].push(emoji);
        });
    }

    var emoji_regexp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

    String.prototype.emojify = function (options) {
        options || (options = {});
        var sprite = options.sprite,
            tag_name = sprite ? (options.tag_name || 'span') : 'img',
            emoji_size = options.emoji_size || 20,
            href = options.href ? ` href="#${options.href}" ` :"",
            title = options.title ? ` title="${options.title}" ` :"";
        return this.replace(emoji_regexp, function (emoji) {
            let data = emoji_data[emoji],
                emoji_code = data && Number(data.code).toString(16);
            if (data) {
                (emoji_code.length < 4) && (emoji_code = "0".repeat(4 - emoji_code.length) + emoji_code);
                let img_src = tag_name === 'img' ? (sprite ? ' src="images/emoji/blank.gif"' : '  src="images/emoji/svg32/emoji_u' + emoji_code + '.svg"') : '';
                return '<' + tag_name + img_src + href + title + ' class="emoji emoji-w' + emoji_size +
                    (sprite ? (' sprite-' + sprite + '" style="background-position: ' + '-' + (emoji_size * data.x) + 'px ' + '-' + (emoji_size * data.y) + 'px;" ') : '" ') +
                    'alt="' + emoji + '" ' +
                    'data-emoji="' + emoji + '"/>';
            }
            else
                return emoji;
        });
    };

    String.prototype.removeEmoji = function () {
        return this.replace(emoji_regexp, function (emoji) {
            var data = emoji_data[emoji];
            if (data) {
                return "";
            } else {
                return emoji;
            }
        });
    };

    String.prototype.replaceEmoji = function () {
        return this.replace(emoji_regexp, function (emoji) {
            var data = emoji_data[emoji];
            if (data) {
                return " ";
            } else {
                return emoji;
            }
        });
    };

    $.fn.emojify = function (selector, options) {
        this.find(selector).each(function () {
            var text = $(this).html();
            $(this).html(text.emojify(options));
        });
        return this;
    };

    return {
        all: all,
        get: getEmoji,
        getByIndex: getEmojiByIndex
    };
});