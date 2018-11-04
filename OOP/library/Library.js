/* 
Library
 */
function Library (limit) {
    let Limit = limit;
    let totalBook = 0; //счетчик книг 
    let Limit1 = Limit; //запомнить заданный лимит

    //установка лимита
    this.setLimit = function () {
        return Limit;
    };
    
    this.getLimit = function () {
        gLimit = Limit;
    };
        
    console.log("общая база библиотеки:", Limit1);
    
    //Вернуть книги
    this.put = function (book, quantity) { 
        for (i=0; i < quantity; i++) { 
            if((Limit + 1) <= Limit1) { 
            Limit = Limit + 1; 
            totalBook = totalBook + 1;
        }
        }
        console.log('Хотели вернуть:', quantity, 'Принято:', totalBook,'Осталось в библиотеке:', Limit);
                    totalBook = 0;
    };

    //Взять книги
    this.get = function (book, quantity) {
            Limit -= quantity;
            console.log('Выдано:', quantity, 'Осталось в библиотеке:', Limit);
        };
    }

