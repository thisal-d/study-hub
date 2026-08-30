<div align="center">

# Sri Lanka Institute of Information Technology

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063228985.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rYci9YB%2FTMxqLcGHJOZGQodjXUs%3D&Expires=1788668029' alt='OCR图片'/></div>

SE3090 - Software Engineering Frameworks Year 3, Semester 1-2026

Practical Answer Submission

Practical Sheet No: 05

<table border="1"><tr><td>Student ID</td><td>IT24103408</td></tr><tr><td>Student Name</td><td>Diluminda H A D T</td></tr><tr><td>Campus/ Center name</td><td>Malabe</td></tr><tr><td>Specialization</td><td>Software Engineering</td></tr><tr><td>Batch No</td><td>SE.01.02</td></tr></table>

## Pre-Lab setup

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229036.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uO2%2FvlZU8ybfur0ggNyVj4ZwcoQ%3D&Expires=1788668029' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_2_1788063229043.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OWeEfFtUgygwvsrf6RIgMDeFQxA%3D&Expires=1788668029' alt='OCR图片'/></div>

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>pip install -r requirements.txt

Collecting langchain<2.0,>=1.0 (from -r requirements.txt (line 4))

Downloading langchain-1.3.16-py3-none-any.whl.metadata (6.1 kB)

Collecting langchain-google-genai<5.0,>=4.0 (from -r requirements.txt (line 5))

Downloading langchain_google_genai-4.3.5-py3-none-any.whl.metadata (2.7 kB)

Collecting langgraph<2.0,>=1.0 (from -r requirements.txt (line 6))

Downloading langgraph-1.2.11-py3-none-any.whl.metadata (4.9 kB)

Collecting python-dotenv>=1.0 (from -r requirements.txt (line 7))

Downloading python_dotenv-1.2.3-py3-none-any.whl.metadata (29 kB)

Requirement already satisfied: jupyterlab>=4.0 in C:\Users\user\AppData\Local\Programs\Python\Python313\L

site-packages (from -r requirements.txt (line 10)) (4.3.5)

Requirement already satisfied: ipykernel>=6.29 in C:\Users\user\AppData\Local\Programs\Python\Python313\L

site-packages (from -r requirements.txt (line 11)) (6.29.5)

Collecting fastapi>=0.115 (from -r requirements.txt (line 14))

Downloading fastapi-0.141.1-py3-none-any.whl.metadata (27 kB)

Collecting uvicorn>=0.30 (from uvicorn[standard]>=0.30->-r requirements.txt (line 15))

Downloading uvicorn-0.52.4-py3-none-any.whl.metadata (6.6 kB)

Requirement already satisfied: requests>=2.32 in C:\Users\user\AppData\Local\Programs\Python\Python313\L

ite-packages (from -r requirements.txt (line 16)) (2.32.3)

Collecting langchain-core<2.0.0,>=1.6.0 (from langchain<2.0,>=1.0->-r requirements.txt (line 4))

Downloading langchain_core-1.6.0-py3-none-any.whl.metadata (4.8 kB)

Collecting pydantic<3.0.0,>=2.7.4 (from langchain<2.0,>=1.0->-r requirements.txt (line 4))

Downloading pydantic-2.13.4-py3-none-any.whl.metadata (109 kB)

Collecting filetype<2.0.0,>=1.2.0 (from langchain-google-genai<5.0,>=4.0->-r requirements.txt (line 5))

Downloading filetype-1.2.0-py2.py3-none-any.whl.metadata (6.5 kB)

