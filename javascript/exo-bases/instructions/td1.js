let password = 'dhgteuiklkm';

function checkPwdSize(pwd) {
    let pwdSize = pwd.length;

    if (pwdSize >= 8) {
        console.log(`le mot de passe contient plus de ${pwdSize} caractères`);
        console.log('le mot de passe contient plus de %d', pwdSize, ' caractères');

    } else {
        console.log(`le mot de passe contient ${pwdSize} caractères`);


    }


}

checkPwdSize(password);