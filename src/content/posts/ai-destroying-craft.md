---
title: Is How We Use AI Destroying Our Craft?
pubDatetime: 2026-06-09T22:00:00+08:00
slug: ai-destroying-craft
draft: false
tags:
  - "AI"
  - "craftsmanship"
  - "programming"
  - "Zig"
---

> My opinion has always been that AI is a great tool, but it's a tool.

At the Open Source Summit North America 2026 in Minneapolis, Linus Torvalds said ([25:57](https://youtu.be/fi29pfLcW4I?t=1556)) the above. He noticed how people proudly declare that their code was 99% written by AI, but those same people would have never said that their code was 100% written by compilers.

I love the tongue-in-cheek comparison that I had never thought of. But should we even consider AI to be a tool? In his series “Wading Through AI”, Casey Muratori contends ([1:40](https://youtu.be/4fxo6zuhP1c?t=100)) that AI shouldn’t be considered a tool because it is inherently non-deterministic. Historically, tools have been controllable devices that responded well to skill. A blacksmith’s hammer. A painter’s brush. A surgeon’s scalpel. A programmer’s keyboard. The predictable nature of tools, and the fact that you can receive clear and usually instant feedback, allowed people to master them. In fact, unpredictable tools are a major risk to the wielder. A chainsaw that cannot be used in a controlled way is capable of great destruction.

Yet, that isn’t the right question. AI is undoubtedly a tool. Consider this Merriam-Webster definition of `tool`:

> something (such as an instrument or apparatus) used in performing an operation or necessary in the practice of a vocation or profession

Purely based on the definition, AI solutions are “tools”. People use them for information retrieval, summarisation, analysis, image generation, and role-playing. Arguably the biggest impact LLMs have had is in the arena of programming, where “agentic coders” are now writing significantly [more](https://www.anthropic.com/institute/recursive-self-improvement) [code](https://fortune.com/2026/01/29/100-percent-of-code-at-anthropic-and-openai-is-now-ai-written-boris-cherny-roon/) than before.

Instead, I posit that the right question is this: does the way we use our tools destroy our craft?

Craftsmanship is important. I believe that we should approach our skills, whether for our profession or for leisure, with the intent to practice a craft for enjoyment and fulfilment. We exert control over our tools to accomplish a task, and often in that process receive feedback about our skills. We learn and improve. When I started learning to type, the keyboard gave me consistent feedback about how slow or wrong I was. With practice over many years, I’ve grown to be proud of how quickly I can type. Using a tool more typically builds competency, which instils a sense of pride and accomplishment in the individual.

However, I don’t feel that same degree of pride and accomplishment when I use agentic coding tools. Much has been said about AI coding. On one hand, language models today are incredibly capable. I have personally been astounded by how good OpenAI’s Codex is at creating desktop and web apps, some of which I use on a daily basis. On the other hand, many people online have bemoaned the issues of shifting coding to agents, including the loss of control, loss of understanding, and inconsistent quality across language models and harnesses. The issue that bothers me the most is the [cognitive offloading](https://www.anthropic.com/research/AI-assistance-coding-skills) that happens when a programmer substitutes their slow and often frustrating process of coding by hand with AI in the name of efficiency gains.

Going back to Linus’ quote above, I get his point. But I worry about how Linus is open ended about the way people use AI as a tool. Using AI to write code for you has virtually no corresponding skill increase in the individual, compared to another who hand-writes, debugs, corrects, and improves their own code. Additionally, I can see how both compilers and AI form an abstraction above machine code. However, compilers are (mostly) deterministic. Given the same set of inputs (code), build environment, compiler version, compiler flags, and other config, a compiler should produce the same output. That predictability enables debugging and reproducible builds.

Can the same be said about AI? I’ve recently warmed to the idea of calling AI a slot machine. Pull the lever, and wait for the spinning ASCII progress circle to complete. Fail, and you try again, without reasoning through the obstacle encountered. For common languages and frameworks, the probability of getting good, workable, maintainable code with AI is very high. If your encounters with AI are limited to those scenarios, you’re consistently hitting “jackpot” with each AI lever pull. But AI does much worse for languages, frameworks, or domains outside the popular. Recently, I’ve been learning Zig. I’d say about 50% of the time, I can’t get GPT 5.5 to generate idiomatic working Zig code. Initially, I couldn’t tell that the code was wrong. In fact, I only realised how wrong the generated code was after the compiler gave me the predictable, instant feedback of dozens of error messages. After hours of reading through the Zig docs, reading online discussions, and crucially, working through Zig programming exercises by hand, I finally started to build a sense of how to write better Zig code.

Here’s what I’ve decided. For scenarios where I don’t care about the element of craftsmanship, I personally do use AI as a “tool” to aid me in accomplishing a task. Some examples include summarising product reviews on the internet, quickly generating throwaway web apps and utilities, and summarising transcripts of videos that I do not intend to watch closely.

But in two areas, I will not use AI as a tool for output generation: programming and writing. As I write more code, I want to improve as a programmer. As I write and publish more posts, I want to improve as a writer. I acknowledge that my code and writing both will start out terrible. However, using AI to short circuit the process and achieve unearned output quality will only hurt me in achieving my desired improvement.

Slow down and think about your use of AI. Are you overemphasising the output and inadvertently discounting how your skills are affected? I’m not against the use of AI. And I have no doubt that AI is capable of producing fantastic output. Rather, the question I need to ask is whether I still want to become the kind of person who could have produced it.
