export const translations = {
  EN: {
    nav: {
      report: "Strategic Report",
      research: "Research Paper",
      methodology: "Methodology",
      privacy: "Privacy"
    },
    common: {
      share: "Share this essay",
      copy_link: "Copy Link",
      copied: "Copied!",
      chapters: "Chapters"
    },
    hero: {
      title_part1: "After the",
      title_accent: "Epistemic Flood",
      subtitle: "A Speculative Essay on Where This Goes Next",
      author: "By Arthur Devresse & Claude Sonnet 4.6",
      date: "April 2026",
      read_time: "~20 min read",
      intro_quote: "This piece is not a data report. It is an argument about where AI takes the economy, institutions, and societies over the next decade. References to data come from the {link}. Where this piece speculates, it says so. Opinions are our own.",
      link_text: "April 2026 Strategic Brief",
      discovery_cta: "Want the data behind this essay? Read the 2026 Strategic Report",
      sources_cta: "Sources \u2192"
    },
    acts: [
      {
        id: "act1",
        label: "ACT I \u2014 The Two Squeezes",
        title: "ACT I \u2014 The Two Squeezes",
        subtitle: "How cognitive work gets compressed first, physical work gets compressed next, and why the gap between them is narrower than it looks",
        content: [
          {
            type: "p",
            text: "There is a moment in every major economic transition where the people living through it can see what's coming but cannot quite believe the scale of it. Factory workers in 1910 could see the automobile assembly line. Typographers in 1980 could see the desktop computer. They were not wrong to adapt. They were wrong about how fast and how completely the adaptation would need to happen."
          },
          {
            type: "p",
            className: "mb-12",
            text: "We are in that moment now. Unlike previous transitions, we have reasonably good data on the shape of what's coming \u2014 not because we can predict the future, but because the early numbers are already in."
          },
          {
            type: "h3",
            text: "Movement I \u2014 The Shape of the Disruption"
          },
          {
            type: "p",
            text: "A few years ago, the expected shape of AI's impact on cognitive work was straightforward. The middle of the job market would hollow out as AI absorbed routine synthesis work. The top would hold because judgment is hard to automate. The bottom would hold because somebody had to feed the machines their prompts. It was a reasonable guess."
          },
          {
            type: "p",
            text: "The 2026 data tells a messier story."
          },
          {
            type: "p",
            text: "The bottom is not holding. It is collapsing. Entry-level developer employment for workers aged 22\u201325 has fallen roughly 20% from its late-2022 peak (Stanford Digital Economy Lab). Broader industry trackers show postings down around 67% since 2022. Junior hiring's share of IT roles has fallen from 15% to 7% over the same period, per industry trackers. Some of this was the end of the cheap-money era that inflated the 2020 hiring boom \u2014 but when capital returned to tech budgets in 2025, junior headcount did not return with it. Big Tech capex rose from roughly $256 billion in 2024 to $427 billion in 2025 and a projected $562 to $700 billion in 2026. The full data is in the Strategic Brief's \u00a75. The roles that used to be the first rung of the ladder \u2014 the ones that turned graduates into professionals \u2014 are simply being removed."
          },
          {
            type: "p",
            text: "Salesforce announced zero new engineering hires for 2025. Block cut its headcount from ten thousand to under six thousand. These are the companies closest to the technology, and they are the first to figure out that a senior engineer with good tooling now does the work of a small team. The rest of the economy is two or three years behind, but moving in the same direction."
          },
          {
            type: "p",
            text: "The middle is under a different kind of pressure. Project managers, business analysts, generalist coordinators \u2014 people whose core value was synthesising information and managing routine complexity \u2014 are finding their work absorbed upward into the tools their seniors use. These are not unskilled people. Their specific skills are just the ones AI is getting good at fastest."
          },
          {
            type: "p",
            text: "The top is being repriced. Senior salaries for AI-literate roles are up forty percent. The scarce resource is no longer execution. It is judgment \u2014 the ability to catch the errors that look right, to make the calls that carry accountability, to build the relationships that require trust."
          },
          {
            type: "p",
            text: "Three things are happening at once: the bottom is being removed, the middle is being absorbed, the top is being repriced. It is less a reshaping of the job market than a compression of it \u2014 pressure concentrating where judgment lives, and everything else being pulled toward automation."
          },
          {
            type: "p",
            text: "The Klarna case is worth sitting with. Klarna replaced most of its customer service team with AI \u2014 the workforce went from 5,500 to 3,400, and the company publicly celebrated roughly $10M in annualised savings \u2014 and within two years was quietly rehiring. The lesson is not that AI cannot do customer service \u2014 in measurable ways, it can. The lesson is that trust, context, and institutional memory were the product all along. Response time and cost-per-ticket were how Klarna measured the work, not what the work actually was. A Harvard working paper (Hosseini Maasoum & Lichtinger, August 2025) tracking 62 million workers across 285,000 firms finds that AI-adopting firms show junior employment declining roughly 8% within six quarters relative to non-adopters, while senior employment holds steady \u2014 a pattern the authors call \"seniority-biased technological change.\""
          },
          {
            type: "p",
            text: "The companies navigating this well are the ones that figured out which parts of their operations are genuinely routine and automated those parts hard, while keeping and elevating the people doing the judgment work. The companies that treated AI as a headcount line item are the ones now doing the expensive rehiring."
          },
          {
            type: "p",
            text: "A fair objection: AI-linked layoffs have become a convenient story for cuts driven by other forces \u2014 the end of cheap money, pandemic overstaffing, tax accounting changes. Several tech CEOs have said as much. Those forces are real. But the specific patterns \u2014 junior roles falling while senior roles don't, AI-adopting firms diverging from non-adopters in the same industry \u2014 are harder to explain without AI as a causal factor, not just a cover story."
          },
          {
            type: "p",
            className: "mb-12",
            text: "This shape is not the end state. It is the first movement of a longer story."
          },
          {
            type: "h3",
            text: "Movement II \u2014 The Cognitive Squeeze"
          },
          {
            type: "p",
            text: "The picture above assumes a relatively stable ceiling on AI capability \u2014 that today's senior roles are secure because they require the kind of judgment AI cannot yet replicate. That assumption has a half-life."
          },
          {
            type: "p",
            text: "The {link} documents this directly: three different agent systems \u2014 Auggie, Cursor, and Claude Code \u2014 running the same base model score between fifty and fifty-five percent on the same contamination-resistant benchmark (SWE-bench Pro, Scale AI SEAL leaderboard, February 2026). Five points of capability difference, from the engineering alone. The capability gains of 2025\u20132026 are coming from the way models are being taught to check their own work, break problems into pieces, and coordinate with other models \u2014 not primarily from the underlying models getting smarter. Building beats choosing a better model.",
            link_text: "Strategic Brief"
          },
          {
            type: "p",
            text: "The benchmark treadmill is context for this, not the proof of it. AI capability tests get mastered, retired, and replaced with harder ones on roughly an eight-month cycle. ARC-AGI-1 essentially solved. ARC-AGI-2 approaching saturation within twelve months of launch. ARC-AGI-3 launched March 2026 with frontier models scoring under 1%, though a specialized non-LLM approach has already reached 12% in preview. Notably, the 12% came from a specialized CNN and reinforcement-learning approach, not a frontier LLM \u2014 which tells you the benchmark is solvable but also that it may be solved by architectures orthogonal to the transformer scaling that dominated 2022\u20132025. A projection based on the benchmark's eight-month half-life pattern puts it at 30 to 50% by end of 2026. The underlying capability keeps moving, but the engineering around it moves faster \u2014 and that is where the leverage lives."
          },
          {
            type: "p",
            text: "The senior roles that are currently valuable \u2014 the engineers who architect the systems, the analysts who synthesise the data, the managers who direct the AI agents \u2014 are valuable because they sit above the current capability ceiling. They provide the judgment the AI cannot yet provide. But that ceiling is not fixed."
          },
          {
            type: "p",
            text: "This is also the reason the next decade is a builder's decade, not a chooser's decade. Which means the senior human role does not disappear when the ceiling rises. It migrates. The valuable work shifts from executing tasks to orchestrating the machines that execute them."
          },
          {
            type: "quote",
            text: "The human judgment premium is real. Its nature is shifting."
          },
          {
            type: "p",
            className: "mb-12",
            text: "The honest projection is not that senior roles evaporate. It is that what makes a senior role valuable is changing faster than most organisations, or most individuals, are currently planning for."
          },
          {
            type: "h3",
            text: "Movement III \u2014 The Physical Squeeze, and the Window Between"
          },
          {
            type: "p",
            text: "Cognitive AI does not just automate software jobs. It accelerates every field that was previously bottlenecked by human cognitive labor \u2014 and that includes robotics."
          },
          {
            type: "p",
            text: "Until recently, robots were stuck behind a simple problem: you could train a language model on the entire internet, but you couldn't train a robot on the entire physical world. That has changed. Simulation environments can now generate realistic physical practice data at scale, and the combination of differentiable physics, massively parallel GPU simulation, and foundation models trained across thousands of embodiments has fundamentally shifted what's possible. The bottleneck in robotics has moved \u2014 from whether robots can learn at all to how well learned policies transfer to novel environments. That transfer problem is not solved, but it is no longer the wall. The wall is now physical \u2014 manufacturing, deployment, and repair at scale."
          },
          {
            type: "p",
            text: "What remains is a manufacturing problem, and it is a real one."
          },
          {
            type: "p",
            text: "Software scales at the speed of compute. If an AI agent works, you can deploy a million instances by tomorrow morning. Hardware scales at the speed of supply chains. Even with a perfect robotic brain, manufacturing millions of actuators, chassis, and batteries requires capital-intensive, analog factory scaling. You cannot copy-paste a physical machine."
          },
          {
            type: "p",
            text: "There is also a repair problem most software people underestimate. When an AI agent produces a hallucinated answer, you patch the model over-the-air in seconds and every instance is fixed. When a robot hallucinates and shatters a sensor against a wall, the software fix does nothing for the hardware. It requires a technician, a replacement part, and physical downtime. Physical failure does not scale the way digital failure does."
          },
          {
            type: "p",
            text: "So the physical squeeze will not arrive everywhere at once. It will arrive first where the environment is controlled and the insurance math works. Warehouses. Logistics hubs. Industrial zones. Not because robots cannot handle a sidewalk, but because insurers will underwrite a controlled warehouse and will not yet underwrite a public street."
          },
          {
            type: "p",
            text: "Global logistics is the clearest preview of what full compression looks like. On the cognitive side, AI is already handling demand forecasting and route optimization. On the physical side, because warehouses are structured environments that insurers can price, heavy robotics is deploying right behind it. The workforce is not shifting from cognitive tasks to physical ones as a safe harbor; both are being compressed, sequentially, in the same buildings."
          },
          {
            type: "p",
            text: "This is the trap of the current moment. As cognitive tasks automate, the instinctive reaction is to pivot toward physical, dextrous work \u2014 plumbing, electrical, skilled trades, anything involving hands. But the same AI models displacing knowledge workers are accelerating the materials science and control systems behind the robots that will eventually handle much of that physical work too. The window is real, but it is not a thirty-year career pivot. It is a temporary, compressed gap between two squeezes."
          },
          {
            type: "p",
            text: "Survival means moving to the governance, orchestration, and verification layers of both digital and physical systems — concurrently, not sequentially. In practice, that looks like a financial analyst who pivots to designing the verification models that check for synthetic hallucinations; a project manager who shifts to governing agent-swarm workflows; a warehouse operations lead who moves from picking to overseeing pick-orchestration across automated fleets. The people positioning around system design rather than execution are already pulling ahead."
          },
          {
            type: "p",
            text: "For organisations: the Klarna pattern predicts that companies rushing to full replacement now will face a correction. The companies using this period to genuinely understand which parts of their operations require human judgment \u2014 and investing in elevating those people rather than replacing them \u2014 will have a structural talent advantage when the second squeeze arrives and the scramble begins."
          },
          {
            type: "p",
            className: "font-medium text-indigo-400",
            text: "For governments: this is where the story gets most complicated, and where the decisions have the longest tails. That is Act II's territory."
          }
        ]
      },
      {
        id: "act2",
        label: "ACT II \u2014 The Reliability Reckoning",
        title: "ACT II \u2014 The Reliability Reckoning",
        subtitle: "How Societies Learn to Live With Systems That Fail in New Ways",
        content: [
          {
            type: "p",
            text: "There is a dangerous intersection near where I grew up. For years it claimed accidents with depressing regularity. The local council debated it, residents complained, and nothing changed until a particularly bad accident forced the issue. Within six months there was a traffic light. The accidents stopped. Nobody had needed to fully solve the problem of human error behind the wheel before allowing cars on that road. They needed enough failures, in a visible enough place, to force a specific institutional response."
          },
          {
            type: "p",
            text: "This is how complex systems actually get made safe. Not through anticipation. Through contact with reality, failure, and the response that failure demands."
          },
          {
            type: "p",
            className: "mb-12",
            text: "The history of every technology we now consider safe and unremarkable follows this pattern. Aviation, pharmaceuticals, financial systems, nuclear power, food safety. The frameworks that govern them were not written in advance by wise regulators who foresaw all the failure modes. They were written in response to crashes, drug disasters, market collapses, meltdowns, and outbreaks. The regulation is almost always a consequence of the failure, not a prevention of it."
          },
          {
            type: "quote",
            text: "You cannot write the rules for something nobody has yet broken at scale."
          },
          {
            type: "h3",
            text: "The Shape of Coming Failures"
          },
          {
            type: "p",
            text: "The {link} documents where reliability currently stands. Without proper system design, AI confidently produces wrong answers more than 10% of the time on standard tasks. Legal AI fails at rates of 69 to 88% on specific legal queries without mitigation, per Stanford RegLab research. Medical AI, without the right architecture, hallucinates at rates that would be immediately disqualifying if applied to a human doctor.",
            link_text: "Strategic Brief"
          },
          {
            type: "p",
            text: "With well-engineered systems, those numbers fall dramatically. Multi-agent verification brings enterprise error rates dramatically lower. Self-reflective architectures — SELF-RAG in particular — bring clinical hallucination under 6%, per a peer-reviewed clinical RAG evaluation in MDPI Electronics (October 2025). The reliability problem is largely a systems engineering problem, not a fundamental AI limitation. That is the optimistic read, and the data supports it for structured, bounded tasks in controlled environments."
          },
          {
            type: "p",
            className: "mb-12",
            text: "The part that remains genuinely uncertain is what happens as these systems move into territory that is neither structured nor bounded. Real hospitals. Real courts. Real infrastructure. The history of complex engineering suggests that every time you add a verification layer to an automated system, you create new failure modes at the interfaces between layers that are often harder to detect than the original problem."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Nobody should be surprised when this happens with AI systems at scale. The productive response is to build institutions that can catch and contain those failures fast, not to prevent deployment until perfection is guaranteed. Perfection is not available. The dangerous intersection does not wait for a perfect traffic management system before generating accidents."
          },
          {
            type: "h3",
            text: "Three Experiments Running Simultaneously"
          },
          {
            type: "p",
            text: "The most interesting feature of the current global moment is that three fundamentally different approaches to this problem are being tested in parallel, in real economies, on real populations, in real time. China, the European Union, and the United States are running what amounts to a multi-decade natural experiment in how to govern transformative technology. The results will not be fully visible for years, but the early evidence is already instructive. A caveat before the comparison: each of these systems contains elements of all three approaches. China has substantial algorithmic registration and content regulation. The US has meaningful sectoral oversight through the FDA, NHTSA, and NIST. The EU is pursuing industrial policy alongside its regulatory framework. What follows describes dominant tendencies, not complete characterizations."
          },
          {
            type: "p",
            text: "China has essentially chosen deployment first. Autonomous vehicles operate at scale in multiple major cities. Autonomous and semi-autonomous vehicles \u2014 Waymo, Apollo Go, and other operators combined \u2014 have now logged billions of miles on public roads in real conditions, generating volumes of edge-case data that no simulation can fully replicate. The safety record, based on operator-reported data, is better than human driving in the specific contexts where these systems are deployed. Not perfect. Better. The iteration cycle is fast because the feedback loop is real. When something goes wrong, the system learns. When something goes right, it gets expanded. The political system tolerates a different level of visible failure than democratic systems tend to. That tolerance cuts in both directions: it is what lets the feedback loop operate at the speed it does, and it is also what lets failures be absorbed politically rather than corrected institutionally. The advantage is speed. The risk is that failures which should force policy revision can be suppressed rather than corrected \u2014 a dynamic that prioritises the look of progress over the fact of it."
          },
          {
            type: "p",
            text: "The European Union has chosen framework first. The EU AI Act is an ambitious attempt to create comprehensive governance before widespread deployment rather than after. The intention is genuinely admirable. The practical effect, in the short term, is a trade-off: European companies are optimising their engineering cycles for legal conformity while competitors optimise for operational boundary-testing."
          },
          {
            type: "p",
            text: "European society will still experience the dangerous intersection failures \u2014 via open-source deployments, shadow IT, and foreign-hosted services \u2014 but European companies will lack the commercial flexibility to have built comparable systems themselves. They absorb the full societal risk of the disruption without the sovereign capacity to shape the technology."
          },
          {
            type: "p",
            text: "The US framework is essentially a leaky private risk market. The catastrophic enterprise failures are buried under Non-Disclosure Agreements. The real safety rules are not being written by Congress; they are being written quietly by enterprise insurance actuaries refusing to underwrite unverified AI architectures. The public only sees the failures that break through the NDA ceiling. But when they do break through, the adversarial legal process forces public record and institutional pressure for correction. This is the dangerous intersection mechanism operating in real time, at an accelerating rate."
          },
          {
            type: "h3",
            text: "The Epistemic Critique and the Limits of Hybridisation"
          },
          {
            type: "p",
            text: "The first and most fatal flaw is sovereignty. The EU is attempting to regulate an infrastructure it does not sovereignly own. If a nation relies entirely on US-based hyperscalers, its regulatory framework is an illusion\u2014it exists at the mercy of foreign boardrooms. You cannot build a \"framework-first\" moat on rented land. Regulatory frameworks derive their quality from understanding the thing they regulate, and that understanding comes primarily from observing how systems behave in the real world, at scale, under conditions that designers did not anticipate. The EU is attempting to write comprehensive rules for AI systems before those systems have generated the volume of real-world failure data that would make those rules well-calibrated. They will address the failure modes that were imaginable in advance rather than the failure modes that actually manifest at scale."
          },
          {
            type: "p",
            text: "China's approach has a different risk profile. Deployment at scale generates the right data, but the political system's relationship with that data is complicated. Failures that should force policy revision can be managed rather than corrected. The iteration cycle is fast when failure is acknowledged and acted upon. It stalls when failure becomes politically inconvenient."
          },
          {
            type: "p",
            text: "It is tempting to say the optimal approach borrows from all three \u2014 China's willingness to deploy at scale, the EU's insistence on explicit rights protection, the US adversarial process that forces failures into public record. That framing is wrong. These are not engineering choices a state can mix and match. Each approach is downstream of a political system that produced it. China's deployment speed depends on a political culture that can absorb visible failure without electoral consequence. The EU's rights framework depends on a supranational legal architecture that took fifty years to build. The US adversarial process depends on a legal culture organised around civil discovery and class action. You cannot transplant the mechanism without the substrate."
          },
          {
            type: "p",
            text: "What this means is that the next decade is not a contest to find the best regulatory design. It is a natural experiment in which three political systems will produce three patterns of success and failure, none of them fully transferable. The honest question is narrower: what pieces of each approach might actually travel? China's tolerance for early deployment requires an authoritarian absorption capacity most democracies lack. The EU's framework-first approach requires sovereign control over the infrastructure being regulated, which the EU itself does not have. The US adversarial backstop \u2014 when catastrophic failures breach the NDA firewall, the legal process forces them into public record \u2014 is the most portable mechanism, but only to systems with the underlying legal culture to support it."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Most states will end up with hybrids shaped less by design than by which failures force their hand first."
          },
          {
            type: "h3",
            text: "The Tail Risk Exception"
          },
          {
            type: "p",
            text: "The deployment-first approach is necessary for recoverable failures\u2014software bugs, localized hallucinations, and autonomous driving edge-cases. The dangerous intersection needs traffic. However, this model structurally fails for terminal tail risks, such as malicious actors using open-weight models to engineer pathogens. Against tail risk, the EU's compliance-based framework is equally useless; paperwork in Brussels does not stop a bad actor running an open-weight model on a private server. The only rational defense against terminal tail risk is hardened, active infrastructure: AI-enabled bio-surveillance, mandatory DNA synthesis screening, and strict API-gating of frontier capabilities."
          },
          {
            type: "h3",
            text: "What Governments Actually Need to Get Right"
          },
          {
            type: "p",
            className: "font-medium text-slate-100",
            text: "Tail risk is the special case. For everything else, the decisions that will matter are about incentive structures. Not rules about what AI can and cannot do, but structures that determine whether the economic incentives facing companies, researchers, and individuals point toward beneficial outcomes or against them."
          },
          {
            type: "p",
            text: "Two areas where the incentive structures are currently wrong. First, the liability framework for AI-assisted decisions in high-stakes domains is almost entirely unresolved. When an AI-assisted medical diagnosis is wrong, who carries the liability? The answer to that question determines whether AI providers have any incentive to improve reliability, or whether professionals face such severe liability risk that they avoid AI tools that would genuinely improve their work."
          },
          {
            type: "p",
            text: "Second, and most relevant to Act I's territory: the education and transition support systems are calibrated for a labor market that no longer exists. Retraining programs built around a two-year model are not matched to a capability environment that changes on eight-month benchmark cycles. The brief period before these two squeezes fully converge is the most valuable time for building the transition infrastructure that will be needed when physical automation arrives at scale. Most governments are not using it."
          }
        ]
      },
      {
        id: "act3",
        label: "ACT III \u2014 The Epistemic Floor",
        title: "ACT III \u2014 The Epistemic Floor",
        subtitle: "How We Live in the Verification Layer, the Death of Probabilistic Trust, and the Apprenticeship Problem",
        content: [
          {
            type: "p",
            text: "When an economic transition happens, it does not just change what people do for a living. It changes what society implicitly trusts, what it penalizes, and how it defines human value. The compression of work and the three regulatory experiments are the mechanics of this transition. Act III is about the reality of living inside it."
          },
          {
            type: "h3",
            id: "asymmetry-of-truth",
            text: "Section I \u2014 The Asymmetry of Truth"
          },
          {
            type: "p",
            text: "The most profound vulnerability of modern institutions is that they were designed under an implicit law of physics: creating a convincing lie took roughly the same amount of human caloric energy as discovering the truth."
          },
          {
            type: "p",
            text: "Because the cost of production was relatively high, the volume of submissions to courts, scientific journals, and government regulators was naturally throttled by human exhaustion. That was the load-bearing wall of the 20th century."
          },
          {
            type: "p",
            text: "The Epistemic Flood breaks this asymmetry. We are entering an era where generating a 500-page, highly plausible, synthetically cited legal brief costs fractions of a cent, but verifying its accuracy still costs senior human attention one page at a time. When the cost to generate approaches zero, but the cost to verify remains tethered to human time, open systems collapse under the weight of adversarial volume."
          },
          {
            type: "p",
            text: "The structural response to this is the end of free submission."
          },
          {
            type: "p",
            text: "Institutions will be forced to introduce a \"Verification Tax.\" In the near future, submitting a legal filing, a scientific paper, or a public comment will require friction by design. This will not look like CAPTCHAs. It will look like API-enforced querying (where AI is strictly confined to read from certified, closed databases) or explicit financial staking\u2014posting a bond that is forfeited if an automated auditing system detects hallucinations in your submission."
          },
          {
            type: "p",
            className: "mb-12",
            text: "We are moving from a society that optimized for the friction-less sharing of information to a society that must urgently construct toll roads for truth."
          },
          {
            type: "h3",
            id: "end-of-probabilistic-trust",
            text: "Section II \u2014 The End of Probabilistic Trust"
          },
          {
            type: "p",
            text: "Historically, trust was probabilistic. If you saw a video of an event, read a dense technical document, or looked at a photograph, you trusted it because the capital and skill required to fake it at a high level were rare. You trusted the content."
          },
          {
            type: "p",
            className: "mb-12",
            text: "By the late 2020s, trusting the content of digital media without verification will be an act of systemic negligence. But this shift will bifurcate along institutional lines."
          },
          {
            type: "p",
            text: "The Analog Gridlock (Near-Term): Bureaucracies default to physical friction when digital trust breaks down. Expect a 36-to-60 month period where courts and regulators respond to the Epistemic Flood with two concrete mechanisms: wet-ink notarization of AI-assisted documents, and financial staking \u2014 a bond posted by the submitter that is forfeited if an automated auditing system detects hallucinations. Both mechanisms reintroduce the human caloric cost that used to throttle adversarial volume."
          },
          {
            type: "p",
            text: "Institutional Reality: Within formal institutions, society will shift to cryptographic chain-of-custody. The transitional mechanism is API-enforced querying, where AI systems are strictly confined to read from certified, closed institutional databases rather than from the open web. The longer-term mechanism is the Zero-Knowledge Proof. The focus will no longer be on whether the text sounds true, but whether the digital provenance proves it was generated by a certified human sensor or an authorized model. Truth becomes a function of cryptography, not prose."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Ambient Social Reality: The broader social layer will not adopt ZKPs. It cannot. Instead, society will default to a new baseline heuristic: all unverified digital media is assumed to be synthetic until proven otherwise. The psychological toll of this shift is difficult to overstate. An entire generation will train its intuition to ignore what its eyes and ears process and look instead for the institutional watermark. Seeing will no longer be believing. The absence of a verified source will be the signal."
          },
          {
            type: "h3",
            id: "apprenticeship-problem",
            text: "Section III \u2014 The Apprenticeship Problem"
          },
          {
            type: "p",
            text: "If syntax is a commodity and verification is the career, what happens to the humans who must actually do the work?"
          },
          {
            type: "p",
            text: "The senior bulge of engineers and managers who cut their teeth during the 2010\u20132022 boom currently possesses the structural intuition to govern complex AI systems. They know how systems break because they spent a decade breaking them manually. As the Harvard data noted in Act I shows, this is the pattern the authors call \"seniority-biased technological change\" \u2014 the value of accumulated judgment rises precisely as the entry-level work that used to build it is automated away. The people who can verify AI output are the ones who once had to produce it by hand."
          },
          {
            type: "p",
            text: "The cohort entering the workforce today will not get that training by default. Their professional existence begins as orchestrators of AI systems \u2014 doing the messy translation between rigid agents and chaotic legacy infrastructure, catching errors rather than producing work from scratch. Whether this builds the same kind of expertise is an open question, and almost certainly domain-specific. Some kinds of judgment may form faster when an apprentice can run a thousand experiments in a week. Others may require the friction of execution to form at all. A financial analyst who never built a model by hand may miss the structural instinct for when one is wrong. A writer who never drafted by hand may miss the sense of when a sentence is load-bearing. Or they may not. We genuinely do not know yet."
          },
          {
            type: "p",
            text: "What we do know is that the organisations treating this as a solved problem are making a bet, not a decision. The organisations treating it as an open question are designing deliberately \u2014 engineering the friction of execution back into junior training, domain by domain, to figure out which forms of expertise survive the shortcut and which do not. The brief calls these domains <em>training enclaves</em> \u2014 places where execution friction is deliberately preserved because some forms of expertise cannot be acquired any other way. They are betting that some kinds of mastery still have to be earned by hand, and they are willing to pay for the apprenticeship to find out which ones. These are the organisations that will produce the Meta-Verifiers of the 2030s \u2014 seniors whose job is no longer to read the output manually, but to possess the structural intuition required to design the systems that read it for them."
          },
          {
            type: "p",
            text: "There is a coordination problem here that this essay is not pretending to solve. Any single firm that maintains a junior pipeline pays the full cost of training while competitors free-ride on the talent pool it produces. This is the textbook structure of a public good \u2014 privately costly, socially valuable, structurally underprovided. Some firms will fund training enclaves out of long-horizon self-interest, or because they can capture enough of the trained talent to make the math work. Most will not. Which means the problem gets solved by a small number of structurally advantaged actors \u2014 large incumbents, regulated industries with mandatory training requirements, government-funded pipelines \u2014 or it does not get solved at the scale the technology requires. The honest version of this prediction is not that smart organisations will build training enclaves. It is that the organisations that can absorb the externality will, and the rest of the economy will face a senior talent crisis in the 2030s that nobody has the incentive to prevent."
          },
          {
            type: "h3",
            text: "Where the Leverage Lives"
          },
          {
            type: "p",
            text: "If verification is where the work goes and apprenticeship is where the talent forms, the next question is where the leverage and the capital actually accrue. Two forces operate at different layers of the stack, and both are real. Concentration operates at the integration layer \u2014 what the Strategic Brief calls the <em>Action Moat</em>, the defensibility that accrues to whoever secures the compliance-approved integration with enterprise systems, not whoever builds the best model. Decentralisation operates at the capability layer, where open-weight models keep the frontier within reach of anyone who can engineer around them. The structural response to concentration is not primarily a government response; it is architectural, and it runs at the capability layer."
          },
          {
            type: "p",
            text: "The open-source AI ecosystem is running roughly two to three months behind the frontier models at any given time. In a world where AI capability approaches human performance across most domains, a two-month lag becomes academic. The leverage point shifts entirely to who has the best systems built around the capability."
          },
          {
            type: "p",
            text: "The history of the internet is instructive here. There were powerful economic forces toward centralisation at every stage. What prevented total centralisation was not altruism or regulation alone. It was that open protocols and distributed infrastructure created too much value for too many actors for any single party to capture the whole thing. The developers who built on open standards had more combined creative capacity than any single company."
          },
          {
            type: "p",
            text: "The MCP ecosystem that the Strategic Brief documents is an early version of this dynamic playing out in AI integration. Developers who build on open standards control their own destiny, while those who build on closed platforms are permanently subject to the platform's pricing decisions, policy changes, and survival. The lesson of every previous platform cycle is available to every developer who wants to learn it."
          },
          {
            type: "h3",
            text: "The Intersection"
          },
          {
            type: "p",
            text: "The compression of cognitive and physical work is not an ending; it is a recalibration. It opens the largest build window of the next decade, and the work ahead is concrete enough to name."
          },
          {
            type: "p",
            text: "Junior hires are capital expenditure on the senior judgment that will exist in 2035. Training enclaves are how the Meta-Verifiers of the 2030s get manufactured. The Action Moat is where capital should flow. Together, these are where the verification layer gets built."
          },
          {
            type: "p",
            text: "When the cost of creation collapses to the price of compute, the ability to verify becomes the true limit of scale. That is not a warning. It is a map. Train the juniors. Stand up the enclaves. Build the moats. The builders of the next decade are already moving."
          },
        ]
      }
    ],
    footer: {
      author: "By Arthur Devresse & Claude Sonnet 4.6 \u00b7 April 2026",
      license: "Published under Creative Commons.",
      tagline: "After the Flood"
    }
  },
  NL: {
    nav: {
      report: "Strategisch Rapport",
      research: "Onderzoekspaper",
      methodology: "Methodologie",
      privacy: "Privacy"
    },
    common: {
      share: "Deel dit essay",
      copy_link: "Kopieer link",
      copied: "Gekopieerd!",
      chapters: "Hoofdstukken"
    },
    hero: {
      title_part1: "Na de",
      title_accent: "Epistemische Vloed",
      subtitle: "Een speculatief essay over waar dit naartoe gaat",
      author: "Door Arthur Devresse & Claude Sonnet 4.6",
      date: "April 2026",
      read_time: "~20 min. leestijd",
      intro_quote: "Dit stuk is geen datarapport. Het is een betoog over waar AI de economie, de instellingen en de samenlevingen heen leidt in het komende decennium. Verwijzingen naar cijfers komen uit de {link}. Waar dit stuk speculeert, wordt dat vermeld. De meningen zijn de onze.",
      link_text: "Strategic Brief van april 2026",
      discovery_cta: "Wilt u de data achter dit essay lezen? Raadpleeg het Strategisch Rapport 2026.",
      sources_cta: "Bronnen \u2192"
    },
    acts: [
      {
        id: "act1",
        label: "AKTE I \u2014 De twee knelpunten",
        title: "AKTE I \u2014 De twee knelpunten",
        subtitle: "Hoe cognitief werk als eerste wordt samengedrukt, fysiek werk als volgende, en waarom de kloof ertussen kleiner is dan ze lijkt",
        content: [
          {
            type: "p",
            text: "Er komt in elke grote economische transitie een moment waarop de mensen die de transitie doormaken wel kunnen zien wat er aankomt, maar de omvang ervan niet werkelijk kunnen bevatten. Fabrieksarbeiders in 1910 konden de lopende band zien aankomen. Zetters in 1980 zagen de desktopcomputer. Zij hadden geen ongelijk om zich aan te passen. Zij hadden ongelijk over hoe snel en hoe volledig die aanpassing zou moeten gebeuren."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Wij bevinden ons nu op dat moment. In tegenstelling tot eerdere transities beschikken wij over redelijk goede data over de vorm van wat komt \u2014 niet omdat wij de toekomst kunnen voorspellen, maar omdat de vroege cijfers er al zijn."
          },
          {
            type: "h3",
            text: "Deel I \u2014 De vorm van de ontwrichting"
          },
          {
            type: "p",
            text: "Enkele jaren geleden was de verwachte vorm van AI's impact op cognitief werk eenvoudig. Het midden van de arbeidsmarkt zou uithollen naarmate AI routinematig synthesewerk absorbeerde. De top zou standhouden, want oordeelsvorming laat zich moeilijk automatiseren. De bodem zou standhouden, want iemand moest de machines van prompts voorzien. Het was een redelijke veronderstelling."
          },
          {
            type: "p",
            text: "De data van 2026 vertellen een rommeliger verhaal."
          },
          {
            type: "p",
            text: "De bodem houdt niet stand. Hij stort in. De tewerkstelling van instap-ontwikkelaars tussen 22 en 25 jaar is met ongeveer 20% gedaald sinds de piek van eind 2022 (Stanford Digital Economy Lab). Bredere industri\u00eble trackers tonen vacaturedalingen van rond 67% sinds 2022. Het interessante feit is niet de daling zelf \u2014 budgetten krompen over de hele lijn tijdens het ZIRP-tijdperk \u2014 maar dat toen het kapitaal in 2025 terugkeerde, de junior headcount niet mee terugkeerde. Het aandeel van junior wervingen binnen IT-functies is over dezelfde periode gedaald van 15% naar 7%, volgens industri\u00eble trackers. De Capex van de grote technologiebedrijven steeg van ongeveer $256 miljard in 2024 naar $427 miljard in 2025 en een verwachte $562 tot $700 miljard in 2026, terwijl de IT-aanwervingen op instapniveau in dezelfde periode bleven krimpen. Het geld ging naar computekracht en naar senior engineers. De volledige gegevens staan in \u00a75 van de Strategic Brief. De functies die vroeger de eerste tree van de ladder waren \u2014 de functies die pas-afgestudeerden tot professionals omvormden \u2014 worden simpelweg weggenomen."
          },
          {
            type: "p",
            text: "Salesforce kondigde voor 2025 nul nieuwe engineering-aanwervingen aan. Block (de Amerikaanse fintech, voorheen Square) snoeide zijn personeelsbestand van tienduizend naar minder dan zesduizend medewerkers. Amerikaanse ondernemingen zoals deze staan het nauwst bij de technologie en zijn de eersten om te doorgronden dat een senior engineer met goede tooling het werk van een klein team verricht. De rest van de economie loopt twee \u00e0 drie jaar achter, maar beweegt in dezelfde richting."
          },
          {
            type: "p",
            text: "Het midden staat onder een ander soort druk. Projectmanagers, bedrijfsanalisten, generalistische co\u00f6rdinatoren, mensen wier kernwaarde lag in het synthetiseren van informatie en het beheren van routinematige complexiteit, stellen vast dat hun werk opwaarts wordt geabsorbeerd in de tools die hun seniors gebruiken. Het zijn geen ongeschoolde mensen. Hun specifieke vaardigheden zijn simpelweg die waar AI het snelst goed in wordt."
          },
          {
            type: "p",
            text: "De top wordt herprijsd. Senior salarissen voor AI-geletterde functies zijn met veertig procent gestegen (in de Amerikaanse markt; de Europese premies zijn re\u00ebel, maar doorgaans lager door andere loonstructuren). Niet uitvoering, maar oordeelsvorming is de nieuwe schaarse hulpbron: het vermogen om de fouten te vangen die op het eerste gezicht feilloos lijken, de beslissingen te nemen die verantwoording dragen, de relaties op te bouwen die vertrouwen vergen."
          },
          {
            type: "p",
            text: "Drie dingen gebeuren tegelijkertijd: de bodem wordt weggenomen, het midden wordt geabsorbeerd, de top wordt herprijsd. Het is minder een hervorming van de arbeidsmarkt dan een samendrukking ervan: druk die zich samentrekt rond oordeelsvorming, waarbij de rest onherroepelijk naar automatisering wordt getrokken."
          },
          {
            type: "p",
            text: "Het geval van de Zweedse fintech Klarna verdient aandacht. Klarna heeft het grootste deel van zijn klantenserviceteam vervangen door AI \u2014 het personeelsbestand kromp van 5.500 naar 3.400 en de onderneming vierde publiekelijk ongeveer $10 miljoen aan jaarlijkse besparingen \u2014 en was binnen twee jaar stilletjes opnieuw aan het aanwerven. De les is niet dat AI geen klantendienst kan verlenen; op meetbare wijzen kan zij dat wel. De les is dat vertrouwen, context en institutioneel geheugen het product waren, de hele tijd al. Reactiesnelheid en kostprijs per ticket waren hoe Klarna het werk mat, niet wat het werk werkelijk was. Een Harvard-werkpaper (Hosseini Maasoum & Lichtinger, augustus 2025) dat 62 miljoen Amerikaanse werknemers in 285.000 ondernemingen volgde, stelt vast dat AI-adopterende ondernemingen hun junior tewerkstelling binnen zes kwartalen met ongeveer 8% zien dalen ten opzichte van niet-adopters, terwijl de senior tewerkstelling stabiel blijft \u2014 een patroon dat de auteurs 'ancienniteitsgestuurde technologische verandering' noemen. Eurostat-data over 10+ miljoen ICT-specialisten in de EU tonen een soortgelijke verschuiving naar senior-specialistische rollen."
          },
          {
            type: "p",
            text: "De ondernemingen die dit goed navigeren, zijn de ondernemingen die uitgevogeld hebben welke delen van hun werking werkelijk routinematig zijn en die delen hard hebben geautomatiseerd, terwijl zij de mensen die het oordeelswerk verrichten hebben behouden en opgewaardeerd. De ondernemingen die AI als een kostenpost voor headcount behandelden, zijn nu duur aan het herwerven."
          },
          {
            type: "p",
            text: "Een eerlijke tegenwerping: AI-gekoppelde ontslagen zijn een handig verhaal geworden voor snoeioperaties gedreven door andere krachten \u2014 het einde van goedkoop geld, overbezetting tijdens de pandemie, veranderingen in belastingboekhouding. Verschillende tech-CEO's hebben dat zelf gezegd. Die krachten zijn re\u00ebel. Maar de specifieke patronen \u2014 junior rollen die dalen terwijl senior rollen standhouden, AI-adopterende ondernemingen die binnen dezelfde sector divergeren van niet-adopters \u2014 laten zich moeilijk verklaren zonder AI als oorzakelijke factor, en niet slechts als dekmantel."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Deze vorm is niet de eindfase. Het is het eerste deel van een langer verhaal."
          },
          {
            type: "h3",
            text: "Deel II \u2014 De cognitieve druk"
          },
          {
            type: "p",
            text: "Het beeld hierboven veronderstelt een betrekkelijk stabiel plafond voor AI-capaciteit \u2014 dat de senior rollen van vandaag veilig zijn omdat zij het soort oordeel vereisen dat AI nog niet kan reproduceren. Die veronderstelling heeft een halfwaardetijd. Maar de belangrijkere vaststelling, degene die dragend is voor alles wat volgt, is dat het verschil tussen verschillende agent-systemen die op hetzelfde basismodel draaien, groter is dan het verschil tussen de basismodellen zelf."
          },
          {
            type: "p",
            text: "De {link} documenteert dit rechtstreeks: drie verschillende agent-systemen \u2014 Auggie, Cursor en Claude Code \u2014 die op hetzelfde basismodel draaien, scoren tussen de vijftig en vijfenvijftig procent op dezelfde contaminatie-bestendige benchmark (SWE-bench Pro, Scale AI SEAL-leaderboard, februari 2026). Vijf procentpunten capaciteitsverschil, louter uit de engineering. De capaciteitswinsten van 2025\u20132026 komen voort uit de manier waarop modellen worden geleerd hun eigen werk te controleren, problemen op te splitsen en met andere modellen samen te werken \u2014 en niet in de eerste plaats uit onderliggende modellen die slimmer worden. Bouwen verslaat het kiezen van een beter model.",
            link_text: "Strategic Brief"
          },
          {
            type: "p",
            text: "De benchmark-tredmolen is de context hiervoor, niet het bewijs ervan. AI-capaciteitstoetsen worden beheerst, uitgefaseerd en vervangen door moeilijkere volgens een cyclus van ongeveer acht maanden. ARC-AGI-1 is in essentie opgelost. ARC-AGI-2 nadert verzadiging binnen twaalf maanden na lancering. ARC-AGI-3 werd in maart 2026 gelanceerd met frontier-modellen die lager dan 1% scoren, hoewel een gespecialiseerde niet-LLM-benadering in preview al 12% heeft bereikt. Opmerkelijk is dat die 12% tot stand kwam via een gespecialiseerde CNN- en reinforcement-learning-benadering, niet via een frontier-LLM \u2014 wat u vertelt dat de benchmark oplosbaar is, maar ook dat hij mogelijk wordt opgelost door architecturen die orthogonaal staan op de transformer-schaling die 2022\u20132025 domineerde. Een projectie gebaseerd op het achtmaanden-halfwaardetijdpatroon van de benchmark plaatst hem op 30 tot 50% tegen eind 2026. De onderliggende capaciteit blijft opschuiven, maar de engineering eromheen beweegt sneller \u2014 en d\u00e1\u00e1r leeft de hefboom."
          },
          {
            type: "p",
            text: "De senior rollen die op dit moment waardevol zijn \u2014 de engineers die de systemen ontwerpen, de analisten die de gegevens synthetiseren, de managers die de AI-agents aansturen \u2014 zijn waardevol omdat zij boven het huidige capaciteitsplafond zitten. Dat plafond is niet vast, maar de senior menselijke rol verdwijnt niet wanneer het stijgt. Hij verschuift. Het waardevolle werk beweegt van het leveren van de antwoorden naar het ontwerpen van de systemen die de antwoorden vinden, en van het uitvoeren van taken naar het orkestreren van de machines die ze uitvoeren."
          },
          {
            type: "p",
            text: "Dit is ook de reden waarom het volgende decennium een decennium is van bouwers, niet alleen van overlevers. De systeemlaag \u2014 waar een verschil van vijf procentpunten bestaat tussen teams die op hetzelfde model draaien \u2014 is precies waar een breed professioneel publiek nog kan bijdragen. De meeste mensen met domeinexpertise kunnen zich plausibel bewegen naar systeemontwerp, verificatie en orkestratie; de slotgracht is engineering-oordeel, niet toegang tot een beter model."
          },
          {
            type: "quote",
            text: "De premie op menselijk oordeel is re\u00ebel. De aard ervan verschuift."
          },
          {
            type: "p",
            className: "mb-12",
            text: "De eerlijke prognose is niet dat senior rollen verdampen. Het is dat wat een senior rol waardevol maakt sneller verandert dan de meeste organisaties, of de meeste individuen, op dit moment plannen."
          },
          {
            type: "h3",
            text: "Deel III \u2014 De fysieke druk, en het venster ertussen"
          },
          {
            type: "p",
            text: "Cognitieve AI automatiseert niet alleen softwarefuncties. Zij versnelt elk vakgebied dat voorheen werd afgeremd door menselijke cognitieve arbeid \u2014 en dat omvat robotica."
          },
          {
            type: "p",
            text: "Tot voor kort zaten robots vast achter een eenvoudig probleem: je kon een taalmodel trainen op het volledige internet, maar je kon een robot niet trainen op de volledige fysieke wereld. Dat is veranderd. Simulatieomgevingen kunnen nu op schaal realistische fysieke oefendata genereren, en de combinatie van differentieerbare fysica, massaal parallelle GPU-simulatie en foundation-modellen getraind over duizenden uiteenlopende fysieke vormen heeft wat mogelijk is fundamenteel verschoven. Het knelpunt in de robotica is verschoven \u2014 van de vraag of robots \u00fcberhaupt kunnen leren naar hoe goed aangeleerde policies vertalen naar nieuwe omgevingen. Dat transferprobleem is niet opgelost, maar het is niet langer de muur. De muur is nu fysiek \u2014 productie, inzet en reparatie op schaal."
          },
          {
            type: "p",
            text: "Wat overblijft is een productieprobleem, en het is een re\u00ebel probleem."
          },
          {
            type: "p",
            text: "Software schaalt aan de snelheid van computekracht. Als een AI-agent werkt, kunt u morgenochtend een miljoen exemplaren inzetten. Hardware schaalt aan de snelheid van toeleveringsketens. Zelfs met een perfect robothoofd vergt het produceren van miljoenen actuatoren, chassis en batterijen kapitaalintensieve, analoge fabrieksopschaling. U kunt een fysieke machine niet kopi\u00ebren en plakken."
          },
          {
            type: "p",
            text: "Er is ook een reparatieprobleem dat de meeste software-mensen onderschatten. Wanneer een AI-agent een gehallucineerd antwoord produceert, patcht u het model over-the-air in seconden en elk exemplaar is hersteld. Wanneer een robot hallucineert en een sensor tegen een muur verbrijzelt, doet de software-fix niets voor de hardware. Het vergt een technicus, een vervangingsonderdeel en fysieke stilstand. Fysiek falen schaalt niet zoals digitaal falen dat doet."
          },
          {
            type: "p",
            text: "De fysieke druk zal dus niet overal tegelijk arriveren. Die zal als eerste arriveren waar de omgeving gecontroleerd is en de verzekeringswiskunde klopt. Magazijnen. Logistieke knooppunten. Industri\u00eble zones. Niet omdat robots een stoep niet aankunnen, maar omdat verzekeraars een gecontroleerd magazijn wel kunnen prijzen en een openbare straat nog niet."
          },
          {
            type: "p",
            text: "De wereldwijde logistieke sector is het duidelijkste vooruitblik op hoe volledige compressie eruitziet. Aan de cognitieve zijde verwerkt AI al vraagvoorspelling en routeoptimalisering. Aan de fysieke zijde, omdat magazijnen gestructureerde omgevingen zijn die verzekeraars kunnen prijzen, volgt zware robotica er vlak achter. Het personeel verschuift niet van cognitieve naar fysieke taken als veilige haven; beide worden sequentieel samengedrukt, in dezelfde gebouwen."
          },
          {
            type: "p",
            text: "Dit is de valstrik van het huidige moment. Naarmate cognitieve taken worden geautomatiseerd, is de instinctieve reactie te pivotten naar fysiek, vaardig werk \u2014 loodgieterswerk, elektriciteit, vakmanschap, alles wat handen vergt. Maar diezelfde AI-modellen die kenniswerkers verdrijven, versnellen de materiaalkunde en de besturingssystemen achter de robots die uiteindelijk veel van dat fysieke werk zullen overnemen. Het venster is re\u00ebel, maar het is geen carri\u00e8rewisseling van dertig jaar. Het is een tijdelijke, samengedrukte kloof tussen twee knelpunten."
          },
          {
            type: "p",
            text: "Overleven betekent zich gelijktijdig \u2014 niet opeenvolgend \u2014 bewegen naar de bestuurs-, orkestratie- en verificatielagen van zowel digitale als fysieke systemen. In de praktijk ziet dit eruit als een financieel analist die stopt met het bouwen van het model en begint met het ontwerpen van de controles op de AI die het produceert; een projectmanager die stopt met het co\u00f6rdineren van statusupdates en begint met het bepalen van de betrouwbaarheidsdrempels waaraan agents moeten voldoen voordat hun output de klant bereikt; een logistiek leidinggevende die overschakelt van zelf orderpicken naar het aansturen van pick-orkestratie over geautomatiseerde vloten. De mensen die zich positioneren rond systeemontwerp in plaats van uitvoering, lopen reeds voor."
          },
          {
            type: "p",
            text: "Voor organisaties: het Klarna-patroon voorspelt dat ondernemingen die nu haastig overgaan tot volledige vervanging een correctie zullen ondergaan. De ondernemingen die deze periode gebruiken om werkelijk te begrijpen welke delen van hun werking menselijk oordeel vergen \u2014 en die investeren in het opwaarderen van die mensen in plaats van hen te vervangen \u2014 zullen over een structureel talentvoordeel beschikken wanneer het tweede knelpunt arriveert en het gedrang losbreekt."
          },
          {
            type: "p",
            className: "font-medium text-indigo-400",
            text: "Voor overheden: hier wordt het verhaal het meest gecompliceerd, en hier hebben de beslissingen de langste staarten. Dat is het terrein van Akte II."
          }
        ]
      },
      {
        id: "act2",
        label: "AKTE II \u2014 De afrekening met betrouwbaarheid",
        title: "AKTE II \u2014 De afrekening met betrouwbaarheid",
        subtitle: "Hoe samenlevingen leren leven met systemen die op nieuwe manieren falen",
        content: [
          {
            type: "p",
            text: "In de buurt waar ik ben opgegroeid ligt een gevaarlijk kruispunt. Jarenlang eiste het met deprimerende regelmaat ongevallen. De gemeenteraad debatteerde erover, bewoners klaagden, en er gebeurde niets, tot een bijzonder zwaar ongeval de zaak afdwong. Binnen zes maanden stond er een verkeerslicht. De ongevallen hielden op. Niemand had het probleem van menselijke fouten achter het stuur volledig hoeven op te lossen vooraleer er auto's op die weg mochten rijden. Wat men nodig had waren voldoende falen, op een voldoende zichtbare plek, om een specifieke institutionele reactie af te dwingen."
          },
          {
            type: "p",
            text: "Zo worden complexe systemen eigenlijk veilig gemaakt. Niet door anticipatie. Door contact met de werkelijkheid, door falen, en door de reactie die het falen afdwingt."
          },
          {
            type: "p",
            className: "mb-12",
            text: "De geschiedenis van elke technologie die wij nu als veilig en onopvallend beschouwen, volgt dit patroon. Luchtvaart, farmaceutica, financi\u00eble stelsels, kernenergie, voedselveiligheid. De kaders die hen besturen, werden niet vooraf geschreven door wijze regelgevers die alle faalwijzen voorzagen. Zij werden geschreven als reactie op crashes, medicijnrampen, marktinstortingen, meltdowns en uitbraken. De regelgeving is bijna altijd een gevolg van het falen, niet een preventie ervan."
          },
          {
            type: "quote",
            text: "U kunt geen regels schrijven voor iets wat nog door niemand op grote schaal is stukgemaakt."
          },
          {
            type: "h3",
            text: "De vorm van komende mislukkingen"
          },
          {
            type: "p",
            text: "De {link} documenteert waar de betrouwbaarheid momenteel staat. Zonder behoorlijk systeemontwerp produceert AI met zelfvertrouwen foute antwoorden in meer dan 10% van de gevallen bij standaardtaken. Juridische AI faalt in 69 tot 88% van de gevallen bij specifieke juridische vragen, zonder mitigatie, volgens onderzoek van Stanford RegLab. Medische AI hallucineert, zonder de juiste architectuur, aan snelheden die onmiddellijk diskwalificerend zouden zijn indien toegepast op een menselijke arts.",
            link_text: "Strategic Brief"
          },
          {
            type: "p",
            text: "Met goed ontworpen systemen dalen die cijfers drastisch. Multi-agent-verificatie brengt enterprise-foutenpercentages drastisch omlaag. Zelfreflectieve architecturen \u2014 SELF-RAG in het bijzonder \u2014 brengen klinische hallucinatie onder 6%, volgens een peer-reviewed evaluatie van klinische RAG in MDPI Electronics (oktober 2025). Het betrouwbaarheidsprobleem is grotendeels een probleem van systeemengineering, niet een fundamentele beperking van AI. Dat is de optimistische lezing, en de data ondersteunen haar voor gestructureerde, begrensde taken in gecontroleerde omgevingen."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Het stuk dat werkelijk onzeker blijft is wat er gebeurt wanneer deze systemen zich naar terrein begeven dat noch gestructureerd, noch begrensd is. Echte ziekenhuizen. Echte rechtbanken. Echte infrastructuur. De geschiedenis van complexe engineering suggereert dat u telkens wanneer u een verificatielaag aan een geautomatiseerd systeem toevoegt, nieuwe faalwijzen cre\u00ebert op de raakvlakken tussen lagen, die vaak moeilijker op te sporen zijn dan het oorspronkelijke probleem."
          },
          {
            type: "p",
            text: "Niemand zou verrast mogen zijn wanneer dit op grote schaal gebeurt met AI-systemen. De productieve reactie is institutionele voorzieningen opbouwen die die mislukkingen snel kunnen vangen en indammen \u2014 niet inzet verbieden tot perfectie gegarandeerd is. Perfectie is niet beschikbaar. Het gevaarlijke kruispunt wacht niet op een perfect verkeersbeheersysteem vooraleer ongevallen te genereren."
          },
          {
            type: "h3",
            text: "Drie experimenten die gelijktijdig lopen"
          },
          {
            type: "p",
            text: "Het meest interessante kenmerk van het huidige mondiale moment is dat drie fundamenteel verschillende benaderingen van dit probleem parallel worden getest, in re\u00eble economie\u00ebn, op re\u00eble populaties, in re\u00eble tijd. China, de Europese Unie en de Verenigde Staten voeren wat neerkomt op een meerdecennia-durend natuurlijk experiment uit over hoe men een transformatieve technologie bestuurt. De resultaten zullen jaren niet volledig zichtbaar zijn, maar de vroege aanwijzingen zijn al leerzaam. Een kanttekening voorafgaand aan de vergelijking: elk van deze systemen bevat elementen van alle drie de benaderingen. China heeft aanzienlijke algoritmische registratie en inhoudelijke regulering. De VS hebben betekenisvol sectoraal toezicht via de FDA, NHTSA en NIST. De EU voert industrieel beleid naast haar regelgevend kader. Wat volgt beschrijft dominante tendensen, geen volledige karakteriseringen."
          },
          {
            type: "p",
            text: "China heeft in wezen gekozen voor \"eerst inzetten\". Het voordeel is iteratiesnelheid; het risico, dat het waard is meteen te benoemen, is dat mislukkingen die beleidsherziening zouden moeten afdwingen, kunnen worden opgevangen en onderdrukt in plaats van gecorrigeerd. Autonome voertuigen rijden op grote schaal in verschillende grote steden. Autonome en semi-autonome voertuigen \u2014 Waymo, Apollo Go en andere operatoren samen \u2014 hebben inmiddels miljarden kilometers afgelegd op openbare wegen onder re\u00eble omstandigheden, en genereren daarbij volumes aan edge case-gegevens die geen enkele simulatie volledig kan nabootsen. De veiligheidsbalans is, op basis van door operatoren gerapporteerde gegevens, beter dan het rijgedrag van mensen in de specifieke contexten waarin deze systemen zijn ingezet. Niet perfect. Beter. Wanneer de feedbacklus zich kan sluiten, leert het systeem; wanneer er iets goed gaat, wordt het uitgebreid. Het politieke systeem tolereert een ander niveau van zichtbaar falen dan democratische systemen doorgaans verdragen. Die tolerantie snijdt in twee richtingen: zij is wat de feedbacklus op deze snelheid laat werken, en zij is ook wat mislukkingen politiek doet absorberen in plaats van institutioneel corrigeren. Het voordeel is snelheid. Het risico is dat mislukkingen die beleidsherziening zouden moeten afdwingen, kunnen worden opgevangen en onderdrukt in plaats van gecorrigeerd \u2014 een dynamiek die prioriteit geeft aan de schijn van vooruitgang boven het feit ervan."
          },
          {
            type: "p",
            text: "De Europese Unie heeft gekozen voor \"eerst kader\", de omgeving waarin Belgische en Nederlandse bedrijven nu opereren, en haar meest fundamentele kwetsbaarheid is soevereiniteit. De EU poogt een infrastructuur te reguleren die ze niet bezit. Als een regio volledig afhankelijk is van in de VS gevestigde hyperscalers voor de compute waarop de AI draait die zij reguleert, is haar regelgevingskader een illusie \u2014 het bestaat bij de gratie van buitenlandse bestuurskamers. U kunt geen \"kader-eerst\"-bolwerk bouwen op gehuurde grond. De EU AI Act is een ambitieuze poging om een omvattend bestuur te cre\u00ebren v\u00f3\u00f3r brede inzet in plaats van erna, en de intentie is werkelijk bewonderenswaardig. Het praktische effect op korte termijn is dat Europese ondernemingen hun engineering-cycli optimaliseren voor juridische conformiteit in plaats van operationele grenstoetsing \u2014 zij bouwen systemen om audits te doorstaan, terwijl hun concurrenten systemen bouwen die contact met de werkelijkheid kunnen doorstaan."
          },
          {
            type: "p",
            text: "Het doorlaatbaarheidsprobleem verergert het soevereiniteitsprobleem. De EU AI Act kan conforme ondernemingen reguleren. Ze kan het bestaan van open-weight-modellen niet ongedaan maken. De Europese samenleving zal nog steeds de \"gevaarlijke kruispunt\"-mislukkingen ervaren \u2014 via open-source-inzet, schaduw-IT en buitenlands gehoste diensten \u2014 maar Europese ondernemingen zullen de commerci\u00eble flexibiliteit missen om vergelijkbare systemen zelf te hebben gebouwd. Zij absorberen het volledige maatschappelijke risico van de ontwrichting zonder het economische voordeel van vormgeving."
          },
          {
            type: "p",
            text: "Het Amerikaanse kader is in wezen een lekkende private risicomarkt. De catastrofale enterprise-mislukkingen liggen begraven onder geheimhoudingsovereenkomsten. De werkelijke veiligheidsregels worden niet geschreven door het Congres; zij worden stilletjes geschreven door verzekeringsactuarissen van ondernemingen die weigeren ongeverifieerde AI-architecturen te verzekeren. Het publiek ziet enkel de mislukkingen die door het NDA-plafond heen breken. Maar wanneer zij doorbreken, dwingt het contradictoire rechtsproces publieke registratie en institutionele druk tot correctie af. Dit is het mechanisme van het gevaarlijke kruispunt dat in re\u00eble tijd werkt, aan een versnellend tempo."
          },
          {
            type: "h3",
            text: "De epistemische kritiek en de grenzen van hybridisering"
          },
          {
            type: "p",
            text: "Soevereiniteit is het structurele probleem. Het epistemische probleem komt er bovenop. Regelgevingskaders ontlenen hun kwaliteit aan het begrip van wat ze reguleren, en dat begrip komt voornamelijk voort uit het observeren hoe systemen zich in de echte wereld gedragen, op grote schaal, onder omstandigheden die hun ontwerpers niet hadden voorzien. De EU tracht uitvoerige regels te schrijven voor AI-systemen vooraleer die systemen de omvang aan real-world faalgegevens hebben gegenereerd die deze regels goed geijkt zou maken. Ze zal de faalwijzen behandelen die op voorhand denkbaar waren, in plaats van de faalwijzen die zich daadwerkelijk op schaal manifesteren."
          },
          {
            type: "p",
            text: "De Chinese benadering heeft een ander risicoprofiel. Inzet op grote schaal genereert de juiste gegevens, maar de verhouding van het politieke systeem tot die gegevens is ingewikkeld. Mislukkingen die beleidsherziening zouden moeten afdwingen, kunnen worden beheerd in plaats van gecorrigeerd. De iteratiecyclus is snel wanneer falen wordt erkend en waarop wordt gehandeld. Ze loopt vast wanneer falen politiek ongelegen wordt."
          },
          {
            type: "p",
            text: "Het is verleidelijk te zeggen dat de optimale benadering bij alle drie leent \u2014 de Chinese bereidheid om op schaal in te zetten, de EU-nadruk op expliciete rechtenbescherming, het Amerikaanse contradictoire proces dat mislukkingen in het publieke dossier forceert. Die formulering is onjuist. Dit zijn geen engineeringkeuzes die een staat naar eigen inzicht kan combineren. Elke benadering is een afgeleide van het politieke systeem dat haar heeft voortgebracht. De Chinese inzetsnelheid hangt af van een politieke cultuur die zichtbaar falen kan absorberen zonder electorale gevolgen. Het EU-rechtenkader steunt op een supranationale rechtsarchitectuur die vijftig jaar in de opbouw heeft gevergd. Het Amerikaanse contradictoire proces rust op een rechtscultuur die is georganiseerd rond civiele disclosure en class actions. U kunt het mechanisme niet transplanteren zonder het substraat."
          },
          {
            type: "p",
            text: "Wat dit betekent is dat het volgende decennium geen wedstrijd is om het beste regelgevingsontwerp te vinden. Het is een natuurlijk experiment waarin drie politieke systemen drie patronen van succes en mislukking zullen voortbrengen, die geen van alle volledig overdraagbaar zijn. De eerlijke vraag is beperkter: welke onderdelen van elke benadering kunnen daadwerkelijk reizen? De Chinese tolerantie voor vroege inzet vereist een autoritaire absorptiecapaciteit die de meeste democratie\u00ebn ontberen. De EU-benadering van kader-eerst vereist soevereine controle over de infrastructuur die wordt gereguleerd \u2014 controle die de EU zelf niet heeft. Het Amerikaanse contradictoire vangnet \u2014 wanneer catastrofale mislukkingen de NDA-firewall doorbreken, dwingt het rechtsproces hen in het publieke dossier \u2014 is het meest overdraagbare mechanisme, maar alleen naar systemen met de onderliggende rechtscultuur om het te dragen."
          },
          {
            type: "p",
            className: "mb-12",
            text: "De meeste staten zullen uitkomen op hybride vormen die minder door ontwerp worden bepaald dan door welke mislukkingen hen als eerste tot handelen dwingen."
          },
          {
            type: "h3",
            text: "De uitzondering voor staartrisico"
          },
          {
            type: "p",
            text: "De \"inzet-eerst\"-benadering is noodzakelijk voor herstelbare mislukkingen \u2014 softwarebugs, gelokaliseerde hallucinaties en edge cases in autonoom rijden. Het gevaarlijke kruispunt heeft verkeer nodig. Dit model faalt echter structureel voor terminale staartrisico's, zoals kwaadwillige actoren die open-weight-modellen gebruiken om pathogenen te ontwerpen. Tegen staartrisico is het conformiteitsgebaseerde kader van de EU evenzeer nutteloos; papierwerk in Brussel houdt een kwaadwillige actor niet tegen die een open-weight-model op een priv\u00e9server draait. De enige rationele verdediging tegen terminaal staartrisico is verharde, actieve infrastructuur: AI-ondersteunde biosurveillance, verplichte screening van DNA-synthese, en strikte API-vergrendeling van frontier-capaciteiten."
          },
          {
            type: "h3",
            text: "Wat overheden daadwerkelijk goed moeten doen"
          },
          {
            type: "p",
            className: "font-medium text-slate-100",
            text: "Staartrisico is het bijzondere geval. Voor al het overige gaan de beslissingen die ertoe zullen doen over incentive-structuren. Niet regels over wat AI wel en niet mag, maar structuren die bepalen of de economische prikkels voor ondernemingen, onderzoekers en individuen wijzen naar gunstige uitkomsten of ertegen."
          },
          {
            type: "p",
            text: "Twee terreinen waar de incentive-structuren op dit moment verkeerd staan. Ten eerste is het aansprakelijkheidskader voor AI-ondersteunde beslissingen in domeinen met hoge inzet in de VS vrijwel volledig onopgelost. In de EU beginnen de AI-verordening en de herziene Richtlijn Productaansprakelijkheid deze vraag te beantwoorden voor hoog-risico-systemen, maar elders blijft het kader grotendeels onbeslist. Wanneer een AI-ondersteunde medische diagnose fout is, wie draagt dan de aansprakelijkheid? Het antwoord op die vraag bepaalt of AI-aanbieders ook maar enige prikkel hebben om de betrouwbaarheid te verbeteren, of dat beroepsbeoefenaars een zodanig zwaar aansprakelijkheidsrisico lopen dat zij AI-instrumenten vermijden die hun werk werkelijk zouden verbeteren."
          },
          {
            type: "p",
            text: "Ten tweede, en meest relevant voor het terrein van Akte I: de onderwijs- en transitieondersteuningssystemen zijn gekalibreerd voor een arbeidsmarkt die niet meer bestaat. Omscholingsprogramma's opgebouwd rond een tweejarenmodel zijn niet afgestemd op een capaciteitsomgeving die verandert volgens benchmark-cycli van acht maanden. De korte periode voordat deze twee knelpunten volledig samenvallen, is de meest waardevolle tijd voor het bouwen van de transitie-infrastructuur die nodig zal zijn wanneer fysieke automatisering op grote schaal arriveert. De meeste overheden benutten haar niet."
          }
        ]
      },
      {
        id: "act3",
        label: "AKTE III \u2014 De epistemische vloer",
        title: "AKTE III \u2014 De epistemische vloer",
        subtitle: "Hoe wij leven in de verificatielaag, de dood van probabilistisch vertrouwen, en de crisis in de vakkennisoverdracht",
        content: [
          {
            type: "p",
            text: "Wanneer er een economische transitie plaatsvindt, verandert ze niet alleen wat mensen doen om brood op de plank te brengen. Ze verandert wat de samenleving impliciet vertrouwt, wat ze bestraft, en hoe ze menselijke waarde definieert. De samendrukking van werk en de drie regelgevende experimenten zijn de mechanica van deze transitie. Akte III gaat over de werkelijkheid van het leven erbinnen."
          },
          {
            type: "h3",
            id: "asymmetry-of-truth",
            text: "Afdeling I \u2014 De asymmetrie van de waarheid"
          },
          {
            type: "p",
            text: "De diepste kwetsbaarheid van moderne instellingen is dat zij zijn ontworpen onder een impliciete natuurwet: het cre\u00ebren van een overtuigende leugen kostte ongeveer evenveel menselijke calorische energie als het ontdekken van de waarheid."
          },
          {
            type: "p",
            text: "Omdat de productiekost betrekkelijk hoog was, werd het volume aan indieningen bij rechtbanken, wetenschappelijke tijdschriften en overheidsregelgevers op natuurlijke wijze afgeremd door menselijke uitputting. Dat was de dragende muur van de twintigste eeuw."
          },
          {
            type: "p",
            text: "De Epistemische Vloed breekt deze asymmetrie. Wij betreden een tijdperk waarin het genereren van een pleidooi van 500 pagina's, juridisch hoogst plausibel en voorzien van synthetische bronverwijzingen, fracties van een cent kost, maar het verifi\u00ebren van de juistheid ervan nog steeds senior menselijke aandacht pagina per pagina vergt. Wanneer de productiekost tot nul nadert, maar de verificatiekost vastgeketend blijft aan menselijke tijd, storten open systemen in onder het gewicht van adversariaal volume."
          },
          {
            type: "p",
            text: "De structurele reactie daarop is het einde van de vrije indiening."
          },
          {
            type: "p",
            text: "Instellingen zullen gedwongen worden een \"verificatieheffing\" in te voeren. In de nabije toekomst zal het indienen van een juridisch dossier, een wetenschappelijk artikel of een openbaar commentaar frictie vergen die in het ontwerp is ingebouwd. Dit zal er niet uitzien als CAPTCHA's. Het zal eruitzien als API-afgedwongen bevraging (waarbij AI strikt wordt beperkt tot het lezen uit gecertificeerde, gesloten databanken) of als expliciete financi\u00eble inzet \u2014 het plaatsen van een borg die verbeurd wordt indien een geautomatiseerd auditsysteem hallucinaties in uw indiening vaststelt."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Wij bewegen ons weg van een samenleving die optimaliseerde voor het frictieloos delen van informatie, naar een samenleving die dringend tolwegen voor de waarheid moet bouwen."
          },
          {
            type: "h3",
            id: "end-of-probabilistic-trust",
            text: "Afdeling II \u2014 Het einde van probabilistisch vertrouwen"
          },
          {
            type: "p",
            text: "Historisch gezien was vertrouwen probabilistisch. Als u een video van een gebeurtenis zag, een dicht technisch document las, of een foto bekeek, vertrouwde u daarop omdat het kapitaal en de vaardigheid vereist om het op hoog niveau te vervalsen, zeldzaam waren. U vertrouwde de inhoud."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Tegen het einde van de jaren 2020 zal het vertrouwen op de inhoud van digitale media zonder verificatie een daad van systemische nalatigheid zijn. Maar deze verschuiving zal zich langs institutionele lijnen bifurqueren."
          },
          {
            type: "p",
            text: "De Analoge Blokkade (nabije toekomst): Bureaucratie\u00ebn vallen terug op fysieke frictie wanneer digitaal vertrouwen wegvalt. Verwacht een periode van 36 tot 60 maanden waarin rechtbanken en regelgevers op de Epistemische Vloed zullen reageren met twee concrete mechanismen: natte-handtekening-notarisatie van AI-ondersteunde documenten, en financi\u00eble inzet \u2014 een borg die de indiener plaatst en die verbeurd wordt verklaard wanneer een geautomatiseerd auditsysteem hallucinaties vaststelt. Beide mechanismen herintroduceren de menselijke calorische kost die adversariaal volume vroeger afremde."
          },
          {
            type: "p",
            text: "Institutionele realiteit: Binnen formele instellingen zal de samenleving overstappen op cryptografische keten van bewaring. Het overgangsmechanisme is door API's afgedwongen bevraging, waarbij AI-systemen strikt worden beperkt tot het lezen uit gecertificeerde, gesloten institutionele databanken zoals Jura, Stradalex of Kluwer Navigator \u2014 in plaats van uit het open web. Het langere-termijnmechanisme is de Zero-Knowledge Proof. De focus zal niet langer liggen op of de tekst waar klinkt, maar op of de digitale herkomst bewijst dat hij werd gegenereerd door een gecertificeerde menselijke sensor of een geautoriseerd model. Waarheid wordt een functie van cryptografie, niet van proza."
          },
          {
            type: "p",
            className: "mb-12",
            text: "Alledaagse sociale realiteit: De bredere sociale laag zal geen ZKP's aannemen. Zij kan dat niet. In plaats daarvan zal de samenleving terugvallen op een nieuwe basisheuristiek: alle ongeverifieerde digitale media worden verondersteld synthetisch te zijn tot het tegendeel is bewezen. De psychologische tol van deze verschuiving is moeilijk te overschatten. Een hele generatie zal haar intu\u00eftie trainen om te negeren wat haar ogen en oren verwerken, en in plaats daarvan te zoeken naar het institutionele watermerk. Zien zal niet langer geloven zijn. De afwezigheid van een geverifieerde bron zal het signaal zijn."
          },
          {
            type: "h3",
            id: "apprenticeship-problem",
            text: "Afdeling III \u2014 De crisis in de vakkennisoverdracht"
          },
          {
            type: "p",
            text: "Als syntax een handelswaar is en verificatie het beroep, wat gebeurt er dan met de mensen die het werkelijke werk moeten verrichten?"
          },
          {
            type: "p",
            text: "De senior laag van engineers en managers die hun sporen verdienden tijdens de hausse van 2010\u20132022 bezit op dit ogenblik de structurele intu\u00eftie om complexe AI-systemen te besturen. Zij weten hoe systemen breken omdat zij een decennium lang zelf systemen handmatig hebben gebroken. Zoals de Harvard-data uit Akte I tonen, noemen de auteurs deze dynamiek 'ancienniteitsgestuurde technologische verandering' \u2014 de waarde van geaccumuleerd oordeel stijgt precies op het moment dat het instapwerk dat dit oordeel vroeger opbouwde, wordt geautomatiseerd. De mensen die AI-output kunnen verifi\u00ebren, zijn degenen die het vroeger met de hand moesten produceren."
          },
          {
            type: "p",
            text: "De cohorte die vandaag de arbeidsmarkt betreedt, zal die opleiding niet vanzelfsprekend meekrijgen. Hun professionele bestaan begint als orkestrators van AI-systemen \u2014 zij verrichten de rommelige vertaling tussen rigide agents en chaotische verouderde infrastructuur, en vangen fouten op in plaats van werk van nul op te bouwen. Of dit hetzelfde soort expertise opbouwt is een open vraag, en vrijwel zeker domeinspecifiek. Sommige vormen van oordeel kunnen zich sneller vormen wanneer een leerling in een week duizend experimenten kan uitvoeren. Andere vereisen misschien de frictie van uitvoering om zich \u00fcberhaupt te vormen. Een financieel analist die nooit zelf een model heeft gebouwd, mist misschien het structurele instinct voor wanneer er iets niet klopt. Een schrijver die nooit zelf een tekst heeft geredigeerd, mist misschien het gevoel voor wanneer een zin dragend is. Of misschien niet. Wij weten het werkelijk nog niet."
          },
          {
            type: "p",
            text: "Wat wij wel weten is dat de organisaties die dit als een opgelost probleem behandelen, een gok aangaan, geen beslissing nemen. De organisaties die het als een open vraag behandelen, ontwerpen doelbewust: zij brengen de frictie van uitvoering domein voor domein terug in een leerling-meester-structuur, om te achterhalen welke vormen van expertise de kortere weg overleven en welke niet. De brief noemt deze domeinen <em>trainingsenclaves</em> \u2014 plekken waar de frictie van uitvoering doelbewust wordt bewaard, omdat bepaalde vormen van expertise op geen enkele andere manier kunnen worden verworven. Zij wedden dat sommige vormen van meesterschap nog steeds handmatig verdiend moeten worden, en zij zijn bereid te investeren in dit hernieuwde leerlingschap om te ontdekken welke dat zijn. Dit zijn de organisaties die de Meta-Verificateurs van de jaren 2030 zullen voortbrengen, seniors wier taak niet langer zal zijn om de output handmatig te lezen, maar om de structurele intu\u00eftie te bezitten die vereist is om de systemen te ontwerpen die het voor hen lezen."
          },
          {
            type: "p",
            text: "Er ligt hier een co\u00f6rdinatieprobleem dat dit essay niet pretendeert op te lossen. Elke afzonderlijke onderneming die een junior pijplijn onderhoudt, draagt de volledige opleidingskost terwijl concurrenten meeliften op de talentpool die zij voortbrengt. Dit is de schoolvoorbeeld-structuur van een publiek goed \u2014 privaat kostelijk, maatschappelijk waardevol, structureel ondergeleverd. Sommige ondernemingen zullen trainingsenclaves financieren uit langetermijnbelang, of omdat zij voldoende van het opgeleide talent kunnen vasthouden om de rekensom te laten kloppen. De meeste niet. Dat betekent dat het probleem zal worden opgelost door een klein aantal structureel bevoordeelde actoren \u2014 grote gevestigde spelers, gereguleerde sectoren met verplichte opleidingsvereisten, door de overheid gefinancierde pijplijnen \u2014 of het wordt niet opgelost op de schaal die de technologie vereist. De eerlijke versie van deze voorspelling is niet dat slimme organisaties trainingsenclaves zullen bouwen. Het is dat de organisaties die de externaliteit kunnen absorberen dat zullen doen, en dat de rest van de economie in de jaren 2030 een senior-talentcrisis tegemoet gaat die niemand de prikkel heeft om te voorkomen."
          },
          {
            type: "h3",
            text: "Waar de hefboom zit"
          },
          {
            type: "p",
            text: "Als verificatie is waar het werk naartoe gaat en vakkennisoverdracht is waar het talent zich vormt, is de volgende vraag waar de hefboom en het kapitaal werkelijk neerslaan. Twee krachten opereren op verschillende lagen van de stack, en beide zijn re\u00ebel. Concentratie opereert op de integratielaag \u2014 wat de Strategic Brief de <em>Action Moat</em> noemt, de verdedigbaarheid die toekomt aan wie de conformiteitsgekeurde integratie met enterprise-systemen veiligstelt, niet aan wie het beste model bouwt. Decentralisatie opereert op de capaciteitslaag, waar open-weight-modellen de frontier binnen bereik houden van ieder die erin slaagt eromheen te engineeren. Het structurele antwoord op concentratie is niet in de eerste plaats een overheidsreactie; het is architecturaal, en het loopt op de capaciteitslaag."
          },
          {
            type: "p",
            text: "Het open-source-AI-ecosysteem loopt op elk gegeven moment ongeveer twee tot drie maanden achter op de frontier-modellen. In een wereld waarin AI-capaciteit de menselijke prestatie in de meeste domeinen nadert, wordt een vertraging van twee maanden academisch. Het hefboompunt verschuift volledig naar wie de beste systemen rond de capaciteit heeft gebouwd."
          },
          {
            type: "p",
            text: "De geschiedenis van het internet is hier leerzaam. Er waren op elk niveau krachtige economische krachten richting centralisatie. Wat volledige centralisatie voorkwam was niet louter altru\u00efsme of regelgeving. Het was dat open protocollen en gedistribueerde infrastructuur te veel waarde cre\u00eberden voor te veel actoren opdat \u00e9\u00e9n enkele partij het geheel zou kunnen inpalmen. De ontwikkelaars die bouwden op open standaarden beschikten over meer gecombineerde creatieve capaciteit dan enige individuele onderneming."
          },
          {
            type: "p",
            text: "Het MCP-ecosysteem dat de Strategic Brief documenteert, is een vroege versie van deze dynamiek die zich ontrolt in AI-integratie. Ontwikkelaars die bouwen op open standaarden beheersen hun eigen lot, terwijl zij die bouwen op gesloten platformen blijvend onderworpen zijn aan de prijsbeslissingen, de beleidswijzigingen en het voortbestaan van dat platform. De les van elke eerdere platformcyclus ligt voor iedere ontwikkelaar beschikbaar die haar wil leren."
          },
          {
            type: "h3",
            text: "Het kruispunt"
          },
          {
            type: "p",
            text: "De samendrukking van cognitief en fysiek werk is geen einde; het is een herijking. Zij opent het grootste bouwvenster van het volgende decennium, en het werk dat voor ons ligt is concreet genoeg om bij naam te noemen."
          },
          {
            type: "p",
            text: "Junior aanwervingen zijn kapitaaluitgave voor het senior oordeel dat in 2035 zal bestaan. Trainingsenclaves zijn hoe de Meta-Verificateurs van de jaren 2030 worden gevormd. De Action Moat is waar kapitaal naartoe moet. Samen is dit waar de verificatielaag wordt gebouwd."
          },
          {
            type: "p",
            text: "Wanneer de kostprijs van creatie inzakt tot de prijs van compute, wordt het vermogen tot verificeren de ware grens van schaal. Dat is geen waarschuwing. Het is een kaart. Leid de juniors op. Bouw de enclaves. Bouw de Action Moats. De bouwers van het volgende decennium zijn al in beweging."
          },
        ]
      }
    ],
    footer: {
      author: "Door Arthur Devresse & Claude Sonnet 4.6 \u00b7 April 2026",
      license: "Gepubliceerd onder Creative Commons.",
      tagline: "Na de Vloed"
    }
  }
};
