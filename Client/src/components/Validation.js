const validation = (userData) => {
    const errors={}

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)){
        errors.email = 'el Email ingresado no es valido uwu'
    }
    if(!userData.email){
        errors.email = 'Ingresa un Email capo'
    }

    if(userData.email.length > 35){
        errors.email = 'Muy largo ese Email amigo/a no te pases de los 35'
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la Contraseña necesita un numero CAPO DALE DESPERTATE'
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contra debe estar entre 6 y 10 characters mostro'
    }

    return errors
}

export default validation