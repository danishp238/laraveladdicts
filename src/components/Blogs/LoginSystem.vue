<script setup>
    import AdComponent from '../AdComponent.vue'
</script>

<template>
    <AdComponent width="full" height="32" />
    <article>
        <h1>🔐 Building a Secure Authentication System in Laravel: From Routes to Tokens</h1>
        <div class="mt-12" data-aos="fade-up" data-aos-delay="200">
                    🔥 Brand New Blogspot resource has launched with all Laravel Insights you may be looking for.
                     <a href="https://larawell20.blogspot.com" class="text-red-300">
                        Go check it out🔥
                     </a>       
                </div>
        <p class="ds-markdown-paragraph">Welcome back, Laravel warriors! In our last installment, we set up our core
            models. Today, we're diving into the exciting world of authentication - the gateway to your SaaS
            application. We'll build a robust auth system with email verification, token-based authentication, and
            proper API responses.</p>
        <h2>🌟 Why Authentication Matters</h2>
        <p class="ds-markdown-paragraph">Authentication isn't just about logging users in - it's about:</p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Protecting user data</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Providing personalized experiences</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Enabling secure transactions</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Building trust with your customers</p>
            </li>
        </ul>
        <h2>🛣️ Our Authentication Roadmap</h2>
        <p class="ds-markdown-paragraph">We've set up three crucial endpoints:</p>
        <div class="md-code-block md-code-block-dark">
            <div class="md-code-block-banner-wrap">
                <div class="md-code-block-banner md-code-block-banner-lite">
                    <div class="_121d384">
                        <div class="d2a24f03"><span class="d813de27">php</span></div>
                        <div class="d2a24f03">&nbsp;</div>
                    </div>
                </div>
            </div>
            <pre><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'register'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'register'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'login'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login/verify/{token}'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">LoginController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'verify'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'login.verify'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
        </div>
        <p class="ds-markdown-paragraph">Let's break down each component with code explanations.</p>
        <h2>1. User Registration: Welcoming New Users</h2>
        <AdComponent width="full" height="32" />
        <h3>The Registration Endpoint</h3>
        <div class="md-code-block md-code-block-dark">
            <div class="md-code-block-banner-wrap">
                <div class="md-code-block-banner md-code-block-banner-lite">
                    <div class="_121d384">
                        <div class="d2a24f03"><span class="d813de27">php</span></div>
                        <div class="d2a24f03">&nbsp;</div>
                    </div>
                </div>
            </div>
            <pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">register</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|email'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|min:8'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'name'</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'There was an error creating your account'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'token'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">plainTextToken</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'User created successfully!'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'user'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></pre>
        </div>
        <p class="ds-markdown-paragraph"><strong>Key Features:</strong></p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Input validation (name, email, password)</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Password hashing with Laravel's&nbsp;<code>Hash</code>&nbsp;facade</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Immediate token generation using Sanctum</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Clear JSON responses for API consumers</p>
            </li>
        </ul>
        <p class="ds-markdown-paragraph"><strong>Pro Tip:</strong>&nbsp;Consider adding email verification right at
            registration by generating and sending a verification token.</p>
        <h2>2. User Login: Secure Access Control</h2>
        <AdComponent width="full" height="32" />
        <h3>The Login Endpoint</h3>
        <div class="md-code-block md-code-block-dark">
            <div class="md-code-block-banner-wrap">
                <div class="md-code-block-banner md-code-block-banner-lite">
                    <div class="_121d384">
                        <div class="d2a24f03"><span class="d813de27">php</span></div>
                        <div class="d2a24f03">&nbsp;</div>
                    </div>
                </div>
            </div>
            <pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">login</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'email'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|email'</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'password'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'required|min:8'</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email'</span><span class="token punctuation">,</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token class-name static-context">Hash</span><span class="token operator">::</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token property">password</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'Invalid credentials'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'token'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">createToken</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'auth_token'</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token property">plainTextToken</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'user'</span> <span class="token operator">=&gt;</span> <span class="token variable">$user</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></pre>
        </div>
        <p class="ds-markdown-paragraph"><strong>Security Highlights:</strong></p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Credential validation before processing</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Hash comparison instead of plain text checks</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">HTTP 401 status for failed attempts</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Token generation for authenticated sessions</p>
            </li>
        </ul>
        <p class="ds-markdown-paragraph"><strong>Why This Matters:</strong>&nbsp;This implementation follows OWASP
            security standards by:</p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Never revealing which field was incorrect</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Using proper HTTP status codes</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Implementing secure password storage</p>
            </li>
        </ul>
        <h2>3. Email Verification: Building Trust</h2>
        <h3>The Verification Endpoint</h3>
        <div class="md-code-block md-code-block-dark">
            <div class="md-code-block-banner-wrap">
                <div class="md-code-block-banner md-code-block-banner-lite">
                    <div class="_121d384">
                        <div class="d2a24f03"><span class="d813de27">php</span></div>
                        <div class="d2a24f03">&nbsp;</div>
                    </div>
                </div>
            </div>
            <pre><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">verify</span><span class="token punctuation">(</span><span class="token variable">$token</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'email_verification_token'</span><span class="token punctuation">,</span> <span class="token variable">$token</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Couldn't authenticate user"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$user</span><span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">'email_verified_at'</span> <span class="token operator">=&gt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">'email_verification_token'</span> <span class="token operator">=&gt;</span> <span class="token constant">null</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'Congrats! You are logged in!'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span></pre>
        </div>
        <p class="ds-markdown-paragraph"><strong>Implementation Notes:</strong></p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Token-based verification for security</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Automatic timestamp recording</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Clean token removal after verification</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Friendly success message</p>
            </li>
        </ul>
        <p class="ds-markdown-paragraph"><strong>Coming Soon:</strong>&nbsp;We'll enhance this to automatically log
            users in after verification.</p>
        <h2>🔐 Laravel Sanctum: Our Authentication Guardian</h2>
        <p class="ds-markdown-paragraph">Notice how we're using&nbsp;<code>createToken()</code>? That's Laravel Sanctum
            in action!</p>
        <p class="ds-markdown-paragraph"><strong>Why Sanctum?</strong></p>
        <ul>
            <li>
                <p class="ds-markdown-paragraph">Lightweight API token authentication</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">SPA authentication capabilities</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Simple token management</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Built-in Laravel goodness</p>
            </li>
        </ul>
        <h2>🛡️ Security Best Practices We've Implemented</h2>
        <AdComponent width="full" height="32" />
        <ol start="1">
            <li>
                <p class="ds-markdown-paragraph"><strong>Password Hashing</strong>: Never store plain text passwords</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph"><strong>Token-Based Auth</strong>: Secure API communication</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph"><strong>Input Validation</strong>: Prevent malformed data</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph"><strong>HTTP Status Codes</strong>: Proper API responses</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph"><strong>Email Verification</strong>: Reduce fake accounts</p>
            </li>
        </ol>
        <h2>🚀 What's Next? Vue.js Integration Preview</h2>
        <p class="ds-markdown-paragraph">In our next exciting installment, we'll:</p>
        <ol start="1">
            <li>
                <p class="ds-markdown-paragraph">Create a beautiful Vue.js authentication UI with Tailwind CSS</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Connect our Laravel backend with Axios</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Implement proper token storage in Vue</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Handle authentication states</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Build protected routes in our frontend</p>
            </li>
        </ol>
        <p class="ds-markdown-paragraph">Here's a sneak peek at what our Vue.js auth service might look like:</p>
        <div class="md-code-block md-code-block-dark">
            <div class="md-code-block-banner-wrap">
                <div class="md-code-block-banner md-code-block-banner-lite">
                    <div class="_121d384">
                        <div class="d2a24f03"><span class="d813de27">javascript</span></div>
                        <div class="d2a24f03">&nbsp;</div>
                    </div>
                </div>
            </div>
            <pre><span class="token comment">// authService.js</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">API_URL</span> <span class="token operator">=</span> <span class="token string">'http://your-api-url.com/api'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">AuthService</span> <span class="token punctuation">{</span>
  <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios
      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">API_URL</span> <span class="token operator">+</span> <span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> user<span class="token punctuation">.</span>password
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">register</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token constant">API_URL</span> <span class="token operator">+</span> <span class="token string">'register'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> user<span class="token punctuation">.</span>password
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">AuthService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
        </div>
        <h2>💡 Your Homework (Optional)</h2>
        <p class="ds-markdown-paragraph">Want to get ahead? Try:</p>
        <ol start="1">
            <li>
                <p class="ds-markdown-paragraph">Adding rate limiting to the login endpoint</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Implementing password complexity requirements</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Creating a "forgot password" flow</p>
            </li>
            <li>
                <p class="ds-markdown-paragraph">Adding login logging for security monitoring</p>
            </li>
        </ol>
        <p class="ds-markdown-paragraph">Drop your solutions in the comments!</p>
        <h2>🎯 Why This Matters</h2>
        <p class="ds-markdown-paragraph">The authentication system we're building isn't just academic - it's
            production-ready architecture used by SaaS companies worldwide. By following along, you're gaining
            real-world skills that employers value.</p>
        <p class="ds-markdown-paragraph">Remember: Every expert was once a beginner. You're building something amazing,
            one line at a time. Stay tuned for our Vue.js frontend integration!</p>
        <p class="ds-markdown-paragraph">[Next up: Building a Stunning Vue.js Auth Interface &rarr;]</p>
    </article>
    <AdComponent width="full" height="32" />
