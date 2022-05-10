function getCheapestHotel(input) { //DO NOT change the function's name.
    // separar tipo de cliente das datas desejadas
    let info = input.split(":")

    //selecionar o tipo de cliente em uma variável
    let tipoDeCliente = info[0]

    //selecionar as datas desejadas em uma lista
    let datas = info[1].split(",")

    //funcoes diferentes para calcular o preco de cada hotel, nas datas desejadas
    let precoLake = precoLakewood(datas, tipoDeCliente)
    let precoBridge = precoBridgewood(datas, tipoDeCliente)
    let precoRidge = precoRidgewood(datas, tipoDeCliente)

    //comparar os precos e tomar decisao

    //caso o Hotel Lakewood seja o mais barato
    if (precoLake < precoBridge & precoLake < precoRidge) {
        return "Lakewood"
    } else {
        // caso o Hotel Bridgewood seja o mais barato
        if (precoBridge < precoLake & precoBridge < precoRidge) {
            return "Bridgerwood"
        } else {
            // caso o Hotel Ridgewood seja o mais barato
            if (precoRidge < precoBridge & precoRidge < precoLake) {
                return "Ridgewood"
            } else {
                // caso haja empate em algum dos preços
                //caso Ridgewood tenha empatado, escolher ele sempre (maior classificacao)
                if (precoRidge == precoLake || precoRidge == precoBridge) {
                    return "Ridgewood"
                } else {
                    //caso Bridgewood esteja dentre os empatados, escolhe-lo
                    if (precoBridge == precoLake) {
                        return "Bridgerwood"
                    }
                }
            }
        }
    }

}

//uma funcao para calcular o preco total de cada hotel
function precoLakewood(datas, tipo) {
    //inicializar a variavel preco
    let preco = 0
    //selecionar o tipo de cliente
    if (tipo == "Regular") {
        //calcula o preco com base nas datas. Funcao para calcular quantos dias sãi fim de semana e quantos são na semana
        //para o cliente Regular
        preco = ((calculaDiasMeioSemana(datas) * 110) + (calculaDiasFimSemana(datas) * 90));
    } else {
        //para o cliente "premium"
        if (tipo == "Rewards") {
            preco = ((calculaDiasMeioSemana(datas) * 80) + (calculaDiasFimSemana(datas) * 80));
        }
    }
    return preco
}

function precoBridgewood(datas, tipo) {
    //inicializar a variavel preco
    let preco = 0
    if (tipo == "Regular") {
        //calcula o preco com base nas datas. Funcao para calcular quantos dias sãi fim de semana e quantos são na semana
        //para o cliente Regular
        preco = ((calculaDiasMeioSemana(datas) * 160) + (calculaDiasFimSemana(datas) * 60));
    } else {
        //para o cliente "premium"
        if (tipo == "Rewards") {
            preco = ((calculaDiasMeioSemana(datas) * 110) + (calculaDiasFimSemana(datas) * 50));
        }
    }
    return preco
}

function precoRidgewood(datas, tipo) {
    //inicializar a variavel preco
    let preco = 0
    if (tipo == "Regular") {
        //calcula o preco com base nas datas. Funcao para calcular quantos dias sãi fim de semana e quantos são na semana
        //para o cliente Regular
        preco = ((calculaDiasMeioSemana(datas) * 220) + (calculaDiasFimSemana(datas) * 150));
    } else {
        //para o cliente "premium"
        if (tipo == "Rewards") {
            preco = ((calculaDiasMeioSemana(datas) * 100) + (calculaDiasFimSemana(datas) * 40));
        }
    }
    return preco
}

//funcao para calcular quantos dias estao no meio da semana
function calculaDiasMeioSemana(datas) {
    let totalDias = 0;
    //repetir o processo para cada item da lista
    for (let i = 0; i < datas.length; i++) {
        //selecionar apenas a parte referente ao dia da semana de cada item da lista
        dia = datas[i].substr(datas[i].indexOf("(") + 1, 3)
        //escolher dentre as possibilidades e adicionar uma unidade para cada dia da lista que corresponder a um dia da semana
        switch (dia) {
            case "mon":
                totalDias++
                break;

            case "tue":
                totalDias++
                break;

            case "wed":
                totalDias++
                break;

            case "thu":
                totalDias++
                break;

            case "fri":
                totalDias++
                break;

            default:
                break;
        }
    }

    return totalDias;
}

//funcao para calcular quantos dias estao no final da semana
function calculaDiasFimSemana(datas) {
    let diasFimSemana = 0
    //repetir o processo para cada item da lista
    for (let i = 0; i < datas.length; i++) {
        dia = datas[i].substr(datas[i].indexOf("(") + 1, 3)
        //escolher dentre as possibilidades e adicionar uma unidade para cada dia da lista que corresponder a um dia de fim de semana
        switch (dia) {
            case "sat":
                diasFimSemana++
                break;

            case "sun":
                diasFimSemana++
                break;

            default:
                break;
        }
    }
    return diasFimSemana
}


exports.getCheapestHotel = getCheapestHotel
