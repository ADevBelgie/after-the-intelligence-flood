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
              The shape is simple: weight on both ends, hollowed out in the middle. On one end, AI capability handles more and more of what used to be entry-level cognitive work — drafting, coding, research, analysis, data processing. On the other end, the senior roles responsible for judgment, oversight, and accountability become more valuable precisely because that judgment is now the scarce resource. The middle — the large population of knowledge workers who were neither directing the work nor doing the most routine parts of it — is where the pressure concentrates first.
            </p>

            <p className="mb-6">
              The data from the Strategic Brief makes this concrete. Junior hiring's share of IT roles has fallen from 15% to 7% in three years. Entry-level developer job postings are down 67% since 2022. Senior AI-role salaries are up 40%. Salesforce announced zero new engineering hires for 2025. These are not rounding errors. They are structural signals arriving simultaneously across companies and sectors.
            </p>

            <p className="mb-12">
              But the Barbell is not simply a story about job losses. It is a story about a fundamental repricing of what human cognitive labor is worth, and to whom.
            </p>

            <p className="mb-6">
              The Klarna case is the most instructive single data point in the current landscape, not because it proves AI replacement fails, but because it reveals the grain of the wood. Klarna replaced most of its customer service team with AI, celebrated the savings publicly, and within eighteen months was scrambling to rehire as customer satisfaction collapsed. The lesson is not that AI cannot do customer service. In many measurable ways it can. The lesson is that the domains where human judgment is hardest to replace are precisely the domains where trust, context, and institutional memory are the product, not the response time or the cost per ticket.
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
              What this means for the Barbell is not immediately obvious, but it is important. The senior roles that are currently valuable — the engineers who architect the systems, the analysts who synthesise the data, the managers who direct the AI agents — are valuable because they sit above the current capability ceiling. They provide the judgment the AI cannot yet provide. But that ceiling is not fixed. It rises on roughly an eight-month cycle, possibly faster.
            </p>

            <PullQuote quote="The human judgment premium is real. It is also temporary in its current form." />

            <p className="mb-6">
              The honest projection is not that senior roles disappear. It is that the nature of senior value shifts faster than most organisations, or most individuals, are currently planning for. The person whose value in 2025 came from knowing how to architect a reliable AI system will need to be operating at a different level of abstraction by 2029. What that level looks like is genuinely open, and the people thinking about it seriously are still a small minority.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Movement III — The Physical Squeeze</h3>

            <p className="mb-6">
              The cognitive squeeze has a counterpart that moves on a different timescale.
            </p>

            <p className="mb-6">
              Physical work has historically been the refuge when cognitive labor gets automated. The standard historical pattern is that machines replace physical routine first, then cognitive routine, with human judgment and physical dexterity at the frontier. AI has inverted the middle of that sequence: cognitive routine is being automated aggressively while complex physical tasks remain largely human. A robot that can write production-quality code cannot reliably fold a hotel towel in an unfamiliar room.
            </p>

            <p className="mb-12">
              That assumption now needs to be revisited.
            </p>

            <p className="mb-6">
              Cognitive AI does not just automate software jobs. It accelerates every field that was previously bottlenecked by human cognitive labor. Drug discovery. Materials science. Chip design. And crucially, robot locomotion research, physical control systems, the engineering of manipulation and dexterity. The same capability curve that is compressing cognitive work is being applied to the research problems that have kept physical automation stuck.
            </p>
            
            <p className="mb-12 font-medium text-slate-100">
              The window of physical work protection is real but possibly shorter than the standard forecast assumes.
            </p>

            <p className="mb-6">
              The estimate of 2027 to 2033 as a period where cognitive work is heavily automated but physical work remains relatively protected is the base case. But if cognitive AI genuinely reaches and exceeds human-level research capability in the next few years, that window compresses. The physical squeeze that looked like a 2033 story could arrive as a 2030 story, not everywhere simultaneously, but in the specific physical domains where the engineering problems are most tractable.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Window, and What It Determines</h3>

            <p className="mb-6">
              The period between the cognitive squeeze and the physical squeeze is the most consequential policy and career decision window of the coming decade. It is the period in which societies have the most options, because the scale of disruption is visible but not yet total.
            </p>
            
            <p className="mb-6">
              For individuals: the decisions made in this window about what skills to build, what roles to target, and what kind of value to position around will compound in ways that are very hard to reverse later. The people who understood the Barbell early and positioned around orchestration and system design rather than execution are already pulling ahead.
            </p>

            <p className="mb-6">
              For organisations: the Klarna pattern predicts that companies rushing to full replacement in this window will face a correction. The companies that use this window to genuinely understand which parts of their operations require human judgment, and invest in elevating those people rather than replacing them, will have a structural talent advantage when the window closes and the scramble begins.
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

            <p className="mb-6 font-medium text-slate-300">
              The reliability problem is largely a systems engineering problem, not a fundamental AI limitation. That is the optimistic read, and the data supports it for structured, bounded tasks in controlled environments.
            </p>

            <p className="mb-12">
              The part that remains genuinely uncertain is what happens as these systems move into territory that is neither structured nor bounded. Real hospitals. Real courts. Real infrastructure. The history of complex engineering suggests that every time you add a verification layer to an automated system, you create new failure modes at the interfaces between layers that are often harder to detect than the original problem.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Three Experiments Running Simultaneously</h3>

            <p className="mb-6">
              The most interesting feature of the current global moment is that three fundamentally different approaches to this problem are being tested in parallel, in real economies, on real populations, in real time. China, the European Union, and the United States are running what amounts to a multi-decade natural experiment.
            </p>

            <p className="mb-6">
              China has essentially chosen deployment first. Autonomous vehicles operate at scale in multiple major cities. The iteration cycle is fast because the feedback loop is real. When something goes wrong, the system learns. The political system tolerates a different level of visible failure than democratic systems tend to, which creates both advantages and risks.
            </p>

            <p className="mb-6">
              The European Union has chosen framework first. The EU AI Act is an ambitious attempt to create comprehensive governance before widespread deployment. The intentional is genuinely admirable, but the practical effect is that European companies are generating almost none of the real-world failure data that makes systems actually safer. By the time the framework is complete, the gap in real-world learning will be significant.
            </p>

            <p className="mb-6">
              The United States sits uncomfortably between these positions. Deployment has proceeded faster than in Europe, and the legal system is generating its own empirical record. The Strategic Brief documents this: AI-related court sanctions went from two cases a week to two to three cases per day by late 2025. This is the dangerous intersection mechanism operating in real time.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Decentralisation Argument</h3>

            <p className="mb-6">
              There is a structural response to the concentration risks that the current AI landscape generates, and it is not primarily a government response. It is an architectural one.
            </p>

            <p className="mb-6">
              The open-source AI ecosystem is running roughly two to three months behind the frontier models at any given time. In a world where AI capability approaches human performance across most domains, a two-month lag becomes academic. The leverage point shifts entirely to who has the best systems built around the capability.
            </p>
            
            <p className="mb-12">
              The history of the internet is instructive here. What prevented total centralisation was not altruism, but open protocols that created too much value for too many actors for any single party to capture. It is not idealism. It is economic interest.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">What Governments Actually Need to Get Right</h3>

            <p className="mb-6 font-medium text-slate-100">
              The decisions that will matter are about incentive structures. Not rules about what AI can and cannot do, but structures that determine beneficial outcomes.
            </p>

            <p className="mb-6">
              Three areas where the incentive structures are currently wrong: liability frameworks for AI-assisted decisions, public compute infrastructure, and education systems calibrated for a labor market that no longer exists. Programs built around a two-year model are not matched to a capability environment that changes on eight-month cycles.
            </p>
          </article>
        </main>

        <ActDivider act="ACT III" title="The Concentration Question" id="act3" />

        <main className="prose-container">
          <article id="act3-interior" className="my-12">
            <p className="mb-8 font-medium text-slate-100 md:text-xl italic">Why Open Networks Win, Where They Don't, and What the Next Five Years Determine</p>
            
            <p className="mb-6">
              In 1999, Microsoft controlled the personal computing stack so completely that the DOJ brought an antitrust case. By the time it resolved, the web had grown around Microsoft, not through it. Open protocols turned out to be more valuable than the closed platform.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Where Concentration Is Real</h3>

            <p className="mb-6">
              The frontier model layer is genuinely concentrated and likely to remain so. Training requires capital that only a small number of entities can deploy. NVIDIA's position is the result of a decade of ecosystem investment. This matters because a small group of non-elected organisations are making decisions about what these systems optimise for.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">The Energy Constraint</h3>

            <p className="mb-6">
              There is a concentration risk receiving far less attention: Energy infrastructure. Training frontier models requires extraordinary power. Data centres are straining grids globally. Governments have regulated electricity as a public utility for over a century; whether compute infrastructure deserves similar treatment is a practical policy question for the next decade.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Where Concentration Fails to Hold</h3>

            <p className="mb-6">
              Below the frontier, the concentration argument weakens. The integration layer — "Action Moats" — is where the real competition plays out. Integration value is local; the best AI for a Belgian logistics company isn't the same as for a Tokyo hospital. No single global platform can fully replicate that.
            </p>

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">What Gets Decided in the Next Five Years</h3>

            <p className="mb-6 italic text-slate-400">
              The talent pipeline question may be the least discussed and most consequential thing the next five years determine.
            </p>

            <p className="mb-6">
              Educational institutions move slowly. A student who starts a computer science degree in 2026 will graduate into a market that looks nothing like the one their professors trained for.
            </p>

            <PullQuote quote="The flood has arrived. What comes after it is still being decided." />

            <h3 className="text-2xl font-bold text-white mb-6 mt-16 tracking-tight">Where This Leaves Us</h3>

            <p className="mb-6">
              The Barbell squeeze is real. The physical world protection is shorter than forecasted. Institutional failures will spread before the response infrastructure catches up. Concentration risks are genuine but the open integration layer has structural defenders.
            </p>

            <p className="mb-12 font-bold text-white md:text-xl">
              None of this is destiny.
            </p>

            <p className="mb-12">
              The messy middle is usually where we land. The intersection eventually gets a traffic light. The question is what we build while we are waiting for it. The flood has arrived. What comes after it is still being decided.
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
