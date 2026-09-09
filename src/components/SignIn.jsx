import { useState } from "react";

export default function SignIn({ onSignIn }) {
    const [stayLoggedIn, setStayLoggedIn] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username");
        const password = formData.get("password");

        if (username === "admin" && password === "ddu2026") {
            onSignIn(stayLoggedIn);
            return;
        }

        setError("That username or password is not correct.");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-slate-100">
            <div className="flex h-0 w-full shrink-0 items-start justify-between" aria-hidden="true">
                <div className="-ml-24 -mt-24 h-72 w-72 shrink-0 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="-mr-24 -mt-12 h-56 w-56 shrink-0 rounded-full bg-emerald-400/15 blur-3xl" />
            </div>

            <section className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.07] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10">
                <div className="mb-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-slate-950 shadow-lg shadow-cyan-300/20">
                        D
                    </div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Welcome back</p>
                    <h1 className="text-3xl font-bold tracking-tight text-white">Sign in to your account</h1>
                    <p className="mt-3 text-sm leading-6 text-slate-400">Enter your details to continue where you left off.</p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="username">
                            Username
                        </label>
                        <input
                            autoComplete="username"
                            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            required
                            type="text"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="password">
                            Password
                        </label>
                        <input
                            autoComplete="current-password"
                            className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            required
                            type="password"
                        />
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-300">
                        <input
                            checked={stayLoggedIn}
                            className="h-4 w-4 accent-cyan-300"
                            onChange={(event) => setStayLoggedIn(event.target.checked)}
                            type="checkbox"
                        />
                        <span>Stay logged in</span>
                    </label>

                    {error && <p className="text-sm font-medium text-rose-300" role="alert">{error}</p>}

                    <button
                        className="w-full rounded-xl bg-cyan-300 px-4 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-300/20 transition hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.99]"
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>
            </section>

            <div className="flex h-0 w-full shrink-0 items-end justify-end" aria-hidden="true">
                <div className="-mb-32 -mr-24 h-80 w-80 shrink-0 rounded-full bg-emerald-400/15 blur-3xl" />
            </div>
        </main>
    );
}
