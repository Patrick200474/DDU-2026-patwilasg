const stats = [
	{ label: "Overall progress", value: "68%", detail: "4 of 6 milestones" },
	{ label: "Next deadline", value: "12 days", detail: "Prototype review" },
	{ label: "Open tasks", value: "08", detail: "3 due this week" },
];

const tasks = [
	{ title: "Finish interaction flow", tag: "Design", color: "bg-cyan-300 text-slate-950" },
	{ title: "Prepare user test", tag: "Research", color: "bg-emerald-300 text-slate-950" },
	{ title: "Review project notes", tag: "Planning", color: "bg-slate-700 text-slate-200" },
];

export default function FrontPage({ onSignOut }) {
	return (
		<main className="flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
			<div className="flex h-0 shrink-0 justify-between" aria-hidden="true">
				<div className="-ml-20 -mt-32 h-72 w-72 shrink-0 rounded-full bg-cyan-400/15 blur-3xl" />
				<div className="-mr-24 -mt-20 h-64 w-64 shrink-0 rounded-full bg-emerald-400/10 blur-3xl" />
			</div>

			<div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:px-10 lg:px-12">
				<header className="flex items-center justify-between border-b border-white/10 pb-6">
					<div className="flex items-center gap-4">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">D</div>
						<div>
							<p className="text-sm font-bold tracking-wide text-white">DDU 2026</p>
							<p className="text-xs text-slate-500">Project workspace</p>
						</div>
					</div>
					<button className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-cyan-300/50 hover:text-white" onClick={onSignOut} type="button">
						Sign out
					</button>
				</header>

				<section className="py-12 sm:py-16">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Good to see you</p>
					<div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
						<div>
							<h1 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Build something worth presenting.</h1>
							<p className="mt-4 max-w-xl text-base leading-7 text-slate-400">Keep your team aligned, move the project forward, and make the next review count.</p>
						</div>
						<button className="w-fit rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:bg-cyan-200" type="button">Open project</button>
					</div>
				</section>

				<section className="grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3">
					{stats.map((stat) => (
						<div className="border-white/10 sm:border-l sm:pl-5 first:border-0 first:pl-0" key={stat.label}>
							<p className="text-sm text-slate-500">{stat.label}</p>
							<p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
							<p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
						</div>
					))}
				</section>

				<section className="grid gap-8 py-10 lg:grid-cols-[1.3fr_0.7fr]">
					<div>
						<div className="mb-5 flex items-center justify-between">
							<h2 className="text-xl font-bold text-white">Next up</h2>
							<button className="text-sm font-semibold text-cyan-300 hover:text-cyan-200" type="button">View all</button>
						</div>
						<div className="space-y-3">
							{tasks.map((task) => (
								<div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4" key={task.title}>
									<div className="flex min-w-0 items-center gap-4">
										<span className="h-3 w-3 shrink-0 rounded-full border-2 border-cyan-300" />
										<p className="truncate font-medium text-slate-200">{task.title}</p>
									</div>
									<span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${task.color}`}>{task.tag}</span>
								</div>
							))}
						</div>
					</div>

					<aside className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Focus area</p>
						<h2 className="mt-4 text-2xl font-bold text-white">Prototype review</h2>
						<p className="mt-3 text-sm leading-6 text-slate-400">Your next milestone is coming up. Make sure the core flow is ready for feedback.</p>
						<div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-900/70">
							<div className="h-full w-[68%] rounded-full bg-cyan-300" />
						</div>
						<p className="mt-2 text-right text-xs font-semibold text-cyan-200">68% complete</p>
					</aside>
				</section>
			</div>
		</main>
	);
}
