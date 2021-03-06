$(window).on('load',function(){


  const Catalogo=(path_fetch)=>{

    
    fetch(path_fetch)
    .then(res=>res.json())
    .then(data=>{

     
        for(let i=0; i<data.length;i++){
         // console.log(data, i, path_fetch);
            $('.contenedor-productos').append(`
            
            
            <div class="producto ">

            <svg class="producto-catalogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 361.22 645.5">
                <defs>
                  <style>
                    .a78734ff-477c-4727-8a0e-feb4dd631a58 {
                      isolation: isolate;
                    }
              
                    .e453bc9b-4610-4119-87e9-ecb3e81b186d {
                      fill: #193900;
                    }
              
                    .e7688d6f-2194-4807-944e-1d9ab5be861d {
                      fill: #193901;
                    }
              
                    .b623f15a-1a8f-4992-9f10-364cdd433c44 {
                      fill: #356301;
                    }
              
                    .e59a8075-b1af-4269-8fa4-8d8b8f2f0afb {
                      fill: #5d9d01;
                    }
              
                    .bb92bb92-ee6d-45cd-9a23-8eed700202a6 {
                      fill: #909618;
                    }
              
                    .ab349b03-7111-42f1-8e5c-823b687703d7 {
                      fill: #aac70a;
                    }
              
                    .ba1cd2a5-6529-4adf-a365-8075a9aab379 {
                      fill: #4b9002;
                    }
              
                    .b1a9e263-4aec-4dd0-8f57-f8dc4915e000, .be782e6d-da7d-4fc7-b5a1-f8783bf934e7 {
                      fill: #163e00;
                    }
              
                    .a3565b7f-6b9b-46b4-a2fd-e627ab5cb4f0 {
                      fill: #215502;
                    }
              
                    .fee64c29-bbb8-4756-8493-c9629631a95a {
                      fill: #528101;
                    }
              
                    .b1a3f5d1-f7d3-47bd-9398-8b2d147e8671 {
                      fill: #8ec601;
                    }
              
                    .a1cd2d6b-241b-4775-9fa1-a99c0c6e206b {
                      fill: #a0ca08;
                    }
              
                    .abfd37fb-99c3-42a6-a191-1c407894e00b {
                      fill: #2c6401;
                    }
              
                    .badf2e26-8d17-4cf6-b7e6-0c5b1f35cb02 {
                      fill: #184200;
                    }
              
                    .be548afa-fed0-4551-98b0-64ce477519b7 {
                      fill: #b0d808;
                    }
              
                    .bb65f02a-0621-4a52-8e88-040413116733 {
                      fill: #2d6605;
                    }
              
                    .e1df1c14-b115-4343-be8b-5c2b2ea3442b {
                      fill: #4a7e00;
                    }
              
                    .ae9abe61-1589-4db7-bfbb-66976cd598f5 {
                      fill: #aee00d;
                    }
              
                    .a3505135-2b61-4d26-8810-e38fd924e67c {
                      fill: #b0d10e;
                    }
              
                    .b7efeb32-df1d-4600-84da-574f8f918603 {
                      fill: #193c01;
                    }
              
                    .aadf0623-bdf6-47a6-8dc7-d63b3d179f81 {
                      fill: #1d4a05;
                    }
              
                    .a7f4a240-270c-482e-8f02-3cd3f7aac5ca {
                      fill: #83b903;
                    }
              
                    .ac508502-823c-4452-9798-37029dfa44a1 {
                      fill: #a5c710;
                    }
              
                    .e65f0d1e-beb3-46a2-98a3-ab30d7f42f86 {
                      fill: #295c11;
                    }
              
                    .b649eeab-7b01-49d6-b47c-b9cdf87cf55a {
                      fill: #2f6710;
                    }
              
                    .bcf858c5-5a05-46f8-ad33-7612b6925ab7 {
                      fill: #cfe41d;
                    }
              
                    .af3a7b45-4a7f-4808-a108-6a5772fbe905 {
                      fill: #cbdf1c;
                    }
              
                    .bbe87922-94e5-4b08-83a9-d522095ec162 {
                      fill: #60a204;
                    }
              
                    .a9592b4f-678b-47c1-9eb9-ffa05ab16c84 {
                      fill: #79ae04;
                    }
              
                    .bf2b8f40-40c7-4bef-a432-f381a9b7db0e {
                      fill: #989b1b;
                    }
              
                    .b012f8db-ce8f-4ecf-ac5d-7811ca65f2d5 {
                      fill: #3b5107;
                    }
              
                    .afbac10b-e98a-4fc6-bf90-28bb7af8d968 {
                      fill: #589b1a;
                    }
              
                    .f3d69721-633b-4dc0-b3dc-e5efcbe647d2 {
                      fill: #1d4d03;
                    }
              
                    .edc1b290-1f01-46a2-8b57-dad78b7a0eda {
                      fill: #6e8e14;
                    }
              
                    .a013e086-4d5f-49f6-812f-06c4ca28db6a {
                      fill: #99d803;
                    }
              
                    .ac806670-2449-4373-9ca3-22e47cb3e6c9 {
                      fill: #7dbe08;
                    }
              
                    .f6d7a10d-5fe5-419e-849a-1b13f959fdb3 {
                      fill: #b4d115;
                    }
              
                    .b17c0273-bc0c-4628-ba4d-377fdd714d39 {
                      fill: #e0f131;
                    }
              
                    .ac260a89-28e7-412e-ac5a-bae533d7adfa {
                      fill: #326d0c;
                    }
              
                    .bf2c7703-f865-47e0-bd0b-11bb5c97d1bc {
                      fill: #38711a;
                    }
              
                    .fb02a879-a8af-49a2-a8e8-9bdf8094efe3 {
                      fill: #306316;
                    }
              
                    .f8a1db5f-bf00-4dbd-a2fc-3b9859fe50b9 {
                      fill: #56931a;
                    }
              
                    .a0df364a-f528-4f59-bde2-fbdbd51391dd {
                      fill: #447c14;
                    }
              
                    .fb36f805-ac43-48d5-8d4e-f6005aec4070 {
                      fill: #3a6d11;
                    }
              
                    .aa332507-0258-4b22-853d-c548de2a7e8e {
                      fill: #78b609;
                    }
              
                    .b22fc25f-66af-4bbd-8687-6aa3465ea3c3 {
                      fill: #316204;
                    }
              
                    .b5cc8a90-d106-42a5-a44a-25b7a4e98229 {
                      fill: #e9f83d;
                    }
              
                    .ba54ba06-5daa-461f-9541-5b0cf5b79422 {
                      fill: #d4e523;
                    }
              
                    .e814b15c-b11d-4b39-ac16-5111a705ba38 {
                      fill: #b1e217;
                    }
              
                    .a607b743-6f36-481a-9bce-199c25ed0fa6 {
                      fill: #d1e222;
                    }
              
                    .b0b0594e-24b4-4255-86a1-100806d9fae3 {
                      fill: #204401;
                    }
              
                    .ec930386-8c2b-4e15-b60c-e09baac2c86f {
                      fill: #57980a;
                    }
              
                    .bf22dedc-0228-4c73-97a8-4bd9b9d44583 {
                      fill: #264a01;
                    }
              
                    .f7ec40bf-163b-45ff-92da-01484c8c5cd2 {
                      fill: #316405;
                    }
              
                    .bc4f65ad-7d52-4032-a619-d17713e37b66 {
                      fill: #1a3302;
                    }
              
                    .a3306520-7a4f-44a4-9ed1-01702b857be2 {
                      fill: #1f3a02;
                    }
              
                    .a278dbc3-7436-4b54-9e4a-92fee273656e, .b9654628-3b73-445c-b1b7-38504526f929 {
                      fill: #fff;
                    }
              
                    .b9654628-3b73-445c-b1b7-38504526f929 {
                      opacity: 0.5;
                      mix-blend-mode: soft-light;
                    }
              
                    .b1a9e263-4aec-4dd0-8f57-f8dc4915e000 {
                      font-size: 35px;
                      stroke: #163e00;
                    }
              
                    .b1a9e263-4aec-4dd0-8f57-f8dc4915e000, .b1ecfa7f-a9b5-4c33-a468-366b5cfe2d83, .b772dba1-109e-4dd0-b83d-7c691993952c {
                      stroke-miterlimit: 10;
                    }
              
                    .b1a9e263-4aec-4dd0-8f57-f8dc4915e000, .b1ecfa7f-a9b5-4c33-a468-366b5cfe2d83 {
                      stroke-width: 0.25px;
                    }
              
                    .b1a9e263-4aec-4dd0-8f57-f8dc4915e000, .b5cd6311-f259-4abf-8184-734b6393dd0a {
                      font-family: MyriadPro-Regular, Myriad Pro;
                    }
              
                    .af67d43d-cb19-45e8-90db-a2ad9bb98f9f {
                      letter-spacing: -0.01em;
                    }
              
                    .a27b619c-3ead-4bf9-910a-8bd876ae5d1e {
                      letter-spacing: 0em;
                    }
              
                    .b772dba1-109e-4dd0-b83d-7c691993952c {
                      fill: none;
                      stroke-width: 0.5px;
                      stroke: #528101;
                    }
              
                    .b1ecfa7f-a9b5-4c33-a468-366b5cfe2d83, .b772dba1-109e-4dd0-b83d-7c691993952c {
                      stroke: #000;
                    }
              
                    .b5cd6311-f259-4abf-8184-734b6393dd0a {
                      font-size: 35px;
                      stroke: #FFFFFF;
                      fill : #FFFFFF;
                    }
              
                    .a6fd8c9f-9555-4da4-bd6b-fab2ca9ef598 {
                      letter-spacing: -0.01em;
                    }
              
                    .ab7d5be8-070b-490d-8776-0020bace1e47 {
                      letter-spacing: 0.01em;
                    }
              
                    .bbc5feee-2b3d-4bfc-b549-365fce6b5040 {
                      letter-spacing: -0.01em;
                    }
                  </style>
                </defs>
                <g class="a78734ff-477c-4727-8a0e-feb4dd631a58">
                  <g id="b948355e-7577-4def-b218-a3615fefa905" data-name="micard">
                    <g id="a210a34c-5fe6-40fb-88d0-19751d22a0f0" data-name="Card">
                      <g>
                        <g>
                          <polygon class="e453bc9b-4610-4119-87e9-ecb3e81b186d" points="344.04 645.25 360.2 645.25 360.2 576.27 330.28 632.22 344.04 645.25"/>
                          <polygon class="e7688d6f-2194-4807-944e-1d9ab5be861d" points="300.88 645.25 344.04 645.25 330.28 632.22 300.88 645.25"/>
                          <polygon class="b623f15a-1a8f-4992-9f10-364cdd433c44" points="360.2 490.44 360.2 477.46 342.09 490.44 360.2 490.44"/>
                          <polygon class="e59a8075-b1af-4269-8fa4-8d8b8f2f0afb" points="315.37 490.44 342.09 490.44 360.2 477.46 360.2 469.81 319.28 460.1 315.37 490.44"/>
                          <polygon class="bb92bb92-ee6d-45cd-9a23-8eed700202a6" points="284.94 414.72 281.72 412.02 281.95 415.3 284.94 414.72"/>
                          <polygon class="ab349b03-7111-42f1-8e5c-823b687703d7" points="1.26 334.32 1.26 343.25 7.3 334.32 1.26 334.32"/>
                          <polygon class="b623f15a-1a8f-4992-9f10-364cdd433c44" points="41.35 370.5 1.26 416.12 1.26 425.25 48.82 425.25 41.35 370.5"/>
                          <polygon class="ba1cd2a5-6529-4adf-a365-8075a9aab379" points="96.94 393.73 48.82 425.25 91.13 469.23 96.94 393.73"/>
                          <polygon class="be782e6d-da7d-4fc7-b5a1-f8783bf934e7" points="1.26 494.65 1.26 545.87 41.35 516.51 1.26 494.65"/>
                          <polygon class="a3565b7f-6b9b-46b4-a2fd-e627ab5cb4f0" points="48.82 425.25 1.26 484.7 1.26 494.65 41.35 516.51 48.82 425.25"/>
                          <polygon class="fee64c29-bbb8-4756-8493-c9629631a95a" points="1.26 356.43 1.26 416.12 41.35 370.5 1.26 356.43"/>
                          <polygon class="b1a3f5d1-f7d3-47bd-9398-8b2d147e8671" points="21.04 334.32 7.3 334.32 1.26 343.25 1.26 356.43 41.35 370.5 21.04 334.32"/>
                          <polygon class="a1cd2d6b-241b-4775-9fa1-a99c0c6e206b" points="21.04 334.32 41.35 370.5 39.67 334.32 21.04 334.32"/>
                          <polygon class="abfd37fb-99c3-42a6-a191-1c407894e00b" points="1.26 425.25 1.26 484.7 48.82 425.25 1.26 425.25"/>
                          <polygon class="badf2e26-8d17-4cf6-b7e6-0c5b1f35cb02" points="1.26 545.87 1.26 552.46 47.53 552.46 41.35 516.51 1.26 545.87"/>
                          <polygon class="be548afa-fed0-4551-98b0-64ce477519b7" points="118.18 334.32 77.53 334.32 41.35 370.5 127.64 349.76 118.18 334.32"/>
                          <polygon class="bb65f02a-0621-4a52-8e88-040413116733" points="48.82 425.25 41.35 516.51 91.13 469.23 48.82 425.25"/>
                          <polygon class="e1df1c14-b115-4343-be8b-5c2b2ea3442b" points="41.35 370.5 48.82 425.25 96.94 393.73 41.35 370.5"/>
                          <polygon class="ae9abe61-1589-4db7-bfbb-66976cd598f5" points="319.28 460.1 349.94 421.65 293.19 421.65 284.94 414.72 281.95 415.3 319.28 460.1"/>
                          <polygon class="a3505135-2b61-4d26-8810-e38fd924e67c" points="39.67 334.32 41.35 370.5 77.53 334.32 39.67 334.32"/>
                          <polygon class="b7efeb32-df1d-4600-84da-574f8f918603" points="268.12 565.29 330.28 632.22 360.2 576.27 360.2 565.29 268.12 565.29"/>
                          <polygon class="aadf0623-bdf6-47a6-8dc7-d63b3d179f81" points="41.35 516.51 47.53 552.46 91.58 552.46 41.35 516.51"/>
                          <polygon class="a7f4a240-270c-482e-8f02-3cd3f7aac5ca" points="127.64 349.76 41.35 370.5 96.94 393.73 127.64 349.76"/>
                          <polygon class="ac508502-823c-4452-9798-37029dfa44a1" points="193.18 338.97 127.64 349.76 164.97 416.13 193.18 338.97"/>
                          <polygon class="e65f0d1e-beb3-46a2-98a3-ab30d7f42f86" points="41.35 516.51 91.58 552.46 135.12 552.46 147.55 519 41.35 516.51"/>
                          <polygon class="b649eeab-7b01-49d6-b47c-b9cdf87cf55a" points="91.13 469.23 41.35 516.51 147.55 519 91.13 469.23"/>
                          <polygon class="bcf858c5-5a05-46f8-ad33-7612b6925ab7" points="136.7 334.32 127.64 349.76 193.18 338.97 189.65 334.77 189.11 334.32 136.7 334.32"/>
                          <polygon class="af3a7b45-4a7f-4808-a108-6a5772fbe905" points="136.7 334.32 118.18 334.32 127.64 349.76 136.7 334.32"/>
                          <polygon class="bbe87922-94e5-4b08-83a9-d522095ec162" points="96.94 393.73 91.13 469.23 164.97 416.13 96.94 393.73"/>
                          <polygon class="a9592b4f-678b-47c1-9eb9-ffa05ab16c84" points="164.97 416.13 127.64 349.76 96.94 393.73 164.97 416.13"/>
                          <polygon class="bf2b8f40-40c7-4bef-a432-f381a9b7db0e" points="193.28 337.81 189.65 334.77 193.18 338.97 193.28 337.81"/>
                          <polygon class="b012f8db-ce8f-4ecf-ac5d-7811ca65f2d5" points="164.97 416.13 91.13 469.23 195.67 478.35 164.97 416.13"/>
                          <polygon class="afbac10b-e98a-4fc6-bf90-28bb7af8d968" points="91.13 469.23 147.55 519 195.67 478.35 91.13 469.23"/>
                          <polygon class="f3d69721-633b-4dc0-b3dc-e5efcbe647d2" points="172.74 620.01 172.76 620.01 172.75 620 172.74 620.01"/>
                          <polygon class="edc1b290-1f01-46a2-8b57-dad78b7a0eda" points="195.67 478.35 226.36 382.94 164.97 416.13 195.67 478.35"/>
                          <polygon class="a013e086-4d5f-49f6-812f-06c4ca28db6a" points="360.2 469.81 360.2 421.65 349.94 421.65 319.28 460.1 360.2 469.81"/>
                          <polygon class="ac806670-2449-4373-9ca3-22e47cb3e6c9" points="280.41 490.44 319.28 460.1 281.95 415.3 258.39 490.44 280.41 490.44"/>
                          <polygon class="f6d7a10d-5fe5-419e-849a-1b13f959fdb3" points="226.36 382.94 193.18 338.97 164.97 416.13 226.36 382.94"/>
                          <polygon class="b17c0273-bc0c-4628-ba4d-377fdd714d39" points="195.14 339.38 193.84 338.29 193.18 338.97 195.14 339.38"/>
                          <polygon class="ac260a89-28e7-412e-ac5a-bae533d7adfa" points="70.07 591.57 0.25 645.23 0.27 645.25 65.44 645.25 101.68 593.42 70.07 591.57"/>
                          <polygon class="bf2c7703-f865-47e0-bd0b-11bb5c97d1bc" points="67.26 591.57 101.68 593.42 81.63 581.43 67.26 591.57"/>
                          <polygon class="fb02a879-a8af-49a2-a8e8-9bdf8094efe3" points="135.12 552.46 151.68 552.46 168.83 536.16 147.55 519 135.12 552.46"/>
                          <polygon class="f8a1db5f-bf00-4dbd-a2fc-3b9859fe50b9" points="195.67 478.35 147.55 519 189.33 516.66 216.13 491.18 195.67 478.35"/>
                          <polygon class="a0df364a-f528-4f59-bde2-fbdbd51391dd" points="104.48 565.29 81.63 581.43 101.68 593.42 113.57 565.29 104.48 565.29"/>
                          <polygon class="fb36f805-ac43-48d5-8d4e-f6005aec4070" points="147.55 519 168.83 536.16 189.33 516.66 147.55 519"/>
                          <polygon class="aa332507-0258-4b22-853d-c548de2a7e8e" points="216.13 491.18 216.91 490.44 258.39 490.44 281.95 415.3 195.67 478.35 216.13 491.18"/>
                          <polygon class="b22fc25f-66af-4bbd-8687-6aa3465ea3c3" points="101.68 593.42 62.22 645.25 127.51 645.25 153.93 635.86 101.68 593.42"/>
                          <polygon class="b5cc8a90-d106-42a5-a44a-25b7a4e98229" points="193.84 338.29 193.28 337.81 193.18 338.97 193.84 338.29"/>
                          <polygon class="ba54ba06-5daa-461f-9541-5b0cf5b79422" points="226.36 382.94 239.18 376.33 195.14 339.38 193.18 338.97 226.36 382.94"/>
                          <polygon class="e814b15c-b11d-4b39-ac16-5111a705ba38" points="281.95 415.3 226.36 382.94 195.67 478.35 281.95 415.3"/>
                          <polygon class="a607b743-6f36-481a-9bce-199c25ed0fa6" points="226.36 382.94 281.95 415.3 281.72 412.02 239.18 376.33 226.36 382.94"/>
                          <polygon class="b0b0594e-24b4-4255-86a1-100806d9fae3" points="268.12 565.29 263.91 565.29 238.97 645.25 300.88 645.25 330.28 632.22 268.12 565.29"/>
                          <polygon class="ec930386-8c2b-4e15-b60c-e09baac2c86f" points="315.37 490.44 319.28 460.1 280.41 490.44 315.37 490.44"/>
                          <polygon class="bf22dedc-0228-4c73-97a8-4bd9b9d44583" points="127.51 645.25 171.04 645.25 153.93 635.86 127.51 645.25"/>
                          <polygon class="f7ec40bf-163b-45ff-92da-01484c8c5cd2" points="113.57 565.29 101.68 593.42 247.4 565.29 113.57 565.29"/>
                          <polygon class="bc4f65ad-7d52-4032-a619-d17713e37b66" points="101.68 593.42 153.93 635.86 259.88 565.29 247.4 565.29 101.68 593.42"/>
                          <polygon class="a3306520-7a4f-44a4-9ed1-01702b857be2" points="259.88 565.29 153.93 635.86 171.04 645.25 238.97 645.25 263.91 565.29 259.88 565.29"/>
                          <polygon class="e453bc9b-4610-4119-87e9-ecb3e81b186d" points="351.72 551.53 361.13 551.51 361.21 498.24 343.74 541.48 351.72 551.53"/>
                          <polygon class="e7688d6f-2194-4807-944e-1d9ab5be861d" points="327.01 551.44 352.11 552.03 344.35 541.78 327.01 551.44"/>
                          <polygon class="b7efeb32-df1d-4600-84da-574f8f918603" points="307.65 489.85 343.74 541.48 361.21 498.24 361.22 489.76 307.65 489.85"/>
                          <polygon class="ac260a89-28e7-412e-ac5a-bae533d7adfa" points="190.77 510.33 146.49 551.84 146.5 551.86 187.78 551.79 210.79 511.73 190.77 510.33"/>
                          <polygon class="bf2c7703-f865-47e0-bd0b-11bb5c97d1bc" points="190.77 510.33 210.79 511.73 199.14 502.48 190.77 510.33"/>
                          <polygon class="a0df364a-f528-4f59-bde2-fbdbd51391dd" points="212.45 490 199.14 502.48 210.79 511.73 217.74 489.99 212.45 490"/>
                          <polygon class="b22fc25f-66af-4bbd-8687-6aa3465ea3c3" points="210.79 511.73 187.78 551.79 225.76 551.73 241.14 544.45 210.79 511.73"/>
                          <polygon class="b0b0594e-24b4-4255-86a1-100806d9fae3" points="307.65 489.85 305.2 489.85 290.6 551.63 326.61 551.57 343.74 541.48 307.65 489.85"/>
                          <polygon class="bf22dedc-0228-4c73-97a8-4bd9b9d44583" points="227.2 551.06 252.51 551.66 242.73 544.17 227.2 551.06"/>
                          <polygon class="f7ec40bf-163b-45ff-92da-01484c8c5cd2" points="217.74 489.99 210.79 511.73 295.59 489.87 217.74 489.99"/>
                          <polygon class="bc4f65ad-7d52-4032-a619-d17713e37b66" points="210.79 511.73 241.14 544.45 302.85 489.86 295.59 489.87 210.79 511.73"/>
                          <polygon class="a3306520-7a4f-44a4-9ed1-01702b857be2" points="302.85 489.86 241.14 544.45 251.08 551.69 290.6 551.63 305.2 489.85 302.85 489.86"/>
                        </g>
                        <rect class="b9654628-3b73-445c-b1b7-38504526f929" x="12.3" y="594.15" width="347.95" height="51.1"/>
                      </g>
                    </g>
                  </g>
                  <g id="aaeb92f3-483a-41ad-b439-3966dde47757" class="btn-comprar" data-name="Boton-comprar">
                    <rect class="a278dbc3-7436-4b54-9e4a-92fee273656e" x="118.25" y="576.25" width="234" height="60"/>
                    <text class="b1a9e263-4aec-4dd0-8f57-f8dc4915e000" transform="translate(159.13 614.49)">Comprar</text>
                  </g>
                  <g id="ee6c7897-798b-4b34-8cd4-d1b51103e251" data-name="Producto">
                    <image width="1322"  height="1113" transform="translate(0.25 0.25) scale(0.27)" xlink:href="${data[i].img}"/>
                  </g>
                  <g id="ffaad3fa-c2e5-42f0-ba95-a4dcea1886ad" data-name="borde">
                    <rect class="b772dba1-109e-4dd0-b83d-7c691993952c" x="0.25" y="0.25" width="360" height="645"/>
                  </g>
                  <g id="b030cc5d-669b-4fb8-b2fb-132801de16f6" data-name="Precio-producto">
                    <text class="b5cd6311-f259-4abf-8184-734b6393dd0a" transform="translate(25.05 520.19)">${data[i].precio}</text>
                  </g>
                  <g id="f5ae3d64-4dbd-496e-87bf-f1cc452d3296" data-name="Rectangulo-divisor">
                    <rect class="b1ecfa7f-a9b5-4c33-a468-366b5cfe2d83" x="15.25" y="476.25" width="306" height="1"/>
                  </g>
                  <g id="a44cccc2-8373-452c-81f9-d83bb41de515" data-name="Nombre-producto" value="${data[i].nombre}">
                    <text class="b5cd6311-f259-4abf-8184-734b6393dd0a dato-clave"   transform="translate(21.05 454.19)">${data[i].nombre}</text>
                  </g>
                </g>
              </svg>
              
          
              
        </div>
        

            
            `);
        }//end for


        //combo del dia
        $('.do-click').on('click',function () {
          
          fetch('data/combo-diario-.json')
          .then(res=>res.json())
          .then(data=>{

            console.log(data)
            $('.new-page').append(`

            <div class="page-two position-fixed">

            <span class="icono-cerrar"> <i class="fas fa-window-close"></i></span>
            <div class="container-1 ">
     
            <div class="card" style="width: 100%;">
                <img src="${data[0].img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h3 class="card-title">${data[0].nombre}</h3>
                  <p class="card-text">Envios a todo Colombia, pagos contra entrega en la ciudad de Bogotá </p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Pagos: </strong> Contraentrega, trasnferencia PSE, tarjetas débito y crédito, efecty, baloto, nequi o daviplata</li>
                <li class="list-group-item"><strong>Especificaciones: </strong> Habla con uno de nuestros asesores para saber mas sobre este producto, toda la atencion es 100% personalizada</li>
                  <li class="list-group-item"><strong>Precio:</strong> ${data[0].precio}</li>
                  <li class="list-group-item"><strong>Moneda :</strong> pesos cop</li>
                  <li class="list-group-item"><strong>Pais :</strong> Colombia</li>

                  <li class="list-group-item"><a href="${data[0].mercadoLibre}" class="btn-comprar-m btn btn-block"><h4>Comprar en mercado libre</h4><br>(No aplican descuentos ni promociones)</a></li>
                  <li class="list-group-item"><a href="https://api.whatsapp.com/send?phone=573192091708&text=Hola,%20vengo%20del%20catálogo,%20quiero%20comprar%20${data[0].nombre}" class="btn-comprar-c btn btn-block"><h2>Comprar en Cannabis Shop</h2>(Hasta 10% off pipas, promocion combos activa )</a></li>
                  <li class="list-group-item"><div class="btn-comprar-m"></div></li>
                  <li class="list-group-item"><strong>Hablar con asesor :</strong> Nuestros asesores te guiaran para realizar tu compra protegida, de manera sencilla y personalizada</li>
                </ul>
                <div class="card-body d-block">

                  <a href="https://api.whatsapp.com/send?phone=573228873812&text=Hola,%20vengo%20del%20catálogo%20me%20podrias%20ayudar" class="btn btn-success btn-block"><h5>Asesor 1</h5> <span class="icono-whatsapp"><i class="fab fa-whatsapp-square"></i></span> </a>
                  <a href="https://api.whatsapp.com/send?phone=573192091708&text=Hola,%20vengo%20del%20catálogo%20me%20podrias%20ayudar" class="btn btn-success btn-block"><h5>Asesor 2</h5> <span class="icono-whatsapp"><i class="fab fa-whatsapp-square"></i></span> </a>

                </div>
              </div>

        </div>
           



            </div>
            `

            );
                        //cerrar pagina 2
                        $('.icono-cerrar').on('click',function(){
        
                          $('.page-two').remove();
                      });
          
          })
        })

        

        //click comprar pestaña informacion
        $('.btn-comprar').on('click',function(e){

            


            let identificador=e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[2].parentElement.textContent;
          // console.log(identificador.trim());
           


           for(let h=0; h<data.length;h++){       
               

            if(identificador.trim()==data[h].nombre.trim()){
             // console.log('bbddd: ',data[h].mercadoLibre)

                $('.new-page').append(`

            <div class="page-two position-fixed">

            <span class="icono-cerrar"> <i class="fas fa-window-close"></i></span>
     
             <div class="container-1 ">
     
                 <div class="card" style="width: 100%;">
                     <img src="${data[h].img}" class="card-img-top" alt="...">
                     <div class="card-body">
                       <h3 class="card-title">${data[h].nombre}</h3>
                       <p class="card-text">Envíos a todo Colombia, pagos contra entrega en la ciudad de Bogotá </p>
                     </div>
                     <ul class="list-group list-group-flush">
                     <li class="list-group-item"><strong>Pagos: </strong> Contra entrega, trasnferencia PSE, tarjetas debito y credito, efecty, baloto, nequi o daviplata</li>
                       <li class="list-group-item"><strong>Precio:</strong> ${data[h].precio}</li>
                       <li class="list-group-item"><strong>Moneda :</strong> pesos cop</li>
                       <li class="list-group-item"><strong>Pais :</strong> Colombia</li>

                       <li class="list-group-item"><a href="${data[h].mercadoLibre}" class="btn-comprar-m btn btn-block"><h4>Comprar en mercado libre</h4>(No aplican descuentos ni promociones)</a></li>
                       <li class="list-group-item"><a href="https://api.whatsapp.com/send?phone=573192091708&text=Hola,%20vengo%20del%20catálogo,%20quiero%20comprar%20${data[h].nombre}" class="btn-comprar-c btn btn-block"><h2>Comprar en Cannabis Shop</h2>(Hasta 10% off pipas, promocion combos activa )</a></li>
                       <li class="list-group-item"><strong>Especificaciones: </strong> Habla con uno de nuestros asesores para saber mas sobre este producto, toda la atencion es 100% personalizada</li>
                       <li class="list-group-item"><strong>Hablar con asesor :</strong> Nuestros asesores te guiaran para realizar tu compra protegida, de manera sencilla y personalizada</li>
                     </ul>
                     <div class="card-body d-block">
                     <a href="https://api.whatsapp.com/send?phone=573228873812&text=Hola,%20vengo%20del%20catalogo%20me%20podrias%20ayudar,%20me%20%interesa%20${data[h].nombre}" class="btn btn-success btn-block"><h5>Asesor 1</h5> <span class="icono-whatsapp"><i class="fab fa-whatsapp-square"></i></span> </a>
                     <a href="https://api.whatsapp.com/send?phone=573192091708&text=Hola,%20vengo%20del%20catalogo%20me%podrias%20ayudar,%20me%20interesa%20${data[h].nombre}" class="btn btn-success btn-block"><h5>Asesor 2</h5> <span class="icono-whatsapp"><i class="fab fa-whatsapp-square"></i></span> </a>
   
                     </div>
                   </div>
     
             </div>
     
         </div>
            
            
            
            `);//end append



            }//end if

           }//end for h


            //cerrar pagina 2
            $('.icono-cerrar').on('click',function(){
        
                $('.page-two').remove();
            });


        });//end btn comprar
        




    
    }); //end fetch

  }



let path_fetch="data/catalogo.json";


//console.log(window.location.hash)

let contenedorCategpria = document.getElementsByClassName('categoria-1');
     
//condiciones iniciales
if(window.location.hash==="#all" || window.location.hash===""){

  path_fetch="data/catalogo.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Ver todo';

} 
else if(window.location.hash==="#pipas"){

  path_fetch="data/pipas.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Pipas';

}
else if(window.location.hash==="#grinder"){

  path_fetch="data/grinder.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Grinders'

}
else if(window.location.hash==="#cueros"){
  path_fetch="data/cueros.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Cueros'
}
else if(window.location.hash==="#encendedores"){
  path_fetch="data/encendedores.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Encendedores'
}
else if(window.location.hash==="#bongs"){
  path_fetch="data/bongs.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Bongs'
}
else if(window.location.hash==="#combos"){
  path_fetch="data/combos.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Combos'
}
else if(window.location.hash==="#otros"){
  path_fetch="data/otros.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Otros'
}else{
  path_fetch="data/catalogo.json";
  Catalogo(path_fetch);
}



//detectar cambio en url
$(window).bind('hashchange', function() { 
$('.producto').remove();


if(window.location.hash==="#all" || window.location.hash===""){
  path_fetch="data/catalogo.json";
  Catalogo(path_fetch);
} 
if(window.location.hash==="#pipas"){
  path_fetch="data/pipas.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#grinder"){
  path_fetch="data/grinder.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#cueros"){
  path_fetch="data/cueros.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#encendedores"){
  path_fetch="data/encendedores.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#bongs"){
  path_fetch="data/bongs.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#combos"){
  path_fetch="data/combos.json";
  Catalogo(path_fetch);
}
else if(window.location.hash==="#otros"){
  path_fetch="data/otros.json";
  Catalogo(path_fetch);
  contenedorCategpria[0].innerHTML='Ver todo'
}



});






    $('.cerrar-promocion').on('click',function(){

      $('.promo').remove();
    })

});