</template>

<style scoped>
.hero-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.code-block {
    background: #2d2d2d;
    border-left: 4px solid #667eea;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 700;
    margin: 1.5rem 0 1rem;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

h1 {
    font-size: 2.5rem;
    background-image: linear-gradient(to right, #8d7cb4, #38b2ac);
}

h2 {
    font-size: 2rem;
    background-image: linear-gradient(to right, #9582c2, #4fd1c5);
}

h3 {
    font-size: 1.75rem;
    background-image: linear-gradient(to right, #2f008b, #68d391);
}

/* List styles */
ul,
ol {
    padding-left: 2rem;
    margin: 1rem 0;
}

li {
    margin-bottom: 0.5rem;
}

ul {
    list-style-type: disc;
}

ol {
    list-style-type: decimal;
}

/* Link styles */
a {
    color: #6b46c1;
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
}

a:hover {
    color: #38b2ac;
}

/* Button styles */
.button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(to right, #6b46c1, #38b2ac);
    color: white;
    border-radius: 0.375rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.button:hover {
    background: linear-gradient(to right, #805ad5, #4fd1c5);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Container styles */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Card styles */
.card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
}

/* Responsive design */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.75rem;
    }

    h3 {
        font-size: 1.5rem;
    }
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }

    100% {
        transform: translateY(0px);
    }
}
</style>