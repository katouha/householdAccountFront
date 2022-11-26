export const passwordAsterisk = (password) => {
    if(password){
        let passwordLength = password.length;
        let passwordAsterisk = "";
        for(let i = 0; i < passwordLength; i++){
            passwordAsterisk += "＊";
        }
        return passwordAsterisk;
    }
}

export const genderConvert = (genderType) => {
    if(genderType){
        switch(genderType){
            case "1":
                return "男性";
            case "2":
                return "女性";
            default:
                return "その他";
        }
    }
}