Collecting google-genai<3.0.0,>=1.65.0 (from langchain-google-genai<5.0,>=4.0->-r requirements.txt (line

Downloading google_genai-2.19.0-py3-none-any.whl.metadata (56 kB)

Collecting langgraph-checkpoint<5.0.0,>=4.1.0 (from langgraph<2.0,>=1.0->r requirements.txt (line 6))

Downloading langgraph_checkpoint-4.2.0-py3-none-any.whl.metadata (6.7 kB)

```python

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>python -c "import langchain, fastapi;print('ok')"

ok

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>

```

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>python -m ipykernel install --user --name agentic-w5 --display-name "Agentic AI (week 5)"

Installed kernelspec agentic-w5 in C:\Users\user\AppData\Roaming\jupyter\kernels\agentic-w5

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>jupyter kernelspec list

Available kernels:

  agentic-w5    C:\Users\user\AppData\Roaming\jupyter\kernels\agentic-w5

  python3      C:\Users\user\AppData\Local\Programs\Python\Python313\share\jupyter\kernels\python3

C:\Users\user\Desktop\lab-5\SE3090_Lab05_Resource>

## Task 00

## 1. Kernel checks cell

# — KERNEL CHECK — run this FIRST —

# Standard library only, so it works even when nothing else is installed.

import importlib.util

import sys

from pathlib import Path

LAB_DIR = Path.cwd()

in_a_venv = sys.prefix != sys.base_prefix

on_lab_venv = in_a_venv and Path(sys.prefix).resolve() == (LAB_DIR / ".venv").resolve()

print("this kernel runs :", sys.executable)

print("on this lab .venv:", "yes" if on_lab_venv else "no")

REQUIRED = ["dotenv", "langchain", "langchain_google_genai",

           "langgraph", "fastapi", "uvicorn", "requests"]

missing = [m for m in REQUIRED if importlib.util.find_spec(m) is None]

if missing:

    print("\nMISSING:", ", ".join(missing))

    print("Fix: Kernel > Change Kernel... > 'Agentic AI (week 5)', then re-run.")

    print("Not in the list? With .venv active run:")

    print('  python -m ipykernel install --user --name agentic-w5 \'')

    print('        --display-name "Agentic AI (week 5)"')

else:

    print("\nAll packages present. Continue.")

this kernel runs : C:\Users\user\AppData\Local\Programs\Python\Python313\python.exe

on this lab .venv: no

All packages present. Continue.

## 2. Configuration cell

# Environment check 1/2 – configuration. No model call, no quota spent.

import os

from pathlib import Path

from dotenv import load_dotenv

load_dotenv(Path.cwd() / ".env")       # THIS folder's .env, not a shared one

API_KEY = os.getenv("GOOGLE_API_KEY", "")

CHAT_MODEL = os.getenv("CHAT_MODEL", "gemini-2.5-flash-lite")

assert API_KEY and "XXXX" not in API_KEY, (

    "GOOGLE_API_KEY missing: copy .env.example -> .env and paste your "

    "Google AI Studio key (https://aistudio.google.com/apikey)"

)

print("model:", CHAT_MODEL)

print("key  :", API_KEY[:6] + "..." + API_KEY[-4:])    # never print it in full

model: gemini-3.5-flash-lite

key  : AQ.Ab8...HhWQ

## 3. Model cell

# Environment check 2/2 – one real call to the model (costs 1 request)

from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(

    model=CHAT_MODEL,

    google_api_key=API_KEY,

    temperature=0,      # near-deterministic: debug behaviour, not variety

    timeout=60,         # a hung request must fail, not wedge the notebook

    max_retries=3,      # back off and retry on a transient 429

)

print(llm.invoke("Reply with exactly: OK").content)

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

Direct use of automatic function calling (AFC) in Models.generate_content is not recommended. Instead, we recommend to use AFC in Chat.send_message. Simi-

larly, direct use of AFC in Models.generate_content_stream is not recommended. Instead, we recommend to use AFC in Chat.send_message_stream.

[{'type': 'text', 'text': 'OK', 'extras': {'signature': 'E14KXAERTTIPq0EPi9QTjvErqAGbKVfPCB08XGN0Af4AUJnYyYvmA57o70LgurRJRrUKvaWgaaVxejzrXh0Av3erSAOKQoh

xcE1mRVT57K514ENeQIHiwUV0Zu8j02u'}]}]

If that printed OK , your key, model ID and network are all correct.That is your green light.If not, the fix is almost always in this table:| What you see | Fix ||---|---||

ModuleNotFoundError | Wrong kernel — see the kernel-check cell above || PermissionDenied / "API key not valid" | Re-copy the key; check for a trailing space ||

NotFound / "model not found" | Model ID typo. Use a plain ID, no prefix, no URL || ResourceExhausted (429) | Per-minute limit. Wait ~60 s and re-run ||

DeadlineExceeded | Network/VPN blocking generativelanguage.googleapis.com |

## Task 1: Raw chat: statelessness, Memory and Temperature

Step 1: one call, and a use full habit

# 1. One-shot call, plus a habit worth keeping

from langchain_core.messages import AIMessage, HumanMessage, SystemMessage

def text_of(msg) -> str:

    """Return a message's text whether .content is a plain string or a list of content blocks. Gemini can return either; code that assumes a string crashes with AttributeError the first time it meets the other shape."""

    c = msg.content

    if isinstance(c, list):

        return "".join(b.get("text", "") for b in c if isinstance(b, dict))

    return c

response = llm.invoke([HumanMessage("In one sentence, what is an AI agent?")])

print("reply :", text_of(response))

print("tokens:", response.usage_metadata)

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config()

    reply : An AI agent is an autonomous software program that perceives its environment, makes decisions using artificial intelligence, and takes actions to achieve specific goals without constant human intervention.

    tokens: {'input_tokens': 11, 'output_tokens': 31, 'total_tokens': 42, 'input_token_details': {'cache_read': 0}}

usage_metadata is LangChain's provider-neutral token count: input_tokens , output_tokens , total_tokens the same three keys whichevermodel you point at. Look at it now: in Task 02 you will watch input_tokens climb on every iteration. That number is the price of memory.

## Step 2: Amnesia demonstration

[5]: # 2. The amnesia demo – a SECOND, FRESH call knows nothing about the first

llm.invoke([HumanMessage("Hi! My name is Nadia.")]) # 'learns' the name...

response = llm.invoke([HumanMessage("What is my name?")]) # ...call is gone

print(text_of(response)) # it has no idea

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

I don't know your name because you haven't told me yet! What should I call you?

Step 3: The fix: memory is a python list that you re-send

# 3. The fix: memory is YOUR code re-sending the history

history = [

    HumanMessage("Hi! My name is Nadia."),

]

reply = llm.invoke(history)

history.append(reply) # keep the assistant turn

history.append(HumanMessage("What is my name?"))

print(text_of(llm.invoke(history))) # full transcript re-sent -> it 'remembers'

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_gpu

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_gpu

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored

request = self._build_request_config()

Your name is Nadia!

## Step 4: Temperature

# 4. Temperature: consistency vs creativity (4 requests – pace yourself)

prompt = [HumanMessage("Give a name for a coffee shop run by robots. Name only.")]

for temp in (0.0, 1.2):

    model = ChatGoogleGenerativeAI(

        model=CHAT_MODEL, google_api_key=API_KEY,

        temperature=temp, timeout=60, max_retries=3,

    )

    names = [text_of(model.invoke(prompt)).strip() for _ in range(2)]

    print(f"temperature={temp}: {names}")

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config()

temperature=0.0: ['Automata Brew', 'RoboBrew']

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config()

temperature=1.2: ['RoboBrew', 'Mechanic Mocha']

## Exercise 1.1 Your own persona

# 3. The fix: memory is YOUR code re-sending the history

history = [

    SystemMessage("You are a strick librarian. Answer breifly and formally"),

    HumanMessage("Hi! My name is Nadia."),

]

reply = llm.invoke(history)

history.append(reply) # keep the assistant tuned

history.append(HumanMessage("What is my name?"))

print(text_of(llm.invoke(history))) # full transcript re-sent -> it 'removes'

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langch

lite' uses fixed sampling defaults; the sampling parameter(s) temperature will

request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langch

lite' uses fixed sampling defaults; the sampling parameter(s) temperature will

request = self._build_request_config(

Your name is Nadia. Please keep your voice down.

# 3. The fix: memory is YOUR code re-sending the history

history = [

    HumanMessage("Hi! My name is Nadia."),

]

reply = llm.invoke(history)

history.append(reply) # keep the assistant turn

history.append(HumanMessage("What is my name?"))

print(text_of(llm.invoke(history))) # full transcript re-sent -> it 'remembers

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_goc

lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ig

request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_goc

lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ig

request = self._build_request_config(

Your name is Nadia!

## Task 02: The hand-rolled agent loop

## 1. Step 2 - see exactly what the model sees

2]: # What the model actually sees. Every part of this JSON came from your

# function signature and docstring. Nothing else about your code is visible.

import json

print(json.dumps(get_weather.args_schema.model_json_schema(), indent=2))

print("\ndescription sent to the model:", get_weather.description)

{

  "description": "Current weather for a city. Use whenever the user asks about weather.",

  "properties": {

    "city": {

      "title": "City",

      "type": "string"

    }

  },

  "required": [

    "city"

  ],

  "title": "get_weather",

  "type": "object"

}

## Step 3: Bind the tools to the model

[14]: # YOUR TURN - TODO 1: bind the tools, then inspect ONE raw tool call.

#

# a) llm_with_tools = llm.bind_tools([get_weather, calculator])

# b) invoke it with a question that clearly needs a tool

# c) print BOTH response.content and response.tool_calls

tools = [get_weather, calculator]

llm_with_tools = llm.bind_tools(tools) # TODO

# TODO: invoke and print

Stop and stare at tool_calls. content is empty — the model produced noprose because it decided the next useful act was a function call. Key | Meaning ||---|---|| name | Which tool it wants. It can hallucinate a name that does not exist — your code must cope. || args | Arguments, already parsed into a dict against your schema. || id | A correlation ID. The matching ToolMessage must carry it. bind_tools does not change the model. It attaches the tool schemas to everyrequest made through the object it returns.

<div align="center">

Step 3: TODO 2: Write the loop

</div>

```python

def run_agent(user_input: str, max_iterations: int = 5) -> str:

    messages = [SystemMessage(SYSTEM_PROMPT), HumanMessage(user_input)]

    for step in range(max_iterations):

        response = llm_with_tools.invoke(messages)

        messages.append(response)

        # If the model gives a normal answer, return it

        if not response.tool_calls:

            return text_of(response)

        # Execute each requested tool

        for call in response.tool_calls:

            tool_name = call["name"]

            args = call["args"]

            if tool_name == "get_weather":

                result = get_weather.invoke(args)

            elif tool_name == "calculator":

                result = calculator.invoke(args)

            else:

                result = f"Unknown tool: {tool_name}"

            messages.append(

                ToolMessage(

                    content=str(result),

                    tool_call_id=call["id"]

                )

            )

    return "Stopped: iteration cap reached."

```

# Run it on a task that needs TWO tools, the second conditioned on the first

print("Q:", QUESTION)

print("Answer:", run_agent(QUESTION))

Q: If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwise 1. What do I spend?

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

Answer: Since it is 31°C in Colombo (above 30°C), you need 3 fans.

Your total spend is **Rs. 13500**.

Expected trace (yours may differ slightly — that is non-determinism, not a bug): [step 0] get_weather({'city': 'Colombo'}) [step 1]

calculator({'expression': '3*4500'})Answer: It's 31 C in Colombo, so you need 3 fans: Rs. 13,500. Read what happened. The model called one tool, read the result, and chosethe second call because of that result. Nothing in your code encodes "checkthe weather, then multiply". That is ReAct — reason, act, observe, repeat—and you have just written its runtime.

## Task 03: create_agent The Same Loop, Industrialised

```python

from langchain.agents import create_agent

agent = create_agent(llm, tools=[get_weather, calculator],

                   system_prompt=SYSTEM_PROMPT)

result = agent.invoke({"messages": [{"role": "user", "content": QUESTION}]})

print(result["messages"][-1].content)

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

[{'type': 'text', 'text': 'Since the temperature in Colombo is 31°C (which is above 30°C), you need 3 fans. \n\nYour total spend will be **Rs. 13,500**.', 'extras': {'signature': 'El4KXAERTTIPtd0Ldsgc3wrFzFYmrROJXdqVf+951ays/wTYlHmUFpjdD4JSaSFcIF1XI3AEQH88FkLpUXst4072wZBRS0ZbJR6XdaL30xNz5NnT+Ius49spnFYKarb2'}]

Note the interface differences — they are not cosmetic: the input is a dict with a messages key, not a bare list, because underneath this is a LangGraph state machine (Lecture 06's topic) and state machines take states;- messages may be plain dicts ( {"role": "user", ...}) as well as objects;- the return value is the whole final state, so result["messages"][-1] is the answer and result["messages"] is the full transcript.

====================================================================================== Human Message ========================

If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwise 1. What do I spend?

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

====================================================================================== Ai Message ========================

[]

Tool Calls:

    get_weather (call_4634399)

Call ID: call_4634399

Args:

    city: Colombo

====================================================================================== Tool Message ========================

Name: get_weather

31 C, humid, thunderstorms

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

====================================================================================== Ai Message ========================

[]

Tool Calls:

    calculator (call_4625498)

Call ID: call_4625498

Args:

    expression: 3 * 4500

====================================================================================== Tool Message ========================

Name: calculator

13500

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flash-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

    request = self._build_request_config(

====================================================================================== Ai Message ========================

```

```json

[{'type': 'text', 'text': 'Since the temperature in Colombo is 31°C (which is above 30°C), you need 3 fans. \n\nYour total spend is **Rs. 13,500**.', 'e

xtras': {'signature': 'El4KXAERTTIPMXw4yf6eDwUqK6Rly/xsb7Ig1XhekwGU8LK2pmaETeZWsk+dRHWryPi7LbrmooeWygoT+quoD9adpzirmf3geZm0rMIXumG96oLveHLII/qXHKNTFU1

X'}}]

```

[29]: # YOUR TURN – Exercise 3.1: find YOUR Loop inside the framework's transcript.

```python

for m in result["messages"]:

    label = type(m).__name__

    shown = str(m.content)[:70] or f"tool_calls={m.tool_calls}"

    print(f"{label:<13} {shown}")

```

# In a comment: which of these messages did YOU construct by hand in Task 02?

# ANSWER: ...

HumanMessage If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwis

AIMessage []

ToolMessage 31 C, humid, thunderstorms

AIMessage []

ToolMessage 13500

AIMessage [{'type': 'text', 'text': 'Since the temperature in Colombo is 31°C (w

It is exactly your Task 02 transcript. What the framework added is engineering, not new ideas: iteration caps, retries on transient errors, parallel execution when the model requests several tools at once, streaming,and consistent error surfaces. What it did not add is hidden intelligence.The loop is the loop.CHECKPOINT 3 save this output. The streamed run, plus which parts of themessage dump you had built manually.

```python

tools = [get_weather, calculator]

llm_with_tools = llm.bind_tools(tools)

response = llm_with_tools.invoke (

    [HumanMessage("What is the weather in colombo")]

)

print("content : ", response.content)

print("tool_calls: ", response.tool_calls)

```

```python

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model "gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config(

content : []

tool_calls:  [{'name': 'get_weather', 'args': {'city': 'Colombo'}, 'id': 'call_73417', 'type': 'tool_call'}]

```

Stop and stare at tool_calls. content is empty the model produced noprose because it decided the next useful act was a function call. Key | Meaning ||---|---|| name | Which tool it wants. It can hallucinate a name that does not exist your code must cope. || args | Arguments, already parsed into a dict against your schema. || id | A correlation ID. The matching ToolMessage must carry it. bind_tools does not change the model. It attaches the tool schemas to everyrequest made through the object it returns.

```python

def run_agent(user_input: str, max_iterations: int = 5) -> str:

    messages = [SystemMessage(SYSTEM_PROMPT), HumanMessage(user_input)]

    for step in range(max_iterations):

        response = llm_with_tools.invoke(messages)

        messages.append(response)

        # If the model gives a normal answer, return it

        if not response.tool_calls:

            return text_of(response)

        # Execute each requested tool

        for call in response.tool_calls:

            tool_name = call["name"]

            args = call["args"]

            if tool_name == "get_weather":

                result = get_weather.invoke(args)

            elif tool_name == "calculator":

                result = calculator.invoke(args)

            else:

                result = f"Unknown tool: {tool_name}"

            messages.append(

                ToolMessage(

                    content=str(result),

                    tool_call_id=call["id"]

                )

            )

    return "Stopped: iteration cap reached."

```

# Run it on a task that needs TWO tools, the second conditioned on the first

print("Q:", QUESTION)

print("Answer:", run_agent(QUESTION))

Q: If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwise 1. What do I spend?

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config(

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config(

Answer: Since it is 31 C in Colombo (above 30 C), you need 3 fans.

Your total spend will be **Rs. 13,500**.

Expected trace (yours may differ slightly — that is non-determinism, not a bug): [step 0] get_weather({'city': 'Colombo'}) [step 1] calculator({'expression': '3*4500'})Answer: It's 31 C in Colombo, so you need 3 fans: Rs. 13,500. Read what happened. The model called one tool, read the result, and chosethe second call because of that result. Nothing in your code encodes "checkthe weather, then multiply". That is ReAct — reason, act, observe, repeat—and you have just written its runtime.

## Streaming: watching the loop run

# Stream it to watch the same Loop you wrote, Live

```python

for chunk in agent.stream(

    {"messages": [{"role": "user", "content": QUESTION}]},

    stream_mode="values",

):

    chunk["messages"][-1].pretty_print()

================ Human Message =================

If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwise 1. What do I spend?

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

================ Ai Message =================

[]

Tool Calls:

  get_weather (call_283823)

Call ID: call_283823

Args:

  city: Colombo

================ Tool Message =================

Name: get_weather

```

31 C, humid, thunderstorms

[]

Tool Calls:

  calculator (call_280551)

Call ID: call_280551

Args:

  expression: 3 * 4500

================================== Tool Message ===================================

Name: calculator

13500

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config(

```json

[{'type': 'text', 'text': 'Since the temperature in Colombo is 31°C (above 30°C), you need 3 fans. \n\nYour total spend will be **Rs. 13,500**.', 'extr

as': {'signature': 'E14KXAERTTIPeE07C1UW7ZfyVaHRUA1EK91fxDSYsRhiOcFKNLYM1QJifqN+m0xOB+mAaA9fNPfDgWGM+2jaJtWLDOA/psa9VFmoQEPIlln9Q06kBEzsdEdXMRKPu+

G'}]}

```

[35]: # YOUR TURN - Exercise 3.1: find YOUR Loop inside the framework's transcript.

```python

for m in result["messages"]:

    label = type(m).__name__

    shown = str(m.content)[:70] or f"tool_calls={m.tool_calls}"

    print(f"{label:<13} {shown}")

```

# In a comment: which of these messages did YOU construct by hand in Task 02?

# ANSWER: ...

HumanMessage If it's above 30 C in Colombo I need 3 fans at Rs. 4500 each, otherwis

AIMessage [] 

ToolMessage 31 C, humid, thunderstorms

AIMessage [] 

ToolMessage 13500

AIMessage [{'type': 'text', 'text': 'Since the temperature in Colombo is 31°C (a

```

## Task 4: Your own agent-and breaking it on purpose

Task 04 Your own agent, then break it $ ^{*} $ (1:20-1:40) $ ^{*} $ Requirements: at least three tools of your own, each with real type hintsand a docstring written for the model; a system prompt that sets both personaand tool-use policy; and a test question that chains two of your tools.

# YOUR TURN – 4.1: Your own tools

from datetime import date

from langchain.agents import create_agent

from langchain_core.tools import tool

# TOOL 1 – Days until a date

@tool

def days_until(date_iso: str) -> str:

    """Calculate the number of days from today until a future date given as YYYY-MM-DD."""

    target_date = date.fromisoformat(date_iso)

    days = (target_date - date.today()).days

    return str(days)

# TOOL 2 – Convert days to weeks

@tool

def days_to_weeks(days: float) -> str:

    """Convert a number of days into weeks by dividing the number of days by seven."""

    weeks = days / 7

    return f"{weeks:.2f} weeks"

# TOOL 3 – Unit conversion

@tool

def unit_convert(

    value: float,

    from_unit: str,

    to_unit: str

) -> str:

    """Convert a value between common length units such as kilometres and metres.""

```python

conversions = {

    ("km", "m"): value * 1000,

    ("m", "km"): value / 1000,

}

key = (from_unit.lower(), to_unit.lower())

if key not in conversions:

    return f"Conversion from {from_unit} to {to_unit} is not supported."

return str(conversions[key])

# TOOL 4 - Split bill

@tool

def split_bill(

    total: float,

    people: int,

    tip_pct: float

) -> str:

    """Calculate the total bill including tip and divide it equally among the given number of people."""

    if people <= 0:

        return "Error: people must be greater than zero."

    total_with_tip = total * (1 + tip_pct / 100)

    per_person = total_with_tip / people

    return (

        f"Total: Rs. {total_with_tip:.2f}, "

        f"Per person: Rs. {per_person:.2f}"

    )

# TOOL 5 - GPA points

@tool

def gpa_points(grade: str) -> str:

    """Convert a letter grade such as A, B, C, D, or F into its GPA point value."""

    points = {

        "A": 4.0,

        "B": 3.0,

        "C": 2.0,

        "D": 1.0,

        "F": 0.0,

    }

    return str(points.get(grade.upper(), "Unknown grade"))

# CREATE TOOL LIST

my_tools = [

    days_until,

    days_to_weeks,

    unit_convert,

    split_bill,

    gpa_points,

]

```

]

# CREATE YOUR OWN AGENT

my_agent = create_agent(

    llm,

    tools=my_tools,

    system_prompt=(

        "You are a helpful and careful student assistant. "

        "Use the available tools whenever they are needed. "

        "Always use tools for calculations instead of guessing. "

        "When one tool produces information needed by another tool, "

        "chain the tools together. "

        "Give the final answer clearly and concisely."

    ),

)

```python

# TEST QUESTION - REQUIRES TWO TOOLS

question = (

    "My exam is on 2026-08-30. "

    "How many weeks are left until my exam?"

)

# RUN THE AGENT WITH STREAMING

for chunk in my_agent.stream(

    {

        "messages": [

            {

                "role": "user",

                "content": question

            }

        ]

    },

    stream_mode="values",

):

    chunk["messages"][-1].pretty_print()

```

My exam is on 2026-08-30. How many weeks are left until my exam?

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_gpu

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignore

request = self._build_request_config()

==================== Ai Message =====================

[]

Tool Calls:

  days_until (call_264972)

Call ID: call_264972

Args:

    date_iso: 2026-08-30

==================== Tool Message =====================

Name: days_until

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_g

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignore

request = self._build_request_config(

[]

Tool Calls:

  days_to_weeks (call_43099)

Call ID: call_43099

Args:

    days: 4

================================ Tool Message =================================

Name: days_to_weeks

## 0.57 weeks

```json

[{'type': 'text', 'text': 'There are 4 days left until your exam, which is approximately 0.57 weeks.', 'extras': {'signature': 'E14KXAERTTIPizGy/NEdRuwhEIiUZf8feBgy4lfht7eWmOsxiaq0+WTbQwj5IkQ/UTFXAyGzKEF0Y1QqZ8Z4Sre/sGViag2NsLlrR5M1dBW+m2AhSF3njcbSp0d73AWt'}]}

```

[43]：

```python

# Redefine the tool with bad documentation

@tool

def days_to_weeks(days: float) -> str:

    """Does stuff."""

    weeks = days / 7

    return f"{weeks:.2f} weeks"

# Create the tool list AFTER redefining the tool

my_tools = [

    days_until,

    days_to_weeks,

    unit_convert,

    split_bill,

    gpa_points,

]

# Recreate the agent

my_agent = create_agent(

    llm,

    tools=my_tools,

    system_prompt=(

        "You are a helpful and careful student assistant. "

        "Use the available tools whenever they are needed. "

        "Always use tools for calculations instead of guessing. "

        "When one tool produces information needed by another tool, "

        "chain the tools together. "

        "Give the final answer clearly and concisely."

    ),

)

```

# Test question

question = (

    "My exam is on 2026-08-30. "

    "How many weeks are left until my exam?"

)

result = my_agent.invoke(

    {

        "messages": [

            {

                "role": "user",

                "content": question

            }

        ]

    }

)

print(result["messages"][-1].content)

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_google_genai\chat_models.py:3237: UserWarning: Model 'gemini-3.5-flas

h-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be ignored.

request = self._build_request_config()

[{'type': 'text', 'text': 'There are 3 days left until your exam, which is approximately 0.43 weeks.', 'extras': {'signature': 'E14KXAERTTIPcj7W0A6JYVn

SyUR9tZS10cQNFP0n4Rdi+YIDGNQ+D/VQFAIATGMZMK1HIUYC6KuFxvL0V81LN750zQnPGvKJtEkh2X7wipbd0S0QJcVcN86si9YWCRzG'}]}

@tool

```python

def flaky_lookup(city: str) -> str:

    """Look up the population of a city."""

    raise RuntimeError("service unavailable")

my_tools = [

    days_until,

    days_to_weeks,

    unit_convert,

    split_bill,

    gpa_points,

    flaky_lookup,

]

my_agent = create_agent(

    llm,

    tools=my_tools,

    system_prompt=(

        "You are a helpful and careful student assistant. "

        "Use the available tools whenever they are needed. "

        "Always use tools for calculations instead of guessing. "

        "When one tool produces information needed by another tool, "

        "chain the tools together. "

        "Give the final answer clearly and concisely."

    ),

)

result = my_agent.invoke(

    {

        "messages": [

            {

                "role": "user",

                "content": "What is the population of Colombo?"

            }

        ]

    }

)

```

```python

print(result["messages"][-1].content)

```

C:\Users\user\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_googlh-lite' uses fixed sampling defaults; the sampling parameter(s) temperature will be igr request = self._build_request_config(

RuntimeError Traceback (most recent call last)

```python

Cell In[45], line 26

    my_tools = [

        days_until,

        days_to_weeks,

    (...)

        flaky_lookup,

    ]

    my_agent = create_agent(

        llm,

        tools=my_tools,

    (...)

        ),

    )

```

```python

result = my_agent.invoke(

    {

        "messages": [

            {

                "role": "user",

                "content": "What is the population of Colombo?"

            }

        ]

    }

)

print(result["messages"][-1].content)

```

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\pregel\main.py:3913, in Pregel.inv

ode, print_mode, output_keys, interrupt_before, interrupt_after, durability, control, version, **kwargs)

        chunks.append(chunk)

else:

    # v1: collect interrupts from updates stream

-> 3913

    for chunk in self.stream(

        input,

        config,

        context=context,

        stream_mode=(

            ["updates", "values"] if stream_mode == "values" else stream_mode

        ),

        print_mode=print_mode,

        output_keys=output_keys,

        interrupt_before=interrupt_before,

        interrupt_after=interrupt_after,

        durability=durability,

        control=control,

        **kwargs,

    ):

        if stream_mode == "values":

            if len(chunk) == 2:

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\ode, print_mode, output_keys, interrupt_before, interrupt_after, durability

```python

for task in loop.match_cached_writes():

    loop.output_writes(task.id, task.writes, cached=True)

```

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgrap

etry_policy, get_waiter, schedule_task)

scheduled_error_handler = False

try:

    run_with_retry(

        t,

        retry_policy,

        configurable={

            CONFIG_KEY_CALL: partial(

                _call,

                weakref.ref(t),

                retry_policy=retry_policy,

                futures=weakref.ref(futures),

                schedule_task=schedule_task,

                submit=self.submit,

            ),

        },

    )

    self.commit(t, None)

except Exception as exc:

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\pregel\_retry.py:

```python

    task.writes.clear()

    # run the task

--> 617    return task.proc.invoke(task.input, config)

except ParentCommand as exc:

    ns: str = config[CONF][CONFIG_KEY_CHECKPOINT_NS]

```

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\_internal\_runnable

rgs)

```python

    # run in context

    with set_config_context(config, run) as context:

--> 707        input = context.run(step.invoke, input, config, **kwargs)

else:

    input = step.invoke(input, config)

```

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\_internal\_runnable

**kwargs)

```python

        run_manager.on_chain_end(ret)

    else:

--> 447    ret = self.func(*args, **kwargs)

if self.recurse and isinstance(ret, Runnable):

    return ret.invoke(input, config)

```

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langgraph\prebuilt\tool_node

input_types = [input_type] * len(tool_calls)

with get_executor_for_config(config) as executor:

--> 822    outputs = list(

        executor.map(self._run_one, tool_calls, input_types, tool_runtimes)

    )

return self._combine_tool_outputs(outputs, input_type)

```

File ~\AppData\Local\Programs\Python\Python313\Lib\concurrent\futures\_base.py:619, in Executor.map.<

```python

while fs:

    # Careful not to keep a reference to the popped future

    if timeout is None:

    --> 619        yield _result_or_cancel(fs.pop())

    else:

        yield _result_or_cancel(fs.pop(), end_time - time.monotonic())

File ~\AppData\Local\Programs\Python\Python313\Lib\concurrent\futures\_base.py:317, in _result_or_car

try:

    try:

        return fut.result(timeout)

    finally:

        fut.cancel()

File ~\AppData\Local\Programs\Python\Python313\Lib\concurrent\futures\_base.py:456, in Future.result(

    raise CancelledError()

elif self._state == FINISHED:

    return self.__get_result()

else:

    raise TimeoutError()

File ~\AppData\Local\Programs\Python\Python313\Lib\concurrent\futures\_base.py:401, in Future.__get_r

if self._exception:

    try:

        raise self._exception

    finally:

        # Break a reference cycle with the exception in self._exception

        self = None

File ~\AppData\Local\Programs\Python\Python313\Lib\concurrent\futures\thread.py:59, in _WorkItem.run(

    return

try:

    result = self.fn(*self.args, **self.kwargs)

except BaseException as exc:

    self.future.set_exception(exc)

```

```python

File ~\AppData\Local\Programs\Python\Python313\Lib\site-packages\langchain_core\tools\structured.py:97,

r, *args, **kwargs)

    if config_param := _get_runnable_config_param(self.func):

        kwargs[config_param] = config

----> 97    return self.func(*args, **kwargs)

    msg = "StructuredTool does not support sync invocation."

    raise NotImplementedError(msg)

Cell In[45], line 4, in flaky_lookup(city)

    @tool

    def flaky_lookup(city: str) -> str:

        """Look up the population of a city."""

    ----> 4    raise RuntimeError("service unavailable")

RuntimeError: service unavailable

During task with name 'tools' and id 'f5e27736-074d-bc9c-68e2-13e1e8838356'

```

<div align="center">

Task 5: Shipping the Agent Behind an API

</div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229050.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=uGSwy5uS9nT3UwYr4JuW568DyeI%3D&Expires=1788668029' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229057.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=W8pSbN6mlXuUdcruzVqHMhgdYCs%3D&Expires=1788668029' alt='OCR图片'/></div>

Responses

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_2_1788063229062.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mqhd2UU32S%2BVDh2Jq5NU9L53mPA%3D&Expires=1788668029' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_3_1788063229067.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Fw2JeIB%2B0Y34vpv66%2FFeOs0%2FMOE%3D&Expires=1788668029' alt='OCR图片'/></div>

POST /agent/run Agent Run

The hand-rolled loop from Part 2 — the trace is part of the response.

Model proposes ( tool_calls ) → this code disposes (executes) → repeat. Returning the trace is not decoration: an agent you cannot inspect is an agent you cannot debug (Week 7 calls this the trajectory).

Parameters

Cancel

Reset

No parameters

Request body required

application/json

Edit Value | Schema

{

 "question": "If it is above 30 C in Colombo, I need 3 fans at Rs. 4500 each. Otherwise I need 1 fan. What do I spend?",

 "max_iterations": 5

}

Execute

Clear

```bash

curl -X 'POST' \

  'http://127.0.0.1:8000/agent/run' \

  -H 'accept: application/json' \

  -H 'Content-Type: application/json' \

  -d '{

  "question": "If it is above 30 C in Colombo, I need 3 fans at Rs. 4500 each. Otherwise I need 1 fan. What do I spend?",

  "max_iterations": 5

}'

```

```json

"answer": "The temperature in Colombo is 31°"

"steps": [

  {

    "step": 0,

    "tool": "get_weather",

    "args": {

      "city": "Colombo"

    },

    "result": "31°C, humid, thunderstorms"

  },

  {

    "step": 1,

    "tool": "calculator",

    "args": {

      "expression": "3 * 4500"

    },

    "result": "13500"

  }

],

"stop_reason": "answered",

"messages": 7,

"total_tokens": 1146,

"seconds": 5.36

]

```

content-length: 376

content-type: application/json

date: Thu, 27 Aug 2026 04:59:08 GMT

server: uvicorn

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229072.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AQ6Pg9VWh39od5hVcMvQXfMD6FQ%3D&Expires=1788668029' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229076.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=MTHmF7W6JZAH6n0hYcUN2Isj6jI%3D&Expires=1788668029' alt='OCR图片'/></div>

<div style='text-align: center;'><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202608301213131dac672f273f4548%2Fcrop_1_1788063229083.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fSxonQ68zhb0KMH58nWYq6Ioue4%3D&Expires=1788668029' alt='OCR图片'/></div>

## Knowledge check

Q1. (b) The endpoint is a pure function of the messages you send.

Q2. (c) The model is requesting that your code execute a function.

Q3. (b) The function's docstring.

Q4. (c) In your code, as an integer bound on the loop.

Q5. (c) You exceeded requests per minute — wait and retry.

Q6. Three common agent failure modes are infinite looping, invalid tool calls, and tool/API errors. The code-level guardrails are an iteration limit, tool-call validation/error handling, and try/except handling with safe error responses or retries, respectively.

Q7. The token count grows faster than the number of steps because each iteration sends the previous conversation messages along with the new message/tool result back to the model. Therefore, the amount of context being processed increases as the loop continues, causing the total token usage to grow faster than the number of iterations.

Q8. A system prompt alone is not an adequate safety design because the model may not always follow instructions perfectly, and prompts can be overridden, misunderstood, or affected by unexpected model behavior. Instead, enforce safety in code by setting a hard iteration limit and validating/blocking dangerous tool calls such as delete order before execution, with appropriate error handling.