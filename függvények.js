export function konzolraIr(SZEMELYLISTA) {
    /*a SZEMÉLYLISTA adatait kiírja a kozolra
    nev: "Géza" tel: 06-30-4454564*/
    // console.log(SZEMELYLISTA[1].tel)
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        console.log(`név: ${SZEMELYLISTA[index].nev,SZEMELYLISTA[index].tel}`);    
    }
    
    
}
export function listaOsszeallit(SZEMELYLISTA) {
    let txt="<ul>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        txt += `<li>név: ${SZEMELYLISTA[index].nev}, tel: ${SZEMELYLISTA[index].tel}</li>`;
        
    }
    txt+= "<ul>"
    console.log(txt)
    return txt
    
}

export function kartyaKeszit(SZEMELYLISTA) {
    let txt="<div>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        txt += `<li>név: ${SZEMELYLISTA[index].nev}, súly: ${SZEMELYLISTA[index].súly},tel: ${SZEMELYLISTA[index].tel}</li>`;
        
    }
    txt+= "</div>"
    console.log(txt)
    return txt
}