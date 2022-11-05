
from flask import Flask, request
import json 
from buscador import busca
from leitor import leitor
   
app = Flask(__name__) 
  
@app.route('/associados', methods = ['POST']) 
def associados(): 
    print('associados')
    data = request.get_json() 
    ls = data['array'] 
    result = busca()
    return json.dumps({"result":result})
   
if __name__ == "__main__": 
    app.run(port=5000)