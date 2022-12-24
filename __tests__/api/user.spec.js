// bibliotecas
const supertest = require("supertest");
const assert = require("chai").assert;

const userId = 1025636;
const username = "tom";
let frase;
let token;

// Classes (Opcional)
describe("PetStore Swagger - User", () => {
    const request = supertest("https://petstore.swagger.io/v2");    
    // Funções ou Métodos
    // Adicionar Usuário
    it("POST User", () => {
        const jsonFile = require("../../vendors/user1.json");
        return request 
        .post("/user")
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.code, 200);
            assert.equal(resposta.body.type, "unknown");        
            assert.equal(resposta.body.message, userId);
            });
    });

    // consultar Usuário
    it("GET User", () => {
        return request
        .get("/user/" + username)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.id, userId);
            assert.equal(resposta.body.password, "12345");
            assert.equal(resposta.body.phone, "11999999998");
        });          

    });

    // Alterar Usuário
    it("PUT User", () => {
        const jsonFile = require("../../vendors/user2.json");
        return request 
        .put("/user/" + username)
        .send(jsonFile)
        .then((resposta) =>{
            assert.equal(resposta.statusCode, 200);
            assert.equal(resposta.body.code, 200);
            assert.equal(resposta.body.type, "unknown");        
            assert.equal(resposta.body.message, userId);
            });
    });
      
    // Excluir Usuário
    /*
    it("DELETE User", () => {
        return request
        .delete("/user/" + username)
        .then((resposta) => {
            assert.equal(resposta.statusCode, 200);
        });          

    });
        */

    // Login com extração do token
    it("Login com Extração", () => {
        const username = "tom";
        const password = "123455";

        return request
            .get("/user/login?username=" + username + "&password=" + password)
            //.get("/user/login?username=tom&password=123455")
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.code, 200);
                assert.equal(resposta.body.type, "unknown");
                mensagem = resposta.body.message;
                frase = mensagem.substring(0,mensagem.indexOf(":") + 1);
                console.log("A frase eh: " + frase);
                assert.equal(frase, "logged in user session:");
                token = mensagem.substring(mensagem.indexOf(":") + 1)
                console.log("O token eh " + token);
            });       

    });

});
