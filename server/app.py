from flask import Flask, request
import json 
from buscador import busca
from leitor import leitor
from escritor import relatorio
from carteiro import enviar
   
app = Flask(__name__) 
  
@app.route('/associados', methods = ['POST']) 
def associados(): 
    data = request.get_json() 
    ls = data['array'] 
    result = busca()
    relatorio()
    return json.dumps({"result":result})

@app.route('/envio_email', methods= ['POST'])
def envio_email():
    data = request.get_json()
    info = data['array']
    enviar(info[2],info[-2], info[1])
    return json.dumps({"result":'email enviado'})

if __name__ == "__main__": 
    app.run(port=5000)