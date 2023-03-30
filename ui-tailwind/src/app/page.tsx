export default function Home() {
  return (
    <h1 className="color-green">
      <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 prose-pre:overflow-hidden">
        <h1 id="authentication">Authentication</h1>
        <p>You&#39;ll need authentication your requests to access any of the endpoints in the Protocol API.</p>
        <h2 id="basic-authentication">Basic authentication</h2>
        <p>With basic authentication, you use your username and password to authenticate your HTTP requests.</p>
        <pre><code className="language-bash">curl https://api.protocol.chat/v1/conversations \ -u username:password</code></pre>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ex rerum voluptatem quis, sequi illo cupiditate doloribus et a, laboriosam sunt nesciunt. Neque sapiente consectetur obcaecati tenetur. Vero, provident libero?
          Quidem nobis hic quas maiores dolorum delectus eaque laboriosam possimus tempore inventore odit consequatur, quis magnam quo ipsam! Harum neque officiis esse rerum! Ipsam, quam totam expedita quidem perferendis distinctio?
          Quaerat explicabo cumque, quis adipisci sapiente totam doloremque recusandae. Qui dolores perferendis minus voluptatibus. Cumque itaque officia asperiores cupiditate incidunt facilis consequatur possimus commodi rem. Dignissimos quibusdam quo fugit impedit!
          Maiores voluptates dolores reiciendis labore, soluta dolorum officia? Corporis blanditiis sint repellendus nemo nesciunt, delectus harum odit architecto enim vel est quidem saepe quam. Deserunt non dolorum dolore perspiciatis ipsam.
          Corrupti officiis, molestias magni recusandae quasi iusto similique omnis vel soluta voluptates, hic mollitia magnam eius illum totam neque nihil possimus consequuntur! Veniam eum, iure sequi culpa neque explicabo corporis.
        </p>
      </main>
    </h1>
  )
}
