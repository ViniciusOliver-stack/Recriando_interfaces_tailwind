export default function Home() {
  return (
    <h1 className="color-green">
      <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 prose-pre:overflow-hidden">
        <article className="prose dark:prose-invert">
          <h1>Authentication</h1>
          <p className="lead">
            You'll need to authenticate your requests to access any of the
            endpoints in the Protocol API. In this guide, we'll look at how
            authentication works. Protocol offers two ways to authenticate your
            API requests: Basic authentication and OAuth2 with a token — OAuth2
            is the recommended way.
          </p>
          <h2 id="basic-authentication" className="scroll-mt-24">
            <a
              className="group text-inherit no-underline hover:text-inherit"
              href="/authentication#basic-authentication"
            >
              Basic authentication
            </a>
          </h2>
          <p>
            With basic authentication, you use your username and password to
            authenticate your HTTP requests. Unless you have a very good reason,
            you probably shouldn't use basic auth. Here's how to authenticate
            using cURL:
          </p>
          <div className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
              <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                Example request with basic auth
              </h3>
            </div>
            <div className="group dark:bg-white/2.5">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs text-white">
                  <code className="language-bash">
                    <span>
                      <span>
                        curl https://api.protocol.chat/v1/conversations \
                      </span>
                    </span>
                    <span>
                      <span> -u username:password</span>
                    </span>
                    <span></span>
                  </code>
                </pre>
                <button
                  type="button"
                  className="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
                >
                  <span
                    aria-hidden="false"
                    className="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    >
                      <path
                        stroke-width="0"
                        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
                      ></path>
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
                      ></path>
                    </svg>
                    Copy
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0"
                  >
                    Copied!
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p>Please don't commit your Protocol password to GitHub!</p>
          <h2 id="o-auth2-with-bearer-token" className="scroll-mt-24">
            <a
              className="group text-inherit no-underline hover:text-inherit"
              href="/authentication#o-auth2-with-bearer-token"
            >
              OAuth2 with bearer token
            </a>
          </h2>
          <p>
            The recommended way to authenticate with the Protocol API is by
            using OAuth2. When establishing a connection using OAuth2, you will
            need your access token — you will find it in the{' '}
            <a href="/authentication#">Protocol dashboard</a> under API
            settings. Here's how to add the token to the request header using
            cURL:
          </p>
          <div className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
              <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
                Example request with bearer token
              </h3>
            </div>
            <div className="group dark:bg-white/2.5">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs text-white">
                  <code className="language-bash">
                    <span>
                      <span>
                        curl https://api.protocol.chat/v1/conversations \
                      </span>
                    </span>
                    <span>
                      <span> -H </span>
                      <span>"Authorization: Bearer token"</span>
                    </span>
                    <span></span>
                  </code>
                </pre>
                <button
                  type="button"
                  className="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
                >
                  <span
                    aria-hidden="false"
                    className="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    >
                      <path
                        stroke-width="0"
                        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
                      ></path>
                      <path
                        fill="none"
                        stroke-linejoin="round"
                        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
                      ></path>
                    </svg>
                    Copy
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0"
                  >
                    Copied!
                  </span>
                </button>
              </div>
            </div>
          </div>
          <p>
            Always keep your token safe and reset it if you suspect it has been
            compromised.
          </p>
          <h2 id="using-an-sdk" className="scroll-mt-24">
            <a
              className="group text-inherit no-underline hover:text-inherit"
              href="/authentication#using-an-sdk"
            >
              <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke-linecap="round"
                    aria-hidden="true"
                    className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                  >
                    <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                  </svg>
                </div>
              </div>
              Using an SDK
            </a>
          </h2>
          <p>
            If you use one of our official SDKs, you won't have to worry about
            any of the above — fetch your access token from the{' '}
            <a href="/authentication#">Protocol dashboard</a> under API
            settings, and the client library will take care of the rest. All the
            client libraries use OAuth2 behind the scenes.
          </p>
          <div className="not-prose">
            <a
              className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
              href="/sdks"
            >
              Check out our list of first-party SDKs
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 relative top-px -mr-1"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                ></path>
              </svg>
            </a>
          </div>
        </article>
      </main>
    </h1>
  )
}
