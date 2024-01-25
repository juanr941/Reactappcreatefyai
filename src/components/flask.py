from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from openai import AzureOpenAI
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

client = AzureOpenAI(
    api_key=os.getenv("795635b14c094c1e8268f883ab2f81e7"),  
    api_version="2023-07-01-preview",
    azure_endpoint = os.getenv("https://developer-guru-2.openai.azure.com/openai/deployments/gpt-4-32k/chat/completions?api-version=2023-07-01-preview")
    )


@app.route('/message', methods=['POST'])
def receive_message():
    data = request.json
    html_content = data.get['message','']
    # Process the message as needed
    soup = BeautifulSoup (html_content,'html.parser')
    text_to_translate = soup.get_text()

    #OpenAi to translate 

    response = AzureOpenAI.Completion.create(
        model= 'gpt-4-32k',
        prompt='Translate this to Spanish: {}'.format(text_to_translate),
        max_tokens= 32000

    )
    
    translated_text = response.choices [0].text.strip()
    
    for content in soup.stripped_strings:
        html_content = html_content.replace(content,translated_text)

    
    return jsonify({'reply':html_content})


if __name__ == '__main__':
    app.run(debug=True)


#previous messages. 
# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes

# @app.route('/message', methods=['POST'])
# def receive_message():
#     data = request.json
#     message = data['message','']
#     # Process the message as needed
#     response = {"reply": "Message received:" + message}
#     return jsonify(response)

# if __name__ == '__main__':
#     app.run(debug=True)



# quickstart https://learn.microsoft.com/en-us/azure/ai-services/openai/quickstart?tabs=bash%2Cpython-new&pivots=programming-language-python