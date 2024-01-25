from flask_cors import CORS, cross_origin
import os
import sys
from dotenv import load_dotenv
# import langchain libraries to read pdf documents
from langchain.document_loaders import PyPDFLoader
from langchain.document_loaders import Docx2txtLoader
from langchain.document_loaders import TextLoader
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.text_splitter import CharacterTextSplitter

from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# create .env file in your repository and type OPENAI_API_KEY="SK-{YourKey}"
load_dotenv('.env')

documents = []
# Create a List of Documents from all of our files in the ./docs folder
for file in os.listdir("docs"):
    if file.endswith(".pdf"):
        pdf_path = "./docs/" + file
        loader = PyPDFLoader(pdf_path)
        documents.extend(loader.load())
    elif file.endswith('.docx') or file.endswith('.doc'):
        doc_path = "./docs/" + file
        loader = Docx2txtLoader(doc_path)
        documents.extend(loader.load())
    elif file.endswith('.txt'):
        text_path = "./docs/" + file
        loader = TextLoader(text_path)
        documents.extend(loader.load())

# Split the documents into smaller chunks
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=10)
documents = text_splitter.split_documents(documents)

# Convert the document chunks to embedding and save them to the vector store
vectordb = Chroma.from_documents(
    documents, embedding=OpenAIEmbeddings(), persist_directory="./data")
vectordb.persist()

# create our Q&A chain
pdf_qa = ConversationalRetrievalChain.from_llm(
    ChatOpenAI(temperature=0.7, model_name='gpt-3.5-turbo'),
    retriever=vectordb.as_retriever(search_kwargs={'k': 6}),
    return_source_documents=True,
    verbose=False
)

yellow = "\033[0;33m"
green = "\033[0;32m"
white = "\033[0;39m"

chat_history = []
print(f"{yellow}---------------------------------------------------------------------------------")
print('Welcome to the Createfy Chatbot. You are now ready to start interacting with your documents')
print('---------------------------------------------------------------------------------')
# while True:
#     query = input(f"{green}Prompt: ")
#     if query == "exit" or query == "quit" or query == "q" or query == "f":
#         print('Exiting')
#         sys.exit()
#     if query == '':
#         continue
#     result = pdf_qa(
#         {"question": query, "chat_history": chat_history})
#     print(f"{white}Answer: " + result["answer"])
#     chat_history.append((query, result["answer"]))

# @app.route("/query", methods=["POST"])

# def prompt_request():
#     # query = input(f"{green}Prompt: ")
#     data = request.json
#     query = data[]
#     return query


@app.route("/")
@cross_origin()
def home():
    return "Hello!!!!"


@app.route("/message", methods=["POST"])
def response_pdf_result():
    # while True():
    data = request.json
    # whatever a person types on the chatbot I need to send the text.
    query = data["message"]
    print(query)
    # query = input(f"{green}Prompt: ")
    if query == "exit" or query == "quit" or query == "q" or query == "f":
        print('Exiting')
        sys.exit()
    # if query == '':
    #     continue
    result = pdf_qa(
        {"question": query, "chat_history": chat_history})
    print(f"{white}Answer: " + result["answer"])
    chat_history.append((query, result["answer"]))
    text = result["answer"]
    return jsonify({"answer": text})


if __name__ == "__main__":
    # response_pdf_result()
    app.run(host="0.0.0.0", debug=True)
