---
title: I'm Learning Neovim
pubDatetime: 2026-06-14T15:00:00+08:00
slug: learning-neovim
draft: false
tags:
  - "craftsmanship"
  - "vim"
  - "neovim"
---

I use VSCode as my default editor. Honestly, I’m happy using it and have no pressing need to switch. However, very recently, curiosity got the better of me. I have decided to learn and use Neovim for a few weeks. At the end of the journey, I hope to report back on my experience, and whether I want to make the switch to Neovim permanent.

I'm fairly proficient in VSCode’s keyboard shortcuts. Features like the file picker and command palette (`⌘+P/Ctrl+P` and `⌘+Shift+P/Ctrl+Shift+P`) help tremendously with feature discovery, particularly when I don’t know the exact keybind but I know that an action exists (like split right).

My history with Vim dates back to my Computer Science undergrad days. Learning Vim and showing off rapid keyboard commands was very trendy among my classmates. At the time, I learnt the bare minimum, which allowed me to SSH into the school’s cluster, edit files, and most importantly, quit Vim. When I was much younger, I had learnt programming with IDEs like Visual Studio and IntelliJ. I was very used to feature discovery being part of the UI. For text editing, Sublime Text or gedit was my preferred tool. Vim, on the other hand, seemed like a path towards getting no work done at all.

Lately, as I’ve become more interested in craftsmanship, I’ve seen people promote Neovim as a way to care about the tools one uses to write code. I’ve seen several online lists of benefits that Neovim has over UI-based editors. Here are some I would like to test or experience for myself:

1. Cool factor
   - Neovim is just cooler than VSCode. I previously worked at a company where the “elite” backend devs would stereotypically have beards and use Vim. There is nothing objective about how either attribute makes you a better programmer. Since my wife won’t let me grow a beard, I’ll have to settle for using Vim.
2. Consistency in keyboard shortcuts
   - I use macOS and Linux consistently. VSCode shortcuts are not universal. The modifier is ⌘ on macOS and Ctrl on Linux. Using Neovim on both OS helps build consistency, especially since Vim motions and commands are designed to be portable and avoid OS-specific requirements.
3. Ability to SSH into anywhere and have a powerful editor at my fingertips.
   - Generally, I’ve had no issues managing my servers effectively, relying on basic vim/nano. In rare instances, I’ve wished for a better editor setup. That’s where Neovim would have come in clutch.
4. Faster (?)
   - Vim motions and commands promise to make a proficient user much faster at editing text. Is this true? Vim/Neovim enthusiasts will tell you yes but I haven’t seen any empirical data.
   - Lots of great discussion points in [this Hacker News thread](https://news.ycombinator.com/item?id=34364336), but the one that stuck with me was the differentiation between those who “think then code” vs those who “think while coding”. I fall into the latter camp. I instinctively put my initial thoughts into code, despite knowing that my plan or direction could be off. Then, I iterate. I’m sure I spend equal if not more time refactoring and rewriting existing code than writing brand new lines. Vim/Neovim is supposed to help with the speed of that iteration.
   - Launching and taking equivalent actions in Neovim feels faster than VSCode. I would guess that a lot of this stems from the Electron and JavaScript overheads. From my own experience, VSCode is so well optimised that it is already fast enough. Would this difference have any measurable impact on one’s experience using the editor, be it productivity or enjoyment? I’m not sure, but I would certainly like to test this with my own experience.
5. Avoid VSCode’s marketplace (?)
   - There have been past [examples](https://www.techradar.com/pro/security/vscode-market-struck-by-huge-influx-of-malicious-whitecobra-extensions-so-be-warned) [of](https://www.techradar.com/pro/security/malicious-ai-made-extension-with-ransomware-capabilities-sneaks-on-to-microsofts-official-vs-code-marketplace) [malware](https://blog.checkpoint.com/securing-the-cloud/malicious-vscode-extensions-with-more-than-45k-downloads-steal-pii-and-enable-backdoors/) on the VSCode Marketplace. Just last month, [GitHub confirmed](https://x.com/github/status/2056884788179726685) that a poisoned VSCode extension gave an attacker access to ~3,800 internal repos. Neither VSCode nor Neovim offer complete sandboxing, hence Neovim’s plugin security exposure is the same as VSCode’s, albeit with a much smaller ecosystem.

I am also pre-empting some downsides:

1. Initial productivity decrease is very tangible and noticeable
   - I’m struggling to get started on fixing my broken Game Boy emulator timer implementation.
   - I don’t know how long this period of low productivity will last.
2. Losing access to VSCode’s larger extension ecosystem
   - The larger ecosystem of VSCode marketplace means faster and widespread support. However, the impact to me is likely not going to be major since I haven’t encountered any language or feature that I use on VSCode but isn’t on Neovim.

I enjoy learning something new. Getting started learning Vim motions and configuring `init.lua` from scratch was very satisfying. Yet, I’m fully aware that configuring the editor and actually using it are two very separate experiences. I hope that as I continue this experiment, I will become better at motions. I hope that editing and refactoring code will become easier. I hope that I will generally enjoy the experience of using Neovim. The crucial tell at the end is whether I reach for VSCode or Neovim when I have to write code.
