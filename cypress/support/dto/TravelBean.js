class TravelServiceBean {
    constructor(
      acompanhante,
      dataPartida,
      dataRetorno,
      localDeDestino,
      regiao,
    ) {
        this.acompanhante = acompanhante;
        this.dataPartida = dataPartida;
        this.dataRetorno = dataRetorno;
        this.localDeDestino = localDeDestino;
        this.regiao = regiao;
    }

    setAcompanhante(acompanhante) {
        if (acompanhante) this.acompanhante = acompanhante;
        return this;
    }

    setDataPartida(dataPartida) {
        if (dataPartida) this.dataPartida = dataPartida;
        return this;
    }

    setDataRetorno(dataRetorno) {
        if (dataRetorno) this.dataRetorno = dataRetorno;
        return this;
    }

    setLocalDeDestino(localDeDestino) {
        if (localDeDestino) this.localDeDestino = localDeDestino;
        return this;
    }

    setRegiao(regiao) {
        if (regiao) this.regiao = regiao;
        return this;
    }

}

module.exports = TravelServiceBean;
