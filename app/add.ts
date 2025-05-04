{
    // type Tbook = {
    //     name : string,
    //     author : string,
    //     price : number
    // }


    // function getBook <T, K extends keyof T> (book : T, key : K ):T[K] {
               
    //   return  book[key]
    // }

    // const myBook : Tbook = {
    //     name : 'javaSCript',
    //     author : 'Sifat',
    //     price : 200
    //     price : 200
    // }

    // const result = getBook(myBook,'price')
    // console.log('price is :' ,result)


    // Maped types
    //Mother fucker Maped types
    

    type TAdress = {
        houseNum : number,
        city : string,
        thana : string,
        buisness : string,
        familyMember : number
    }

    // create optional type
    type ToptionalAdress = {
        [T in keyof TAdress]? : TAdress[T]
    }

    const myAdress: TAdress = {
         
        houseNum : 3,
        city : 'Chuadanga',
        thana : 'Chuadanga',
        buisness : 'Social influancer',
        familyMember : 5
    }
    
    //Test optional type 
    const myParmanent : ToptionalAdress = {
        houseNum: 4,
        city: 'bagan',
        thana: 'Chuadanga'
    }
}