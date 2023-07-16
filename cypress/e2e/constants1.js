
function generateRandom(length, type) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    if (type === 'number') {
        for (let i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
    } else if (type === 'string') {
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }

    return result;
}

export const InvalidEmail = [
    , "      @mail.com"
    , "abc   @mail.com"
    , "@mail.com"
    , "abc@      "
    , "abc@"
    , "abc.com"
    , "abc..def@mail.com"
    , ".abc@mail.com"
    , "abc.def@mail#archive.com"
    , "abc.def@mail"
    , "abc.def@mail..com"
];
export const DescriptionforInvalidEmail = [
    , "should show error message if email contains white space only before @"
    , "should show error message if email contains white space between prefix and @"
    , "@mail.com"
    , "abc@      "
    , "abc@"
    , "abc.com"
    , "abc..def@mail.com"
    , ".abc@mail.com"
    , "abc.def@mail#archive.com"
    , "abc.def@mail"
    , "abc.def@mail..com"
];

export const TestcaseForInvalidEmail = [
    {
        email: "      @mail.com",
        description: "should show error message if email contains white space only before @"
    },
    {
        email: "abc   @mail.com",
        description: "should show error message if email contains white space between prefix and @"
    },
    {
        email: "@mail.com",
        description: "should show error message if email contains white space between prefix and @"
    },
    {
        email:"abc@      ",
        description: "should show error message if email contains only white space after @"
    },
    {
        email:"abc@",
        description:"should show error message if email is missing domain" 
    },
    {
        email:"abc.com",
        description:"should show error message if email is missing @" 
    },
    {
        email:"abc.com",
        description:"should show error message if email is missing @" 
    },
    {
        email:"abc..def@mail.com",
        description:"Email format 'abc..def@mail.com'" 
    },
    {
        email:".abc@mail.com",
        description:"Email format '.abc@mail.com'" 
    },
    {
        email:"abc.def@mail#archive.com",
        description:"Email format 'abc.def@mail#archive.com'" 
    },
    {
        email:"abc.def@mail",
        description:"Email format 'abc.def@mail'" 
    },
    {
        email:"abc.def@mail..com",
        description:"Email format 'abc.def@mail..com'" 
    }

]

export const ValidEmail = [
    `423b${generateRandom(3, 'string')}c@mail.cc`
    , `1${generateRandom(3, 'string')}abc-d@mail.com`
    , `1a${generateRandom(3, 'string')}bc.def@mail.com`
    , `1a${generateRandom(3, 'string')}bc_def@mail.com`
    , `1a${generateRandom(3, 'string')}bc.def@mail-archive.com`
    , `               abc${generateRandom(3, 'string')}@gmail.com1`
]
export const InvalidPassword = [
    ""
    , "      @mail.com"
    , "abc   @mail.com"
    , "@mail.com"
    , "abc@      "
    , "abc@"
    , "abc.com"
    , "abc..def@mail.com"
    , ".abc@mail.com"
    , "abc.def@mail#archive.com"
    , "abc.def@mail"
    , "abc.def@mail..com"
]