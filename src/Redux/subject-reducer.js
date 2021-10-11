
let initialState = {
    subjects:[
        {
            id:0,
            title:"Математическая логика и теория алгоритмов в практике программирования",
            links:[
               {
                  name:"ДЗ",
                  url:"https://lib.mospolytech.com/docs/nabebin/Nabebin_VOPROSY_po_MLTA_37.pdf"
               },
               {
                  name:"Остальные материалы",
                  url:"https://lib.mospolytech.com/docs/nabebin"
               }
               ,
               {
                  name:"Зум",
                  url:"https://us06web.zoom.us/j/6423304512?pwd=STdqekhJVVVkNGlMM2RJdlNQc2FXdz09&cc_key=#success"
               }
               ,
               {
                  name:"Таблица успеваемости",
                  url:"https://docs.google.com/spreadsheets/d/14UFLPzges2EpxaeuGO0cwFRrSyg1JYIwYmDonkPqMO0/edit#gid=2071425012"
               }
            ],
            prepods:[
               {
                  name:"Набебин Алексей Александрович",
                  email:"anabebin@yandex.ru",
                  other:null
               },
               {
                  name:"Будылина Евгения Александровна",
                  email:"bud-ea@yandex.ru",
                  other:null
               }
            ]
         }
    ]
};
const subjectReducer = (state = initialState, action) => {
    
    switch (action.type) {
        default: return state;
    };
};

export default subjectReducer;
