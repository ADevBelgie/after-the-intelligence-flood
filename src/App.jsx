import React from 'react';
import { Cpu, ArrowLeft } from 'lucide-react';
import ReadingProgressBar from './components/ReadingProgressBar';
import LanguageSelector from './components/LanguageSelector';
import ActNavigation from './components/ActNavigation';
import ActNavigationMobile from './components/ActNavigationMobile';
import PullQuote from './components/PullQuote';
import ActDivider from './components/ActDivider';
import ShareRow from './components/ShareRow';
import DiscoveryCallout from './components/DiscoveryCallout';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <ReadingProgressBar />
      
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 w-full h-16 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md z-[90] flex items-center px-4 md:px-8 justify-between">
        <a 
          href="https://ai-strategic-report-april-2026.vercel.app" 
          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-400 transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline tracking-widest uppercase">Strategic Report</span>
        </a>
        
        <div className="flex items-center gap-6">
          <LanguageSelector />
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="pt-32 pb-24">
        {/* Desktop Sidebar Navigation */}
        <ActNavigation />

        <main className="prose-container">
          {/* TITLE SECTION */}
          <section className="mb-24 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 uppercase leading-[1.1]">
              After the <br />
              <span className="text-indigo-500 font-extrabold">Intelligence Flood</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-12 italic tracking-tight">
              A Speculative Essay on Where This Goes Next
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-slate-500 font-medium mb-12">
              <div className="flex items-center gap-2">
                <span>By Arthur Devresse & Claude Sonnet 4.6</span>
                <span className="text-slate-700">•</span>
                <span>April 2026</span>
              </div>
              <div className="hidden md:block text-slate-700">•</div>
              <div className="flex items-center gap-2">
                <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-400 uppercase tracking-widest font-bold">~20 min read</span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 text-slate-400 text-sm md:text-base italic leading-relaxed shadow-xl shadow-slate-950/50 mb-12">
              "This piece is not a data report. It is an argument about where AI takes the economy, institutions, and societies over the next decade. References to data come from the April 2026 Strategic Brief. Where this piece speculates, it says so. Opinions are our own."
            </div>

            <DiscoveryCallout />

          </section>

          {/* ACT I */}
          <article id="act1" className="mb-32">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">Act I — The Two Squeezes</h2>
            
            <p className="mb-8 font-medium text-slate-100 italic md:text-xl">How the Barbell Economy Forms, Peaks, and Gets Compressed from Both Sides</p>
            
            <div className="w-16 h-px bg-slate-800 mb-12" />

            <p className="mb-6">
              There is a moment in every major economic transition where the people living through it can see what's coming but cannot quite believe the scale of it. Factory workers in 1910 could see the automobile assembly line. Typographers in 1980 could see the desktop computer. They were not wrong to adapt. They were wrong about how fast and how completely the adaptation would need to happen.
            </p>
            
            <p className="mb-12">
              We are in that moment now. Unlike previous transitions, we have reasonably good data on the shape of what's coming — not because we can predict the future, but because the early numbers are already in.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Movement I — The Barbell Forms</h3>
            
            <p className="mb-6">
              The term "Barbell Economy" entered the conversation as a prediction. It has since become a description.
            </p>

            <p className="mb-6">
              Picture a barbell: heavy weight on both ends, nothing in the middle. On one end, AI capability handles more and more of what used to be entry-level cognitive work — drafting, coding, research, analysis, data processing. Those roles are being automated or dramatically reduced. On the other end, the senior roles responsible for judgment, oversight, and accountability become more valuable precisely because that judgment is now the scarce resource. The middle — the large population of knowledge workers who were neither directing the work nor doing the most routine parts of it — is where the pressure concentrates first. The 2026 data has sharpened this picture — the bottom weight is not stable, it is also contracting. Entry-level collapse arrived before mid-level squeeze. Junior developer postings are down 67% since 2022. The shape is asymmetric, not a true barbell. They are being squeezed out from below by AI, not replaced by it from above. In practice, the middle is project managers, business analysts, generalist coordinators — people whose core value was synthesising information, managing routine complexity, or executing well-defined tasks. Those are exactly the things AI is getting good at, fast. It is not that these people lack skill. It is that the specific skills they built their careers around are precisely the ones the capability curve is climbing fastest.
            </p>

            <p className="mb-6">
              The data from the Strategic Brief makes this concrete. Junior hiring's share of IT roles has fallen from 15% to 7% in three years. Entry-level developer job postings are down 67% since 2022. Senior AI-role salaries are up 40%. Salesforce announced zero new engineering hires for 2025. These are not rounding errors. They are structural signals arriving simultaneously across companies and sectors.
            </p>

            <p className="mb-12">
              But the Barbell is not simply a story about job losses. It is a story about a fundamental repricing of what human cognitive labor is worth, and to whom.
            </p>

            <p className="mb-6">
              The Klarna case is the most instructive single data point in the current landscape, not because it proves AI replacement fails, but because it reveals the grain of the wood. Klarna replaced most of its customer service team with AI, celebrated the savings publicly, and within under two years was scrambling to rehire as customer satisfaction collapsed. The lesson is not that AI cannot do customer service. In many measurable ways it can. The lesson is that the domains where human judgment is hardest to replace are precisely the domains where trust, context, and institutional memory are the product, not the response time or the cost per ticket.
            </p>

            <p className="mb-12">
              The companies executing the Barbell well are not the ones replacing humans wholesale. They are the ones identifying which parts of their workflow are genuinely routine and automating those aggressively, while retaining and elevating the people capable of doing what AI currently cannot: catching the errors that look right, making the calls that require accountability, and building the relationships that require trust.
            </p>

            <p className="mb-12">
              That distinction matters because the Barbell in its current form is not the end state. It is the first movement of a longer story.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Movement II — The Cognitive Squeeze</h3>

            <p className="mb-6 font-medium text-slate-300">
              Here is the part of the conversation that most strategic forecasts stop short of.
            </p>

            <p className="mb-6">
              The Barbell as described above assumes a relatively stable ceiling on AI capability — that today's senior roles are secure because they require the kind of judgment AI cannot yet replicate. That assumption has a half-life. And we know roughly how long that half-life is, because the benchmark data tells us.
            </p>

            <p className="mb-6">
              The Strategic Brief documents an approximately eight-month cycle in which AI capability tests get mastered, retired, and replaced with harder ones. ARC-AGI-1 essentially solved. ARC-AGI-2 approaching saturation within twelve months of launch. ARC-AGI-3 launched March 2026 with frontier AI models scoring under 1%, and the prediction based on the same pattern is 30 to 50% scores by end of 2026 via reinforcement learning approaches. The measuring sticks keep breaking because the underlying capability keeps moving.
            </p>

            <p className="mb-6">
              What this means for the Barbell is not immediately obvious, but it is important. The senior roles that are currently valuable — the engineers who architect the systems, the analysts who synthesise the data, the managers who direct the AI agents — are valuable because they sit above the current capability ceiling. They provide the judgment the AI cannot yet provide. But that ceiling is not fixed. Crucially, the ceiling is no longer rising because the base models are getting inherently smarter — it is rising because the architectures around them (reinforcement learning, multi-agent orchestration, self-reflective RAG) are maturing.
            </p>

            <PullQuote quote="The human judgment premium is real. It is also temporary in its current form." />

            <p className="mb-6">
              The honest projection is not that senior roles disappear. It is that the nature of senior value shifts faster than most organisations, or most individuals, are currently planning for. The human judgment premium is real, but its nature is shifting. It does not evaporate; it moves from providing the answers to designing the systems that find the answers.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Movement III — The Physical Squeeze, and the Window Between</h3>

            <p className="mb-6">
              Cognitive AI does not just automate software jobs. It accelerates every field that was previously bottlenecked by human cognitive labor, crucially including robotics and physical control systems. With the maturation of simulation environments like NVIDIA Omniverse, the &ldquo;Physical Data Wall&rdquo; has largely fallen. We can now train robotic foundation models in physics-accurate simulations, generating lifetimes of edge-case data in a weekend.
            </p>

            <p className="mb-6">
              So why is the physical squeeze still delayed? The barrier is no longer cognitive; it is manufacturing and maintenance.
            </p>

            <p className="mb-6">
              Software scales at the speed of compute. If an AI agent works, you can deploy a million instances by tomorrow morning. Hardware scales at the speed of supply chains. Even with a perfect robotic brain, manufacturing millions of actuators, chassis, and batteries requires capital-intensive, analog factory scaling. You cannot copy-paste a physical machine.
            </p>

            <p className="mb-6">
              Furthermore, while organizations will accept physical failure because the labor savings are too massive to ignore, the physical repair loop remains a hard constraint. A software hallucination can be patched globally over-the-air in seconds. When a robot hallucinates and shatters a physical sensor against a wall, patching the software does not fix the hardware. It requires a human technician, a replacement part, and physical downtime.
            </p>

            <p className="mb-12">
              Consequently, the physical squeeze will not arrive everywhere at once. It will be governed by the actuarial boundary. Robots are being deployed right now in warehouses, logistics hubs, and industrial zones—not because they are incapable of navigating a public sidewalk, but because the insurance liability of physical edge-cases in unstructured human environments dictates a phased rollout. The physical squeeze is coming, but it moves at the speed of physical supply chains, not digital networks.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Dual-Compression Event</h3>
            
            <p className="mb-6">
              We are not facing a sequential timeline where displaced knowledge workers can safely retreat to physical coordination. We are facing a dual-compression event. The cognitive squeeze is happening now; the physical squeeze will trail it, delayed by the literal laws of thermodynamics and the sim-to-real entropy gap.
            </p>
            
            <p className="mb-6">
              But this creates a dangerous macroeconomic trap: the <strong>False Refuge</strong>. As cognitive tasks automate, the natural labor market reaction is a massive flight to physical, dextrous work. But the very same models displacing knowledge workers are accelerating materials science and physical control systems. The "window between" is not a safe harbor for a 30-year career pivot; it is a temporary, highly compressed trap.
            </p>

            <p className="mb-6">
              Survival requires moving to the governance, orchestration, and verification layers of both digital and physical systems concurrently. The people who position around orchestration and system design rather than execution are already pulling ahead.
            </p>

            <p className="mb-6">
              For organisations: the Klarna pattern predicts that companies rushing to full replacement in this phase will face a correction. The companies that use this time to genuinely understand which parts of their operations require human judgment, and invest in elevating those people rather than replacing them, will have a structural talent advantage when the dual-compression peaks and the scramble begins.
            </p>

            <p className="mb-6 font-medium text-indigo-400">
              For governments: this is where the story gets most complicated, and where the decisions have the longest tails. That is Act II's territory.
            </p>
          </article>
        </main>

        <ActDivider act="ACT II" title="The Reliability Reckoning" id="act2" />

        <main className="prose-container">
          <article id="act2-interior" className="my-12">
            <p className="mb-8 font-medium text-slate-100 md:text-xl italic">How Societies Learn to Live With Systems That Fail in New Ways</p>

            <p className="mb-6">
              There is a dangerous intersection near where I grew up. For years it claimed accidents with depressing regularity. The local council debated it, residents complained, and nothing changed until a particularly bad accident forced the issue. Within six months there was a traffic light. The accidents stopped. Nobody had needed to fully solve the problem of human error behind the wheel before allowing cars on that road. They needed enough failures, in a visible enough place, to force a specific institutional response.
            </p>

            <p className="mb-12">
              This is how complex systems actually get made safe. Not through anticipation. Through contact with reality, failure, and the response that failure demands.
            </p>

            <p className="mb-6">
              The history of every technology we now consider safe and unremarkable follows this pattern. Aviation, pharmaceuticals, financial systems, nuclear power, food safety. The frameworks that govern them were not written in advance by wise regulators who foresaw all the failure modes. They were written in response to crashes, drug disasters, market collapses, meltdowns, and outbreaks. The regulation is almost always a consequence of the failure, not a prevention of it.
            </p>

            <PullQuote quote="You cannot write the rules for something nobody has yet broken at scale." />

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Shape of Coming Failures</h3>

            <p className="mb-6">
              The Strategic Brief documents where reliability currently stands. Without proper system design, AI confidently produces wrong answers more than 10% of the time on standard tasks. Legal AI fails at rates of 69 to 88% on specific legal queries without mitigation. Medical AI, without the right architecture, hallucinates at rates that would be immediately disqualifying if applied to a human doctor.
            </p>

            <p className="mb-6">
              With well-engineered systems, those numbers fall dramatically. Multi-agent verification brings enterprise error rates below 2%. Self-reflective architectures get clinical hallucination down to under 6%. The reliability problem is largely a systems engineering problem, not a fundamental AI limitation. That is the optimistic read, and the data supports it for structured, bounded tasks in controlled environments.
            </p>

            <p className="mb-6">
              The part that remains genuinely uncertain is what happens as these systems move into territory that is neither structured nor bounded. Real hospitals. Real courts. Real infrastructure. The history of complex engineering suggests that every time you add a verification layer to an automated system, you create new failure modes at the interfaces between layers that are often harder to detect than the original problem.
            </p>

            <p className="mb-12">
              Nobody should be surprised when this happens with AI systems at scale. The productive response is to build institutions that can catch and contain those failures fast, not to prevent deployment until perfection is guaranteed. Perfection is not available. The dangerous intersection does not wait for a perfect traffic management system before generating accidents.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Three Experiments Running Simultaneously</h3>

            <p className="mb-6">
              The most interesting feature of the current global moment is that three fundamentally different approaches to this problem are being tested in parallel, in real economies, on real populations, in real time. China, the European Union, and the United States are running what amounts to a multi-decade natural experiment in how to govern transformative technology. The results will not be fully visible for years, but the early evidence is already instructive.
            </p>

            <p className="mb-6">
              China has essentially chosen deployment first. Autonomous vehicles operate at scale in multiple major cities. Roughly ten million autonomous vehicle tests have been logged on public roads in real conditions, generating data that no simulation can replicate. The safety record is better than human driving in the specific contexts where these systems are deployed. Not perfect. Better. The iteration cycle is fast because the feedback loop is real. When something goes wrong, the system learns. When something goes right, it gets expanded. The political system tolerates a different level of visible failure than democratic systems tend to, which creates both advantages and risks. The advantage is speed. The risk is that failures which should force policy revision can be absorbed and suppressed rather than corrected.
            </p>

            <p className="mb-6">
              The European Union has chosen framework first. The EU AI Act is an ambitious attempt to create comprehensive governance before widespread deployment rather than after. The intention is genuinely admirable. The practical effect, in the short term, is that European companies are optimising their engineering cycles for legal conformity rather than operational boundary-testing. They are building systems to pass audits, while competitors build systems to survive contact with reality.
            </p>

            <p className="mb-6">
              But the more important critique is not that it slows innovation; it is one of <strong>regulatory permeability</strong>. The EU AI Act can regulate compliant enterprises. It cannot repeal the existence of open-weight models. European society will still experience the dangerous intersection failures—via open-source deployments, shadow IT, and foreign-hosted services—but European companies will lack the commercial flexibility to have built comparable systems themselves. They absorb the full societal risk of the disruption without the economic upside of having shaped it.
            </p>

            <p className="mb-6">
              The US framework is essentially a leaky private risk market. The catastrophic enterprise failures are buried under Non-Disclosure Agreements. The real safety rules are not being written by Congress; they are being written quietly by enterprise insurance actuaries refusing to underwrite unverified AI architectures. The public only sees the failures that break through the NDA ceiling. But when they do break through, the adversarial legal process forces public record and institutional pressure for correction. This is the dangerous intersection mechanism operating in real time, at an accelerating rate.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Why the EU Approach Carries a Risk Most People Are Not Discussing</h3>

            <p className="mb-6">
              The standard critique of the EU approach is that it slows innovation and creates competitive disadvantage. That is true but it is not the most important critique.
            </p>

            <p className="mb-6">
              The more important critique is epistemic. Regulatory frameworks derive their quality from understanding the thing they regulate. That understanding comes primarily from observing how systems behave in the real world, at scale, under conditions that designers did not anticipate. The EU is attempting to write comprehensive rules for AI systems before those systems have generated the volume of real-world failure data that would make those rules well-calibrated.
            </p>

            <p className="mb-6">
              The result is not necessarily that the rules will be too restrictive or too permissive, though both risks exist. The deeper result is that the rules will be calibrated to the wrong things. They will address the failure modes that were imaginable in advance rather than the failure modes that actually manifest at scale. When the real failures arrive, the framework will need to be substantially revised. The revision process in the EU is slow. The gap between the failures and the corrected framework could be a decade.
            </p>

            <p className="mb-6">
              China's approach has a different risk profile. Deployment at scale generates the right data, but the political system's relationship with that data is complicated. Failures that should force policy revision can be managed rather than corrected. The iteration cycle is fast when failure is acknowledged and acted upon. It stalls when failure becomes politically inconvenient.
            </p>

            <p className="mb-12">
              None of these three experiments is running the optimal approach. The optimal approach probably borrows from all three: China's willingness to deploy at scale and learn from real failures, the EU's insistence on explicit rights protection and accountability frameworks, and the US adversarial process that forces failures into public record. No existing political system is configured to combine these things cleanly, which means the next decade will involve watching all three approaches generate both successes and failures that the others could have avoided.
            </p>

            <p className="mb-12">
              The US approach, for all its messiness, retains one structural backstop: when catastrophic failures breach the NDA firewall—either because a plaintiff refuses to settle or the harm is too public to hide—the adversarial legal process forces them into the open. When an AI system produces a wrong output that reaches open court, the resulting litigation creates public record, legal precedent, and institutional pressure for correction.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Tail Risk Exception</h3>

            <p className="mb-6">
              The deployment-first approach is necessary for recoverable failures—software bugs, localized hallucinations, and autonomous driving edge-cases. The dangerous intersection needs traffic. However, this model structurally fails for terminal tail risks, such as malicious actors using open-weight models to engineer pathogens. Against tail risk, the EU&apos;s compliance-based framework is equally useless; paperwork in Brussels does not stop a bad actor running an open-weight model on a private server. The only rational defense against terminal tail risk is hardened, active infrastructure: AI-enabled bio-surveillance, mandatory DNA synthesis screening, and strict API-gating of frontier capabilities.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Decentralisation Argument</h3>

            <p className="mb-6">
              There is a structural response to the concentration risks that the current AI landscape generates, and it is not primarily a government response. It is an architectural one.
            </p>

            <p className="mb-6">
              The open-source AI ecosystem is running roughly two to three months behind the frontier models at any given time. In a world where AI capability approaches human performance across most domains, a two-month lag becomes academic. The leverage point shifts entirely to who has the best systems built around the capability.
            </p>
            
            <p className="mb-6">
              The history of the internet is instructive here. There were powerful economic forces toward centralisation at every stage. What prevented total centralisation was not altruism or regulation alone. It was that open protocols and distributed infrastructure created too much value for too many actors for any single party to capture the whole thing. The developers who built on open standards had more combined creative capacity than any single company.
            </p>
            
            <p className="mb-12">
              The MCP ecosystem that the Strategic Brief documents is an early version of this dynamic playing out in AI integration. Developers who build on open standards control their own destiny, while those who build on closed platforms are permanently subject to the platform's pricing decisions, policy changes, and survival. The lesson of every previous platform cycle is available to every developer who wants to learn it.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">What Governments Actually Need to Get Right</h3>

            <p className="mb-6 font-medium text-slate-100">
              The decisions that will matter are about incentive structures. Not rules about what AI can and cannot do, but structures that determine whether the economic incentives facing companies, researchers, and individuals point toward beneficial outcomes or against them.
            </p>

            <p className="mb-6">
              Three areas where the incentive structures are currently wrong. The liability framework for AI-assisted decisions in high-stakes domains is almost entirely unresolved. When an AI-assisted medical diagnosis is wrong, who carries the liability? The answer to that question determines whether AI providers have any incentive to improve reliability, or whether professionals face such severe liability risk that they avoid AI tools that would genuinely improve their work.
            </p>

            <p className="mb-6">
              <strong>Strategic Compute Reserve:</strong> Applying 50-year infrastructure analogies to GPUs with 36-month depreciation cycles is a financial fallacy, but an entirely justified national security mandate. Governments must treat bare-metal clusters as a Strategic Compute Reserve. Relying entirely on foreign hyperscalers subjects critical national infrastructure to foreign jurisdiction, corporate de-platforming, and geofencing. Governments must own and subsidize compute not because it is financially efficient, but because sovereign independence requires a baseline of intelligence that a foreign boardroom cannot switch off.
            </p>

            <p className="mb-6">
              Third, and most relevant to Act I's territory: the education and transition support systems are calibrated for a labor market that no longer exists. Retraining programs built around a two-year model are not matched to a capability environment that changes on eight-month benchmark cycles. The brief period before these two squeezes fully converge is the most valuable time for building the transition infrastructure that will be needed when physical automation arrives at scale. Most governments are not using it.
            </p>
          </article>
        </main>

        <ActDivider act="ACT III" title="The Epistemic Floor" id="act3" />

        <main className="prose-container">
          <article id="act3-interior" className="my-12">
            <p className="mb-8 font-medium text-slate-100 italic md:text-xl">How We Live in the Verification Layer, the Death of Probabilistic Trust, and the Shepherd Generation</p>
            
            <p className="mb-6">
              When an economic transition happens, it does not just change what people do for a living. It changes what society implicitly trusts, what it penalizes, and how it defines human value. The Barbell Economy and the Regulatory Triad are the mechanics of this transition. Act III is about the reality of living inside it.
            </p>

            <h3 id="asymmetry-of-truth" className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Section I — The Asymmetry of Truth</h3>
            
            <p className="mb-6">
              The most profound vulnerability of modern institutions is that they were designed under an implicit law of physics: creating a convincing lie took roughly the same amount of human caloric energy as discovering the truth.
            </p>

            <p className="mb-6">
              Because the cost of production was relatively high, the volume of submissions to courts, scientific journals, and government regulators was naturally throttled by human exhaustion. That was the load-bearing wall of the 20th century.
            </p>

            <p className="mb-6">
              The Intelligence Flood breaks this asymmetry. We are entering an era where generating a 500-page, highly plausible, synthetically cited legal brief costs fractions of a cent, but verifying its accuracy still costs a senior human dollars per minute. When the cost to generate approaches zero, but the cost to verify remains tethered to human time, open systems collapse under the weight of adversarial volume.
            </p>

            <p className="mb-6">
              The structural response to this is the end of free submission.
            </p>

            <p className="mb-6">
              Institutions will be forced to introduce a <strong>"Verification Tax."</strong> In the near future, submitting a legal filing, a scientific paper, or a public comment will require friction by design. This will not look like CAPTCHAs. It will look like API-enforced querying (where AI is strictly confined to read from certified, closed databases) or explicit financial staking—posting a bond that is forfeited if an automated auditing system detects hallucinations in your submission.
            </p>

            <p className="mb-12">
              We are moving from a society that optimized for the friction-less sharing of information to a society that must urgently construct toll roads for truth.
            </p>

            <h3 id="end-of-probabilistic-trust" className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Section II — The End of Probabilistic Trust</h3>
            
            <p className="mb-6">
              Historically, trust was probabilistic. If you saw a video of an event, read a dense technical document, or looked at a photograph, you trusted it because the capital and skill required to fake it at a high level were rare. You trusted the content.
            </p>

            <p className="mb-6">
              By the late 2020s, trusting the content of digital media without verification will be an act of systemic negligence. But this shift will bifurcate along institutional lines.
            </p>

            <p className="mb-6">
              <strong>Institutional Reality (ZKPs):</strong> Within formal institutions—courts, scientific journals, regulated financial systems—society will shift to cryptographic chain-of-custody verification. The "Action Moat" that enterprise software companies are currently building—securing SOC2 compliance, Active Directory permissions, and infosec approvals—becomes the baseline requirement. Zero-Knowledge Proofs (ZKPs) will allow a system to mathematically prove that a piece of data came from a certified human sensor, or that an AI model used only authorized training data, without revealing the underlying data itself. This proves chain-of-custody, not analog truth.
            </p>

            <p className="mb-12">
              <strong>Ambient Social Reality:</strong> The broader social layer will not adopt ZKPs. It cannot. Instead, society will default to a new baseline heuristic: all unverified digital media is assumed to be synthetic until proven otherwise. The psychological toll of this shift is difficult to overstate. An entire generation will train its intuition to ignore what its eyes and ears process and look instead for the institutional watermark. Seeing will no longer be believing. The absence of a verified source will be the signal.
            </p>

            <h3 id="shepherd-generation" className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Section III — The Shepherd Generation</h3>
            
            <p className="mb-6">
              If syntax is a commodity and verification is the career, what happens to the humans who must actually do the work?
            </p>

            <p className="mb-6">
              The "senior bulge" of engineers and managers who cut their teeth during the 2010&ndash;2022 boom currently possess the structural intuition to govern complex AI systems. They know how systems break because they spent a decade breaking them manually.
            </p>

            <p className="mb-6">
              The cohort entering the workforce today faces a radically different pedagogical environment. We are creating the <strong>"Shepherd Generation"</strong>&mdash;a cohort of knowledge workers who will not learn their trade by writing drafts, coding modules, or building financial models from scratch. Their entire professional existence will begin as Human-In-The-Loop (HITL) orchestrators.
            </p>

            <p className="mb-6">
              Their job will be to do the messy translation between rigid AI agents and undocumented, chaotic legacy enterprise systems. They will spend their 20s not learning how to make things, but learning how to catch the errors of an alien intelligence. The cognitive toll of being an orchestrator instead of a creator is unknown. Human mastery has historically been built through the physical and mental repetition of execution. How do you build a master architect if the apprentice never lays a brick?
            </p>

            <p className="mb-6">
              The organizations that survive the 2030s will be the ones that figure out how to deliberately engineer the friction of execution back into the training of their junior staff, treating it as an expensive but necessary apprenticeship to forge the Expert Verifiers of the future.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Intersection</h3>

            <p className="mb-6">
              The Dual-Compression event is not an ending; it is a recalibration. The Barbell Economy is forcing a clear choice: compete with the baseline at your peril, or move to the verification layer.
            </p>

            <p className="mb-6">
              The messy middle is where we land. The dangerous intersection eventually gets a traffic light. But in the Intelligence Flood, those who wait for the traffic light to be installed before they change their route will be underwater.
            </p>

            <p className="mb-12">
              The infrastructure of the future is being built right now, by those who recognize the central economic reality of the next decade: when the cost of creation drops to zero, the value of verification goes to infinity.
            </p>

            <ShareRow 
              url="https://after-the-intelligence-flood.vercel.app" 
              title="After the Intelligence Flood: A Speculative Essay on AI"
            />
          </article>
        </main>
      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-900 bg-slate-950">
        <div className="prose-container text-center">
          <div className="flex items-center justify-center gap-3 mb-8 opacity-50">
            <Cpu className="text-indigo-500" size={24} />
            <div className="h-4 w-px bg-slate-800" />
            <span className="text-xs font-black tracking-[0.3em] uppercase antialiased">
              After the Flood
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
            By Arthur Devresse & Claude Sonnet 4.6 · April 2026<br />
            Published under Creative Commons. 
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600">
            <a href="https://ai-strategic-report-april-2026.vercel.app" className="hover:text-indigo-400 transition-colors">Strategic Report</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Research Paper</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Methodology</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Mobile Navigation */}
      <ActNavigationMobile />
    </div>
  );
};

export default App;
