# node-array
Projeto de introdução com banco de dados.


# Como debugar no VSCODE com o Node.JS

1 - Clica no botão RUN and DEBUG

![image](https://github.com/devsamuelsilva/node-array/assets/134964243/7df7bf99-e7f5-4895-8cf5-f06ce99172d6)

2- Clicar em CREAT A LAUNCH.JASON

![image](https://github.com/devsamuelsilva/node-array/assets/134964243/f9d8fcfc-5bbd-4c27-add2-525a30d3e8a8)

3 - Selecionar NODE.JS

![image](https://github.com/devsamuelsilva/node-array/assets/134964243/9d5bbfdf-d59d-47f6-80af-587585b7c182)

4 - Alteral o valor de "program": apontando para o nome do arquivo que executa a aplicação, neste exemplo: "server.js"

```jason
{
    // Use o IntelliSense para saber mais sobre os atributos possíveis.
    // Focalizar para exibir as descrições dos atributos existentes.
    // Para obter mais informações, acesse: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Iniciar o Programa",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/server.js"
        }
    ]
}
```
