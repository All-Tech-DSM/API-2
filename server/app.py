
from flask import Flask, request
import json 
from buscador import busca
from leitor import leitor
   
# Setup flask server
app = Flask(__name__) 
  
# Setup url route which will calculate
# total sum of array.
@app.route('/associados', methods = ['POST']) 
def associados(): 
    data = request.get_json() 
    ls = data['array'] 
    result = busca()
    return json.dumps({"result":result})

@app.route('/trechos', methods = ['POST'])
# #[[nome, id]]
def trechos():
    data = request.get_json()
    nome = data['array']
    result = []
    for n in nome:
        pessoa = []
        pessoa.append(n[0])
        pessoa.append(n[1])
        pessoa.append(n[2])
        pessoa.append([])
        pessoa.append(leitor(n[0]))
        result.append(pessoa)
    return json.dumps({"result":result})
    

#[[id,nome,email,'pdf',trecho]]


   
if __name__ == "__main__": 
    app.run(port=5000)