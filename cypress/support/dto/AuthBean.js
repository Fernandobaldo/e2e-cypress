class AuthServiceBean {
    constructor(
        email,
        senha,
    ) {
        this.email = email;
        this.senha = senha;
    }

    setEmail(email) {
        if (email) this.email = email;
        return this;
    }

    setSenha(senha) {
        if (senha) this.senha = senha;
        return this;
    }
}

module.exports = AuthServiceBean;
