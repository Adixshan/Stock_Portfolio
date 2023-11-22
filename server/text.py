import os
import math
import sys

from transformers import pipeline, AutoModelForQuestionAnswering, AutoTokenizer

# Define the model and tokenizer
model_name = "bert-large-uncased-whole-word-masking-finetuned-squad"
model = AutoModelForQuestionAnswering.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

qa_pipeline = pipeline("question-answering", model=model, tokenizer=tokenizer)

input_paragraph = ''
input_question = ""

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print('No input data')
    else:
        input_paragraph = sys.argv[1]
        input_question = sys.argv[2]

answer = qa_pipeline(question=input_question, context=input_paragraph)
#print(answer['answer'])

if input_question is not None:
    answer_text = answer['answer']
    start_idx = input_paragraph.find(answer_text)
    end_idx = start_idx + len(answer_text)

    start_idx = max(0, start_idx - 50)
    end_idx = min(len(input_paragraph), end_idx + 50)
    more_context = input_paragraph[start_idx:end_idx]
    print(more_context)
