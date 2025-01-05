from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
from nltk.tokenize import word_tokenize

 
app=Flask(__name__)
CORS(app)


@app.route('/nlp_code_input',methods=['POST'])
def process():
    data=request.get_json()
    msg=data.get('msg')
    tokens= word_tokenize(msg)

    code=''
    if 'code' in tokens or 'print' in tokens:
        word_index=tokens.index('print')
        word_value=tokens[word_index+1]
        code=f'print("{word_value}")'
    return jsonify(code)    
    


if __name__=='__main__':
    app.run(debug=True)    
